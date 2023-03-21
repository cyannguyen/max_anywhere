define(["require",
        "platformTest/test/utils/TestUtils",
		"dojo/topic",
		"application/handlers/WOExtDownloadHandler",
		"application/handlers/DataSheetDownloadManager",
], 
function(thisModule, TestUtils, topic, WOExtDownloadHandler, DataSheetDownloadManager) {
	
	TestUtils.register(thisModule, {
		
		beforeEach:function() {
			
		},
		
		"defect 245559": function() {
			//WOExtDownloadHandler.loadDataSheets();
			var _cancelLastResourceDataDownloadRequest = TestUtils.createFunctionMock(DataSheetDownloadManager,'cancelLastResourceDataDownloadRequest');
			topic.publish("afterWorkofflineCancel", null);
			//assertThat(true,true);
			verify(_cancelLastResourceDataDownloadRequest);
			assertThat(DataSheetDownloadManager.shouldStop,false);
		},
		
		"custon undo": function(assert) {
			var sequenceCall = [];
			
			var eventContext = mock({				
				
			});
			
			eventContext.ui = mock({
				showMessage: function(){return true;},
				
			});
			
		    var record = mock({
		    	_getResourceMetadataOrThrowError: function(){return metadata;},
		    	getMetadata: function(){return metadata;},
		    	get: function(arg) {
		    		if(arg == "remoteid"){
		    			return "http://ibm.com";
		    		}else{
		    			return "true";
		    		}
		    		},
		    	set: function() {},
		    	wasCommittedToServer: function() {return true;},
		    	getOwner: function() {return {_cleanupRecord:function() {return {};}};},
		    	getModelDataSet: function() {return TestUtils.createResolvedPromise(modelDataSet);},
		    });
		    record.__complexAttributesFetched={test:true, test2:true};
		    var modelDataSet = mock({getCurrentRecord:function(){
		    	return record;
		    	}
		    });
		    
		    eventContext.application = mock({
				isFeatureEnabled: function(){return true;},
				getResource:function(){
			    	return modelDataSet;
			    	},
			   
				
			});
		    eventContext.application["application.handlers.DataSheetHandler"]={undoDataSheetChanges: function(){
		    	sequenceCall.push('application.handlers.DataSheetHandler');
		    	return TestUtils.createResolvedPromise(true);
		    },};
		    
		    modelDataSet.data = [];
			
			var ds = new WOExtDownloadHandler();
			ds.application = {showBusy: function(){},};
			ds.inherited = function(){
				sequenceCall.push('inherited');
				return TestUtils.createResolvedPromise(true);
				};
				
			ds.discardMyChanges(eventContext).then(function() {
				assertThat(sequenceCall, equivalentArray(['inherited', 'application.handlers.DataSheetHandler']));
				
			}).always(function() {
				deferred();
			});
			
		}
	});
});
