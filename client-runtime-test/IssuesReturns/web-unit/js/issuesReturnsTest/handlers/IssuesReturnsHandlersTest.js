define(["require",
        "platformTest/test/utils/TestUtils",
        "application/handlers/CommonHandler",
        "application/handlers/IssuesAvailableItemsHandler",
        "application/handlers/IssuesReturnsHandler",
        "application/handlers/ReturnIssuedItemsHandler",
        "application/handlers/TaskHandler",
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



