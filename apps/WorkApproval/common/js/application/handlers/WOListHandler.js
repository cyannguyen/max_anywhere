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

define("application/handlers/WOListHandler", 
    [ "dojo/_base/declare",
      "dojo/_base/array",
      "dojo/number",
      "dojo/date/locale",
      "dojo/Deferred",
      "platform/model/ModelService", 
      "platform/model/ModelData",
      "platform/model/ModelDataSet",
      "platform/handlers/_ApplicationHandlerBase",
      "application/business/WorkOrderObject",
      "platform/auth/UserManager",
      "platform/translation/MessageService",
      "dojo/_base/lang",
      "platform/exception/PlatformRuntimeException",
	  "platform/warning/PlatformRuntimeWarning",
	  "platform/util/PlatformConstants"], 
function(declare, array, number, locale, Deferred, ModelService, ModelData, ModelDataSet, ApplicationHandlerBase, WorkOrderObject, UserManager, MessageService, lang, PlatformRuntimeException, PlatformRuntimeWarning, PlatformConstants) {
	return declare(ApplicationHandlerBase, {
/**@memberOf application.handlers.WOListHandler */
		resolveWonumLabel : function(control) {
			return [ this.application.getResource('workOrder').getCurrentRecord().get('wonum') ];
		},
		
		renderWorkOrderActionIfNotLocked : function(eventContext) {
			eventContext.setDisplay(true);
		},
		
		updateListSize: function(listAttribute, listSizeAttribute){
			var workOrder = this.application.getResource('workOrder').getCurrentRecord();
			var previousSizeValue = workOrder.get(listSizeAttribute);
			if(typeof previousSizeValue == 'undefined' || previousSizeValue == null || previousSizeValue == ''){
				workOrder.set(listSizeAttribute, "--");
			}
			
			// Example Using the cached materials list			
//			this.application.createResource(null, null, 'workOrder.'+listAttribute, null, null).then(function(){
//				var list = workOrder.get(listAttribute);
//				var listSize = list.count();
//				var currSize = workOrder.get(listSizeAttribute);
//				if(currSize!=listSize){
//					workOrder.set(listSizeAttribute, listSize+"");
//				}
//			});
			
			var promise = null;
			var childDataSet = workOrder.getLoadedModelDataSetOrNull(listAttribute);
			if (childDataSet && childDataSet.isDirty()){
				promise = new Deferred().resolve(childDataSet);
				
			} else {
				promise = workOrder.getModelDataSet(listAttribute);
				
			}
			
			
			// Example Going to the ModelData to get the materials list
			promise.then(function(list){
				if (!list.hasCachedRecords()){
					workOrder.set(listSizeAttribute, "--");
					return;
				}
				var listSize = list.count();
				var currSize = workOrder.get(listSizeAttribute);
				if(currSize!=listSize){
					workOrder.set(listSizeAttribute, listSize+"");
				}
			});
			
		},
		
		UpdateMultiAssetLocListSize: function(eventContext){
			this.updateListSize('multiassetloclist', 'multiassetloclistsize');
		},
		
		UpdateTaskListSize: function(eventContext){
			this.updateListSize('tasklist', 'tasklistsize');
		},
		
		UpdateLaborListSize: function(eventContext){
			this.updateListSize('laborlist', 'laborlistsize');
		},
		
		UpdateMaterialListSize: function(eventContext){
			this.updateListSize('materiallist', 'materiallistsize');
		},
		
		UpdateToolListSize: function(eventContext){
			this.updateListSize('toollist', 'toollistsize');
		},
		
		UpdateServiceListSize: function(eventContext){
			this.updateListSize('servicelist', 'servicelistsize');
		},
		
		UpdateWorkLogListSize: function(eventContext){
			this.updateListSize('workloglist', 'workloglistsize');
		},
		
		InitializeAllListSizes: function(eventContext){
			var workOrder = eventContext.application.getResource('workOrder').getCurrentRecord();
			var listSizeArray = ['multiassetloclistsize', 'tasklistsize', 'laborlistsize', 'materiallistsize', 'toollistsize', 'servicelistsize', 'workloglistsize'];
			
			listSizeArray.forEach(function(listSizeAttribute){
				var currentValue = workOrder.get(listSizeAttribute);
				if (isNaN(parseInt(currentValue,10))){
					workOrder.set(listSizeAttribute, "--");
				}
			});
		},
		
		calculateWOCost: function(eventContext) {
			//TODO: populate a reusable WorkOrderCosts object so these values do not get recalculated 
			//when a user taps on the cost to view the summary.
			var workOrder = eventContext.getCurrentRecord();
			var taskList = workOrder.tasklist; 			
			var woCost = eventContext.application.getResource('workCosts');
            var total = 0;
           // var totalintlabhrs = 0; 
           // var totalintlabcost = 0;
           // var totaloutlabhrs = 0;
           // var totaloutlabcost = 0;
           // var totallabhrs = 0;
            var totallabcost = 0;
            var totalmatcost = 0;
            var totalservcost = 0;
            var totaltoolcost = 0;
            
            //always calculate the workorder costs
            //totalintlabhrs += workOrder.get('estintlabhrs');
			//totaloutlabhrs += workOrder.get('estoutlabhrs');
			//totallabhrs += workOrder.get('estlabhrs');
			//totalintlabcost += workOrder.get('estintlabcost');
			//totaloutlabcost += workOrder.get('estoutlabcost');
			totallabcost += workOrder.get('estlabcost');
			totalmatcost += workOrder.get('estmatcost');
			totalservcost += workOrder.get('estservcost');
			totaltoolcost += workOrder.get('esttoolcost');
			total += totallabcost + totalmatcost + totalservcost + totaltoolcost;
            
			//if there are tasks, include them in the summary and total
            if(taskList && taskList.data.length>0){
            	//iterate through each task and include their cost in the total
            	array.forEach(taskList.data, function(task){
    				//totalintlabhrs += task.get('estintlabhrs');
    				//totaloutlabhrs += task.get('estoutlabhrs');
    				//totallabhrs += task.get('estlabhrs');
    				//totalintlabcost += task.get('estintlabcost');
    				//totaloutlabcost += task.get('estoutlabcost');
    				//totallabcost += task.get('estlabcost');
    				//totalmatcost += task.get('estmatcost');
    				//totalservcost += task.get('estservcost');
    				//totaltoolcost += task.get('esttoolcost');
    				total += task.get('estlabcost') + task.get('estmatcost') + task.get('estservcost') + task.get('esttoolcost');
    			});			
			} 
            
            
            //set the totalled values on the woCosts object for display in the summary view
            /* Currently doing calculation in WODetailsHandler method as well so we don't need to set these values here
			woCost.set('localestintlabhrs',workOrder.get('estintlabhrs'));
			woCost.set('localestoutlabhrs',workOrder.get('estoutlabhrs'));
			woCost.set('localestlabhrs',workOrder.get('estlabhrs'));
			woCost.set('localestintlabcost',workOrder.get('estintlabcost'));
			woCost.set('localestoutlabcost',workOrder.get('estoutlabcost'));
			woCost.set('localestlabcost',workOrder.get('estlabcost'));
			woCost.set('localestmatcost',workOrder.get('estmatcost'));
			woCost.set('localestservcost',workOrder.get('estservcost'));
			woCost.set('localesttoolcost',workOrder.get('esttoolcost'));
			*/
			var userlocale = this.application.getUserLocale();
			//console.log('user locale = '+userlocale);
			//woCost.set('localesttotalcost',number.format(total, { places: 2, locale: userlocale}));  
            workOrder.set('localtotalcost',number.format(total, { places: 2, locale: userlocale}));
		},
		
		hideShowSearchedMenu : function(eventContext){
			var searchResource = eventContext.application.getResource("searchWorkOrder");
			if(searchResource != null){
				eventContext.setDisplay(true);
			}
			else{
				eventContext.setDisplay(false);
			}
		},

	});
});
