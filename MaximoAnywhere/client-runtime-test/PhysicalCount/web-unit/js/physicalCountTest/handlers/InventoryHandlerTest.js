define(["require",
        "platformTest/test/utils/TestUtils",
        "application/handlers/CommonHandler",
        "application/handlers/InventoryHandler",
        "platform/model/ModelService",
        "platform/ui/control/UserInterface",
        "platform/ui/control/Application",
        "platform/store/_ResourceMetadataContext",
        'platform/store/ResourceMetadata',
        "platform/model/ModelDataSet"
], 
function(thisModule, TestUtils, CommonHandler, InventoryHandler, ModelService, UserInterface, Application, ResourceMetadataContext, ResourceMetadata, ModelDataSet) {
	
	var eventContext=null;
	var countResource;
	var application = null;
	
	TestUtils.register(thisModule, {
		
		
		"beforeEach" : function() {
			application = new Application();
			var ui = new UserInterface();
			
			var countData = [
			        			    {_id:0, json: {'adjustedphyscntdate': new Date(),	'adjustedphyscnt': 100}},
			        			    {_id:1, json: {'adjustedphyscntdate': new Date(),	'adjustedphyscnt': 100}}
			        			];
			        		    var countResourceMetaData = new ResourceMetadata({
			        				'resourceName': 'invbalance',
			        				'_queryBase' : '',
			        		        'inMemory' : true,
			        		        'pageSize' : 1000,
			        		        'additionalData' : false,
			        		        'isSystem' : false,
			        			}).
			        		    setSimpleFieldsSelectExpression('').
			        		    setSupportiveFieldsSelectExpression('').
			        		    setLocal(true).addField({
			        				name:  'adjustedphyscntdate',
			        				dataType: 'datetime',
			        				'local' : true
			        			}).addField({
			        				name:  'adjustedphyscnt',
			        				dataType: 'integer',
			        				'local' : true
			        			});
			        			ResourceMetadataContext.putResourceMetadata(countResourceMetaData);
			        		    countResource = new ModelDataSet(countResourceMetaData, null, countData);
			        			countResource.resourceID = "invbalance";
			        			countResource.setCurrentIndex(0);
			        			application.addResource(countResource);
			        			
			TestUtils.stub(ui, "getCurrentViewControl", function() {
				return {validate:function() { return true;}};
			});
			
			
			
			eventContext = {
					application: application,
					ui: ui,
					getCurrentRecord: function(){
						return countResource.get(0);
					},
			
			};
		},
		
		"verify the date of the count": function() {
			var inventoryHandler = new InventoryHandler();
			TestUtils.stub(ModelService);
			TestUtils.stub(inventoryHandler, "validateCount", function() {
				return true;
			});
			
			TestUtils.stub(application, "getCurrentDateTime", function() {
				return new Date(2016, 10, 23);
			});
			
			try {
				inventoryHandler.processCount(eventContext);
			} catch (error) {
				assertThat(new Date(countResource.get(0).get('adjustedphyscntdate')).toString(), new Date(2016, 10, 23).toString());
			};
		}
	});
});
