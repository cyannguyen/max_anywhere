/*
 * Licensed Materials - Property of IBM
 *
 * 5725-M39
 *
 * (C) Copyright IBM Corp. 2020 All Rights Reserved
 *
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with
 * IBM Corp.
 */

define("application/handlers/AADownloadHandler", 
       [ "dojo/_base/declare",
		"platform/handlers/WorkOfflineHandler",
		"dojo/_base/array",
		"platform/model/ModelService",
        "platform/logging/Logger",
        "platform/store/_ResourceMetadataContext",
        "dojo/Deferred"
], 
function(declare, WorkOfflineHandler, arrayUtil, ModelService, Logger, ResourceMetadata,Deferred) {

	var loadAssets = function(options) {
		var self = options.self;
		var deferred = new Deferred();
		
		Logger.trace("[AAListHandler] executing loadAssets");
		var locations = self.application.getResource("locations");
		var locList = [];
		var siteid = null;
		locations.data.forEach(function(location){
			siteid = location.get("siteid");
			locList.push('"'+location.location+'"');
		});
		var assetMeta = ResourceMetadata.getResourceMetadata("asset");
		assetMeta.setWhereClause("spi:location{oslc:shortTitle in ["+locList+"]} and spi:moved=0 and spi:siteid=%22"+siteid+"%22");
			
		ModelService.all('asset', null, null, true).then(function(modelDataSet){
			modelDataSet.resourceID = 'asset';
			self.application.addResource(modelDataSet);
			deferred.resolve();
		});
		
		return deferred.promise;
	};
	
	
	return declare(WorkOfflineHandler, {

		workoffline : function(eventContext) {
			Logger.trace("AAListHandler called!");
			var workofflinehandler = eventContext.application['platform.handlers.WorkOfflineHandler'];
			
			var handlers = [loadAssets];
						
			arrayUtil.forEach(handlers, function(handler) {
				if(workofflinehandler.callBackStack.indexOf(handler) == -1) {
					workofflinehandler.addOffLineCallBackHandler(handler);
				}
			});
			workofflinehandler.inherited(arguments);
			Logger.trace("AAListHandler after calling super!");
		},
	});	
});
