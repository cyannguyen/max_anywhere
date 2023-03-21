define(["require",
        "platformTest/test/utils/TestUtils",
        "application/business/AppConfig",
        "application/business/FieldUtil",
        "application/business/InvuseObject",
        "application/business/InvuseStatusHandler",
        "application/business/MaxDomainObject",
        "application/business/MaxVars",
        "application/business/SynonymDomain",
], 
function(thisModule, TestUtils) {
	TestUtils.register(thisModule, {
		"myFirstTest": function() {
			assertThat(true, equalTo(true));
		}
	});
});
