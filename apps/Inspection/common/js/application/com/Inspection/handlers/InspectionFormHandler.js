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

define("application/com/Inspection/handlers/InspectionFormHandler", 
	   [ "dojo/_base/array",
	     "dojo/_base/declare",
	     "dojo/_base/lang",
	     "dojo/Deferred",
	     "dojo/promise/all",
	     "dojo/on",
	     "dojo/touch",
	     "platform/handlers/_ApplicationHandlerBase",
	     "platform/model/ModelService",
	     "platform/translation/MessageService",
	     "platform/ui/control/Text",
		 "platform/logging/Logger",
	     "platform/ui/control/ComboBox",
	     "application/business/FieldUtil",
	     "application/handlers/CommonHandler",
	     "platform/translation/SynonymDomain",
	     "application/handlers/ClassificationFormHandler"
	     ],
function(arrayUtil, declare, lang, Deferred, all, on, touch, ApplicationHandlerBase, ModelService, MessageService, Text, Logger, ComboBox, fieldUtil, CommonHandler, SynonymDomain, ClassificationFormHandler) {
	
	CONTROL_STYLE = 'display: inline; width:75% !important; padding: 2px 10px 2px 10px !important';
	COMBOBOX_MAX_LENGTH = 4;
	var count = 0;
	
	return declare([ApplicationHandlerBase,ClassificationFormHandler], {
				
/**@memberOf application.com.Inspection.handlers.InspectionFormHandler */
		renderWODetails: function(eventContext) {
			Logger.trace('InspectionFormHandler.renderWODetails');
			var workOrder = eventContext.getCurrentRecord();
			fieldUtil.initCompositeField("wonum", "description", "wonumanddescription", workOrder);
			workOrder.watch("description", function(){
				fieldUtil.initCompositeField("wonum", "description", "wonumanddescription", workOrder);
			});	
		},
		
		renderServiceAddress: function(eventContext) {
			Logger.trace('InspectionFormHandler.renderServiceAddress()');
			var currWO = eventContext.getCurrentRecord();
			if (!currWO.get("woserviceaddress")) {
				eventContext.setDisplay(false);
			}
		},
	
//TODO remove this code 		
/*
  This code has been moved over to the SpecificationMixin class, will be removed
   
		renderForm: function(eventContext) {
			Logger.trace('InspectionFormHandler.renderForm()');
			this.count = 0;
			var self = this;
			var assetAttrTypes = CommonHandler._getAdditionalResource(eventContext, "assetattrtypes");
			var alnType = SynonymDomain.resolveToDefaultExternal(assetAttrTypes, "ALN");
			var numericType = SynonymDomain.resolveToDefaultExternal(assetAttrTypes, "NUMERIC");
			
			var woSet = eventContext.application.getResource('workOrder');
			var wo = woSet.getCurrentRecord();									
			wo.getModelDataSet("workOrderSpec", true).then(function(woSpecSet)
			{			
				woSpecSet.filter("datatype == $1 || datatype == $2", alnType, numericType);
				eventContext.refresh(); // refresh list control to get new record count
				var list = eventContext.listWidget;
				list.destroyDescendants();
				this.count = woSpecSet.count();
				if(this.count > 0) {
					eventContext.setDisplay(true);
					ModelService.all('maxdomain', 'getmaxdomain')
					.then(function(maxdomains) {
						woSpecSet.setCurrentIndex(0);
						var woSpec = woSpecSet.getRecordAt(0);
						var deferredList = new Array();
						while(woSpec) {
							var controlPromise = null;						
							if(woSpec.domainid) {
								maxdomains.clearFilterAndSort();
								var maxdomain = maxdomains.filter('domainid == $1', woSpec.domainid).getCurrentRecord();
								controlPromise = self._buildDomainBasedControl(eventContext, woSpec, maxdomain, list);
							}
							else {
							controlPromise = self._buildTextBoxControl(eventContext, woSpec, list);
							}
							controlPromise.then(lang.hitch(self, function(inputControl) {
								var deferred = new Deferred();
								deferredList.push(deferred.promise);
								on(inputControl, touch.press, function(e) {
									e.stopPropagation();
								});						
								inputControl.application = self.application;
								inputControl.ui = self.application.ui;
								inputControl.resourceObject = woSpecSet;
								inputControl.setMyResourceObject(woSpecSet);
								inputControl.onList = true;
								list.addChild(inputControl.build());
								deferred.resolve();
							}));
							woSpec = woSpecSet.next();
						}
						all(deferredList)
						.then(function() {
							list.control.countLabel.setLabel(this.count);
							list.startup();
							if(eventContext.defaultcollapsed) {
								eventContext.collapse();
							}
						});
					});
				}
			});
		},
	
*/		
	});
	
});
