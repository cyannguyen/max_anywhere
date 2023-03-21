define(["require",
        "platformTest/test/utils/TestUtils",
        "application/com/Inspection/business/MaxDomainObject",
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



