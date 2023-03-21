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

define("application/handlers/MetersListHandler", 
	   [ "dojo/_base/declare",
	     "dojo/_base/array",
	     "dojo/_base/lang",
	     "platform/handlers/_ApplicationHandlerBase",
	     "platform/util/PlatformConstants",
	     "platform/model/ModelService",
	     "application/handlers/CommonHandler",
	     "dojo/promise/all",
		  "platform/translation/MessageService",
		  "platform/logging/Logger",
		  "dojo/Deferred",
		  "platform/store/_ResourceMetadataContext",
		  "platform/comm/CommunicationManager"
	     ],
function(declare, arrayUtil, lang, ApplicationHandlerBase, PlatformConstants, ModelService, CommonHandler, all, MessageService, Logger, Deferred, ResourceMetaData, CommunicationManager) {	
	return declare( [ApplicationHandlerBase], {	
		
/**@memberOf application.handlers.MetersListHandler */
		showHeader: function(eventContext){
			eventContext.doShowHeader();
		}
	});		
	
});
