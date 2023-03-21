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

define("application/handlers/SRDetailHandler", 
	   [ "dojo/_base/declare",
	     "dojo/_base/array",
		  "dojo/_base/lang",
		  "dojo/topic",
	     "platform/handlers/_ApplicationHandlerBase",
	     "platform/comm/CommunicationManager",
	     "application/business/ServiceRequestObject",
	     "application/business/SynonymDomain",
	     "platform/model/ModelService",
	     "platform/translation/MessageService",
	     "application/handlers/CommonHandler",
	     "application/business/FieldUtil",
	     "platform/exception/PlatformRuntimeException",
	     "platform/warning/PlatformRuntimeWarning",
	     "platform/auth/UserManager",
	     "platform/util/PlatformConstants",
	     "application/business/WpEditSettings",
	     "platform/util/AsyncAwareMixin",
	     "platform/store/_ResourceMetadataContext",
	     "platform/logging/Logger",
	     "platform/geolocation/GeoLocationServiceHelper"],
function(declare, arrayUtil, lang, topic, ApplicationHandlerBase, CommunicationManager, ServiceRequest, SynonymDomain, ModelService, MessageService, CommonHandler, FieldUtil, PlatformRuntimeException, PlatformRuntimeWarning, UserManager, PlatformConstants, WpEditSettings, AsyncAwareMixin, ResourceMetaData, Logger,  GeoLocationServiceHelper) {
	var listSizeArray = ['tasklistsize', 'assignmentlistsize', 'materiallistsize', 'toollistsize', 'actuallaborlistsize', 'actualmateriallistsize', 'actualtoollistsize', 'workloglistsize', 'multiassetloclistsize', 'attachmentssize'];
	var attributes =    ["tasklist", "assignmentlist", "materiallist", "toollist", "actuallaborlist", "actualmateriallist", "actualtoollist", "workloglist", "multiassetloclist", "attachments"];
	var loadingLists = false;
	return declare( [ApplicationHandlerBase, AsyncAwareMixin],  {
		
		//this attribute was inserted to set the location back when canceling 
		curLocation:null,
		curLocationDesc:null,
		currLocationld:null,
		curAsset:null,
		curAssetDesc:null,
		curAssetld:null,
		originalServiceRequest:null,  //used to mark the orig service request as having followup when the followup is saved
		resolveLocation:null,
		fromErrorLink:null,
		
/**@memberOf application.handlers.SRDetailHandler */
		initAssetField: function(eventContext){
			var actualServiceRequest = CommonHandler._getAdditionalResource(eventContext,"serviceRequest").getCurrentRecord();
			var oslcwpeditsetting = CommonHandler._getAdditionalResource(eventContext,"oslcwpeditsetting");
			var domainAssetstatus = CommonHandler._getAdditionalResource(eventContext,'domainwostatus');
			
			CommonHandler._clearFilterForResource(eventContext,oslcwpeditsetting);

			if(actualServiceRequest == null){
				return;
			}
			
			actualServiceRequest.getRuntimeFieldMetadata('asset').set('readonly',!WpEditSettings.shouldEditAsset(oslcwpeditsetting, 
					SynonymDomain.resolveToInternal(domainAssetstatus,actualServiceRequest.get('status')), actualServiceRequest.get('orgid')));
			
			//set asset description
			if(!actualServiceRequest.get('assetdesc') && actualServiceRequest.get('asset') != null){
				actualServiceRequest.set('assetdesc',actualServiceRequest.get('maxassetdesc'));				
			}
		},
		
		initLocationField: function(eventContext){
			var actualServiceRequest = CommonHandler._getAdditionalResource(eventContext,"serviceRequest").getCurrentRecord();
			var oslcwpeditsetting = CommonHandler._getAdditionalResource(eventContext,"oslcwpeditsetting");
			var domainAssetstatus = CommonHandler._getAdditionalResource(eventContext,'domainwostatus');
			
			CommonHandler._clearFilterForResource(eventContext,oslcwpeditsetting);

			if(actualServiceRequest == null){
				return;
			}
			actualServiceRequest.getRuntimeFieldMetadata('location').set('readonly',!WpEditSettings.shouldEditLocation(oslcwpeditsetting, 
					SynonymDomain.resolveToInternal(domainAssetstatus,actualServiceRequest.get('status')), actualServiceRequest.get('orgid')));			
			
		},
		
		initGPSField: function(eventContext){
			var currSR = CommonHandler._getAdditionalResource(eventContext,"serviceRequest").getCurrentRecord();
			var gpsLocation = currSR.get('gpsLocation');
			// we only want to set the default on the first init.  If the user changes it and navigates to another screen, we don't want to re-init the value.
			if (gpsLocation == null) {
				currSR.set('gpsLocation', true);
			}
		},
		
		initEditLocationView: function(eventContext){
			var currSR = CommonHandler._getAdditionalResource(eventContext,"serviceRequest").getCurrentRecord();
			
			this.curLocation = currSR.get("location");
			this.curLocationDesc = currSR.get("locationdesc");
			this.currLocationld = currSR.get("locationld");
			this.curAsset = currSR.get('asset');
			this.curAssetDesc = currSR.get('assetdesc');
			this.curAssetld = currSR.get('assetld');			
		},
		
		initMyReportedSR: function(eventContext){
			var SRSet = CommonHandler._getAdditionalResource(eventContext,"serviceRequest");
			if (SRSet.count() > 0) {
				SRSet.setCurrentIndex(0);	
			}

//			if (this.fromErrorLink)	{
//				var view = eventContext.application.ui.getViewFromId('ServiceRequest.MyReportedSR');
//				view.setQueryBaseIndexByQuery(PlatformConstants.ERRORED_QUERYBASE).then(function(){
////					eventContext.ui.show("ServiceRequest.MyReportedSR");
//					self.refreshList();
//					return;
//				}).otherwise(function(err){
//					Logger.trace(err.toString() + " There is an error here");  
//				});
//				this.fromErrorLink = false;
//			}
		},
		initActionPanel: function(eventContext){
			this.fromErrorLink = false;
		},

		
		initEditAssetView: function(eventContext){
			var currSR = CommonHandler._getAdditionalResource(eventContext,"serviceRequest").getCurrentRecord();
				
			this.curAsset = currSR.get('asset');
			this.curAssetDesc = currSR.get('assetdesc');
			this.curAssetld = currSR.get('assetld');
		
			this.curLocation = currSR.get('location');
			this.curLocationDesc = currSR.get('locationdesc');
			this.currLocationld = currSR.get("locationld");
			
		},
		
		errorCheck : function(eventContext){
			var filter = {'_errored': 1};
			return ModelService.filtered('serviceRequest', null, filter, 1000, false, true, null, true);
		},

		
		hideShowErrorLink : function(eventContext){
			var self = this;
			if (self.errorWatch) {
				self.errorWatch.remove();
			}
			
			self.errorWatch = topic.subscribe(PlatformConstants.DATA_REFRESH_TOPIC + '/serviceRequest',function(fireEvent){
            	self.errorCheck(eventContext).then(function(errorSet){
    				eventContext.setLabel( MessageService.createResolvedMessage('errorExists')) ;
    				
    				if (errorSet.count()>0){
    					self.setError(eventContext, true);
    					eventContext.setLabel( MessageService.createResolvedMessage('errorExists')) ;
    					errorSet.resourceID = 'serviceRequest';
    					eventContext.application.addResource(errorSet);
    					eventContext.setDisplay(true);
    					
    				} else {
    					self.setError(eventContext, false);
    					eventContext.setDisplay(false);	
    				}
    				var  errorRes = eventContext.application.getResource("errorResource");
    				ModelService.save(errorRes).then(function(){
    					return;	
    				});
    			});
            });		
            
			//if topic already processed, check if error exists
			if (this.getError(eventContext)){
				eventContext.setLabel( MessageService.createResolvedMessage('errorExists'));
				eventContext.setDisplay(true);
			} else {
				eventContext.setDisplay(false);
			}
		},	
		
		showErrorPage : function(eventContext){
			this.fromErrorLink = true;
			var view = eventContext.application.ui.getViewFromId('ServiceRequest.MyReportedSR');
			if (!view.queryBaseIndexResource){
			    view.setupQueryBaseResource();
			} 
			view.setQueryBaseIndexByQuery(PlatformConstants.ERRORED_QUERYBASE);
			eventContext.ui.show("ServiceRequest.MyReportedSR");
		},
	
		setError : function(eventContext,haserror){
			var  errorRes = eventContext.application.getResource("errorResource").getCurrentRecord();
			errorRes.set('hasError',haserror);
		},
		
		getError : function(eventContext){
			var  errorRes = eventContext.application.getResource("errorResource").getCurrentRecord();
			return errorRes.get('hasError');
		},
		
		handleBackButtonClickEditAssetView: function(eventContext){
			//cleanupEditAssetView method is invoked as callback of hideCurrentView
			eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
		},
		
		cleanupEditAssetView: function(eventContext){
			//Invoked by back button or Cancel Edit button
			var serviceRequest = CommonHandler._getAdditionalResource(eventContext,"serviceRequest").getCurrentRecord();
			
			var readOnlyAsset = serviceRequest.getRuntimeFieldMetadata('asset').get('readonly');
			if (!readOnlyAsset) {
				serviceRequest.set("asset",this.curAsset);
				serviceRequest.set("assetdesc",this.curAssetDesc);
				serviceRequest.set("assetld",this.curAssetld);
			}
			
			var readOnlyLoc = serviceRequest.getRuntimeFieldMetadata('location').get('readonly');
			if (!readOnlyLoc) {
				serviceRequest.set("location",this.curLocation);
				serviceRequest.set("locationdesc",this.curLocationDesc);
				serviceRequest.set("locationld",this.currLocationld);
			}
		},

		filterLocationForLookup: function(eventContext){

			var serviceRequestSet = CommonHandler._getAdditionalResource(eventContext,"serviceRequest");
			
			//save the current location  to reset case user cancel
			//this was done to fix the issue when making a look up and cancel the value in SR detail location was different of showed in the look up
			if(serviceRequestSet.getCurrentRecord() != null){
				this.curLocation = serviceRequestSet.getCurrentRecord().get("location");
			//	this.curLocationDesc = serviceRequestSet.getCurrentRecord().get("locationdesc");
			//	this.currLocationld = serviceRequestSet.getCurrentRecord().get("locationld");
			}
			
			// var domainAssetstatus = CommonHandler._getAdditionalResource(eventContext,'domainAssetstatus');
			var additionallocations = CommonHandler._getAdditionalResource(eventContext,'additionallocations');
			CommonHandler._clearFilterForResource(eventContext,additionallocations);
			
			var siteid = CommonHandler._getServiceRequestSiteId(eventContext);
			if(siteid == null){
				siteid = UserManager.getInfo("defsite");
			}
			
			var filter = [];
			
			filter.push({siteid: siteid});
			
			additionallocations.lookupFilter = filter;
		},
		
		//Location edit view
		filterLocation: function(eventContext){
			
			var serviceRequestSet = CommonHandler._getAdditionalResource(eventContext,"serviceRequest");
			
			//save the current location  to reset case user cancel
			//this was done to fix the issue when making a look up and cancel the value in SR detail location was different of showed in the look up
			this.curLocation = serviceRequestSet.getCurrentRecord().get("location");
			this.curLocationDesc = serviceRequestSet.getCurrentRecord().get("locationdesc");
			this.currLocationld = serviceRequestSet.getCurrentRecord().get("locationld");
			
			var domainAssetstatus = CommonHandler._getAdditionalResource(eventContext,'domainAssetstatus');
			var additionallocations = CommonHandler._getAdditionalResource(eventContext,'additionallocations');
			CommonHandler._clearFilterForResource(eventContext,additionallocations);
			
			
			var siteid = CommonHandler._getServiceRequestSiteId(eventContext);
			
			additionallocations.filter('siteid == $1', siteid);
			
			return additionallocations;
		},

		//sync validate priority
		validatePriority: function(eventContext){
			var currSR = CommonHandler._getAdditionalResource(eventContext,"serviceRequest").getCurrentRecord();
			var priority = currSR.getPendingOrOriginalValue('reportedpriority');
			
			if(!priority) {
				currSR.set('prioritydesc','');
				return;
			}

			var priorityDomain = CommonHandler._getAdditionalResource(eventContext,'priorityDomain');
			CommonHandler._clearFilterForResource(eventContext, priorityDomain);
			
			var isValidPriority = priorityDomain.find('value == $1', priority);
			
			if(isValidPriority.length == 0){
				currSR.set('prioritydesc','');
				throw new PlatformRuntimeWarning('invalidPriority');
				return ;
			} else {
				currSR.set('prioritydesc',isValidPriority[0].description);
			}
			return;
		},
		
		
		// -----------------------------------------------------
		// sync version of validateLocation
		validateLocation: function(eventContext){
			var serviceRequestSet = CommonHandler._getAdditionalResource(eventContext,"serviceRequest");
			var currSR = serviceRequestSet.getCurrentRecord();
			var location = currSR.getPendingOrOriginalValue('location').toUpperCase();
			
			if(!location) {
				currSR.set('locationdesc','');
				//Set only for presentation
				currSR.set('locationld', '');
				return ;
			}
			
			var additionallocations = CommonHandler._getAdditionalResource(eventContext,'additionallocations');
			CommonHandler._clearFilterForResource(eventContext,additionallocations);
			
			var isValidLocation = additionallocations.find('location == $1', location);
			
			if(isValidLocation.length == 0){
				throw new PlatformRuntimeWarning('invalidLocation');
				return ;
			}else{
				//If asset exists, set the description for it
				currSR.set('location',location);
				currSR.set('locationdesc',isValidLocation[0].get('description'));
				//Set only for presentation
				currSR.set('locationld', isValidLocation[0].get('locationld'));
			}
			
			var asset = currSR.getPendingOrOriginalValue('asset');
			if(asset){			
				var location = currSR.get('location');
				var siteid = currSR.get('siteid');
	
				var assetLoc = CommonHandler._getAdditionalResource(eventContext,'additionalasset');
	
				//Retrieves asset using location and site.
				var assetSet = assetLoc.find('assetnum == $1 && location == $2 && siteid == $3', asset, location, siteid);
	
				//if location of new asset is different from current location, shows dialog
				if(assetSet.length == 0){
					eventContext.ui.show('ServiceRequest.SRLocationToAssetDialog');
					return ;
				}
			}
			return;
		},

		// async version of validateLocation
		asyncvalidateLocation: function(eventContext) {
			var serviceRequestSet = CommonHandler._getAdditionalResource(eventContext,"serviceRequest");
			var currSR = serviceRequestSet.getCurrentRecord();
			var location = currSR.getPendingOrOriginalValue('location').toUpperCase();
			var siteid = currSR.get('siteid');
			
			if(!location) {
				currSR.set('locationdesc','');
				currSR.set('locationld', '');
				return;
			}
			
			//defect 113779 - avoid double validation calls
			currSR.set('location',location);			
			// clear this in case promise throws an error
			currSR.set('locationdesc','');

			var locationSetPromise = this.async_cmn_getLocationPromise(location,siteid);		
			this.async_valLoccheckLocationFound(eventContext, currSR, location, locationSetPromise);							
		},
			
		async_valLoccheckLocationFound: function(eventContext, currSR, location, locationSet) {			
			if(locationSet.count() == 0){
				throw new PlatformRuntimeWarning('invalidLocation');
			}
			
			var validLocation = locationSet.getRecordAt(0);
			
			//If asset exists, set the description for it
			currSR.set('location',location);
			currSR.set('locationdesc',validLocation.get('description'));
			//Set only for presentation
			currSR.set('locationld', validLocation.get('locationld'));
			
			var asset = currSR.getPendingOrOriginalValue('asset');
			if(asset){			
				var location = currSR.get('location');
				var siteid = currSR.get('siteid');
	
//				var assetLoc = CommonHandler._getAdditionalResource(eventContext,'additionalasset');
	
				//Retrieves asset using location and site.
				var assetPromise = this.async_cmn_getAssetLocationPromise(asset, location, siteid);
				this.async_valLoccheckAssetFound(eventContext, assetPromise);	
			}	
		},
		
		async_valLoccheckAssetFound: function(eventContext, assetSet) {
			//if location of new asset is different from current location, shows dialog
			if(assetSet.count() == 0){
				this.application.hideBusy();
				eventContext.ui.show('ServiceRequest.SRLocationToAssetDialog');
			}
		},
//-------------------------------------------------------				
		discardView: function(eventContext){
			//cleanupEditAssetView method is invoked as callback of hideCurrentView
			eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
			
		},
		cleanupEditLocationView: function(eventContext){
			
			var serviceRequest = CommonHandler._getAdditionalResource(eventContext,"serviceRequest").getCurrentRecord();
			//set back the location
			var readOnlyLoc = serviceRequest.getRuntimeFieldMetadata('location').get('readonly');
			if (!readOnlyLoc) {
				if(this.curLocation!=null){
					serviceRequest.set("location",this.curLocation);
					serviceRequest.set("locationdesc",this.curLocationDesc);
					serviceRequest.set("locationld",this.currLocationld);
				}
			}

			//Set asset info back
			var readOnlyAsset = serviceRequest.getRuntimeFieldMetadata('asset').get('readonly');
			if (!readOnlyAsset) {
				serviceRequest.set("asset",this.curAsset);
				serviceRequest.set("assetdesc",this.curAssetDesc);			
				serviceRequest.set("assetld",this.curAssetld);
			}
		},
		
		commitActualLocationEntryView: function(eventContext){
			var serviceRequestSet = CommonHandler._getAdditionalResource(eventContext,"serviceRequest");
			var currSR = serviceRequestSet.getCurrentRecord();
			
			this.curLocation = currSR.get("location");
			this.curLocationDesc = currSR.get("locationdesc");
			this.currLocationld = currSR.get("locationld");
			
			//WorkAround for the auto complete field 
			//currSR.set('locationdesc', '');
			
			FieldUtil.initCompositeField("location", "locationdesc", "locationanddescription", currSR);
			
			eventContext.ui.hideCurrentView();
			//ModelService.save(serviceRequestSet);
			
		},
		//end edit Location view
		
		_hasAttachments: function(serviceRequest){
			if (serviceRequest){
				var attachments = serviceRequest.get('attachments');
				return (attachments && attachments.data && attachments.data.length > 0);
			}
			return false;
		},
		
		initNewServiceRequestView : function(eventContext) {

			// TODO: change to actual method once Data Access API is completed
			var newSR = eventContext.application.getResource('serviceRequest').createNewRecord();
			originalServiceRequest = null;
			//137933: Using Labor's orgid to create new service request instead of orgid associated with default insert site siteid.
			newSR.set('siteid', UserManager.getInfo("defsite"));
			newSR.set('orgid', UserManager.getInfo("deforg"));
			
			eventContext.getResource()._asyncUpdateModified();
		},
		
		discardNewServiceRequestView : function(eventContext) {
			eventContext.ui.show('ServiceRequest.ConfirmCancel');
		},
		
		handleBackButton: function(eventContext){
			var serviceRequestSet = CommonHandler._getAdditionalResource(eventContext,"serviceRequest");
			var currSR = serviceRequestSet.getCurrentRecord();
			
			if(currSR && currSR.isNew() && currSR.get('srnum') == null) {
				currSR.deleteLocal();
//				if(originalServiceRequest){
//					serviceRequestSet.setCurrentIndexByRecord(originalServiceRequest);
//					originalServiceRequest = null;
//				}
//				else {
//					eventContext.application.ui.getViewFromId(eventContext.application.ui.getCurrentView().movedFrom).setFooterDisplay(true);	
//				}			
			}
			else {
				eventContext.application.ui.getViewFromId(eventContext.application.ui.getCurrentView().movedFrom).setFooterDisplay(true);	
			}			
		},

		commitNewServiceRequestView : function(eventContext) {
			if(!this.ui.getCurrentViewControl().validate()) {
				return;
			}
			var serviceRequestSet = CommonHandler._getAdditionalResource(eventContext,"serviceRequest");
			var currSR = serviceRequestSet.getCurrentRecord();

			var summary = currSR.get("summary");
			var desc = currSR.get("description");
			var reportedby = currSR.get("reportedby");
			
			// copy the long description to the summary field up to the maxSize of the summary field.  
			// Do this only if the summary field is null so as to not override what the user may have put in.
			if (summary==null) {
				if (desc != null) {
					var serviceRequestMeta = ResourceMetaData.getResourceMetadata("serviceRequest");
					var summaryMeta = serviceRequestMeta.getField("summary");
					if (desc.length > summaryMeta.maxSize) {
						desc = desc.substring(0,summaryMeta.maxSize);
					}
					currSR.set('summary', desc);
				}
			}

			// set the reportedby field to the user's personid.
			if (reportedby == null) {
				var myLabor = CommonHandler._getAdditionalResource(eventContext,"mylabor").getCurrentRecord();
				if (myLabor != null) {
					var personid = myLabor.get('personid');
					currSR.set('reportedby', personid);
				}
				else{
					var myPerson = CommonHandler._getAdditionalResource(eventContext,"myPerson").getCurrentRecord();
					if (myPerson != null) {
						var personid = myPerson.get('personid');
						currSR.set('reportedby', personid);
					}
				}
			}
			
			// set the reportdate field
			if (currSR.getAsDateOrNull('reportdate')==null) {
				currSR.setDateValue('reportdate', this.application.getCurrentDateTime());
			}

			if (currSR.getPendingOrOriginalValue('gpsLocation')) {
				//verify if we will use gps, but independently of it, save sr
				// init these fields with a value or they are not set by the gps helper
				currSR.set('latitudey', 0);
				currSR.set('longitudex', 0);
				var geoHelper = new GeoLocationServiceHelper();
				geoHelper.sendGPSToResource(eventContext,currSR.gpsLocation).always(function(obj){
					// got back from gps helper, now verify we got good coords
					if (serviceRequestSet.getCurrentRecord().get('latitudey') == 0 || serviceRequestSet.getCurrentRecord().get('longitudey') == 0) {
						// if we got to this line, the gps helper did not return coords, so null out the init values before save
						currSR.set('latitudey', null);
						currSR.set('longitudex', null);
					}
					
					ModelService.save(serviceRequestSet).then(function() {
						eventContext.application.hideBusy();
						eventContext.ui.hideCurrentView();
					}).
					otherwise(function(err){
						eventContext.application.hideBusy();
						eventContext.ui.showMessage(err);						
					});
				});
			} else {
				ModelService.save(serviceRequestSet).then(function() {
					eventContext.application.hideBusy();
					eventContext.ui.hideCurrentView();
				}).
				otherwise(function(err){
					eventContext.application.hideBusy();
					eventContext.ui.showMessage(err);						
				});
			}
		},

		okOnSRCommitConfirm: function(eventContext){
			eventContext.ui.hideCurrentDialog();
			eventContext.ui.hideCurrentView();
//			originalServiceRequest=null;	
		},
		
		asyncYesOnSRLocationToAsset: function(eventContext){
			//ghet current SR to clean asset
			var serviceRequestSet = CommonHandler._getAdditionalResource(this,"serviceRequest");
			var currSR = serviceRequestSet.getCurrentRecord();
			
			//Store current asset info, in case rollback (Cancel) is need
			this.curAsset = currSR.get('asset');
			this.curAssetDesc = currSR.get('assetdesc');
			this.curAssetld = currSR.get('assetld');
			
			//clear the asset
			currSR.set('asset', '');
			currSR.set('assetdesc', '');
			
			currSR.set('location', currSR.get('location').toUpperCase());
			currSR.set('locationdesc', currSR.get('locationdesc'));
			var siteid = currSR.get('siteid');
			
			FieldUtil.initCompositeField("asset", "assetdesc", "assetnumanddescription", currSR);
			
			//hide dialog and Location view
			eventContext.ui.hideCurrentDialog();
			eventContext.ui.getCurrentViewControl().refresh();
		},
		noOnSRLocationToAsset: function(eventContext){
			//dont do anything just hide dialog and Location UI	
			
			var serviceRequestSet = CommonHandler._getAdditionalResource(this,"serviceRequest");
			var currSR = serviceRequestSet.getCurrentRecord();
			var siteid = currSR.get('siteid');
			
			currSR.set('location', currSR.get('location').toUpperCase());
			currSR.set('locationdesc', currSR.get('locationdesc'));
			
					
			eventContext.ui.hideCurrentDialog();
			eventContext.ui.getCurrentViewControl().refresh();
		},
		
		closeOnSRLocationToAsset: function(eventContext){
			//revert the values 	
			var serviceRequestSet = CommonHandler._getAdditionalResource(this,"serviceRequest");
			var currSR = serviceRequestSet.getCurrentRecord();
			currSR.set("location",this.curLocation);
			currSR.set("locationdesc",this.curLocationDesc);
			currSR.set("locationld",this.currLocationld);
			eventContext.ui.hideCurrentDialog();
		},

		//----------------------------------------------------
		// sync version of validateAsset
		validateAsset: function(eventContext){
			var curr = CommonHandler._getAdditionalResource(eventContext,'serviceRequest').getCurrentRecord();
			var location = curr.getPendingOrOriginalValue('location');
			var asset = curr.getPendingOrOriginalValue('asset');
			var siteid = CommonHandler._getServiceRequestSiteId(eventContext);
								
			var assetLoc = this.filterAsset(eventContext);
			//Retrieves asset using location and site.

			var assetSet = assetLoc.find('assetnum == $1 && siteid == $2', asset, siteid);

			//If asset is blank, set description as blank, return
			if(!asset){
				curr.set('asset','');
				curr.set('assetdesc','');
				curr.set('assetld', '');
				curr.set('assetnumanddescription', '');
				return;
			}
			
			//Asset exists on the SR site - if 0 is false
			if(assetSet.length == 0) {
				curr.set('assetdesc','');
				curr.set('assetld', '');
				throw new PlatformRuntimeWarning('invalidAsset');
			}else{
				//If asset exists, set the description for it
				curr.set('assetdesc',assetSet[0].get('description'));
				//Set only for presentation
				curr.set('assetld', assetSet[0].get('assetlongdesc'));
			}				
			
			//If location is set on the SR
			if(location){				
				assetSet = assetLoc.find('assetnum == $1 && location == $2 && siteid == $3', asset, location, siteid);
				
				//asset's location is the same is already set on view - if 0 is false
				if(assetSet.length == 0){
					//Need to check that the asset actually has a location before popping the dialog 
					var additionalasset = CommonHandler._getAdditionalResource(eventContext,"additionalasset");
					var selectedAssetsLocation = CommonHandler._getAssetLocation(eventContext, additionalasset, asset, siteid);
					if (selectedAssetsLocation) {
						//TODO remove this assigment when defect 104985 is fixed
						curr.set('asset', asset);
						this.application.hideBusy();
						eventContext.ui.show('ServiceRequest.SRAssetToLocationDialog');
						//if Yes, set asset and location from lookup : yesOnSRAssetToLocation
						//if Not, set asset and keep the location as it is : noOnSRAssetToLocation
						//if Close, do nothing : closeOnSRAssetToLocation
					}
					return;
				}
			}else{
				//If there is no location set on the SR, sets the asset's location then
				var additionalasset = CommonHandler._getAdditionalResource(eventContext,"additionalasset");
				var loc = CommonHandler._getAssetLocation(eventContext, additionalasset, asset, siteid);
				curr.set('location', loc);
				
				//Get Location description
				var additionallocations = CommonHandler._getAdditionalResource(eventContext,"additionallocations");
				var locObj = CommonHandler._getLocationByID(eventContext,additionallocations,loc,siteid);
				curr.set('locationdesc', locObj.get('description'));
			}
		},
		
		// async version of validateAsset
		asyncvalidateAsset: function(eventContext){
			var curSR = CommonHandler._getAdditionalResource(eventContext,'serviceRequest').getCurrentRecord();
			var location = curSR.getPendingOrOriginalValue('location');
			var asset = curSR.getPendingOrOriginalValue('asset');
			//defect 113779 - set uppercase asset value prior to running validation to prevent  
			// duplicate validation calls if a user enters an asset with a lowercase value.
			//curSR.set('asset',asset);
						
			//If asset is blank, set description as blank, return
			if(!asset){
				curSR.set('asset', null);
				curSR.set('assetdesc','');
				curSR.set('assetld', '');
				curSR.set('assetnumanddescription', '');
				return;
			}

			var siteid = CommonHandler._getServiceRequestSiteId(eventContext);								
			var assetLoc = this.filterAsset(eventContext);
//			var assetLoc = CommonHandler._getAdditionalResource(eventContext,'additionalasset');
			//Retrieves asset using location and site.
			var assetPromise = this.async_cmn_getAssetPromise(assetLoc, asset, siteid);
			this.async_va_CheckAssetFound(curSR, assetPromise, asset, location, siteid, eventContext);								
		},
				
		async_va_CheckAssetFound : function (curSR, assetSet, asset, location, siteid, eventContext) {
			if (assetSet.count() == 0) {
				curSR.set('assetdesc','');
				curSR.set('assetld', '');
				// before we throw, refresh?
				
				throw new PlatformRuntimeWarning('invalidAsset'); 
			}
			else{
				//If asset exists, set the description for it
				var newAsset = assetSet.getRecordAt(0);
				curSR.set('assetdesc',newAsset.get('description'));
				//Set only for presentation
				var assetLD = newAsset.get('assetlongdesc');
				curSR.set('assetld', (assetLD == null?'':assetLD));	
			}
			
			//If location is set on the SR
			if(location){				
				var assetLocPromise = this.async_cmn_getAssetLocationPromise(asset, location, siteid);
				this.async_va_CheckAssetLocFound(curSR, eventContext, asset, siteid, assetLocPromise);
			}else{
				
				this.async_va_SetAssetLocation(eventContext, asset, siteid, curSR);
			}
		},		
		
		async_va_SetAssetLocation : function (eventContext, asset, siteid, curSR) {
			//If there is no location set on the SR, sets the asset's location then
			var additionalasset = CommonHandler._getAdditionalResource(eventContext,"additionalasset");
			assetLocPromise = this.async_cmn_getAssetPromise(additionalasset, asset, siteid);
			this.async_va_getAssetLocation(assetLocPromise, curSR, eventContext, siteid);	
		},
						
		async_va_CheckAssetLocFound : function (curSR, eventContext, asset, siteid, assetSet) {
			//asset's location is the same is already set on view - if 0 is false
			if(assetSet.count() == 0){
				//Need to check that the asset actually has a location before popping the dialog 
				var additionalasset = CommonHandler._getAdditionalResource(eventContext,"additionalasset");
				var addAssetPromise = this.async_cmn_getAssetPromise(additionalasset, asset, siteid);
				this.async_va_getAssetLocation_selAsset(addAssetPromise, curSR, eventContext);
			} 
		},

		async_va_getAssetLocation_selAsset : function(assetSet, curSR, eventContext) {
			if (assetSet.count() > 0) {
				//TODO remove this assigment when defect 104985 is fixed
				curSR.set('asset', assetSet.getRecordAt(0).assetnum);
				this.resolveLocation = assetSet.getRecordAt(0).location;
				this.application.hideBusy();
				if (this.resolveLocation) {
					eventContext.ui.show('ServiceRequest.SRAssetToLocationDialog');
				} else {
					eventContext.ui.show('ServiceRequest.SRAssetToNoLocationDialog');
				}
				//if Yes, set asset and location from lookup : yesOnSRAssetToLocation
				//if Not, set asset and keep the location as it is : noOnSRAssetToLocation
				//if Close, do nothing : closeOnSRAssetToLocation
			}			
		},
				
		async_va_getAssetLocation : function(assetSet, curSR, eventContext, siteid) {
			if (assetSet.count() > 0) {
				var loc = assetSet.getRecordAt(0).get('location');
				//curSR.set('location', loc);
				
				//initialize in-memory resource
				var woFollowUpInfoRes = this.application.getResource('woFollowUpInfo');
				if ( woFollowUpInfoRes)
				{
					var woFollowUpInfo = woFollowUpInfoRes.getCurrentRecord();
			
					if( woFollowUpInfo != null && curSR.get('origrecordid')!=null && woFollowUpInfo.get('isFollowUpSetLoc')) {
						woFollowUpInfo.set('isFollowUpSetLoc', false);
					} else {
						curSR.set('location', loc);	
					}
				}
				else
				{
					curSR.set('location', loc);	
				}
				
				//Get Location description				
				var additionallocations = CommonHandler._getAdditionalResource(eventContext,"additionallocations");				
				
				if (!additionallocations) {
					eventContext.getModelDataSet('additionallocations').then(function(addlocations){
						additionallocations = addlocations;
					});
				}
				
				if (additionallocations) {
					var locationPromise = this.async_cmn_getLocationByIDPromise(additionallocations, loc, siteid);
					this.async_va_getLocationByID(locationPromise, curSR, assetSet, eventContext);	
				}				
			}
			else {
				curSR.set('location', null);
			}			
		},
		
		//Reusable method: Get Location Object
		async_va_getLocationByID : function(locSet, curSR, assetSet, eventContext) {
			if (locSet.count() > 0) {
				curSR.set('locationdesc', locSet.getRecordAt(0).get('description'));
				
			}
		},
		
		//----------------------------------------------------		
		resolveExistingAsset: function(eventContext){
			var serviceRequestSet = CommonHandler._getAdditionalResource(eventContext,"serviceRequest");			
			
			var currSR = serviceRequestSet.getCurrentRecord();
			
			var asset = currSR.get('asset');
						
			return [asset];			
		},
		resolveAssetLocation: function(eventContext){
			if (this.resolveLocation) {
				return [this.resolveLocation,this.resolveLocation];				
			}
			var serviceRequestSet = CommonHandler._getAdditionalResource(eventContext,"serviceRequest");
			var additionalasset = CommonHandler._getAdditionalResource(eventContext,"additionalasset");
			
			var currSR = serviceRequestSet.getCurrentRecord();
			var siteid = currSR.get('siteid');
			//var currLoc = currSR.getPendingOrOriginalValue('location');
			//if(!currLoc) {currLoc = '';}
			
			var asset = currSR.getPendingOrOriginalValue('asset');
			
			//Retrieves location from selected asset and set it to SR
			var assetLoc = this.filterAsset(eventContext);
			var loc = CommonHandler._getAssetLocation(eventContext, additionalasset, asset, siteid);
			if (!loc)
				loc='';
			//return [currLoc,loc];	
			return [loc,loc];
		},		
		// ------------------------------------------------------------------------------------
		// sync version of yesOnSRAssetToLocation
		yesOnSRAssetToLocation: function(eventContext){
			var serviceRequestSet = CommonHandler._getAdditionalResource(this,"serviceRequest");
			var additionalasset = CommonHandler._getAdditionalResource(this,"additionalasset");
			
			var currSR = serviceRequestSet.getCurrentRecord();
			var siteid = currSR.get('siteid');
			
			//TODO get current asset (new) and retrieve the location
			//TODO remove this assigment when defect 104985 is fixed
			var asset = currSR.get('asset');
			
			//Retrieves location from selected asset and set it to SR
			var assetLoc = this.filterAsset(eventContext);
			var loc = CommonHandler._getAssetLocation(this, additionalasset, asset, siteid);
			if (loc) {
				currSR.set('location', loc);

				//Get Location description			
				var additionallocations = CommonHandler._getAdditionalResource(this,"additionallocations");
				var locObj = CommonHandler._getLocationByID(this,additionallocations,loc,siteid);
				currSR.set('locationdesc', locObj.get('description'));
			} else {
                currSR.set('location', null);
                currSR.set('locationdesc', null);
            }
			
			//Hide dialog and asset edit view
			eventContext.ui.hideCurrentDialog();
		},
		// async version of yesOnSRAssetToLocation
		asyncyesOnSRAssetToLocation: function(eventContext){
			this.resolveLocation = null;
			var serviceRequestSet = CommonHandler._getAdditionalResource(this,"serviceRequest");
			var additionalasset = CommonHandler._getAdditionalResource(this,"additionalasset");
			
			var curSR = serviceRequestSet.getCurrentRecord();
			var siteid = curSR.get('siteid');
			
			//TODO get current asset (new) and retrieve the location
			//TODO remove this assigment when defect 104985 is fixed
			var asset = curSR.get('asset');
			
			//Retrieves location from selected asset and set it to SR
			var assetLoc = this.filterAsset(eventContext);
			var assetPromise = this.async_cmn_getAssetPromise(additionalasset, asset, siteid);
			this.async_yonwoa_getAssetLocation(assetPromise, curSR, eventContext, siteid )			
		},				
		async_yonwoa_getAssetLocation : function(assetSet, curSR, eventContext, siteid) {
			if (assetSet.count() > 0) {
				var loc = assetSet.getRecordAt(0).location;
				curSR.set('location', loc);
				//Get Location description			
				var additionallocations = CommonHandler._getAdditionalResource(this,"additionallocations");
				var locObjPromise = this.async_cmn_getLocationByIDPromise(additionallocations,loc,siteid);
				this.async_yonwoa_getLocationByID(locObjPromise, curSR, eventContext, assetSet);
			} else {
				curSR.set('location', null);
				curSR.set('locationdesc', null);
            }
			eventContext.ui.hideCurrentDialog();
			eventContext.ui.getCurrentViewControl().refresh();
		},		
		
		async_yonwoa_getLocationByID : function(locSet, curSR, eventContext, assetSet) {
			if (locSet.count() > 0 ) {				
				curSR.set('locationdesc', locSet.getRecordAt(0).get('description'));
			}			

			//Hide dialog and asset edit view
			eventContext.ui.hideCurrentDialog();
			eventContext.ui.getCurrentViewControl().refresh();
		},
		//-------------------------------------------------------
		
		noOnSRAssetToLocation: function(eventContext){
		
			this.resolveLocation = null;
			var currSR = CommonHandler._getAdditionalResource(this,'serviceRequest').getCurrentRecord();
			var siteid = currSR.get('siteid');

			//TODO - need check better the behavior			
			eventContext.ui.hideCurrentDialog();
			eventContext.ui.getCurrentViewControl().refresh();
			eventContext.ui.hideCurrentDialog();
		},
		closeOnSRAssetToLocation: function(eventContext){
			this.resolveLocation = null;
			var serviceRequestSet = CommonHandler._getAdditionalResource(this,"serviceRequest");
			var currSR = serviceRequestSet.getCurrentRecord();
			currSR.set("asset",this.curAsset);
			currSR.set("assetdesc",this.curAssetDesc);
			currSR.set("assetld",this.currAssetld);
			eventContext.ui.hideCurrentDialog();
		},
		
		filterAssetForLookup: function(eventContext){
			
			var additionalasset = CommonHandler._getAdditionalResource(eventContext,'additionalasset');
			CommonHandler._clearFilterForResource(eventContext,additionalasset);
			additionalasset._lookupFilter = null;

			//save the current asset so we can reset it if the user has to revert the value
			var serviceRequestSet = CommonHandler._getAdditionalResource(eventContext,"serviceRequest");
			var locationforfilter = null;
			if(serviceRequestSet.getCurrentRecord() != null){
				this.curAsset = serviceRequestSet.getCurrentRecord().get("asset");
				this.curAssetDesc = serviceRequestSet.getCurrentRecord().get("assetdesc");
				this.curAssetld = serviceRequestSet.getCurrentRecord().get("assetld");
				locationforfilter = serviceRequestSet.getCurrentRecord().get("location");
			}

			var siteid = CommonHandler._getServiceRequestSiteId(eventContext);
			if(siteid == null){
				siteid = UserManager.getInfo("defsite");
			}
			
			var filter = [];
			
			if (locationforfilter) {
				filter.push({location: locationforfilter});
			}
			else { 
				filter.push({siteid: siteid});
			}
			
			additionalasset.lookupFilter = filter;			
		},
		
		filterAsset: function(eventContext){
			
			var additionalasset = CommonHandler._getAdditionalResource(eventContext,'additionalasset');
			CommonHandler._clearFilterForResource(eventContext,additionalasset);
			
			var siteid = CommonHandler._getServiceRequestSiteId(eventContext);
 	
			additionalasset.filter('siteid == $1', siteid);
			
			return additionalasset;
			
		},

		// cleanup event handler
		handleBackButtonClick: function(eventContext){
			var actualAsset=eventContext.getCurrentRecord();
			
			//FIXME: this is a temporary workaround until ModelData._isNew is fixed to reflect if record has been saved or not
			if(!actualAsset.get("dontDiscard")){
				actualAsset.deleteLocal();
			}
		},
		
		commitAssetEntryView: function(eventContext){
			var currSR = CommonHandler._getAdditionalResource(eventContext,"serviceRequest").getCurrentRecord();
			
			//Make sure temporary variables are set to the final values
			//This is necessary because hideCurrentView calls cleanup event
			this.curAsset = currSR.get('asset');
			this.curAssetDesc = currSR.get('assetdesc');
			this.curAssetld = currSR.get('assetld');
	
			this.curLocation = currSR.get('location');
			this.curLocationDesc = currSR.get('locationdesc');
			this.currLocationld = currSR.get('locationld');
			
			eventContext.ui.hideCurrentView();
		},


		noOnCancel: function(eventContext){
			//dont do anything just hide dialog and Location UI	
			eventContext.ui.hideCurrentDialog();
			eventContext.ui.getCurrentViewControl().refresh();
		},


		yesOnCancel: function(eventContext){
			var serviceRequestSet = CommonHandler._getAdditionalResource(eventContext,"serviceRequest");
			var currSR = serviceRequestSet.getCurrentRecord();
			if(currSR) {
				currSR.deleteLocal();
			}
			eventContext.ui.hideCurrentDialog();
			eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
		},
		
		clearSearchFields: function(eventContext){
			eventContext.application.getResource("searchServiceRequest").createNewRecord();
		},
		
		initSearchData: function(eventContext){
			var searchData = eventContext.application.getResource("searchServiceRequest");
			if(searchData == null || searchData.getCurrentRecord() == null){
				searchData.createNewRecord();
			}
			eventContext.application.ui.savedQueryIndex = eventContext.application.ui.getViewFromId('ServiceRequest.WorkItemsView').queryBaseIndex;
		},
		
		showSearch: function(eventContext){
			eventContext.application.ui.showAllStatus = true;			
		},
		
		hideSearch: function(eventContext){
			if(eventContext.application.ui.transitionInfo.id != "ServiceRequest.statusLookup"){
				eventContext.application.ui.showAllStatus = false;			
			}
		},
		
		setSearchQuery: function(eventContext){
			eventContext.application.showBusy();
			var search = eventContext.application.getResource("searchServiceRequest").getCurrentRecord();
			var filteredItems = 0;			
			var filter = {istask:false};
			
			if (search.wonum){
			    filter.wonum = '%'+search.wonum+'%';
			    filteredItems++;
			}
			if (search.description){
			    filter.description = '%'+search.description+'%';
			    filteredItems++;
			}
			if (search.status){
			    filter.status = search.status;
			    filteredItems++;
			}
			if (search.asset){
			    filter.assetancestor = '%'+search.asset+'%';
			    filteredItems++;
			}
			if (search.location){
			    filter.locationancestor = '%'+search.location+'%';
			    filteredItems++;
			}
			if (search.priority){
			    filter.priority = search.priority;
			    filteredItems++;
			}				
			var statusDateRangeFilter = {};
			if (search.startdate){
			    statusDateRangeFilter.from = search.getAsDateOrNull("startdate");
			}
			if (search.enddate){
			    statusDateRangeFilter.to = search.getAsDateOrNull("enddate");
			}
			if (search.startdate || search.enddate){
				filter["starttime"] = statusDateRangeFilter;
			    filteredItems++;
			}
			
			if(filteredItems == 0){
				eventContext.ui.show('ServiceRequest.RequiredSearchFieldMissing');
				return;
			}
			var self = this;
			eventContext.application.ui.performSearch = true;
			ModelService.clearSearchResult(eventContext.application.getResource('serviceRequest')).then(function(){
				 ModelService.empty('serviceRequest').then(function(){
					 eventContext.ui.getViewFromId('ServiceRequest.WorkItemsView').setQueryBaseIndexByQuery(PlatformConstants.SEARCH_RESULT_QUERYBASE).then(function(){
						// eventContext.ui.show('ServiceRequest.WorkItemsView');
						 eventContext.application.showBusy();
						 self.populateSearch(eventContext);
					 });
				 });
			});
		},
		
		showBusyList: function(eventContext){
			if(eventContext.application.ui.performSearch){
				this.application.showBusy();
				eventContext.application.ui.performSearch = false;
			}
		},
		
		populateSearch: function(eventContext){
			var view = eventContext.application.ui.getViewFromId('ServiceRequest.WorkItemsView');
			if(eventContext.application.ui.performSearch){
				if(eventContext.application.getResource("searchServiceRequest") == null){ //TODO:  might be nice to still open to last search
					//must be first login.  If search was last page view just default to 0 index because search resource has been discarded.
					view.changeQueryBase(0);
				    var queryBase = view.queries.children[0].queryBase;
					ModelService.all('serviceRequest', queryBase).then(function(modelDataSet){
						modelDataSet.resourceID = 'serviceRequest';
						eventContext.application.addResource(modelDataSet);
						eventContext.application.ui.getViewFromId('ServiceRequest.WorkItemsView').lists[0].refresh();
					})
					return;
				}
				var indexOfSearch = 0;
				var i = 0;
				if(view.queries && view.queries != null){
					while(i < view.queries.children.length){
						if(view.queries.children[i].queryBase == PlatformConstants.SEARCH_RESULT_QUERYBASE){
							indexOfSearch = i;
							i = view.queries.children.length;
						}
						i++;
					}
					view.changeQueryBase(indexOfSearch);
				}
				var search = eventContext.application.getResource("searchServiceRequest").getCurrentRecord();
				
				var filter = {istask: false};
								
				var filteredItems = 0;
				if (search.wonum){
				    filter.wonum = '%'+search.wonum+'%';
				    filteredItems++;
				}
				if (search.description){
				    filter.description = '%'+search.description+'%';
				    filteredItems++;
				}
				if (search.status){
				    filter.status = search.status;
				    filteredItems++;
				}
				if (search.priority){
				    filter.priority = search.priority;
				    filteredItems++;
				}				
				var statusDateRangeFilter = {};
				if (search.startdate){
				    statusDateRangeFilter.from = search.getAsDateOrNull("startdate");
				}
				if (search.enddate){
				    statusDateRangeFilter.to = search.getAsDateOrNull("enddate");
				}
				if (search.startdate || search.enddate){
					filter["starttime"] = statusDateRangeFilter;
				    filteredItems++;
				}
				
				var oslcQueryParameters = {};
				if (search.asset){
				    oslcQueryParameters['sqp:asset'] =  '%'+search.asset+'%';
				    filteredItems++;
				}
				if (search.location){
				    oslcQueryParameters['sqp:location'] =  '%'+search.location+'%';
				    filteredItems++;
				}
				if(filteredItems == 0){
					eventContext.application.showMessage(MessageService.createStaticMessage('norecords').getMessage());
					eventContext.application.ui.performSearch = false;
					eventContext.application.hideBusy();
					return;
				}
				
				filter = this.buildFilterForSRClass(eventContext,[filter]);
				var self = this;
				CommunicationManager.checkConnectivityAvailable().then(function(hasConnectivity){
					eventContext.application.showBusy();
					if (hasConnectivity){
						var currentSrSet = eventContext.application.getResource('serviceRequest');
						if (currentSrSet.getPersistentFilter()){
						     ModelService.clearSearchResult(currentSrSet).
						     then(function(){
						    	 
									ModelService.filtered('serviceRequest', PlatformConstants.SEARCH_RESULT_QUERYBASE, filter, null, null, null, oslcQueryParameters).then(function(resourceSet){
										
										eventContext.ui.show('ServiceRequest.WorkItemsView');
										if (!resourceSet.fetchedFromServer){
											self._showSearchFailedMessageNoConnectivity(eventContext);
											return;
										}

										resourceSet.resourceID = 'serviceRequest';
										eventContext.application.addResource(resourceSet);
										if(resourceSet.count() == 0){
											ModelService.clearSearchResult(resourceSet);
											eventContext.application.showMessage(MessageService.createStaticMessage('norecords').getMessage());
											eventContext.application.ui.performSearch = false;
										}
										else{
											resourceSet.setCurrentIndex(0);
										}
										eventContext.application.ui.getViewFromId('ServiceRequest.WorkItemsView').lists[0].refresh();
										eventContext.application.hideBusy();
									});
						     });
						} else {
							ModelService.filtered('serviceRequest', PlatformConstants.SEARCH_RESULT_QUERYBASE, filter, null, null, null, oslcQueryParameters).then(function(resourceSet){
								eventContext.ui.show('ServiceRequest.WorkItemsView');
								if (!resourceSet.fetchedFromServer){
									self._showSearchFailedMessageNoConnectivity(eventContext);
									return;
								}

								resourceSet.resourceID = 'serviceRequest';
								eventContext.application.addResource(resourceSet);
								if(resourceSet.count() == 0){
									ModelService.clearSearchResult(resourceSet);
									eventContext.application.showMessage(MessageService.createStaticMessage('norecords').getMessage());
									eventContext.application.ui.performSearch = false;
								}
								else{
									resourceSet.setCurrentIndex(0);
								}
								eventContext.application.ui.getViewFromId('ServiceRequest.WorkItemsView').lists[0].refresh();
								eventContext.application.hideBusy();
							});
						}
					}
					else{
						self._showSearchFailedMessageNoConnectivity(eventContext);
					}
				});
			}
		},
		
		_showSearchFailedMessageNoConnectivity: function(eventContext){
			eventContext.application.showMessage(MessageService.createStaticMessage('downloadFailedNoConnectivity').getMessage());
			if(eventContext.application.ui.getViewFromId('ServiceRequest.WorkItemsView').lists[0].baseWidget){
				eventContext.application.ui.getViewFromId('ServiceRequest.WorkItemsView').lists[0].refresh();
			}
			eventContext.application.hideBusy();
			eventContext.application.ui.performSearch = false;
		},

		async_cmn_getLocationPromise: function(location,siteid) {
			return ModelService.filtered('additionallocations', null, [{location: location, siteid: siteid}], null, false, true);
		},

		async_cmn_getAssetLocationPromise: function(assetnum, location, siteid) {
			return ModelService.filtered('additionalasset', null, [{assetnum: assetnum, location: location, siteid: siteid}], null, false, true);
		},

		async_cmn_getAssetPromiseNoLocation: function(assetnum, siteid) {
			return ModelService.filtered('additionalasset', null, [{assetnum: assetnum, siteid: siteid}], null, false, true);
		},
		
		async_cmn_getAssetPromise : function(additionalassets, asset, siteid) {	
			if (asset) {
				var filter = {assetnum: asset, siteid:siteid};
				return ModelService.filtered(additionalassets.getResourceName(), additionalassets.getQueryBase(), filter, null, false, true);
			} else {
				return ModelService.empty(additionalassets.getResourceName(), additionalassets.getQueryBase());
			}
		},
		
		async_cmn_getLocationByIDPromise : function(additionallocations, location, siteid) {
			if (location) {
				var filter = {location: location, siteid:siteid};
				return ModelService.filtered(additionallocations.getResourceName(), additionallocations.getQueryBase(), filter, null, false, true);
			} else {
				return ModelService.empty(additionallocations.getResourceName(), additionallocations.getQueryBase());
			}
		},
		
		discardSummaryView: function(eventContext){
			
			var view = eventContext.application.ui.getViewFromId('ServiceRequest.WorkItemsView');
			view.changeQueryBase(eventContext.application.ui.savedQueryIndex);
		    var queryBase = view.queries.children[eventContext.application.ui.savedQueryIndex].queryBase;
			ModelService.all('serviceRequest', queryBase).then(function(modelDataSet){
				modelDataSet.resourceID = 'serviceRequest';
				eventContext.application.addResource(modelDataSet);
				eventContext.application.ui.getViewFromId('ServiceRequest.WorkItemsView').lists[0].refresh();
			})
		},

		refreshAllListSizes: function(eventContext){	
			if(!loadingLists){
				var serviceRequest = eventContext.application.getResource('serviceRequest').getCurrentRecord();
				attributes.forEach(function(listAttribute, index){
					var list = serviceRequest.getLoadedModelDataSetOrNull(listAttribute);
					var cachedList = eventContext.application.getResource('serviceRequest.' + listAttribute);
					if (cachedList && cachedList.isDirty()){
						//race condition:
						//related resource changes weren't updated to jsonstore
						//before we get here, so rely on what's in memory that's
						//most accurate state until data goes to server
						
						list = cachedList;
					}

					if (list && listAttribute === 'attachments'){
						list.clearFilterAndSort();
						//list.filter("urlType == null || urlType == 'FILE'");
					}
					
					/* if we created some new record in the set, show it regardless if we downloaded data or not */
					if(list && (serviceRequest.isComplexAttributeLoaded(listAttribute) || list.count() > 0)){
						serviceRequest.set(listSizeArray[index], list.count() + "");
					}else{
						serviceRequest.set(listSizeArray[index], "--");
					}
				});

			}			
		},
		
		fetchAllListSizes: function(eventContext){
			var serviceRequest = eventContext.application.getResource('serviceRequest').getCurrentRecord();
			var self = this;
			listSizeArray.forEach(function(listSizeAttribute){
				serviceRequest.set(listSizeAttribute, "--");
			});
			if(serviceRequest.wasCommittedToServer()){
				loadingLists = true;
				ModelService.multipleChildrenOf(serviceRequest, attributes).always(function(){
					loadingLists = false;
					self.refreshAllListSizes(eventContext);
				});
			}
			else{
				self.refreshAllListSizes(eventContext);
			}
		},
		
		hideDialog : function(eventContext){
			eventContext.ui.hideCurrentDialog();
		},
		
		selectableSRClassAsFilter: function(eventContext){
			var domainwoclass = CommonHandler._getAdditionalResource(eventContext,'domainwoclass');	
			var internalClasses = ['SR','ACTIVITY'];
			var filter = [];
			arrayUtil.forEach(internalClasses, function(anClass){
				CommonHandler._clearFilterForResource(eventContext, domainwoclass);
				var externalOnes = Object.keys(SynonymDomain.resolveToExternal(domainwoclass, anClass));
				arrayUtil.forEach(externalOnes, function(aValue){
					filter.push({"woclass": aValue});
				});
			});
			CommonHandler._clearFilterForResource(eventContext, domainwoclass);
			return filter;
		},
		
		buildFilterForSRClass: function(eventContext, filter){
			
			var woClasses = this.selectableSRClassAsFilter(eventContext);
			return arrayUtil.map(woClasses, function(anClass){
				var result = lang.mixin({}, anClass);
				arrayUtil.forEach(filter, function(condition){
					 lang.mixin(result, condition);		
				});
				return result;
			});		
		},
		
		
		/**
		 * Initialize and set the Classification Path and Description on Detail page
		 * 
		 * @constructor
		 * @param eventContext
		 */
		initClassificationField : function(eventContext){
			var serviceRequest = CommonHandler._getAdditionalResource(eventContext,"serviceRequest").getCurrentRecord();
			var classstructureid = serviceRequest.get('classstructureid');
			if(classstructureid==null){
				classstructureid = 'null';
			}			
			var filter = {'classstructureid':classstructureid};
			var class_desc = "";
			var classpath = "";
			ModelService.filtered("classstructure", null, filter, null, false, true).then(function(classStructure){
				if (classStructure.count()>0){
					classpath = classStructure.getCurrentRecord().get('hierarchypath');
					class_desc = classStructure.getCurrentRecord().get('description');
					serviceRequest.set('classificationpath', classpath);
					serviceRequest.set('classificationdesc', class_desc);
				} else {
					serviceRequest.set('classificationpath', '');
					serviceRequest.set('classificationdesc', '');
				}
			});	
		},
		
		handleSRSpecResourceWhenGoingBack : function(eventContext, originalServiceRequest){
			if (originalServiceRequest.ticketSpec==null){
				WL.application.resources['serviceRequest.ticketSpec'].data = [];	
			} else {
				if (originalServiceRequest.ticketSpec.data==undefined){
					//originalServiceRequest.ticketSpec contains array instead of object
					WL.application.resources['serviceRequest.ticketSpec'].data = originalServiceRequest.ticketSpec;	
				} else {
					WL.application.resources['serviceRequest.ticketSpec'].data = originalServiceRequest.ticketSpec.data;	
				}	
			}
		},
		
		validateFollowupWonum : function(eventContext){
			var mywo = eventContext.getCurrentRecord().get('wonum')
			if (mywo == null || mywo == ""){
				eventContext.setDisplay(false);	
			}
		}	
	});
});
