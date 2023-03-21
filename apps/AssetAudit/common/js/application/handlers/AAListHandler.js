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

define("application/handlers/AAListHandler", 
    [ "dojo/_base/declare",
      "platform/logging/Logger",
      "dojo/_base/array",
      "dojo/number",
      "dojo/date/locale",
      "dojo/Deferred",
      "platform/model/ModelService", 
      "platform/model/ModelData",
      "platform/model/ModelDataSet",
      "platform/handlers/_ApplicationHandlerBase",
	  "application/handlers/CommonHandler",
	  "application/business/AssetObject",
      "application/business/LocationObject",
	  "platform/comm/CommunicationManager",
      "platform/auth/UserManager",
      "platform/translation/MessageService",
      "dojo/_base/lang",
      "platform/exception/PlatformRuntimeException",
	  "platform/warning/PlatformRuntimeWarning",
	  "platform/store/_ResourceMetadataContext",
	  "platform/util/PlatformConstants"], 
function(declare, Logger, array, number, locale, Deferred, ModelService, ModelData, ModelDataSet, ApplicationHandlerBase, CommonHandler, AssetObject, LocationObject, CommunicationManager, UserManager, MessageService, lang, PlatformRuntimeException, PlatformRuntimeWarning, ResourceMetadata, PlatformConstants) {
	return declare(ApplicationHandlerBase, {
/**@memberOf application.handlers.AAListHandler */
		resolveLocationLabel : function(control) {
			return [ this.application.getResource('location').getCurrentRecord().get('location') ];
		},
		
		resolveAssetLabel : function(control) {
			return [ this.application.getResource('asset').getCurrentRecord().get('assetnum') ];
		},
		
		renderLocationActionIfNotLocked : function(eventContext) {
			eventContext.setDisplay(true);
		},
		
		renderAssetActionIfNotLocked : function(eventContext) {
			eventContext.setDisplay(true);
		},
		
		loadAssets: function(eventContext){
			Logger.trace("[AAListHandler] executing loadAssets");
			var locations = eventContext.application.getResource("locations");
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
				eventContext.application.addResource(modelDataSet);
			});
			eventContext.application.ui.getViewFromId('AssetAudit.AssetListView').resetQueryBase=true;
		},

		updateListSize: function(listAttribute, listSizeAttribute){
			var location = this.application.getResource('location').getCurrentRecord();
			var previousSizeValue = location.get(listSizeAttribute);
			if(typeof previousSizeValue == 'undefined' || previousSizeValue == null || previousSizeValue == ''){
				location.set(listSizeAttribute, "--");
			}
			
			var promise = null;
			var childDataSet = location.getLoadedModelDataSetOrNull(listAttribute);
			if (childDataSet && childDataSet.isDirty()){
				promise = new Deferred().resolve(childDataSet);
				
			} else {
				promise = location.getModelDataSet(listAttribute);
				
			}
			
			
			// Example Going to the ModelData to get the materials list
			promise.then(function(list){
				if (!list.hasCachedRecords()){
					location.set(listSizeAttribute, "--");
					return;
				}
				var listSize = list.count();
				var currSize = location.get(listSizeAttribute);
				if(currSize!=listSize){
					location.set(listSizeAttribute, listSize+"");
				}
			});
			
		},

		hideShowSearchedMenu : function(eventContext){
			var searchResource = eventContext.application.getResource("searchLocation");
			if(searchResource != null){
				eventContext.setDisplay(true);
			}
			else{
				eventContext.setDisplay(false);
			}
		},
		
		discardSummaryView: function(eventContext){
			
			/*var view = eventContext.application.ui.getViewFromId('WorkApproval.WorkListView');
			view.changeQueryBase(eventContext.application.ui.savedQueryIndex);
		    var queryBase = view.queries.children[eventContext.application.ui.savedQueryIndex].queryBase;
			ModelService.clearSearchResult(eventContext.application.getResource('workOrder')).then(function(){
				eventContext.application.showBusy();
			    ModelService.all('workOrder', queryBase).then(function(modelDataSet){
					modelDataSet.resourceID = 'workOrder';
					eventContext.application.addResource(modelDataSet);
					eventContext.application.ui.getViewFromId('WorkApproval.WorkListView').lists[0].refresh();
					eventContext.application.hideBusy();
				})
			})*/
		},

		clearSearchFields: function(eventContext){
			eventContext.application.getResource("searchLocation").createNewRecord();
		},
		
		initSearchData: function(eventContext){
			var searchData = eventContext.application.getResource("searchLocation");
			if(searchData == null || searchData.getCurrentRecord() == null){
				searchData.createNewRecord();
			}
			eventContext.application.ui.savedQueryIndex = eventContext.application.ui.getViewFromId('AssetAudit.LocationListView').queryBaseIndex;
		},
		
		showSearch: function(eventContext){
			eventContext.application.ui.showAllStatus = true;			
		},
		
		hideSearch: function(eventContext){
			if(eventContext.application.ui.transitionInfo.id != "AssetAudit.statusLookup"){
				eventContext.application.ui.showAllStatus = false;			
			}
		},
		
		setSearchQuery: function(eventContext){
			Logger.trace("[AAListHandler] executing setSearchQuery");
			var search = eventContext.application.getResource("searchLocation").getCurrentRecord();
			var filteredItems = 0;
			var filter = {};
			var assetSearch = false;
			if (search.description){
			    filter.description = '%'+search.description+'%';
			    filteredItems++;
			}
			if (search.location){
			    filter.locationancestor = '%'+search.location+'%';
			    filteredItems++;
			}
			if (search.assetnum){
			    filter.assetnum = '%'+search.assetnum+'%';
			    filteredItems++;
			    assetSearch = true;
			}
			if (search.assetdesc){
			    filter.assetdesc = '%'+search.assetdesc+'%';
			    filteredItems++;
			    assetSearch = true;
			}
			
			if(filteredItems == 0){
				eventContext.ui.show('AssetAudit.RequiredSearchFieldMissing');
				return;
			}

			var self = this;
			eventContext.application.ui.performSearch = true;
			if(assetSearch){
				var searchedAssets = eventContext.application.getResource("asset");
				if(searchedAssets){
					ModelService.clearSearchResult(eventContext.application.getResource('asset')).then(function(){
						 ModelService.empty('asset').then(function(){
							 eventContext.ui.getViewFromId('AssetAudit.AssetListView').setQueryBaseIndexByQuery(PlatformConstants.SEARCH_RESULT_QUERYBASE).then(function(){
								 eventContext.application.showBusy();
								 self.populateAssetSearch(eventContext);
							 });
						 });
					});
				}
				else{
					 eventContext.ui.getViewFromId('AssetAudit.AssetListView').setQueryBaseIndexByQuery(PlatformConstants.SEARCH_RESULT_QUERYBASE).then(function(){
						 eventContext.application.showBusy();
						 self.populateAssetSearch(eventContext);
					 });
				}
			}
			else{
				ModelService.clearSearchResult(eventContext.application.getResource('locations')).then(function(){
					 ModelService.empty('locations').then(function(){
						 eventContext.ui.getViewFromId('AssetAudit.LocationListView').setQueryBaseIndexByQuery(PlatformConstants.SEARCH_RESULT_QUERYBASE).then(function(){
							 eventContext.application.showBusy();
							 self.populateSearch(eventContext);
						 });
					 });
				});
			}
		},

		_showSearchFailedMessageNoConnectivity: function(eventContext){
			eventContext.application.showMessage(MessageService.createStaticMessage('searchNoNetwork').getMessage());
			eventContext.application.hideBusy();
			eventContext.application.ui.performSearch = false;
		},

		populateSearch: function(eventContext){
			Logger.trace("[AAListHandler] executing populateSearch");
			var view = eventContext.application.ui.getViewFromId('AssetAudit.LocationListView');
			if(eventContext.application.ui.performSearch){
				if(eventContext.application.getResource("searchLocation") == null){ //TODO:  might be nice to still open to last search
					//must be first login.  If search was last page view just default to 0 index because search resource has been discarded.
					view.changeQueryBase(0);
				    var queryBase = view.queries.children[0].queryBase;
					ModelService.all('locations', queryBase).then(function(modelDataSet){
						modelDataSet.resourceID = 'locations';
						eventContext.application.addResource(modelDataSet);
						eventContext.application.ui.getViewFromId('AssetAudit.LocationListView').lists[0].refresh();
					});
					return;
				}
				var indexOfSearch = 0;
				var i = 0;
				if(view.queries && view.queries != null){
					while(i < view.queries.children.length){
						if(view.queries.children[i].queryBase == PlatformConstants.SEARCH_RESULT_QUERYBASE){
							indexOfSearch = i;
							i = view.queries.children.length;
						}
						i++;
					}
					view.changeQueryBase(indexOfSearch);
				}
				var search = eventContext.application.getResource("searchLocation").getCurrentRecord();
				var filter = {};
				var filteredItems = 0;
				if (search.description){
				    filter.description = '%'+search.description+'%';
				    filteredItems++;
				}
				if (search.location){
				    filter.location = '%'+search.location+'%';
				    filteredItems++;
				}
				
				if(filteredItems == 0){
					eventContext.application.showMessage(MessageService.createStaticMessage('norecords').getMessage());
					eventContext.application.ui.performSearch = false;
					eventContext.application.hideBusy();
					return;
				}
				
				ModelService.all('locations',PlatformConstants.SEARCH_RESULT_QUERYBASE).then(function(searchResultSet){
					ModelService.clearSearchResult(searchResultSet);			
				});
				
				var deferred = new Deferred();
				var oslcQueryParameters = {};
				var self = this;
				ModelService.fetchFromServer('locations',PlatformConstants.SEARCH_RESULT_QUERYBASE).then(function(hasConnectivity){
					eventContext.application.showBusy();
					if (hasConnectivity){
						//network fetch						
						ModelService.filtered('locations', PlatformConstants.SEARCH_RESULT_QUERYBASE, filter, null, true, false, oslcQueryParameters, true).then(function(resultSet){
							resultSet.resourceID = 'locations';
							eventContext.application.addResource(resultSet);
							if (resultSet.count()>0){
								eventContext.ui.show('AssetAudit.LocationListView');
								eventContext.application.ui.getViewFromId('AssetAudit.LocationListView').lists[0].refresh();
								eventContext.application.hideBusy();
							} else {
								//offline fetch	

								// making it consistent with WorkExecution, no search offline
								if (!resultSet.fetchedFromServer){
									self._showSearchFailedMessageNoConnectivity(eventContext);
									return;
								}

								ModelService.filtered('locations', null, filter, null, false, false, oslcQueryParameters, true).then(function(locationSet){
									deferred.resolve(locationSet);
								});
								var promise = deferred.promise;
								promise.then(function(locationSet){
									ModelService.clearSearchResult(locationSet).then(function(){
										if (locationSet.count()>0){
											array.forEach(locationSet.data, function(data){
												data.setQueryBase("__search_result__");									
											});
											locationSet.resourceID = 'locations';
											eventContext.application.addResource(locationSet);
											eventContext.ui.show('AssetAudit.LocationListView');
											eventContext.application.ui.getViewFromId('AssetAudit.LocationListView').lists[0].refresh();
											eventContext.application.hideBusy();
										} else {
											ModelService.clearSearchResult(locationSet);
											eventContext.application.showMessage(MessageService.createStaticMessage('norecords').getMessage());
											eventContext.application.ui.performSearch = false;
											eventContext.ui.hideCurrentView();
											eventContext.application.hideBusy(); 
										}						
									});					
								});						
							}
						});	
					}
					else{ 
						// making it consistent with WorkExecution, no search offline
						self._showSearchFailedMessageNoConnectivity(eventContext);
						return;

						//offline fetch
						if (search.description){
						    filter.description = search.description;
						}
						if (search.location){
						    filter.location = search.location;
						}
						
						//removed attribute that was added by previous modelservice network call.
						delete filter._querybases;
						
						ModelService.filtered('locations', null, filter, null, false, false, oslcQueryParameters, true).then(function(locationSet){
							deferred.resolve(locationSet);
						});
						var promise = deferred.promise;
						promise.then(function(locationSet){
							ModelService.clearSearchResult(locationSet).then(function(){					
								if (locationSet.count()>0){
									array.forEach(locationSet.data, function(data){
										data.setQueryBase("__search_result__");									
									});	
									eventContext.ui.show('AssetAudit.LocationListView');
									locationSet.resourceID = 'locations';
									eventContext.application.addResource(locationSet);
									eventContext.application.ui.getViewFromId('AssetAudit.LocationListView').lists[0].refresh();
									eventContext.ui.show('AssetAudit.LocationListView');
									eventContext.application.hideBusy();
								} else {
									ModelService.clearSearchResult(locationSet);
									eventContext.application.showMessage(MessageService.createStaticMessage('norecords').getMessage());
									eventContext.application.ui.performSearch = false;
									eventContext.ui.hideCurrentView();
									eventContext.application.hideBusy(); 
								}						
							});					
						});						
					}						
				});
			}
		},

		populateAssetSearch: function(eventContext){
			Logger.trace("[AAListHandler] executing populateAssetSearch");
			var view = eventContext.application.ui.getViewFromId('AssetAudit.AssetListView');
			if(eventContext.application.ui.performSearch){
				
				if(eventContext.application.getResource("searchLocation") == null){ //TODO:  might be nice to still open to last search
					//must be first login.  If search was last page view just default to 0 index because search resource has been discarded.
					view.changeQueryBase(0);
				    var queryBase = view.queries.children[0].queryBase;
					ModelService.all('searchedLocation', queryBase).then(function(modelDataSet){
						modelDataSet.resourceID = 'asset';
						eventContext.application.addResource(modelDataSet);
						eventContext.application.ui.getViewFromId('AssetAudit.AssetListView').lists[0].refresh();
					});
					return;
				}
				var search = eventContext.application.getResource("searchLocation").getCurrentRecord();
				var filter = {};
				var filteredItems = 0;
				if (search.location){
				    filter.location = '%'+search.location+'%';
				    filteredItems++;
				}
				if (search.locationdesc){
				    filter.locationdesc = '%'+search.locationdesc+'%';
				    filteredItems++;
				}
				if (search.assetnum){
				    filter.assetnum = '%'+search.assetnum+'%';
				    filteredItems++;
				}
				if (search.assetdesc){
				    filter.description = '%'+search.assetdesc+'%';
				    filteredItems++;
				}
				
				if(filteredItems == 0){
					eventContext.application.showMessage(MessageService.createStaticMessage('norecords').getMessage());
					eventContext.application.ui.performSearch = false;
					eventContext.application.hideBusy();
					return;
				}
				
				ModelService.all('asset',PlatformConstants.SEARCH_RESULT_QUERYBASE).then(function(searchResultSet){
					ModelService.clearSearchResult(searchResultSet);			
				});
				
				var deferred = new Deferred();
				var oslcQueryParameters = {};
				var self = this;
				ModelService.fetchFromServer('asset',PlatformConstants.SEARCH_RESULT_QUERYBASE).then(function(hasConnectivity){
					eventContext.application.showBusy();
					eventContext.ui.show('AssetAudit.AssetListView');
					if (hasConnectivity){
						//network fetch		
						var searchedAssetMeta = ResourceMetadata.getResourceMetadata("asset");
						searchedAssetMeta.setWhereClause("");
					    filter.moved = false;
						ModelService.filtered('asset', PlatformConstants.SEARCH_RESULT_QUERYBASE, filter, null, true, false, oslcQueryParameters, false).then(function(resultSet){
							if (resultSet.count()>0){
								resultSet.resourceID = 'asset';
								eventContext.application.addResource(resultSet);
								eventContext.application.hideBusy();
								eventContext.application.ui.getViewFromId('AssetAudit.AssetListView').lists[0].refresh();
							} else {
								//offline fetch	

								// making it consistent with WorkExecution, no search offline
								if (!resultSet.fetchedFromServer){
									self._showSearchFailedMessageNoConnectivity(eventContext);
									return;
								}
								filter.moved = 0;
								ModelService.filtered('asset', null, filter, null, false, false, oslcQueryParameters).then(function(assetSet){
									deferred.resolve(assetSet);
								});
								var promise = deferred.promise;
								promise.then(function(assetSet){
									ModelService.clearSearchResult(assetSet).then(function(){					
										if (assetSet.count()>0){
											array.forEach(assetSet.data, function(data){
												data.setQueryBase("__search_result__");									
											});	
											assetSet.resourceID = 'asset';
											eventContext.application.addResource(assetSet);
											eventContext.ui.show('AssetAudit.AssetListView');
											eventContext.application.ui.getViewFromId('AssetAudit.AssetListView').lists[0].refresh();
											eventContext.application.hideBusy();
										} else {
											ModelService.clearSearchResult(assetSet);
											eventContext.application.showMessage(MessageService.createStaticMessage('norecords').getMessage());
											eventContext.application.ui.performSearch = false;
											eventContext.application.hideBusy(); 
										}						
									});					
								});						
							}
						});	
					}
					else{						
						// making it consistent with WorkExecution, no search offline
						self._showSearchFailedMessageNoConnectivity(eventContext);
						return;
						
						//offline fetch
						if (search.assetnum){
						    filter.assetnum = search.assetnum;
						}
						if (search.assetdesc){
						    filter.description = search.assetdesc;
						}
						if (search.locationdesc){
						    filter.locationdesc = search.locationdesc;
						}
						if (search.location){
						    filter.location = search.location;
						}
						
						//removed attribute that was added by previous modelservice network call.
						delete filter._querybases;
						
						ModelService.filtered('asset', null, filter, null, false, false, oslcQueryParameters).then(function(assetSet){
							deferred.resolve(assetSet);
						});
						filter.moved = 0;
						var promise = deferred.promise;
						promise.then(function(assetSet){
							ModelService.clearSearchResult(assetSet).then(function(){
								if (assetSet.count()>0){
									array.forEach(assetSet.data, function(data){
										data.setQueryBase("__search_result__");									
									});	
									assetSet.resourceID = 'asset';
									eventContext.application.addResource(assetSet);
									eventContext.application.hideBusy();
									eventContext.application.ui.getViewFromId('AssetAudit.AssetListView').lists[0].refresh();
								} else {
									ModelService.clearSearchResult(assetSet);
									eventContext.application.showMessage(MessageService.createStaticMessage('norecords').getMessage());
									eventContext.application.ui.performSearch = false;
									eventContext.application.hideBusy(); 
								}						
							});					
						});						
					}						
				});									
			}
		},	
	});
});
