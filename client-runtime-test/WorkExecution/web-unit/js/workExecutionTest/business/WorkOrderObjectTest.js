define(["require",
        "dojo/_base/lang",
        "dojo/_base/array",
        "platformTest/test/utils/TestUtils",
        "platform/model/ModelData",
        "platform/model/ModelDataSet",
        "platform/model/ModelService",
        "platform/store/ResourceMetadata",
        "dojo/Stateful",
        "dojo/date/stamp",
        "platform/store/_ResourceMetadataContext",
        "platform/util/PlatformConstants",
        "application/business/WorkOrderObject",
        "platform/model/_SystemResourceCache",
        "platform/exception/PlatformRuntimeException",
        "platform/store/PersistenceManager"
], 
function(thisModule, lang, arrayUtil, TestUtils, ModelData, ModelDataSet, ModelService, ResourceMetadata, Stateful, 
		dateToISOFormatter, ResourceMetadataContext, PlatformConstants, WorkOrderObject, SystemResourceCache,
		PlatformRuntimeException, PersistenceManager) {

	var woData = null;
	var woMetadata = null;

	var toolData = null;
	var toolMetadata = null;

	var assetData = null;
	var assetMetadata = null;
	
	var woModelDataSet = null;
	var wo = null;
	
	var woStatusModelDataSet = null;
	var woStatusMetadata = null;
	
	var systemResourceCache = {};

	TestUtils.register(thisModule, {
		beforeEach: function(){
			
			woData = [{'wonum' : '1001', 'description': 'Test 1', 'status': 'WAPPR', 'asset': '1010', 'siteid': 'BEDFORD', 'orgid': 'EAGLENA','classstructureid': 'strucid','asset_ref': {'remoteid': 'http://host/asset/123'}, 'starttime': '2013-05-28T13:29'}];
			woMetadata = new ResourceMetadata({resourceName: 'workOrder', isSystem: true}).
			setSingleton(false).
			setLocal(false).
			addField({name: 'wonum', dataType: 'string'}).
			addField({name: 'siteid', dataType: 'string'}).
			addField({name: 'orgid', dataType: 'string'}).
			addField({name: 'classstructureid', dataType: 'string'}).
			addField({name: 'non-persistent', dataType: 'string', persistent: false, local: true}).
			addField({name: 'description', dataType: 'string'}).
			addField({name: 'status', dataType: 'string'}).
			addField({name: 'internalStatus', dataType: 'string'}).
			addField({name: 'starttime', dataType: 'datetime'}).
			addField({name: 'durationfield', dataType: 'decimal'}).
			addField({name: 'tools', dataType: 'inline', referenceResource: 'tools', multiplicity: 'Zero-or-many'}).
			addField({name: 'asset', dataType: 'reference', referenceResource: 'asset'});

			toolData = [{'description': 'This is a tool record'}];
			toolMetadata = new ResourceMetadata({resourceName: 'tools'}).
			setSingleton(false).
			addField({name: 'description', dataType: 'string'});

			assetData = [{'assetNum':'1010', 'description': 'This is an asset record'}];
			assetMetadata = new ResourceMetadata({resourceName: 'asset'}).
			setSingleton(false).
			addField({name: 'assetNum', dataType: 'string'}).
			addField({name: 'description', dataType: 'string'});
			
			woModelDataSet = new ModelDataSet(woMetadata, 'getMyAssignedWork', woData);
			wo = woModelDataSet.getRecordAt(0);
			toolsModelDataSet = new ModelDataSet(toolMetadata, null, toolData, wo, "tools");
			assetModelDataSet = new ModelDataSet(assetMetadata, null, assetData, wo);
						
			ResourceMetadataContext.putResourceMetadata(toolMetadata);	
			ResourceMetadataContext.putResourceMetadata(assetMetadata);
			ResourceMetadataContext.putResourceMetadata(woMetadata);
			
			//Setup the domainwostatus
			var woStatusData = [{'maxvalue' : 'WAPPR', 'value': 'WAPPR', 'description': 'Waiting for Approval', 'defaults': true, 'domainid':'WOSTATUS'},
			                    {'maxvalue' : 'APPR', 'value': 'APPR', 'description': 'Approved', 'defaults': true, 'domainid':'WOSTATUS'}];
			woStatusMetadata = new ResourceMetadata({resourceName: 'domainwostatus', isSystem: true}).
			setSingleton(false).
			setLocal(false).
			addField({name: 'orgid', dataType: 'string'}).
			addField({name: 'siteid', dataType: 'string'}).
			addField({name: 'maxvalue', dataType: 'string'}).
			addField({name: 'value', dataType: 'string'}).
			addField({name: 'description', dataType: 'string'}).
			addField({name: 'defaults', dataType: 'boolean'}).
			addField({name: 'domainid', dataType: 'string'}).
			addField({name: 'synonymdomainid', dataType: 'string'});
			
			ResourceMetadataContext.putResourceMetadata(woStatusMetadata);
			woStatusModelDataSet = new ModelDataSet(woStatusMetadata, 'getwodomain', woStatusData);
			systemResourceCache["domainwostatus"] = woStatusModelDataSet;
		
			SystemResourceCache_getCachedSystemResource = TestUtils.createFunctionMock(SystemResourceCache, 'getCachedSystemResource');
			when(SystemResourceCache_getCachedSystemResource).call(anything()).then(function(resourceName){
				console.log("asked for: " + resourceName);
				console.log("returning: " + JSON.stringify(systemResourceCache[resourceName].asJSONArray()));
				return systemResourceCache[resourceName];
			});
		},
		
		"changeState": function(){
			wo = woModelDataSet.getRecordAt(0);
			WorkOrderObject.onInitialize(wo);
			assertThat(wo.get("status"), equalTo("WAPPR"), "status initialized to WAPPR");
			WorkOrderObject.changeStatus(wo, "APPR", new Date(), "my memo", null);
			assertThat(wo.get("status"), equalTo("APPR"), "status changed successfully to APPR");
			assertThat(wo.get("internalStatus"), equalTo("APPR"), "internal status changed successfully to APPR");
			assertThat(wo.get("statusdesc"), equalTo("Approved"), "status description changed successfully to Approved");
			WorkOrderObject.changeStatus(wo, "WAPPR", new Date(), "my memo", null);
		},
		
		"changeStateInvalid": function() {
			try {
				wo = woModelDataSet.getRecordAt(0);
				assertThat(wo.get("status"), equalTo("WAPPR"), "status initialized to WAPPR");
				WorkOrderObject.changeStatus(wo, "BOGUS", new Date(), "my memo", null);
			} catch (error) {	
				console.log(JSON.stringify(error));
				assertThat(error, hasMember('messageKey', "invalidstatustransition"));
			}
		},
		
		"updateSpecifications": function() {
			//Setup the specificationAttributes
			var classstructureid='strucid';
			var siteid='BEDFORD';
			var orgid='EAGLENA';
			var classSpecData =  [{'classstructureid' : 'strucid', 'siteid': null, 'orgid': null, },
				                  {'classstructureid' : 'strucid', 'siteid': null, 'orgid': 'EAGLENA', },
				                 ];
			var expectedFilter =  {'classstructureid' : classstructureid};
			
			var classSpecMetadata = new ResourceMetadata({resourceName: 'classSpec', additionalData: true}).
			setSingleton(false).
			setLocal(false).
			addField({name: 'orgid', dataType: 'string'}).
			addField({name: 'siteid', dataType: 'string'}).
			addField({name: 'classstructureid', dataType: 'string'});
			
			ResourceMetadataContext.putResourceMetadata(classSpecMetadata);
			var classSpecModelDataSet = new ModelDataSet(classSpecMetadata, 'getwodomain', classSpecData);
			
			var woSpecData = [{'classstructureid' : classstructureid, 'siteid': siteid, 'orgid': orgid, },
				             ];
			var woSpecMetadata = new ResourceMetadata({resourceName: 'classSpec', additionalData: true}).
			setSingleton(false).
			setLocal(false).
			addField({name: 'orgid', dataType: 'string'}).
			addField({name: 'siteid', dataType: 'string'}).
			addField({name: 'classstructureid', dataType: 'string'});
			
			ResourceMetadataContext.putResourceMetadata(woSpecMetadata);
			var woSpecModelDataSet = new ModelDataSet(woSpecMetadata, 'getwodomain', woSpecData);
			
			wo = woModelDataSet.getRecordAt(0);
			TestUtils.spy(woSpecModelDataSet,"createNewRecord");
			TestUtils.stub(wo, "getModelDataSet", function() {
				return TestUtils.createResolvedPromise(woSpecModelDataSet);
			});
			
			TestUtils.stub(ModelService, "filtered", function() {
				return TestUtils.createResolvedPromise(classSpecModelDataSet);
			});
			
			WorkOrderObject.updateSpecifications(wo);
			assertThat(ModelService.filtered.calledWith('classSpec', null, expectedFilter, 1000, false, true));
			assertThat(woSpecModelDataSet.createNewRecord.calledTwice, true, "should have made two children spec records");
		},
		
		"testinitialize": function() {
			wo = woModelDataSet.getRecordAt(0);
			assertThat(wo.get("status"), equalTo("WAPPR"), "status initialized to WAPPR");
			WorkOrderObject.onInitialize(wo);
			assertThat(wo.get("internalStatus"), equalTo("WAPPR"), "status initialized to WAPPR");
		},
		
	});
});



