define(["require",
        "platformTest/test/utils/TestUtils",
        "application/business/FieldUtil",
        "application/business/MultiAssetLocObject",
        "application/business/PlannedMaterialObject",
        "application/business/PlannedServiceObject",
        "application/business/PlannedToolObject",
        "application/business/SynonymDomain",
        "application/business/TaskObject",
        "application/business/WorkLogObject",
        "application/business/WorkOrderObject",
        "application/business/WorkOrderStatusHandler"
], 
function(thisModule, TestUtils) {
	TestUtils.register(thisModule, {
		"myFirstTest": function() {
			assertThat(true, equalTo(true));
		}
	});
});
