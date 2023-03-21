define(["require",
        "platformTest/test/utils/TestUtils",
        "application/handlers/MeterReadingsHandler",
        
        "application/handlers/StatusChangeHandler",
        "application/handlers/CommonHandler",
        "application/business/AssetStatusHandler",
        "platform/translation/SynonymDomain",
        "application/handlers/AssetDetailHandler",
        "platform/model/ModelService",
        
        "application/handlers/AssetListHandler",
        "application/handlers/AssetListScanHandler",
        "application/handlers/AssetMoveHandler",
        "application/handlers/ClassificationFormHandler",
        "application/handlers/ClassifyAssetHandler",
        "application/handlers/FailureCodeHandler",
        
        "application/handlers/MetersListHandler",
        "application/handlers/ReportDowntimeHandler",
        "application/handlers/StatusChangeHandler",
        "application/handlers/WOAttachmentHandler",
], 
function(thisModule,TestUtils,MeterReadingsHandler,StatusChangeHandler,CommonHandler,AssetStatusHandler,SynonymDomain,AADetailsHandler,ModelService) {

	TestUtils.register(thisModule, {
		beforeEach: function(){
			
		},
		
		"getLastReading must return last reading properly based on meter type and isdelta": function() {
			// 1st test isdelta = false
			var metersListHandler = new MeterReadingsHandler();
			var assetMeter = new Object();
			assetMeter.getPendingOrOriginalValue = function(attr){return true;};
			assetMeter.lastreading = 20;
			assetMeter.newreading = 10;
			var lastReading = metersListHandler.getLastReading('CONTINUOUS',assetMeter);
			// mock save
			assetMeter.localLastReading = lastReading;
			assertThat(lastReading, 10,"Invalid meter last reading ");
			
			// 2nd test roll over
			assetMeter.isdelta = true;
			assetMeter.newreading = 40;
			lastReading = metersListHandler.getLastReading('CONTINUOUS',assetMeter);
			// mock save
			assetMeter.localLastReading = lastReading;
			assertThat(lastReading, 50,"Invalid meter last reading ");
		},
		
		"defect 255974": function() {
			
			var statusChangeHandler = new StatusChangeHandler();
			
			var _clearAssetStatusFilter = TestUtils.createFunctionMock(statusChangeHandler, '_clearAssetStatusFilter');
   			when(_clearAssetStatusFilter).call(anything()).then(function() {
   					var assetStatusDomain = { filter:function(){return null}, count:function(){return 0}}; 
   					return assetStatusDomain;
   				});
			
			/*var _getAdditionalResource = TestUtils.createFunctionMock(CommonHandler, '_getAdditionalResource');
   			when(_getAdditionalResource).call(anything()).then(function() {
   				return "domainAssetStatus";
   			});*/
			
   			var resolveToInternal = TestUtils.createFunctionMock(SynonymDomain, 'resolveToInternal');
   			when(resolveToInternal).call(anything()).then(function(domainAssetStatus, currentStatus) {
   				if(currentStatus=='NON PRONTO')
   					return 'NOT READY';
   				else
   					return null;
   			});
   			
   			var status = null;
   			var assetStatusHandler = {
   					statesFromAsDataSetFilter: function (currentStatus,value){
   						if(value =='value') {
   							status = currentStatus;
   						}
   						var filter = new Object();
   						filter.query=null;
   						filter.params=null;
   						return filter; 
   					}
   			}
   			
   			var getInstance = TestUtils.createFunctionMock(AssetStatusHandler, 'getInstance');
   			when(getInstance).call(anything()).then(function() {return assetStatusHandler});
   			
			var record = {
				get: function(arg0){
					if(arg0 == 'status') {
						return 'NON PRONTO';
					} else {
						return ;
					}
				}
			};
			var eventContext = new Object();
			statusChangeHandler._filterStatus(record,eventContext);
			
			assertThat(status, equalTo('NOT READY'),'The internal Asset status should be used');
		}
	});
});



