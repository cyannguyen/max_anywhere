define(["require",
        "dojo/_base/lang",
        "dojo/_base/array",
        "platformTest/test/utils/TestUtils",
        "application/business/ActualLaborObject",
        "platform/model/ModelData",
        "platform/store/_ResourceMetadataContext",
        'platform/store/ResourceMetadata',
        "platform/model/ModelDataSet"], 
function(thisModule, lang, arrayUtil, TestUtils, ActualLaborObject, ModelData, ResourceMetadataContext, ResourceMetadata, ModelDataSet) {

	TestUtils.register(thisModule, {
		
		"setLaborHours": function() {
			var actualLaborData = [
			        			    {_id:0, json: {'premiumpaycode': 'PAY',	'actuallaborhours': 2}},
			        			    {_id:1, json: {'premiumpaycode': null,	'actuallaborhours': 2}},
			        			];
		    var countResourceMetaData = new ResourceMetadata({
				'resourceName': 'invbalance',
				'_queryBase' : '',
		        'inMemory' : true,
		        'pageSize' : 1000,
		        'additionalData' : false,
		        'isSystem' : false,
			}).
		    setSimpleFieldsSelectExpression('').
		    setSupportiveFieldsSelectExpression('').
		    setLocal(true).addField({
				name:  'premiumpaycode',
				dataType: 'string',
				'local' : true
			}).addField({
				name:  'actuallaborhours',
				dataType: 'integer',
				'local' : true
			});
			ResourceMetadataContext.putResourceMetadata(countResourceMetaData);
		    countResource = new ModelDataSet(countResourceMetaData, null, actualLaborData);
			countResource.resourceID = "invbalance";
			countResource.setCurrentIndex(0);
			
			var firstActualLabor = countResource.get(0);
			ActualLaborObject.setLaborHours(firstActualLabor);
			assertThat(firstActualLabor.get("regularhours"),nil(), "regular hours should be null");
			assertThat(firstActualLabor.get("premiumpayhours"),2, "premium hours should be 2");
			
			var secondActualLabor = countResource.get(1);
			ActualLaborObject.setLaborHours(secondActualLabor);
			assertThat(secondActualLabor.get("premiumpayhours"),nil(), "premium hours should be null");
			assertThat(secondActualLabor.get("regularhours"),2, "regularhours should be 2");
			
		},

	});
	

	
});



