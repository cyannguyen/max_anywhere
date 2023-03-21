define(["require",
        "platformTest/test/utils/TestUtils",
        "application/handlers/SRDetailHandler",
        "platform/ui/control/Application",
        "platform/ui/control/UserInterface",
        "platform/model/ModelDataSet",
        "platform/store/ResourceMetadata",
        "platform/store/_ResourceMetadataContext",
        "platform/auth/UserManager",
        "platformTest/test/utils/TestUtils",
], 
function(thisModule, TestUtils, SRDetailHandler, Application, UserInterface, ModelDataSet, ResourceMetadata, ResourceMetadataContext, UserManager, TestUtils) {
	TestUtils.register(thisModule, {
		"initNewServiceRequestViewTest": function() {
			ui = new UserInterface();
			application = new Application({
				ui : ui,
			});
			
			var textMetaData = new ResourceMetadata({
				resourceName: "serviceRequest",
				sumary: "mySumary",
				description: "myDescription"
			});							
			
			var sharedResource = new ModelDataSet(textMetaData, null, null);
			sharedResource.resourceID = "serviceRequest";
			application.addResource(sharedResource);
			
			ResourceMetadataContext.putResourceMetadata(sharedResource);
			
			UserManager.addInfoToCurrentUser({"defsite":"BEDFORD", "deforg":"EAGLENA"});
			
			var eventContext = {
					getResource : function() {
						return{
							_asyncUpdateModified: function(){
								return true;
							}
						}	
					}
				};
			
			eventContext.application = application;
						
			var srDetailHandler = new SRDetailHandler();
			
			srDetailHandler.initNewServiceRequestView(eventContext);
			
			var newData = eventContext.application.getResource('serviceRequest').data[0];
			
			assertThat(newData._isNew, equalTo(true));
			assertThat(newData.sumary, equalTo(undefined));
			assertThat(newData.description, equalTo(undefined));
		}
	});
});
