define(["require",
        "platformTest/test/utils/TestUtils",
        "application/business/AppConfig",
        "application/business/FieldUtil",
        "application/business/InvuseObject",
        "application/business/InvuseStatusHandler",
        "application/business/MaxDomainObject",
        "application/business/MaxVars",
        "application/business/SynonymDomain",
        "application/business/WpEditSettings",
], 
function(thisModule,TestUtils) {

	TestUtils.register(thisModule, {
		beforeEach: function(){
			
		},
		"myFirstTest": function() {
			assertThat(true, equalTo(true));
		}
	});
});



