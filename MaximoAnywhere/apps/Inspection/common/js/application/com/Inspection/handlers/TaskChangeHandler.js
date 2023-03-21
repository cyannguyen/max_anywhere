/*
 * Licensed Materials - Property of IBM
 * "Restricted Materials of IBM"
 *
 * 5725-M39
 *
 * (C) COPYRIGHT IBM CORP. 2015,2020 All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with
 * IBM Corp. 
 *
 */

define("application/com/Inspection/handlers/TaskChangeHandler", 
	   [ "dojo/_base/declare",
	     "platform/model/ModelService",
	     "dojo/_base/array",
	     "platform/handlers/_ApplicationHandlerBase",
	     "application/business/WorkOrderObject",
	     "application/business/WorkOrderTimer",
	     "application/business/WorkOrderStatusHandler",
	     "platform/exception/PlatformRuntimeException",
	     "platform/warning/PlatformRuntimeWarning",
	     "application/handlers/CommonHandler",
	     "platform/util/PlatformConstants",
	     "platform/format/FormatterService"],
function(declare, ModelService, array, ApplicationHandlerBase, WorkOrderObject, WorkOrderTimer, WorkOrderStatusHandler, PlatformRuntimeException, PlatformRuntimeWarning, CommonHandler, PlatformConstants, FormatterService) {
	return declare( ApplicationHandlerBase, {
		
/**@memberOf application.com.Inspection.handlers.TaskChangeHandler */
		handleCompleteWorkClick : function(eventContext){
			var currentTask = eventContext.getCurrentRecord();
			var externalComplete= WorkOrderStatusHandler.getInstance().toDefaultExternalLabel("COMP");
			
			WorkOrderObject.changeStatus(currentTask, externalComplete, this.application.getCurrentDateTime(), null, null);
			
			//The currentTask.getParent() returns an old copy of tasklist. 
			//Hence it does not reflect the above updated tasklist record.
			//To fix this; the old copy is replaced by the new copy.
			var currentTaskOwner = currentTask.getOwner();
			currentTaskOwner.getParent()[currentTaskOwner._relationNameWithParent] = currentTaskOwner;
			var recordSet = currentTaskOwner.getParent().getOwner();
			ModelService.save(recordSet);

			eventContext.setDisplay(false);
		},
		
		displayCompleteConfirmationDialog: function(eventContext){
			
			eventContext.ui.show('Inspection.CompleteWorkDialog');
			return;
			
		},
		
		enableWOcompleteButton: function(eventContext){
			
			var workOrder = CommonHandler._getAdditionalResource(eventContext,"workOrder").getCurrentRecord();
			var statusChange= WorkOrderStatusHandler.getInstance().toDefaultExternalLabel("COMP");
			if((!workOrder || workOrder.isErrored()) || 
					(!WorkOrderStatusHandler.getInstance().canPerformTransition(workOrder.get("status"), statusChange)) ||
					workOrder.get("status") == "COMP") {
				eventContext.setDisplay(false);
				return;
			}
			eventContext.setDisplay(true);
		},
		
		cancelCommitWOStatus: function(eventContext){
			eventContext.ui.hideCurrentDialog();
			
		},
		
		commitCompWOStatusChange: function(eventContext){
			
			eventContext.ui.hideCurrentDialog();
			var workOrder=CommonHandler._getAdditionalResource(eventContext,"workOrder").getCurrentRecord();
			var statusChange= WorkOrderStatusHandler.getInstance().toDefaultExternalLabel("COMP");
			var taskSet = CommonHandler._getAdditionalResource(this,"workOrder.tasklist");
			workOrder.tasklist = taskSet;
			WorkOrderObject.changeStatus(workOrder, statusChange, this.application.getCurrentDateTime(), null, workOrder.tasklist);
			var recordSet = workOrder.getOwner();
			
			ModelService.save(recordSet);
			
		
		}
		
	});
});
