define(["require",
        "platformTest/test/utils/TestUtils",
        "application/handlers/ActualMaterialHandler",
        "application/handlers/CodeScannerHandlerExt",
        "application/handlers/CommonHandler",
        "application/handlers/InventoryHandler",
], 
function(thisModule, TestUtils) {
	TestUtils.register(thisModule, {
		"myFirstTest": function() {
			assertThat(true, equalTo(true));
		}
	});
});
