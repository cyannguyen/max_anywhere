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

define("application/business/ServiceRequestObject", 
["application/business/FieldUtil",
 "platform/model/ModelService",
 "dojo/_base/array",
 "application/business/ServiceRequestStatusHandler",
 "platform/exception/PlatformRuntimeException",
 "platform/util/DateTimeUtil",
 "platform/logging/Logger",
 "platform/auth/UserManager",
 "dojo/Deferred",
 "platform/util/CurrentTimeProvider",
 "platform/store/_ResourceMetadataContext",
 "platform/warning/PlatformRuntimeWarning",], 
 function(fieldUtil, ModelService, array, ServiceRequestStatusHandler, PlatformRuntimeException, DateTimeUtil, Logger, UserManager, Deferred, CurrentTimeProvider, ResourceMetaData, PlatformRuntimeWarning) {	
	return {
/**@memberOf application.business.ServiceRequestObject */
		onInitialize : function(serviceRequest) {
			serviceRequest.set("locationdesc", serviceRequest.get('maxlocationdesc'));

			if(serviceRequest.get('assetdesc')==null){
				serviceRequest.set("assetnumanddescription",'');
			}

			serviceRequest.set("assetdesc", serviceRequest.get('maxassetdesc'));

			if(serviceRequest.get('locationdesc')==null){
				serviceRequest.set("locationanddescription",'');
			}

			fieldUtil.initCompositeField("srnum", "description", "srnumanddescription", serviceRequest);
			fieldUtil.initCompositeField("asset", "assetdesc", "assetnumanddescription", serviceRequest);
			fieldUtil.initCompositeField("location", "locationdesc", "locationanddescription", serviceRequest);	

			serviceRequest.set("statusdesc", ServiceRequestStatusHandler.getInstance().toDescription(serviceRequest.get("status")));
			serviceRequest.watch("asset", function(){
				fieldUtil.initCompositeField("asset", "assetdesc", "assetnumanddescription", serviceRequest);
			});

			serviceRequest.watch("maxassetdesc", function(){
				fieldUtil.initCompositeField("asset", "assetdesc", "assetnumanddescription", serviceRequest);
			});			
			
			serviceRequest.watch("status", function(){
				this.set("statusdesc", ServiceRequestStatusHandler.getInstance().toDescription(this.get("status")));
			});		
			
			serviceRequest.watch("description", function(){
				fieldUtil.initCompositeField("srnum", "description", "srnumanddescription", serviceRequest);
			});	
			
			var status = ServiceRequestStatusHandler.getInstance().toInternalState(serviceRequest.get("status"));
			serviceRequest.setReadOnly(status=='CLOSE');
			
			// I guess just eat the promise here and let fill in asynchronously
			/* This line was in here due to some idea of "eating the promise."
				When implemented in SR App is causes the list not to display.  
				BKD Commented it out and the list displays fine. */
			//this.refreshClassDescription(serviceRequest);
		},

		onAdd : function(serviceRequest) {
			// Implement default behavior for new service requests - e.g.: predefined values
            // setting siteid using the user's default     
			serviceRequest.set("siteid", UserManager.getInfo("defsite"));
		},

		beforeSave : function(serviceRequest) {
			// Implement validation for serviceRequest
			fieldUtil.initCompositeField("asset", "assetdesc", "assetnumanddescription", serviceRequest);
		},
/*TODO: Not used at this time. Revisit to see it is needed later.
		statusChanged : function(serviceRequest, newValue, previousValue) {
	         serviceRequest.set("statusdesc", ServiceRequestStatusHandler.getInstance().toDescription(newValue));
		},
*/
/*
		startWorkWithTimer: function(serviceRequest, startTime, alsoChangeToInprog, taskSet) {
			Logger.trace("[ServiceRequestObject] startWorkWithTimer");
			// basic logic to start a timer - notice: it is not fully implemented 
			if(!this.isStarted(serviceRequest)){
				serviceRequest.set("started", true);
				if(alsoChangeToInprog && this.isApproved(serviceRequest)){
					Logger.trace("[ServiceRequestObject] startWorkWithTimer call inProgress");
					this.inProgress(serviceRequest, startTime, null, taskSet);
					Logger.trace("[ServiceRequestObject] startWorkWithTimer return  inProgress");
				}
			}
		},
*/
		cancelWorkWithTimer: function(serviceRequest){
			serviceRequest.set("started", false);
		},
		/*TODO: Not used at this time. Revisit to see it is needed later.
		inProgress: function(serviceRequest, statusDate, memo, taskSet){
			var inProg = ServiceRequestStatusHandler.getInstance().toDefaultExternalLabel("INPROG");
			this.changeStatus(serviceRequest, inProg, statusDate, memo, taskSet); 
		},

		cannotBeStarted: function(serviceRequest){
			var status = ServiceRequestStatusHandler.getInstance().toInternalState(serviceRequest.get("status"));
			return status == "NEW" || status == "RESOLVED" || status == "CLOSE" || serviceRequest.isErrored(); 
		},

		complete: function(serviceRequest, statusDate, memo, taskSet){
			var comp = ServiceRequestStatusHandler.getInstance().toDefaultExternalLabel("RESOLVED");
			this.changeStatus(serviceRequest, comp, statusDate, memo, taskSet);
		},

		isStarted: function(serviceRequest){
			return serviceRequest.get("started") || false;
		},

		isCompleted: function(serviceRequest){
			var status = ServiceRequestStatusHandler.getInstance().toInternalState(serviceRequest.get("status"));
			return status == "RESOLVED" || status == "CLOSE";
		},

		isApproved: function(serviceRequest){
			var status = ServiceRequestStatusHandler.getInstance().toInternalState(serviceRequest.get("status"));
			return status == "QUEUED";
		},

		isInProgres: function(serviceRequest){
			var status = ServiceRequestStatusHandler.getInstance().toInternalState(serviceRequest.get("status"));
			return status == "INPROG";
		},

		changeStatus: function(serviceRequest, newStatus, statusDate, memo, taskSet){
			Logger.trace("[ServiceRequestObject] changeStatus ");
			var currentStatus = serviceRequest.get("status");
			if(ServiceRequestStatusHandler.getInstance().canPerformTransition(currentStatus, newStatus)){
				serviceRequest.openPriorityChangeTransaction();
				serviceRequest.set("status", newStatus);
				serviceRequest.setDateValue("statusDate", statusDate);
				serviceRequest.setDateValue("changestatusdate", statusDate);
				serviceRequest.set("memo", memo);				
				if(taskSet && taskSet.data.length>0){
					this.changeStatusOfTasks(serviceRequest, newStatus, statusDate, memo, taskSet);
				}
				serviceRequest.closePriorityChangeTransaction();
			}
			else{			
				Logger.trace("[ServiceRequestObject] changeStatus status can not be changed");
				 throw new PlatformRuntimeException('invalidstatustransition',[currentStatus, newStatus]);
			}
			Logger.trace("[ServiceRequestObject] changeStatus status changed");
		},
*/
		descriptionChanged: function(serviceRequest){
			serviceRequest.set("descriptionModified",true);
			fieldUtil.initCompositeField("srnum", "description", "srnumanddescription", serviceRequest);
		},

		assetChanged: function(serviceRequest){
			serviceRequest.markAsModified('location');
			fieldUtil.initCompositeField("asset", "assetdesc", "assetnumanddescription", serviceRequest);
		},

		locationChanged: function(serviceRequest){
			serviceRequest.markAsModified('asset');
			fieldUtil.initCompositeField("location", "locationdesc", "locationanddescription", serviceRequest);
		},

	};

});
