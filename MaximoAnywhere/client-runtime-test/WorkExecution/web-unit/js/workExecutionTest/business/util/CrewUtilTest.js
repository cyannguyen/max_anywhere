define(["require",
        "dojo/_base/lang",
        "platformTest/test/utils/TestUtils",
        "platform/util/PlatformConstants",
        "platform/ui/control/Application",
        'platform/store/ResourceMetadata',
        'application/business/util/CrewUtil',
        "application/handlers/CommonHandler",
        "platform/model/ModelDataSet",
], 
function(thisModule, lang, TestUtils, PlatformConstants, Application, ResourceMetadata, CrewUtil, CommonHandler, ModelDataSet) {
	
	
	var laborCrewMetadata = null;
	var laborCrewData = null;
	var laborCrewResource = null;
	
	var laborData = null;
	var laborMetadata = null;
	var laborResource = null;
	var application = new Application();
	
	TestUtils.register(thisModule, {
		
		beforeEach: function(){
			
			laborCrewData = [{'amcrew': 'CREW01', 'description': 'Crew #1', 'status': 'APPR'},
			                {'amcrew': 'CREW02', 'description': 'Crew #2', 'status': 'APPR'},
			                {'amcrew': 'CREW03', 'description': 'Crew #3', 'status': 'APPR'}];
			laborCrewMetadata = new ResourceMetadata({resourceName: 'amcrew', isSystem: true}).
			setSingleton(false).
			setLocal(false).
			addField({name: 'amcrew', dataType: 'string'}).
			addField({name: 'description', dataType: 'string'}).
			addField({name: 'status', dataType: 'string'});
			
			laborCrewResource = new ModelDataSet(laborCrewMetadata, null, laborCrewData);
			laborCrewResource.resourceID = "laborcrew";
			laborCrewResource.setCurrentIndex(0);
			
			
			var crewLaborMetadata = new ResourceMetadata({resourceName: 'crewlabor', isSystem: true}).
			setSingleton(false).
			setLocal(false).
			addField({name: 'amcrew', dataType: 'string'}).
			addField({name: 'laborcode', dataType: 'string'}).
			addField({name: 'effectivedate', dataType: 'datetime'}).
			addField({name: 'enddate', dataType: 'datetime'});
			
			var yesterday = new Date();
			yesterday.setDate(yesterday.getDate()-1);
			var tomorrow = new Date();
			tomorrow.setDate(tomorrow.getDate()+1);
			
			//Only crew 03 labor should be valid
			var crewLaborData1 = [
			                 {'amcrew': 'CREW01', 'laborcode': 'WILSON', 'effectivedate': tomorrow.toISOString(), 'enddate': tomorrow.toISOString()},
			                 {'amcrew': 'CREW01', 'laborcode': 'WILSON', 'effectivedate': yesterday.toISOString(), 'enddate': yesterday.toISOString()},
			                 {'amcrew': 'CREW01', 'laborcode': 'WILSON', 'effectivedate': tomorrow.toISOString(), 'enddate': null},
			                 ];
			
			var crewLaborResource1 = new ModelDataSet(crewLaborMetadata, null, crewLaborData1);
			crewLaborResource1.resourceID = "crewlabor";
			crewLaborResource1.setCurrentIndex(0);
			
			var crewLaborData2 = [
					                 {'amcrew': 'CREW02', 'laborcode': 'WILSON', 'effectivedate': tomorrow.toISOString(), 'enddate': tomorrow.toISOString()},
					                 {'amcrew': 'CREW02', 'laborcode': 'WILSON', 'effectivedate': yesterday.toISOString(), 'enddate': yesterday.toISOString()},
					                 {'amcrew': 'CREW02', 'laborcode': 'WILSON', 'effectivedate': tomorrow.toISOString(), 'enddate': null},
					                 {'amcrew': 'CREW02', 'laborcode': 'WRONGLABOR', 'effectivedate': yesterday.toISOString()},
					                 ];
					
			var crewLaborResource2 = new ModelDataSet(crewLaborMetadata, null, crewLaborData2);
			crewLaborResource2.resourceID = "crewlabor";
			crewLaborResource2.setCurrentIndex(0);
			
			var crewLaborData3 = [
			                 {'amcrew': 'CREW03', 'laborcode': 'WILSON', 'effectivedate': tomorrow.toISOString(), 'enddate': tomorrow.toISOString()},
			                 {'amcrew': 'CREW03', 'laborcode': 'WILSON', 'effectivedate': yesterday.toISOString(), 'enddate': yesterday.toISOString()},
			                 {'amcrew': 'CREW03', 'laborcode': 'WILSON', 'effectivedate': yesterday.toISOString()},
			                 ];
			
			var crewLaborResource3 = new ModelDataSet(crewLaborMetadata, null, crewLaborData3);
			crewLaborResource3.resourceID = "crewlabor";
			crewLaborResource3.setCurrentIndex(0);
			
			//Link the child resources to the current laborCrewResource method
			laborCrewResource.getRecordAt(0).crewlabor = crewLaborResource1;
			laborCrewResource.getRecordAt(1).crewlabor = crewLaborResource2;
			laborCrewResource.getRecordAt(2).crewlabor = crewLaborResource3;
			
			
			laborData = [{'laborcode': 'WILSON'},];
			laborMetadata = new ResourceMetadata({resourceName: 'mylabor', isSystem: true}).
			setSingleton(false).
			setLocal(false).
			addField({name: 'laborcode', dataType: 'string'});
			
			laborResource = new ModelDataSet(laborMetadata, null, laborData);
			laborResource.resourceID = "mylabor";
			laborResource.setCurrentIndex(0);
		},
		
		"getUserCrew": function() {
			var eventContext = {'application': application};
			var getAdditionalResourceStub = TestUtils.stub(CommonHandler, '_getAdditionalResource');
			getAdditionalResourceStub.withArgs(sinon.match.any,"mylabor").returns(laborResource);
			getAdditionalResourceStub.withArgs(sinon.match.any,"laborcrew").returns(laborCrewResource);
			var currentCrew = CrewUtil.getUserCrew(eventContext);
			assertThat(currentCrew.get('amcrew'), 'CREW03', "only crew 3 should be valid");
		},
		

		"getUserCrew chek if filter of crew labors was cleaned": function() {
			var eventContext = {'application': application};
			var getAdditionalResourceStub = TestUtils.stub(CommonHandler, '_getAdditionalResource');
			getAdditionalResourceStub.withArgs(sinon.match.any,"mylabor").returns(laborResource);
			getAdditionalResourceStub.withArgs(sinon.match.any,"laborcrew").returns(laborCrewResource);
			var currentCrew = CrewUtil.getUserCrew(eventContext);
			assertThat(currentCrew.getLoadedModelDataSetOrNull('crewlabor')._filtered, false, "all loabor that are member of the crew need to be returned");
		}
		
	});
});