define(["require",
        "platformTest/test/utils/TestUtils",
        "application/com/Inspection/handlers/InLineListHandler",
        "application/com/Inspection/handlers/InspectionFormHandler",
        "application/com/Inspection/handlers/InspectionMetersListHandler",
        "application/com/Inspection/handlers/TaskChangeHandler",
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



