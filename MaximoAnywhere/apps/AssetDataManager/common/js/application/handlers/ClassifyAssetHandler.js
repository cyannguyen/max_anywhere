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
define("application/handlers/ClassifyAssetHandler", 
	   [ "dojo/_base/array",
	     "dojo/_base/declare",
	     "dojo/Deferred",
	     "dojo/promise/all",
	     "platform/logging/Logger",
	     "platform/model/ModelService",
	     "application/handlers/CommonHandler",
	     "platform/store/_ResourceMetadataContext",
	     "platform/util/PlatformConstants",
	     "platform/exception/PlatformRuntimeException",
	     "platform/warning/PlatformRuntimeWarning",
	     "application/business/AssetObject",
	     "platform/handlers/_ApplicationHandlerBase"
	     ],
function(arrayUtil, declare, Deferred, all, Logger, ModelService, CommonHandler, ResourceMetadata, PlatformConstants, PlatformRuntimeException,
		PlatformRuntimeWarning, AssetObject, ApplicationHandlerBase) {
	
	return declare( [ApplicationHandlerBase], {		

		pageStack : [],
		currentClass : null,
		topPage: false,

/**@memberOf application.handlers.ClassifyAssetHandler */
		openTop : function (eventContext) {
			this.topPage = true;
			eventContext.application.showBusy();
			var assetSet = eventContext.application.getResource('asset');
			var asset = assetSet.getCurrentRecord();
			asset.set('classificationdesc', null);
			asset.set('classificationpath', null);
			this.hideIfNull(eventContext);
			this.pageStack = [];
			this.currentClass = null;
			var csList = CommonHandler._getAdditionalResource(eventContext,"classstructure");
			csList.filter("1==0");
		},			
		
		renderTop : function (eventContext) {
			if (this.topPage) {
				var filter = {'filterparent': 'nullvalue'};		
				this._refreshLevel(eventContext, filter);
			}
		},			
		
		getMyViewControl : function (eventContext) {
			
			if (eventContext._controlType=='View') {				
				return eventContext;
			}
			else {
				return eventContext.ui.getCurrentViewControl(); 
			}
		},
		
		openChildren : function(eventContext) {
			this.topPage = false;
			var filter="";
			var assetSet = eventContext.application.getResource('asset');
			var asset = assetSet.getCurrentRecord();
			var selectedRecord = CommonHandler._getAdditionalResource(eventContext,"classstructure").getCurrentRecord();
			if (selectedRecord) {
				this.currentClass = selectedRecord.get('classstructureid');
				asset.set('classificationdesc', selectedRecord.get('description'));
				asset.set('classificationpath', selectedRecord.get('hierarchypath'));				
				if (selectedRecord.haschildren) {
					filter = {'filterparent' : selectedRecord.classstructureid};
					this._refreshLevel(eventContext, filter);
					eventContext.application.hideBusy();
				}
				else {
					this.saveClassify(eventContext);
					return;					
				}
			}
		},
		
		hideIfNull : function(eventContext){
			
			var asset = CommonHandler._getAdditionalResource(eventContext,"asset").getCurrentRecord();
			if ((this.topPage) || (asset.get('classificationpath') == null || asset.get('classificationpath') == ""))
			{
				eventContext.setDisplay(false);
			}
			else {
				eventContext.setDisplay(true);
			}
			
		},
				
		_refreshLevel: function(eventContext, filter){
			var self = this;
			this._pushPage(eventContext, filter);
			var promise = this._fetchLevel(eventContext,filter);
			promise.then(function(newrecords){
				eventContext.application.hideBusy();
				if (newrecords.count()>0){
					self.getMyViewControl(eventContext).refreshLists();
					self.getMyViewControl(eventContext).refresh();
					self.getMyViewControl(eventContext).baseWidget.scrollTo(0,0);
				}else {
					// the haschildren flag was set but no recs, just stop here and save
					self.saveClassify(eventContext);	
				}
			}).otherwise(function(error){
					Logger.trace("Error received finding next level: " + error);
			});				
										
		},
			
		_fetchLevel: function(eventContext, filter){

			Logger.trace("Fetching classstructure level using filter : " + filter);
			var deferred =  new Deferred();			
			
			ModelService.filtered('classstructure', null, filter, 1000, false, true).then(function (dataSet) {
				dataSet.resourceID = 'classstructure';
				dataSet.sort('classificationid');
				eventContext.application.addResource(dataSet);
				deferred.resolve(dataSet);
			}).otherwise(function(e){
				deferred.reject(new PlatformRuntimeWarning('error fetching classstructure info'));
			});
			
			return deferred.promise;
		}, 
		
		_pushPage : function (eventContext, filter) {
			var asset = CommonHandler._getAdditionalResource(eventContext,"asset").getCurrentRecord();
			var page = { filter : filter,
						 classstructureid : this.currentClass, 
						 classificationdesc : asset.get('classificationdesc'),
						 classificationpath : asset.get('classificationpath')
						};
			this.pageStack.push(page);
		},		
		
		handleClassifyBack : function(eventContext) {
			//note, for this event 'this' is the view, not this handler
			var thisHandler = this.application['application.handlers.ClassifyAssetHandler'];
			if (thisHandler.pageStack.length > 1) {
				// drop the current one, and grab the parent and refresh
				thisHandler.pageStack.pop();
				var curPage = thisHandler.pageStack.pop();
				var asset = eventContext.application.getResource('asset').getCurrentRecord();
				thisHandler.currentClass = curPage.classstructureid;
				asset.set('classificationdesc', curPage.classificationdesc);
				asset.set('classificationpath', curPage.classificationpath);
				eventContext.application.showBusy();
				thisHandler._refreshLevel(eventContext, curPage.filter);				
			}
			else {
				thisHandler.cancelClassify(eventContext);				
			}
		},
				
		cancelClassify: function(eventContext) {
			var assetSet = eventContext.application.getResource('asset');
			var asset = assetSet.getCurrentRecord();
			AssetObject.refreshClassDescription(asset).then(function(){
				eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);	
			}); 			
		},
		
		saveClassify: function(eventContext) {
			Logger.trace("Saving off the current classification");
			var asset = CommonHandler._getAdditionalResource(eventContext,"asset").getCurrentRecord();
			var assetClassstructureMetaData = asset.getRuntimeFieldMetadata('classstructureid');
			if(assetClassstructureMetaData.get("readonly") == true){
				this.cancelClassify(eventContext);
				throw new PlatformRuntimeException('readonly', [eventContext.viewControl.label.textMsg]);
			}
			var assetSet = eventContext.application.getResource('asset');
			var asset = assetSet.getCurrentRecord();
			asset.set('classstructureid', this.currentClass);
			AssetObject.updateSpecifications(asset).then(function(){
				eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);	
			}); 			
		},
		
		clearClassify: function(eventContext) {
			var self = this;
			var asset = CommonHandler._getAdditionalResource(eventContext,"asset").getCurrentRecord();
			asset.set('classstructureid',null);
			asset.set('classificationpath', null);
			asset.set('classificationdesc', null);			
			asset.getModelDataSet("assetSpec", true).
		    then(function(assetSpecs){
		    	assetSpecs.deleteLocalAll();
		    	self.handleClassifyBack(eventContext.parentControl);
		    });
		},
		
		hideClassify: function(eventContext){
			if (!(this.pageStack.length > 1)) 
			{
				eventContext.setDisplay(false);
				eventContext.setVisibility(false);
			}			
		},
		
		hideClear: function(eventContext){
			if (this.pageStack.length > 1) 
			{
				eventContext.setDisplay(false);
				eventContext.setVisibility(false);			
			}
		},
		
		clearClassification : function(eventContext){
			Logger.trace("Clear classification header");
			var asset = CommonHandler._getAdditionalResource(eventContext,"asset").getCurrentRecord();
			asset.set('classificationpath', '');
			asset.set('classificationdesc', '');
		}
				
	});
});
