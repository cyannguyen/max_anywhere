define(["require",
        "platformTest/test/utils/TestUtils",
        "application/handlers/WODetailHandler",
        "platform/model/ModelData",
        "platform/model/ModelService",
        "platform/translation/SynonymDomain",
        "application/handlers/CommonHandler",
        "platform/auth/UserManager",
        "platform/store/ResourceMetadata",
        "platform/model/ModelDataSet",
        "application/handlers/MetersListHandler",
        "platform/ui/control/Application",
        "platform/store/_ResourceMetadataContext",
        "application/business/WorkOrderObject"
], 
function(thisModule, TestUtils, WODetailHandler, ModelData, ModelService, SynonymDomain, CommonHandler, UserManager, ResourceMetadata, ModelDataSet, MetersListHandler, Application, ResourceMetadataContext, WorkOrderObject) {
	var application=null;
	TestUtils.register(thisModule, {
		beforeEach: function() {
			application = new Application();
			WL.StaticAppProps = {
					APP_ID:"WorkExecution",
			};
		},
		"fetchAllListSizes": function() {
			var woDetailHandler = new WODetailHandler();
			var workOrderData = [
		        			    {_id:0, json: {'wonum': '1150',	'description1': 'booger1'}},
		        			    {_id:1, json: {'wonum': '1151',	'description1': 'booger2'}}
		        			];
			var modelData = new ModelData(workOrderData);
			var eventContext = {
				application: {
					getResource: function(){ 
				
					return {
						getCurrentRecord: function() {
							return modelData;
						},
					};
					},
				},
				viewControl : {
					requiredResources: {
						workOrder: {
							related: {"workOrder.tasklist":"mytasks"}
						}
					}
				},
				setDisplay: function(shouldDisplay){}
			};
			//Need to stub out this model data method.
			TestUtils.stub(modelData, "wasCommittedToServer", function() {
				return true;
			});
			TestUtils.stub(ModelService, "multipleChildrenOf", function(workorder, attributes) {
				assertThat(true, truth(), "multipleChildren of needed to be called to reload");
				assertThat(attributes, not(hasItem("tasklist")), "since the task list is flagged as a required resource, don't reload it");
				return TestUtils.createResolvedPromise();
			});
			//Setup the spy on refresh
			TestUtils.stub(woDetailHandler, "refreshAllListSizes", function() {
				assertThat(true, truth(), "refreshAllListSizes was called");
				return true;
			});
			woDetailHandler.fetchAllListSizes(eventContext);
			
		},
		
		"initNewWorkOrderView": function() {
			var newWorkOrderView=
			{
					setFooterDisplay: function() {
				
					}
			};
			var woDetailHandler = new WODetailHandler();
			var workOrderData = [
		        			    {_id:0, json: {'wonum': '1150',	'description1': 'booger1'}},
		        			    {_id:1, json: {'wonum': '1151',	'description1': 'booger2'}}
		        			];
			var modelData = new ModelData(workOrderData);
			var eventContext = {
				application: {
					getResource: function(){ 
				
					return {
						getCurrentRecord: function() {
							return modelData;
						},
						createNewRecord: function() {
							return modelData;
						},
						_asyncUpdateModified: function() {
							
						}
					};
					},
					setResourceQueryBase: function() {
						return TestUtils.createResolvedPromise();
					},
					getCurrentDateTime: function() {
						new Date();
					},
					hideBusy: function() {
						
					}
				},
				ui: {
					getCurrentViewControl: function() {
						return {queryBaseIndex: 0};
					},
					getViewFromId: function() {
						return newWorkOrderView;
					}, 
					show: function() {
						
					}
				},
				viewControl : {
					requiredResources: {
						workOrder: {
							related: {"workOrder.tasklist":"mytasks"}
						}
					}
				},
				setDisplay: function(shouldDisplay){}
			};
			
			TestUtils.spy(eventContext.application, "setResourceQueryBase");
			TestUtils.stub(SynonymDomain, "resolveToDefaultExternal").returns("WAPPR");
			TestUtils.stub(CommonHandler, "_clearFilterForResource");
			TestUtils.stub(UserManager, "getInfo").returns("siteorg");
			
			woDetailHandler.initNewWorkOrderView(eventContext);
			
			assertThat(eventContext.application.setResourceQueryBase.called);
			assertThat(modelData.get("status"), "WAPPR");
			assertThat(modelData.get("siteid"), "siteorg");
			assertThat(modelData.get("orgid"), "siteorg");
			assertThat(newWorkOrderView.back, not(nil()));
			assertThat(newWorkOrderView.backContext, not(nil()));
			assertThat(woDetailHandler.originalWorkOrder, not(nil()));
			assertThat(woDetailHandler.originalQueryBaseIndex, not(nil()));
			
		},
		"resetMeters": function() {
				
				var woDetailHandler = new WODetailHandler();
				var workOrderData = [
		        			    {_id:0, json: {'wonum': '1150',	'description1': 'booger1'}},
		        			    {_id:1, json: {'wonum': '1151',	'description1': 'booger2'}}
		        			];
		
				var textMetaData = new ResourceMetadata({
					resourceName: "textData"
				}).setLocal(true).addField({
					name:  'wonum',
					dataType: 'string',
					length: 10
				}).addField({
					name:  'description',
					dataType: 'string',
					length: 5
				});							
				var sharedResource = new ModelDataSet(textMetaData, null, workOrderData);
				
				
				sharedResource.resourceID = 'workOrder';
				sharedResource.setCurrentIndex(0);
				application.addResource(sharedResource);
				
				var eventContext = {
						application: application,
						
						ui: {
							getViewFromId: function() {
								
							}
						}
				};
				
				
				TestUtils.spy(sharedResource, "setCurrentIndexByRecord");
				var metersListHandler = new MetersListHandler();
				var initializeMetersStub = TestUtils.stub(metersListHandler, "initializeMeters");
				eventContext.application['application.handlers.MetersListHandler'] = metersListHandler;
				
				woDetailHandler._resetMeters(eventContext, sharedResource, sharedResource.get(0));
				assertThat(metersListHandler.initializeMeters.calledOnce);
				assertThat(sharedResource.setCurrentIndexByRecord.calledOnce);
				
				WL.StaticAppProps.APP_ID = "Inspection";
				eventContext.application['application.com.Inspection.handlers.InspectionMetersListHandler'] = metersListHandler;
				initializeMetersStub.returns(TestUtils.createResolvedPromise());
				
				woDetailHandler._resetMeters(eventContext, sharedResource, sharedResource.get(0));
				assertThat(metersListHandler.initializeMeters.calledTwice);
				assertThat(sharedResource.setCurrentIndexByRecord.calledTwice);
			
		},
		"discardNewWorkOrderView": function() {
			var woDetailHandler = new WODetailHandler();
			var expectedQueryBase = "__created__";
			var expectedQueryBaseIndex = 0;
			var eventContext = {
					application: application,
					
					ui: {
						getViewFromId: function() {
							return {setQueryBaseIndexByQuery: function(queryBase) {
								assertThat(queryBase,expectedQueryBase, "setQueryBaseCalled with querybase index: " + expectedQueryBase);
								return TestUtils.createResolvedPromise();}};
						},
						hideCurrentView: function() {
							
						},
						getCurrentViewControl: function() {
							return {
								changeQueryBase: function(queryBase) {
									assertThat(queryBase, expectedQueryBaseIndex, "changeQueryBase resets querybase back to original" + expectedQueryBaseIndex);
									return TestUtils.createResolvedPromise();
								}
							};
						}
					}
			};
			var workOrderData = [
			        			    {_id:0, json: {'wonum': '1150',	'description1': 'booger1'}},
			        			    {_id:1, json: {'wonum': '1151',	'description1': 'booger2'}}
			        			];
			
			var textMetaData = new ResourceMetadata({
				resourceName: "textData"
			}).setLocal(true).addField({
				name:  'wonum',
				dataType: 'string',
				length: 10
			}).addField({
				name:  'description',
				dataType: 'string',
				length: 5
			});							
			var sharedResource = new ModelDataSet(textMetaData, null, workOrderData);
			
			
			sharedResource.resourceID = 'workOrder';
			sharedResource.setCurrentIndex(0);
					application.addResource(sharedResource);
			
			TestUtils.stub(CommonHandler,"_getAdditionalResource").returns(sharedResource);
			TestUtils.stub(woDetailHandler, "_resetMeters");
			
			//First call discard with an already created workorder, verify set back to created
			woDetailHandler.discardNewWorkOrderView(eventContext);
			
			//Next call discard with an new created workorder, verify set back to original querybase
			woDetailHandler.originalWorkOrder = sharedResource.get(0);
			woDetailHandler.originalQueryBaseIndex = 0;
			var newWO = sharedResource.createNewRecord();
			TestUtils.spy(newWO, "deleteLocal");
			woDetailHandler.discardNewWorkOrderView(eventContext);
			assertThat(woDetailHandler._resetMeters.called, truth(), "Meters should be reset");
			assertThat(newWO.deleteLocal.called, truth(), "local workorder should be deleted");
			
			//Now call with a follow up
			woDetailHandler.originalWorkOrder = sharedResource.get(0);
			woDetailHandler.originalQueryBaseIndex = 0;
			var newWO = sharedResource.createNewRecord();
			newWO.set("origrecordid", "origwo");
			TestUtils.spy(newWO, "deleteLocal");
			TestUtils.spy(eventContext.ui, "hideCurrentView");
			TestUtils.stub(woDetailHandler, "handleWOSpecResourceWhenGoingBack");
			woDetailHandler.discardNewWorkOrderView(eventContext);
			assertThat(woDetailHandler._resetMeters.calledTwice, truth(), "Meters should be reset");
			assertThat(newWO.deleteLocal.called, truth(), "local workorder should be deleted");
			assertThat(woDetailHandler.handleWOSpecResourceWhenGoingBack.called, truth(), "Reset wospec resource");
			assertThat(eventContext.ui.hideCurrentView.called, truth(), "hide the current view");
		},
		
		"commitNewWorkOrderView": function() {
			var woDetailHandler = new WODetailHandler();
			var expectedQueryBase = "__created__";
			var expectedQueryBaseIndex = 0;
			
			var workOrderData = [
			        			    {_id:0, json: {'wonum': '1150',	'description1': 'booger1'}},
			        			    {_id:1, json: {'wonum': '1151',	'description1': 'booger2'}}
			        			];
			
			var textMetaData = new ResourceMetadata({
				resourceName: "textData"
			}).setLocal(true).addField({
				name:  'wonum',
				dataType: 'string',
				length: 10
			}).addField({
				name:  'description',
				dataType: 'string',
				length: 5
			});							
			var sharedResource = new ModelDataSet(textMetaData, null, workOrderData);
			
			
			sharedResource.resourceID = 'workOrder';
			sharedResource.setCurrentIndex(0);
			application.addResource(sharedResource);
	
			var eventContext = {
					application: application,
					
					ui: {
						getViewFromId: function() {
							return {setQueryBaseIndexByQuery: function(queryBase) {
								assertThat(queryBase,expectedQueryBase, "setQueryBaseCalled with querybase index: " + expectedQueryBase);
								return TestUtils.createResolvedPromise();}};
						},
						hideCurrentView: function() {
							
						},
						getCurrentViewControl: function() {
							return {
								changeQueryBase: function(queryBase) {
									assertThat(queryBase, expectedQueryBaseIndex, "changeQueryBase resets querybase back to original" + expectedQueryBaseIndex);
									return TestUtils.createResolvedPromise();
								}, 
								validate: function() {
									return true;
								}
							};
						},
						showMessage: function() {
							
						}
					},
					getResource: function() {
						return sharedResource;
					}
			};		
					
			TestUtils.stub(CommonHandler,"_getAdditionalResource").returns(sharedResource);
			var modelServiceStub = TestUtils.stub(ModelService,"save");
			modelServiceStub.returns(TestUtils.createResolvedPromise());
			
			//Next call commit with an new created workorder, verify taken to newly created querybase
			woDetailHandler.originalWorkOrder = sharedResource.get(0);
			woDetailHandler.originalQueryBaseIndex = 0;
			sharedResource.createNewRecord();
			woDetailHandler.commitNewWorkOrderView(eventContext);
			assertThat(woDetailHandler.originalWorkOrder, nil(), "resets the originalWorkorder");
			
			//Now call with a follow up
			woDetailHandler.originalWorkOrder = sharedResource.get(0);
			woDetailHandler.originalQueryBaseIndex = 0;
			var newWO = sharedResource.createNewRecord();
			newWO.set("origrecordid", "origwo");
			
			TestUtils.spy(sharedResource, "setCurrentIndexByRecord");
			TestUtils.stub(woDetailHandler, "handleWOSpecResourceWhenGoingBack");
			TestUtils.spy(eventContext.ui, "hideCurrentView");
		
			woDetailHandler.commitNewWorkOrderView(eventContext);
			assertThat(eventContext.ui.hideCurrentView.called, truth(), "hide the current view");
			assertThat(woDetailHandler.handleWOSpecResourceWhenGoingBack.called, truth(), "reset wo spec");
			assertThat(sharedResource.setCurrentIndexByRecord.called, truth(), "set back current index");
			assertThat(woDetailHandler.originalWorkOrder, nil(), "resets the originalWorkorder");
			
			//Error case
			TestUtils.spy(eventContext.ui, "showMessage");
			modelServiceStub.returns(TestUtils.createRejectedPromise("error!"));
			woDetailHandler.commitNewWorkOrderView(eventContext);
			assertThat(eventContext.ui.showMessage.calledWith("error!"), truth(), "need to show error if model service errors");
		},
		
		"initFollowUpWorkOrderView": function() {
			var newWorkOrderView=
			{
					setFooterDisplay: function() {
				
					}
			};
			var woDetailHandler = new WODetailHandler();
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
			
			var multiAssetLocCIData = [{_id:0, json: {'asset':'assetnum'}}];
			
			var multiAssetLocCIMetaData = new ResourceMetadata({
				resourceName: "multiassetlocci"
			}).setLocal(true).addField({
				name:  'asset',
				dataType: 'string',
				length: 10
			}).addField({
				name:  'description',
				dataType: 'string',
				length: 5
			});
			
			var multiAssetLocCIList = new ModelDataSet(multiAssetLocCIMetaData, null, multiAssetLocCIData);
			
			ResourceMetadataContext.putResourceMetadata(multiAssetLocCIMetaData);
			
			multiAssetLocCIList.resourceID = 'multiassetlocci';
			application.addResource(multiAssetLocCIList);
			
			
			var localApplication =  {
					getResource: function(){ 
							return sharedResource;
						},
						setResourceQueryBase: function() {
							return TestUtils.createResolvedPromise();
						},
						getCurrentDateTime: function() {
							new Date();
						},
						hideBusy: function() {
							
						}
					};
			var eventContext = {
				application: localApplication,
				ui: {
					getCurrentViewControl: function() {
						return {queryBaseIndex: 0};
					},
					getViewFromId: function() {
						return newWorkOrderView;
					}, 
					show: function() {
						
					}
				},
				viewControl : {
					requiredResources: {
						workOrder: {
							related: {"workOrder.tasklist":"mytasks"}
						}
					}
				},
				setDisplay: function(shouldDisplay){}
			};
			
			var classSpecData =  [{'classstructureid' : 'strucid', 'siteid': 'null', 'orgid': 'null', },
				                  {'classstructureid' : 'strucid', 'siteid': 'null', 'orgid': 'EAGLENA', },
				                 ];
			
			var classSpecMetadata = new ResourceMetadata({resourceName: 'classSpec', additionalData: true}).
			setSingleton(false).
			setLocal(false).
			addField({name: 'orgid', dataType: 'string'}).
			addField({name: 'siteid', dataType: 'string'}).
			addField({name: 'classstructureid', dataType: 'string'});
			
			ResourceMetadataContext.putResourceMetadata(classSpecMetadata);
			var classSpecModelDataSet = new ModelDataSet(classSpecMetadata, 'getwodomain', classSpecData);
			
			//Stub out the specification population
			TestUtils.stub(WorkOrderObject, "updateSpecifications", function(followUp) {
				followUp['workOrderSpec'] = 
				{
						'data': [{ get: function() {return '';},
							set: function() {return '';}
						}],
				};
				woDetailHandler.originalWorkOrder['workOrderSpec'] = {
						find: function() {
							return [{ get: function() {return '';}}];
						}
				};
				return TestUtils.createResolvedPromise();
			});
			//Need to setup in the detailhandler
			woDetailHandler.application=localApplication;
			
			
			TestUtils.stub(SynonymDomain, "resolveToDefaultExternal").returns("WAPPR");
			TestUtils.stub(ModelService, "filtered").returns(TestUtils.createResolvedPromise(classSpecModelDataSet));
			TestUtils.stub(CommonHandler, "_clearFilterForResource");
			
			TestUtils.stub(sharedResource.getCurrentRecord(), "getModelDataSet").returns(TestUtils.createResolvedPromise(
					multiAssetLocCIList
			)
			);	
			
			TestUtils.spy(eventContext.ui, "show");
			woDetailHandler.initFollowUpWorkOrderView(eventContext);
			
			assertThat(sharedResource.getCurrentRecord().get("status"), "WAPPR");
			assertThat(sharedResource.getCurrentRecord().get("siteid"), nil());
			assertThat(sharedResource.getCurrentRecord().get("orgid"), nil());
			
			assertThat(woDetailHandler.originalWorkOrder, not(nil()));
			assertThat(eventContext.ui.show.calledWith("WorkExecution.FollowUpWorkOrderView"));
			sharedResource.getCurrentRecord().getModelDataSet("multiassetloclist").then(function (resultSet) {
				assertThat(resultSet.count(), 1, "should have copied 1 multiassetloc");
			});
			
			//Handle Inspection case
			WL.StaticAppProps.APP_ID = "Inspection";
			woDetailHandler.initFollowUpWorkOrderView(eventContext);
			assertThat(eventContext.ui.show.calledTwice);
		},
	});
});
