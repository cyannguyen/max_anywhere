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

define("application/handlers/CommonHandler", [], function() {
		return {
		
		//Reusable method: Clear filter for a specific resource
/**@memberOf application.handlers.CommonHandler */
		_clearFilterForResource : function(self, resource) {
			if(resource.isFiltered()) {
				resource.clearFilterAndSort();
			}
		},
		//Reusable method: Get SiteId of the current Work Order
		_getWorkorderSiteId : function(self) {
			return this._getAdditionalResource(self, 'workOrder').getCurrentRecord().get('siteid');
		},
		//Reusable method: Returns a reference to a specific resource
		_getAdditionalResource : function(self ,resourceName) {
			return self.application.getResource(resourceName);
		},
		//Reusable method: Get OrgId of the current Work Order
		_getWorkorderOrgId : function(self) {
			return this._getAdditionalResource(self, 'workOrder').getCurrentRecord().get('orgid');
		},
	};
});
