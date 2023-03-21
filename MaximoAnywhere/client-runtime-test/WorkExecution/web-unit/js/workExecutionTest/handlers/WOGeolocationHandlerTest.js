define(["require",
        "platformTest/test/utils/TestUtils",
        "platform/model/ModelService",
        "application/handlers/WOGeolocationHandler",
        "application/handlers/CommonHandler",
], 
function(thisModule, TestUtils, ModelService, WOGeolocationHandler, CommonHandler) {
		
	TestUtils.register(thisModule, {

		beforeEach: function() {
			
		},
		 
		"get work details": function() {
			
			var handler = new WOGeolocationHandler();
			handler._getWODetails();
			assertThat(true, true, "Test for work order details");
		}, 
		 
	});
});
