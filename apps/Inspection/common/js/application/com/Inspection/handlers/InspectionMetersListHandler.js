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

define("application/com/Inspection/handlers/InspectionMetersListHandler", 
	   [ "dojo/_base/array",
	     "dojo/_base/declare",
	     "dojo/Deferred",
	     "dojo/promise/all",
	     "platform/logging/Logger",
	     "platform/model/ModelService",
	     "platform/store/_ResourceMetadataContext",
	     "application/handlers/CommonHandler",
	     "application/handlers/MetersListHandler"
	     ],
function(arrayUtil, declare, Deferred, all, Logger, ModelService, ResourceMetadata, CommonHandler, MetersListHandler) {
	
	return declare( [MetersListHandler], {

		isLoadingAssetMeters: false,
		isLoadingLocationMeters: false,
		assetMeterList: null,
		locationMeterList: null,
		
			
/**@memberOf application.com.Inspection.handlers.InspectionMetersListHandler */
		hideOrShowAssetMeters: function(eventContext) {
			var self = this;
			var assetMeters = eventContext.application.getResource('totalWOAssetMeters');
			if(!self.isLoadingAssetMeters && assetMeters.data && assetMeters.data.length > 0) {
				eventContext.setDisplay(true);
			}
			else {
				eventContext.setDisplay(false);
				self.assetMeterList = eventContext;
			}
		},
		
		hideOrShowLocationMeters: function(eventContext) {
			var self = this;
			var locationMeters = eventContext.application.getResource('totalWOLocationMeters');
			if(!self.isLoadingLocationMeters && locationMeters.data && locationMeters.data.length > 0) {
				eventContext.setDisplay(true);
			}
			else {
				eventContext.setDisplay(false);
				self.locationMeterList = eventContext;
			}
		},
		
		initializeMeters: function(eventContext) {
			var self = this;
			var deferred = new Deferred();
			var assetMeterPromise = this.initializeAssetMeters(eventContext);
			var locationMeterPromise = this.initializeLocationMeters(eventContext);
			all([assetMeterPromise, locationMeterPromise]) 
			.then(function(resources) {
				Logger.trace('InspectionMetersListHandler.initializeMeters - asset and location meters successfully loaded!');
				for(var i = 0; i < resources.length; i++) {
					if(resources[i].results['length'] > 0) {
						Logger.trace('InspectionMetersListHandler.initializeMeters - ' + resources[i].name + ' = ' + resources[i].results['length']);
						var meterList = self[resources[i].name];
						if(meterList) {
							//refresh each meter list, otherwise data wont been seen
							meterList.refresh();
							meterList.setDisplay(true);
							self[resources[i].name] = null;
							
							//set the count on the list
							meterList.countLabel.setLabel(resources[i].results.length);
						}
					}
				}
				deferred.resolve();
			});
			return deferred.promise;
		},
		
		initializeAssetMeters : function (eventContext) {
			var self = this;
			self.isLoadingAssetMeters = true;
			var overallDeferred = new Deferred();
			var assetList = [];
			var wo = eventContext.application.getResource('workOrder').getCurrentRecord();
			//get asset from workorder header level
			var assetnum = wo.getPendingOrOriginalValue('asset');
			if (assetnum){
				if (assetList.indexOf(assetnum)<0){
					assetList.push(assetnum);
				}
			}
			
			ModelService.all('assetMeters', null, null, true)
			.then(function(assetMeterResource) {
				//get assets from tasklist
				wo.getModelDataSet('tasklist', true)
				.then(function() {
					var taskSet = wo.tasklist;
					if (taskSet){
						arrayUtil.forEach(taskSet.data, function(task){
							var taskAsset = task['assetnum'];
							if (taskAsset){
								if (assetList.indexOf(taskAsset)<0){
									assetList.push(taskAsset);
								}
							}
						});
					}
					//build in clause of assets
					var asslist = "";
					var asslistjoin = "";
					var assetFirstTime = true;
					
					assetList.forEach(function(asset){
						if (assetFirstTime){
							asslist='%22'+asset+'%22';	
							assetFirstTime = false;
						} else {
							asslist+=',%22'+asset+'%22';		
						}
					});	
					
					var localFirstTimeFind = true;
					assetList.forEach(function(asset){
						if (localFirstTimeFind){
							asslistjoin='(assetnum = "'+asset+'"';	
							localFirstTimeFind = false;
						} else {
							asslistjoin+=' || assetnum = "'+asset+'" ';		
						}
					});	
					
					if (asslistjoin!=''){
						//close parenthesis
						asslistjoin+=')';
						// be sure to only show active meters
						asslistjoin += " && active == true";
					}
					
					if (assetList.length==0){
						asslist = "\"1=2\"";
					}
					
					var siteid = CommonHandler._getWorkorderSiteId(eventContext);
					var assetMeterSet = assetMeterResource.find(asslistjoin, siteid);
					self.setAssetMeterResource(eventContext, assetMeterSet, "totalWOAssetMeters")
					.then(function(count){
						var assetMeterResource = eventContext.application.getResource('totalWOAssetMeters');
						if(assetMeterResource.count()>0){
							assetMeterResource.setCurrentIndex(0);
						}
						self.isLoadingAssetMeters = false;
						overallDeferred.resolve({name: 'assetMeterList', results: assetMeterSet, resource: assetMeterResource});
					});
				});
			});
			return overallDeferred.promise;
		},
		
		initializeLocationMeters: function(eventContext) {
			var self = this;
			self.isLoadingLocationMeters = true;
			var overallDeferred = new Deferred();
			var locationList = [];
			var wo = eventContext.application.getResource('workOrder').getCurrentRecord();
			//get location from workorder header level
			var location = wo.getPendingOrOriginalValue('location');
			if (location){
				if (locationList.indexOf(location)<0){
					locationList.push(location);
				}
			}
			ModelService.all('locationMeters', null, null, true)
			.then(function(locationMeterResource) {
				wo.getModelDataSet('tasklist', true)
				.then(function() {
					var taskSet = wo.tasklist;
					if (taskSet){
						arrayUtil.forEach(taskSet.data, function(task){
							var taskLocation = task['location'];
							if (taskLocation){
								if (locationList.indexOf(taskLocation)<0){
									locationList.push(taskLocation);
								}
							}
						});
					}
					//build in clause of assets
					var loclist = "";
					var loclistjoin = "";
					var locationFirstTime = true;
					
					locationList.forEach(function(location){
						if (locationFirstTime){
							loclist='%22'+location+'%22';	
							locationFirstTime = false;
						} else {
							loclist+=',%22'+location+'%22';		
						}
					});	
					
					var localFirstTimeFind = true;
					locationList.forEach(function(location){
						if (localFirstTimeFind){
							loclistjoin='(location = "'+location+'"';	
							localFirstTimeFind = false;
						} else {
							loclistjoin+=' || location = "'+location+'" ';		
						}
					});	
					
					if (loclistjoin!=''){
						//close parenthesis
						loclistjoin+=')';
						// be sure to only show active meters
						loclistjoin += " && active == true";
					}
					
					if (locationList.length==0){
						loclist = "\"1=2\"";
					}	
					
					var siteid = CommonHandler._getWorkorderSiteId(eventContext);
					var locationMeterSet = locationMeterResource.find(loclistjoin, siteid);
					self.setLocationMeterResource(eventContext, locationMeterSet, "totalWOLocationMeters")
					.then(function(count) {
						var locationMeterResource = eventContext.application.getResource('totalWOLocationMeters');
						if(locationMeterResource.count()>0){
							locationMeterResource.setCurrentIndex(0);
						}						
						self.isLoadingLocationMeters = false;
						overallDeferred.resolve({name: 'locationMeterList', results: locationMeterSet, resource: locationMeterResource});
					});
					
				});
			});
			return overallDeferred.promise;
		}
	});
});
