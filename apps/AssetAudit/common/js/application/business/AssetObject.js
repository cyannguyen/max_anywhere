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

define("application/business/AssetObject", 
["application/business/FieldUtil",
 "platform/model/ModelService",
 "dojo/_base/array",
 "application/business/AssetStatusHandler",
 "platform/exception/PlatformRuntimeException",
 "platform/util/DateTimeUtil",
 "platform/logging/Logger",
 "platform/auth/UserManager",
 "dojo/Deferred",
 "platform/util/CurrentTimeProvider",
 "platform/store/_ResourceMetadataContext",
 "platform/warning/PlatformRuntimeWarning",], 
 function(fieldUtil, ModelService, array, AssetStatusHandler, PlatformRuntimeException, DateTimeUtil, Logger, UserManager, Deferred, CurrentTimeProvider, ResourceMetaData, PlatformRuntimeWarning) {	
	return {
/**@memberOf application.business.AssetObject */
		onInitialize : function(asset) {
			asset.set("statusdesc", AssetStatusHandler.getInstance().toDescription(asset.get("status")));

			asset.watch("status", function(){
				this.set("statusdesc", AssetStatusHandler.getInstance().toDescription(this.get("status")));
			});		

		},
		onAdd : function(asset) {
		},
		beforeSave : function(asset) {
		},
		
		changeStatus: function(asset, newStatus, rolltoallchildren, removefromactiveroutes, removefromactivesp, changepmstatus, statusDate){
			Logger.trace("[WorkOrderObject] changeStatus ");
			var currentStatus = asset.get("status");
			if(AssetStatusHandler.getInstance().canPerformTransition(currentStatus, newStatus)){
				asset.openPriorityChangeTransaction();
				asset.set("status", newStatus);
				//asset.set("memo", memo);
				asset.setDateValue("changestatusdate", statusDate);
				if (rolltoallchildren){
					asset.set("rolltoallchildren", rolltoallchildren);
				}
				if(removefromactiveroutes){
					asset.set("removefromactiveroutes", removefromactiveroutes);
				}
				if (removefromactivesp){
					asset.set("removefromactivesp", removefromactivesp);
				}
				if(changepmstatus){
					asset.set("changepmstatus", changepmstatus);
				}
				asset.closePriorityChangeTransaction();
			}
			else{			
				Logger.trace("[AssetObject] changeStatus status can not be changed");
				 throw new PlatformRuntimeException('invalidstatustransition',[currentStatus, newStatus]);
			}
			Logger.trace("[AssetObject] changeStatus status changed");
		},
				
		afterPatch : function(asset){
		}
	};
	
});
