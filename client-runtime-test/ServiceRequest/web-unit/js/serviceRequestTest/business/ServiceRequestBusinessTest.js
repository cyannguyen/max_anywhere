define(["require",
        "platformTest/test/utils/TestUtils",
        "application/business/AssetMeterObject",
        "application/business/AssignmentObject",
        "application/business/AttachmentsObject",
        "application/business/ClassStructureObject",
        "application/business/FieldUtil",
        "application/business/MaxDomainObject",
        "application/business/MaxVars",
        "application/business/ServiceRequestObject",
        "application/business/ServiceRequestStatusHandler",
        "application/business/SynonymDomain",
        "application/business/WorkLogObject",
        "application/business/WpEditSettings",
        'platform/store/ResourceMetadata',
        "platform/model/ModelDataSet",
        "platform/store/_ResourceMetadataContext",
        "platform/model/_SystemResourceCache",
], 
function(thisModule, TestUtils, 
		AssetMeterObject, 
		AssignmentObject, 
		AttachmentsObject, 
		ClassStructureObject, 
		FieldUtil, 
		MaxDomainObject, 
		MaxVars, 
		ServiceRequestObject,
		ServiceRequestStatusHandler,
		SynonymDomain,
		WorkLogObject,
		WpEditSettings,
		ResourceMetadata,
		ModelDataSet,
		ResourceMetadataContext,
		SystemResourceCache) {
	
	var srModelDataSet =null;
	
	TestUtils.register(thisModule, {
		
		beforeEach: function() {
			var srData = [
			        			    {_id:0, json: {'status': 'NEW',	'srnum': "testtest"}},
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
		    setSupportiveFieldsSelectExpression('')
		    .addField({
				name:  'status',
				dataType: 'string',
			}).addField({
				name:  'srnum',
				dataType: 'string',
			});
			ResourceMetadataContext.putResourceMetadata(countResourceMetaData);
		    srModelDataSet = new ModelDataSet(countResourceMetaData, null, srData);
			srModelDataSet.resourceID = "serviceRequest";
			srModelDataSet.setCurrentIndex(0);
			
			var srDomainData = [
	        			    {_id:0, json: {'value': 'NEW',	'maxvalue': "NEW", "description": 'New'}},
	        			    { _id:1, json: {'value': 'INPRG', 'maxvalue': "INPRG", "description": 'In Progress'}},
	        			];
			  var srDomainMetaData = new ResourceMetadata({
					'resourceName': 'domainsrstatus',
					'_queryBase' : '',
			      'inMemory' : true,
			      'pageSize' : 1000,
			      'additionalData' : false,
			      'isSystem' : true,
				}).
			  setSimpleFieldsSelectExpression('').
			  setSupportiveFieldsSelectExpression('').
			  addField({
					name:  'value',
					dataType: 'string',
				}).addField({
					name:  'maxvalue',
					dataType: 'string',
				}).addField({
					name:  'description',
					dataType: 'string',
				});
				ResourceMetadataContext.putResourceMetadata(srDomainMetaData);
			    var srDomainModelDataSet = new ModelDataSet(srDomainMetaData, null, srDomainData);
				srDomainModelDataSet.resourceID = "domainsrstatus";
				srDomainModelDataSet.setCurrentIndex(0);
				
				SystemResourceCache_getCachedSystemResource = TestUtils.createFunctionMock(SystemResourceCache, 'getCachedSystemResource');
				when(SystemResourceCache_getCachedSystemResource).call(anything()).then(function(resourceName){
					console.log("asked for: " + resourceName);
					return srDomainModelDataSet;
				});
		},
		"myFirstTest": function() {
			assertThat(true, equalTo(true));
		},
		verifyStatusDesc: function() {
			var srModelData = srModelDataSet.get(0);
			ServiceRequestObject.onInitialize(srModelData);
			assertThat(srModelData.get("statusdesc"), "New", "The Status Desc");
			srModelData.set("status", "INPRG");
			//Need to verify that the status description is updated if the status updates
			assertThat(srModelData.get("statusdesc"), "In Progress", "The Status Desc");
		}
	});
});
