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

define("application/handlers/WODetailsHandler", 
	   [ "dojo/_base/declare",
	     "dojo/_base/array",
	     "dojo/_base/lang",
	     "dojo/number",
	     "dojo/date/locale",
	     "platform/translation/SynonymDomain",
	     "platform/auth/UserManager",
	     "platform/handlers/_ApplicationHandlerBase",
	     "platform/comm/CommunicationManager",
	     "platform/model/ModelService",
	     "application/handlers/CommonHandler",
	     "platform/exception/PlatformRuntimeException",
	     "platform/translation/MessageService",
	     "platform/warning/PlatformRuntimeWarning",
	     "platform/util/PlatformConstants" ],
function(declare, array, lang, number, locale, SynonymDomain, UserManager, ApplicationHandlerBase, CommunicationManager, ModelService, CommonHandler, PlatformRuntimeException, MessageService, PlatformRuntimeWarning, PlatformConstants) {
	return declare( ApplicationHandlerBase, {
	
		// TODO: need a unique identifier for WO.  _id?
/**@memberOf application.handlers.WODetailsHandler */
		resolveWonumLabel: function(control) {
			return [control.getCurrentRecord().get('wonum')];
		},
		
		
		approveAcceptClickHandler: function(caller){
			//TODO: implement this
		},
		
		cancelRejectClickHandler: function(caller){
			//TODO: implement this
		},		
		
		newWorkLogEntryClickHandler: function(caller){
			//TODO: do something to set up new work log entry
			
			// transition to new work log view
			this.ui.show('WorkApproval.NewWorkLogView');
		},
		
		
		initWorkLogView: function(eventContext){
			var workLog = this.application.getResource('workLogEntry').getCurrentRecord();
			var person = workLog.get('person');
			var createdDate = this.application.getTime();

			workLog.setTimestampValue('createdDate', createdDate);
			workLog.set('person', person);
			////eventContext.setMyResourceObject(eventContext.resourceObject);
		},
		
		initEditStatusView: function(eventContext){
			
			//TODO: handle case where status change coming from a task
			var editstatus = this.application.getResource('workOrder').getCurrentRecord();
			var wonum = editstatus.get('wonum');
			var status = editstatus.get('status');
			var statusDate = this.application.getTime();

			editstatus.set('wonum', wonum);
			editstatus.set('status', status)
			editstatus.setTimestampValue('statusDate', statusDate);
			//eventContext.setMyResourceObject(eventContext.resourceObject);
		},
		
		resolveWonumLabel : function(control) {
			return [ this.application.getResource('workOrder').getCurrentRecord().get('wonum') ];
		},
		
		
		initCostsView: function(eventContext){
			var workOrder = eventContext.application.getResource('workOrder').getCurrentRecord();
			var taskList = eventContext.application.getResource('workOrder.tasklist');
			var curr = eventContext.getCurrentRecord();
			//var woCost = eventContext.application.getResource('workCosts');
					
            var total = 0;
            var totalintlabhrs = 0; 
            var totalintlabcost = 0;
            var totaloutlabhrs = 0;
            var totaloutlabcost = 0;
            var totallabhrs = 0;
            var totallabcost = 0;
            var totalmatcost = 0;
            var totalservcost = 0;
            var totaltoolcost = 0;
            
            //always calculate the workorder costs
            totalintlabhrs += workOrder.get('estintlabhrs');
			totaloutlabhrs += workOrder.get('estoutlabhrs');
			totallabhrs += workOrder.get('estlabhrs');
			totalintlabcost += workOrder.get('estintlabcost');
			totaloutlabcost += workOrder.get('estoutlabcost');
			totallabcost += workOrder.get('estlabcost');
			totalmatcost += workOrder.get('estmatcost');
			totalservcost += workOrder.get('estservcost');
			totaltoolcost += workOrder.get('esttoolcost');
			total += totallabcost + totalmatcost + totalservcost + totaltoolcost;
            
			//if there are tasks, include them in the summary and total
            if(taskList && taskList.data.length>0){
            	//iterate through each task and include their cost in the total
            	array.forEach(taskList.data, function(task){
    				totalintlabhrs += task.get('estintlabhrs');
    				totaloutlabhrs += task.get('estoutlabhrs');
    				totallabhrs += task.get('estlabhrs');
    				totalintlabcost += task.get('estintlabcost');
    				totaloutlabcost += task.get('estoutlabcost');
    				totallabcost += task.get('estlabcost');
    				totalmatcost += task.get('estmatcost');
    				totalservcost += task.get('estservcost');
    				totaltoolcost += task.get('esttoolcost');
    				total += task.get('estlabcost') + task.get('estmatcost') + task.get('estservcost') + task.get('esttoolcost');
    			});			
			} 
            var userlocale = this.application.getUserLocale();
			//console.log('user locale = '+userlocale);
			
			curr.set('localestintlabhrs', number.format(totalintlabhrs, {locale: userlocale}));
			curr.set('localestoutlabhrs', number.format(totaloutlabhrs, {locale: userlocale}));
			curr.set('localestlabhrs', number.format(totallabhrs, {locale: userlocale}));
			curr.set('localestintlabcost', number.format(totalintlabcost, { places: 2, locale: userlocale}));
			curr.set('localestoutlabcost', number.format(totaloutlabcost, { places: 2, locale: userlocale}));
			curr.set('localestlabcost', number.format(totallabcost, { places: 2, locale: userlocale}));
			curr.set('localestmatcost', number.format(totalmatcost, { places: 2, locale: userlocale}));
			curr.set('localesttoolcost', number.format(totaltoolcost, { places: 2, locale: userlocale}));
			curr.set('localestservcost', number.format(totalservcost, { places: 2, locale: userlocale}));
			curr.set('localesttotalcost', number.format(total, { places: 2, locale: userlocale}));
			
		},
		
		hierarchyCostsClickHandler: function(caller){
			// transition to Hierarchy Costs view
			this.ui.show('WorkApproval.HierarchyCostsView');
		},
		
		initHierarchyCostsView: function(eventContext){
			var costs = this.application.getResource('workCosts').getCurrentRecord();
			
			//TODO: use Math functions to calculate work Costs recursively where applicable and as sums where indicated
			
			/*var localestintlabhrs =;
			var localestoutlabhrs;
			var localestlabhrs = (localestintlabhrs + localestoutlabhrs);
			var localestintlabcost;
			var localestoutlabcost;
			var localestlabcost = (localestintlabcost + localestoutlabcost);
			var localestmatcost;
			var localesttoolcost;
			var localestservcost;
			var localesttotalcost = (localestlabcost + localestmatcost + localesttoolcost + localestservcost);
			
			
			//TODO: use Math functions to calculate work Costs recursively 
			
			costs.set('localestintlabhrs', );
			costs.set('localestoutlabhrs', );
			costs.set('localestlabhrs', );
			costs.set('localestintlabcost', );
			costs.set('localestoutlabcost',);
			costs.set('localestlabcost',);
			costs.set('localestmatcost',);
			costs.set('localesttoolcost',);
			costs.set('localestservcost',);
			costs.set('localesttotalcost',);*/
			
			//eventContext.setMyResourceObject(eventContext.resourceObject);
		},
		
		clearSearchFields: function(eventContext){
			eventContext.application.getResource("searchWorkOrder").createNewRecord();
		},
		
		initSearchData: function(eventContext){
			var searchData = eventContext.application.getResource("searchWorkOrder");
			if(searchData == null || searchData.getCurrentRecord() == null){
				searchData.createNewRecord();
			}
			eventContext.application.ui.savedQueryIndex = eventContext.application.ui.getViewFromId('WorkApproval.WorkListView').queryBaseIndex;
		},
		
		showSearch: function(eventContext){
			eventContext.application.ui.showAllStatus = true;			
		},
		
		hideSearch: function(eventContext){
			if(eventContext.application.ui.transitionInfo.id != "WorkApproval.statusLookup"){
				eventContext.application.ui.showAllStatus = false;			
			}
		},
		
		setSearchQuery: function(eventContext){
			var search = eventContext.application.getResource("searchWorkOrder").getCurrentRecord();
			var filteredItems = 0;
			var filter = {istask: false};
			if (search.wonum){
			    filter.wonum = '%'+search.wonum+'%';
			    filteredItems++;
			}
			if (search.description){
			    filter.description = '%'+search.description+'%';
			    filteredItems++;
			}
			if (search.status){
			    filter.status = search.status;
			    filteredItems++;
			}
			if (search.asset){
			    filter.assetancestor = '%'+search.asset+'%';
			    filteredItems++;
			}
			if (search.location){
			    filter.locationancestor = '%'+search.location+'%';
			    filteredItems++;
			}
			if (search.priority){
			    filter.priority = search.priority;
			    filteredItems++;
			}				
			var statusDateRangeFilter = {};
			if (search.startdate){
			    statusDateRangeFilter.from = search.getAsDateOrNull("startdate");
			}
			if (search.enddate){
			    statusDateRangeFilter.to = search.getAsDateOrNull("enddate");
			}
			if (search.startdate || search.enddate){
				filter["starttime"] = statusDateRangeFilter;
			    filteredItems++;
			}
			
			if(filteredItems == 0){
				eventContext.ui.show('WorkApproval.RequiredSearchFieldMissing');
				return;
			}

			var self = this;
			eventContext.application.ui.performSearch = true;
			ModelService.clearSearchResult(eventContext.application.getResource('workOrder')).then(function(){
				 ModelService.empty('workOrder').then(function(){
					 eventContext.ui.getViewFromId('WorkApproval.WorkListView').setQueryBaseIndexByQuery(PlatformConstants.SEARCH_RESULT_QUERYBASE).then(function(){
						 //eventContext.ui.show('WorkApproval.WorkListView');
						 eventContext.application.showBusy();
						 self.populateSearch(eventContext);
					 });
				 });
			});
		},
		
		showBusyList: function(eventContext){
			if(eventContext.application.ui.performSearch){
				this.application.showBusy();
				eventContext.application.ui.performSearch = false;
			}
		},
		
		populateSearch: function(eventContext){
			var view = eventContext.application.ui.getViewFromId('WorkApproval.WorkListView');
			if(eventContext.application.ui.performSearch){
				if(eventContext.application.getResource("searchWorkOrder") == null){ //TODO:  might be nice to still open to last search
					//must be first login.  If search was last page view just default to 0 index because search resource has been discarded.
					view.changeQueryBase(0);
				    var queryBase = view.queries.children[0].queryBase;
					ModelService.all('workOrder', queryBase).then(function(modelDataSet){
						modelDataSet.resourceID = 'workOrder';
						eventContext.application.addResource(modelDataSet);
						eventContext.application.ui.getViewFromId('WorkApproval.WorkListView').lists[0].refresh();
					})
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
				var search = eventContext.application.getResource("searchWorkOrder").getCurrentRecord();
				var filter = {istask: false};
				var filteredItems = 0;
				if (search.wonum){
				    filter.wonum = '%'+search.wonum+'%';
				    filteredItems++;
				}
				if (search.description){
				    filter.description = '%'+search.description+'%';
				    filteredItems++;
				}
				if (search.status){
				    filter.status = search.status;
				    filteredItems++;
				}
				if (search.asset){
				    filter.assetancestor = '%'+search.asset+'%';
				    filteredItems++;
				}
				if (search.location){
				    filter.locationancestor = '%'+search.location+'%';
				    filteredItems++;
				}
				if (search.priority){
				    filter.priority = search.priority;
				    filteredItems++;
				}				
				var statusDateRangeFilter = {};
				if (search.startdate){
				    statusDateRangeFilter.from = search.getAsDateOrNull("startdate");
				}
				if (search.enddate){
				    statusDateRangeFilter.to = search.getAsDateOrNull("enddate");
				}
				if (search.startdate || search.enddate){
					filter["starttime"] = statusDateRangeFilter;
				    filteredItems++;
				}
				
				if(filteredItems == 0){
					eventContext.application.showMessage(MessageService.createStaticMessage('norecords').getMessage());
					eventContext.application.ui.performSearch = false;
					eventContext.application.hideBusy();
					return;
				}
				
				filter = this.buildFilterForWOClass(eventContext,[filter]);
				var self = this;
				CommunicationManager.checkConnectivityAvailable().then(function(hasConnectivity){
					eventContext.application.showBusy();
					if (hasConnectivity){
						var currentWoSet = eventContext.application.getResource('workOrder');
						if (currentWoSet.getPersistentFilter()){
						     ModelService.clearSearchResult(currentWoSet).
						     then(function(){
									ModelService.filtered('workOrder', PlatformConstants.SEARCH_RESULT_QUERYBASE, filter).then(function(resourceSet){
										eventContext.ui.show('WorkApproval.WorkListView');
										if (!resourceSet.fetchedFromServer){
											self._showSearchFailedMessageNoConnectivity(eventContext);
											return;
										}

										resourceSet.resourceID = 'workOrder';
										eventContext.application.addResource(resourceSet);
										if(resourceSet.count() == 0){
											ModelService.clearSearchResult(resourceSet);
											eventContext.application.showMessage(MessageService.createStaticMessage('norecords').getMessage());
											eventContext.application.ui.performSearch = false;
										}
										else{
											resourceSet.setCurrentIndex(0);
										}
										eventContext.application.ui.getViewFromId('WorkApproval.WorkListView').lists[0].refresh();
										eventContext.application.hideBusy();
									});
						     });
						} else {
							ModelService.filtered('workOrder', PlatformConstants.SEARCH_RESULT_QUERYBASE, filter).then(function(resourceSet){
								eventContext.ui.show('WorkApproval.WorkListView');
								if (!resourceSet.fetchedFromServer){
									self._showSearchFailedMessageNoConnectivity(eventContext);
									return;
								}

								resourceSet.resourceID = 'workOrder';
								eventContext.application.addResource(resourceSet);
								if(resourceSet.count() == 0){
									ModelService.clearSearchResult(resourceSet);
									eventContext.application.showMessage(MessageService.createStaticMessage('norecords').getMessage());
								}
								else{
									resourceSet.setCurrentIndex(0);
								}
								eventContext.application.ui.getViewFromId('WorkApproval.WorkListView').lists[0].refresh();
								eventContext.application.hideBusy();
							});
						}
					}
					else{
						self._showSearchFailedMessageNoConnectivity(eventContext);
						eventContext.application.showMessage(MessageService.createStaticMessage('downloadFailedNoConnectivity').getMessage());
						if(eventContext.application.ui.getViewFromId('WorkApproval.WorkListView').lists[0].baseWidget){
							eventContext.application.ui.getViewFromId('WorkApproval.WorkListView').lists[0].refresh();
						}
						eventContext.application.hideBusy();
						eventContext.application.ui.performSearch = false;
					}
				});
			}
		},
		
		_showSearchFailedMessageNoConnectivity: function(eventContext){
			eventContext.application.showMessage(MessageService.createStaticMessage('downloadFailedNoConnectivity').getMessage());
			if(eventContext.application.ui.getViewFromId('WorkApproval.WorkListView').lists[0].baseWidget){
				eventContext.application.ui.getViewFromId('WorkApproval.WorkListView').lists[0].refresh();
			}
			eventContext.application.hideBusy();
			eventContext.application.ui.performSearch = false;
		},
		
		discardSummaryView: function(eventContext){
			
			var view = eventContext.application.ui.getViewFromId('WorkApproval.WorkListView');
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
			})
		},
		
		validateAsset: function(eventContext){
			var curr = CommonHandler._getAdditionalResource(eventContext,'workOrder').getCurrentRecord();
			var location = curr.getPendingOrOriginalValue('location');
			var asset = curr.getPendingOrOriginalValue('asset');
			var siteid = CommonHandler._getWorkorderSiteId(eventContext);
								
			var assetLoc = this.filterAsset(eventContext);
			//Retrieves asset using location and site.

			var assetSet = assetLoc.find('assetnum == $1 && siteid == $2', asset, siteid);

			//If asset is blank, set description as blank, return
			if(!asset){
				curr.set('asset','');
				curr.set('assetdesc','');
				curr.set('localAssetLd', '');
				curr.set('assetnumanddescription', '');
				return;
			}
			
			//Asset exists on the WO site - if 0 is false
			if(assetSet.length == 0) {
				curr.set('assetdesc','');
				curr.set('localAssetLd', '');
				throw new PlatformRuntimeWarning('invalidAsset');
			}else{
				//If asset exists, set the description for it
				curr.set('assetdesc',assetSet[0].get('description'));
				//Set only for presentation
				curr.set('localAssetLd', assetSet[0].get('assetlongdesc'));
			}				
			
			//If location is set on the WO
			if(location){				
				assetSet = assetLoc.find('assetnum == $1 && location == $2 && siteid == $3', asset, location, siteid);
				
				//asset's location is the same is already set on view - if 0 is false
				if(assetSet.length == 0){
					//Need to check that the asset actually has a location before popping the dialog 
					var additionalasset = CommonHandler._getAdditionalResource(eventContext,"additionalasset");
					var selectedAssetsLocation = CommonHandler._getAssetLocation(eventContext, additionalasset, asset, siteid);
					if (selectedAssetsLocation) {
						//TODO remove this assigment when defect 104985 is fixed
						curr.set('asset', asset);
						this.application.hideBusy();
						eventContext.ui.show('WorkApproval.WOAssetToLocationDialog');
						//if Yes, set asset and location from lookup : yesOnWOAssetToLocation
						//if Not, set asset and keep the location as it is : noOnWOAssetToLocation
						//if Close, do nothing : closeOnWOAssetToLocation
					}
					return;
				}
			}else{
				//If there is no location set on the WO, sets the asset's location then
				var additionalasset = CommonHandler._getAdditionalResource(eventContext,"additionalasset");
				var loc = CommonHandler._getAssetLocation(eventContext, additionalasset, asset, siteid);
				curr.set('location', loc);
				
				//Get Location description
				var additionallocations = CommonHandler._getAdditionalResource(eventContext,"additionallocations");
				var locObj = CommonHandler._getLocationByID(eventContext,additionallocations,loc,siteid);
				curr.set('locationdesc', locObj.get('description'));
			}
		},
		
		// async version of validateAsset
		asyncvalidateAsset: function(eventContext){
			var curWO = CommonHandler._getAdditionalResource(eventContext,'workOrder').getCurrentRecord();
			var location = curWO.getPendingOrOriginalValue('location');
			var asset = curWO.getPendingOrOriginalValue('asset');
			
			//If asset is blank, set description as blank, return
			if(!asset){
				curWO.set('asset','');
				curWO.set('assetdesc','');
				curWO.set('localAssetLd', '');
				curWO.set('assetnumanddescription', '');
				return;
			}

			var siteid = CommonHandler._getWorkorderSiteId(eventContext);								
			var assetLoc = this.filterAsset(eventContext);
//			var assetLoc = CommonHandler._getAdditionalResource(eventContext,'additionalasset');
			//Retrieves asset using location and site.
			var assetPromise = this.async_cmn_getAssetPromise(assetLoc, asset, siteid);
			this.async_va_CheckAssetFound(curWO, assetPromise, asset, location, siteid, eventContext);
		},
				
		async_cmn_getAssetPromise : function(additionalassets, asset, siteid) {			
			var filter = {assetnum: asset, siteid:siteid};
			return ModelService.filtered(additionalassets.getResourceName(), additionalassets.getQueryBase(), filter, null, false, true);
		},
		
		async_va_CheckAssetFound : function (curWO, assetSet, asset, location, siteid, eventContext) {
			if (assetSet.count() == 0) {
				curWO.set('assetdesc','');
				curWO.set('localAssetLd', '');
				throw new PlatformRuntimeWarning('invalidAsset'); 
			}
			else{
				//If asset exists, set the description for it
				var newAsset = assetSet.getRecordAt(0);
				curWO.set('assetdesc',newAsset.get('description'));
				//Set only for presentation
				curWO.set('localAssetLd', newAsset.get('assetlongdesc'));
			}
			
			//If location is set on the WO
			if(location){				
				var assetLocPromise = this.async_cmn_getAssetLocationPromise(asset, location, siteid);
				this.async_va_CheckAssetLocFound(curWO, eventContext, asset, siteid, assetLocPromise);
			}else{
				this.async_va_SetAssetLocation(eventContext, asset, siteid, curWO);
			}
		},		
		
		async_cmn_getAssetLocationPromise: function(assetnum, location, siteid) {
			return ModelService.filtered('additionalasset', null, [{assetnum: assetnum, location: location, siteid: siteid}], null, false, true);
		},

		async_va_SetAssetLocation : function (eventContext, asset, siteid, curWO) {
			//If there is no location set on the WO, sets the asset's location then
			var additionalasset = CommonHandler._getAdditionalResource(eventContext,"additionalasset");
			assetLocPromise = this.async_cmn_getAssetPromise(additionalasset, asset, siteid);
			this.async_va_getAssetLocation(assetLocPromise, curWO, eventContext, siteid);			
		},
						
		async_va_getAssetLocation_selAsset : function(assetSet, curWO, eventContext) {
			if (assetSet.count() > 0) {
				//TODO remove this assigment when defect 104985 is fixed
				curWO.set('asset', assetSet.getRecordAt(0).assetnum);
				this.resolveLocation = assetSet.getRecordAt(0).location;
				this.application.hideBusy();
				eventContext.ui.show('WorkApproval.WOAssetToLocationDialog');
				//if Yes, set asset and location from lookup : yesOnWOAssetToLocation
				//if Not, set asset and keep the location as it is : noOnWOAssetToLocation
				//if Close, do nothing : closeOnWOAssetToLocation
			}			
		},
				
		async_va_CheckAssetLocFound : function (curWO, eventContext, asset, siteid, assetSet) {
			//asset's location is the same is already set on view - if 0 is false
			if(assetSet.count() == 0){
				//Need to check that the asset actually has a location before popping the dialog 
				var additionalasset = CommonHandler._getAdditionalResource(eventContext,"additionalasset");
				var addAssetPromise = this.async_cmn_getAssetPromise(additionalasset, asset, siteid);
				this.async_va_getAssetLocation_selAsset(addAssetPromise, curWO, eventContext);
			}				
		},

		initAssetField: function(eventContext){
			var actualWorkOrder = CommonHandler._getAdditionalResource(eventContext,"workOrder").getCurrentRecord();
			var oslcwpeditsetting = CommonHandler._getAdditionalResource(eventContext,"oslcwpeditsetting");
			var domainAssetstatus = CommonHandler._getAdditionalResource(eventContext,'domainwostatus');
			
			CommonHandler._clearFilterForResource(eventContext,oslcwpeditsetting);

			if(actualWorkOrder == null){
				return;
			}
			
			actualWorkOrder.getRuntimeFieldMetadata('asset').set('readonly',!WpEditSettings.shouldEditAsset(oslcwpeditsetting, 
					SynonymDomain.resolveToInternal(domainAssetstatus,actualWorkOrder.get('status')), actualWorkOrder.get('orgid')));
			
			//set asset description
			if(!actualWorkOrder.get('assetdesc') && actualWorkOrder.get('asset') != null){
				actualWorkOrder.set('assetdesc',actualWorkOrder.get('maxassetdesc'));				
			}		
		},
		
		handleBackButtonClickEditAssetView: function(eventContext){
			//cleanupEditAssetView method is invoked as callback of hideCurrentView
			eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
		},
		
		cleanupEditAssetView: function(eventContext){
			//Invoked by back button or Cancel Edit button
			var workOrder = CommonHandler._getAdditionalResource(eventContext,"workOrder").getCurrentRecord();
			workOrder.set("asset",this.curAsset);
			workOrder.set("assetdesc",this.curAssetDesc);

			workOrder.set("location",this.curLocation);
			workOrder.set("locationdesc",this.curLocationDesc);
			workOrder.set("localLocationLd",this.currLocationld);
			
			this.curAsset = '';
			this.curAssetDesc = '';		
		},

		commitAssetEntryView: function(eventContext){
			var currWO = CommonHandler._getAdditionalResource(eventContext,"workOrder").getCurrentRecord();
			
			//Make sure temporary variables are set to the final values
			//This is necessary because hideCurrentView calls cleanup event
			this.curAsset = currWO.get('asset');
			this.curAssetDesc = currWO.get('assetdesc');
	
			this.curLocation = currWO.get('location');
			this.curLocationDesc = currWO.get('locationdesc');
			this.currLocationld = currWO.get('locationld');
			
			eventContext.ui.hideCurrentView();
		},
		
		initEditAssetView: function(eventContext){
			var currWO = CommonHandler._getAdditionalResource(eventContext,"workOrder").getCurrentRecord();
			var assetSet = CommonHandler._getAdditionalResource(eventContext,'additionalasset');

 			var assetnum = currWO.get('asset');
			if(assetnum){
				//Gets asset from WO and fetch to get additional fields
				var siteid = CommonHandler._getWorkorderSiteId(eventContext);
				var asset = assetSet.find('assetnum == $1 && siteid == $2', assetnum, siteid);
				
				this.curAsset = assetnum;
				this.curAssetDesc = currWO.get('assetdesc');
			} else{
				this.curAsset = '';
				this.curAssetDesc = '';
			}
			this.curLocation = currWO.get('location');
			this.curLocationDesc = currWO.get('locationdesc');
			this.currLocationld = currWO.get("locationld");
			
		},
		
		initAssetView: function(eventContext){
			var currWO = CommonHandler._getAdditionalResource(eventContext,"workOrder").getCurrentRecord();
			
			this.curAsset = currWO.get('asset');
			this.curAssetDesc = currWO.get('assetdesc');
			this.curAssetld = currWO.get('assetld');			
			
			if (this.curAssetld) {
				currWO.set('localAssetLd', this.curAssetld);
			}
			this.curLocation = currWO.get('location');
			this.curLocationDesc = currWO.get('locationdesc');
			this.currLocationld = currWO.get("locationld");			
			
			if (this.currLocationld) {
				currWO.set('localLocationLd',this.currLocationld);	
			}
			
		},
		
		initLocationView: function(eventContext){
			var currWO = CommonHandler._getAdditionalResource(eventContext,"workOrder").getCurrentRecord();
			
			this.curAsset = currWO.get('asset');
			this.curAssetDesc = currWO.get('assetdesc');
			this.curAssetld = currWO.get('assetld');			
			
			if (this.curAssetld) {
				currWO.set('localAssetLd', this.curAssetld);
			}
			this.curLocation = currWO.get('location');
			this.curLocationDesc = currWO.get('locationdesc');
			this.currLocationld = currWO.get("locationld");			
			
			if (this.currLocationld) {
				currWO.set('localLocationLd',this.currLocationld);	
			}
			
		},
		
		filterAssetForLookup: function(eventContext){
			
			var additionalasset = CommonHandler._getAdditionalResource(eventContext,'additionalasset');
			additionalasset._lookupFilter = null;
			
			var siteid = CommonHandler._getWorkorderSiteId(eventContext);
			if(siteid == null){
				siteid = UserManager.getInfo("defsite");
			}
			
			var filter = [];
			
			filter.push({siteid: siteid});
			
			additionalasset.lookupFilter = filter;			
		},
		
		filterLocationForLookup: function(eventContext){

			var workOrderSet = CommonHandler._getAdditionalResource(eventContext,"workOrder");
			
			//save the current location  to reset case user cancel
			//this was done to fix the issue when making a look up and cancel the value in WO detail location was different of showed in the look up
			if(workOrderSet.getCurrentRecord() != null){
				this.curLocation = workOrderSet.getCurrentRecord().get("location");
				this.curLocationDesc = workOrderSet.getCurrentRecord().get("locationdesc");
				this.currLocationld = workOrderSet.getCurrentRecord().get("locationld");
			}
			
			var additionallocations = CommonHandler._getAdditionalResource(eventContext,'additionallocations');
			CommonHandler._clearFilterForResource(eventContext,additionallocations);
			
			
			var siteid = CommonHandler._getWorkorderSiteId(eventContext);
			if(siteid == null){
				siteid = UserManager.getInfo("defsite");
			}
			
			var filter = [];
			
			filter.push({siteid: siteid});
				
			additionallocations.lookupFilter = filter;
		},
		
		// -----------------------------------------------------
		// sync version of validateLocation
		validateLocation: function(eventContext){
			var workOrderSet = CommonHandler._getAdditionalResource(eventContext,"workOrder");
			var currWO = workOrderSet.getCurrentRecord();
			var location = currWO.getPendingOrOriginalValue('location').toUpperCase();
			
			if(!location) {
				currWO.set('locationdesc','');
				//Set only for presentation
				currWO.set('localLocationLd', '');
				return ;
			}
			
			var additionallocations = CommonHandler._getAdditionalResource(eventContext,'additionallocations');
			CommonHandler._clearFilterForResource(eventContext,additionallocations);
			
			var isValidLocation = additionallocations.find('location == $1', location);
			
			if(isValidLocation.length == 0){
				throw new PlatformRuntimeWarning('invalidLocation');
				return ;
			}else{
				//If asset exists, set the description for it
				currWO.set('location',location);
				currWO.set('locationdesc',isValidLocation[0].get('description'));
				//Set only for presentation
				currWO.set('localLocationLd', isValidLocation[0].get('locationld'));
			}
			
			var asset = currWO.getPendingOrOriginalValue('asset');
			if(asset){			
				var location = currWO.get('location');
				var siteid = currWO.get('siteid');
	
				var assetLoc = CommonHandler._getAdditionalResource(eventContext,'additionalasset');
	
				//Retrieves asset using location and site.
				var assetSet = assetLoc.find('assetnum == $1 && location == $2 && siteid == $3', asset, location, siteid);
	
				//if location of new asset is different from current location, shows dialog
				if(assetSet.length == 0){
					eventContext.ui.show('WorkApproval.WOLocationToAssetDialog');
					return ;
				}
			}
			return;
		},

		// async version of validateLocation
		asyncvalidateLocation: function(eventContext) {
			var workOrderSet = CommonHandler._getAdditionalResource(eventContext,"workOrder");
			var currWO = workOrderSet.getCurrentRecord();
			var location = currWO.getPendingOrOriginalValue('location').toUpperCase();
			
			if(!location) {
				currWO.set('locationdesc','');
				//Set only for presentation
				currWO.set('localLocationLd', '');
				return;
			}

			var locationSetPromise = this.async_cmn_getLocationPromise(location);
			this.async_valLoccheckLocationFound(eventContext, currWO, location, locationSetPromise);			
		},
			
		async_valLoccheckLocationFound: function(eventContext, currWO, location, locationSet) {			
			if(locationSet.count() == 0){
				throw new PlatformRuntimeWarning('invalidLocation');
			}
			
			var validLocation = locationSet.getRecordAt(0);
			
			//If asset exists, set the description for it
			currWO.set('location',location);
			currWO.set('locationdesc',validLocation.get('description'));
			//Set only for presentation
			currWO.set('localLocationLd', validLocation.get('locationld'));
			
			var asset = currWO.getPendingOrOriginalValue('asset');
			if(asset){			
				var location = currWO.get('location');
				var siteid = currWO.get('siteid');
	
				var assetLoc = CommonHandler._getAdditionalResource(eventContext,'additionalasset');
	
				//Retrieves asset using location and site.
				var assetPromise = this.async_cmn_getAssetLocationPromise(asset, location, siteid);
				this.async_valLoccheckAssetFound(eventContext, assetPromise);	
			}			
		},
		
		async_valLoccheckAssetFound: function(eventContext, assetSet) {
			//if location of new asset is different from current location, shows dialog
			if(assetSet.count() == 0){
				this.application.hideBusy();
				eventContext.ui.show('WorkApproval.WOLocationToAssetDialog');
			}
		},
		
		async_cmn_getLocationPromise: function(location) {
			return ModelService.filtered('additionallocations', null, [{location: location}], null, false, true);
		},

		async_cmn_getLocationByIDPromise : function(additionallocations, location, siteid) {
			var filter = {location: location, siteid:siteid};
			return ModelService.filtered(additionallocations.getResourceName(), additionallocations.getQueryBase(), filter, null, false, true);
		},
		
		initLocationField: function(eventContext){
			var actualWorkOrder = CommonHandler._getAdditionalResource(eventContext,"workOrder").getCurrentRecord();
			var oslcwpeditsetting = CommonHandler._getAdditionalResource(eventContext,"oslcwpeditsetting");
			var domainAssetstatus = CommonHandler._getAdditionalResource(eventContext,'domainwostatus');
			
			CommonHandler._clearFilterForResource(eventContext,oslcwpeditsetting);

			if(actualWorkOrder == null){
				return;
			}
			actualWorkOrder.getRuntimeFieldMetadata('location').set('readonly',!WpEditSettings.shouldEditLocation(oslcwpeditsetting, 
					SynonymDomain.resolveToInternal(domainAssetstatus,actualWorkOrder.get('status')), actualWorkOrder.get('orgid')));			
			
		},

		discardView: function(eventContext){
			//cleanupEditAssetView method is invoked as callback of hideCurrentView
			eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
			
		},
		cleanupEditLocationView: function(eventContext){
			var workOrderSet = CommonHandler._getAdditionalResource(eventContext,"workOrder");
			
			//set back the location
			if(this.curLocation!=null){
				workOrderSet.getCurrentRecord().set("location",this.curLocation);
				workOrderSet.getCurrentRecord().set("locationdesc",this.curLocationDesc);
				workOrderSet.getCurrentRecord().set("localLocationLd",this.currLocationld);
			}

			//Set asset info back
			workOrderSet.getCurrentRecord().set("asset",this.curAsset);
			workOrderSet.getCurrentRecord().set("assetdesc",this.curAssetDesc);			
		},
		
		initEditLocationView: function(eventContext){
			var currWO = CommonHandler._getAdditionalResource(eventContext,"workOrder").getCurrentRecord();
			
			this.curLocation = currWO.get("location");
			this.curLocationDesc = currWO.get("locationdesc");
			this.currLocationld = currWO.get("locationld");	
		},
		
		commitActualLocationEntryView: function(eventContext){
			var workOrderSet = CommonHandler._getAdditionalResource(eventContext,"workOrder");
			var currWO = workOrderSet.getCurrentRecord();
			
			this.curLocation = currWO.get("location");
			this.curLocationDesc = currWO.get("locationdesc");
			this.currLocationld = currWO.get("locationld");
			
			FieldUtil.initCompositeField("location", "locationdesc", "locationanddescription", currWO);
			
			eventContext.ui.hideCurrentView();
		},
		
		filterAsset: function(eventContext){
			
			var additionalasset = CommonHandler._getAdditionalResource(eventContext,'additionalasset');
			CommonHandler._clearFilterForResource(eventContext,additionalasset);
			
			var siteid = CommonHandler._getWorkorderSiteId(eventContext);
			
			additionalasset.filter('siteid == $1', siteid);
			
			return additionalasset;
			
		},

		//end edit Location view
		resolveAssetLocation: function(eventContext){
			if (this.resolveLocation) {
				return [this.resolveLocation,this.resolveLocation];				
			}
			var workOrderSet = CommonHandler._getAdditionalResource(eventContext,"workOrder");
			var additionalasset = CommonHandler._getAdditionalResource(eventContext,"additionalasset");
			
			var currWO = workOrderSet.getCurrentRecord();
			var siteid = currWO.get('siteid');
			var asset = currWO.getPendingOrOriginalValue('asset');
			
			//Retrieves location from selected asset and set it to WO
			var assetLoc = this.filterAsset(eventContext);
			var loc = CommonHandler._getAssetLocation(eventContext, additionalasset, asset, siteid);
			if (!loc)
				loc='';
			return [loc,loc];
		},		
		
		// async version of yesOnWOAssetToLocation
		asyncyesOnWOAssetToLocation: function(eventContext){
			this.resolveLocation = null;
			var workOrderSet = CommonHandler._getAdditionalResource(this,"workOrder");
			var additionalasset = CommonHandler._getAdditionalResource(this,"additionalasset");
			
			var curWO = workOrderSet.getCurrentRecord();
			var siteid = curWO.get('siteid');
			
			//TODO get current asset (new) and retrieve the location
			//TODO remove this assigment when defect 104985 is fixed
			var asset = curWO.get('asset');
			
			//Retrieves location from selected asset and set it to WO
			var assetLoc = this.filterAsset(eventContext);
			var assetPromise = this.async_cmn_getAssetPromise(additionalasset, asset, siteid);
			this.async_yonwoa_getAssetLocation(assetPromise, curWO, eventContext, siteid )			
		},				

		noOnWOAssetToLocation: function(eventContext){
			this.resolveLocation = null;
			var curr = CommonHandler._getAdditionalResource(this,'workOrder').getCurrentRecord();
			//TODO - need check better the behavior			
			eventContext.ui.hideCurrentDialog();
		},
		
		closeOnWOAssetToLocation: function(eventContext){
			this.resolveLocation = null;
			eventContext.ui.hideCurrentDialog();
		},
		
		resolveExistingAsset: function(eventContext){
			var workOrderSet = CommonHandler._getAdditionalResource(eventContext,"workOrder");					
			var currWO = workOrderSet.getCurrentRecord();		
			var asset = currWO.get('asset');					
			return [asset];			
		},
		
		//Location dialog
		yesOnWOLocationToAsset: function(eventContext){
			//ghet current WO to clean asset
			var workOrderSet = CommonHandler._getAdditionalResource(this,"workOrder");
			var currWO = workOrderSet.getCurrentRecord();
			
			//Store current asset info, in case rollback (Cancel) is need
			this.curAsset = currWO.get('asset');
			this.curAssetDesc = currWO.get('assetdesc');
			
			//clear the asset
			currWO.set('asset', '');
			currWO.set('assetdesc', '');
			
			currWO.set('location', currWO.get('location').toUpperCase());
			currWO.set('locationdesc', currWO.get('locationdesc'));
			
			FieldUtil.initCompositeField("asset", "assetdesc", "assetnumanddescription", currWO);
			
			//hide dialog and Location view
			eventContext.ui.hideCurrentDialog();
		},
		
		noOnWOLocationToAsset: function(eventContext){
			//dont do anything just hide dialog and Location UI	
			var workOrderSet = CommonHandler._getAdditionalResource(this,"workOrder");
			var currWO = workOrderSet.getCurrentRecord();
			
			currWO.set('location', currWO.get('location').toUpperCase());
			currWO.set('locationdesc', currWO.get('locationdesc'));
			eventContext.ui.hideCurrentDialog();
		},
		
		closeOnWOLocationToAsset: function(eventContext){
			//revert the values 	
			var workOrderSet = CommonHandler._getAdditionalResource(this,"workOrder");
			var currWO = workOrderSet.getCurrentRecord();
			currWO.set("location",this.curLocation);
			currWO.set("locationdesc",this.curLocationDesc);
			currWO.set("localLocationLd",this.currLocationld);
			eventContext.ui.hideCurrentDialog();
		},
		//end Location dialog
		
		hideDialog : function(eventContext){
			eventContext.ui.hideCurrentDialog();
		},
		
		selectableWOClassAsFilter: function(eventContext){
			var domainwoclass = CommonHandler._getAdditionalResource(eventContext,'domainwoclass');	
			var internalClasses = ['WORKORDER','ACTIVITY'];
			var filter = [];
			array.forEach(internalClasses, function(anClass){
				CommonHandler._clearFilterForResource(eventContext, domainwoclass);
				var externalOnes = Object.keys(SynonymDomain.resolveToExternal(domainwoclass, anClass));
				array.forEach(externalOnes, function(aValue){
					filter.push({"woclass": aValue});
				});
			});
			CommonHandler._clearFilterForResource(eventContext, domainwoclass);
			return filter;
		},
		
		buildFilterForWOClass: function(eventContext, filter){
			
			var woClasses = this.selectableWOClassAsFilter(eventContext);
			return array.map(woClasses, function(anClass){
				var result = lang.mixin({}, anClass);
				array.forEach(filter, function(condition){
					 lang.mixin(result, condition);		
				});
				return result;
			});		
		},
		
	});
});
