define(["require",
        "platformTest/test/utils/TestUtils",
		"dojo/topic",
		"application/handlers/DataSheetHandler",
		
], 
function(thisModule, TestUtils, topic, DataSheetHandler) {
	var target = null;
	TestUtils.register(thisModule, {
		
		beforeEach:function() {
			target = TestUtils.createMock(DataSheetHandler, ['getDatasheet_DownloadResourceCopy', 'getDataSheetResource', 'undoDataSheetChanges']);
		},
		
		"test data sheet undo": function(assert) {
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
			    	}
				
			});
		    
		    modelDataSet.data = [];
		    when(target).getDatasheet_DownloadResourceCopy(anything())
			.then(function(){
					console.log('getDatasheet_DownloadResourceCopy');
					sequenceCall.push('getDatasheet_DownloadResourceCopy');
					return TestUtils.createResolvedPromise(modelDataSet);
				});
		    
		    when(target).getDataSheetResource(anything())
			.then(function(){
					console.log('getDataSheetResource');
					sequenceCall.push('getDataSheetResource');
					return TestUtils.createResolvedPromise(modelDataSet);
				});
		    
			//var ds = new DataSheetHandler();
			target.undoDataSheetChanges(eventContext).then(function() {
				assertThat(sequenceCall, equivalentArray(['getDatasheet_DownloadResourceCopy', 'getDataSheetResource']));
				
			}).always(function() {
				deferred();
			});
			
		}
	});
});
