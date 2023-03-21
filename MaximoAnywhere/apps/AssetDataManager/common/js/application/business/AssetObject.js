/*
 * Licensed Materials - Property of IBM
 * "Restricted Materials of IBM"
 *
 * 5725-M39
 *
 * (C) COPYRIGHT IBM CORP. 2013,2020 All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with
 * IBM Corp. 
 *
 */

define("application/business/AssetObject", 
["application/business/FieldUtil",
 "platform/model/ModelService",
 "dojo/_base/array",
 "application/business/AssetStatusHandler",
 "platform/exception/PlatformRuntimeException",
 "platform/util/DateTimeUtil",
 "platform/logging/Logger",
 "platform/auth/UserManager",
 "dojo/Deferred",
 "platform/util/CurrentTimeProvider",
 "platform/store/_ResourceMetadataContext",
 "platform/warning/PlatformRuntimeWarning",], 
 function(fieldUtil, ModelService, array, AssetStatusHandler, PlatformRuntimeException, DateTimeUtil, Logger, UserManager, Deferred, CurrentTimeProvider, ResourceMetaData, PlatformRuntimeWarning) {	
	return {
/**@memberOf application.business.AssetObject */
		onInitialize : function(asset) {
			if(asset.get('maxlocationdesc')){
				asset.set("locationdesc", asset.get('maxlocationdesc'));
			}
			if(asset.get('maxparentdesc')){
				asset.set("parentdesc", asset.get('maxparentdesc'));
			}
			fieldUtil.initCompositeField("parent", "parentdesc", "parentanddescription", asset);
			fieldUtil.initCompositeField("location", "locationdesc", "locationanddescription", asset);	

			asset.set("statusdesc", AssetStatusHandler.getInstance().toDescription(asset.get("status")));

			asset.watch("status", function(){
				this.set("statusdesc", AssetStatusHandler.getInstance().toDescription(this.get("status")));
			});		

			asset.watch("updownstatusdate", function(){
				var classInstance = this.getOwner()._resourceClassInstance();
				if (classInstance && classInstance["setDowntimeDisplays"]){
						classInstance.setDowntimeDisplays(this);
				}
			});		
			this.setDowntimeDisplays(asset);
		},
		onAdd : function(asset) {
			asset.set('displayisrunning', true);
			asset.set('displaytotaldowntime', 0);
		},
		beforeSave : function(asset) {
		},

		setDowntimeDisplays: function(asset){
			var updownDate = asset.get('updownstatusdate');
			var displayDate = asset.get('displayupdownstatusdate');
			if(updownDate && (!displayDate || DateTimeUtil.zeroSecondsAndMilliseconds(updownDate) > DateTimeUtil.zeroSecondsAndMilliseconds(displayDate))){
				asset.set('displayupdownstatusdate', updownDate);
				asset.set('displaytotaldowntime', asset.get('totdowntime'));
				asset.set('displayisrunning', asset.get('isrunning'));
				asset.setNullValue('displaydowntimecode');
			}
			else if (!displayDate){
				asset.set('displayisrunning', asset.get('isrunning'));
				asset.set('displaytotaldowntime', 0);
			}
		},
		
		changeStatus: function(asset, newStatus, rolltoallchildren, removefromactiveroutes, removefromactivesp, changepmstatus){
			Logger.trace("[AssetObject] changeStatus ");
			var currentStatus = asset.get("status");
			if(AssetStatusHandler.getInstance().canPerformTransition(currentStatus, newStatus)){
				asset.openPriorityChangeTransaction();
				asset.set("status", newStatus);
				if (rolltoallchildren){
					asset.set("rolltoallchildren", rolltoallchildren);
				}
				if(removefromactiveroutes){
					asset.set("removefromactiveroutes", removefromactiveroutes);
				}
				if (removefromactivesp){
					asset.set("removefromactivesp", removefromactivesp);
				}
				if(changepmstatus){
					asset.set("changepmstatus", changepmstatus);
				}
				asset.closePriorityChangeTransaction();
			}
			else{			
				Logger.trace("[AssetObject] changeStatus status can not be changed");
				 throw new PlatformRuntimeException('invalidstatustransition',[currentStatus, newStatus]);
			}
			Logger.trace("[AssetObject] changeStatus status changed");
		},
				
		afterPatch : function(asset){
		},
		
		updateSpecifications: function(asset){
			var updateDeferred = new Deferred();
			var classstructureid = asset.get('classstructureid');
			var islinear = asset.get("islinear");
			var defsite = UserManager.getInfo("defsite");
			var deforg = UserManager.getInfo("deforg");
			if (classstructureid != null) {						
				asset.getModelDataSet("assetSpec", true).
				    then(function(assetSpecs){
				    	assetSpecs.deleteLocalAll();
						filter = {'classstructureid' : classstructureid};
						var classspecPromise = ModelService.filtered('classSpec', null, filter, 1000, false, true);
						classspecPromise.then(function(classspecSet){						
							array.forEach(classspecSet.data, function(classspecSetRecord){
								if((classspecSetRecord.siteid == null || classspecSetRecord.siteid == defsite) &&
										(classspecSetRecord.orgid == null || classspecSetRecord.orgid == deforg)){
									var newspec = assetSpecs.createNewRecord();
									newspec.set('classspec', classspecSetRecord.get('classspecid'));
									newspec.set('domainid', classspecSetRecord.get('domainid'));
									newspec.set('assetattrid', classspecSetRecord.get('assetattrid'));
									newspec.set('description', classspecSetRecord.get('assetdescription'));
									var sectionval = (classspecSetRecord.get('section') == null) ? '' : classspecSetRecord.get('section');
									newspec.set('section', sectionval);
									newspec.set('datatype', classspecSetRecord.get('datatype'));
									newspec.set('displaysequence', classspecSetRecord.get('sequence'));
									newspec.set('orgid', classspecSetRecord.get('orgid'));
									newspec.set('classstructureid', classspecSetRecord.classstructureid);
									newspec.set('mandatory', classspecSetRecord.get('mandatory'));
									newspec.set('measureunitid', classspecSetRecord.get('measureunitid'));
									newspec.set('refobjectname', 'ASSET');
									if(islinear){
										//TODO:  need to set linearassetspecid to the assetspecid
									}else{
										newspec.set("linearassetspecid",0);
									}
								}
							});
							// set to beginning of list for paging							
							if (assetSpecs.count() > 0) {
								assetSpecs.setCurrentIndex(0);
							}
							updateDeferred.resolve(false);
						});				    	
				    }).
				    otherwise(function(error){
				    	Logger.trace("[AssetObject] updateSpecifications error" + error.error.getMessage());
				    	switch (true) {				
						case (error.error instanceof PlatformRuntimeException):						
							self.application.showMessage(error.error.getMessage());
							break;				
						}
				    	updateDeferred.reject(error);
			    });			
			} else {
				updateDeferred.resolve(false);
			}
			return updateDeferred.promise;
		},
		
		refreshClassDescription : function(asset) {			
			var refreshDeferred = new Deferred();
			var classstructureid = asset.get('classstructureid');
			if (classstructureid != null) {		
				var filter = {'classstructureid': classstructureid};
				ModelService.filtered('classstructure', null, filter, 10, false, true).then(function(dataSet) {
					if (dataSet.count() > 0) {
						var classRec = dataSet.getRecordAt(0);
						asset.set('classificationdesc', classRec.get('description'));	
						asset.set('classificationpath', classRec.get('hierarchypath'));
					} else {
						asset.set('classificationdesc', asset.get('classstructureid'));	
						asset.set('classificationpath', asset.get('classstructureid'));
					}					
					refreshDeferred.resolve(dataSet);
				}).otherwise(function(e){
					refreshDeferred.reject(new PlatformRuntimeWarning('error fetching classstructure info'));
				});
			}
			else {
				asset.set('classificationdesc', null);
				asset.set('classificationpath', null);
				refreshDeferred.resolve(false);
			}
			return refreshDeferred.promise;
		},
	};
	
});
