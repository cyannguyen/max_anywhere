define(["require",
        "platformTest/test/utils/TestUtils",
        "application/handlers/CommonHandler",
        "application/handlers/MultiAssetLocationHandler",
        "application/handlers/StatusChangeHandler",
        "application/handlers/WODetailsHandler",
        "application/handlers/WOListHandler",
        "application/handlers/WorkLogHandler",
], 
function(thisModule, TestUtils) {
	TestUtils.register(thisModule, {
		"myFirstTest": function() {
			assertThat(true, equalTo(true));
		}
	});
});
