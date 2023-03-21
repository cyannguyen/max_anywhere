define(["require",
        "platformTest/test/utils/TestUtils",
        "application/business/ActualMaterialObject",
        "application/business/AppConfig",
        "application/business/FieldUtil",
        "application/business/MaxVars",
        "application/business/SynonymDomain"
], 
function(thisModule, TestUtils) {
	TestUtils.register(thisModule, {
		"myFirstTest": function() {
			assertThat(true, equalTo(true));
		}
	});
});
