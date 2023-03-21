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

define("application/business/PlannedServiceObject", 
		["application/business/FieldUtil"], function(fieldUtil) {
	return {
/**@memberOf application.business.PlannedServiceObject */
		onInitialize : function(plannedService) {
			fieldUtil.initCompositeField("service", "servicedesc", "serviceanddescription", plannedService);
		},
		onAdd: function(plannedService) {
			
		},
		beforeSave : function(plannedService) {
			
		}
	}
});
