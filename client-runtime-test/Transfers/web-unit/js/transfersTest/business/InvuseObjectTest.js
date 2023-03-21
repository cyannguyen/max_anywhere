define(["require",
        "platformTest/test/utils/TestUtils",
        "application/business/InvuseObject",
        "application/business/InvuseStatusHandler",
        "application/handlers/CommonHandler",
        "platform/translation/SynonymDomain",
], 
function(thisModule, TestUtils, InvuseObject, InvuseStatusHandler, CommonHandler, SynonymDomain ) {
	TestUtils.register(thisModule, {
		
		beforeEach: function(){
			
   			  
	        var _resolveToDefaultExternal = TestUtils.createFunctionMock(SynonymDomain, 'resolveToDefaultExternal');
	       		when(_resolveToDefaultExternal).call(anything()).then(function() { 
	       			    	return "ENTERED";
	            });
   			
				
				var statemachineMock = mock({
					canPerformTransition:function(){
						return true;
					}
				});
				var _getInstance = TestUtils.createFunctionMock(InvuseStatusHandler, "getInstance");
				
				when(_getInstance).call(anything()).
				then(function(){
				 return statemachineMock;	
				});
				
				
				var modelDataSet = mock({
					getCurrentRecord: function() {},
					find: function() { return [{get: function() {return "ENTERED";},}]},
				});
				
				var modelData = mock({
					get: function(index) {},
				});
				
				
				when(modelDataSet).getCurrentRecord().thenReturn(modelData);
				when(modelData).get('issueQty').thenReturn("");
				
				var _getAdditionalResource = TestUtils.createFunctionMock(CommonHandler, "_getAdditionalResource");
							
				when(_getAdditionalResource).call(anything()).
				then(function(){
				 return modelDataSet;	
				});
		},
		
		"Test change status to complete": function() {
			//var inveuse =  new InvuseObject();
			var invuseObjectMock = mock({
				get:function(){
					return "ENTERED";
				},
				openPriorityChangeTransaction:function(){
				
				},
				set:function(){
					
				},
				setDateValue:function(){
					
				},
				closePriorityChangeTransaction:function(){
					
				},
			});
			
			var statemachineMock = mock({
				canPerformTransition:function(){
					return true;
				}
			});
			var _getInstance = TestUtils.createFunctionMock(InvuseStatusHandler, "getInstance");
			
			when(_getInstance).call(anything()).
			then(function(){
			 return statemachineMock;	
			});
		
			
			InvuseObject.changeStatus(invuseObjectMock, "COMPLETE");
			verify(invuseObjectMock).closePriorityChangeTransaction();
		},
		
		"Test change status to SHIPPED": function() {
			var invuseObjectMock = mock({
				get:function(){
					return "ENTERED";
				},
				openPriorityChangeTransaction:function(){
				
				},
				set:function(){
					
				},
				setDateValue:function(){
					
				},
				closePriorityChangeTransaction:function(){
					
				},
			});
			
			InvuseObject.changeStatus(invuseObjectMock, "SHIPPED");
			verify(invuseObjectMock).closePriorityChangeTransaction();
		},
		
		"Test change status error throw exception ": function() {
			//var inveuse =  new InvuseObject();
			var invuseObjectMock = mock({
				get:function(){
					return "ENTERED";
				}
			});
			
			var statemachineMock = mock({
				canPerformTransition:function(){
					return false;
				}
			});
			var _getInstance = TestUtils.createFunctionMock(InvuseStatusHandler, "getInstance");
			
			when(_getInstance).call(anything()).
			then(function(){
			 return statemachineMock;	
			});
			
			
			try{
				InvuseObject.changeStatus(invuseObjectMock, "COMPLETE");
			} catch (e) {
				assertThat(e,equalTo("messageKey=invalidstatustransition, name=invalidstatustransition, params=ENTERED,COMPLETE"));
			}
			
		},
	});
});
