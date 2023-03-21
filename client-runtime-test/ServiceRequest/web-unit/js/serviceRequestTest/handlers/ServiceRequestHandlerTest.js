define(["require",
        "platformTest/test/utils/TestUtils",
        "application/handlers/ClassificationFormHandler",
        "application/handlers/CommonHandler",
        "application/handlers/SRAttachmentHandler",
        "application/handlers/SRDetailHandler",
        "application/handlers/WOAttachmentHandler",
        "application/handlers/WorkLogHandler",
], 
function(thisModule, TestUtils) {
	TestUtils.register(thisModule, {
		"myFirstTest": function() {
			assertThat(true, equalTo(true));
		}
	});
});
