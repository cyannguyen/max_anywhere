define(["require",
        "platformTest/test/utils/TestUtils",
        "platform/model/ModelService",
        "application/handlers/StopTimerHandler",
        "application/business/util/CrewUtil",
        "application/handlers/CommonHandler",
], 
function(thisModule, TestUtils, ModelService, StopTimerHandler, CrewUtil, CommonHandler) {
		
	TestUtils.register(thisModule, {

		beforeEach: function() {
			
		},
		 
		"_getCurrentFCLineNum": function() {
			
			var handler = new StopTimerHandler();
			var mockApp = {getCurrentDateTime: function(){return new Date();}};
			var eventContext = {
				
			};
			eventContext.application = mockApp;
			
			var getUserCrew = TestUtils.createFunctionMock(CrewUtil, "getUserCrew");
   			
   			when(getUserCrew).call(anything()).
			then(function(){
				
				return {setNullValue: function(){ return true;},
						set: function(){ return true;},
						setDateValue: function(){ return true;},
						setTimestampValue: function(){ return true;},
						getModelDataSet: function(arg){  if(arg == 'crewlabor'){ 
																				return {count: function(){return 2;},
																					getRecordAt: function(arg){return {laborid: "labor" + arg, siteid: "site" + arg,};}}; 
																				}else 
																				{ return {count: function(){return 2;},
																					getRecordAt: function(arg){return {get: function(argGet){ if (argGet == 'assetnum'){return "asset" + arg;} else {return "site" + arg;}}};}};};},
						};		
			});
   			
   			var _getAdditionalResource = TestUtils.createFunctionMock(CommonHandler, "_getAdditionalResource");
   			
   			when(_getAdditionalResource).call(anything()).
			then(function(arg1, arg2){
				
				return {filter: function(){ return true;}};		
			});
			
   			var filtered = TestUtils.createFunctionMock(ModelService, "filtered");
   			var filterIsCorrect = false;
   			when(filtered).call(anything()).
			then(function(arg1, arg2, arg3, arg4, arg5, arg6){
				if(arg3.length == 2){
					filterIsCorrect = true;
				}
			});
   			
			handler._buildCrewLists(eventContext, new Date(), new Date(),'complete', 1, 'WORK');
			assertThat(filterIsCorrect, true, "We need to create a filter just for the asset that belong to the crew");
		}, 
		 
	});
});
