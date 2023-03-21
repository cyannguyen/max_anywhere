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

define("application/business/WorkOrderObject", 
["application/business/FieldUtil",
 "dojo/_base/array",
 "platform/exception/PlatformRuntimeException",
 "platform/logging/Logger",
 "application/business/WorkOrderStatusHandler"], 
 function(fieldUtil, array, PlatformRuntimeException, Logger, WorkOrderStatusHandler) {
	return {
/**@memberOf application.business.WorkOrderObject */
		onInitialize : function(workOrder) {
			fieldUtil.initCompositeField("asset", "assetdesc", "assetnumanddescription", workOrder);
			fieldUtil.initCompositeField("location", "locationdesc", "locationanddescription", workOrder);
			
			workOrder.set("statusdesc", WorkOrderStatusHandler.getInstance().toDescription(workOrder.get("status")));
		},
		onAdd : function(workOrder) {
			// Implement default behavior for new work orders - e.g.: predefined values
		},
		beforeSave : function(workOrder) {
			// Implement validation for workOrder
		},
		statusChanged : function(workOrder, newValue, previousValue) {
	         workOrder.set("statusdesc", WorkOrderStatusHandler.getInstance().toDescription(newValue));
		},
		
		inProgress: function(workOrder, statusDate, memo, taskSet){
			var inProg = WorkOrderStatusHandler.getInstance().toDefaultExternalLabel("INPRG");
			this.changeStatus(workOrder, inProg, statusDate, memo, taskSet); 
		},
		cannotBeStarted: function(workOrder){
			var status = WorkOrderStatusHandler.getInstance().toInternalState(workOrder.get("status"));
			return status == "WAPPR" || status == "CLOSE" || status == "CAN" || workOrder.isErrored(); 
		},
		complete: function(workOrder, statusDate, memo, taskSet){				
			var comp = WorkOrderStatusHandler.getInstance().toDefaultExternalLabel("COMP");
			this.changeStatus(workOrder, comp, statusDate, memo);
		},
		isStarted: function(workOrder){
			return workOrder.get("started") || false;
		},
		isCompleted: function(workOrder){
			var status = WorkOrderStatusHandler.getInstance().toInternalState(workOrder.get("status"));
			return status == "COMP" || status == "CLOSE";
		},
		isApproved: function(workOrder){
			var status = WorkOrderStatusHandler.getInstance().toInternalState(workOrder.get("status"));
			return status == "APPR";
		},
		isInProgres: function(workOrder){
			var status = WorkOrderStatusHandler.getInstance().toInternalState(workOrder.get("status"));
			return status == "INPRG";
		},
		changeStatus: function(workOrder, newStatus, statusDate, memo, taskSet){
			var currentStatus = workOrder.get("status");
			if(WorkOrderStatusHandler.getInstance().canPerformTransition(currentStatus, newStatus)){
				workOrder.openPriorityChangeTransaction();
				workOrder.set("status", newStatus);
				workOrder.setDateValue("statusDate", statusDate);
				workOrder.setDateValue("changestatusdate", statusDate);
				workOrder.set("memo", memo);				
				if(taskSet && taskSet.data.length>0){
					this.changeStatusOfTasks(workOrder, newStatus, statusDate, memo, taskSet);
				}
				workOrder.closePriorityChangeTransaction();
			}
			else{				
				 throw new PlatformRuntimeException('invalidstatustransition',[currentStatus, newStatus]);
			}
		},
		changeStatusOfTasks: function(workOrder, newStatus, statusDate, memo, taskSet){
			if(taskSet && taskSet.isFiltered()) {
				taskSet.clearFilterAndSort();
			}
				
			var inheritingTasks = taskSet.find("inheritstatuschanges==$1", true);
			
			var self=this;
			array.forEach(inheritingTasks, function(record){
				if(WorkOrderStatusHandler.getInstance().canPerformTransition(record.get("status"), newStatus)){
					self.changeStatus(record, newStatus, statusDate, memo, null);
				}
			});
		},		
		taskChangeStatus: function(task, newStatus, statusDate, memo){
			var taskId = task.get("taskid");
			var currentStatus = task.get("status");

			if(WorkOrderStatusHandler.getInstance().canPerformTransition(currentStatus, newStatus)){
				task.openPriorityChangeTransaction();
				task.set("status", newStatus);
				task.setDateValue("statusDate", statusDate);
				task.setDateValue("changestatusdate", statusDate);
				task.set("memo", memo);				
				task.closePriorityChangeTransaction();
			}
			else{				
				 throw new PlatformRuntimeException('invalidstatustransition',[currentStatus, newStatus]);
			}
		}

		
	}
});
