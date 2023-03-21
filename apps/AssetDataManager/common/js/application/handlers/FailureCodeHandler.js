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

define("application/handlers/FailureCodeHandler", 
	   [ "dojo/_base/declare",
	     "dojo/_base/array",
		  "dojo/_base/lang",
		  "dojo/dom-class",
	     "platform/handlers/_ApplicationHandlerBase",
	     "platform/comm/CommunicationManager",
	     "platform/translation/SynonymDomain",
	     "platform/model/ModelService",
	     "platform/translation/MessageService",
	     "application/handlers/CommonHandler",
	     "application/business/FieldUtil",
	     "platform/exception/PlatformRuntimeException",
	     "platform/warning/PlatformRuntimeWarning",
	     "platform/auth/UserManager",
	     "platform/util/PlatformConstants",
	     "platform/util/AsyncAwareMixin",
	     "dojo/Deferred",
	     "platform/logging/Logger"],
function(declare, arrayUtil, lang, domClass, ApplicationHandlerBase, CommunicationManager, SynonymDomain, ModelService, MessageService, CommonHandler, FieldUtil, PlatformRuntimeException, PlatformRuntimeWarning, UserManager, PlatformConstants, AsyncAwareMixin,Deferred, Logger) {
	
	return declare( ApplicationHandlerBase,  {
		
		originalLinenum:null,
		currLinenum:null,
		nextLinenum:null,
		previousLinenum:null,
		self:this,
		
/**@memberOf application.handlers.FailureCodeHandler */
		populateFailureClass: function(eventContext){
			var wo = this._getCurrentWO(eventContext);
			wo.backtrack = [];
			var failurecode = wo.get("failurecode");
			var failurecodedesc = wo.get("failureCodeDesc");

			if (failurecode==null){
				eventContext.setDisplay(false);
				return;
			}
			
			eventContext.getResource().getRecordAt(0).set("failureClass", failurecode);
			eventContext.getResource().getRecordAt(0).set("failureCodeDesc", failurecodedesc);
		},
		
		populateCurrentFCLevel : function(eventContext){ 
			var wo = this._getCurrentWO(eventContext);
			var fcLvlTracker = {"originalLinenum":null,"nextLinenum":null};

			var currentFC = null;

			if (wo.failureReportlist){
				currentFC = wo.failureReportlist.getRecordAt(wo.failureReportlist.count()-1);
			}
	
			var deferred =  new Deferred();

			wo['backtrack']=[];
			
			if (currentFC){
				fcLvlTracker.originalLinenum = currentFC.linenum;
				fcLvlTracker.nextLinenum = currentFC.linenum;
				wo['FCLevelMonitor'] = fcLvlTracker;
				deferred.resolve();
			} else {
				if (wo.get("failurecode")){
					var failurecode = wo.get("failurecode");
					var linenum = null;
			
					var firstLevelLineNumPromise = this._getFirstLevelLineNum(eventContext,failurecode);
					firstLevelLineNumPromise.then(function(dataSet){
						if (dataSet.count() > 0){
							linenum = dataSet.data[0].failurelist;
							fcLvlTracker.originalLinenum = linenum;
							fcLvlTracker.nextLinenum = linenum;
							wo['FCLevelMonitor'] = fcLvlTracker;
							deferred.resolve();
						} else {
							wo['FCLevelMonitor'] = fcLvlTracker;
							deferred.reject(new PlatformRuntimeWarning('failureClassData'));
							this.UI.showMessage(MessageService.createStaticMessage("failureClassData").getMessage());							
						}
					}).otherwise(function(e){
						return new Deferred().reject(new PlatformRuntimeWarning('failureClassData'));
					});
				} else {
					fcLvlTracker.originalLinenum=null;
					fcLvlTracker.nextLinenum=null;
					wo['FCLevelMonitor'] = fcLvlTracker;
					deferred.resolve();
				}
			}
			
			if (currentFC){
				wo.set("currentFCType", currentFC.get("type"));
				wo.set("currentFCDesc", currentFC.get("failureDesc"));
			} else if (wo.failurecode) {
				wo.set("currentFCDesc", wo.get("failureCodeDesc"));
			} else {
				wo.set("currentFCType",'');
				wo.set("currentFCDesc", '');
			}
			return deferred.promise;
		},

		failureLookup: function(eventContext){
			var woSet = eventContext.application.getResource('workOrder');
			var wo = woSet.getCurrentRecord();
			var selectedRecord = CommonHandler._getAdditionalResource(eventContext,"failureListResource").getCurrentRecord();
			var fc = selectedRecord.get("failurecode");
			var failurelist = selectedRecord.get("failurelist");
			Logger.trace("failure lookup fc: " + fc + " failureList: "  + failurelist);
			
			if (wo.get("failurecode")==null){
				wo.set('failurecode',fc);	
				wo.set("failureCodeDesc", selectedRecord.get("description"));
			} else {
				Logger.trace("creating new failure report");
				var newRecord = wo.failureReportlist.createNewRecord();				
				newRecord.set("failurecode", fc);
				newRecord.set("linenum",failurelist );
				newRecord.set("type", selectedRecord.get("type"));				
				newRecord.set("failureDesc", selectedRecord.get("description"));
			}
			
			Logger.trace("setting woFCLevelMonitor.previousLinenum: " + wo.FCLevelMonitor.nextLinenum);
			wo.FCLevelMonitor.previousLinenum = wo.FCLevelMonitor.nextLinenum;
			Logger.trace("setting woFCLevelMonitor.nextLinenum: " + failurelist);
			wo.FCLevelMonitor.nextLinenum = failurelist;
			wo.backtrack.push(failurelist);
			
			if (wo.get("failurecode")==null){
				eventContext.ui.getCurrentViewControl().refresh();
			} else {
				var promise = this.nextLevelExists(eventContext,wo.FCLevelMonitor.nextLinenum);
				promise.then(function(nextleveldoesexist){
					if (nextleveldoesexist.count()>0){
						Logger.trace("Next level does exist");
						eventContext.ui.getCurrentViewControl().refreshLists();
					}else if (!wo.isNew()){
						Logger.trace("Next level doesn't exist");
						eventContext.application.showBusy();
						ModelService.save(woSet).then(function(){
							wo.closePriorityChangeTransaction();
							eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
						});	
					} else {
						wo.closePriorityChangeTransaction();
						Logger.trace("Next level doesn't exist");
						eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
					}
				}).otherwise(function(error){
					Logger.trace("Error received finding next level: " + error);
				});				
				
			}

		},

		hideShowSelectLink : function(eventContext){
			var wo = this._getCurrentWO(eventContext);
			var promise = this.nextLevelExists(eventContext, wo.FCLevelMonitor.nextLinenum);
			var self = this;

			promise.then(function(failureListSet){
				
				Logger.trace("****** Hide Show Link: "+ failureListSet.count());
				Logger.trace("****** Failure Report List: "+ failureListSet.count());

				if (failureListSet.count() > 0){
					var type;
					if (failureListSet.data[0].type){
						type = failureListSet.data[0].type;
					} else {
						type = self._failureClassMessage();
					}	
					
					//TODO make sure it works with message bundle
					eventContext.setLabel( MessageService.createResolvedMessage('selectFailureClassLabel', [type])) ;
					eventContext.setDisplay(true);	
				} else {
					ModelService.all("failureListResource", null, 5, false).then(function(failureList){
						if (failureList.getRecordAt(0)==null){
							domClass.remove(eventContext.baseWidget.domNode,'textlink');
							domClass.add(eventContext.baseWidget.domNode,'failureCodeNoData');
							eventContext.setLabel(MessageService.createStaticMessage('nolookupdata').getMessage()) ;
							eventContext.setDisplay(true);							
						} else {
							domClass.remove(eventContext.baseWidget.domNode,'textlink');
							eventContext.setDisplay(false);
						}
					});			
				}
			}).otherwise(function(e){
				throw e;
			});

		},
		
		
		nextLevelExists: function(eventContext, linenum){
			var filter = {};
			var isExactMatch = true;

			if (linenum == null){
				filter = {'parent': 'null'};
			} else {
				filter = {'parent': linenum};
			}

			if (filter.parent==null){
				isExactMatch = false;
			}

			var deferred =  new Deferred();
			
			ModelService.filtered('failureListResource', null, filter, 50, false, isExactMatch).then(function (dataSet) {
				Logger.trace("Replacing failureListResource dataset with: " + dataSet);
				dataSet.resourceID = 'failureListResource';
				eventContext.application.addResource(dataSet);
				deferred.resolve(dataSet);
			}).otherwise(function(e){
				deferred.reject(new PlatformRuntimeWarning('failureClassData'));
			});
			
			return deferred.promise;
		}, 
		
		_getCurrentWO :  function(eventContext){
			return currWO = eventContext.application.getResource('workOrder').getCurrentRecord();
		},
		
		_getFirstLevelLineNum :  function(eventContext, fc){
			var filter;
			filter={'parent':'null','failurecode':fc};

			var deferred =  new Deferred();
			ModelService.filtered('failureListResource', filter).then(function (dataSet) {
				dataSet.resourceID = 'failureListResource';
				eventContext.application.addResource(dataSet);
				deferred.resolve(dataSet); 
			}).otherwise(function(e){
				deferred.reject(new PlatformRuntimeWarning('failureClassData'));
			});
			return deferred.promise;
		},
		
		_getCurrentFCLineNum :  function(eventContext, wo){
			var frl = wo.failureReportlist.data;
			var failurecodeobject = null;
			
			if (frl.length>0){
				//get current failurecode
				failurecodeobject = frl[frl.length - 1];
				return failurecodeobject.linenum; 
			} else {
				if (wo.failurecode){
					this._getFirstLevelLineNum(eventContext,wo.failurecode).then(function(failurelistrecord){
						return failurelistrecord.linenum;
					});
				} else {
					return null;
				}
			}			
		},
		
		_failureClassMessage : function(){
			return MessageService.createStaticMessage('failureClass').getMessage();
		},
	
		resolveNextFailureType : function(eventContext) {
			var failureListSet = eventContext.application.getResource('failureListResource');
			var type;
			
			if (failureListSet.data[0].type){
				type = failureListSet.data[0].type;
			} else {
				type = this._failureClassMessage();
			}	
			return [type];
		
		},	

		//controls the visibility of the 1st Level Failure Class
		hideShowFailureClass: function(eventContext){
			var wo = this._getCurrentWO(eventContext);
					
			if (wo.get("failurecode")) {
				eventContext.setDisplay(true);
			} else {
				eventContext.setDisplay(false);
			}
		},
		
		//controls the visibility of the nth Level Failure List Hierarchy
		hideShowFailureList: function(eventContext){
			var wo = this._getCurrentWO(eventContext);
			var failureList = wo.get("failureReportlist");
			
			if (failureList) {
				if (failureList.data.length>0){
					eventContext.setDisplay(true);
				} else {
					eventContext.setDisplay(false);
				}
			}
		},
		
		commitFailureCode : function(eventContext){
			eventContext.application.showBusy();			
			var currWOSet = eventContext.application.getResource('workOrder');
			var wo = currWOSet.getCurrentRecord();
			wo.FCLevelMonitor.originalLinenum = this._getCurrentFCLineNum(eventContext, wo);
			wo.closePriorityChangeTransaction();
			if (!wo.isNew()) {
				ModelService.save(currWOSet).then(function(){
					eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
				});	
			} else {
				eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
			}
		},
		
		cancelFailureCode : function(eventContext){
			//rollback changes
			var wo = this._getCurrentWO(eventContext);
			var failureListSet = wo.failureReportlist;

			
			//delete temporary files
			arrayUtil.forEach(failureListSet.data, function(failureRecord) {
				if (failureRecord._isNew){
					failureRecord.deleteLocal();
				}	
			});
			
			if (wo.__changedAttributes.failurecode){
				wo.set("failurecode", null);
				wo.FCLevelMonitor.previousLinenum = null;
				wo.FCLevelMonitor.nextLinenum = null;
			} else {
				wo.FCLevelMonitor.nextLinenum = wo.FCLevelMonitor.originalLinenum;
			}
			
			this.nextLevelExists(eventContext,wo.FCLevelMonitor.nextLinenum);
			wo.closePriorityChangeTransaction();
			eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
		},
		
		
		handleFailureLookupBackButtonClick : function(eventContext){
			var wo = eventContext.application.getResource('workOrder').getCurrentRecord();
			var failureReport = wo.failureReportlist;
			
			if (wo.backtrack.length==0){
				eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
				wo.FCLevelMonitor.nextLinenum = wo.FCLevelMonitor.originalLinenum;	
				return;
			}
			
			wo.backtrack.pop();
			var failurecodeid;
			if (wo.backtrack.length==0){
				failurecodeid = wo.FCLevelMonitor.originalLinenum;
			} else {
				failurecodeid = wo.backtrack[wo.backtrack.length-1]; 
			}
			
			wo.FCLevelMonitor.nextLinenum = failurecodeid;		
			
			if (failureReport.count()==0){
				wo.setNullValue('failurecode');
			} else {
				var recordToBeDeleted = failureReport.data[failureReport.data.length - 1];
				if (recordToBeDeleted && recordToBeDeleted._isNew){
					recordToBeDeleted.deleteLocal();
				}
			}
			
			var handler = eventContext.application['application.handlers.FailureCodeHandler'];
			handler.nextLevelExists(eventContext, failurecodeid).then (function(data){
				eventContext.ui.getCurrentViewControl().refresh();
			});
			
		},
				
		deleteFailureCode : function(eventContext){
			eventContext.application.showBusy();
			var self = this;
			var woSet = eventContext.application.getResource('workOrder');
			var failurecode = eventContext.getCurrentRecord();
			var currentID = failurecode.get('_id');
			var wo = woSet.getCurrentRecord();
			wo.openPriorityChangeTransaction();
			
			//check resourcename to see if we are deleting from the failureclass level
			if(currentID && eventContext.getResource().getResourceName()!='failureClassResource'){
				arrayUtil.forEach(failurecode.getOwner().data, function(failureRecord) {
					if (failureRecord.get('_id')>=currentID){
						failureRecord.deleteChildOnServer();
					}
				});
			} else {
				woSet.getCurrentRecord().setNullValue('failurecode');
				arrayUtil.forEach(woSet.getCurrentRecord().failureReportlist.data, function(failureRecord) {
					failureRecord.deleteChildOnServer();
				});
			}

			var promise = self.populateCurrentFCLevel(eventContext);
			promise.then(function() {
				if (!woSet.getCurrentRecord().isNew()) {
					wo.closePriorityChangeTransaction();
					ModelService.save(woSet).then(function(){
						eventContext.ui.getCurrentViewControl().refresh();
					});	
				} else {
					eventContext.ui.getCurrentViewControl().refresh();
				}
			});
		},
		
		openTransaction : function(eventContext){
			var woSet = eventContext.application.getResource('workOrder');
			var wo = woSet.getCurrentRecord();
			wo.openPriorityChangeTransaction();
		}
		
	});
});
