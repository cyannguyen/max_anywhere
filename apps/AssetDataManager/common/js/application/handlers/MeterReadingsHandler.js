/*
 * Licensed Materials - Property of IBM
 * "Restricted Materials of IBM"
 *
 * 5725-M39
 *
 * (C) COPYRIGHT IBM CORP. 2013,2020 All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with
 * IBM Corp. 
 *
 */

define("application/handlers/MeterReadingsHandler", 
	   [ "dojo/_base/declare",
	     "dojo/_base/array",
	     "dojo/number",
	     "platform/handlers/_ApplicationHandlerBase",
	     "platform/model/ModelService",
	     "application/handlers/CommonHandler",
	     "dojo/promise/all",
		 "platform/translation/MessageService",
		 "platform/logging/Logger",
		 "platform/util/PlatformConstants",
		 "dojo/Deferred",
		 "platform/exception/PlatformRuntimeException",
		 "platform/auth/UserRolesManager",
		 "platform/util/DateTimeUtil",
	     "application/business/AssetMeterObject",
		 "platform/translation/SynonymDomain",
		 "dojo/date/stamp"
	     ],
function(declare, arrayUtil, numberUtil, ApplicationHandlerBase, ModelService, CommonHandler, all, MessageService, Logger, PlatformConstants, Deferred, PlatformRuntimeException, UserRolesManager, DateTimeUtil, AssetMeterObject, SynonymDomain, dateISOFormatter ) {
	// store our meter type for this view, we reference it multiple times
	var meterType = null;
	var readingType = null;
	var domainId = null;
	
	
	
	
	return declare( [ApplicationHandlerBase], {
		
/**@memberOf application.handlers.MeterReadingsHandler */
		setTempAssetMeter: function(eventContext) {
			var self = this;
			//var deferred = new Deferred();
			var tempAssetMeterSet = this.application.getResource('tempAssetMeter');
			var assetMeter = this.application.getResource('asset.assetmeterlist').getCurrentRecord();
			readingType = SynonymDomain.resolveToInternal(this.application.getResource("readingtypes"), assetMeter.get('readingtype'));
			meterType = SynonymDomain.resolveToInternal(this.application.getResource("metertypes"), assetMeter.get('metertype'));
			
			tempAssetMeterSet.clearFilterAndSort();
			
			tempAssetMeterSet.filter(" metername = $1 && assetnum = $2 ", assetMeter['metername'], assetMeter['assetnum']);
			
			if (tempAssetMeterSet.count() <= 0 ) {
				
				var aMeter = tempAssetMeterSet.createNewRecord(); 
				aMeter.setDateValue('lastreadingdate', assetMeter.getAsDateOrNull('lastreadingdate'));
				aMeter.set('metername', assetMeter['metername']);
				aMeter.set('meterdesc', assetMeter['meterdesc']);
				aMeter.set('lastreading', assetMeter['lastreading']);
				aMeter.set('metertype', assetMeter['metertype']);
				aMeter.set('domainid', assetMeter['domainid']);
				aMeter.set('readingtype', assetMeter['readingtype']);
				aMeter.set('rollover', assetMeter['rollover']);		
				if (assetMeter.get('localLastReadingDate') && ((!assetMeter['lastreadingdate']) ||
						(assetMeter.get('localLastReadingDate') > assetMeter['lastreadingdate']))){
					aMeter.set('lastreading', assetMeter.get('localLastReading'));
					aMeter.setDateValue('lastreadingdate', assetMeter.getAsDateOrNull('localLastReadingDate'));
				} else {
					aMeter.set('lastreading', assetMeter['lastreading']);
					aMeter.setDateValue('lastreadingdate', assetMeter.getAsDateOrNull('lastreadingdate'));
				}
				aMeter.set('newreading', null);
				aMeter.set('newreadinglookup', null);
				aMeter.set('newreadingdate', null);
				aMeter.set('remarks', null);
				aMeter.set('inspector', null);
				if (meterType == 'CONTINUOUS') {
					aMeter.set('isdelta', (readingType == 'DELTA'));
					aMeter.set('dorollover', false);
				}
				// initialize user-editable fields as editable = false
				self._setFieldsEditable(aMeter, false);
				
			}
			// we do not show the footer until a newreading is set
			self.displayFooter(eventContext, false);
			// make tempAssetMeter available
			tempAssetMeterSet.resourceID = 'tempAssetMeter';
			self.application.addResource(tempAssetMeterSet);
			//deferred.resolve(tempAssetMeterSet);
			//return deferred.promise;
		},

		cancelEntry: function(eventContext) {
			Logger.trace('MeterReadingHandler - Cancel Clicked');
			eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
		},

		assetMeterPromise: function(assetnum, metername, siteid) {
			var deferred = new Deferred();
			
			var assetMetersPromise = ModelService.all('assetMeters', null, null, false);
			assetMetersPromise.then(function(assetMeterSet){
				assetMeterSet.filter("assetnum == $1 && metername == $2 && siteid == $3 && active == true", assetnum, metername, siteid);
				deferred.resolve(assetMeterSet);
			});
			
			return deferred.promise;
			//return ModelService.filtered('assetMeters', null, [{'assetnum': assetnum, 'metername': metername, 'siteid': siteid, 'active':true}], 1000, false, true);
		},
		
		locationMeterPromise: function(location, metername, siteid) {
			var deferred = new Deferred();
			
			var locationMetersPromise = ModelService.all('locationMeters', null, null, false);
			locationMetersPromise.then(function(locationMetersSet){
				locationMetersSet.filter("location == $1 && metername == $2 && siteid == $3 && active == true", location, metername, siteid);
				deferred.resolve(locationMetersSet);
			});
			
			return deferred.promise;
			//return ModelService.filtered('locationMeters', null, [{'location': location, 'metername': metername, 'siteid': siteid, 'active':true}], 1000, false, true);
		},
		
		commitEntry: function(eventContext) {	
			var assetResource = CommonHandler._getAdditionalResource(eventContext,"asset");
			var assetRecord = assetResource.getCurrentRecord();
			var assetMeter = assetRecord.assetmeterlist.getCurrentRecord();
			var tempAssetMeter = this.application.getResource('tempAssetMeter').getCurrentRecord();
			assetMeter.set('metername', assetMeter.getPendingOrOriginalValue('metername'));
			assetMeter.set('linearassetmeterid', assetMeter.getPendingOrOriginalValue('linearassetmeterid'));
			assetMeter.set('newreading', tempAssetMeter.getPendingOrOriginalValue('newreading'));
			assetMeter.set('newreadingdate', tempAssetMeter.getPendingOrOriginalValue('newreadingdate'));
			assetMeter.set('inspector', tempAssetMeter.getPendingOrOriginalValue('inspector'));
			assetMeter.set('remarks', tempAssetMeter.getPendingOrOriginalValue('remarks'));
			
			//need to mark them as modified, otherwise existing data does not get passed.
			assetMeter.__attributeModified('metername');
			assetMeter.__attributeModified('linearassetmeterid');
			assetMeter.__attributeModified('newreading');
			assetMeter.__attributeModified('newreadingdate');
			assetMeter.__attributeModified('inspector');
			assetMeter.__attributeModified('remarks');
			//var self = this;
			var lastReadingVal = this.getLastReading(meterType, assetMeter);
			assetMeter.set('localLastReading', lastReadingVal);
			assetMeter.set('localLastReadingDate', tempAssetMeter['newreadingdate']);
			ModelService.save(assetResource).then(function() {
				eventContext.ui.hideCurrentView();
			});
		},
		
		getLastReading: function(meterType,assetMeter){
			var lastReadingVal = 0;
			if ((meterType == 'CONTINUOUS') && (assetMeter.getPendingOrOriginalValue('isdelta') == true)){
				var localLastReading = assetMeter['localLastReading'] ? assetMeter['localLastReading'] : '0';
				lastReadingVal = numberUtil.parse(assetMeter['newreading']) + numberUtil.parse(localLastReading);
			} else {
				lastReadingVal = assetMeter['newreading'];
			}
			return lastReadingVal;
		},
				
		// this is our full validation before committing a record
		validateNewMeterReadingEntry: function(eventContext) {
			var currentMeter = eventContext.getCurrentRecord();
			var newReading = currentMeter.getPendingOrOriginalValue('newreading');		
			var lastReading = currentMeter.getPendingOrOriginalValue('lastreading');			
			var doRollover = currentMeter.getPendingOrOriginalValue('dorollover');
			var isDelta = currentMeter.getPendingOrOriginalValue('isdelta');
			
			if ((newReading == "") || (newReading == null)) {
				throw new PlatformRuntimeException('invalidNewReading');
			}
			
			// we call these again because we may not trigger a validate between entering/changing a
			// value and pressing SAVE.
			this._validateNewReadingValue(eventContext);
			this.validateNewReadingDate(eventContext);
			
			if (meterType == 'CONTINUOUS') {
				if (currentMeter.get('rollover') != null) {
					if((numberUtil.parse(newReading) < numberUtil.parse(lastReading)) && !doRollover && !isDelta) {
						if (readingType == 'DELTA') {
							throw new PlatformRuntimeException('newReadingLowerThanNoRollover');	
						} else {
							throw new PlatformRuntimeException('newReadingLowerThan');	
						}										
					}
				} else {
					if((numberUtil.parse(newReading) < numberUtil.parse(lastReading)) && !isDelta) {
						throw new PlatformRuntimeException('newReadingLowerThanNoRollover');			
					}					
				}
			}
		},
		
		validateNewReadingDate: function(eventContext) {
			var currentMeter = eventContext.getCurrentRecord();
			var newreadingdate = currentMeter.getPendingOrOriginalValue('newreadingdate');
			
			if (this._isDateInFuture(newreadingdate)) {
				throw new PlatformRuntimeException('newReadingInFuture');	
			}
		},
		
		validateNewReading: function(eventContext) {
			// validate newreading value
			this._validateNewReadingValue(eventContext);
			// handle field metadata
			this._afterNewReadingChange(eventContext);
			
		},
		
		_validateNewReadingValue: function(eventContext) {
			var currentMeter = eventContext.getCurrentRecord();
			var newReading = currentMeter.getPendingOrOriginalValue('newreading');

			if (meterType == 'CHARACTERISTIC') {
				return;
			}
			
			if ((newReading != null) && (newReading != "")) {
				if (isNaN(numberUtil.parse(newReading))) {
					throw new PlatformRuntimeException('newReadingNaN', [newReading]);
				}		
			}
				
			if (meterType == 'CONTINUOUS') {
				if ((numberUtil.parse(newReading) < 0)) {
					throw new PlatformRuntimeException('newReadingBelowZero',[newReading]);
				}
				var rollover = currentMeter.get('rollover');
				if (rollover && newReading > rollover) {
					throw new PlatformRuntimeException('readingsCannotExceedRollover', [newReading]);
				}
			}
		},
		
		_isDateInFuture: function(readingdate) {
			if (readingdate != null) {
				var newReadingDateTime = DateTimeUtil.zeroSecondsAndMilliseconds(readingdate);
				var currentDateTime = DateTimeUtil.zeroSecondsAndMilliseconds(this.application.getCurrentDateTime());
				
				if (newReadingDateTime > currentDateTime) {
					return true;
				}	
			}		
			return false;
		},
		
		_setFieldsEditable: function(meter, isEditable) {		
			meter.getRuntimeFieldMetadata('newreadingdate').set('readonly', !isEditable);
			meter.getRuntimeFieldMetadata('inspector').set('readonly', !isEditable);
			meter.getRuntimeFieldMetadata('remarks').set('readonly', !isEditable);
			meter.getRuntimeFieldMetadata('inspector').set('readonly', !isEditable);

			// gauge and characteristic do not have these fields to set
			if (meterType == 'CONTINUOUS') {
				meter.getRuntimeFieldMetadata('isdelta').set('readonly', !isEditable);
				meter.getRuntimeFieldMetadata('dorollover').set('readonly', !isEditable);
								
				if ((readingType == 'ACTUAL') && (meter.get('rollover') != null)) {
					meter.getRuntimeFieldMetadata('dorollover').set('readonly', !isEditable);
				} else {
					meter.getRuntimeFieldMetadata('dorollover').set('readonly', true);
				}				
				
			}
		},
		
		_afterNewReadingChange: function(eventContext) {
			var readingEntry = eventContext.getCurrentRecord();
			var viewId = eventContext.ui.getCurrentViewControl().id;
			if(viewId == 'AssetDataManager.AssetMeterDetailView') {
				var newreading = readingEntry.getPendingOrOriginalValue('newreading');
				var hasNewValue = (( newreading != null ) && (newreading != "")) ? true : false;

				readingEntry.getRuntimeFieldMetadata('newreadingdate').set('required', hasNewValue);
				readingEntry.getRuntimeFieldMetadata('inspector').set('required', hasNewValue);
				
				if(hasNewValue) {
					// we may have a value set already, which may have been entered manually
					if (readingEntry.getAsDateOrNull('newreadingdate') == null) {
						readingEntry.setDateValue('newreadingdate', this.application.getCurrentDateTime());	
					}
					readingEntry.set('inspector', UserRolesManager.getCurrentUser().toUpperCase());
				} else {
					readingEntry.setNullValue('newreadingdate');
					readingEntry.setNullValue('inspector');
					
					// reset isDelta and Rollover back to defaults
					if (meterType == 'CONTINUOUS') {
						readingEntry.set('isdelta', (readingType == 'DELTA'));
					}
				}
				
				this._setFieldsEditable(readingEntry, hasNewValue);
				this.displayFooter(eventContext, hasNewValue);
			}
		},
		
		validateNewReadingFromLookup: function(eventContext) {
			var readingEntry = eventContext.getCurrentRecord();
			var newreading = readingEntry.getPendingOrOriginalValue('newreadinglookup');
			
			readingEntry.set('newreading', newreading);
			
			var hasNewValue = (( newreading != null ) && (newreading != "")) ? true : false;
			
			readingEntry.getRuntimeFieldMetadata('newreadingdate').set('required', hasNewValue);
			readingEntry.getRuntimeFieldMetadata('inspector').set('required', hasNewValue);			
			var viewId = eventContext.ui.getCurrentViewControl().id;
			
			if(hasNewValue) {
				readingEntry.set('newreading', newreading);
				if (readingEntry.getAsDateOrNull('newreadingdate') == null) {
					readingEntry.setDateValue('newreadingdate', this.application.getCurrentDateTime());	
				}
				readingEntry.set('inspector', UserRolesManager.getCurrentUser().toUpperCase());
			}
			else {
				readingEntry.setNullValue('newreading');
				readingEntry.setNullValue('newreadingdate');
				readingEntry.setNullValue('inspector');
			}
			
			this._setFieldsEditable(readingEntry, hasNewValue);
			
			if (viewId == 'AssetDataManager.AssetMeterDetailView') {
				this.displayFooter(eventContext, hasNewValue);
			}
		},

		displayFooter: function(eventContext, display) {
			var meterDetailView = eventContext.ui.getViewFromId(eventContext.ui.transitionInfo.id);
			meterDetailView.setFooterDisplay(display);
		},
		
		showNewReading: function(eventContext) {
			var currentMeter = eventContext.getCurrentRecord();
			var domainid = currentMeter.get('domainid');
			var hasDomain = (domainid && domainid != undefined && domainid != '') ? true : false;
			eventContext.setDisplay(!hasDomain);
		},
		
		showNewReadingWithLookup: function(eventContext) {
			var tempAssetMeter = eventContext.getCurrentRecord();
			var domainid = tempAssetMeter.get('domainid');
			var hasDomain = (domainid && domainid != undefined && domainid != '') ? true : false;
			eventContext.setDisplay(hasDomain);
		},
		
		showIsDelta: function(eventContext) {	
			var currentMeter = eventContext.getCurrentRecord();
			if (meterType == 'CONTINUOUS') {
				if (readingType == 'DELTA') {
					eventContext.setDisplay(true);
				} else if (!currentMeter.get('rollover')) {
					eventContext.setDisplay(true);
				} else {
					eventContext.setDisplay(false);
				}
			} else {
				eventContext.setDisplay(false);
			}
		},
		
		showDoRollover: function(eventContext) {
			var currentMeter = eventContext.getCurrentRecord();
			if (meterType == 'CONTINUOUS') {
				if (readingType == 'DELTA') {
					eventContext.setDisplay(false);
				} else if (!currentMeter.get('rollover')){
					eventContext.setDisplay(false);
				} else {
					eventContext.setDisplay(true);
				}
			} else {
				eventContext.setDisplay(false);
			}
		},
		
		filterDomainIdForLookup: function(eventContext) {
			var alnDomainSet = null;
			var tempAssetMeter = this.application.getResource('tempAssetMeter').getCurrentRecord();
			if(tempAssetMeter) {
				domainId = tempAssetMeter.domainid;
				Logger.log("domainid from meter: " + domainId);
		        if (domainId) {	
					alnDomainSet = eventContext.getResource();
					alnDomainSet.clearFilterAndSort();
					alnDomainSet.filter("domainid == $1", domainId);
					Logger.log("filtered domains by: " + domainId);
				}
			}
		},
		
		hideAssetMeterMenu : function(eventContext){
			var asset = eventContext.getCurrentRecord();
			var assetMeters = asset.getLoadedModelDataSetOrNull('assetmeterlist');
			if(assetMeters && assetMeters.count() > 0){
				eventContext.setDisplay(true);
			} else {
				eventContext.setDisplay(false);
			}
		},
		
		renderAssetMeters: function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = assetSet.getCurrentRecord();
			var assetMeters = asset.assetmeterlist;
			if (assetMeters.count()>0){
				arrayUtil.forEach(assetMeters.data, function(assetMeter){
					if(assetMeter['localLastReading'] == null || assetMeter['localLastReading'] < assetMeter['lastreading']){
						assetMeter.set('localLastReading', assetMeter['lastreading']);
						assetMeter.set('localLastReadingDate', assetMeter['lastreadingdate']);
					}
				});	
			}
		}

	});
	
	
});
