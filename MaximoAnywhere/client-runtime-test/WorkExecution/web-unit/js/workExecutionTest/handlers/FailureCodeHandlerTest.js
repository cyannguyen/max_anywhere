define(["require",
        "platformTest/test/utils/TestUtils",
        "application/handlers/FailureCodeHandler",
        "platform/model/ModelData",
        "platform/model/ModelService",
        "platform/ui/control/Application",
        "platform/ui/control/UserInterface",
        "platform/store/ResourceMetadata",
        "platform/model/ModelDataSet",
        "application/business/ActualLaborObject"
], 
function(thisModule, TestUtils, FailureCodeHandler, ModelData, ModelService, Application, UserInterface, ResourceMetadata, ModelDataSet, ActualLaborObject) {
	var ui = null;
	var application = null;
	var failureCodeHandler = null;
	var sharedResource = null;
	var workOrderData = null;
		
	TestUtils.register(thisModule, {

		beforeEach: function() {
			ui = new UserInterface();
			application = new Application({
				ui : ui,
			});
			
			workOrderData = [
			        			    {_id:0, json: {'wonum': '1150',	'description1': 'booger1'}},
			        			    {_id:1, json: {'wonum': '1151',	'description1': 'booger2'}}
			        			];
			
			textMetaData = new ResourceMetadata({
				resourceName: "textData"
			}).setLocal(true).addField({
				name:  'wonum',
				dataType: 'string',
				length: 10
			}).addField({
				name:  'description',
				dataType: 'string',
				length: 5
			});							
			sharedResource = new ModelDataSet(textMetaData, null, workOrderData);
			
			
			sharedResource.resourceID = 'workOrder.actuallaborlist';
			sharedResource.setCurrentIndex(0);
			application.addResource(sharedResource);
			
			failureCodeHandler = new FailureCodeHandler();
			
			failureCodeHandler.application=application;
		},
		"cancelFailureCode": function() {
			var eventContext = {
					application: application,
					ui: ui,
					viewControl : {
						requiredResources: {
							workOrder: {
								related: {"workOrder.tasklist":"mytasks"}
							}
						},
						isOverrideEditMode: function() {
							return false;
						},
					},
					getCurrentRecord: function() {
						return workOrderData[0];
					},
					setMyResourceObject: function(shouldDisplay){}
				};
			var wo = sharedResource.createNewRecord();
			wo.failureReportlist = {
					data: []
			};
			wo.FCLevelMonitor = {
					originalLinenum: null,
					previousLinenum: 'previous',
					nextLinenum: 'next',
			};
			wo.set('failurecode', 'tobereversed');
			
			TestUtils.stub(failureCodeHandler,"_getCurrentWO").returns(wo);
			TestUtils.stub(ui, "hideCurrentView");
			TestUtils.stub(failureCodeHandler, "nextLevelExists");
			
			failureCodeHandler.cancelFailureCode(eventContext);
			assertThat(wo.FCLevelMonitor.previousLinenum, nil());
			assertThat(wo.FCLevelMonitor.nextLinenum, nil());
			assertThat(wo.get("failurecode"), nil());
			
			
			//Now set the originalLinenum and make sure it's canceled back
			wo.FCLevelMonitor = {
					originalLinenum: 2378,
					previousLinenum: 'previous',
					nextLinenum: 'next',
			};
			wo.set('failurecode', 'tobereversed');
			
			failureCodeHandler.cancelFailureCode(eventContext);
			assertThat(wo.FCLevelMonitor.originalLinenum, 2378);
			assertThat(wo.FCLevelMonitor.nextLinenum, 2378);
			assertThat(wo.get("failurecode"), 'tobereversed');
		}, 
		"_getCurrentFCLineNum": function() {
			var eventContext = {
					application: application,
					ui: ui,
					viewControl : {
						requiredResources: {
							workOrder: {
								related: {"workOrder.tasklist":"mytasks"}
							}
						},
						isOverrideEditMode: function() {
							return false;
						},
					},
					getCurrentRecord: function() {
						return workOrderData[0];
					},
					setMyResourceObject: function(shouldDisplay){}
				};
			var wo = sharedResource.createNewRecord();
			
			//First get it from the data
			wo.failureReportlist = {
					data: [{linenum: 1}, {linenum:2}]
			};
			
			wo.set('failurecode', 'tobereversed');
			
			var firstLevelLineNumStub = TestUtils.stub(failureCodeHandler,"_getFirstLevelLineNum");
			firstLevelLineNumStub.returns(TestUtils.createResolvedPromise({linenum:3}));
			
			var linenum = failureCodeHandler._getCurrentFCLineNum(eventContext, wo);
			
			assertThat(linenum, 2, "should return the most recent from failure report list");
			
			//Now get it from the initial failure class since I haven't picked anything
			wo.failureReportlist = {
					data: []
			};
			
			var linenumPromise = failureCodeHandler._getCurrentFCLineNum(eventContext, wo);
			
			assertThat(typeof linenumPromise, "object", "should return a true promise");
			linenumPromise.then(function(linenum) {
				assertThat(linenum, 3, "did linenum come back");
			});
			
			firstLevelLineNumStub.returns(TestUtils.createResolvedPromise({data:[{failurelist:4}]}));
			
			var linenumPromise = failureCodeHandler._getCurrentFCLineNum(eventContext, wo);
			
			linenumPromise.then(function(linenum) {
				assertThat(linenum, 4, "did linenum come back");
			});
			
			firstLevelLineNumStub.returns(TestUtils.createRejectedPromise({error: "error"}));
			
			var linenumPromise = failureCodeHandler._getCurrentFCLineNum(eventContext, wo);
			
			linenumPromise.then(function() {
				assertThat(1,0,"shouldn't be here");
			}).otherwise(function(linenum) {
				assertThat(linenum, nil(), "did linenum come back nil");
			});
			
			wo.setNullValue('failurecode');
			
			
			var linenum = failureCodeHandler._getCurrentFCLineNum(eventContext, wo);
			
			assertThat(linenum, nil(), "should be nil");
		}, 
		"commitFailureCode": function() {
			var eventContext = {
					application: application,
					ui: ui,
					viewControl : {
						requiredResources: {
							workOrder: {
								related: {"workOrder.tasklist":"mytasks"}
							}
						},
						isOverrideEditMode: function() {
							return false;
						},
					},
					getCurrentRecord: function() {
						return workOrderData[0];
					},
					setMyResourceObject: function(shouldDisplay){}
				};
			
			
		
			
			sharedResource.getCurrentRecord().FCLevelMonitor = {
					originalLinenum: 2378,
					previousLinenum: 'previous',
					nextLinenum: 'next',
			};
			
			//Need to return the workorder model data
			TestUtils.stub(application, 'getResource').returns(sharedResource);
			
			//Need to save the record
			TestUtils.stub(ModelService, 'save').returns(TestUtils.createResolvedPromise("true"));
			
			//Stub out the hideCurrentView
			TestUtils.stub(eventContext.ui, "hideCurrentView");
			
			var getCurrentFCLineNumStub = TestUtils.stub(failureCodeHandler,"_getCurrentFCLineNum");
			getCurrentFCLineNumStub.returns(7);
			
			failureCodeHandler.commitFailureCode(eventContext);
			assertThat(sharedResource.getCurrentRecord().FCLevelMonitor.originalLinenum, 7, "should set the original line num correctly");
			
			var newWO = sharedResource.createNewRecord();
			
			newWO.FCLevelMonitor = {
				originalLinenum: 2378,
				previousLinenum: 'previous',
				nextLinenum: 'next',
			};
			
			failureCodeHandler.commitFailureCode(eventContext);
			assertThat(sharedResource.getCurrentRecord().FCLevelMonitor.originalLinenum, 7, "should set the original line num correctly");
		}, 
	});
});
