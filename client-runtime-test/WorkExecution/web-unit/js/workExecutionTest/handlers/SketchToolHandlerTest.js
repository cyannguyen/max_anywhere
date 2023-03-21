define(["require",
        "platformTest/test/utils/TestUtils",
        "platform/model/ModelService",
        "application/handlers/spatial/SketchToolHandler",
        "application/handlers/CommonHandler"
], 
function(thisModule, TestUtils, ModelService, SketchToolHandler, CommonHandler) {
		
	TestUtils.register(thisModule, {

		beforeEach: function() {
			
		},
		 
		"_mockTest": function() {
			
			//var handler = new SketchToolHandler, ();
			assertThat(true, true, "Mock Test Passed");
		}
		 
	});
});
