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

define("application/handlers/AACodeScannerHandler", 
[ "dojo/_base/declare",
  "platform/handlers/CodeScannerHandler",
  "platform/logging/Logger",
  "dojo/_base/array",
  "platform/translation/MessageService",
  "dojo/Deferred",
  "dojo/_base/lang",
  "platform/model/ModelService",
  "platform/ui/control/FindByScan",
  ],
function(declare, CodeScannerHandler, logger, arrayUtil, MessageService, Deferred, lang, ModelService,Findscan ) {
	
	return declare( [CodeScannerHandler, Findscan], {

		/**@memberOf application.handlers.AACodeScannerHandler */
				
				
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
						var resource = null
						if(self.viewControl.id === 'AssetAudit.AssetListView')
							resource = self.application.getResource("asset");
						else if(self.viewControl.id === 'AssetAudit.LocationListView'){
							resource = self.application.getResource("locations");
						}
						
						if(!resource){
							console.log("Something went wrong while searching for the scanned data. No resource found.");
							return;
						}
						
						var metrics = resource.getMetadata().getResourceMetrics(resource.getQueryBase());
						if (metrics){
							//Store of the values to be retrived when coming back to the view
							metrics.setScanFilter(self.matrixFilterObject);
						}
						if (resultSet.count() == 1 && findByScan.detailsView) {
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
							if(self.viewControl.id === 'AssetAudit.AssetListView')
								findByScan.clearScan = self.assetClearScan;  
						}
					}).otherwise(function(error){
						console.log("Something went wrong while searching for the scanned data." + error);
					});

				},
				
				buildFilter: function(resourceAttribute, scanResult){
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
				},

				searchAssetOrLocation: function(scanResult){
					//We post all the variables to 'this' since the PArent class collusion with Handler class
					this.scanResult = scanResult;
					var self = this;
					this.handler = this.application['application.handlers.AssetListScanHandler'];
					var resourceAttribute = null;
					if(this.viewControl.id === 'AssetAudit.AssetListView' ){
						resourceAttribute = 'assetnum';
						this.resource = this.application.getResource("asset");
						this.resourceName = this.resource.getResourceName();
						this.queryBaseName = this.resource.getQueryBase();//PlatformConstants.SEARCH_RESULT_QUERYBASE;
						
						logger.trace("[FindByScan.handleScan] is calling ModelService scan on the resource " + this.resourceName + " with querybase " + this.queryBaseName);
						var assetFilterObject = this.buildFilter(resourceAttribute, scanResult);		
						assetFilterObject[0]["location"] = this.resource.getCurrentRecord().location;
						this.matrixFilterObject = {'filter': lang.clone(assetFilterObject[0]), 'scanValues' : assetFilterObject[1]};
						return ModelService.scan(this.resourceName, this.queryBaseName, assetFilterObject[0]);
					}else if(this.viewControl.id === 'AssetAudit.LocationListView'){
						resourceAttribute = 'location';
						this.resource = this.application.getResource("locations");
						this.resourceName = this.resource.getResourceName();
						this.queryBaseName = this.resource.getQueryBase();//PlatformConstants.SEARCH_RESULT_QUERYBASE;
						logger.trace("[FindByScan.handleScan] is calling ModelService scan on the resource " + this.resourceName + " with querybase " + this.queryBaseName);
						
						var locationFilterObject = this.buildFilter('location', self.scanResult);
						this.matrixFilterObject = {'filter': lang.clone(locationFilterObject[0]), 'scanValues' : locationFilterObject[1]};
						return ModelService.scan(self.resourceName, self.queryBaseName, locationFilterObject[0]);
					}
						
				},
				
				assetClearScan: function(eventContext){
					var self = this;
			    	this.application.showBusy();
			    	var resource = this.getResource();
					var metrics = resource.getMetadata().getResourceMetrics(resource.getQueryBase());
					if (metrics){
						metrics.clearScanFilter();
					}
					this.scanResult=null;
					this.scanFilter=null;
					var list = this.getParent();
					//this.application['application.handlers.AADetailsHandler'].filterByLocation(self);
					//list.refresh();
					var currentRecord =this.application.getResource('locations').getCurrentRecord();
					if (!currentRecord) {
						Logger.trace("[AADetailsHandler] ERROR currentRecord doesn't exist!");	
						return;
					}
					
					ModelService.filtered('asset', null, [{location: currentRecord.location, siteid: currentRecord.siteid}], null, true, true, null, true).then( function(asset) {
						if (asset.count() > 0){
							asset.resourceID = 'asset';
						} else {
							self.application.showMessage(MessageService.createStaticMessage('norecords').getMessage());
							self.application.ui.performSearch = false;
						}
						self.application.addResource(asset);
						var list = self.getParent();
						list.refresh();
						self.application.hideBusy();
					});
				}
				
				
				
			});
});
