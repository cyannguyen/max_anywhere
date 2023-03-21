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

define("application/business/ServiceRequestStatusHandler", 
["dojo/_base/declare",
 "platform/model/state/MultiLabelStateMachineSupport",
 "platform/model/ModelService",
 "platform/logging/Logger"
 ], function(declare, MultiLabelStateMachineSupport, ModelService, Logger) {
	// TODO validate if user is allowed to perform all the status changes between the 'from' and 'to'
	// FIXME site/org support?
	var thisClass = declare([MultiLabelStateMachineSupport], {		
/**@memberOf application.business.ServiceRequestStatusHandler */
		init: function(modelDataSet){
			var settings = {};
			settings.resourceName = "workOrder";
			settings.stateToAlias = {};
			settings.configuration = {
				"NEW": ["PENDING", "QUEUED", "RESOLVED", "INPROG", "CLOSE", "NEW"],
				"PENDING" : ["QUEUED","PENDING","RESOLVED", "CAN"],
				"QUEUED": ["PENDING", "RESOLVED", "QUEUED", "INPROG"],
				"INPROG":  ["QUEUED", "RESOLVED", "WMATL", "PENDING", "INPROG"],
				"RESOLVED":  ["RESOLVED"],
				"CLOSE": ["CLOSE"],
			};
			settings.labelStateConfiguration = MultiLabelStateMachineSupport.fromModelDataSetToLabelStateConfiguration(
					modelDataSet, "value", "maxvalue", "description");
			this.setupMachine(settings);						
		}
	});
	var instance = null;
	var ServiceRequestStatusHandler = {};
	ServiceRequestStatusHandler.getInstance = function(){		
		if(!instance){
			instance = new thisClass({});
			/* this is cached data */
			ModelService.all("domainsrstatus").then(function(dataSet){
				instance.init(dataSet);
			});					
		}
		return instance;
	};
	return ServiceRequestStatusHandler;
});
