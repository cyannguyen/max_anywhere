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

define("application/handlers/AADetailsHandler", 
	   [ "dojo/_base/declare",
	     "platform/logging/Logger",
	     "dojo/_base/array",
	     "dojo/_base/lang",
	     "dojo/number",
	     "dojo/date/locale",
	     "platform/translation/SynonymDomain",
	     "platform/auth/UserManager",
	     "platform/handlers/_ApplicationHandlerBase",
	     "platform/comm/CommunicationManager",
	     "dojo/promise/all",
	     "dojo/Deferred",
	     "platform/model/ModelService",
	     "application/handlers/CommonHandler",
	     "platform/exception/PlatformRuntimeException",
	     "platform/translation/MessageService",
	     "platform/warning/PlatformRuntimeWarning",
		  "platform/store/_ResourceMetadataContext",
	     "platform/util/PlatformConstants" ],
function(declare, Logger, array, lang, number, locale, SynonymDomain, UserManager, ApplicationHandlerBase, CommunicationManager, all, Deferred, ModelService, CommonHandler, PlatformRuntimeException, MessageService, PlatformRuntimeWarning, ResourceMetadata, PlatformConstants) {
	return declare( ApplicationHandlerBase, {

/**@memberOf application.handlers.AADetailsHandler */
		resolveAssetnumLabel: function(control) {
			return [control.getCurrentRecord().get('assetnum')];
		},
		
		
		approveAcceptClickHandler: function(caller){
			//TODO: implement this
		},
		
		cancelRejectClickHandler: function(caller){
			//TODO: implement this
		},		
		
		resolveAssetnumLabel : function(control) {
			return [ this.application.getResource('asset').getCurrentRecord().get('assetnum') ];
		},
		
		clearSearchFields: function(eventContext){
			eventContext.application.getResource("searchAsset").createNewRecord();
		},

		filterByLocation: function(eventContext){
			Logger.trace("[AADetailsHandler] executing filterByLocation");
			
			eventContext.application.showBusy();
			var currentRecord =eventContext.application.getResource('locations').getCurrentRecord();
			if (!currentRecord) {
				Logger.trace("[AADetailsHandler] ERROR currentRecord doesn't exist!");	
				return;
			}
			
			ModelService.filtered('asset', null, [{location: currentRecord.location, siteid: currentRecord.siteid}], null, true, true, null, true).then( function(asset) {
				if (asset.count() > 0){
					asset.resourceID = 'asset';
				} else {
					eventContext.application.showMessage(MessageService.createStaticMessage('norecords').getMessage());
					eventContext.application.ui.performSearch = false;
				}
				eventContext.application.addResource(asset);

				var assetListView = eventContext.application.ui.getViewFromId('AssetAudit.AssetListView');
				assetListView.setFooterDisplay(true);
				assetListView.show();
				assetListView.lists[0].refresh();
			});
		}, 

		initList: function(eventContext){
			Logger.trace("[AADetailsHandler] initializing list");
			if(eventContext.application.ui.getViewFromId('AssetAudit.AssetListView').queryBaseIndex==0){
				this.filterByLocation(eventContext);
			}
		},
		
		//Need this because if returning from status change then the asset audit would have been marked
		show: function(eventContext){
			var returnViewID = eventContext.ui.viewHistory[this.application.ui.viewHistory.length-1].id;
			eventContext.application.ui.getViewFromId(returnViewID).lists[0].refresh();
		},
		
		statusChanged: function(eventContext){
			Logger.trace("[AADetailsHandler] executing statusChanged");
			var asset = eventContext.application.getResource("asset").getCurrentRecord();
			asset.audited = true;
		},
		
		createAuditRec: function(asset, assetAudit, now){
			Logger.trace("[AADetailsHandler] creating audit record");
			var newRec = assetAudit.createNewRecord();
			newRec.set('assetid', asset.assetid);
			newRec.set('auditby', UserManager.getCurrentUser());
			newRec.setDateValue('auditdate',now);
			newRec.set('orgid', asset.orgid);
			asset.set('lastauditby',UserManager.getCurrentUser());
			asset.setDateValue('lastauditdate',now);
		},
		
		saveAsset: function(eventContext){
			Logger.trace("[AADetailsHandler] executing save asset");
			var assets = eventContext.application.getResource('asset');
			var promiseList = [];
			var self = this;
			//Loop thru all records and see which have been marked as audited
			for (var i=0; i < assets.count(); i++){
				var asset = assets.getRecordAt(i);
				if(asset.audited){  //If audited, build/update asset resource
					promiseList.push(asset.getModelDataSet('assetAudit', false).then(function(assetAudit){ //Construct the promise to build assetAudit record and update asset rec
						var now = new Date();
						self.createAuditRec(assetAudit.getParent(), assetAudit, now);
					}));
					asset.audited = false; // now reset it 
				}
			}
			all(promiseList).then(function(result) {  //All promises are constructed, now do save
				ModelService.save(assets).then(function(){
					eventContext.ui.transitioning = false;
					eventContext.ui.hideCurrentView();
				});
			}).otherwise(function(error){
				deferred.reject(error);
			});
		},
		
		cancel: function(eventContext){
			//TODO revert changes to status
			Logger.trace("[AADetailsHandler] executing cancel");
			eventContext.ui.transitioning = false;
			eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
		},
		
		initSearchData: function(eventContext){
			Logger.trace("[AADetailsHandler] executing initSearchData");
			var searchData = eventContext.application.getResource("searchAsset");
			if(searchData == null || searchData.getCurrentRecord() == null){
				searchData.createNewRecord();
			}
			eventContext.application.ui.savedQueryIndex = eventContext.application.ui.getViewFromId('AssetAudit.AssetListView').queryBaseIndex;
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
			Logger.trace("[AADetailsHandler] executing setSearchQuery");
			var search = eventContext.application.getResource("searchAsset").getCurrentRecord();
			var filteredItems = 0;
			var filter = {};
			if (search.assetdesc){
			    filter.description = '%'+search.assetdesc+'%';
			    filteredItems++;
			}
			if (search.statusdesc){
			    filter.status = search.statusdesc;
			    filteredItems++;
			}
			if (search.assetnum){
			    filter.assetancestor = '%'+search.assetnum+'%';
			    filteredItems++;
			}
			if (search.location){
			    filter.location = '%'+search.location+'%';
			    filteredItems++;
			}
			
			if(filteredItems == 0){
				eventContext.ui.show('AssetAudit.RequiredSearchFieldMissing');
				return;
			}

		    filter.moved = false;
			
			var self = this;
			var searchedAssets = eventContext.application.getResource("asset");
			eventContext.application.ui.performSearch = true;
			if(searchedAssets){
				searchedAssets.clearFilterAndSort();
				ModelService.clearSearchResult(eventContext.application.getResource('asset')).then(function(){
					 ModelService.empty('asset').then(function(){
						 eventContext.ui.getViewFromId('AssetAudit.AssetListView').setQueryBaseIndexByQuery(PlatformConstants.SEARCH_RESULT_QUERYBASE).then(function(){
							 eventContext.application.showBusy();
							 self.populateSearch(eventContext);
						 });
					 });
				});
			}
			else{
				eventContext.ui.getViewFromId('AssetAudit.AssetListView').setQueryBaseIndexByQuery(PlatformConstants.SEARCH_RESULT_QUERYBASE).then(function(){
					eventContext.application.showBusy();
					self.populateSearch(eventContext);
					eventContext.ui.show('AssetAudit.AssetListView');
				});
			}
		},
		
		showBusyList: function(eventContext){
			if(eventContext.application.ui.performSearch){
				this.application.showBusy();
				eventContext.application.ui.performSearch = false;
			}
		},
		
		populateSearch: function(eventContext){
			Logger.trace("[AADetailsHandler] executing populateSearch");
			var view = eventContext.application.ui.getViewFromId('AssetAudit.AssetListView');
			if(eventContext.application.ui.performSearch){
				if(eventContext.application.getResource("searchAsset") == null){ //TODO:  might be nice to still open to last search
					//must be first login.  If search was last page view just default to 0 index because search resource has been discarded.
					view.changeQueryBase(0);
				    var queryBase = view.queries.children[0].queryBase;
					ModelService.all('asset', queryBase).then(function(modelDataSet){
						modelDataSet.resourceID = 'asset';
						eventContext.application.addResource(modelDataSet);
						eventContext.application.ui.getViewFromId('AssetAudit.AssetListView').lists[0].refresh();
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
				var search = eventContext.application.getResource("searchAsset").getCurrentRecord();
				var filter = {};
				var filteredItems = 0;
				if (search.assetnum){
				    filter.assetnum = '%'+search.assetnum+'%';
				    filteredItems++;
				}
				if (search.assetdesc){
				    filter.description = '%'+search.assetdesc+'%';
				    filteredItems++;
				}
				if (search.status){
				    filter.status = search.status;
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
				
				ModelService.all('asset',PlatformConstants.SEARCH_RESULT_QUERYBASE).then(function(searchResultSet){
					ModelService.clearSearchResult(searchResultSet);			
				});
				
				var deferred = new Deferred();
				var oslcQueryParameters = {};
				ModelService.fetchFromServer('asset',PlatformConstants.SEARCH_RESULT_QUERYBASE).then(function(hasConnectivity){
					eventContext.application.showBusy();
					//eventContext.ui.hideCurrentView();
					if (hasConnectivity){
						//network fetch						
						var searchedAssetMeta = ResourceMetadata.getResourceMetadata("asset");
						searchedAssetMeta.setWhereClause("");
					    filter.moved = false;
						ModelService.filtered('asset', PlatformConstants.SEARCH_RESULT_QUERYBASE, filter, null, true, false, oslcQueryParameters, false).then(function(resultSet){
							resultSet.resourceID = 'asset';
							eventContext.application.addResource(resultSet);
							if (resultSet.count()>0){
								eventContext.ui.hideCurrentView();
								eventContext.application.ui.getViewFromId('AssetAudit.AssetListView').lists[0].refresh();
								eventContext.application.hideBusy();
							} else {
								//offline fetch	
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
											eventContext.ui.hideCurrentView();
											eventContext.application.ui.getViewFromId('AssetAudit.AssetListView').lists[0].refresh();
											eventContext.application.hideBusy();
										} else {
											ModelService.clearSearchResult(assetSet);
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
						//offline fetch
						if (search.assetnum){
						    filter.assetnum = search.assetnum;
						}
						if (search.assetdesc){
						    filter.description = search.assetdesc;
						}
						if (search.status){
						    filter.status = search.status;
						}
						if (search.location){
						    filter.location = search.location;
						}
						
						filter.moved = 0;
						
						//removed attribute that was added by previous modelservice network call.
						delete filter._querybases;
						
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
									eventContext.ui.hideCurrentView();
									eventContext.application.ui.getViewFromId('AssetAudit.AssetListView').lists[0].refresh();
									eventContext.application.hideBusy();
								} else {
									ModelService.clearSearchResult(assetSet);
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
		
		asyncValidateItem : function(eventContext) {
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset').getCurrentRecord();
			var itemnum = asset.getPendingOrOriginalValue('itemnum');

			ModelService.filtered('additionalitem', null, [{itemnum: itemnum}], null, false, true, null, true).then(function(itemSet){
				if (itemSet.count() == 0){
					eventContext.application.showMessage(MessageService.createStaticMessage('invalidItem').getMessage());
				}
			});
		},
		
		commitNewAssetView : function(eventContext) {
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			ModelService.save(assetSet).then(function() {
				var statuses = CommonHandler._getAdditionalResource(eventContext,'domainAssetStatus');
				CommonHandler._clearFilterForResource(eventContext,statuses);
				
				//eventContext.ui.hideCurrentView();
				var viewHistory = eventContext.ui.viewHistory;
				var previousView = viewHistory[viewHistory.length-2];
				eventContext.ui.getViewFromId(previousView.id).setQueryBaseIndexByQuery(PlatformConstants.CREATED_QUERYBASE).then(function(){
					eventContext.ui.hideCurrentView();
				});
			}).
			otherwise(function(err){
				eventContext.ui.showMessage(err);						
			});
		},

		initNewAssetView : function(eventContext) {
			var domainAssetStatus = CommonHandler._getAdditionalResource(eventContext,"domainAssetStatus");
			CommonHandler._clearFilterForResource(eventContext,domainAssetStatus);
			var status = SynonymDomain.resolveToDefaultExternal(domainAssetStatus, 'NOT READY');

			// TODO: change to actual method once Data Access API is completed
			var newAsset = eventContext.application.getResource('asset').createNewRecord();

			newAsset.set('status', status);
			newAsset.set('siteid', UserManager.getInfo("defsite"));
			newAsset.set('orgid', UserManager.getInfo("deforg"));
			newAsset.set('isrunning', true);
			
			eventContext.application.ui.getViewFromId('AssetAudit.NewAssetView').setFooterDisplay(true);
			
			eventContext.getResource()._asyncUpdateModified();
		},
		
		discardNewAssetView : function(eventContext) {
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var currAsset = assetSet.getCurrentRecord();
			
			if(currAsset) {
				currAsset.deleteLocal();
			}
			var statuses = CommonHandler._getAdditionalResource(eventContext,'domainAssetStatus');
			CommonHandler._clearFilterForResource(eventContext,statuses);
			
			eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
		},

		// async validation of location 
		asyncvalidateLocation: function(eventContext){
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset').getCurrentRecord();
			var location = asset.getPendingOrOriginalValue('location');
			var siteID = asset.getPendingOrOriginalValue('siteid');
						
			//If location is blank, set description as blank, return
			if(!location){
				asset.set('locationdesc','');
				asset.set('locationld', '');
				asset.set('locationanddescription', '');
				return;
			}

			ModelService.filtered('additionallocations', null, [{location: location, siteid: siteID}], null, false, true, null, true).then(function(locationSet){
				if (locationSet.count() > 0){
					var locationRec = locationSet.getRecordAt(0);
					asset.set('locationdesc',locationRec.get('assetdesc'));
					asset.set('locationld', locationRec.get('assetld'));
					FieldUtil.initCompositeField("location", "locationdesc", "locationanddescription", asset);
				}
				else{
					asset.set('locationdesc','');
					asset.set('locationld', '');
					asset.set('locationanddescription', parent);
					eventContext.application.showMessage(MessageService.createStaticMessage('invalidLocation').getMessage());
				}
			});
		},

		_showSearchFailedMessageNoConnectivity: function(eventContext){
			eventContext.application.showMessage(MessageService.createStaticMessage('downloadFailedNoConnectivity').getMessage());
			if(eventContext.application.ui.getViewFromId('AssetAudit.AssetListView').lists[0].baseWidget){
				eventContext.application.ui.getViewFromId('AssetAudit.AssetListView').lists[0].refresh();
			}
			eventContext.application.hideBusy();
			eventContext.application.ui.performSearch = false;
		},

		discardView: function(eventContext){
			//cleanupEditAssetView method is invoked as callback of hideCurrentView
			eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
			
		},

		// async validation of parent 
		asyncvalidateParent: function(eventContext){
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset').getCurrentRecord();
			var parent = asset.getPendingOrOriginalValue('parent');
			var siteID = asset.getPendingOrOriginalValue('siteid');
						
			//If parent is blank, set description as blank, return
			if(!parent){
				asset.set('parentdesc','');
				asset.set('parentld', '');
				asset.set('parentanddescription', '');
				return;
			}

			ModelService.filtered('additionalasset', null, [{assetnum: parent, siteid: siteID}], null, false, true, null, true).then(function(parentSet){
				if (parentSet.count() > 0){
					var parentRec = parentSet.getRecordAt(0);
					asset.set('parentdesc',parentRec.get('description'));
					asset.set('parentld', parentRec.get('assetlongdesc'));
					var location = parentRec.get('location');
					if (location){
						asset.set('location', location);
						asset.set('locationdesc',parentRec.get('locationdesc'));
						asset.set('locationld', parentRec.get('locationld'));
					}
				}
				else{
					asset.set('parentdesc','');
					asset.set('parentld', '');
					asset.set('parentanddescription', parent);
					eventContext.application.showMessage(MessageService.createStaticMessage('invalidAsset').getMessage());
				}
			});
		},

		filterLocationForLookup: function(eventContext){
			
		},

		filterAssetStatus: function(eventContext){
			
		},
		
		filterFailureClass: function(eventContext){
			
		},
		
		filterAssetForLookup: function(eventContext){
			var assetSet = eventContext.ui.application.getResource("additionalasset");
			assetSet.resourceID = 'additionalasset';
			eventContext.application.addResource(assetSet);
		},
		
		hideShowMyAssetsMenu: function(eventContext){
			if(eventContext.ui.viewHistory[this.application.ui.viewHistory.length-2].id == "AssetAudit.SearchLocationView"){
				eventContext.setDisplay(false);
			}
			else{
				eventContext.setDisplay(true);
			}
		},
		
		hideDialog : function(eventContext){
			eventContext.ui.hideCurrentDialog();
		},

		hideShowSearchedMenu : function(eventContext){
			var searchResource = eventContext.application.getResource("searchAsset");
			if(searchResource != null){
				eventContext.setDisplay(true);
			}
			else{
				eventContext.setDisplay(false);
			}
		},
		
		showChangeStatus : function(eventContext){
			eventContext.application.getResource("asset").getCurrentRecord();
			eventContext.ui.show('AssetAudit.EditStatusView');
		},
		
		validateFailureCode: function(eventContext){
			var asset = CommonHandler._getAdditionalResource(eventContext,'asset').getCurrentRecord();
			var failureCode = asset.getPendingOrOriginalValue('failurecode');
			var failureCodes = CommonHandler._getAdditionalResource(eventContext,'failureListResource');
			CommonHandler._clearFilterForResource(eventContext,failureCodes);
			
			var isValidFailure = failureCodes.find('failurecode == $1', failureCode);
			
			if(isValidFailure.length == 0){
				throw new PlatformRuntimeException('failureClassData', [failureCode]);
				return;
			}
			return;
		},		
	});
});
