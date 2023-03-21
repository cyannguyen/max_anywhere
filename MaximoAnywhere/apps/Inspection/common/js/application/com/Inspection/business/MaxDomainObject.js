/*
 * Licensed Materials - Property of IBM
 * "Restricted Materials of IBM"
 *
 * 5725-M39
 *
 * (C) COPYRIGHT IBM CORP. 2015,2020 All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with
 * IBM Corp. 
 *
 */

define("application/com/Inspection/business/MaxDomainObject", 
		[], 
function()
		 {
	return {
		
/**@memberOf application.com.Inspection.business.MaxDomainObject */
		onInitialize : function(/* ALN or NUMERIC */ domain) {
			/* TODO patch
			 * We need to know why complex resources of a system resource 
			 * doesn't get the same 'status' (isSystem = true) from his parent.
			 * This is to avoid problems in:
			 * platform.ui.control.List.checkForErrors()
			 */
			var domainSet = domain.getOwner();
			var domainMeta = domainSet.getMetadata();
			var maxDomainSet = domain.getParent().getOwner();
			var maxDomainMeta = maxDomainSet.getMetadata();
			if(domainSet.isSystem != maxDomainSet.isSystem) {
				domainSet.isSystem = maxDomainSet.isSystem;
			}
			if(domainMeta.isSystem != maxDomainMeta.isSystem) {
				domainMeta.isSystem = maxDomainMeta.isSystem;
			}
		}
	};
});
