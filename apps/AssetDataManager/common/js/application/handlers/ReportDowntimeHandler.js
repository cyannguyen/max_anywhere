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

define("application/handlers/ReportDowntimeHandler", 
	   [ "dojo/_base/declare",
	     "platform/handlers/_ApplicationHandlerBase",
	     "application/handlers/CommonHandler",
	     "platform/model/ModelService",
	     "platform/util/DateTimeUtil",
	     "platform/exception/PlatformRuntimeException",
	     "platform/util/PlatformConstants",
	     "platform/warning/PlatformRuntimeWarning",
		  "platform/translation/MessageService",
		  "platform/logging/Logger",
		  "platform/util/AsyncAwareMixin",
		  "dojo/Deferred",
		  "dojo/_base/array"
	     ],
function(declare, ApplicationHandlerBase, CommonHandler, ModelService, DateTimeUtil, PlatformRuntimeException, PlatformConstants, PlatformRuntimeWarning, MessageService, Logger, AsyncAwareMixin, Deferred, arrayUtil ) {
	return declare( [ApplicationHandlerBase, AsyncAwareMixin], {
		
		/*
		 */
		//Initialize ReportDowntime view
/**@memberOf application.handlers.ReportDowntimeHandler */
		initReportDowntimeView: function(eventContext){
			this._defaultValues(true);
		},

		_defaultValues: function(isStatusChange){
			var asset = CommonHandler._getAdditionalResource(this,"asset").getCurrentRecord();			
			var downtimeReport =  CommonHandler._getAdditionalResource(this,"asset.downtimereport").getRecordAt(0);
			var tempDowntimeResource = CommonHandler._getAdditionalResource(this,"tempReportDowntimeResource").getCurrentRecord();
			var assetUp = asset.get('displayisrunning');
			
			tempDowntimeResource.set('ischangestatus', isStatusChange);
			if (!isStatusChange || assetUp){
				tempDowntimeResource.setDateValue("startdate", this.application.getCurrentDateTime());
			}
			else{
				tempDowntimeResource.set('startdate',  asset.get('displayupdownstatusdate')); //Set this to workorder updownstatusdate
			}
			if (isStatusChange && assetUp){
				tempDowntimeResource.setNullValue('enddate');
			}
			else{
				tempDowntimeResource.setDateValue("enddate", this.application.getCurrentDateTime());
			}
			var displaydowntimecode = asset.get('displaydowntimecode');
			if (isStatusChange && !assetUp && (downtimeReport || displaydowntimecode)){
				tempDowntimeResource.set('downtimecode', (displaydowntimecode?displaydowntimecode:downtimeReport.get('statuschangecode')));
			}
			else{
				tempDowntimeResource.setNullValue('downtimecode');
			}
			var enddatemetadata = tempDowntimeResource.getRuntimeFieldMetadata('enddate');
			var startdatemetadata = tempDowntimeResource.getRuntimeFieldMetadata('startdate');
			startdatemetadata.set('readonly', isStatusChange && !assetUp); //if doing a status change and the asset is not up then start date is readonly				
			startdatemetadata.set('required', !isStatusChange || assetUp);				
			enddatemetadata.set('readonly', isStatusChange && assetUp); //if doing a status change and the asset is up then end date is readonly
			enddatemetadata.set('required', !isStatusChange || !assetUp);				
		},
		
		updateDefaults: function(eventContext){
			var newValue = !!eventContext.checkBoxWidget.get('value');
			this._defaultValues(newValue);

		},
		
		handleBackButtonClick: function(eventContext){
			var tempDowntimeResource = CommonHandler._getAdditionalResource(this,"tempReportDowntimeResource").getCurrentRecord();
			tempDowntimeResource.setNullValue('ischangestatus');
			tempDowntimeResource.setNullValue('startdate');
			tempDowntimeResource.setNullValue('enddate');
			tempDowntimeResource.setNullValue('downtimecode');
		},
		
		cancelDowntime: function(eventContext){
			eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
		},
		
		saveDowntime: function(eventContext){
			if(!eventContext.viewControl.validate()){
				return;
			}
			var assetSet = CommonHandler._getAdditionalResource(eventContext,"asset");
			var asset = assetSet.getCurrentRecord();			
			var downtimeReportSet =  CommonHandler._getAdditionalResource(eventContext,"asset.downtimereport");
			var tempDowntimeResource = CommonHandler._getAdditionalResource(eventContext,"tempReportDowntimeResource").getCurrentRecord();
			var assetUp = asset.get('displayisrunning');
			
			var isChangeStatus = tempDowntimeResource.get('ischangestatus');

			downtimeReportSet.data.splice(0, 1); //Need to remove the current record that was in place only for download.
			var downtimeReport = downtimeReportSet.createNewRecord();
			if (isChangeStatus){
				var newStatusDate = DateTimeUtil.zeroSecondsAndMilliseconds(tempDowntimeResource.get((assetUp?'startdate':'enddate')));
				var updownstatusdate = asset.get('displayupdownstatusdate');
				var currentStatusDate = null;
				if (updownstatusdate){
					currentStatusDate = DateTimeUtil.zeroSecondsAndMilliseconds(updownstatusdate);
				}
				if(this.statusChangeValidateDates(assetUp,newStatusDate,currentStatusDate)){
					asset.openPriorityChangeTransaction();
					downtimeReport.set('isdowntimereport', '0');
					downtimeReport.set('statuschangecode', tempDowntimeResource.get('downtimecode'));
					downtimeReport.setDateValue('statuschangedate', newStatusDate);
					var downtime = ((assetUp || !currentStatusDate) ? 0 : DateTimeUtil.fromMillisecondsToHours(newStatusDate-currentStatusDate));
					downtimeReport.set('downtime', downtime);
					asset.set('displaytotaldowntime', downtime);
					asset.setDateValue('displayupdownstatusdate', newStatusDate);
					asset.set('displayisrunning', !assetUp);
					if (assetUp){
						asset.setNullValue('displaydowntimecode');
					}
					else{
						asset.set('displaydowntimecode', tempDowntimeResource.get('downtimecode'));
					}
				}
			}
			else{
				var startDate = DateTimeUtil.zeroSecondsAndMilliseconds(tempDowntimeResource.get('startdate'));
				var endDate = DateTimeUtil.zeroSecondsAndMilliseconds(tempDowntimeResource.get('enddate'));
				if(this.downtimeValidateDates(startDate,endDate)){
					asset.openPriorityChangeTransaction();
					downtimeReport.set('isdowntimereport', '1');
					downtimeReport.set('reportdowntimecode', tempDowntimeResource.get('downtimecode'));
					downtimeReport.setDateValue('startdate', startDate);
					downtimeReport.setDateValue('enddate', endDate);
					asset.setDateValue('displayupdownstatusdate',endDate);
					var downtime = DateTimeUtil.fromMillisecondsToHours(endDate-startDate);
					downtimeReport.set('downtime', downtime);
					asset.set('displaytotaldowntime', downtime);
					asset.set('displayisrunning', true);
				}
			}
			asset.closePriorityChangeTransaction();
			if (asset.isNew()){
				eventContext.ui.hideCurrentView();
			}
			else{
				ModelService.save(assetSet).then(function(){
					eventContext.ui.hideCurrentView();
				});			
			}
		},
		
		/*
		 * If the asset is up the start date cannot be before the last status date.  
		 * If the asset is down the end date cannot be before the last status date (which really is the start date)
		 */
		statusChangeValidateDates: function(assetUp,newStatusDate, statusdate){
			
			if(statusdate && newStatusDate < statusdate){
				throw new PlatformRuntimeException((assetUp?'startdatelessthanlaststatusdate':'enddatelessthanlaststatusdate'));
				return false;
			}
            return true;
		},
		
		downtimeValidateDates : function(startdate, enddate) {

			//Validating End Date and Time
			if (enddate && enddate < startdate){
				throw new PlatformRuntimeException('endtimebeforestarttime');
				return false;
			}
            return true;
		}

	});
});
