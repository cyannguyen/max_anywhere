define(["require",
        "platformTest/test/utils/TestUtils",
        "application/business/AssetStatusHandler",
        "platform/model/ModelService",
        "platform/model/state/MultiLabelStateMachineSupport",
        "application/business/SynonymDomain",
        "application/business/AssetMeterObject",
        "application/business/AssetObject",
        "application/business/AssetSpecificationObject",
        "application/business/AssetStatusHandler",
        "application/business/AssetStatusObject",
        "application/business/AttachmentsObject",
        "application/business/ClassStructureObject",
        "application/business/FieldUtil",
        "application/business/MaxDomainObject",
        "application/business/MaxVars",
        "application/business/SynonymDomain",
], 
function(thisModule,TestUtils,AssetStatusHandler,ModelService,MultiLabelStateMachineSupport,SynonymDomain) {

	TestUtils.register(thisModule, {
		beforeEach: function(){
			
		},
		
		"defect 255974": function() {
			
			var all = TestUtils.createFunctionMock(ModelService, 'all');
   			when(all).call(anything()).then(function() {
   				var modalSet = {then : function(){return new Object()}};
   				return modalSet;
   			});
			
			var assetStatusHandler = AssetStatusHandler.getInstance();
			
			var fromModelDataSetToLabelStateConfiguration = TestUtils.createFunctionMock(MultiLabelStateMachineSupport, 'fromModelDataSetToLabelStateConfiguration');
   			when(fromModelDataSetToLabelStateConfiguration).call(anything()).then(function(modelDataSet, value, maxvalue, description) {
   				if(value == "value" && maxvalue=="maxvalue" && description=="description"){
   					var status = {'NON PRONTO':'NON PRONTO','ATTIVO':'ATTIVO','OPERATIVO':'OPERATIVO','INATTIVO':'INATTIVO'};
   					return status;
   				}
   			});

			var resolveToInternal = TestUtils.createFunctionMock(SynonymDomain, 'resolveToInternal');
   			when(resolveToInternal).call(anything()).then(function(modelDataSet, status) {
   				if(status=='NON PRONTO')
   					return 'NOT READY';
   				
   				if(status=='ATTIVO')
   					return 'ACTIVE';
   				
   				if(status=='OPERATIVO')
   					return 'OPERATING';
   				   				
   				if(status=='INATTIVO')
   					return 'INACTIVE';

   			});


   			var testSettings = null;
   			var setupMachine = TestUtils.createFunctionMock(assetStatusHandler, 'setupMachine');
   			when(setupMachine).call(anything()).then(function(settings) {
   				testSettings = settings;
   			});
			
			assetStatusHandler.init(new Object());
		
			var canChangeToStatus = testSettings.configuration['NOT READY'];
			
			assertThat(canChangeToStatus==undefined , equalTo(false),'Internal Asset Status should be used');
			
			if(canChangeToStatus!=undefined)
				assertThat(canChangeToStatus[0] , equalTo('NOT READY'));
		}
	});
});



