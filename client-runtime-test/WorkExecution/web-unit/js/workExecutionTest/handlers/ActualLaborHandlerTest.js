define(["require",
        "platformTest/test/utils/TestUtils",
        "application/handlers/ActualLaborHandler",
        "platform/model/ModelData",
        "platform/model/ModelService",
        "platform/ui/control/Application",
        "platform/ui/control/UserInterface",
        "platform/store/ResourceMetadata",
        "platform/model/ModelDataSet",
        "application/business/ActualLaborObject"
], 
function(thisModule, TestUtils, ActualLaborHandler, ModelData, ModelService, Application, UserInterface, ResourceMetadata, ModelDataSet, ActualLaborObject) {
	var ui = null;
	var application = null;
	var actualLaborHandler = null;
	var sharedResource = null;
	var workOrderData = null;
		
	TestUtils.register(thisModule, {

		beforeEach: function() {
			ui = new UserInterface();
			application = new Application({
				ui : ui,
			});
			
			workOrderData = [
			        			    {_id:0, json: {'wonum': '1150',	'description1': 'booger1', 'orgid' : 'BEDFORD'}},
			        			    {_id:1, json: {'wonum': '1151',	'description1': 'booger2', 'orgid' : 'BEDFORD'}}
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
			
			//for new workOrder resource added
			var woResource = new ModelDataSet(textMetaData, null, workOrderData);
			woResource.resourceID = 'workOrder';
			woResource.setCurrentIndex(0);
			application.addResource(woResource);
			
			//for new labor resource added
			var laborResource = new ModelDataSet(textMetaData, null, workOrderData);
			laborResource.resourceID = 'mylaborcraftrate';
			laborResource.setCurrentIndex(0);
			application.addResource(laborResource);
			
			actualLaborHandler = new ActualLaborHandler();
			
			actualLaborHandler.application=application;
		},
		"handleBackButton": function() {
		
			var eventContext = {
				application: application,
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
			
			
			TestUtils.stub(ActualLaborObject, "setDefaultValues").returns(true);
			TestUtils.stub(sharedResource, "getCurrentIndex").returns(3);
			actualLaborHandler.initActualLaborEntryView(eventContext);
			
			assertThat(ActualLaborObject.setDefaultValues.called, truth(), "validate that default values are called");
			assertThat(sharedResource.getCurrentIndex.called, truth(), "Saving current Index");
			
			//check back button
			workOrderData[0].deleteLocal = function() {};
			workOrderData[0].getOwner = function() { 
				return {
						setCurrentIndex: function(index) {
							assertThat(index, 3, "Set Index should be called to 1");
						}
				};
			};
			
			TestUtils.spy(workOrderData[0], "deleteLocal");
			TestUtils.stub(actualLaborHandler, "_saveTransaction").returns(true);
			
			actualLaborHandler.handleBackButtonClick(eventContext);
			assertThat(workOrderData[0].deleteLocal.called, truth(), "ensure that deleteLocal was called");
		}
	});
});
