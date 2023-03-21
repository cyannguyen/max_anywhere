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

define("application/handlers/AssetListScanHandler", 
[ "dojo/_base/declare",
  "dojo/_base/lang",
  "platform/handlers/CodeScannerHandler",
  "platform/logging/Logger",
  "dojo/Deferred",
  "platform/model/ModelService",
  "platform/util/PlatformConstants",
  "platform/translation/MessageService",
  "platform/util/PlatformConstants",
  "platform/ui/control/FindByScan",
  
  ],
function(declare, lang, CodeScannerHandler, logger, Deferred, ModelService, PlatformConstants, MessageService, PlatformConstants, FindByScan) {
	
	return declare( [CodeScannerHandler], {

/**@memberOf application.handlers.AssetListScanHandler */
		
		
		matrixFilterObject: null, 
		
		handleScan: function(scanResult){
			
			var resultDeferred = this.searchAssetOrLocation(scanResult);
			var self = this;
			
			var findByScan = this.viewControl.lists[0].findByScan;
			
			return resultDeferred.then(function(resultSet){
				if(!resultSet.resourceID){
					resultSet.resourceID = resultSet.name;
				}
				logger.trace("[FindByScan.handleScan] call to ModelService scan returned a set with a record count of: " + resultSet.count());
				self.application.addResource(resultSet);
				var resource = self.application.getResource("asset");
				var metrics = resource.getMetadata().getResourceMetrics(resource.getQueryBase());
				if (metrics){
					//Store of the values to be retrived when coming back to the view
					metrics.setScanFilter(self.matrixFilterObject);
				}
				if (resultSet.count() == 1) {
					findByScan.scanResult = null;
					findByScan.scanFilter = null;
					var detailView = findByScan.detailsView;
					if (!detailView) {
						detailView = findByScan.getParent().transitionTo;
					}
					resultSet.setCurrentIndex(0);
					self.ui.show(detailView);

				}else {
					findByScan.scanFilter = self.matrixFilterObject.filter;
					findByScan.scanResult = scanResult;
					findByScan.getParent().build_scan_list(resultSet);  
				}
			}).otherwise(function(error){
				console.log("Something went wrong while searching for the scanned data." + error);
			});

		},

		searchAssetOrLocation: function(scanResult){
			//We post all the variables to 'this' since the PArent class collusion with Handler class
			this.scanResult = scanResult;
			var self = this;
			this.handler = this.application['application.handlers.AssetListScanHandler'];
			
			
			var resourceAttribute = 'assetnum';
			
			this.buildFilter= function(resourceAttribute, scanResult){
				var filter = null;
				//Because of RFID, multiple vales can be scanned in so need to account for that
				if (scanResult instanceof Array){
					filter = [];
					
					scanResult.forEach(function(filterValue){
						var filterPart = {};
						filterPart[resourceAttribute] = filterValue;
						filter.push(filterPart);
					});
					scanResult = scanResult.toString();
				}
				else{
					filter = {};
					filter[resourceAttribute] = scanResult;
				}
				
				return [filter, scanResult];
			};
			

			//Build the filter to search with asset number
			var assetFilterObject = this.buildFilter(resourceAttribute, scanResult);
			
			
			this.matrixFilterObject = {'filter': lang.clone(assetFilterObject[0]), 'scanValues' : assetFilterObject[1]};
			
			
			this.resource = this.application.getResource("asset");
			this.resourceName = this.resource.getResourceName();
			this.queryBaseName = this.resource.getQueryBase();//PlatformConstants.SEARCH_RESULT_QUERYBASE;
			logger.trace("[FindByScan.handleScan] is calling ModelService scan on the resource " + this.resourceName + " with querybase " + this.queryBaseName);

			return ModelService.scan(this.resourceName, this.queryBaseName, assetFilterObject[0]).then(function(resultSet){
				if (resultSet.count() == 0){
					var locationFilterObject = self.buildFilter('location', self.scanResult);
					self.matrixFilterObject = {'filter': lang.clone(locationFilterObject[0]), 'scanValues' : locationFilterObject[1]};
					return ModelService.scan(self.resourceName, self.queryBaseName, locationFilterObject[0]);

						
				}else{
					return resultSet;
				};
			});
				
		}
		
	});
});
