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

define("application/business/AssetSpecificationObject", 
		["platform/auth/UserManager",
	     "platform/translation/SynonymDomain",
	     "platform/exception/PlatformRuntimeException",
		 "application/business/FieldUtil"], 
function(UserManager, SynonymDomain, PlatformRuntimeException, FieldUtil)
		 {
	return {
/**@memberOf application.business.AssetSpecificationObject */
		setDefaultValues : function(assetSpec) {
			assetSpec.set('orgid', UserManager.getInfo("deforg"));
			assetSpec.set("section","");
			var asset = assetSpec.getParent();
			var islinear = asset.get("islinear");
			if(islinear){
				//TODO:  need to set linearassetspecid to the assetspecid
			}else{
				assetSpec.set("linearassetspecid",0);
			}
		},
		
		onInitialize : function(assetSpec, attrtypes) {

		},

		onAdd: function(assetSpec) {

		},
		
		beforeSave : function(assetSpec, attrtypes) {

		},
		
		isNumeric: function(val) {
			return ((!isNaN(parseFloat(val)) && isFinite(val)) || (val == null));
		},
		
	};
});
