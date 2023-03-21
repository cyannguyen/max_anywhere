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

define("application/com/Inspection/handlers/InLineListHandler", 
	   [ "dojo/_base/array",
	     "dojo/_base/declare",
	     "dojo/_base/lang",
	     "dojo/fx",
	     "platform/handlers/_ApplicationHandlerBase",
	     "platform/logging/Logger"],
function(arrayUtil, declare, lang, fx, ApplicationHandlerBase, Logger) {
	
	/* This class is not used anymore, just kept for reference, 
	 * platform.ui.control.List enhanced the following properties:
	 * .collapsible
	 * .defaultcollaped
	 * .hideEmpty
	 */
	return declare([ApplicationHandlerBase], {
		
		eventByPass: [],
		statefulLists: {},
		
/**@memberOf application.com.Inspection.handlers.InLineListHandler */
		show: function(eventContext) {
			var self = this;
			if(eventContext.resourceObject.data.length < 1) {
				eventContext.listWidget.control.setDisplay(false);
			}
			else {
				var state = self.statefulLists[eventContext.id];
				if(!state) {
					self.statefulLists[eventContext.id] = self.wipeIn;
				}
				self.statefulLists[eventContext.id].call(self, eventContext.listWidget);
			}
		},
		
		showUseCurrentParent: function(eventContext) {
			var self = this;
			var parentResource = eventContext.parentControl.resourceObject.getCurrentRecord();
			var currentResource = parentResource[eventContext.attribute];
			if(currentResource.count() < 1) {
				eventContext.listWidget.control.setDisplay(false);
			}
			else {
				var state = self.statefulLists[eventContext.id];
				if(!state) {
					self.statefulLists[eventContext.id] = self.wipeIn;
				}
				self.statefulLists[eventContext.id].call(self, eventContext.listWidget);
			}
		},
		
		
		toggleList: function(eventContext) {
			Logger.trace('InLineListHandler.toggleList');
			
			var list = eventContext.listWidget;
			list.control.doShowHeader();

			// by pass event just in case it comes from <listItemTemplate>
			if(this.eventByPass.pop(eventContext.id)) {
				list.control.doShowHeader();
				return;
			}
			
			var wipeFunc = this.statefulLists[eventContext.id];
			
			if (!list.focused){
				if (list.control.nextPrevButtonSkip){
					list.control.nextPrevButtonSkip = false;
				} else {
					if( wipeFunc == this.wipeIn) {
						this.wipeOut(list);
					}
					else {
						this.wipeIn(list);
					}
				}
			}
		},
		
		wipeIn: function(list) {
			list.control.doShowHeader();
			var self = this;
			var children = list.getChildren();
			arrayUtil.forEach(children, function(child) {
				fx.wipeIn({node: child.containerNode}).play();
			});
			self.statefulLists[list.control.id] = this.wipeIn;
		},
		
		wipeOut: function(list) {
			var self = this;
			var children = list.getChildren();
			arrayUtil.forEach(children, function(child) {
				fx.wipeOut({node: child.containerNode}).play();	
			});
			self.statefulLists[list.control.id] = this.wipeOut;
		},
		
		toggleListTurnOff: function(eventContext) {
			// always attach this method to event 'click' of <listItemTemplate>
			this.eventByPass.push(eventContext.parentControl.id);
		}
	});
});
