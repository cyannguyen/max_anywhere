define(["require",
        "platformTest/test/utils/TestUtils",
        "application/handlers/TransfersAvailableItemsHandler",
        "application/handlers/CommonHandler",
        "platform/model/ModelDataSet",
        "application/handlers/TransfersHandler",
        "application/handlers/ManagePurchaseOrderHandler",
        "application/handlers/ReceiveShipmentHandler",
], 
function(thisModule, TestUtils, TransfersAvailableItemsHandler, CommonHandler, ModelDataSet, TransfersHandler) {
	TestUtils.register(thisModule, {
		
		"Test complete available itens with no valid quantity with minus simble and chars like -qe": function(){
			var availableItens =  new TransfersAvailableItemsHandler();
			var uiMock = mock({
				getViewFromId: function(viewId){
					return {exceptionFields: {},};
				},
				showMessage: function(viewId){
					//return {exceptionFields: {},};
				},
			});
			var eventContext = {
					ui:uiMock,
			};
			
			var modelDataSet = mock({
				getCurrentRecord: function() {},
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
			
			
			assertThat(availableItens.completeAvailableItems(eventContext), equalTo(undefined));
		},
		"Test complete available itens with empaty quantity": function(){
			var availableItens =  new TransfersAvailableItemsHandler();
			var uiMock = mock({
				getViewFromId: function(viewId){
					return {exceptionFields: {},};
				},
				showMessage: function(viewId){
					//return {exceptionFields: {},};
				},
			});
			var eventContext = {
					ui:uiMock,
			};
			
			var modelDataSet = mock({
				getCurrentRecord: function() {},
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
			
			
			assertThat(availableItens.completeAvailableItems(eventContext), equalTo(undefined));
			verify(uiMock).getViewFromId();
			verify(uiMock).showMessage();
		},
		
		"Test success completeAvailableItems": function(){
			var availableItens =  new TransfersAvailableItemsHandler();
			var uiMock = mock({
				getViewFromId: function(viewId){
					return {exceptionFields: {},};
				},
				showMessage: function(viewId){
					//return {exceptionFields: {},};
				},
			});
			
			var appMock = mock({
				showBusy: function(viewId){
					return {exceptionFields: {},};
				}
			});
			var eventContext = {
					ui:uiMock,
					application: appMock,
			};
			
			var modelDataSet = mock({
				getCurrentRecord: function() {},
			});
			
			var modelData = mock({
				get: function(index) {},
				set: function(index) {},
			});	
			
			when(modelDataSet).getCurrentRecord().thenReturn(modelData);
			when(modelData).get('issueQty').thenReturn(2);
			
			var _getAdditionalResource = TestUtils.createFunctionMock(CommonHandler, "_getAdditionalResource");
						
			when(_getAdditionalResource).call(anything()).
			then(function(){
			 return modelDataSet;	
			});
			
			var _initiateTransfer = TestUtils.createFunctionMock(availableItens, "initiateTransfer");
			
			when(_initiateTransfer).call(anything()).thenReturn("");
			
			var _setStatus = TestUtils.createFunctionMock(TransfersHandler, "setStatus");
			
			when(_setStatus).call(anything()).thenReturn("");
			
			
			assertThat(availableItens.completeAvailableItems(eventContext), equalTo(undefined));
			verify(uiMock).getViewFromId();
			verify(_setStatus);
			verify(_initiateTransfer);
		}
	});
});