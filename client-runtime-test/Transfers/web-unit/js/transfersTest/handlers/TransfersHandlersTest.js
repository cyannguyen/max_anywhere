define(["require",
        "platformTest/test/utils/TestUtils",
        "application/handlers/TransfersHandler",
        "application/handlers/CommonHandler",
        "platform/store/_ResourceMetadataContext",
        "platform/store/ResourceMetadata",
        "dojo/_base/array",
        "dojo/Deferred",
        "platform/translation/SynonymDomain",
        "platform/model/ModelService",
        "platform/auth/UserManager",
        "application/handlers/ReceiveShipmentHandler",
        "application/handlers/ManagePurchaseOrderHandler",
        "application/handlers/TransfersAvailableItemsHandler",
        
], 
function(thisModule, TestUtils,TransfersHandler, CommonHandler, ResourceMetadataContext, ResourceMetadata, arrayUtil, Deferred, SynonymDomain, ModelService, UserManager,ReceiveShipmentHandler) {
var adResourcesMetadata = [];
	
	var nonAdResourceMetadata = null;
	var ad1QueryBases = ['qb1', 'qb2'];
	var ad2QueryBases = ['qb1', 'qb2', 'qb3'];	
	var ad3QueryBases = ['qb1'];
	var ad4QueryBases = ['qb1'];
	var ad5QueryBases = null;
	
	TestUtils.register(thisModule, {
		beforeEach: function(){
			shouldStop = false;
			shouldFail = false;
			failIndex = 0;
			adResourcesMetadata.push(new ResourceMetadata({resourceName: 'ad-resource1', additionalData: true, urlBase:'asd'}).
			setQueryBases(ad1QueryBases));
			adResourcesMetadata.push(new ResourceMetadata({resourceName: 'ad-resource2', additionalData: true, urlBase:'asda'}).
			setQueryBases(ad2QueryBases));
			adResourcesMetadata.push(new ResourceMetadata({resourceName: 'ad-resource3', additionalData: true, urlBase:'asdd'}).
			setQueryBases(ad3QueryBases));
			adResourcesMetadata.push(new ResourceMetadata({resourceName: 'ad-resource4', additionalData: true, urlBase:'asdf'}).
			setQueryBases(ad4QueryBases));
			adResourcesMetadata.push(new ResourceMetadata({resourceName: 'inventory', additionalData: true, urlBase:'asdl'}).
			setQueryBases(ad5QueryBases));
			nonAdResourceMetadata = new ResourceMetadata({resourceName: 'non-ad-resource', additionalData: false}).
			setQueryBases(['qb1']);		
			
			arrayUtil.forEach(adResourcesMetadata, function(resourceMetadata){
				ResourceMetadataContext.putResourceMetadata(resourceMetadata);
			});
			ResourceMetadataContext.putResourceMetadata(nonAdResourceMetadata);	
		},
		
		"defect 256002": function() {
			var externalStatus = ""; 
			var EXPECTED_RESULTS = 'receipts != "[(\')一構ソチ‐ COMPLETE]"';
			
			TestUtils.resetMocks();
					
			
			var uiMock = {
					show : function(){},
					viewHistory:[0,{id:'Transfers.ReceiveShippedItemsSeachView'}] 
			};
			
			var appMock = {	addResource: function(){},ui:uiMock };
			var eventContext = {application: appMock,ui:uiMock};
			
			WL.application = appMock;
						
			var getInfo = TestUtils.createFunctionMock(UserManager, 'getInfo');
   			when(getInfo).call(anything()).then(function() {});
   			
   			var _getAdditionalResource = TestUtils.createFunctionMock(CommonHandler, '_getAdditionalResource');
   			when(_getAdditionalResource).call(anything()).then(function() {});
   			
   			var resolveToDefaultExternal = TestUtils.createFunctionMock(SynonymDomain, 'resolveToDefaultExternal');
   			when(resolveToDefaultExternal).call(anything()).then(function(domaininvusereceipts, status) { 
   			    if(status=='COMPLETE')
   			    	return "[(')一構ソチ‐ COMPLETE]"; 
   			    else
   			    	return "XYZ";
   			});
   			
   			var expectedResult = {
   				data : [1],
   				filter : function(filter){
   					if(filter=='invusenum != null')
   						return null;
   					externalStatus = filter;
   				}
   			};
   			
   			var promise = TestUtils.createResolvedPromise(expectedResult);
   			
   			var filtered = TestUtils.createFunctionMock(ModelService, 'filtered');
   			when(filtered).call(anything()).then(function(object, querybase, filter, max, bol1, bol2, arg, bol3) {
   				if(object=='shipment'){
   					return promise;
   				}else
   					return null;
   				
   			});
   			
   			var receiveShipmentHandler = new ReceiveShipmentHandler();
			receiveShipmentHandler.shipmentLookup(eventContext);
			
			assertThat(externalStatus, EXPECTED_RESULTS);
		},
		
		"defect 242218": function() {
			
	   		var _getAdditionalResource = TestUtils.createFunctionMock(CommonHandler, '_getAdditionalResource');
   			when(_getAdditionalResource).call(anything()).then(function() {return null});		
       	
   			var resolveToDefaultExternal = TestUtils.createFunctionMock(SynonymDomain, 'resolveToDefaultExternal');
   			when(resolveToDefaultExternal).call(anything()).then(function() {return 'ATTASSET'});	
			
   			var record = {get: function(arg){
   							if(arg=='receiptquantity')
   								return 15;
   							
   							if(arg=='status')
   								return 'ATTASSET';
   						 }
   			};
			
			var eventContext = new Object();
			eventContext.getCurrentRecord = function(){return record};
			eventContext.setDisplay = function(){return null};
			
			var visible = false;     
	        var setDisplay = TestUtils.createFunctionMock(eventContext, 'setDisplay');
	       		when(setDisplay).call(anything()).then(function(visibleValue) { 
	       			visible = visibleValue;     	
	            });

			var transfersHandler = new TransfersHandler();
			transfersHandler.showReceiveRotatingtButton(eventContext);
			assertThat(visible,true, 'Rotating icon is not beeing displaying');
		},
		
		
		
		"Test initiateTransfer method": {test: function(assert) {
			var testDeferred = assert.async();
			
			var uiMock = mock({
				getViewFromId: function(viewId){
					return {exceptionFields: {},};
				},
				showMessage: function(viewId){
					//return {exceptionFields: {},};
				},
			});
			
			var modelData = mock({
				get: function(index) {},
				set: function(index) {},
				openPriorityChangeTransaction: function(index) {},
				closePriorityChangeTransaction: function(index) {},
				getModelDataSet: function() {
					var deferred = new Deferred();
					
					setTimeout(function(){
						
						modelData.localreservedqty = 1;
						modelDataSet.data=[modelData];
						
						deferred.resolve(modelDataSet);
					}, 1000);
					
					return deferred.promise;	
				},
				localreservedqty: 1,
				status:"",
				
			});
			
			when(modelData).openPriorityChangeTransaction().thenReturn("");
			when(modelData).closePriorityChangeTransaction().thenReturn("");
			
			var modelDataSet = mock({
				getCurrentRecord: function() {
					return modelData;
				},
				find: function() {
					return [modelData];
				},
				createNewRecord: function() {
					return modelData;
				},
				count: function() {
					return 0;
				},
				data:[modelData],
			});
			
			var appMock = mock({
				showBusy: function(viewId){
					return {exceptionFields: {},};
				},
				getResource: function(){
					modelData.localreservedqty = 1;
					modelDataSet.data=[modelData];
					return modelDataSet;
				}
			});
			
			var eventContext = {
					ui:uiMock,
					application: appMock,
					getResource: function(){
						modelData.localreservedqty = 1;
						modelDataSet.data=[modelData];
						return modelDataSet;
					}
			};
			
			when(modelData).get(anything()).thenReturn("COMPLETED");
			
			var _getAdditionalResource = TestUtils.createFunctionMock(CommonHandler, "_getAdditionalResource");
						
			when(_getAdditionalResource).call(anything()).
			then(function(){
				modelData.localreservedqty = 1;
				modelDataSet.data=[modelData];
			 return modelDataSet;	
			});
			
			var _resolveToDefaultExternal = TestUtils.createFunctionMock(SynonymDomain, "resolveToDefaultExternal");
			
			when(_resolveToDefaultExternal).call(anything()).
			then(function(){
			 return "COMPLETED";	
			});
			
			var transfersHandler = new TransfersHandler();
			transfersHandler.application = appMock;
			
			
			var _all = TestUtils.createFunctionMock(ModelService, "all");
			
			when(_all).call(anything()).
			then(function(){
				var deferred = new Deferred();
				
				setTimeout(function(){
					modelData.localreservedqty = 1;
					modelDataSet.data=[modelData];
					 
					
					deferred.resolve(modelDataSet);
				}, 1000);
				
				return deferred.promise;		
			});
			
			
			var _getInfo = TestUtils.createFunctionMock(UserManager, "getInfo");
			
			when(_getInfo).call(anything()).
			then(function(){
				return "";		
			});
			
			transfersHandler.checkSplit = function(){
				var deferred = new Deferred();
				
				setTimeout(function(){
					
					
					deferred.resolve({});
				}, 1000);
				
				return deferred.promise;		
			};
			
			transfersHandler.changeStatus = function(arg1, arg2, arg3, arg4, arg5){
				
				assertThat(arg5, equalTo("COMPLETE"));
				modelData.status = "COMPLETE";
				testDeferred();
			};
			
			transfersHandler.initiateTransfer(eventContext, "COMPLETE");
			when(modelData).openPriorityChangeTransaction().thenReturn("");
			when(modelData).closePriorityChangeTransaction().thenReturn("");
			return testDeferred;
		}
		
		
	}
	});
});
