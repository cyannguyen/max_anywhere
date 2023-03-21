define(["require",
        "platformTest/test/utils/TestUtils",
        "application/handlers/MetersListHandler",
        "application/business/AssetMeterObject",
        "platform/model/ModelData",
        "platform/model/ModelService",
        "platform/ui/control/Application",
        "platform/ui/control/UserInterface",
        "platform/store/ResourceMetadata",
        "platform/model/ModelDataSet",
        "platform/store/_ResourceMetadataContext",
        "dojo/date/stamp"
], 
function(thisModule,TestUtils,MetersListHandler,AssetMeterObject,ModelData,ModelService,Application,UserInterface,ResourceMetadata,ModelDataSet,ResourceMetadataContext,dateISOFormatter) {
	var application = null;
	var ui = null;
	var meterListHandler = null;
	TestUtils.register(thisModule, {
		beforeEach: function() {
			ui = new UserInterface();
			application = new Application({
				ui : ui,
			});
			
			meterListHandler = new MetersListHandler();
		},
		/*
		 * Important tests to guarantee solution to defect 239173
		 */
		
		"setAssetMeterResource-lastreading&lastreadingdate-NotNull": function() {
			testSetAssetMeterResource("90",'2016-12-27T12:37:00-06:00');
		},
		
		"setAssetMeterResource-lastreading-Null": function() {
			testSetAssetMeterResource(null,'2016-12-27T12:37:00-06:00');
		},
		
		"setAssetMeterResource-lastreadingdate-Null": function() {
			testSetAssetMeterResource("90","");
		},
		
		"setAssetMeterResource-lastreading&lastreadingdate-Null": function() {
			testSetAssetMeterResource(null,"");
		},
		"initializeMeters": function() {
			var eventContext = {
					application: application,
					ui: ui,
					viewControl : {
						requiredResources: {
							workOrder: {
								related: {"workOrder.tasklist":"mytasks"}
							}
						}
					},
					setDisplay: function(shouldDisplay){},
					addResourceWatchHandle: function() {
						
					}
				};
			meterListHandler.application = application;
			testSetAssetMeterResource(null,"");	
			var workOrderData = [
			        			    {_id:0, json: {'wonum': '1150',	'description1': 'booger1', 'classstructureid': 'strucid'}},
			        			    {_id:1, json: {'wonum': '1151',	'description1': 'booger2'}}
			        			];
				
			var textMetaData = new ResourceMetadata({
				resourceName: "textData"
			}).setLocal(true).addField({
				name:  'wonum',
				dataType: 'string',
				length: 10
			}).addField({
				name:  'classstructureid',
				dataType: 'string',
				length: 10
			}).addField({
				name:  'description',
				dataType: 'string',
				length: 5
			}).addField(
					{
		                  'referenceResource' : 'multiassetlocci',
		                  'dataType' : 'inline',
		                  'index' : false,
		                  'precision' : 0,
		                  'name' : 'multiassetloclist',
		                  'selectExpression' : 'spi:task{spi_wm:taskid,dcterms:title,spi:status,spi_wm:schedstart,spi:asset{oslc:shortTitle,dcterms:title},spi:location{oslc:shortTitle,dcterms:title}}',
		                  'remoteName' : 'spi:task',
		                  'local' : false,
		                  'multiplicity' : 'Zero-or-many',
		                  'describedByResource' : 'multiassetlocci',
			            });	
			            
			var sharedResource = new ModelDataSet(textMetaData, null, workOrderData);
			sharedResource.resourceID = 'workOrder';
			sharedResource.setCurrentIndex(0);
			application.addResource(sharedResource);
			TestUtils.spy(eventContext, "addResourceWatchHandle");
			meterListHandler.initializeMeters(eventContext);
			assertThat(eventContext.addResourceWatchHandle.called);
		},
	});
	
	function testSetAssetMeterResource(lastreading, lastreadingdate){
		
		var assetMeterSet = [{
								_id:0, 
								'active': true, 
								'assetnum':	'anyassetnum', 
								'dorollover': false,   
								'isdelta' : false,
								'lastreading': lastreading,
								'lastreadingdate':dateISOFormatter.toISOString(dateISOFormatter.fromISOString(lastreadingdate)), 
								'meterdesc': 'Run Hours',
								'metername': 'RUNHOURS',
								'metertype': 'CONTINUOUS',
								'readingtype': 'DELTA',
								'rollover': 100,
								'siteid' : 'BEDFORD',
								'assetnumdesc':"anyassetnumdesc",
								'domainid': null,
								getAsDateOrNull : function(propertyName){
									return dateISOFormatter.fromISOString(this[propertyName]); 
								},
								get: function(property){
									return this[property];
								}
							}];
		
		textMetaData = new ResourceMetadata({
			resourceName: "woAssetLocMeterInfo"
		});							
		sharedResource = new ModelDataSet(textMetaData, null, assetMeterSet);
		
		
		sharedResource.resourceID = 'woAssetLocMeterInfo';
		sharedResource.setCurrentIndex(0);
		application.addResource(sharedResource);
		
		ResourceMetadataContext.putResourceMetadata(sharedResource);
		
		var modelData = new ModelData(assetMeterSet);
		
		var eventContext = new Object();
		eventContext.application = application;
		
		meterListHandler.application = application;
		meterListHandler.setAssetMeterResource(eventContext,assetMeterSet,'woAssetLocMeterInfo',undefined).then(function(count){
			console.log(count);
			var woAssetLocMeterInfo = application.getResource('woAssetLocMeterInfo');
			var oldOne = woAssetLocMeterInfo.data[0];
			var newOne = woAssetLocMeterInfo.data[1];
			
			assertThat(oldOne.assetnum, equalTo(newOne.assetnum));
			assertThat(oldOne.assetnumdesc, equalTo(newOne.assetnumdesc));
			assertThat(oldOne.lastreadingdate, equalTo(newOne.lastreadingdate));
			assertThat(oldOne.metername, equalTo(newOne.metername));
			assertThat(oldOne.meterdesc, equalTo(newOne.meterdesc));
			assertThat(oldOne.lastreading, equalTo(newOne.lastreading));
			assertThat(oldOne.metertype, equalTo(newOne.metertype));
			assertThat(oldOne.domainid, equalTo(newOne.domainid));
			assertThat(oldOne.readingtype, equalTo(newOne.readingtype));
			assertThat(oldOne.rollover, equalTo(newOne.rollover));
		});
	}
});
