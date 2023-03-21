define(["require",
        "platformTest/test/utils/TestUtils",
        "application/handlers/ActualLaborHandler",
        "application/handlers/CommonHandler",
        "application/business/ActualLaborObject",
        "platform/model/ModelService",
        "platform/model/ModelDataSet",
        "platform/store/ResourceMetadata",
        "platform/ui/control/Application",
        "platform/ui/control/UserInterface",
        "application/handlers/WOListHandler",
        "application/handlers/WOExtDownloadHandler",
        "platform/store/_ResourceMetadataContext",
        //These are there to provide full coverage of non-covered handlers
        "application/handlers/ActualMaterialHandler",
        "application/handlers/ActualToolHandler",
        "application/handlers/AddDatasheetHandler",
        "application/handlers/AssetFunctionDetailsViewHandler",
        "application/handlers/AssetFunctionHandler",
        "application/handlers/CalibrationPointErrorsHandler",
        "application/handlers/CalibrationPointHandler",
        "application/handlers/ClassificationFormHandler",
        "application/handlers/ClassifyWorkOrderHandler",
        "application/handlers/CopyPlansToActualsHandler",
        "application/handlers/CreateNewCalibrationHandler",
        "application/handlers/DataSheetDownloadManager",
        "application/handlers/DataSheetHandler",
        "application/handlers/FailureCodeHandler",
        "application/handlers/LaborAssignmentHandler",
        "application/handlers/MeterReadingsHandler",
        "application/handlers/MetersListHandler",
        "application/handlers/MultiAssetLocationHandler",
        "application/handlers/PlannedMaterialHandler",
        "application/handlers/PlannedToolHandler",
        "application/handlers/ReportByCrewHandler",
        "application/handlers/ReportDowntimeHandler",
        "application/handlers/StatusChangeHandler",
        "application/handlers/StopTimerHandler",
        "application/handlers/TaskHandler",
        "application/handlers/WOAttachmentHandler",
        "application/handlers/WOCreateQueryBaseHandler",
        "application/handlers/WODetailHandler",
        "application/handlers/WOHistoryHandler",
        "application/handlers/WorkLogHandler",
        "application/handlers/WorkOrderHistoryHandler",
], 
function(thisModule, TestUtils,ActualLaborHandler,CommonHandler,ActualLaborObject, ModelService, ModelDataSet, ResourceMetadata, Application, UserInterface,WOListHandler,WOExtDownloadHandler,_ResourceMetadataContext) {
	var laborSet=null;
	TestUtils.register(thisModule, {
		
		beforeEach:function() {
			var record0 = {_id : 0, json : {'orgid' : 'orgid', description: 'Test 1'}};
			var laborDataList = [record0];
			var laborResourceMetadata = new ResourceMetadata({
		        'inMemory' : false,
		        'pageSize' : 1000,
		        'maxFetchDataLimit' : 0,
		        'additionalData' : false,
		        'resourceName' : 'actualLabor',
		        'isSystem' : false,
		     }).addField({
		        'index' : false,
		        'dataType' : 'string',
		        'persistent' : true,
		        'name' : 'orgid',
		        'local' : true,
		        'maxSize' : 10,
		     }).addField({
		        'index' : false,
		        'dataType' : 'string',
		        'persistent' : true,
		        'name' : 'description',
		        'local' : true,
		        'maxSize' : 50,
		     });
		     
			laborSet = new ModelDataSet(laborResourceMetadata, "getLabor", laborDataList);
		},
		
		"defect 245559": function() {
			
			var laborHandler = new ActualLaborHandler();
   			var openPriority = false;
   			var closePriority = false;
   			
   			ui = new UserInterface();
			application = new Application({
				ui : ui,
			});
   			
			application.getResource = function(){
					var resource = {getCurrentRecord:function(){
						var record = {openPriorityChangeTransaction:function(){
										  openPriority = true;
									  },
									  closePriorityChangeTransaction:function(){
										  closePriority = true;
									  }
						};
						return record;
					}};
					return resource;
			};
			
			var ui = {
				hideCurrentView:function(){}	
			};
			
			laborHandler.application = application;
			laborHandler.ui = ui;
			
			var _getAdditionalResource = TestUtils.createFunctionMock(CommonHandler, '_getAdditionalResource');
   			when(_getAdditionalResource).call(anything()).then(function(eventContext,resourceName) {
   				var resourceSet = {createNewRecord:function(){}, getCurrentIndex:function(){return 1;}, getCurrentRecord:function() {return {get:function() {return "orgid";}}}};
   				return resourceSet;
   			});
   			
   			var setDefaultValues = TestUtils.createFunctionMock(ActualLaborObject, 'setDefaultValues');
   			when(setDefaultValues).call(anything()).then(function() {return null});

   			//actuallaborlist
			var actuallaborlist = new ModelDataSet(laborSet.getMetadata(), null, laborSet.data);
			actuallaborlist.resourceID = 'workOrder.actuallaborlist';
			actuallaborlist.setCurrentIndex(0);
			application.addResource(actuallaborlist);
			
   			var save = TestUtils.createFunctionMock(ModelService, 'save');
   			when(save).call(anything()).then(function() {return null});
   			
   			
			var eventContext = {
				viewControl : {
					isOverrideEditMode : function(){return false}
				},
				setMyResourceObject : function(actualLaborSet){},
				application : {
					getResource:function(){
						return laborSet;
					},
					getCurrentDateTime:function(){}
				}
			};

			laborHandler.initActualLaborEntryView(eventContext);
			assertThat(openPriority, equalTo(true),'Work Order openPriorityChangeTransaction should be called before create the Actual Labor record');
			
			
			laborHandler._saveTransaction();
			assertThat(closePriority, equalTo(true),'Work Order closePriorityChangeTransaction should be called before save the Actual Labor record');
		},
		
		"defect 258024": function() {
			var appMock = {
				showBusy: function(){
				},
				getResource: function(){
					var resource = {getCurrentRecord: function(){
										return null;}
									};
					return resource;
				}
			};
						
			var eventContext = {
				application: appMock,
			};
			
			var woListHandler = new WOListHandler();
			
			var wonum = woListHandler.resolveWonumLabel(eventContext);
			assertThat(wonum, equalTo(['']),'if there is no record wonum should be empty');
		},
		/*
		"defect 258017": function() {
			
			var handlers = [];
			
			var woExt = new WOExtDownloadHandler(); 
			var eventContext = {
				application: {'platform.handlers.WorkOfflineHandler':{ inherited:function(){
																					return null;
																				  },
																		callBackStack : [woExt.loadMeters,woExt.loadDataSheets],
																		addOffLineCallBackHandler: function(handler){
																			handlers[handlers.length] = handler.name;
																		}
																	 }
			                 }
			};
			
			var resource = null;
			
			var getResourceMetadata = TestUtils.createFunctionMock(_ResourceMetadataContext, 'getResourceMetadata');
   			when(getResourceMetadata).call(anything()).then(function() {
   																return  resource;
   															});
   						
			woExt.workoffline(eventContext);
			assertThat(handlers.length,1,'Just 1 Loaders should be called !');
			assertThat(handlers[0],'loadMeters','Load meters was not loaded !');	
			
			resource = {};
			handlers = [];
			woExt.workoffline(eventContext);
			assertThat(handlers.length,2,'Just 2 Loaders should be called !');
			assertThat(handlers[0],'loadMeters','Loader meters was not loaded !');	
			assertThat(handlers[1],'loadDataSheets','Loader data sheetes was not loaded !');
		}
		*/
	});
});
