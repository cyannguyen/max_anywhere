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
	     "platform/model/ModelService",
	     "dojo/_base/array",
	     "platform/handlers/_ApplicationHandlerBase",
	     "application/business/WorkOrderObject",
	     "application/business/WorkOrderStatusHandler",
	     "platform/exception/PlatformRuntimeException",
	     "platform/warning/PlatformRuntimeWarning",
	     "application/handlers/CommonHandler",
	     "platform/util/PlatformConstants",
	     "platform/translation/SynonymDomain",
	     "platform/format/FormatterService",
	     "platform/logging/Logger"
	     ],
function(declare, ModelService, array, ApplicationHandlerBase, WorkOrderObject, WorkOrderStatusHandler, PlatformRuntimeException, PlatformRuntimeWarning, CommonHandler, PlatformConstants, SynonymDomain, FormatterService, Logger) {
	return declare( ApplicationHandlerBase, {
		
/**@memberOf application.handlers.StatusChangeHandler */
		initEditStatusView : function(eventContext) {
			var workOrder = eventContext.getCurrentRecord();
			var statusChange = CommonHandler._getAdditionalResource(eventContext,"statusChangeResource").getCurrentRecord();			
			statusChange.setDateValue("changedate", this.application.getCurrentDateTime());
			statusChange.setNullValue("status");
			statusChange.setNullValue("statusdesc")
			statusChange.setNullValue("memo");
				
		},
		
		cleanupEditStatusView : function(eventContext) {

		},
		
		enableCommitButton : function(eventContext) {
			var workOrder = CommonHandler._getAdditionalResource(eventContext,"workOrder").getCurrentRecord();
			if(!workOrder || workOrder.isErrored()) {
				eventContext.setDisplay(false);
				return;
			}
			eventContext.setDisplay(true);
		},
		
		//Commit changes to WO Status (handle OK button clicked)
		commitWOStatusChange: function(eventContext){			
			var workOrder=eventContext.getCurrentRecord();
			var statusChange = CommonHandler._getAdditionalResource(eventContext,"statusChangeResource").getCurrentRecord();
			var newStatus=statusChange.get("status");
			
			//Validate if status date change is lesser than last WO status change date
			if(workOrder.getAsDateOrNull('changestatusdate') > statusChange.getAsDateOrNull('changedate')){
				throw new PlatformRuntimeException('statusDateinFuture',[this.resolveStatusDate(workOrder.getAsDateOrNull('changestatusdate'))]);								
			}			
			
			if(!eventContext.viewControl.validate()){return;}
			
			var newInternalStatus = WorkOrderStatusHandler.getInstance().toInternalState(newStatus);
							
			var self = this;
			this._saveStatusChange(workOrder).then(function(e){
				self.ui.hideCurrentView();
			});
		},
		
		commitTaskStatusChange: function(eventContext){
			var currentTask = CommonHandler._getAdditionalResource(this,"workOrder.tasklist").getCurrentRecord();
			var statusChange = CommonHandler._getAdditionalResource(eventContext,"statusChangeResource").getCurrentRecord();
			
			//Validate if status date change is lesser than last WO status change date
			if(currentTask.getAsDateOrNull('changestatusdate') > statusChange.getAsDateOrNull('changedate')){
				throw new PlatformRuntimeException('statusDateinFuture',[this.resolveStatusDate(currentTask.getAsDateOrNull('changestatusdate'))]);								
			}			
			
			if(!eventContext.viewControl.validate()){return;}

			//var newInternalStatus = WorkOrderStatusHandler.getInstance().toInternalState(newStatus);
			
			var self = this;
			this._saveStatusChange(currentTask).then(function(e){
				self.ui.hideCurrentView();
			});
		},
			
		
		// Handle Cancel button click on Change Status view
		discardStatusChange: function(eventContext){	
			this.ui.hideCurrentView(PlatformConstants.CLEANUP);		
		},
		
		resolveWonum : function(control) {
			return [ CommonHandler._getAdditionalResource(this,"workOrder").getCurrentRecord().get('wonum') ];
		},
		
		resolveTaskAndWonum : function(control) {
			return [CommonHandler._getAdditionalResource(this,"workOrder.tasklist").getCurrentRecord().get("taskid"), 
			        CommonHandler._getAdditionalResource(this,"workOrder").getCurrentRecord().get('wonum') ];
		},
		
		resolveActivityAndWonum : function(control){
			var startedWO = this._getStartedWO();
			
			return [startedWO.get('wonum'), 
			        CommonHandler._getAdditionalResource(this,"workOrder").getCurrentRecord().get('wonum')];
			
		},

				
		_saveStatusChange: function(workOrderOrTask){
			var statusChange = CommonHandler._getAdditionalResource(this,"statusChangeResource").getCurrentRecord();
			var newStatus=statusChange.get("status");
			var memo = statusChange.get("memo");
			var statusDate = statusChange.getAsDateOrNull("changedate");
	
			return this._updateStatusAndSave(workOrderOrTask, newStatus, statusDate, memo);

		},

		_updateStatusAndSave: function(workOrderOrTask, newStatus, statusDate, memo){
			
			var taskId = workOrderOrTask.get("taskid");

			if (taskId){ //If the parameter is a Task
				WorkOrderObject.taskChangeStatus(workOrderOrTask, newStatus, statusDate, memo);
			} else {
				var taskSet = CommonHandler._getAdditionalResource(this,"workOrder.tasklist");
				WorkOrderObject.changeStatus(workOrderOrTask, newStatus, statusDate, memo, taskSet);
			}
			
			var recordSet = workOrderOrTask.getParent()? workOrderOrTask.getParent().getOwner() :  workOrderOrTask.getOwner();
			
			var self = this;
			return ModelService.save(recordSet);		
			
		},
			
		
		// Filter WO statuses to those available for selection
		filterWOStatus: function(eventContext){
			if(eventContext.application.ui.showAllStatus != null && 
					eventContext.application.ui.showAllStatus == true){
				var domainwostatus = CommonHandler._getAdditionalResource(eventContext,"domainwostatus");
				CommonHandler._clearFilterForResource(eventContext,domainwostatus);
				// filter unique values
				var filter=[];
				var statusvalues = [];
				for (var i=0; i < domainwostatus.count() ; i++) {
					var wostatus = domainwostatus.data[i];
					var statusvalue = wostatus.value;
					if (statusvalues.indexOf(statusvalue) == -1) {
						statusvalues.push(statusvalue);
						filter.push({remoteid : wostatus.getRemoteId()});
					}
				}
				domainwostatus.lookupFilter=filter;
				return;
			}
			var currentWO = CommonHandler._getAdditionalResource(this,"workOrder").getCurrentRecord();
			var actualLaborSet = CommonHandler._getAdditionalResource(this,"workOrder.actuallaborlist");
			
			
			var woStatusDomain = this._filterStatus(currentWO);
			
			if(actualLaborSet.data.length>0){
				woStatusDomain.filter("maxvalue!=$1", "CAN");
			}
		},
		
		filterTaskStatus: function(eventContext){
			var currentTask = CommonHandler._getAdditionalResource(this,"workOrder.tasklist").getCurrentRecord();
			var actualLaborSet = CommonHandler._getAdditionalResource(this,"workOrder.actuallaborlist");
			
			var woStatusDomain = this._filterStatus(currentTask);
			
			if(actualLaborSet.find("actualtaskid==$1", currentTask.get("taskid"))>0){
				woStatusDomain.filter("maxvalue!=$1", "CAN");
			}
		},
		
		_filterStatus: function(record){
			var woStatusDomain = this.application.getResource('domainwostatus');
			var woStatusHandler = WorkOrderStatusHandler.getInstance();
			var currentStatus = record.get("status");
			var workorderOrg = record.get("orgid");
			
			var foundOrgStatuses=false;
			
			//Get the org specific statuses
			woStatusDomain.clearFilterAndSort();	
			woStatusDomain.filter("orgid==$1", workorderOrg);
			if (woStatusDomain.count() > 0) {
				Logger.log("found org specific statuses");
				foundOrgStatuses=true;
			} 
			
			//Get the valid states
			woStatusDomain.clearFilterAndSort();
			var filter = woStatusHandler.statesFromAsDataSetFilter(currentStatus, 'value');
			
			
			if(woStatusDomain.isFiltered()){
				woStatusDomain.clearFilterAndSort();
			}
			woStatusDomain.filter(filter.query, filter.params);
			
			if (foundOrgStatuses) {
				woStatusDomain.filter("orgid==$1", workorderOrg);
			} else {
				woStatusDomain.filter("orgid==null");
			}
			return woStatusDomain;
		},
		
		enableCompleteTaskButton : function(eventContext) {
			var currentTask = eventContext.getCurrentRecord();
			var externalComplete= WorkOrderStatusHandler.getInstance().toDefaultExternalLabel("COMP");
			
			if(!WorkOrderStatusHandler.getInstance().canPerformTransition(currentTask.get("status"), externalComplete)) {
				eventContext.setDisplay(false);
			}
			else{
				eventContext.setDisplay(true);
			}
		},
		
		handleCompleteWorkClick : function(eventContext){
			var currentTask = eventContext.getCurrentRecord();
			var externalComplete= WorkOrderStatusHandler.getInstance().toDefaultExternalLabel("COMP");
			
			WorkOrderObject.changeStatus(currentTask, externalComplete, this.application.getCurrentDateTime(), null, null);
			
			var recordSet = currentTask.getParent().getOwner();
			
			ModelService.save(recordSet);

		},
		
		enableApproveButton : function(eventContext) {
			var workOrder = eventContext.getCurrentRecord();
			var currentStatus = workOrder.get("status");
			
			if(!workOrder || workOrder.isErrored() || WorkOrderStatusHandler.getInstance().toInternalState(currentStatus) != "WAPPR"
				|| !WorkOrderStatusHandler.getInstance().canPerformTransition(currentStatus, "APPR")){
				eventContext.setDisplay(false);
			}
			else{
				eventContext.setDisplay(true);
			}
		},
		
		enableCancelButton : function(eventContext) {
			var workOrder = eventContext.getCurrentRecord();
			var currentStatus = workOrder.get("status");
			
			if(!workOrder || workOrder.isErrored() || !WorkOrderStatusHandler.getInstance().canPerformTransition(currentStatus, "CAN")){
				eventContext.setDisplay(false);
			}
			else{
				eventContext.setDisplay(true);
			}
		},
		
		handleApproveWorkClick : function(eventContext){
			var currentWO = eventContext.getCurrentRecord();
			var currentStatus = currentWO.get("status");
			
			var statusDomain = CommonHandler._getAdditionalResource(eventContext,"domainwostatus");	
			CommonHandler._clearFilterForResource(eventContext,statusDomain);
			
			var externalApproved = SynonymDomain.resolveToDefaultExternal(statusDomain, 'APPR');
			this._updateStatusAndSave(currentWO, externalApproved, eventContext.application.getCurrentDateTime(), null);			
		},
		
		handleCancelWorkClick : function(eventContext){		
			this.ui.show("WorkApproval.CancelConfirmationDialog");
		},
		
		handleNoCancelWorkClick : function(eventContext){
			this.ui.hideCurrentDialog();
		},
		
		handleYesCancelWorkClick : function(eventContext){
			this.ui.hideCurrentDialog();
			var currentWO = CommonHandler._getAdditionalResource(this,"workOrder").getCurrentRecord();
			var externalCancelled = WorkOrderStatusHandler.getInstance().toDefaultExternalLabel("CAN");
			
			this._updateStatusAndSave(currentWO, externalCancelled, eventContext.application.getCurrentDateTime(), null);
			this.ui.getCurrentViewControl().lists[0].refresh();
		},
		
		resolveStatusDate : function(statusdate) {
			var userLocale = this.application.getUserLocale();
			return [ FormatterService.toDisplayableValue(statusdate, "datetime", userLocale) ];
		},
		
		
	});
});
