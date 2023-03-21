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

define("application/handlers/StatusChangeHandler", 
	   [ "dojo/_base/declare",
	     "dojo/_base/array",
	     "platform/handlers/_ApplicationHandlerBase",
	     "platform/model/ModelService",
	     "platform/exception/PlatformRuntimeException",
	     "platform/warning/PlatformRuntimeWarning",
	     "platform/util/PlatformConstants",
	     "platform/format/FormatterService",
	     "platform/translation/SynonymDomain",
	     "platform/logging/Logger",
	     "application/business/AssetObject",
	     "application/business/AssetStatusHandler",
	     "application/handlers/CommonHandler"],
function(declare, array, ApplicationHandlerBase, ModelService, PlatformRuntimeException, PlatformRuntimeWarning, 
		PlatformConstants, FormatterService, SynonymDomain, Logger, AssetObject, AssetStatusHandler, CommonHandler) {
	return declare( ApplicationHandlerBase, {
		
/**@memberOf application.handlers.StatusChangeHandler */
		initEditStatusView : function(eventContext) {
			var statusChange = CommonHandler._getAdditionalResource(eventContext,"statusChangeResource").getCurrentRecord();
			statusChange.setNullValue("status");
			statusChange.setNullValue("statusdesc");
			statusChange.setNullValue("maxvalue");
			statusChange.set("rolltoallchildren", false);
			statusChange.set("removefromactiveroutes", false);
			statusChange.set("removefromactivesp", false);
			statusChange.set("changepmstatus", false);
			statusChange.getRuntimeFieldMetadata('rolltoallchildren').set('readonly', false);
			statusChange.getRuntimeFieldMetadata('removefromactiveroutes').set('readonly', false);
			statusChange.getRuntimeFieldMetadata('removefromactivesp').set('readonly', false);
			statusChange.getRuntimeFieldMetadata('changepmstatus').set('readonly', false);

		},
		
		cleanupEditStatusView : function(eventContext) {
			this._clearAssetStatusFilter();
		},
		
		enableCommitButton : function(eventContext) {
			var asset = CommonHandler._getAdditionalResource(eventContext,"asset").getCurrentRecord();
			if(!asset || asset.isErrored()) {
				eventContext.setDisplay(false);
				return;
			}
			eventContext.setDisplay(true);
		},
		
		commitAssetStatusChange: function(eventContext){			
			if(!eventContext.viewControl.validate()){return;}
			
			var asset=eventContext.getCurrentRecord();
			
			//When the status change causes a save for a new asset (no updownstatusdate yet)
			//hide the create and cancel buttons on the new asset page because
			//the save is done here.
			if(asset.updownstatusdate == null){
				var viewID = eventContext.application.ui.viewHistory[eventContext.application.ui.viewHistory.length-2].id;
				var activeView = eventContext.application.ui.getViewFromId(viewID);
				activeView.setFooterDisplay(false);
			}
			this._saveStatusChange(asset);
			this._clearAssetStatusFilter();
		},
				
		// Handle Cancel button click on Change Status view
		discardStatusChange: function(eventContext){	
			this._clearAssetStatusFilter();
			this.ui.hideCurrentView(PlatformConstants.CLEANUP);		
		},
								
		_saveStatusChange: function(asset){
			var statusChange = CommonHandler._getAdditionalResource(this,"statusChangeResource").getCurrentRecord();
			var newStatus=statusChange.get("status");
			var rolltoallchildren=statusChange.get("rolltoallchildren");
			var removefromactiveroutes=statusChange.get("removefromactiveroutes");
			var removefromactivesp=statusChange.get("removefromactivesp");
			var changepmstatus=statusChange.get("changepmstatus");
			
			AssetObject.changeStatus(asset, newStatus, rolltoallchildren, removefromactiveroutes, removefromactivesp, changepmstatus);

			var recordSet = asset.getOwner();
			
			var self = this;
			ModelService.save(recordSet).then(function(){
			       self.ui.hideCurrentView();
			});			
			
		},
		
		// Filter Asset statuses to those available for selection
		filterAssetStatus: function(eventContext){
			if(eventContext.application.ui.showAllStatus != null && 
					eventContext.application.ui.showAllStatus == true){
				var domainAssetStatus = CommonHandler._getAdditionalResource(eventContext,"domainAssetStatus");
				CommonHandler._clearFilterForResource(eventContext,domainAssetStatus);
				// filter unique values
				var filter=[];
				var statusvalues = [];
				for (var i=0; i < domainAssetStatus.count() ; i++) {
					var assetStatus = domainAssetStatus.data[i];
					var statusvalue = assetStatus.value;
					if (statusvalues.indexOf(statusvalue) == -1) {
						statusvalues.push(statusvalue);
						filter.push({remoteid : assetStatus.getRemoteId()});
					}
				}
				domainAssetStatus.lookupFilter=filter;
				return;
			}
			var currentAsset = CommonHandler._getAdditionalResource(eventContext,"asset").getCurrentRecord();
			this._filterStatus(currentAsset,eventContext);
			
		},
		
		_filterStatus: function(record,eventContext){
			var assetStatusHandler = AssetStatusHandler.getInstance();
			
			var domainAssetStatus = this._clearAssetStatusFilter();
			var currentStatus = record.get("status");
			currentStatus = SynonymDomain.resolveToInternal(domainAssetStatus, currentStatus);
			
			var assetOrg = record.get("orgid");
			
			var foundOrgStatuses=false;
			
			//Get the org specific statuses
			var assetStatusDomain = this._clearAssetStatusFilter();	
			assetStatusDomain.filter("orgid==$1", assetOrg);
			if (assetStatusDomain.count() > 0) {
				Logger.log("found org specific statuses");
				foundOrgStatuses=true;
			} 
			
			//Get the valid states
			var assetStatusDomain = this._clearAssetStatusFilter();	
			var filter = assetStatusHandler.statesFromAsDataSetFilter(currentStatus, 'value');
			assetStatusDomain.filter(filter.query, filter.params);
			
			if (foundOrgStatuses) {
				assetStatusDomain.filter("orgid==$1", assetOrg);
			} else {
				assetStatusDomain.filter("orgid==null");
			}
			return assetStatusDomain;
		},
		
		_clearAssetStatusFilter : function() {
			var assetStatusDomain = this.application.getResource('domainAssetStatus');
			if(assetStatusDomain && assetStatusDomain.isFiltered()){
				assetStatusDomain.clearFilterAndSort();
			}
			return assetStatusDomain;
		},
		
		resolveStatusDate : function(statusDate) {
			var userLocale = this.application.getUserLocale();
			return [ FormatterService.toDisplayableValue(statusDate, "datetime", userLocale) ];
		}
		
	});
});
