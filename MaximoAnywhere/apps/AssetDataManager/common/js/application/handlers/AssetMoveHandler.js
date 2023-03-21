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

define("application/handlers/AssetMoveHandler",
	   [ "dojo/_base/declare",
	     "platform/handlers/_ApplicationHandlerBase",
	     "platform/util/PlatformConstants",
	     "application/handlers/CommonHandler",
	     "platform/model/ModelService",
	     "platform/translation/SynonymDomain",
	     "dojo/Deferred"
	     ],
	     
function(declare, ApplicationHandlerBase,PlatformConstants,CommonHandler, ModelService, SynonymDomain, Deferred ) {
	var moveLabel = null;
	
	return declare( [ApplicationHandlerBase], {

/**@memberOf application.handlers.AssetMoveHandler */
		cancel: function(eventContext){
			eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
			var localMoveResource = CommonHandler._getAdditionalResource(eventContext,"assetmoveresource").getCurrentRecord();
			localMoveResource.set("toBin",null);
			localMoveResource.set("newAsset",null);
			localMoveResource.set("toLocation",null);
			localMoveResource.set("toParent",null);
		},
		
		save: function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = assetSet.getCurrentRecord();
			var assetMoveSet = asset.getLoadedModelDataSetOrNull('assetmovedflt');
			var localMoveResource = CommonHandler._getAdditionalResource(eventContext,"assetmoveresource").getCurrentRecord();
			
			//IJ15676 - Get current location object to return the description
			var moveLocations = CommonHandler._getAdditionalResource(eventContext,'moveLocations').getCurrentRecord();
			asset.set("locationdesc", moveLocations.get("description"));

			var assetMove = assetMoveSet.createNewRecord();
			
			if(localMoveResource.get("toParent") && localMoveResource.get("toParent")!="")
				assetMove.set("dfltnewparent",localMoveResource.get("toParent"));
			
			if(localMoveResource.get("toSite") && localMoveResource.get("toSite")!="")
				assetMove.set("dfltnewsite",localMoveResource.get("toSite"));
		
			if(localMoveResource.get("toLocation") && localMoveResource.get("toLocation")!="")
				assetMove.set("dfltnewlocation",localMoveResource.get("toLocation"));
			
			if(localMoveResource.get("toBin") && localMoveResource.get("toBin")!="")
				assetMove.set("dfltnewbinnum",localMoveResource.get("toBin"));
			
			if(localMoveResource.get("newAsset") && localMoveResource.get("newAsset")!="")
				assetMove.set("dfltnewassetnum",localMoveResource.get("newAsset"));
			
			ModelService.save(assetSet).then(function(assetSet){
				eventContext.ui.hideCurrentView();
			});
		},
		
		setMoveResource: function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = assetSet.getCurrentRecord();
			var localMoveResource = CommonHandler._getAdditionalResource(eventContext,"assetmoveresource").getCurrentRecord();
						
			localMoveResource.set("parent",asset.get("parent"));
			localMoveResource.set("site",asset.get("siteid"));
			localMoveResource.set("location",asset.get("location"));
			
			localMoveResource.set("toSite",asset.get("siteid"));
			localMoveResource.set("toBin",null);
			localMoveResource.set("newAsset",null);
			localMoveResource.set("toLocation",null);
			localMoveResource.set("toParent",null);
			
			// Just when change site the new asset field is enable
			localMoveResource.getRuntimeFieldMetadata('newAsset').set('readonly', true);
			
			// Just storeroom location has bin
			localMoveResource.getRuntimeFieldMetadata('toBin').set('readonly', true);
			
			var view = eventContext.ui.getViewFromId("AssetDataManager.AssetMoveView");
			
			if(this.moveLabel == null)
				this.moveLabel = view.label.textMsg;
				
			view.label=this.moveLabel + " - " + asset.get("assetnum");
		},
				
		setParent: function(eventContext){
			var localMoveResource = eventContext.getCurrentRecord();
			
			var view = eventContext.ui.getViewFromId("AssetDataManager.AssetMoveView");
			if(localMoveResource.getPendingOrOriginalValue("toParent") && localMoveResource.getPendingOrOriginalValue("toParent")!="" && localMoveResource.getPendingOrOriginalValue("toParent")!=null) {
				localMoveResource.set("toBin",null);
				localMoveResource.set("newAsset",null);
				localMoveResource.set("toLocation",null);
				view.footerButtons[1].setEnabled(true);	
			}else
				view.footerButtons[1].setEnabled(false);	
		},
		
		setLocation: function(eventContext){
			var localMoveResource = eventContext.getCurrentRecord();
			
			var view = eventContext.ui.getViewFromId("AssetDataManager.AssetMoveView");
			
			if(localMoveResource.getPendingOrOriginalValue("toLocation") && localMoveResource.getPendingOrOriginalValue("toLocation")!="" && localMoveResource.getPendingOrOriginalValue("toLocation")!=null) {
				localMoveResource.set("toBin",null);
				localMoveResource.set("newAsset",null);
				localMoveResource.set("toParent",null);
				view.footerButtons[1].setEnabled(true);	
			}else
				view.footerButtons[1].setEnabled(false);
			
			var domainLocationType = CommonHandler._getAdditionalResource(eventContext,"domainLocationType");
			var storeroom = SynonymDomain.resolveToDefaultExternal(domainLocationType, 'STOREROOM');

			var location = localMoveResource.getPendingOrOriginalValue("toLocation");
			if(localMoveResource.getPendingOrOriginalValue("locationtype") == storeroom && location!="" && location!=null) {
				var siteId = localMoveResource.getPendingOrOriginalValue("toSite");
				eventContext.application.showBusy();
				this.getBinNum(siteId,location,eventContext,localMoveResource);
				localMoveResource.getRuntimeFieldMetadata('toBin').set('readonly', false);
			} else {
				localMoveResource.getRuntimeFieldMetadata('toBin').set('readonly', true);
				localMoveResource.set("toBin",null);
			}
		},
		
		setSite: function(eventContext){
			var localMoveResource = eventContext.getCurrentRecord();
						
			if(localMoveResource.getPendingOrOriginalValue("toSite") && localMoveResource.getPendingOrOriginalValue("toSite")!="" && localMoveResource.getPendingOrOriginalValue("toSite")!=null) {
				localMoveResource.set("toLocation",null);
				localMoveResource.set("toParent",null);
				localMoveResource.set("toBin",null);
				localMoveResource.getRuntimeFieldMetadata('toParent').set('readonly', false);
				localMoveResource.getRuntimeFieldMetadata('toLocation').set('readonly', false);
				
				// if change site new asset field is enable
				var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
				var asset = assetSet.getCurrentRecord();
				var view = eventContext.ui.getViewFromId("AssetDataManager.AssetMoveView");
				
				if(asset.get("siteid")!=localMoveResource.getPendingOrOriginalValue("toSite")){
					localMoveResource.getRuntimeFieldMetadata('newAsset').set('readonly', false);
					view.footerButtons[1].setEnabled(true);	
				}else{
					localMoveResource.getRuntimeFieldMetadata('newAsset').set('readonly', true);
					view.footerButtons[1].setEnabled(false);	
				}
			}else {
				// Parent and location should just be visible is there is a Site set
				localMoveResource.getRuntimeFieldMetadata('toParent').set('readonly', true);
				localMoveResource.getRuntimeFieldMetadata('toLocation').set('readonly', true);
				localMoveResource.set("toLocation",null);
				localMoveResource.set("toParent",null);
			}	
		},
			
		setBin: function(eventContext){
			var localMoveResource = eventContext.getCurrentRecord();
			if(localMoveResource.getPendingOrOriginalValue("toBin") && localMoveResource.getPendingOrOriginalValue("toBin")!="" && localMoveResource.getPendingOrOriginalValue("toBin")!=null) {
				localMoveResource.set("newAsset",null);
				localMoveResource.set("toParent",null);
			}
		},
		
		hasBin: function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset"); //assetmoveresource
			var asset = assetSet.getCurrentRecord();

			// if is not a rotating Asset should not display Bin 
			if(!asset.get("itemnum"))
				eventContext.setDisplay(false);
			else
				eventContext.setDisplay(true);
		},
		
		showNewAsset: function(eventContext){
			var localMoveResource = eventContext.getCurrentRecord();
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = assetSet.getCurrentRecord();
			if(asset.get("siteid")!=localMoveResource.getPendingOrOriginalValue("toSite"))
				eventContext.setDisplay(true);
			else
				eventContext.setDisplay(false);
		},
		
		filterLocationForLookup: function(eventContext){
			var localMoveResource = CommonHandler._getAdditionalResource(eventContext,"assetmoveresource").getCurrentRecord();
			var moveLocations = CommonHandler._getAdditionalResource(eventContext,'moveLocations');
			
			var siteid = localMoveResource.get("toSite");
			var filter = [];
			filter.push({siteid: siteid});
			moveLocations.lookupFilter = filter;
		},
		
		filterParentForLookup: function(eventContext){
			var localMoveResource = CommonHandler._getAdditionalResource(eventContext,"assetmoveresource").getCurrentRecord();
			var moveParent = CommonHandler._getAdditionalResource(eventContext,'moveParent');
						
			var siteid = localMoveResource.get("toSite");
			var filter = [];
			filter.push({siteid: siteid});
			moveParent.lookupFilter = filter;
		},
		
		disableSave: function(eventContext){
			var view = eventContext.ui.getViewFromId("AssetDataManager.AssetMoveView");
			view.footerButtons[1].setEnabled(false);		
		},
		
		showMove : function(eventContext){
			eventContext.application.getResource("asset").getCurrentRecord();
			eventContext.ui.show('AssetDataManager.AssetMoveView');
		},
		
		hasMove: function(eventContext){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = assetSet.getCurrentRecord();

			// if is not a rotating Asset should not display Bin 
			if(asset.get("binnum"))
				eventContext.setDisplay(false);
			else
				eventContext.setDisplay(true);
		},
		
		getBinNum: function(siteId,location,eventContext,localMoveResource){
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = assetSet.getCurrentRecord();
			
			var inventory_filter = {};
			inventory_filter["siteid"] = siteId;
			inventory_filter["location"] = location;
			inventory_filter["itemsetid"] = asset.get("itemsetid") ;
			inventory_filter["itemnum"] = asset.get("itemnum") ;
			
			ModelService.filtered('inventory', PlatformConstants.SEARCH_RESULT_QUERYBASE, inventory_filter, 1000, null, null, null).then(function(inventorySet){
				var binnum = null;
				if(inventorySet) {
					var inventory = inventorySet.data[0];
					if (inventory) 
						binnum = inventory.get("binnum");
				}		
				
				localMoveResource.set("toBin",binnum);
				eventContext.application.hideBusy();
			});
			

		},
		
		
	});
});
