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

define("application/business/LocationObject", 
["application/business/FieldUtil",
 "dojo/_base/array",
 "platform/exception/PlatformRuntimeException",
 "platform/logging/Logger",
 "application/business/LocationStatusHandler"], 
 function(fieldUtil, array, PlatformRuntimeException, Logger, LocationStatusHandler) {
	return {
/**@memberOf application.business.LocationObject */
		onInitialize : function(location) {
			//fieldUtil.initCompositeField("asset", "assetdesc", "assetnumanddescription", workOrder);
			//fieldUtil.initCompositeField("location", "locationdesc", "locationanddescription", workOrder);
			
			location.set("locstatus", LocationStatusHandler.getInstance().toDescription(location.get("locstatus")));
		},
		onAdd : function(location) {
			// Implement default behavior for new work orders - e.g.: predefined values
		},
		beforeSave : function(location) {
			// Implement validation for workOrder
		},
		statusChanged : function(location, newValue, previousValue) {
	         location.set("status", LocationStatusHandler.getInstance().toDescription(newValue));
		},
		
		inProgress: function(location, statusDate, memo, taskSet){
			var inProg = LocationStatusHandler.getInstance().toDefaultExternalLabel("INPRG");
			this.changeStatus(location, inProg, statusDate, memo, taskSet); 
		},
		cannotBeStarted: function(location){
			var status = LocationStatusHandler.getInstance().toInternalState(location.get("status"));
			return status == "WAPPR" || status == "CLOSE" || status == "CAN" || location.isErrored(); 
		},
		complete: function(location, statusDate, memo, taskSet){				
			var comp = LocationStatusHandler.getInstance().toDefaultExternalLabel("COMP");
			this.changeStatus(location, comp, statusDate, memo);
		},
		isStarted: function(location){
			return location.get("started") || false;
		},
		isCompleted: function(location){
			var status = LocationStatusHandler.getInstance().toInternalState(location.get("status"));
			return status == "COMP" || status == "CLOSE";
		},
		isApproved: function(location){
			var status = LocationStatusHandler.getInstance().toInternalState(location.get("status"));
			return status == "APPR";
		},
		isInProgres: function(location){
			var status = LocationStatusHandler.getInstance().toInternalState(location.get("status"));
			return status == "INPRG";
		},
		changeStatus: function(location, newStatus, statusDate, memo, taskSet){
			var currentStatus = location.get("status");
			if(LocationStatusHandler.getInstance().canPerformTransition(currentStatus, newStatus)){
				location.set("status", newStatus);
				location.closePriorityChangeTransaction();
			}
			else{				
				 throw new PlatformRuntimeException('invalidstatustransition',[currentStatus, newStatus]);
			}
		},		
	}
});
