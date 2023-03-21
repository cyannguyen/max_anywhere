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

define("application/business/AssetStatusHandler", 
["dojo/_base/declare",
 "dojo/_base/array",
 "platform/model/state/MultiLabelStateMachineSupport",
 "platform/model/ModelService",
 "platform/logging/Logger",
 "platform/translation/SynonymDomain"
 ], function(declare, arrayUtil, MultiLabelStateMachineSupport, ModelService, Logger,SynonymDomain) {
	var thisClass = declare([MultiLabelStateMachineSupport], {		
/**@memberOf application.business.AssetStatusHandler */
		init: function(modelDataSet){
			var settings = {};
			settings.resourceName = "asset";
			settings.stateToAlias = {};
			
			settings.configuration = {};
			settings.labelStateConfiguration = MultiLabelStateMachineSupport.fromModelDataSetToLabelStateConfiguration(
					modelDataSet, "value", "maxvalue", "description");

			//You can change the status of an asset to any status from any status, so build the list of available statuses
			//from the list of statuses coming from the server.
			var canChangeToStatus = [];
			arrayUtil.forEach( Object.keys(settings.labelStateConfiguration), function(status){
				var internalStatus = SynonymDomain.resolveToInternal(modelDataSet, status);
				canChangeToStatus.push(internalStatus);
				settings.configuration[internalStatus] = canChangeToStatus;
			});
			
			this.setupMachine(settings);						
		}
	});
	var instance = null;
	var AssetStatusHandler = {};
	AssetStatusHandler.getInstance = function(){		
		if(!instance){
			instance = new thisClass({});
			/* this is cached data */
			ModelService.all("domainAssetStatus").then(function(dataSet){
				instance.init(dataSet);
			});					
		}
		return instance;
	};
	return AssetStatusHandler;
});
