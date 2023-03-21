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

define("application/business/AssetStatusObject", 
		[], function() {
	return {
/**@memberOf application.business.AssetStatusObject */
		onInitialize : function(statusChange) {

			statusChange.watch("maxvalue", function(fieldName, oldValue, newValue){
				if (newValue){
					var decommissioned = (newValue == 'DECOMMISSIONED');
					if (decommissioned){
						this.set("rolltoallchildren", true);
					}
					else{
						if (this.getRuntimeFieldMetadata('rolltoallchildren').get('readonly')){
							this.set("rolltoallchildren", false);
						}
						this.set("removefromactiveroutes", false);
						this.set("removefromactivesp", false);
						this.set("changepmstatus", false);
					}
					this.getRuntimeFieldMetadata('rolltoallchildren').set('readonly', decommissioned);
					this.getRuntimeFieldMetadata('removefromactiveroutes').set('readonly', !decommissioned);
					this.getRuntimeFieldMetadata('removefromactivesp').set('readonly', !decommissioned);
					this.getRuntimeFieldMetadata('changepmstatus').set('readonly', !decommissioned);
				}
				else{
					statusChange.set("rolltoallchildren", false);
					statusChange.set("removefromactiveroutes", false);
					statusChange.set("removefromactivesp", false);
					statusChange.set("changepmstatus", false);
					statusChange.getRuntimeFieldMetadata('rolltoallchildren').set('readonly', false);
					statusChange.getRuntimeFieldMetadata('removefromactiveroutes').set('readonly', false);
					statusChange.getRuntimeFieldMetadata('removefromactivesp').set('readonly', false);
					statusChange.getRuntimeFieldMetadata('changepmstatus').set('readonly', false);
				}
			});		

		}
	};
});
