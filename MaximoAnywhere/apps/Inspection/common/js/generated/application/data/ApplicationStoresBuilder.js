/* 
 * Licensed Materials - Property of IBM
 * "Restricted Materials of IBM"
 *
 * 5725-M39
 *
 * (C) COPYRIGHT IBM CORP. 2022 All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with
 * IBM Corp. 
 *
 */
 
//----------------------------------------------------------------//
// This is auto generated code. Do not modify it manually.
// Product and Version: IBM Maximo Anywhere Version 7.5
// Build: 2022-05-26 15:48:27
//----------------------------------------------------------------//
define(   "generated/application/data/ApplicationStoresBuilder", 
      [
         "dojo/_base/declare", 
         "dojo/promise/all", 
         "platform/boot/data/_StoresBuilderBase", 
         "platform/store/ResourceMetadata", 
         "platform/store/PersistenceManager", 
         "application/business/WorkOrderObject", 
         "application/business/AttachmentsObject", 
         "application/business/MultiAssetLocObject", 
         "application/business/TaskObject", 
         "application/business/AssignmentObject", 
         "application/business/PlannedMaterialObject", 
         "application/business/PlannedToolObject", 
         "application/business/ActualLaborObject", 
         "application/business/ActualMaterialObject", 
         "application/business/ActualToolObject", 
         "application/business/ClassStructureObject", 
         "application/com/Inspection/business/MaxDomainObject", 
         "application/business/WorkOrderTimer", 
         "application/business/WoStatusObject", 
         "application/business/CrewLaborObject", 
         "application/business/CrewToolObject"
      ],

function(declare, all, StoresBuilderBase, ResourceMetadata, PersistenceManager, WorkOrderObject, AttachmentsObject, MultiAssetLocObject, TaskObject, AssignmentObject, PlannedMaterialObject, PlannedToolObject, ActualLaborObject, ActualMaterialObject, ActualToolObject, ClassStructureObject, MaxDomainObject, WorkOrderTimer, WoStatusObject, CrewLaborObject, CrewToolObject) {
      return declare("generated.application.data.ApplicationStoresBuilder", StoresBuilderBase, {

         _buildStoresAsync : function(promise) {

            var resource001 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformLoginResource',
                  'resourceName' : 'PlatformLoginResource',
                  'id' : 'aw1792f489',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'username',
                  'index' : false,
                  'artifactId' : 'PlatformLoginResource_username_string',
                  'id' : 'awafcbeb63',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'password',
                  'index' : false,
                  'artifactId' : 'PlatformLoginResource_password_string',
                  'id' : 'awe076df82',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'errorMsg',
                  'index' : false,
                  'artifactId' : 'PlatformLoginResource_errorMsg_string',
                  'id' : 'awfacff206',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'appName',
                  'index' : false,
                  'artifactId' : 'PlatformLoginResource_appName_string',
                  'id' : 'awb387ae25',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'relogin',
                  'index' : false,
                  'artifactId' : 'PlatformLoginResource_relogin_boolean',
                  'id' : 'aw178aa51a',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'localPassword',
                  'index' : false,
                  'artifactId' : 'PlatformLoginResource_localPassword_string',
                  'id' : 'aw1d3649b5',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise001 = PersistenceManager.initCollection( resource001 );


            var resource002 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'SSODialogResource',
                  'resourceName' : 'SSODialogResource',
                  'id' : 'awafe1e4bb',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'platform' : 'true',
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'errorMsg',
                  'index' : false,
                  'artifactId' : 'SSODialogResource_errorMsg_string',
                  'id' : 'awa30b8002',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise002 = PersistenceManager.initCollection( resource002 );


            var resource003 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'DeviceSizeResource',
                  'resourceName' : 'DeviceSizeResource',
                  'id' : 'awbd8820b5',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'platform' : 'true',
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'int',
                  'name' : 'ppi',
                  'index' : false,
                  'artifactId' : 'DeviceSizeResource_ppi',
                  'id' : 'awa9e12d88',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'int',
                  'name' : 'width',
                  'index' : false,
                  'artifactId' : 'DeviceSizeResource_width',
                  'id' : 'aw688ff7e6',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'int',
                  'name' : 'height',
                  'index' : false,
                  'artifactId' : 'DeviceSizeResource_height',
                  'id' : 'aw17110aa9',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'layoutSize',
                  'index' : false,
                  'artifactId' : 'DeviceSizeResource_layout',
                  'id' : 'awd8668444',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'orientation',
                  'index' : false,
                  'artifactId' : 'DeviceSizeResource_orientation',
                  'id' : 'aw4e15b8b4',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'density',
                  'index' : false,
                  'artifactId' : 'DeviceSizeResource_density',
                  'id' : 'awffff30c8',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'pane0_layoutSize',
                  'index' : false,
                  'artifactId' : 'DeviceSizeResource_pane0_layout',
                  'id' : 'aw82cbe800',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'pane1_layoutSize',
                  'index' : false,
                  'artifactId' : 'DeviceSizeResource_pane1_layout',
                  'id' : 'aw4e61e89e',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise003 = PersistenceManager.initCollection( resource003 );


            var resource004 = new ResourceMetadata({
                  'defaultOrderBy' : 'asset asc',
                  'pageSize' : 20,
                  'resourceName' : 'workOrder',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'hasManagedQuery' : 'true',
                  'artifactId' : 'workOrder',
                  'id' : 'aw900e7dbf',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
                  'classInstance' : WorkOrderObject,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,dcterms:title,dcterms:description,spi_wm:woclass,spi_wm:origrecordid,spi_wm:origrecordclass,spi_wm:hasfollowupwork,oslc:shortTitle,spi_wm:schedstart,spi_wm:schedfinish,spi_wm:actstart,spi_wm:actfinish,spi:status,spi_wm:worktype,spi_wm:wopriority,spi_wm:siteid,spi_wm:orgid,spi_wm:np_statusmemo,spi_wm:statusdate,spi_wm:istask,spi_wm:classstructureid,spi_wm:calculatedy,spi_wm:calculatedx,spi_wm:assetancestor{spi_wm:ancestor},spi_wm:failureCode{dcterms:title,oslc:shortTitle},spi:asset{spi:description_longdescription,dcterms:title,oslc:shortTitle},spi:location{spi:description_longdescription,dcterms:title,oslc:shortTitle},spi_wm:locancestor{spi_wm:ancestor},spi:woserviceaddress{spi_wm:description,spi_wm:formattedaddress,spi_wm:saddresscode}').
               setSupportiveFieldsSelectExpression('spi_wm:task{spi_wm:taskid,dcterms:title,spi_wm:description_longdescription,spi:status,spi_wm:schedstart,spi_wm:parent,spi_wm:istask,spi_wm:statusdate,spi_wm:np_statusmemo,spi_wm:siteid,oslc:shortTitle,spi_wm:parentchgsstatus,spi:asset{spi:description_longdescription,dcterms:title,oslc:shortTitle},spi:location{spi:description_longdescription,dcterms:title,oslc:shortTitle}},spi_wm:assignment{spi_wm:assignmentid,spi_wm:taskid,spi_wm:laborcode,spi_wm:laborname,spi_wm:craft,spi_wm:skilllevel,spi_wm:amcrew,spi_wm:amcrewtype,spi_wm:status,spi_wm:scheduledate,spi_wm:laborhrs,spi_wm:vendor,spi_wm:contractnum},spi_wm:wpmaterial{spi_wm:wpitemid,spi_wm:taskid,spi_wm:itemnum,spi_wm:description,spi_wm:description_longdescription,spi_wm:itemqty,spi_wm:linetype,spi_wm:directreq,spi:location{dcterms:title,oslc:shortTitle}},spi_wm:wptool{spi_wm:wpitemid,spi_wm:itemnum,spi_wm:taskid,spi_wm:description,spi_wm:description_longdescription,spi_wm:itemqty,spi_wm:hours,spi:location{dcterms:title,oslc:shortTitle}},spi_wm:actuallabor{dcterms:identifier,spi_wm:taskid,spi_wm:laborcode,foaf:name,spi_wm:craft,spi_wm:skilllevel,spi_wm:vendor,spi_wm:contractnum,spi_wm:revisionnum,spi_wm:amcrew,spi_wm:position,spi_wm:startdate,spi_wm:starttime,spi_wm:finishdate,spi_wm:finishtime,spi_wm:regularhrs,spi_wm:premiumpayhours,spi_wm:premiumpaycode,spi_wm:transtype,spi_wm:timerstatus,spi_wm:anywhererefid},spi_wm:actualmaterial{dcterms:identifier,spi_wm:itemsetid,spi_wm:taskid,spi_wm:itemnum,dcterms:title,spi_wm:positivequantity,spi_wm:linetype,spi_wm:storeloc,spi_wm:binnum,spi_wm:rotassetnum,spi_wm:tositeid,spi_wm:anywhererefid},spi_wm:actualtool{dcterms:identifier,spi_wm:taskid,spi_wm:toolhrs,spi_wm:rotassetnum,spi_wm:amcrew,spi_wm:anywhererefid,spi:toolitem{spi:itemnum,dcterms:title}},spi_wm:worklog{spi_wm:worklogid,spi_wm:createdate,spi_wm:createby,spi_wm:clientviewable,spi_wm:logtype,spi_wm:description,spi_wm:description_longdescription,spi_wm:anywhererefid},spi_wm:mapsketch{spi_wm:mapsketchid,spi_wm:sketchname,spi_wm:createdby,spi_wm:recordtype,spi_wm:recordnum,spi_wm:sketchlist,spi_wm:datecreated,spi_wm:ismobile,spi_wm:anywhererefid,spi_wm:status,spi_wm:mapname,spi_wm:sketchextent},spi_wm:multiassetlocci{spi_wm:sequence,spi_wm:progress,spi_wm:multiid,spi:asset{dcterms:title,oslc:shortTitle},spi:location{dcterms:title,oslc:shortTitle}},spi_wm:failurereport{dcterms:identifier,spi_wm:type,spi_wm:linenum,spi_wm:anywhererefid,spi:failureCode{dcterms:title,oslc:shortTitle}},spi_wm:assetlocmeter{spi_wm:assetnum,spi_wm:location,spi_wm:dorollover,spi_wm:isdelta,spi_wm:inspector,spi_wm:newreading,spi_wm:newreadingdate,spi_wm:metername,spi_wm:metertype,spi_wm:readingtype,spi_wm:lastreading,spi_wm:lastreadingdate,spi_wm:remarks},spi:attachments{oslc_cm:attachmentSize,dcterms:title,spi:fileName,dcterms:description,dcterms:created,spi:urlType,spi:docType,spi:printthrulink,spi:contentLocation,spi:anywhererefid,spi:createby},spi_wm:workorderspec{spi_wm:workorderspecid,spi_wm:classstructureid,spi_wm:mandatory,spi_wm:refobjectname,spi_wm:orgid,spi_wm:changedate,spi_wm:displaysequence,spi_wm:changeby,spi_wm:refobjectid,spi_wm:numvalue,spi_wm:alnvalue,spi_wm:section,spi_wm:measureunitid,spi_wm:anywhererefid,spi_wm:classspec{spi_wm:domainid,spi_wm:classspecid},spi_wm:assetattr{spi_wm:assetattrid,spi_wm:domainid,spi_wm:description,spi_wm:datatype}}').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : true,
                  'artifactId' : 'workOrder_identifier_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awb2f0cf08',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'method' : 'descriptionChanged',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : true,
                  'artifactId' : 'workOrder_description_dctermstitle',
                  'maxSize' : 100,
                  'id' : 'awa40073b2',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'method' : 'descriptionChanged',
                  'dataType' : 'string',
                  'usage' : 'longaln',
                  'name' : 'longdescription',
                  'index' : false,
                  'artifactId' : 'workOrder_longdescription_dctermsdescription',
                  'maxSize' : 32000,
                  'id' : 'aw31fa6efc',
                  'local' : false,
                  'remoteName' : 'dcterms:description',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'workOrder',
                  'name' : 'failurecode',
                  'index' : false,
                  'artifactId' : 'workOrder_failurecode_spi_wmfailureCodeoslcshortTitle',
                  'maxSize' : 8,
                  'id' : 'aw91406919',
                  'local' : false,
                  'remoteName' : 'spi_wm:failureCode',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'dcterms:title',
                  'dataType' : 'reference',
                  'referenceResource' : 'workOrder',
                  'name' : 'failureCodeDesc',
                  'index' : false,
                  'artifactId' : 'workOrder_failureCodeDesc_spi_wmfailureCodedctermstitle',
                  'maxSize' : 100,
                  'id' : 'awb3319036',
                  'local' : false,
                  'remoteName' : 'spi_wm:failureCode',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'woclass',
                  'index' : true,
                  'artifactId' : 'workOrder_woclass_spi_wmwoclass',
                  'maxSize' : 16,
                  'id' : 'aw9472daee',
                  'local' : false,
                  'remoteName' : 'spi_wm:woclass',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'origrecordid',
                  'index' : false,
                  'artifactId' : 'workOrder_origrecordid_spi_wmorigrecordid',
                  'maxSize' : 25,
                  'id' : 'aw9c1c9dfb',
                  'local' : false,
                  'remoteName' : 'spi_wm:origrecordid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'origrecordclass',
                  'index' : false,
                  'artifactId' : 'workOrder_origrecordclass_spi_wmorigrecordclass',
                  'maxSize' : 16,
                  'id' : 'awda5d162e',
                  'local' : false,
                  'remoteName' : 'spi_wm:origrecordclass',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'hasfollowupwork',
                  'index' : false,
                  'artifactId' : 'workOrder_hasfollowupwork_spi_wmhasfollowupwork',
                  'id' : 'aw7a7d2280',
                  'local' : false,
                  'remoteName' : 'spi_wm:hasfollowupwork',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'wonum',
                  'index' : true,
                  'artifactId' : 'workOrder_wonum_oslcshortTitle',
                  'maxSize' : 25,
                  'id' : 'awf24d5b27',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'method' : 'assetChanged',
                  'referenceResource' : 'additionalasset',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'index' : true,
                  'maxSize' : 25,
                  'local' : false,
                  'name' : 'asset',
                  'artifactId' : 'workOrder_asset_spiassetoslcshortTitle',
                  'id' : 'aw9e7d98a4',
                  'remoteName' : 'spi:asset',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'dcterms:title',
                  'referenceResource' : 'additionalasset',
                  'dataType' : 'reference',
                  'name' : 'maxassetdesc',
                  'index' : false,
                  'artifactId' : 'workOrder_maxassetdesc_spiassetdctermstitle',
                  'maxSize' : 100,
                  'id' : 'aw2f631e36',
                  'local' : false,
                  'remoteName' : 'spi:asset',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi:description_longdescription',
                  'referenceResource' : 'additionalasset',
                  'dataType' : 'reference',
                  'usage' : 'longaln',
                  'name' : 'assetld',
                  'index' : false,
                  'artifactId' : 'workOrder_assetld_spiassetspidescription_longdescription',
                  'maxSize' : 32000,
                  'id' : 'awd8e94c69',
                  'local' : false,
                  'remoteName' : 'spi:asset',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'method' : 'schedStartChanged',
                  'dataType' : 'datetime',
                  'name' : 'starttime',
                  'index' : false,
                  'artifactId' : 'workOrder_starttime_spi_wmschedstart',
                  'id' : 'aw4989cc05',
                  'local' : false,
                  'remoteName' : 'spi_wm:schedstart',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'method' : 'schedFinishChanged',
                  'dataType' : 'datetime',
                  'name' : 'finishtime',
                  'index' : false,
                  'artifactId' : 'workOrder_finishtime_spi_wmschedfinish',
                  'id' : 'awede42224',
                  'local' : false,
                  'remoteName' : 'spi_wm:schedfinish',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'actstart',
                  'index' : false,
                  'artifactId' : 'workOrder_actstart_spi_wmactstart',
                  'id' : 'awf80efaf0',
                  'local' : false,
                  'remoteName' : 'spi_wm:actstart',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'actfinish',
                  'index' : false,
                  'artifactId' : 'workOrder_actfinish_spi_wmactfinish',
                  'id' : 'aw1869033a',
                  'local' : false,
                  'remoteName' : 'spi_wm:actfinish',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'method' : 'locationChanged',
                  'referenceResource' : 'additionallocations',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'index' : true,
                  'maxSize' : 12,
                  'local' : false,
                  'name' : 'location',
                  'artifactId' : 'workOrder_location_spilocationoslcshortTitle',
                  'id' : 'aw7138f85d',
                  'remoteName' : 'spi:location',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'dcterms:title',
                  'referenceResource' : 'additionallocations',
                  'dataType' : 'reference',
                  'name' : 'maxlocationdesc',
                  'index' : false,
                  'artifactId' : 'workOrder_maxlocationdesc_spilocationdctermstitle',
                  'maxSize' : 100,
                  'id' : 'aw9d6bc6e7',
                  'local' : false,
                  'remoteName' : 'spi:location',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi:description_longdescription',
                  'referenceResource' : 'additionallocations',
                  'dataType' : 'reference',
                  'usage' : 'longaln',
                  'name' : 'locationld',
                  'index' : false,
                  'artifactId' : 'workOrder_locationld_spilocationspidescription_longdescription',
                  'maxSize' : 32000,
                  'id' : 'aw651253b6',
                  'local' : false,
                  'remoteName' : 'spi:location',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'method' : 'statusChanged',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'status',
                  'index' : true,
                  'artifactId' : 'workOrder_status_spistatus',
                  'maxSize' : 16,
                  'id' : 'awedad2b53',
                  'local' : false,
                  'remoteName' : 'spi:status',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'worktype',
                  'index' : false,
                  'artifactId' : 'workOrder_worktype_spi_wmworktype',
                  'maxSize' : 5,
                  'id' : 'aw6efbd375',
                  'local' : false,
                  'remoteName' : 'spi_wm:worktype',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'priority',
                  'index' : true,
                  'artifactId' : 'workOrder_priority_spi_wmwopriority',
                  'id' : 'aw400a364c',
                  'local' : false,
                  'remoteName' : 'spi_wm:wopriority',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:formattedaddress',
                  'dataType' : 'inline',
                  'referenceResource' : 'workOrder',
                  'name' : 'woserviceaddress',
                  'index' : false,
                  'artifactId' : 'workOrder_woserviceaddress_spiwoserviceaddressspi_wmformattedaddress',
                  'maxSize' : 150,
                  'id' : 'aw4b373dec',
                  'local' : false,
                  'remoteName' : 'spi:woserviceaddress',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:saddresscode',
                  'dataType' : 'inline',
                  'usage' : 'upper',
                  'referenceResource' : 'workOrder',
                  'name' : 'woserviceaddresscode',
                  'index' : false,
                  'artifactId' : 'workOrder_woserviceaddresscode_spiwoserviceaddressspi_wmsaddresscode',
                  'maxSize' : 12,
                  'id' : 'aw2fdc547d',
                  'local' : false,
                  'remoteName' : 'spi:woserviceaddress',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:description',
                  'dataType' : 'inline',
                  'referenceResource' : 'workOrder',
                  'name' : 'woserviceaddressdesc',
                  'index' : false,
                  'artifactId' : 'workOrder_woserviceaddressdesc_spiwoserviceaddressspi_wmdescription',
                  'maxSize' : 50,
                  'id' : 'aw2021f264',
                  'local' : false,
                  'remoteName' : 'spi:woserviceaddress',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'workOrder_siteid_spi_wmsiteid',
                  'maxSize' : 8,
                  'id' : 'aw832890e6',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi_wm:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'workOrder_orgid_spi_wmorgid',
                  'maxSize' : 8,
                  'id' : 'awfda01d79',
                  'local' : false,
                  'remoteName' : 'spi_wm:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'memo',
                  'index' : false,
                  'artifactId' : 'workOrder_memo_spi_wmnp_statusmemo',
                  'maxSize' : 50,
                  'id' : 'aw91d527aa',
                  'local' : false,
                  'remoteName' : 'spi_wm:np_statusmemo',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'datetime',
                  'name' : 'changestatusdate',
                  'index' : false,
                  'artifactId' : 'workOrder_changestatusdate_spi_wmstatusdate',
                  'id' : 'aw88732',
                  'local' : false,
                  'remoteName' : 'spi_wm:statusdate',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'istask',
                  'index' : true,
                  'artifactId' : 'workOrder_istask_spi_wmistask',
                  'id' : 'awdf17d26f',
                  'local' : false,
                  'remoteName' : 'spi_wm:istask',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'classstructureid',
                  'index' : false,
                  'artifactId' : 'workOrder_classstructureid_spi_wmclassstructureid',
                  'maxSize' : 20,
                  'id' : 'aw8e48db05',
                  'local' : false,
                  'remoteName' : 'spi_wm:classstructureid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:ancestor',
                  'referenceResource' : 'locancestorResource',
                  'dataType' : 'inline',
                  'usage' : 'upper',
                  'name' : 'locationancestor',
                  'index' : true,
                  'artifactId' : 'workOrder_locationancestor_spi_wmlocancestorspi_wmancestor',
                  'maxSize' : 12,
                  'id' : 'aw7d45217d',
                  'local' : false,
                  'remoteName' : 'spi_wm:locancestor',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:ancestor',
                  'referenceResource' : 'assetancestorResource',
                  'dataType' : 'inline',
                  'usage' : 'upper',
                  'name' : 'assetancestor',
                  'index' : true,
                  'artifactId' : 'workOrder_assetancestor_spi_wmassetancestorspi_wmancestor',
                  'maxSize' : 25,
                  'id' : 'aw6294d74e',
                  'local' : false,
                  'remoteName' : 'spi_wm:assetancestor',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'taskResource',
                  'name' : 'tasklist',
                  'index' : false,
                  'artifactId' : 'workOrder_tasklist_spi_wmtask',
                  'id' : 'aw6091f170',
                  'describedByResource' : 'taskResource',
                  'local' : false,
                  'remoteName' : 'spi_wm:task',
                  'selectExpression' : 'spi_wm:task{spi_wm:taskid,dcterms:title,spi_wm:description_longdescription,spi:status,spi_wm:schedstart,spi_wm:parent,spi_wm:istask,spi_wm:statusdate,spi_wm:np_statusmemo,spi_wm:siteid,oslc:shortTitle,spi_wm:parentchgsstatus,spi:asset{spi:description_longdescription,dcterms:title,oslc:shortTitle},spi:location{spi:description_longdescription,dcterms:title,oslc:shortTitle}}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'assignmentResource',
                  'name' : 'assignmentlist',
                  'index' : false,
                  'artifactId' : 'workOrder_assignmentlist_spi_wmassignment',
                  'id' : 'awd6eb9ac7',
                  'describedByResource' : 'assignmentResource',
                  'local' : false,
                  'remoteName' : 'spi_wm:assignment',
                  'selectExpression' : 'spi_wm:assignment{spi_wm:assignmentid,spi_wm:taskid,spi_wm:laborcode,spi_wm:laborname,spi_wm:craft,spi_wm:skilllevel,spi_wm:amcrew,spi_wm:amcrewtype,spi_wm:status,spi_wm:scheduledate,spi_wm:laborhrs,spi_wm:vendor,spi_wm:contractnum}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'plannedMaterialResource',
                  'name' : 'materiallist',
                  'index' : false,
                  'artifactId' : 'workOrder_materiallist_spi_wmwpmaterial',
                  'id' : 'awd458a520',
                  'describedByResource' : 'plannedMaterialResource',
                  'local' : false,
                  'remoteName' : 'spi_wm:wpmaterial',
                  'selectExpression' : 'spi_wm:wpmaterial{spi_wm:wpitemid,spi_wm:taskid,spi_wm:itemnum,spi_wm:description,spi_wm:description_longdescription,spi_wm:itemqty,spi_wm:linetype,spi_wm:directreq,spi:location{dcterms:title,oslc:shortTitle}}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'plannedToolResource',
                  'name' : 'toollist',
                  'index' : false,
                  'artifactId' : 'workOrder_toollist_spi_wmwptool',
                  'id' : 'aw48aaa59e',
                  'describedByResource' : 'plannedToolResource',
                  'local' : false,
                  'remoteName' : 'spi_wm:wptool',
                  'selectExpression' : 'spi_wm:wptool{spi_wm:wpitemid,spi_wm:itemnum,spi_wm:taskid,spi_wm:description,spi_wm:description_longdescription,spi_wm:itemqty,spi_wm:hours,spi:location{dcterms:title,oslc:shortTitle}}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'actualLaborResource',
                  'name' : 'actuallaborlist',
                  'index' : false,
                  'artifactId' : 'workOrder_actuallaborlist_spi_wmactuallabor',
                  'id' : 'awc1321270',
                  'describedByResource' : 'actualLaborResource',
                  'local' : false,
                  'remoteName' : 'spi_wm:actuallabor',
                  'selectExpression' : 'spi_wm:actuallabor{dcterms:identifier,spi_wm:taskid,spi_wm:laborcode,foaf:name,spi_wm:craft,spi_wm:skilllevel,spi_wm:vendor,spi_wm:contractnum,spi_wm:revisionnum,spi_wm:amcrew,spi_wm:position,spi_wm:startdate,spi_wm:starttime,spi_wm:finishdate,spi_wm:finishtime,spi_wm:regularhrs,spi_wm:premiumpayhours,spi_wm:premiumpaycode,spi_wm:transtype,spi_wm:timerstatus,spi_wm:anywhererefid}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'actualMaterialResource',
                  'name' : 'actualmateriallist',
                  'index' : false,
                  'artifactId' : 'workOrder_actualmateriallist_spi_wmactualmaterial',
                  'id' : 'aw9693fa7a',
                  'describedByResource' : 'actualMaterialResource',
                  'local' : false,
                  'remoteName' : 'spi_wm:actualmaterial',
                  'selectExpression' : 'spi_wm:actualmaterial{dcterms:identifier,spi_wm:itemsetid,spi_wm:taskid,spi_wm:itemnum,dcterms:title,spi_wm:positivequantity,spi_wm:linetype,spi_wm:storeloc,spi_wm:binnum,spi_wm:rotassetnum,spi_wm:tositeid,spi_wm:anywhererefid}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'actualToolResource',
                  'name' : 'actualtoollist',
                  'index' : false,
                  'artifactId' : 'workOrder_actualtoollist_spi_wmactualtool',
                  'id' : 'aw3c201f14',
                  'describedByResource' : 'actualToolResource',
                  'local' : false,
                  'remoteName' : 'spi_wm:actualtool',
                  'selectExpression' : 'spi_wm:actualtool{dcterms:identifier,spi_wm:taskid,spi_wm:toolhrs,spi_wm:rotassetnum,spi_wm:amcrew,spi_wm:anywhererefid,spi:toolitem{spi:itemnum,dcterms:title}}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'workLogResource',
                  'name' : 'workloglist',
                  'index' : false,
                  'artifactId' : 'workOrder_workloglist_spi_wmworklog',
                  'id' : 'awe4203449',
                  'describedByResource' : 'workLogResource',
                  'local' : false,
                  'remoteName' : 'spi_wm:worklog',
                  'selectExpression' : 'spi_wm:worklog{spi_wm:worklogid,spi_wm:createdate,spi_wm:createby,spi_wm:clientviewable,spi_wm:logtype,spi_wm:description,spi_wm:description_longdescription,spi_wm:anywhererefid}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'sketchResource',
                  'name' : 'sketchlist',
                  'index' : false,
                  'artifactId' : 'workOrder_sketchlist_spi_wmsketch',
                  'id' : 'aw64420ef9',
                  'describedByResource' : 'sketchResource',
                  'local' : false,
                  'remoteName' : 'spi_wm:mapsketch',
                  'selectExpression' : 'spi_wm:mapsketch{spi_wm:mapsketchid,spi_wm:sketchname,spi_wm:createdby,spi_wm:recordtype,spi_wm:recordnum,spi_wm:sketchlist,spi_wm:datecreated,spi_wm:ismobile,spi_wm:anywhererefid,spi_wm:status,spi_wm:mapname,spi_wm:sketchextent}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'multiAssetLocResource',
                  'name' : 'multiassetloclist',
                  'index' : false,
                  'artifactId' : 'workOrder_multiassetloclist_spi_wmmultiassetlocci',
                  'id' : 'awc0ef0354',
                  'describedByResource' : 'multiAssetLocResource',
                  'local' : false,
                  'remoteName' : 'spi_wm:multiassetlocci',
                  'selectExpression' : 'spi_wm:multiassetlocci{spi_wm:sequence,spi_wm:progress,spi_wm:multiid,spi:asset{dcterms:title,oslc:shortTitle},spi:location{dcterms:title,oslc:shortTitle}}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'failureReportResource',
                  'name' : 'failureReportlist',
                  'index' : false,
                  'artifactId' : 'workOrder_failureReportlist_spi_wmfailurereport',
                  'id' : 'aw58099ff6',
                  'describedByResource' : 'failureReportResource',
                  'local' : false,
                  'remoteName' : 'spi_wm:failurereport',
                  'selectExpression' : 'spi_wm:failurereport{dcterms:identifier,spi_wm:type,spi_wm:linenum,spi_wm:anywhererefid,spi:failureCode{dcterms:title,oslc:shortTitle}}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'assetLocMeterComplexResource',
                  'name' : 'assetlocmeterlist',
                  'index' : false,
                  'artifactId' : 'workOrder_assetlocmeterlist_spi_wmassetlocmeter',
                  'id' : 'aw30ec3f26',
                  'describedByResource' : 'assetLocMeterComplexResource',
                  'local' : false,
                  'remoteName' : 'spi_wm:assetlocmeter',
                  'selectExpression' : 'spi_wm:assetlocmeter{spi_wm:assetnum,spi_wm:location,spi_wm:dorollover,spi_wm:isdelta,spi_wm:inspector,spi_wm:newreading,spi_wm:newreadingdate,spi_wm:metername,spi_wm:metertype,spi_wm:readingtype,spi_wm:lastreading,spi_wm:lastreadingdate,spi_wm:remarks}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'attachments',
                  'name' : 'attachments',
                  'index' : false,
                  'artifactId' : 'workOrder_attachments_spiattachments',
                  'id' : 'aw41ffb0ef',
                  'describedByResource' : 'attachments',
                  'local' : false,
                  'remoteName' : 'spi:attachments',
                  'selectExpression' : 'spi:attachments{oslc_cm:attachmentSize,dcterms:title,spi:fileName,dcterms:description,dcterms:created,spi:urlType,spi:docType,spi:printthrulink,spi:contentLocation,spi:anywhererefid,spi:createby}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'workOrderSpecResource',
                  'name' : 'workOrderSpec',
                  'index' : false,
                  'artifactId' : 'workOrder_workOrderSpec_spi_wmworkorderspec',
                  'id' : 'aw6dc3dda2',
                  'describedByResource' : 'workOrderSpecResource',
                  'local' : false,
                  'remoteName' : 'spi_wm:workorderspec',
                  'selectExpression' : 'spi_wm:workorderspec{spi_wm:workorderspecid,spi_wm:classstructureid,spi_wm:mandatory,spi_wm:refobjectname,spi_wm:orgid,spi_wm:changedate,spi_wm:displaysequence,spi_wm:changeby,spi_wm:refobjectid,spi_wm:numvalue,spi_wm:alnvalue,spi_wm:section,spi_wm:measureunitid,spi_wm:anywhererefid,spi_wm:classspec{spi_wm:domainid,spi_wm:classspecid},spi_wm:assetattr{spi_wm:assetattrid,spi_wm:domainid,spi_wm:description,spi_wm:datatype}}',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'latitudey',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'workOrder_latitudey_spi_wmcalculatedy',
                  'id' : 'aw1e3578f0',
                  'local' : false,
                  'remoteName' : 'spi_wm:calculatedy',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'longitudex',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'workOrder_longitudex_spi_wmcalculatedx',
                  'id' : 'aw2460878c',
                  'local' : false,
                  'remoteName' : 'spi_wm:calculatedx',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:formattedaddress',
                  'dataType' : 'inline',
                  'referenceResource' : 'workOrder',
                  'name' : 'formattedaddress',
                  'index' : false,
                  'artifactId' : 'workOrder_formattedaddress_spiwoserviceaddressspi_wmformattedaddress',
                  'maxSize' : 150,
                  'id' : 'awd70f51b8',
                  'local' : false,
                  'remoteName' : 'spi:woserviceaddress',
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'statusDate',
                  'index' : false,
                  'artifactId' : 'workOrder_statusDate_dateTime',
                  'id' : 'awb952a237',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'started',
                  'index' : false,
                  'artifactId' : 'workOrder_started_boolean',
                  'id' : 'awb0004d61',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'wonumanddescription',
                  'index' : false,
                  'artifactId' : 'workOrder_wonumanddescription_string',
                  'id' : 'aw2e3c91f1',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'assetnumanddescription',
                  'index' : false,
                  'artifactId' : 'workOrder_assetnumanddescription_string',
                  'id' : 'aw8872bae8',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'locationanddescription',
                  'index' : false,
                  'artifactId' : 'workOrder_locationanddescription_string',
                  'id' : 'aw923db8cc',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'internalStatus',
                  'index' : false,
                  'artifactId' : 'workOrder_internalStatus_string',
                  'id' : 'awa390f35c',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'statusdesc',
                  'index' : false,
                  'artifactId' : 'workOrder_statusdesc_string',
                  'id' : 'aw8ceb99f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'descriptionModified',
                  'index' : false,
                  'artifactId' : 'workOrder_descriptionModified_boolean',
                  'id' : 'aw58710423',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'locationdesc',
                  'index' : false,
                  'artifactId' : 'workOrder_locationdesc_string',
                  'id' : 'aw61b12b1f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'assetdesc',
                  'index' : false,
                  'artifactId' : 'workOrder_assetdesc_string',
                  'id' : 'aw46e646e9',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'failureClass',
                  'index' : false,
                  'artifactId' : 'workOrder_failureClass_string',
                  'id' : 'awddccafaf',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'failuredesc',
                  'index' : false,
                  'artifactId' : 'workOrder_failuredesc_string',
                  'id' : 'awaa508bf7',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'currentFCType',
                  'index' : false,
                  'artifactId' : 'workOrder_currentFCType_string',
                  'id' : 'awd2140c3a',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'currentFCDesc',
                  'index' : false,
                  'artifactId' : 'workOrder_currentFCDesc_string',
                  'id' : 'awbe929cd5',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'classificationdesc',
                  'index' : false,
                  'artifactId' : 'workOrder_classificationdesc_string',
                  'id' : 'awcab29fc5',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'classificationpath',
                  'index' : false,
                  'artifactId' : 'workOrder_classificationpath_string',
                  'id' : 'awe47df969',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'localAssetLd',
                  'formula' : '${assetld}',
                  'index' : false,
                  'artifactId' : 'workOrder_localAssetLd_string',
                  'id' : 'aw5ac2de06',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'localLocationLd',
                  'formula' : '${locationld}',
                  'index' : false,
                  'artifactId' : 'workOrder_localLocationLd_string',
                  'id' : 'aw18c75f37',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'tasklistsize',
                  'index' : false,
                  'artifactId' : 'workOrder_tasklistsize_string',
                  'id' : 'aw35d9fb26',
                  'persistent' : false,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'assignmentlistsize',
                  'index' : false,
                  'artifactId' : 'workOrder_assignmentlistsize_string',
                  'id' : 'aw2079e81e',
                  'persistent' : false,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'materiallistsize',
                  'index' : false,
                  'artifactId' : 'workOrder_materiallistsize_string',
                  'id' : 'awdf5330e1',
                  'persistent' : false,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'toollistsize',
                  'index' : false,
                  'artifactId' : 'workOrder_toollistsize_string',
                  'id' : 'aw5344e0f6',
                  'persistent' : false,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'actuallaborlistsize',
                  'index' : false,
                  'artifactId' : 'workOrder_actuallaborlistsize_string',
                  'id' : 'aw514e42a4',
                  'persistent' : false,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'actualmateriallistsize',
                  'index' : false,
                  'artifactId' : 'workOrder_actualmateriallistsize_string',
                  'id' : 'aw20868964',
                  'persistent' : false,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'actualtoollistsize',
                  'index' : false,
                  'artifactId' : 'workOrder_actualtoollistsize_string',
                  'id' : 'aw945b8a4c',
                  'persistent' : false,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'workloglistsize',
                  'index' : false,
                  'artifactId' : 'workOrder_workloglistsize_string',
                  'id' : 'aw98312042',
                  'persistent' : false,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'multiassetloclistsize',
                  'index' : false,
                  'artifactId' : 'workOrder_multiassetloclistsize_string',
                  'id' : 'aw1dfc8d54',
                  'persistent' : false,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'meterslistsize',
                  'index' : false,
                  'artifactId' : 'workOrder_meterslistsize_string',
                  'id' : 'awe602c7e3',
                  'persistent' : false,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'attachmentssize',
                  'index' : false,
                  'artifactId' : 'workOrder_attachmentssize_string',
                  'id' : 'aw97031f2c',
                  'persistent' : false,
                  'local' : true,
               }).
               setCreationFactories([
                     {name:'createMyAssignedWork', creationString:'\/oslc\/os\/oslcwodetail' }
               ]).
               setQueryBases([
                     {name:'searchAllWorkOrders', queryString:'\/oslc\/os\/oslcwodetail?savedQuery=getWithComplexQuery', defaultForSearch: true, queryLabel:'' },
                     {name:'getMyAssignedWork', queryString:'\/oslc\/os\/oslcwodetail?savedQuery=getMyAssignedWork', queryLabel:'' },
                     {name:'WORKIOWN', queryString:'\/oslc\/os\/oslcwodetail?savedQuery=WORKIOWN', queryLabel:'' }
               ]);
            var resourcePromise004 = PersistenceManager.initCollection( resource004 );


            var resource005 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'attachments',
                  'isAttachment' : true,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'attachments',
                  'id' : 'aw47c4fad6',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
                  'classInstance' : AttachmentsObject,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('oslc_cm:attachmentSize,dcterms:title,spi:fileName,dcterms:description,dcterms:created,spi:urlType,spi:docType,spi:printthrulink,spi:contentLocation,spi:anywhererefid,spi:createby').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'fileSize',
                  'index' : false,
                  'artifactId' : 'attachments_fileSize_oslc_cmattachmentSize',
                  'id' : 'awafc65e01',
                  'local' : false,
                  'remoteName' : 'oslc_cm:attachmentSize',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'fileName',
                  'index' : false,
                  'artifactId' : 'attachments_fileName_dctermstitle',
                  'id' : 'aw3390da65',
                  'key' : '1',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'fullFileName',
                  'index' : false,
                  'artifactId' : 'attachments_fullFileName_spifileName',
                  'id' : 'awf858d871',
                  'key' : '2',
                  'local' : false,
                  'remoteName' : 'spi:fileName',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'attachments_description_dctermsdescription',
                  'id' : 'awbe16d790',
                  'local' : false,
                  'remoteName' : 'dcterms:description',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'creationDate',
                  'index' : false,
                  'artifactId' : 'attachments_creationDate_dctermscreated',
                  'id' : 'awa88d4af8',
                  'key' : '3',
                  'local' : false,
                  'remoteName' : 'dcterms:created',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'urlType',
                  'index' : false,
                  'artifactId' : 'attachments_urlType_spiurlType',
                  'id' : 'aw85d66259',
                  'local' : false,
                  'remoteName' : 'spi:urlType',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'docType',
                  'index' : false,
                  'artifactId' : 'attachments_docType_spidocType',
                  'id' : 'aw3393c41b',
                  'local' : false,
                  'remoteName' : 'spi:docType',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'bulkDownload',
                  'index' : false,
                  'artifactId' : 'attachments_bulkDownload_spiprintthrulink',
                  'id' : 'aw679c4e95',
                  'local' : false,
                  'remoteName' : 'spi:printthrulink',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'contentLocation',
                  'index' : false,
                  'artifactId' : 'attachments_contentLocation_spicontentLocation',
                  'id' : 'aw1faa9ae7',
                  'local' : false,
                  'remoteName' : 'spi:contentLocation',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'anywhereRefId',
                  'index' : false,
                  'artifactId' : 'attachments_anywhereRefId_spianywhererefid',
                  'id' : 'awb58bd2df',
                  'local' : false,
                  'remoteName' : 'spi:anywhererefid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'createby',
                  'index' : false,
                  'artifactId' : 'attachments_createby_spicreateby',
                  'id' : 'aw2cff279b',
                  'local' : false,
                  'remoteName' : 'spi:createby',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'displaySize',
                  'index' : false,
                  'artifactId' : 'attachments_displaySize_string',
                  'id' : 'awa53cf2df',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'displayFileName',
                  'formula' : '(${fileName} || ${anywhereAttachName})',
                  'index' : false,
                  'artifactId' : 'attachments_displayFileName_string',
                  'id' : 'aw986667e5',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'displayDescription',
                  'formula' : '(${description} || ${anywhereAttachDescription})',
                  'index' : false,
                  'artifactId' : 'attachments_displayDescription_string',
                  'id' : 'awce6df00e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'displayCategory',
                  'formula' : '(${docType} || ${anywhereAttachCategory})',
                  'index' : false,
                  'artifactId' : 'attachments_displayCategory_string',
                  'id' : 'awcdc99aca',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'displayCreationDate',
                  'formula' : '(${creationDate} || ${anywhereCreationDate})',
                  'index' : false,
                  'artifactId' : 'attachments_displayCreationDate_dateTime',
                  'id' : 'awd23c62ba',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'displayFileType',
                  'index' : false,
                  'artifactId' : 'attachments_displayFileType_string',
                  'id' : 'awbdc99f90',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise005 = PersistenceManager.initCollection( resource005 );


            var resource006 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'locancestorResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'locancestorResource',
                  'id' : 'aw78d12e4b',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,spi_wm:ancestor').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'locancestorResource_identifier_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw64ce1c57',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'ancestor',
                  'index' : false,
                  'artifactId' : 'locancestorResource_ancestor_spi_wmancestor',
                  'maxSize' : 12,
                  'id' : 'awee8fb7f2',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi_wm:ancestor',
               });
            var resourcePromise006 = PersistenceManager.initCollection( resource006 );


            var resource007 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'assetancestorResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'assetancestorResource',
                  'id' : 'awade5297',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,spi_wm:ancestor').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'assetancestorResource_identifier_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw2fc00b7d',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'ancestor',
                  'index' : false,
                  'artifactId' : 'assetancestorResource_ancestor_spi_wmancestor',
                  'maxSize' : 25,
                  'id' : 'aw57a17758',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi_wm:ancestor',
               });
            var resourcePromise007 = PersistenceManager.initCollection( resource007 );


            var resource008 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'multiAssetLocResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'multiAssetLocResource',
                  'id' : 'awb95e006b',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
                  'classInstance' : MultiAssetLocObject,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi_wm:sequence,spi_wm:progress,spi_wm:multiid,spi:asset{dcterms:title,oslc:shortTitle},spi:location{dcterms:title,oslc:shortTitle}').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'sequence',
                  'index' : false,
                  'artifactId' : 'multiAssetLocResource_sequence_spi_wmsequence',
                  'id' : 'aw73b5adfa',
                  'local' : false,
                  'remoteName' : 'spi_wm:sequence',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'referenceResource' : 'additionalasset',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'name' : 'assetnum',
                  'index' : false,
                  'artifactId' : 'multiAssetLocResource_assetnum_spiassetoslcshortTitle',
                  'maxSize' : 25,
                  'id' : 'aw28f536f6',
                  'local' : false,
                  'remoteName' : 'spi:asset',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'dcterms:title',
                  'referenceResource' : 'additionalasset',
                  'dataType' : 'reference',
                  'name' : 'assetdesc',
                  'index' : false,
                  'artifactId' : 'multiAssetLocResource_assetdesc_spiassetdctermstitle',
                  'maxSize' : 100,
                  'id' : 'aw66c56d4c',
                  'local' : false,
                  'remoteName' : 'spi:asset',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'referenceResource' : 'additionallocations',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'name' : 'location',
                  'index' : false,
                  'artifactId' : 'multiAssetLocResource_location_spilocationoslcshortTitle',
                  'maxSize' : 12,
                  'id' : 'awd112ebe0',
                  'local' : false,
                  'remoteName' : 'spi:location',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'dcterms:title',
                  'referenceResource' : 'additionallocations',
                  'dataType' : 'reference',
                  'name' : 'locationdesc',
                  'index' : false,
                  'artifactId' : 'multiAssetLocResource_locationdesc_spilocationdctermstitle',
                  'maxSize' : 100,
                  'id' : 'aw9eeb82c9',
                  'local' : false,
                  'remoteName' : 'spi:location',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'progress',
                  'index' : false,
                  'artifactId' : 'multiAssetLocResource_progress_spi_wmprogress',
                  'id' : 'awd960b76',
                  'local' : false,
                  'remoteName' : 'spi_wm:progress',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'multiAssetLocResource_multiid_spi_wmmultiid',
                  'id' : 'aw6e1a7fec',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi_wm:multiid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'assetnumanddescription',
                  'index' : false,
                  'artifactId' : 'multiAssetLocResource_assetnumanddescription_string',
                  'id' : 'awfab4cc2e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'locationanddescription',
                  'index' : false,
                  'artifactId' : 'multiAssetLocResource_locationanddescription_string',
                  'id' : 'awe0fbce0a',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise008 = PersistenceManager.initCollection( resource008 );


            var resource009 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'assetLocMeterComplexResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'assetLocMeterComplexResource',
                  'id' : 'aw83a20bf2',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi_wm:assetnum,spi_wm:location,spi_wm:dorollover,spi_wm:isdelta,spi_wm:inspector,spi_wm:newreading,spi_wm:newreadingdate,spi_wm:metername,spi_wm:metertype,spi_wm:readingtype,spi_wm:lastreading,spi_wm:lastreadingdate,spi_wm:remarks').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'assetnum',
                  'index' : true,
                  'artifactId' : 'assetLocMeterComplexResource_assetnum_spi_wmassetnum',
                  'maxSize' : 25,
                  'id' : 'awe14875fa',
                  'key' : '1',
                  'local' : false,
                  'remoteName' : 'spi_wm:assetnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'location',
                  'index' : true,
                  'artifactId' : 'assetLocMeterComplexResource_location_spi_wmlocation',
                  'maxSize' : 12,
                  'id' : 'aw3f1f7909',
                  'key' : '2',
                  'local' : false,
                  'remoteName' : 'spi_wm:location',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'boolean',
                  'name' : 'dorollover',
                  'index' : false,
                  'artifactId' : 'assetLocMeterComplexResource_dorollover_spi_wmdorollover',
                  'id' : 'aw9eff58a0',
                  'local' : false,
                  'remoteName' : 'spi_wm:dorollover',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'boolean',
                  'name' : 'isdelta',
                  'index' : false,
                  'artifactId' : 'assetLocMeterComplexResource_isdelta_spi_wmisdelta',
                  'id' : 'aw42916b3d',
                  'local' : false,
                  'remoteName' : 'spi_wm:isdelta',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'inspector',
                  'index' : false,
                  'artifactId' : 'assetLocMeterComplexResource_inspector_spi_wminspector',
                  'maxSize' : 30,
                  'id' : 'aw22527e5',
                  'local' : false,
                  'remoteName' : 'spi_wm:inspector',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'newreading',
                  'index' : false,
                  'artifactId' : 'assetLocMeterComplexResource_newreading_spi_wmnewreading',
                  'maxSize' : 18,
                  'id' : 'aw4c46102d',
                  'local' : false,
                  'remoteName' : 'spi_wm:newreading',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'newreadingdate',
                  'index' : false,
                  'artifactId' : 'assetLocMeterComplexResource_newreadingdate_spi_wmnewreadingdate',
                  'id' : 'aw2cb1c409',
                  'local' : false,
                  'remoteName' : 'spi_wm:newreadingdate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'metername',
                  'index' : false,
                  'artifactId' : 'assetLocMeterComplexResource_metername_spi_wmmetername',
                  'maxSize' : 10,
                  'id' : 'aw715982d6',
                  'key' : '3',
                  'local' : false,
                  'remoteName' : 'spi_wm:metername',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'metertype',
                  'index' : false,
                  'artifactId' : 'assetLocMeterComplexResource_metertype_spi_wmmetertype',
                  'maxSize' : 25,
                  'id' : 'awd39c159e',
                  'local' : false,
                  'remoteName' : 'spi_wm:metertype',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'readingtype',
                  'index' : false,
                  'artifactId' : 'assetLocMeterComplexResource_readingtype_spi_wmreadingtype',
                  'maxSize' : 10,
                  'id' : 'aw2da7a206',
                  'local' : false,
                  'remoteName' : 'spi_wm:readingtype',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'lastreading',
                  'index' : false,
                  'artifactId' : 'assetLocMeterComplexResource_lastreading_spi_wmlastreading',
                  'maxSize' : 18,
                  'id' : 'awf4220bb',
                  'local' : false,
                  'remoteName' : 'spi_wm:lastreading',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'lastreadingdate',
                  'index' : false,
                  'artifactId' : 'assetLocMeterComplexResource_lastreadingdate_spi_wmlastreadingdate',
                  'id' : 'aw2cba3e99',
                  'local' : false,
                  'remoteName' : 'spi_wm:lastreadingdate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'remarks',
                  'index' : false,
                  'artifactId' : 'assetLocMeterComplexResource_remarks_spi_wmremarks',
                  'maxSize' : 50,
                  'id' : 'aw2eb4b5c6',
                  'local' : false,
                  'remoteName' : 'spi_wm:remarks',
               });
            var resourcePromise009 = PersistenceManager.initCollection( resource009 );


            var resource010 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'assetMeters',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'assetMeters',
                  'id' : 'aw32f18705',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,spi:siteid,spi:active,spi:dorollover,spi:rollover,spi:isdelta,spi:inspector,spi:newreading,spi:newreadingdate,spi:readingtype,spi:lastreading,spi:lastreadingdate,spi:remarks,spi:meter{spi:domainid,dcterms:title,spi:metertype,oslc:shortTitle},spi:asset{dcterms:title,oslc:shortTitle}').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : true,
                  'artifactId' : 'assetMeters_identifier_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awf5c95834',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'referenceResource' : 'additionalasset',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'name' : 'assetnum',
                  'index' : true,
                  'artifactId' : 'assetMeters_assetnum_spiassetoslcshortTitle',
                  'maxSize' : 25,
                  'id' : 'aw40476897',
                  'local' : false,
                  'remoteName' : 'spi:asset',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'dcterms:title',
                  'dataType' : 'reference',
                  'referenceResource' : 'assetMeters',
                  'name' : 'assetnumdesc',
                  'index' : false,
                  'artifactId' : 'assetMeters_assetnumdesc_spiassetdctermstitle',
                  'maxSize' : 100,
                  'id' : 'aw5d6685a9',
                  'local' : false,
                  'remoteName' : 'spi:asset',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : true,
                  'artifactId' : 'assetMeters_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'awa2399ed2',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'active',
                  'index' : true,
                  'artifactId' : 'assetMeters_active_spiactive',
                  'id' : 'aw36e090d2',
                  'local' : false,
                  'remoteName' : 'spi:active',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'dorollover',
                  'index' : false,
                  'artifactId' : 'assetMeters_dorollover_spidorollover',
                  'id' : 'aw36305853',
                  'local' : false,
                  'remoteName' : 'spi:dorollover',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'rollover',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'assetMeters_rollover_spirollover',
                  'id' : 'aw8de4a1bd',
                  'local' : false,
                  'remoteName' : 'spi:rollover',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'isdelta',
                  'index' : false,
                  'artifactId' : 'assetMeters_isdelta_spiisdelta',
                  'id' : 'aw484f0076',
                  'local' : false,
                  'remoteName' : 'spi:isdelta',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'inspector',
                  'index' : false,
                  'artifactId' : 'assetMeters_inspector_spiinspector',
                  'maxSize' : 30,
                  'id' : 'aw4f2ebfa2',
                  'local' : false,
                  'remoteName' : 'spi:inspector',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'newreading',
                  'index' : false,
                  'artifactId' : 'assetMeters_newreading_spinewreading',
                  'maxSize' : 18,
                  'id' : 'aweb10df0e',
                  'local' : false,
                  'remoteName' : 'spi:newreading',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'newreadingdate',
                  'index' : false,
                  'artifactId' : 'assetMeters_newreadingdate_spinewreadingdate',
                  'id' : 'awb0886954',
                  'local' : false,
                  'remoteName' : 'spi:newreadingdate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'assetMeters',
                  'name' : 'metername',
                  'index' : true,
                  'artifactId' : 'assetMeters_metername_spimeteroslcshortTitle',
                  'maxSize' : 10,
                  'id' : 'awf2431d13',
                  'local' : false,
                  'remoteName' : 'spi:meter',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'dcterms:title',
                  'dataType' : 'reference',
                  'referenceResource' : 'assetMeters',
                  'name' : 'meterdesc',
                  'index' : false,
                  'artifactId' : 'assetMeters_meterdesc_spimeterdctermstitle',
                  'maxSize' : 100,
                  'id' : 'awf7e9fa2d',
                  'local' : false,
                  'remoteName' : 'spi:meter',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi:metertype',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'assetMeters',
                  'name' : 'metertype',
                  'index' : false,
                  'artifactId' : 'assetMeters_metertype_spimeterspimetertype',
                  'maxSize' : 25,
                  'id' : 'awdbbdd99e',
                  'local' : false,
                  'remoteName' : 'spi:meter',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi:domainid',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'assetMeters',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'assetMeters_domainid_spimeterspidomainid',
                  'maxSize' : 18,
                  'id' : 'aw7d0ecd41',
                  'local' : false,
                  'remoteName' : 'spi:meter',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'readingtype',
                  'index' : false,
                  'artifactId' : 'assetMeters_readingtype_spireadingtype',
                  'maxSize' : 10,
                  'id' : 'awfd70bd5a',
                  'local' : false,
                  'remoteName' : 'spi:readingtype',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'lastreading',
                  'index' : false,
                  'artifactId' : 'assetMeters_lastreading_spilastreading',
                  'maxSize' : 18,
                  'id' : 'aw83b5ee51',
                  'local' : false,
                  'remoteName' : 'spi:lastreading',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'lastreadingdate',
                  'index' : false,
                  'artifactId' : 'assetMeters_lastreadingdate_spilastreadingdate',
                  'id' : 'aw97a99516',
                  'local' : false,
                  'remoteName' : 'spi:lastreadingdate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'remarks',
                  'index' : false,
                  'artifactId' : 'assetMeters_remarks_spiremarks',
                  'maxSize' : 50,
                  'id' : 'awb85b2e90',
                  'local' : false,
                  'remoteName' : 'spi:remarks',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'localLastReading',
                  'index' : false,
                  'artifactId' : 'assetMeters_localLastReading_string',
                  'id' : 'aw7090d09e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'localLastReadingDate',
                  'index' : false,
                  'artifactId' : 'assetMeters_localLastReadingDate_dateTime',
                  'id' : 'awcd1f91',
                  'persistent' : true,
                  'local' : true,
               }).
               setCreationFactories([
                     {name:'assetMeterResourceCF', creationString:'\/oslc\/os\/oslcassetmeter' }
               ]).
               setQueryBases([
                     {name:'assetMeterResourceQB', queryString:'\/oslc\/os\/oslcassetmeter', defaultForSearch: true, queryLabel:'' }
               ]);
            var resourcePromise010 = PersistenceManager.initCollection( resource010 );


            var resource011 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'locationMeters',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'locationMeters',
                  'id' : 'awd1f6ec67',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,spi:siteid,spi:active,spi:dorollover,spi:rollover,spi:isdelta,spi:inspector,spi:newreading,spi:newreadingdate,spi:readingtype,spi:lastreading,spi:lastreadingdate,spi:remarks,spi:meter{spi:domainid,dcterms:title,spi:metertype,oslc:shortTitle},spi:location{dcterms:title,oslc:shortTitle}').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : true,
                  'artifactId' : 'locationMeters_identifier_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awfe6e7724',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'referenceResource' : 'additionallocations',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'name' : 'location',
                  'index' : true,
                  'artifactId' : 'locationMeters_location_spilocationoslcshortTitle',
                  'maxSize' : 12,
                  'id' : 'aw5fe9cf6',
                  'local' : false,
                  'remoteName' : 'spi:location',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'dcterms:title',
                  'dataType' : 'reference',
                  'referenceResource' : 'locationMeters',
                  'name' : 'locationdesc',
                  'index' : false,
                  'artifactId' : 'locationMeters_locationdesc_spilocationdctermstitle',
                  'maxSize' : 100,
                  'id' : 'aw4c12076d',
                  'local' : false,
                  'remoteName' : 'spi:location',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : true,
                  'artifactId' : 'locationMeters_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'aw8eb4b52b',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'active',
                  'index' : true,
                  'artifactId' : 'locationMeters_active_spiactive',
                  'id' : 'aw1a6dbb2b',
                  'local' : false,
                  'remoteName' : 'spi:active',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'dorollover',
                  'index' : false,
                  'artifactId' : 'locationMeters_dorollover_spidorollover',
                  'id' : 'awbdb1ff57',
                  'local' : false,
                  'remoteName' : 'spi:dorollover',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'rollover',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'locationMeters_rollover_spirollover',
                  'id' : 'awfe67db74',
                  'local' : false,
                  'remoteName' : 'spi:rollover',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'isdelta',
                  'index' : false,
                  'artifactId' : 'locationMeters_isdelta_spiisdelta',
                  'id' : 'aw218d8f4f',
                  'local' : false,
                  'remoteName' : 'spi:isdelta',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'inspector',
                  'index' : false,
                  'artifactId' : 'locationMeters_inspector_spiinspector',
                  'maxSize' : 30,
                  'id' : 'awe5c63804',
                  'local' : false,
                  'remoteName' : 'spi:inspector',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'newreading',
                  'index' : false,
                  'artifactId' : 'locationMeters_newreading_spinewreading',
                  'maxSize' : 18,
                  'id' : 'aw6091780a',
                  'local' : false,
                  'remoteName' : 'spi:newreading',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'newreadingdate',
                  'index' : false,
                  'artifactId' : 'locationMeters_newreadingdate_spinewreadingdate',
                  'id' : 'awa514ccb0',
                  'local' : false,
                  'remoteName' : 'spi:newreadingdate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'locationMeters',
                  'name' : 'metername',
                  'index' : true,
                  'artifactId' : 'locationMeters_metername_spimeteroslcshortTitle',
                  'maxSize' : 10,
                  'id' : 'awe7dfb8f7',
                  'local' : false,
                  'remoteName' : 'spi:meter',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'dcterms:title',
                  'dataType' : 'reference',
                  'referenceResource' : 'locationMeters',
                  'name' : 'meterdesc',
                  'index' : false,
                  'artifactId' : 'locationMeters_meterdesc_spimeterdctermstitle',
                  'maxSize' : 100,
                  'id' : 'aw16fade82',
                  'local' : false,
                  'remoteName' : 'spi:meter',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi:metertype',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'locationMeters',
                  'name' : 'metertype',
                  'index' : false,
                  'artifactId' : 'locationMeters_metertype_spimeterspimetertype',
                  'maxSize' : 25,
                  'id' : 'aw3aaefd31',
                  'local' : false,
                  'remoteName' : 'spi:meter',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi:domainid',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'locationMeters',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'locationMeters_domainid_spimeterspidomainid',
                  'maxSize' : 18,
                  'id' : 'aw76a9e251',
                  'local' : false,
                  'remoteName' : 'spi:meter',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'readingtype',
                  'index' : false,
                  'artifactId' : 'locationMeters_readingtype_spireadingtype',
                  'maxSize' : 10,
                  'id' : 'awd1aec594',
                  'local' : false,
                  'remoteName' : 'spi:readingtype',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'lastreading',
                  'index' : false,
                  'artifactId' : 'locationMeters_lastreading_spilastreading',
                  'maxSize' : 18,
                  'id' : 'awaf6b969f',
                  'local' : false,
                  'remoteName' : 'spi:lastreading',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'lastreadingdate',
                  'index' : false,
                  'artifactId' : 'locationMeters_lastreadingdate_spilastreadingdate',
                  'id' : 'awb07e105',
                  'local' : false,
                  'remoteName' : 'spi:lastreadingdate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'remarks',
                  'index' : false,
                  'artifactId' : 'locationMeters_remarks_spiremarks',
                  'maxSize' : 50,
                  'id' : 'awd199a1a9',
                  'local' : false,
                  'remoteName' : 'spi:remarks',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'localLastReading',
                  'index' : false,
                  'artifactId' : 'locationMeters_localLastReading_string',
                  'id' : 'aw4f8f3ec4',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'localLastReadingDate',
                  'index' : false,
                  'artifactId' : 'locationMeters_localLastReadingDate_dateTime',
                  'id' : 'aw1d71a8da',
                  'persistent' : true,
                  'local' : true,
               }).
               setCreationFactories([
                     {name:'locationMeterResourceCF', creationString:'\/oslc\/os\/oslclocationmeter' }
               ]).
               setQueryBases([
                     {name:'locationMeterResourceQB', queryString:'\/oslc\/os\/oslclocationmeter', defaultForSearch: true, queryLabel:'' }
               ]);
            var resourcePromise011 = PersistenceManager.initCollection( resource011 );


            var resource012 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'tempAssetMeter',
                  'resourceName' : 'tempAssetMeter',
                  'id' : 'awf32dee1e',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'assetnum',
                  'index' : false,
                  'artifactId' : 'tempAssetMeter_assetnum_string',
                  'id' : 'aw47131c',
                  'persistent' : true,
                  'key' : '1',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'assetnumdesc',
                  'index' : false,
                  'artifactId' : 'tempAssetMeter_assetnumdesc_string',
                  'id' : 'aw927bd44e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'metername',
                  'index' : false,
                  'artifactId' : 'tempAssetMeter_metername_string',
                  'id' : 'awad1a12fa',
                  'persistent' : true,
                  'key' : '2',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'meterdesc',
                  'index' : false,
                  'artifactId' : 'tempAssetMeter_meterdesc_string',
                  'id' : 'awe4337a60',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'metertype',
                  'index' : false,
                  'artifactId' : 'tempAssetMeter_metertype_string',
                  'id' : 'aw88b5ea8f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'tempAssetMeter_domainid_string',
                  'id' : 'aw2b9b241',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'newreading',
                  'index' : false,
                  'artifactId' : 'tempAssetMeter_newreading_string',
                  'maxSize' : 18,
                  'id' : 'awc365b34b',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'newreadinglookup',
                  'index' : false,
                  'artifactId' : 'tempAssetMeter_newreadinglookup_string',
                  'id' : 'aw6ed3a492',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'newreadingdate',
                  'index' : false,
                  'artifactId' : 'tempAssetMeter_newreadingdate_dateTime',
                  'id' : 'aw597272b9',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'readingtype',
                  'index' : false,
                  'artifactId' : 'tempAssetMeter_readingtype_string',
                  'id' : 'awce07d112',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'remarks',
                  'index' : false,
                  'artifactId' : 'tempAssetMeter_remarks_string',
                  'maxSize' : 50,
                  'id' : 'aw6c69ed16',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'dorollover',
                  'index' : false,
                  'artifactId' : 'tempAssetMeter_dorollover_boolean',
                  'id' : 'aw9d110d4a',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'rollover',
                  'index' : false,
                  'artifactId' : 'tempAssetMeter_rollover_string',
                  'id' : 'awa734e170',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'isdelta',
                  'index' : false,
                  'artifactId' : 'tempAssetMeter_isdelta_boolean',
                  'id' : 'awf9cfd189',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'lastreading',
                  'index' : false,
                  'artifactId' : 'tempAssetMeter_lastreading_string',
                  'id' : 'aw2165fa81',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'lastreadingdate',
                  'index' : false,
                  'artifactId' : 'tempAssetMeter_lastreadingdate_dateTime',
                  'id' : 'aw1684719d',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'inspector',
                  'index' : false,
                  'artifactId' : 'tempAssetMeter_inspector_string',
                  'maxSize' : 30,
                  'id' : 'aw412154e6',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise012 = PersistenceManager.initCollection( resource012 );


            var resource013 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'tempLocationMeter',
                  'resourceName' : 'tempLocationMeter',
                  'id' : 'aw37ff27bc',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'location',
                  'index' : false,
                  'artifactId' : 'tempLocationMeter_location_string',
                  'id' : 'awf496943a',
                  'persistent' : true,
                  'key' : '1',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'locationdesc',
                  'index' : false,
                  'artifactId' : 'tempLocationMeter_locationdesc_string',
                  'id' : 'awd1abebf2',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'metername',
                  'index' : false,
                  'artifactId' : 'tempLocationMeter_metername_string',
                  'id' : 'awf10f5cef',
                  'persistent' : true,
                  'key' : '2',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'meterdesc',
                  'index' : false,
                  'artifactId' : 'tempLocationMeter_meterdesc_string',
                  'id' : 'awb8263475',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'metertype',
                  'index' : false,
                  'artifactId' : 'tempLocationMeter_metertype_string',
                  'id' : 'awd4a0a49a',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'tempLocationMeter_domainid_string',
                  'id' : 'awa49da3fa',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'newreading',
                  'index' : false,
                  'artifactId' : 'tempLocationMeter_newreading_string',
                  'maxSize' : 18,
                  'id' : 'awaee442ee',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'newreadinglookup',
                  'index' : false,
                  'artifactId' : 'tempLocationMeter_newreadinglookup_string',
                  'id' : 'aw47bcd40f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'newreadingdate',
                  'index' : false,
                  'artifactId' : 'tempLocationMeter_newreadingdate_dateTime',
                  'id' : 'aw701d0224',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'readingtype',
                  'index' : false,
                  'artifactId' : 'tempLocationMeter_readingtype_string',
                  'id' : 'aw68d60784',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'remarks',
                  'index' : false,
                  'artifactId' : 'tempLocationMeter_remarks_string',
                  'maxSize' : 50,
                  'id' : 'awf42f31b3',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'dorollover',
                  'index' : false,
                  'artifactId' : 'tempLocationMeter_dorollover_boolean',
                  'id' : 'aw3bc0dbdc',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'rollover',
                  'index' : false,
                  'artifactId' : 'tempLocationMeter_rollover_string',
                  'id' : 'aw110f0cb',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'isdelta',
                  'index' : false,
                  'artifactId' : 'tempLocationMeter_isdelta_boolean',
                  'id' : 'aw5febc032',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'lastreading',
                  'index' : false,
                  'artifactId' : 'tempLocationMeter_lastreading_string',
                  'id' : 'aw87b42c17',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'lastreadingdate',
                  'index' : false,
                  'artifactId' : 'tempLocationMeter_lastreadingdate_dateTime',
                  'id' : 'aw9813f114',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'inspector',
                  'index' : false,
                  'artifactId' : 'tempLocationMeter_inspector_string',
                  'maxSize' : 30,
                  'id' : 'aw1d341af3',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise013 = PersistenceManager.initCollection( resource013 );


            var resource014 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'tempListViewAssetMeter',
                  'resourceName' : 'tempListViewAssetMeter',
                  'id' : 'aw6587f298',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'assetnum',
                  'index' : false,
                  'artifactId' : 'tempListViewAssetMeter_assetnum_string',
                  'id' : 'aw2614b016',
                  'persistent' : true,
                  'key' : '1',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'assetnumdesc',
                  'index' : false,
                  'artifactId' : 'tempListViewAssetMeter_assetnumdesc_string',
                  'id' : 'aw65635c79',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'metername',
                  'index' : false,
                  'artifactId' : 'tempListViewAssetMeter_metername_string',
                  'id' : 'aw4de9a847',
                  'persistent' : true,
                  'key' : '2',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'meterdesc',
                  'index' : false,
                  'artifactId' : 'tempListViewAssetMeter_meterdesc_string',
                  'id' : 'aw4c0c0dd',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'metertype',
                  'index' : false,
                  'artifactId' : 'tempListViewAssetMeter_metertype_string',
                  'id' : 'aw68465032',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'tempListViewAssetMeter_domainid_string',
                  'id' : 'aw24ea114b',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'newreading',
                  'index' : false,
                  'artifactId' : 'tempListViewAssetMeter_newreading_string',
                  'maxSize' : 18,
                  'id' : 'aw76558fc0',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'newreadinglookup',
                  'index' : false,
                  'artifactId' : 'tempListViewAssetMeter_newreadinglookup_string',
                  'id' : 'aw4dcbd154',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'newreadingdate',
                  'index' : false,
                  'artifactId' : 'tempListViewAssetMeter_newreadingdate_dateTime',
                  'id' : 'aw7a6a077f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'readingtype',
                  'index' : false,
                  'artifactId' : 'tempListViewAssetMeter_readingtype_string',
                  'id' : 'awb4d8bb86',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'remarks',
                  'index' : false,
                  'artifactId' : 'tempListViewAssetMeter_remarks_string',
                  'maxSize' : 50,
                  'id' : 'awe6fa4b26',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'dorollover',
                  'index' : false,
                  'artifactId' : 'tempListViewAssetMeter_dorollover_boolean',
                  'id' : 'awe7ce67de',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'rollover',
                  'index' : false,
                  'artifactId' : 'tempListViewAssetMeter_rollover_string',
                  'id' : 'aw8167427a',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'isdelta',
                  'index' : false,
                  'artifactId' : 'tempListViewAssetMeter_isdelta_boolean',
                  'id' : 'awdf9c7283',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'lastreading',
                  'index' : false,
                  'artifactId' : 'tempListViewAssetMeter_lastreading_string',
                  'id' : 'aw5bba9015',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'lastreadingdate',
                  'index' : false,
                  'artifactId' : 'tempListViewAssetMeter_lastreadingdate_dateTime',
                  'id' : 'aw64a00e6d',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'inspector',
                  'index' : false,
                  'artifactId' : 'tempListViewAssetMeter_inspector_string',
                  'maxSize' : 30,
                  'id' : 'awa1d2ee5b',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise014 = PersistenceManager.initCollection( resource014 );


            var resource015 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'tempListViewLocationMeter',
                  'resourceName' : 'tempListViewLocationMeter',
                  'id' : 'aw23357b3',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'location',
                  'index' : false,
                  'artifactId' : 'tempListViewLocationMeter_location_string',
                  'id' : 'aw8e49feae',
                  'persistent' : true,
                  'key' : '1',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'locationdesc',
                  'index' : false,
                  'artifactId' : 'tempListViewLocationMeter_locationdesc_string',
                  'id' : 'aw10b99205',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'metername',
                  'index' : false,
                  'artifactId' : 'tempListViewLocationMeter_metername_string',
                  'id' : 'aw617d4d8',
                  'persistent' : true,
                  'key' : '2',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'meterdesc',
                  'index' : false,
                  'artifactId' : 'tempListViewLocationMeter_meterdesc_string',
                  'id' : 'aw4f3ebc42',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'metertype',
                  'index' : false,
                  'artifactId' : 'tempListViewLocationMeter_metertype_string',
                  'id' : 'aw23b82cad',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'tempListViewLocationMeter_domainid_string',
                  'id' : 'awde42c96e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'newreading',
                  'index' : false,
                  'artifactId' : 'tempListViewLocationMeter_newreading_string',
                  'maxSize' : 18,
                  'id' : 'aw16aeff69',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'newreadinglookup',
                  'index' : false,
                  'artifactId' : 'tempListViewLocationMeter_newreadinglookup_string',
                  'id' : 'aw93ba2b3b',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'newreadingdate',
                  'index' : false,
                  'artifactId' : 'tempListViewLocationMeter_newreadingdate_dateTime',
                  'id' : 'awa41bfd10',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'readingtype',
                  'index' : false,
                  'artifactId' : 'tempListViewLocationMeter_readingtype_string',
                  'id' : 'aw1bb25bba',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'remarks',
                  'index' : false,
                  'artifactId' : 'tempListViewLocationMeter_remarks_string',
                  'maxSize' : 50,
                  'id' : 'aw411f0d38',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'dorollover',
                  'index' : false,
                  'artifactId' : 'tempListViewLocationMeter_dorollover_boolean',
                  'id' : 'aw48a487e2',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'rollover',
                  'index' : false,
                  'artifactId' : 'tempListViewLocationMeter_rollover_string',
                  'id' : 'aw7bcf9a5f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'isdelta',
                  'index' : false,
                  'artifactId' : 'tempListViewLocationMeter_isdelta_boolean',
                  'id' : 'aw2534aaa6',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'lastreading',
                  'index' : false,
                  'artifactId' : 'tempListViewLocationMeter_lastreading_string',
                  'id' : 'awf4d07029',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'lastreadingdate',
                  'index' : false,
                  'artifactId' : 'tempListViewLocationMeter_lastreadingdate_dateTime',
                  'id' : 'awb973035e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'inspector',
                  'index' : false,
                  'artifactId' : 'tempListViewLocationMeter_inspector_string',
                  'maxSize' : 30,
                  'id' : 'awea2c92c4',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise015 = PersistenceManager.initCollection( resource015 );


            var resource016 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'woAssetMeters',
                  'resourceName' : 'woAssetMeters',
                  'id' : 'aw4ddf7619',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'assetnum',
                  'index' : false,
                  'artifactId' : 'woAssetMeters_assetnum_string',
                  'id' : 'awed551498',
                  'persistent' : true,
                  'key' : '1',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'assetnumdesc',
                  'index' : false,
                  'artifactId' : 'woAssetMeters_assetnumdesc_string',
                  'id' : 'aw53400db1',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'metername',
                  'index' : false,
                  'artifactId' : 'woAssetMeters_metername_string',
                  'id' : 'aw472247c4',
                  'persistent' : true,
                  'key' : '2',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'meterdesc',
                  'index' : false,
                  'artifactId' : 'woAssetMeters_meterdesc_string',
                  'id' : 'awe0b2f5e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'metertype',
                  'index' : false,
                  'artifactId' : 'woAssetMeters_metertype_string',
                  'id' : 'aw628dbfb1',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'woAssetMeters_domainid_string',
                  'id' : 'awefabb5c5',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'newreading',
                  'index' : false,
                  'artifactId' : 'woAssetMeters_newreading_string',
                  'maxSize' : 18,
                  'id' : 'aw2ee96b5',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'newreadinglookup',
                  'index' : false,
                  'artifactId' : 'woAssetMeters_newreadinglookup_string',
                  'id' : 'awe25fb1c2',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'newreadingdate',
                  'index' : false,
                  'artifactId' : 'woAssetMeters_newreadingdate_dateTime',
                  'id' : 'awd5fe67e9',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'readingtype',
                  'index' : false,
                  'artifactId' : 'woAssetMeters_readingtype_string',
                  'id' : 'aw94c3852c',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'remarks',
                  'index' : false,
                  'artifactId' : 'woAssetMeters_remarks_string',
                  'maxSize' : 50,
                  'id' : 'awc6ed4996',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'dorollover',
                  'index' : false,
                  'artifactId' : 'woAssetMeters_dorollover_boolean',
                  'id' : 'awc7d55974',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'rollover',
                  'index' : false,
                  'artifactId' : 'woAssetMeters_rollover_string',
                  'id' : 'aw4a26e6f4',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'isdelta',
                  'index' : false,
                  'artifactId' : 'woAssetMeters_isdelta_boolean',
                  'id' : 'aw14ddd60d',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'lastreading',
                  'index' : false,
                  'artifactId' : 'woAssetMeters_lastreading_string',
                  'id' : 'aw7ba1aebf',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'lastreadingdate',
                  'index' : false,
                  'artifactId' : 'woAssetMeters_lastreadingdate_dateTime',
                  'id' : 'aw7d63ac7c',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'inspector',
                  'index' : false,
                  'artifactId' : 'woAssetMeters_inspector_string',
                  'maxSize' : 30,
                  'id' : 'awab1901d8',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise016 = PersistenceManager.initCollection( resource016 );


            var resource017 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'woFollowUpInfo',
                  'resourceName' : 'woFollowUpInfo',
                  'id' : 'awd50eedc5',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'boolean',
                  'name' : 'isFollowUpSetLoc',
                  'index' : false,
                  'artifactId' : 'woFollowUpInfo_isFollowUpSetLoc_boolean',
                  'id' : 'aw1249a8fa',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise017 = PersistenceManager.initCollection( resource017 );


            var resource018 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'woLocationMeters',
                  'resourceName' : 'woLocationMeters',
                  'id' : 'aw15bb6b3f',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'location',
                  'index' : false,
                  'artifactId' : 'woLocationMeters_location_string',
                  'id' : 'aw859a99f1',
                  'persistent' : true,
                  'key' : '1',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'locationdesc',
                  'index' : false,
                  'artifactId' : 'woLocationMeters_locationdesc_string',
                  'id' : 'awf3881f00',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'metername',
                  'index' : false,
                  'artifactId' : 'woLocationMeters_metername_string',
                  'id' : 'awfdc84bda',
                  'persistent' : true,
                  'key' : '2',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'meterdesc',
                  'index' : false,
                  'artifactId' : 'woLocationMeters_meterdesc_string',
                  'id' : 'awb4e12340',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'metertype',
                  'index' : false,
                  'artifactId' : 'woLocationMeters_metertype_string',
                  'id' : 'awd867b3af',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'woLocationMeters_domainid_string',
                  'id' : 'awd591ae31',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'newreading',
                  'index' : false,
                  'artifactId' : 'woLocationMeters_newreading_string',
                  'maxSize' : 18,
                  'id' : 'awf85b41da',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'newreadinglookup',
                  'index' : false,
                  'artifactId' : 'woLocationMeters_newreadinglookup_string',
                  'id' : 'awb2d7e7aa',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'newreadingdate',
                  'index' : false,
                  'artifactId' : 'woLocationMeters_newreadingdate_dateTime',
                  'id' : 'aw85763181',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'readingtype',
                  'index' : false,
                  'artifactId' : 'woLocationMeters_readingtype_string',
                  'id' : 'aw49344c32',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'remarks',
                  'index' : false,
                  'artifactId' : 'woLocationMeters_remarks_string',
                  'maxSize' : 50,
                  'id' : 'aw49a773f7',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'dorollover',
                  'index' : false,
                  'artifactId' : 'woLocationMeters_dorollover_boolean',
                  'id' : 'aw1a22906a',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'rollover',
                  'index' : false,
                  'artifactId' : 'woLocationMeters_rollover_string',
                  'id' : 'aw701cfd00',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'isdelta',
                  'index' : false,
                  'artifactId' : 'woLocationMeters_isdelta_boolean',
                  'id' : 'aw2ee7cdf9',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'lastreading',
                  'index' : false,
                  'artifactId' : 'woLocationMeters_lastreading_string',
                  'id' : 'awa65667a1',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'lastreadingdate',
                  'index' : false,
                  'artifactId' : 'woLocationMeters_lastreadingdate_dateTime',
                  'id' : 'aw3e5acd40',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'inspector',
                  'index' : false,
                  'artifactId' : 'woLocationMeters_inspector_string',
                  'maxSize' : 30,
                  'id' : 'aw11f30dc6',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise018 = PersistenceManager.initCollection( resource018 );


            var resource019 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'totalWOAssetMeters',
                  'resourceName' : 'totalWOAssetMeters',
                  'id' : 'awafe237df',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'assetnum',
                  'index' : false,
                  'artifactId' : 'totalWOAssetMeters_assetnum_string',
                  'id' : 'aw6daeb80a',
                  'persistent' : true,
                  'key' : '1',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'assetnumdesc',
                  'index' : false,
                  'artifactId' : 'totalWOAssetMeters_assetnumdesc_string',
                  'id' : 'aw8e9b3bcc',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'metername',
                  'index' : false,
                  'artifactId' : 'totalWOAssetMeters_metername_string',
                  'id' : 'aw59a34e00',
                  'persistent' : true,
                  'key' : '2',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'meterdesc',
                  'index' : false,
                  'artifactId' : 'totalWOAssetMeters_meterdesc_string',
                  'id' : 'aw108a269a',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'metertype',
                  'index' : false,
                  'artifactId' : 'totalWOAssetMeters_metertype_string',
                  'id' : 'aw7c0cb675',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'totalWOAssetMeters_domainid_string',
                  'id' : 'aw6f501957',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'newreading',
                  'index' : false,
                  'artifactId' : 'totalWOAssetMeters_newreading_string',
                  'maxSize' : 18,
                  'id' : 'aw9ef91115',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'newreadinglookup',
                  'index' : false,
                  'artifactId' : 'totalWOAssetMeters_newreadinglookup_string',
                  'id' : 'awc142e21c',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'newreadingdate',
                  'index' : false,
                  'artifactId' : 'totalWOAssetMeters_newreadingdate_dateTime',
                  'id' : 'awf6e33437',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'readingtype',
                  'index' : false,
                  'artifactId' : 'totalWOAssetMeters_readingtype_string',
                  'id' : 'aw42893143',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'remarks',
                  'index' : false,
                  'artifactId' : 'totalWOAssetMeters_remarks_string',
                  'maxSize' : 50,
                  'id' : 'aw58261003',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'dorollover',
                  'index' : false,
                  'artifactId' : 'totalWOAssetMeters_dorollover_boolean',
                  'id' : 'aw119fed1b',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'rollover',
                  'index' : false,
                  'artifactId' : 'totalWOAssetMeters_rollover_string',
                  'id' : 'awcadd4a66',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'isdelta',
                  'index' : false,
                  'artifactId' : 'totalWOAssetMeters_isdelta_boolean',
                  'id' : 'aw94267a9f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'lastreading',
                  'index' : false,
                  'artifactId' : 'totalWOAssetMeters_lastreading_string',
                  'id' : 'awadeb1ad0',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'lastreadingdate',
                  'index' : false,
                  'artifactId' : 'totalWOAssetMeters_lastreadingdate_dateTime',
                  'id' : 'aw1c2b4efc',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'inspector',
                  'index' : false,
                  'artifactId' : 'totalWOAssetMeters_inspector_string',
                  'maxSize' : 30,
                  'id' : 'awb598081c',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise019 = PersistenceManager.initCollection( resource019 );


            var resource020 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'totalWOLocationMeters',
                  'resourceName' : 'totalWOLocationMeters',
                  'id' : 'aw3193b37a',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'location',
                  'index' : false,
                  'artifactId' : 'totalWOLocationMeters_location_string',
                  'id' : 'aw53d02d9e',
                  'persistent' : true,
                  'key' : '1',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'locationdesc',
                  'index' : false,
                  'artifactId' : 'totalWOLocationMeters_locationdesc_string',
                  'id' : 'aw37bc7ef7',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'metername',
                  'index' : false,
                  'artifactId' : 'totalWOLocationMeters_metername_string',
                  'id' : 'aw20137da7',
                  'persistent' : true,
                  'key' : '2',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'meterdesc',
                  'index' : false,
                  'artifactId' : 'totalWOLocationMeters_meterdesc_string',
                  'id' : 'aw693a153d',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'metertype',
                  'index' : false,
                  'artifactId' : 'totalWOLocationMeters_metertype_string',
                  'id' : 'aw5bc85d2',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'totalWOLocationMeters_domainid_string',
                  'id' : 'aw3db1a5e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'newreading',
                  'index' : false,
                  'artifactId' : 'totalWOLocationMeters_newreading_string',
                  'maxSize' : 18,
                  'id' : 'awd632976d',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'newreadinglookup',
                  'index' : false,
                  'artifactId' : 'totalWOLocationMeters_newreadinglookup_string',
                  'id' : 'awc7509dfd',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'newreadingdate',
                  'index' : false,
                  'artifactId' : 'totalWOLocationMeters_newreadingdate_dateTime',
                  'id' : 'awf0f14bd6',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'readingtype',
                  'index' : false,
                  'artifactId' : 'totalWOLocationMeters_readingtype_string',
                  'id' : 'aw1c1f03cb',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'remarks',
                  'index' : false,
                  'artifactId' : 'totalWOLocationMeters_remarks_string',
                  'maxSize' : 50,
                  'id' : 'awd5b0f457',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'dorollover',
                  'index' : false,
                  'artifactId' : 'totalWOLocationMeters_dorollover_boolean',
                  'id' : 'aw4f09df93',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'rollover',
                  'index' : false,
                  'artifactId' : 'totalWOLocationMeters_rollover_string',
                  'id' : 'awa656496f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'isdelta',
                  'index' : false,
                  'artifactId' : 'totalWOLocationMeters_isdelta_boolean',
                  'id' : 'awf8ad7996',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'lastreading',
                  'index' : false,
                  'artifactId' : 'totalWOLocationMeters_lastreading_string',
                  'id' : 'awf37d2858',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'lastreadingdate',
                  'index' : false,
                  'artifactId' : 'totalWOLocationMeters_lastreadingdate_dateTime',
                  'id' : 'awcb208e6d',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'inspector',
                  'index' : false,
                  'artifactId' : 'totalWOLocationMeters_inspector_string',
                  'maxSize' : 30,
                  'id' : 'awcc283bbb',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise020 = PersistenceManager.initCollection( resource020 );


            var resource021 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'woAssetLocMeterInfo',
                  'resourceName' : 'woAssetLocMeterInfo',
                  'id' : 'aw42a0948d',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'woAssetMeterCount',
                  'index' : false,
                  'artifactId' : 'woAssetLocMeterInfo_woAssetMeterCount_string',
                  'id' : 'aw9fb11de6',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'woLocationMeterCount',
                  'index' : false,
                  'artifactId' : 'woAssetLocMeterInfo_woLocationMeterCount_string',
                  'id' : 'awe4a05789',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'multiAssetlocMeterCount',
                  'index' : false,
                  'artifactId' : 'woAssetLocMeterInfo_multiAssetlocMeterCount_string',
                  'id' : 'aw3f6d368',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'taskAssetMeterCount',
                  'index' : false,
                  'artifactId' : 'woAssetLocMeterInfo_taskAssetMeterCount_string',
                  'id' : 'aw87cb601a',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'taskLocationMeterCount',
                  'index' : false,
                  'artifactId' : 'woAssetLocMeterInfo_taskLocationMeterCount_string',
                  'id' : 'aw723f42bc',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'totalWOAssetMeterCount',
                  'index' : false,
                  'artifactId' : 'woAssetLocMeterInfo_totalWOAssetMeterCount_string',
                  'id' : 'aw1e9c0424',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'totalWOLocationMeterCount',
                  'index' : false,
                  'artifactId' : 'woAssetLocMeterInfo_totalWOLocationMeterCount_string',
                  'id' : 'awa854e04b',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'totalWOMeterCount',
                  'index' : false,
                  'artifactId' : 'woAssetLocMeterInfo_totalWOMeterCount_string',
                  'id' : 'aw51778fb0',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'loadingAssetMeterCount',
                  'index' : false,
                  'artifactId' : 'woAssetLocMeterInfo_loadingAssetMeterCount_boolean',
                  'id' : 'awc28d477b',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'loadingLocationMeterCount',
                  'index' : false,
                  'artifactId' : 'woAssetLocMeterInfo_loadingLocationMeterCount_boolean',
                  'id' : 'awc8496f8',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'originatingAction',
                  'index' : false,
                  'artifactId' : 'woAssetLocMeterInfo_originatingAction_string',
                  'id' : 'awc22d4422',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise021 = PersistenceManager.initCollection( resource021 );


            var resource022 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'workLogResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'workLogResource',
                  'id' : 'awf7d69dd6',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi_wm:worklogid,spi_wm:createdate,spi_wm:createby,spi_wm:clientviewable,spi_wm:logtype,spi_wm:description,spi_wm:description_longdescription,spi_wm:anywhererefid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'workLogResource_worklogid_spi_wmworklogid',
                  'id' : 'aw264c1050',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi_wm:worklogid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'datetime',
                  'name' : 'createdate',
                  'index' : false,
                  'artifactId' : 'workLogResource_createdate_spi_wmcreatedate',
                  'id' : 'aw3bbad919',
                  'local' : false,
                  'remoteName' : 'spi_wm:createdate',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'createby',
                  'index' : false,
                  'artifactId' : 'workLogResource_createby_spi_wmcreateby',
                  'maxSize' : 30,
                  'id' : 'aw3ade9e2c',
                  'local' : false,
                  'remoteName' : 'spi_wm:createby',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'clientviewable',
                  'index' : false,
                  'artifactId' : 'workLogResource_clientviewable_spi_wmclientviewable',
                  'id' : 'aw374e4f1e',
                  'local' : false,
                  'remoteName' : 'spi_wm:clientviewable',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'logtype',
                  'index' : false,
                  'artifactId' : 'workLogResource_logtype_spi_wmlogtype',
                  'maxSize' : 16,
                  'id' : 'aw984f1a87',
                  'local' : false,
                  'remoteName' : 'spi_wm:logtype',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'summary',
                  'index' : false,
                  'artifactId' : 'workLogResource_summary_spi_wmdescription',
                  'maxSize' : 100,
                  'id' : 'awf5e69f87',
                  'local' : false,
                  'remoteName' : 'spi_wm:description',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'longaln',
                  'name' : 'details',
                  'index' : false,
                  'artifactId' : 'workLogResource_details_spi_wmdescription_longdescription',
                  'maxSize' : 32000,
                  'id' : 'awfdbdeea',
                  'local' : false,
                  'remoteName' : 'spi_wm:description_longdescription',
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'dontDiscard',
                  'index' : false,
                  'artifactId' : 'workLogResource_dontDiscard_boolean',
                  'id' : 'aw81cd5b30',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'anywhereRefId',
                  'index' : false,
                  'artifactId' : 'workLogResource_anywhereRefId_spi_wmanywhererefid',
                  'id' : 'awc03ee1d0',
                  'local' : false,
                  'remoteName' : 'spi_wm:anywhererefid',
               });
            var resourcePromise022 = PersistenceManager.initCollection( resource022 );


            var resource023 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'taskResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'taskResource',
                  'id' : 'aw2e4e5dd7',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
                  'classInstance' : TaskObject,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi_wm:taskid,dcterms:title,spi_wm:description_longdescription,spi:status,spi_wm:schedstart,spi_wm:parent,spi_wm:istask,spi_wm:statusdate,spi_wm:np_statusmemo,spi_wm:siteid,oslc:shortTitle,spi_wm:parentchgsstatus,spi:asset{spi:description_longdescription,dcterms:title,oslc:shortTitle},spi:location{spi:description_longdescription,dcterms:title,oslc:shortTitle}').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'taskid',
                  'index' : false,
                  'artifactId' : 'taskResource_taskid_spi_wmtaskid',
                  'id' : 'aw88e7e9a9',
                  'local' : false,
                  'remoteName' : 'spi_wm:taskid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'taskdescription',
                  'index' : false,
                  'artifactId' : 'taskResource_taskdescription_dctermstitle',
                  'maxSize' : 100,
                  'id' : 'aw47fcc3fb',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'longaln',
                  'name' : 'tasklongdesc',
                  'index' : false,
                  'artifactId' : 'taskResource_tasklongdesc_spi_wmdescription_longdescription',
                  'maxSize' : 32000,
                  'id' : 'aw379c057c',
                  'local' : false,
                  'remoteName' : 'spi_wm:description_longdescription',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'method' : 'statusChanged',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'status',
                  'index' : false,
                  'artifactId' : 'taskResource_status_spistatus',
                  'maxSize' : 16,
                  'id' : 'aw46a2cd15',
                  'local' : false,
                  'remoteName' : 'spi:status',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'referenceResource' : 'additionalasset',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'name' : 'assetnum',
                  'index' : false,
                  'artifactId' : 'taskResource_assetnum_spiassetoslcshortTitle',
                  'maxSize' : 25,
                  'id' : 'aw3d4aa120',
                  'local' : false,
                  'remoteName' : 'spi:asset',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'dcterms:title',
                  'referenceResource' : 'additionalasset',
                  'dataType' : 'reference',
                  'name' : 'assetdescription',
                  'index' : false,
                  'artifactId' : 'taskResource_assetdescription_spiassetdctermstitle',
                  'maxSize' : 100,
                  'id' : 'awb979e19b',
                  'local' : false,
                  'remoteName' : 'spi:asset',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi:description_longdescription',
                  'referenceResource' : 'additionalasset',
                  'dataType' : 'reference',
                  'usage' : 'longaln',
                  'name' : 'assetld',
                  'index' : false,
                  'artifactId' : 'taskResource_assetld_spiassetspidescription_longdescription',
                  'maxSize' : 32000,
                  'id' : 'awcf579988',
                  'local' : false,
                  'remoteName' : 'spi:asset',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'referenceResource' : 'additionallocations',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'name' : 'location',
                  'index' : false,
                  'artifactId' : 'taskResource_location_spilocationoslcshortTitle',
                  'maxSize' : 12,
                  'id' : 'aw3dc810b7',
                  'local' : false,
                  'remoteName' : 'spi:location',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'dcterms:title',
                  'referenceResource' : 'additionallocations',
                  'dataType' : 'reference',
                  'name' : 'locationdescription',
                  'index' : false,
                  'artifactId' : 'taskResource_locationdescription_spilocationdctermstitle',
                  'maxSize' : 100,
                  'id' : 'awcf991f0e',
                  'local' : false,
                  'remoteName' : 'spi:location',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi:description_longdescription',
                  'referenceResource' : 'additionallocations',
                  'dataType' : 'reference',
                  'usage' : 'longaln',
                  'name' : 'locationld',
                  'index' : false,
                  'artifactId' : 'taskResource_locationld_spilocationspidescription_longdescription',
                  'maxSize' : 32000,
                  'id' : 'aw1ddbe7e4',
                  'local' : false,
                  'remoteName' : 'spi:location',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'schedstart',
                  'index' : false,
                  'artifactId' : 'taskResource_schedstart_spi_wmschedstart',
                  'id' : 'awdad35d42',
                  'local' : false,
                  'remoteName' : 'spi_wm:schedstart',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'parent',
                  'index' : false,
                  'artifactId' : 'taskResource_parent_spi_wmparent',
                  'maxSize' : 25,
                  'id' : 'aw405d640f',
                  'local' : false,
                  'remoteName' : 'spi_wm:parent',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'istask',
                  'index' : false,
                  'artifactId' : 'taskResource_istask_spi_wmistask',
                  'id' : 'aw339b6a4d',
                  'local' : false,
                  'remoteName' : 'spi_wm:istask',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'datetime',
                  'name' : 'changestatusdate',
                  'index' : false,
                  'artifactId' : 'taskResource_changestatusdate_spi_wmstatusdate',
                  'id' : 'aw99f03313',
                  'local' : false,
                  'remoteName' : 'spi_wm:statusdate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'memo',
                  'index' : false,
                  'artifactId' : 'taskResource_memo_spi_wmnp_statusmemo',
                  'maxSize' : 50,
                  'id' : 'awe8f663bf',
                  'local' : false,
                  'remoteName' : 'spi_wm:np_statusmemo',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'taskResource_siteid_spi_wmsiteid',
                  'maxSize' : 8,
                  'id' : 'aw6fa428c4',
                  'key' : '2',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi_wm:siteid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'wonum',
                  'index' : false,
                  'artifactId' : 'taskResource_wonum_oslcshortTitle',
                  'maxSize' : 25,
                  'id' : 'aw27c1967b',
                  'key' : '1',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'inheritstatuschanges',
                  'index' : false,
                  'artifactId' : 'taskResource_inheritstatuschanges_spi_wmparentchgsstatus',
                  'id' : 'aw45093182',
                  'local' : false,
                  'remoteName' : 'spi_wm:parentchgsstatus',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'assetnumanddescription',
                  'index' : false,
                  'artifactId' : 'taskResource_assetnumanddescription_string',
                  'id' : 'awf0f25776',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'locationanddescription',
                  'index' : false,
                  'artifactId' : 'taskResource_locationanddescription_string',
                  'id' : 'aweabd5552',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'statusdesc',
                  'index' : false,
                  'artifactId' : 'taskResource_statusdesc_string',
                  'id' : 'aw97da52dc',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'localAssetLd',
                  'formula' : '${assetld}',
                  'index' : false,
                  'artifactId' : 'taskResource_localAssetLd_string',
                  'id' : 'awb64e6624',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'localLocationLd',
                  'formula' : '${locationld}',
                  'index' : false,
                  'artifactId' : 'taskResource_localLocationLd_string',
                  'id' : 'aweb1c26ee',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise023 = PersistenceManager.initCollection( resource023 );


            var resource024 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'assignmentResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'assignmentResource',
                  'id' : 'aw52913ac4',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
                  'classInstance' : AssignmentObject,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi_wm:assignmentid,spi_wm:taskid,spi_wm:laborcode,spi_wm:laborname,spi_wm:craft,spi_wm:skilllevel,spi_wm:amcrew,spi_wm:amcrewtype,spi_wm:status,spi_wm:scheduledate,spi_wm:laborhrs,spi_wm:vendor,spi_wm:contractnum').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'assignmentResource_assignmentid_assignmentid',
                  'id' : 'aw4dff185a',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi_wm:assignmentid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'taskid',
                  'index' : false,
                  'artifactId' : 'assignmentResource_taskid_spi_wmtaskid',
                  'id' : 'awdbacd682',
                  'local' : false,
                  'remoteName' : 'spi_wm:taskid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'laborcode',
                  'index' : false,
                  'artifactId' : 'assignmentResource_laborcode_spi_wmlaborcode',
                  'maxSize' : 8,
                  'id' : 'aw19d5e131',
                  'local' : false,
                  'remoteName' : 'spi_wm:laborcode',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'laborname',
                  'index' : false,
                  'artifactId' : 'assignmentResource_laborname_spi_wmlaborname',
                  'maxSize' : 62,
                  'id' : 'aweacca779',
                  'local' : false,
                  'remoteName' : 'spi_wm:laborname',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'craft',
                  'index' : false,
                  'artifactId' : 'assignmentResource_craft_spi_wmcraft',
                  'maxSize' : 8,
                  'id' : 'awa2225e70',
                  'local' : false,
                  'remoteName' : 'spi_wm:craft',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'skilllevel',
                  'index' : false,
                  'artifactId' : 'assignmentResource_skilllevel_spi_wmskilllevel',
                  'maxSize' : 15,
                  'id' : 'aw528e6e74',
                  'local' : false,
                  'remoteName' : 'spi_wm:skilllevel',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'crew',
                  'index' : false,
                  'artifactId' : 'assignmentResource_crew_spi_wmamcrew',
                  'maxSize' : 8,
                  'id' : 'awe0331a8e',
                  'local' : false,
                  'remoteName' : 'spi_wm:amcrew',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'amcrewtype',
                  'index' : false,
                  'artifactId' : 'assignmentResource_amcrewtype_spi_wmamcrewtype',
                  'maxSize' : 8,
                  'id' : 'aweba9a0fe',
                  'local' : false,
                  'remoteName' : 'spi_wm:amcrewtype',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'status',
                  'index' : false,
                  'artifactId' : 'assignmentResource_status_spi_wmstatus',
                  'maxSize' : 12,
                  'id' : 'awcf481ba6',
                  'local' : false,
                  'remoteName' : 'spi_wm:status',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'scheduledate',
                  'index' : false,
                  'artifactId' : 'assignmentResource_scheduledate_spi_wmscheduledate',
                  'id' : 'aw66feff9b',
                  'local' : false,
                  'remoteName' : 'spi_wm:scheduledate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'usage' : 'duration',
                  'name' : 'laborhours',
                  'index' : false,
                  'scale' : 0,
                  'artifactId' : 'assignmentResource_laborhours_spi_wmlaborhrs',
                  'id' : 'aw845252ec',
                  'local' : false,
                  'remoteName' : 'spi_wm:laborhrs',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'vendor',
                  'index' : false,
                  'artifactId' : 'assignmentResource_vendor_spi_wmvendor',
                  'maxSize' : 12,
                  'id' : 'aw20d6246b',
                  'local' : false,
                  'remoteName' : 'spi_wm:vendor',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'contractnum',
                  'index' : false,
                  'artifactId' : 'assignmentResource_contractnum_spi_wmcontractnum',
                  'maxSize' : 8,
                  'id' : 'aw6a1c685',
                  'local' : false,
                  'remoteName' : 'spi_wm:contractnum',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'laborcodeandname',
                  'index' : false,
                  'artifactId' : 'assignmentResource_laborcodeandname_string',
                  'id' : 'awcc45a6ed',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'crewdesc',
                  'index' : false,
                  'artifactId' : 'assignmentResource_crewdesc_string',
                  'id' : 'aw172e7e51',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise024 = PersistenceManager.initCollection( resource024 );


            var resource025 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'plannedMaterialResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'plannedMaterialResource',
                  'id' : 'aw9e5d2a0f',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
                  'classInstance' : PlannedMaterialObject,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi_wm:wpitemid,spi_wm:taskid,spi_wm:itemnum,spi_wm:description,spi_wm:description_longdescription,spi_wm:itemqty,spi_wm:linetype,spi_wm:directreq,spi:location{dcterms:title,oslc:shortTitle}').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'plannedMaterialResource_wpitemid_spi_wmwpitemid',
                  'id' : 'aw99527809',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi_wm:wpitemid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'taskid',
                  'index' : false,
                  'artifactId' : 'plannedMaterialResource_taskid_spi_wmtaskid',
                  'id' : 'awde58bf6c',
                  'local' : false,
                  'remoteName' : 'spi_wm:taskid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'item',
                  'index' : false,
                  'artifactId' : 'plannedMaterialResource_item_spi_wmitemnum',
                  'maxSize' : 30,
                  'id' : 'aw276c2072',
                  'local' : false,
                  'remoteName' : 'spi_wm:itemnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'itemdesc',
                  'index' : false,
                  'artifactId' : 'plannedMaterialResource_itemdesc_spi_wmdescription',
                  'maxSize' : 100,
                  'id' : 'awf5e4310c',
                  'local' : false,
                  'remoteName' : 'spi_wm:description',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'longaln',
                  'name' : 'itemlongdesc',
                  'index' : false,
                  'artifactId' : 'plannedMaterialResource_itemlongdesc_spi_wmdescription_longdescription',
                  'maxSize' : 32000,
                  'id' : 'aw9a55019f',
                  'local' : false,
                  'remoteName' : 'spi_wm:description_longdescription',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'name' : 'quantity',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'plannedMaterialResource_quantity_spi_wmitemqty',
                  'id' : 'aw64ec56db',
                  'local' : false,
                  'remoteName' : 'spi_wm:itemqty',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'linetype',
                  'index' : false,
                  'artifactId' : 'plannedMaterialResource_linetype_spi_wmlinetype',
                  'maxSize' : 15,
                  'id' : 'awb01dfeab',
                  'local' : false,
                  'remoteName' : 'spi_wm:linetype',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'referenceResource' : 'additionallocations',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'name' : 'storeroom',
                  'index' : false,
                  'artifactId' : 'plannedMaterialResource_storeroom_spilocationoslcshortTitle',
                  'maxSize' : 12,
                  'id' : 'awbce26a25',
                  'local' : false,
                  'remoteName' : 'spi:location',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'dcterms:title',
                  'referenceResource' : 'additionallocations',
                  'dataType' : 'reference',
                  'name' : 'storeroomdesc',
                  'index' : false,
                  'artifactId' : 'plannedMaterialResource_storeroomdesc_spilocationdctermstitle',
                  'maxSize' : 100,
                  'id' : 'awb2d97f84',
                  'local' : false,
                  'remoteName' : 'spi:location',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'directrequest',
                  'index' : false,
                  'artifactId' : 'plannedMaterialResource_directrequest_spi_wmdirectreq',
                  'id' : 'awbf99f6ee',
                  'local' : false,
                  'remoteName' : 'spi_wm:directreq',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'itemanddescription',
                  'index' : false,
                  'artifactId' : 'plannedMaterialResource_itemanddescription_string',
                  'id' : 'awd684a604',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise025 = PersistenceManager.initCollection( resource025 );


            var resource026 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'plannedToolResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'plannedToolResource',
                  'id' : 'aw9b225591',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
                  'classInstance' : PlannedToolObject,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi_wm:wpitemid,spi_wm:itemnum,spi_wm:taskid,spi_wm:description,spi_wm:description_longdescription,spi_wm:itemqty,spi_wm:hours,spi:location{dcterms:title,oslc:shortTitle}').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'plannedToolResource_wpitemid_spi_wmwpitemid',
                  'id' : 'aw372b0fc',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi_wm:wpitemid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'tool',
                  'index' : false,
                  'artifactId' : 'plannedToolResource_tool_spi_wmitemnum',
                  'maxSize' : 30,
                  'id' : 'awefa1ba7e',
                  'local' : false,
                  'remoteName' : 'spi_wm:itemnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'taskid',
                  'index' : false,
                  'artifactId' : 'plannedToolResource_taskid_spi_wmtaskid',
                  'id' : 'awbc7ff456',
                  'local' : false,
                  'remoteName' : 'spi_wm:taskid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'tooldesc',
                  'index' : false,
                  'artifactId' : 'plannedToolResource_tooldesc_spi_wmdescription',
                  'maxSize' : 100,
                  'id' : 'aw9de0a341',
                  'local' : false,
                  'remoteName' : 'spi_wm:description',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'longaln',
                  'name' : 'toollongdesc',
                  'index' : false,
                  'artifactId' : 'plannedToolResource_toollongdesc_spi_wmdescription_longdescription',
                  'maxSize' : 32000,
                  'id' : 'aw7a468d19',
                  'local' : false,
                  'remoteName' : 'spi_wm:description_longdescription',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'name' : 'quantity',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'plannedToolResource_quantity_spi_wmitemqty',
                  'id' : 'awfb97155a',
                  'local' : false,
                  'remoteName' : 'spi_wm:itemqty',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'usage' : 'duration',
                  'name' : 'hours',
                  'index' : false,
                  'scale' : 0,
                  'artifactId' : 'plannedToolResource_hours_spi_wmhours',
                  'id' : 'awf96027af',
                  'local' : false,
                  'remoteName' : 'spi_wm:hours',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'referenceResource' : 'additionallocations',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'name' : 'storeroom',
                  'index' : false,
                  'artifactId' : 'plannedToolResource_storeroom_spilocationoslcshortTitle',
                  'maxSize' : 12,
                  'id' : 'aw6b40f564',
                  'local' : false,
                  'remoteName' : 'spi:location',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'dcterms:title',
                  'referenceResource' : 'additionallocations',
                  'dataType' : 'reference',
                  'name' : 'storeroomdesc',
                  'index' : false,
                  'artifactId' : 'plannedToolResource_storeroomdesc_spilocationdctermstitle',
                  'maxSize' : 100,
                  'id' : 'aw3b0b58b7',
                  'local' : false,
                  'remoteName' : 'spi:location',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'toolanddescription',
                  'index' : false,
                  'artifactId' : 'plannedToolResource_toolanddescription_string',
                  'id' : 'awfa513d6',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise026 = PersistenceManager.initCollection( resource026 );


            var resource027 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'actualLaborResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'actualLaborResource',
                  'id' : 'awc6411bcc',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
                  'classInstance' : ActualLaborObject,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,spi_wm:taskid,spi_wm:laborcode,foaf:name,spi_wm:craft,spi_wm:skilllevel,spi_wm:vendor,spi_wm:contractnum,spi_wm:revisionnum,spi_wm:amcrew,spi_wm:position,spi_wm:startdate,spi_wm:starttime,spi_wm:finishdate,spi_wm:finishtime,spi_wm:regularhrs,spi_wm:premiumpayhours,spi_wm:premiumpaycode,spi_wm:transtype,spi_wm:timerstatus,spi_wm:anywhererefid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_identifier_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw8cbf3ba0',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'actualstaskid',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_actualstaskid_spi_wmtaskid',
                  'id' : 'awd579cb87',
                  'local' : false,
                  'remoteName' : 'spi_wm:taskid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'method' : 'laborcodeChanged',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'laborcode',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_laborcode_spi_wmlaborcode',
                  'maxSize' : 8,
                  'id' : 'aw47ed7702',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi_wm:laborcode',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'laborname',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_laborname_foafname',
                  'maxSize' : 62,
                  'id' : 'awf3ec2dcf',
                  'local' : false,
                  'remoteName' : 'foaf:name',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'method' : 'craftChanged',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'craft',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_craft_spi_wmcraft',
                  'maxSize' : 8,
                  'id' : 'aw84b26c2',
                  'local' : false,
                  'remoteName' : 'spi_wm:craft',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'skilllevel',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_skilllevel_spi_wmskilllevel',
                  'maxSize' : 15,
                  'id' : 'awbf89630d',
                  'local' : false,
                  'remoteName' : 'spi_wm:skilllevel',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'vendor',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_vendor_spi_wmvendor',
                  'maxSize' : 12,
                  'id' : 'awa8fbbb36',
                  'local' : false,
                  'remoteName' : 'spi_wm:vendor',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'method' : 'contractnumChanged',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'contractnum',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_contractnum_spi_wmcontractnum',
                  'maxSize' : 8,
                  'id' : 'aw86ed9580',
                  'local' : false,
                  'remoteName' : 'spi_wm:contractnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'revisionnum',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_revisionnum_spi_wmrevisionnum',
                  'id' : 'awb2e99f97',
                  'local' : false,
                  'remoteName' : 'spi_wm:revisionnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'amcrew',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_amcrew_spi_wmamcrew',
                  'maxSize' : 8,
                  'id' : 'awec952090',
                  'local' : false,
                  'remoteName' : 'spi_wm:amcrew',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'position',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_position_spi_wmposition',
                  'maxSize' : 20,
                  'id' : 'aw5f7c4a2a',
                  'local' : false,
                  'remoteName' : 'spi_wm:position',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'method' : 'startDateChanged',
                  'dataType' : 'datetime',
                  'usage' : 'date',
                  'name' : 'startdate',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_startdate_spi_wmstartdate',
                  'id' : 'aw71dfbb24',
                  'local' : false,
                  'remoteName' : 'spi_wm:startdate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'method' : 'startTimeChanged',
                  'dataType' : 'datetime',
                  'usage' : 'time',
                  'name' : 'starttime',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_starttime_spi_wmstarttime',
                  'id' : 'aw8b12e64e',
                  'local' : false,
                  'remoteName' : 'spi_wm:starttime',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'method' : 'finishDateChanged',
                  'dataType' : 'datetime',
                  'usage' : 'date',
                  'name' : 'finishdate',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_finishdate_spi_wmfinishdate',
                  'id' : 'aw6f7d0c8e',
                  'local' : false,
                  'remoteName' : 'spi_wm:finishdate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'method' : 'finishTimeChanged',
                  'dataType' : 'datetime',
                  'usage' : 'time',
                  'name' : 'finishtime',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_finishtime_spi_wmfinishtime',
                  'id' : 'awb149c138',
                  'local' : false,
                  'remoteName' : 'spi_wm:finishtime',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'usage' : 'duration',
                  'name' : 'regularhours',
                  'index' : false,
                  'scale' : 0,
                  'artifactId' : 'actualLaborResource_regularhours_spi_wmregularhrs',
                  'id' : 'awfaad9726',
                  'local' : false,
                  'remoteName' : 'spi_wm:regularhrs',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'usage' : 'duration',
                  'name' : 'premiumpayhours',
                  'index' : false,
                  'scale' : 0,
                  'artifactId' : 'actualLaborResource_premiumpayhours_spi_wmpremiumpayhours',
                  'id' : 'awe96026c6',
                  'local' : false,
                  'remoteName' : 'spi_wm:premiumpayhours',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'premiumpaycode',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_premiumpaycode_spi_wmpremiumpaycode',
                  'maxSize' : 8,
                  'id' : 'aw1fee04c6',
                  'local' : false,
                  'remoteName' : 'spi_wm:premiumpaycode',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'transtype',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_transtype_spi_wmtranstype',
                  'maxSize' : 16,
                  'id' : 'aw99b72c84',
                  'local' : false,
                  'remoteName' : 'spi_wm:transtype',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'timerstatus',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_timerstatus_spi_wmtimerstatus',
                  'maxSize' : 16,
                  'id' : 'aw24c41065',
                  'local' : false,
                  'remoteName' : 'spi_wm:timerstatus',
               }).
               addField({
                  'method' : 'actualLaborHoursChanged',
                  'dataType' : 'duration',
                  'name' : 'actuallaborhours',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_actuallaborhours_duration',
                  'id' : 'awca7f2a6c',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'dontDiscard',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_dontDiscard_boolean',
                  'id' : 'awee615351',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'anywhereRefId',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_anywhereRefId_spi_wmanywhererefid',
                  'id' : 'aw353fc785',
                  'local' : false,
                  'remoteName' : 'spi_wm:anywhererefid',
               });
            var resourcePromise027 = PersistenceManager.initCollection( resource027 );


            var resource028 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'actualMaterialResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'actualMaterialResource',
                  'id' : 'awb759cf57',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
                  'classInstance' : ActualMaterialObject,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,spi_wm:itemsetid,spi_wm:taskid,spi_wm:itemnum,dcterms:title,spi_wm:positivequantity,spi_wm:linetype,spi_wm:storeloc,spi_wm:binnum,spi_wm:rotassetnum,spi_wm:tositeid,spi_wm:anywhererefid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'actualMaterialResource_identifier_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awdc7ede03',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'itemsetid',
                  'index' : false,
                  'artifactId' : 'actualMaterialResource_itemsetid_spi_wmitemsetid',
                  'maxSize' : 8,
                  'id' : 'awe645fdad',
                  'local' : false,
                  'remoteName' : 'spi_wm:itemsetid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'actualstaskid',
                  'index' : false,
                  'artifactId' : 'actualMaterialResource_actualstaskid_spi_wmtaskid',
                  'id' : 'aw20ac037e',
                  'local' : false,
                  'remoteName' : 'spi_wm:taskid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'itemnum',
                  'index' : false,
                  'artifactId' : 'actualMaterialResource_itemnum_spi_wmitemnum',
                  'maxSize' : 30,
                  'id' : 'awb880e31e',
                  'local' : false,
                  'remoteName' : 'spi_wm:itemnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'itemdesc',
                  'index' : false,
                  'artifactId' : 'actualMaterialResource_itemdesc_dctermstitle',
                  'maxSize' : 100,
                  'id' : 'awaf1ea766',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'quantity',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'actualMaterialResource_quantity_spi_wmpositivequantity',
                  'id' : 'awe9d77f3a',
                  'local' : false,
                  'remoteName' : 'spi_wm:positivequantity',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'linetype',
                  'index' : false,
                  'artifactId' : 'actualMaterialResource_linetype_spi_wmlinetype',
                  'maxSize' : 15,
                  'id' : 'awdd721722',
                  'local' : false,
                  'remoteName' : 'spi_wm:linetype',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'storeroom',
                  'index' : false,
                  'artifactId' : 'actualMaterialResource_storeroom_spi_wmstoreloc',
                  'maxSize' : 12,
                  'id' : 'awc4c62e4c',
                  'local' : false,
                  'remoteName' : 'spi_wm:storeloc',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'binnum',
                  'index' : true,
                  'artifactId' : 'actualMaterialResource_binnum_spi_wmbinnum',
                  'maxSize' : 8,
                  'id' : 'aw8a437e8a',
                  'local' : false,
                  'remoteName' : 'spi_wm:binnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'rotassetnum',
                  'index' : false,
                  'artifactId' : 'actualMaterialResource_rotassetnum_spi_wmrotassetnum',
                  'maxSize' : 25,
                  'id' : 'awe16d3213',
                  'local' : false,
                  'remoteName' : 'spi_wm:rotassetnum',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'actualMaterialResource_siteid_spi_wmtositeid',
                  'maxSize' : 8,
                  'id' : 'awb3a70a67',
                  'local' : false,
                  'remoteName' : 'spi_wm:tositeid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'itemanddescription',
                  'index' : false,
                  'artifactId' : 'actualMaterialResource_itemanddescription_string',
                  'id' : 'awe513b2b5',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'dontDiscard',
                  'index' : false,
                  'artifactId' : 'actualMaterialResource_dontDiscard_boolean',
                  'id' : 'awa0f7d694',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'anywhereRefId',
                  'index' : false,
                  'artifactId' : 'actualMaterialResource_anywhereRefId_spi_wmanywhererefid',
                  'id' : 'awc9cf32ea',
                  'local' : false,
                  'remoteName' : 'spi_wm:anywhererefid',
               });
            var resourcePromise028 = PersistenceManager.initCollection( resource028 );


            var resource029 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'actualToolResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'actualToolResource',
                  'id' : 'awb2c54cdc',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
                  'classInstance' : ActualToolObject,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,spi_wm:taskid,spi_wm:toolhrs,spi_wm:rotassetnum,spi_wm:amcrew,spi_wm:anywhererefid,spi:toolitem{spi:itemnum,dcterms:title}').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'actualToolResource_identifier_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw4ce0f27c',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'actualstaskid',
                  'index' : false,
                  'artifactId' : 'actualToolResource_actualstaskid_spi_wmtaskid',
                  'id' : 'awa5b6b94a',
                  'local' : false,
                  'remoteName' : 'spi_wm:taskid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi:itemnum',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'actualToolResource',
                  'name' : 'tool',
                  'index' : false,
                  'artifactId' : 'actualToolResource_tool_spitoolitemspiitemnum',
                  'maxSize' : 30,
                  'id' : 'awfac09038',
                  'local' : false,
                  'remoteName' : 'spi:toolitem',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'dcterms:title',
                  'dataType' : 'reference',
                  'referenceResource' : 'actualToolResource',
                  'name' : 'tooldesc',
                  'index' : false,
                  'artifactId' : 'actualToolResource_tooldesc_spitoolitemdctermstitle',
                  'maxSize' : 100,
                  'id' : 'aw9ae80135',
                  'local' : false,
                  'remoteName' : 'spi:toolitem',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'usage' : 'duration',
                  'name' : 'toolhrs',
                  'index' : false,
                  'scale' : 0,
                  'artifactId' : 'actualToolResource_toolhrs_spi_wmtoolhrs',
                  'id' : 'aw24bd033d',
                  'local' : false,
                  'remoteName' : 'spi_wm:toolhrs',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'rotassetnum',
                  'index' : false,
                  'artifactId' : 'actualToolResource_rotassetnum_spi_wmrotassetnum',
                  'maxSize' : 25,
                  'id' : 'aw2147c092',
                  'local' : false,
                  'remoteName' : 'spi_wm:rotassetnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'amcrew',
                  'index' : false,
                  'artifactId' : 'actualToolResource_amcrew_spi_wmamcrew',
                  'maxSize' : 8,
                  'id' : 'awaa580fe7',
                  'local' : false,
                  'remoteName' : 'spi_wm:amcrew',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'toolanddescription',
                  'index' : false,
                  'artifactId' : 'actualToolResource_toolanddescription_string',
                  'id' : 'awbfcc2e6f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'dontDiscard',
                  'index' : false,
                  'artifactId' : 'actualToolResource_dontDiscard_boolean',
                  'id' : 'awa8ac7c26',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'anywhereRefId',
                  'index' : false,
                  'artifactId' : 'actualToolResource_anywhereRefId_spi_wmanywhererefid',
                  'id' : 'awde654a92',
                  'local' : false,
                  'remoteName' : 'spi_wm:anywhererefid',
               });
            var resourcePromise029 = PersistenceManager.initCollection( resource029 );


            var resource030 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'workOrderSpecResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'workOrderSpecResource',
                  'id' : 'aw5b678cf0',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi_wm:workorderspecid,spi_wm:classstructureid,spi_wm:mandatory,spi_wm:refobjectname,spi_wm:orgid,spi_wm:changedate,spi_wm:displaysequence,spi_wm:changeby,spi_wm:refobjectid,spi_wm:numvalue,spi_wm:alnvalue,spi_wm:section,spi_wm:measureunitid,spi_wm:anywhererefid,spi_wm:classspec{spi_wm:domainid,spi_wm:classspecid},spi_wm:assetattr{spi_wm:assetattrid,spi_wm:domainid,spi_wm:description,spi_wm:datatype}').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'workorderspecid',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_workorderspecid_spi_wmworkorderspecid',
                  'id' : 'awe04160a2',
                  'key' : '1',
                  'local' : false,
                  'remoteName' : 'spi_wm:workorderspecid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'classstructureid',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_classstructureid_spi_wmclassstructureid',
                  'maxSize' : 20,
                  'id' : 'awbad6bdb4',
                  'local' : false,
                  'remoteName' : 'spi_wm:classstructureid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'mandatory',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_mandatory_spi_wmmandatory',
                  'id' : 'aw17914d50',
                  'local' : false,
                  'remoteName' : 'spi_wm:mandatory',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'refobjectname',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_refobjectname_spi_wmrefobjectname',
                  'maxSize' : 30,
                  'id' : 'aw3ee9358d',
                  'local' : false,
                  'remoteName' : 'spi_wm:refobjectname',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_orgid_spi_wmorgid',
                  'maxSize' : 8,
                  'id' : 'aw567ea9c8',
                  'local' : false,
                  'remoteName' : 'spi_wm:orgid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'datetime',
                  'name' : 'changedate',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_changedate_spi_wmchangedate',
                  'id' : 'aw290ce2b8',
                  'local' : false,
                  'remoteName' : 'spi_wm:changedate',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'smallint',
                  'name' : 'displaysequence',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_displaysequence_spi_wmdisplaysequence',
                  'id' : 'aw3427d27d',
                  'local' : false,
                  'remoteName' : 'spi_wm:displaysequence',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'changeby',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_changeby_spi_wmchangeby',
                  'maxSize' : 30,
                  'id' : 'aw7dbc946b',
                  'local' : false,
                  'remoteName' : 'spi_wm:changeby',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'refobjectid',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_refobjectid_spi_wmrefobjectid',
                  'id' : 'awea14d5ae',
                  'local' : false,
                  'remoteName' : 'spi_wm:refobjectid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:classspecid',
                  'dataType' : 'reference',
                  'referenceResource' : 'workOrderSpecResource',
                  'name' : 'classspec',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_classspec_spi_wmclassspecspi_wmclassspecid',
                  'id' : 'aw51869a21',
                  'local' : false,
                  'remoteName' : 'spi_wm:classspec',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:domainid',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'workOrderSpecResource',
                  'name' : 'classspecdomainid',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_classspecdomainid_spi_wmclassspecspi_wmdomainid',
                  'maxSize' : 18,
                  'id' : 'awe282088a',
                  'local' : false,
                  'remoteName' : 'spi_wm:classspec',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:domainid',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'workOrderSpecResource',
                  'name' : 'assetattrdomainid',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_assetattrdomainid_spi_wmassetattrspi_wmdomainid',
                  'maxSize' : 18,
                  'id' : 'aw9b484d83',
                  'local' : false,
                  'remoteName' : 'spi_wm:assetattr',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'domainid',
                  'formula' : '(${classspecdomainid} || ${assetattrdomainid})',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_domainid_string',
                  'id' : 'aw77a6400e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi_wm:assetattrid',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'workOrderSpecResource',
                  'name' : 'assetattrid',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_assetattrid_spi_wmassetattrspi_wmassetattrid',
                  'maxSize' : 16,
                  'id' : 'awcb08cadc',
                  'local' : false,
                  'remoteName' : 'spi_wm:assetattr',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:description',
                  'dataType' : 'reference',
                  'referenceResource' : 'workOrderSpecResource',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_description_spi_wmassetattrspi_wmdescription',
                  'maxSize' : 100,
                  'id' : 'aw6eb64318',
                  'local' : false,
                  'remoteName' : 'spi_wm:assetattr',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi_wm:datatype',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'workOrderSpecResource',
                  'name' : 'datatype',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_datatype_spi_wmassetattrspi_wmdatatype',
                  'maxSize' : 8,
                  'id' : 'aw8069e2ac',
                  'local' : false,
                  'remoteName' : 'spi_wm:assetattr',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'numvalue',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'workOrderSpecResource_numvalue_spi_wmnumvalue',
                  'id' : 'aw657e2422',
                  'local' : false,
                  'remoteName' : 'spi_wm:numvalue',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'alnvalue',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_alnvalue_spi_wmalnvalue',
                  'maxSize' : 254,
                  'id' : 'awc20eccd7',
                  'local' : false,
                  'remoteName' : 'spi_wm:alnvalue',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'section',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_section_spi_wmsection',
                  'maxSize' : 10,
                  'id' : 'aw8528360f',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi_wm:section',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'measureunitid',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_measureunitid_spi_wmmeasureunitid',
                  'maxSize' : 16,
                  'id' : 'aw6a8df23d',
                  'local' : false,
                  'remoteName' : 'spi_wm:measureunitid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'anywhereRefId',
                  'index' : false,
                  'artifactId' : 'workOrderSpecResource_anywhereRefId_spi_wmanywhererefid',
                  'id' : 'awd680ee93',
                  'local' : false,
                  'remoteName' : 'spi_wm:anywhererefid',
               });
            var resourcePromise030 = PersistenceManager.initCollection( resource030 );


            var resource031 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'classstructure',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'classstructure',
                  'additionalData' : true,
                  'id' : 'awf50fb9da',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
                  'classInstance' : ClassStructureObject,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi_wm:classstructureid,spi_wm:description,spi_wm:haschildren,spi_wm:parent,spi_wm:hierarchypath,spi_wm:classificationid,spi_wm:classusewith{spi_wm:objectname}').
               setSupportiveFieldsSelectExpression('spi_wm:classstructureclassspec{spi_wm:classspecid}{spi_wm:classstructureid,spi_wm:assetattrid,spi_wm:assetattributeid,spi_wm:orgid,spi_wm:siteid,spi_wm:continuous,spi_wm:domainid,spi_wm:section,spi_wm:measureunitid,spi_wm:assetattributeid{spi_wm:description,spi_wm:datatype},spi_wm:classspecid{spi_wm:mandatory,spi_wm:sequence,spi_wm:classspecid}}').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'classstructureid',
                  'index' : true,
                  'artifactId' : 'classstructure_classstructureid_spi_wmclassstructureid',
                  'maxSize' : 20,
                  'id' : 'aw3bd4939b',
                  'key' : '1',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi_wm:classstructureid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'classstructure_description_spi_wmdescription',
                  'maxSize' : 254,
                  'id' : 'aw81cb358f',
                  'local' : false,
                  'remoteName' : 'spi_wm:description',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'haschildren',
                  'index' : true,
                  'artifactId' : 'classstructure_haschildren_spi_wmhaschildren',
                  'id' : 'awaf639bc9',
                  'local' : false,
                  'remoteName' : 'spi_wm:haschildren',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'parent',
                  'index' : true,
                  'artifactId' : 'classstructure_parent_spi_wmparent',
                  'maxSize' : 20,
                  'id' : 'awfe37c8d6',
                  'local' : false,
                  'remoteName' : 'spi_wm:parent',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi_wm:objectname',
                  'dataType' : 'inline',
                  'usage' : 'upper',
                  'referenceResource' : 'classstructure',
                  'name' : 'objectname',
                  'index' : false,
                  'artifactId' : 'classstructure_objectname_spi_wmclassusewithspi_wmobjectname',
                  'maxSize' : 30,
                  'id' : 'awcaf67e4c',
                  'local' : false,
                  'remoteName' : 'spi_wm:classusewith',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'hierarchypath',
                  'index' : false,
                  'artifactId' : 'classstructure_hierarchypath_spi_wmhierarchypath',
                  'maxSize' : 254,
                  'id' : 'aw3dd51a56',
                  'local' : false,
                  'remoteName' : 'spi_wm:hierarchypath',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'classificationid',
                  'index' : false,
                  'artifactId' : 'classstructure_classificationid_spi_wmclassificationid',
                  'maxSize' : 192,
                  'id' : 'awd81ecc55',
                  'local' : false,
                  'remoteName' : 'spi_wm:classificationid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi_wm:classspecid',
                  'dataType' : 'inline',
                  'usage' : 'bigint',
                  'referenceResource' : 'classSpec',
                  'index' : false,
                  'local' : false,
                  'selectExpression' : 'spi_wm:classstructureclassspec{spi_wm:classspecid}{spi_wm:classstructureid,spi_wm:assetattrid,spi_wm:assetattributeid,spi_wm:orgid,spi_wm:siteid,spi_wm:continuous,spi_wm:domainid,spi_wm:section,spi_wm:measureunitid,spi_wm:assetattributeid{spi_wm:description,spi_wm:datatype},spi_wm:classspecid{spi_wm:mandatory,spi_wm:sequence,spi_wm:classspecid}}',
                  'name' : 'classspec',
                  'artifactId' : 'classstructure_classspec_spi_wmclassstructureclassspecspi_wmclassspecid',
                  'id' : 'awc8047a03',
                  'describedByResource' : 'classSpec',
                  'remoteName' : 'spi_wm:classstructureclassspec',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'fulldesc',
                  'index' : false,
                  'artifactId' : 'classstructure_fulldesc_string',
                  'id' : 'aw62199543',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'filterparent',
                  'formula' : '${parent}?${parent}:\'nullvalue\'',
                  'index' : true,
                  'artifactId' : 'classstructure_filterparent_string',
                  'id' : 'aw4280746c',
                  'persistent' : true,
                  'local' : true,
               }).
               setQueryBases([
                     {name:'getclassstructure', queryString:'\/oslc\/os\/oslcclassstructure?savedQuery=ANYWHEREALL', queryLabel:'' }
               ]);
            var resourcePromise031 = PersistenceManager.initCollection( resource031 );


            var resource032 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'classSpec',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'classSpec',
                  'additionalData' : true,
                  'id' : 'aw5bded906',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi_wm:classstructureid,spi_wm:assetattrid,spi_wm:assetattributeid,spi_wm:orgid,spi_wm:siteid,spi_wm:continuous,spi_wm:domainid,spi_wm:section,spi_wm:measureunitid,spi_wm:assetattributeid{spi_wm:description,spi_wm:datatype},spi_wm:classspecid{spi_wm:mandatory,spi_wm:sequence,spi_wm:classspecid}').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'classstructureid',
                  'index' : true,
                  'artifactId' : 'classSpec_classstructureid_spi_wmclassstructureid',
                  'maxSize' : 20,
                  'id' : 'aw464a7746',
                  'key' : '2',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi_wm:classstructureid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'assetattrid',
                  'index' : false,
                  'artifactId' : 'classSpec_assetattrid_spi_wmassetattrid',
                  'maxSize' : 16,
                  'id' : 'aw4139db17',
                  'key' : '1',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi_wm:assetattrid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'reference',
                  'name' : 'assetattributeid',
                  'index' : true,
                  'artifactId' : 'classSpec_assetattributeid_spi_wmassetattributeid',
                  'id' : 'aw11860be2',
                  'local' : false,
                  'remoteName' : 'spi_wm:assetattributeid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:description',
                  'dataType' : 'reference',
                  'referenceResource' : 'classSpec',
                  'name' : 'assetdescription',
                  'index' : false,
                  'artifactId' : 'classSpec_assetdescription_spi_wmassetattributeidspi_wmdescription',
                  'maxSize' : 100,
                  'id' : 'aw5c706540',
                  'local' : false,
                  'remoteName' : 'spi_wm:assetattributeid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi_wm:classspecid',
                  'dataType' : 'reference',
                  'usage' : 'bigint',
                  'referenceResource' : 'classSpec',
                  'name' : 'classspecid',
                  'index' : false,
                  'artifactId' : 'classSpec_classspecid_spi_wmclassspecidspi_wmclassspecid',
                  'id' : 'aw8a544b6e',
                  'local' : false,
                  'remoteName' : 'spi_wm:classspecid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : true,
                  'artifactId' : 'classSpec_orgid_spi_wmorgid',
                  'maxSize' : 8,
                  'id' : 'awf126d148',
                  'key' : '3',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi_wm:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : true,
                  'artifactId' : 'classSpec_siteid_spi_wmsiteid',
                  'maxSize' : 8,
                  'id' : 'awd7a71549',
                  'key' : '4',
                  'local' : false,
                  'pkIndex' : 5,
                  'remoteName' : 'spi_wm:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'continuous',
                  'index' : false,
                  'artifactId' : 'classSpec_continuous_spi_wmcontinuous',
                  'id' : 'awa50a61fa',
                  'local' : false,
                  'remoteName' : 'spi_wm:continuous',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'classSpec_domainid_spi_wmdomainid',
                  'maxSize' : 18,
                  'id' : 'aw4511dccf',
                  'local' : false,
                  'remoteName' : 'spi_wm:domainid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'section',
                  'index' : false,
                  'artifactId' : 'classSpec_section_spi_wmsection',
                  'maxSize' : 10,
                  'id' : 'aw84358cb',
                  'key' : '5',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi_wm:section',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'measureunitid',
                  'index' : false,
                  'artifactId' : 'classSpec_measureunitid_spi_wmmeasureunitid',
                  'maxSize' : 16,
                  'id' : 'aw8590b4f3',
                  'local' : false,
                  'remoteName' : 'spi_wm:measureunitid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi_wm:mandatory',
                  'dataType' : 'reference',
                  'referenceResource' : 'classSpec',
                  'name' : 'mandatory',
                  'index' : false,
                  'artifactId' : 'classSpec_mandatory_spi_wmclassspecidspi_wmmandatory',
                  'id' : 'aw927c03c',
                  'local' : false,
                  'remoteName' : 'spi_wm:classspecid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi_wm:sequence',
                  'dataType' : 'reference',
                  'usage' : 'smallint',
                  'referenceResource' : 'classSpec',
                  'name' : 'sequence',
                  'index' : false,
                  'artifactId' : 'classSpec_sequence_spi_wmclassspecidspi_wmsequence',
                  'id' : 'aweb9f04cd',
                  'local' : false,
                  'remoteName' : 'spi_wm:classspecid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi_wm:datatype',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'classSpec',
                  'name' : 'datatype',
                  'index' : false,
                  'artifactId' : 'classSpec_datatype_spi_wmassetattributeidspi_wmdatatype',
                  'maxSize' : 8,
                  'id' : 'awb4392615',
                  'local' : false,
                  'remoteName' : 'spi_wm:assetattributeid',
               }).
               setQueryBases([
                     {name:'getclasssspec', queryString:'\/oslc\/os\/oslcclassspec', queryLabel:'' }
               ]).
               setWhereClause('spi_wm%3Aclassspecusewith%7Bspi_wm%3Aobjectname%3D%22WORKORDER%22%7D');
            var resourcePromise032 = PersistenceManager.initCollection( resource032 );


            var resource033 = new ResourceMetadata({
                  'pageSize' : 100,
                  'resourceName' : 'additionalasset',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'additionalasset',
                  'additionalData' : true,
                  'id' : 'aw711eac89',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,spi:assetid,spi:orgid,spi:siteid,oslc:shortTitle,dcterms:title,spi:status,spi:itemnum,spi:itemtype,spi:itemsetid,spi:parent,spi:description_longdescription,spi:failureCode{dcterms:title,oslc:shortTitle},spi:location{dcterms:title,oslc:shortTitle}').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'assetuid',
                  'index' : false,
                  'artifactId' : 'additionalasset_assetuid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awd8171873',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'assetid',
                  'index' : false,
                  'artifactId' : 'additionalasset_assetid_spiassetid',
                  'id' : 'awd4ab7a83',
                  'local' : false,
                  'remoteName' : 'spi:assetid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : true,
                  'artifactId' : 'additionalasset_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw2aee6fb6',
                  'local' : false,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : true,
                  'artifactId' : 'additionalasset_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'awa5a0c944',
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'assetnum',
                  'index' : true,
                  'artifactId' : 'additionalasset_assetnum_oslcshortTitle',
                  'maxSize' : 25,
                  'id' : 'awdaad4d29',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : true,
                  'artifactId' : 'additionalasset_description_dctermstitle',
                  'maxSize' : 100,
                  'id' : 'awa9af7124',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'referenceResource' : 'additionallocations',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'name' : 'location',
                  'index' : true,
                  'artifactId' : 'additionalasset_location_spilocationoslcshortTitle',
                  'maxSize' : 12,
                  'id' : 'aw81c1bc95',
                  'local' : false,
                  'remoteName' : 'spi:location',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'dcterms:title',
                  'referenceResource' : 'additionallocations',
                  'dataType' : 'reference',
                  'name' : 'locationdesc',
                  'index' : true,
                  'artifactId' : 'additionalasset_locationdesc_spilocationdctermstitle',
                  'maxSize' : 100,
                  'id' : 'aw39ac9bfe',
                  'local' : false,
                  'remoteName' : 'spi:location',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'status',
                  'index' : true,
                  'artifactId' : 'additionalasset_status_spistatus',
                  'maxSize' : 20,
                  'id' : 'aw9f649d2f',
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'remoteName' : 'spi:status',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'itemnum',
                  'index' : true,
                  'artifactId' : 'additionalasset_itemnum_spiitemnum',
                  'maxSize' : 30,
                  'id' : 'aw14220733',
                  'local' : false,
                  'remoteName' : 'spi:itemnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'itemtype',
                  'index' : true,
                  'artifactId' : 'additionalasset_itemtype_spiitemtype',
                  'maxSize' : 15,
                  'id' : 'awf32b8da9',
                  'local' : false,
                  'remoteName' : 'spi:itemtype',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'itemsetid',
                  'index' : true,
                  'artifactId' : 'additionalasset_itemsetid_spiitemsetid',
                  'maxSize' : 8,
                  'id' : 'aw4622868',
                  'local' : false,
                  'remoteName' : 'spi:itemsetid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'additionalasset',
                  'name' : 'failurecode',
                  'index' : false,
                  'artifactId' : 'additionalasset_failurecode_spifailureCodeoslcshortTitle',
                  'maxSize' : 8,
                  'id' : 'awbd9bad1b',
                  'local' : false,
                  'remoteName' : 'spi:failureCode',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'dcterms:title',
                  'dataType' : 'reference',
                  'referenceResource' : 'additionalasset',
                  'name' : 'failurecodedesc',
                  'index' : false,
                  'artifactId' : 'additionalasset_failurecodedesc_spifailureCodedctermstitle',
                  'maxSize' : 100,
                  'id' : 'aw46c3d9c2',
                  'local' : false,
                  'remoteName' : 'spi:failureCode',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'reference',
                  'name' : 'parent',
                  'index' : true,
                  'artifactId' : 'additionalasset_parent_spiparent',
                  'id' : 'awa03437d3',
                  'local' : false,
                  'remoteName' : 'spi:parent',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'longaln',
                  'name' : 'assetlongdesc',
                  'index' : false,
                  'artifactId' : 'additionalasset_assetlongdesc_spidescription_longdescription',
                  'maxSize' : 32000,
                  'id' : 'awf7a54bd5',
                  'local' : false,
                  'remoteName' : 'spi:description_longdescription',
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'itemnumnotnull',
                  'formula' : '${itemnum} ? true : false',
                  'index' : true,
                  'artifactId' : 'additionalasset_itemnumnotnull_boolean',
                  'id' : 'awfb346281',
                  'persistent' : true,
                  'local' : true,
               }).
               setQueryBases([
                     {name:'getadditionalasset', queryString:'\/oslc\/os\/oslcasset', queryLabel:'' }
               ]);
            var resourcePromise033 = PersistenceManager.initCollection( resource033 );


            var resource034 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'additionallocations',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'additionallocations',
                  'additionalData' : true,
                  'id' : 'aw83f7b30c',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,spi:siteid,oslc:shortTitle,dcterms:title,spi:description_longdescription,spi:status,spi:locoper{spi:failureCode{dcterms:title,oslc:shortTitle}}').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'locationsid',
                  'index' : false,
                  'artifactId' : 'additionallocations_locationsid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw395bc857',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : true,
                  'artifactId' : 'additionallocations_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'aw71f68db9',
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'location',
                  'index' : true,
                  'artifactId' : 'additionallocations_location_oslcshortTitle',
                  'maxSize' : 12,
                  'id' : 'aw6ab9bcc8',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : true,
                  'artifactId' : 'additionallocations_description_dctermstitle',
                  'maxSize' : 100,
                  'id' : 'awdb2713a6',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'longaln',
                  'name' : 'locationld',
                  'index' : false,
                  'artifactId' : 'additionallocations_location_longdescription',
                  'maxSize' : 32000,
                  'id' : 'aw118b3d13',
                  'local' : false,
                  'remoteName' : 'spi:description_longdescription',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'dataType' : 'inline',
                  'usage' : 'upper',
                  'referenceResource' : 'additionallocations',
                  'name' : 'failurecode',
                  'index' : false,
                  'artifactId' : 'additionallocations_failurecode_spilocoperspifailureCodeoslcshortTitle',
                  'maxSize' : 8,
                  'id' : 'aw755584a3',
                  'local' : false,
                  'remoteName' : 'spi:locoper.spi:failureCode',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'dcterms:title',
                  'dataType' : 'inline',
                  'referenceResource' : 'additionallocations',
                  'name' : 'failurecodedesc',
                  'index' : false,
                  'artifactId' : 'additionallocations_failurecodedesc_spilocoperspifailureCodedctermstitle',
                  'maxSize' : 100,
                  'id' : 'awf17444e',
                  'local' : false,
                  'remoteName' : 'spi:locoper.spi:failureCode',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'status',
                  'index' : true,
                  'artifactId' : 'additionallocations_status_spistatus',
                  'maxSize' : 20,
                  'id' : 'aw4b32d9d2',
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'remoteName' : 'spi:status',
               }).
               setQueryBases([
                     {name:'getlocation', queryString:'\/oslc\/os\/oslcoperloc', queryLabel:'' }
               ]).
               setWhereClause('spi%3Astatus+in+%5B%24%7BdomainAssetstatus%5Bmaxvalue%3DOPERATING%5D.value%7D%5D');
            var resourcePromise034 = PersistenceManager.initCollection( resource034 );


            var resource035 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'domainworktype',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'domainworktype',
                  'id' : 'aw2d44e12a',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:orgid,spi:siteid,spi:maxvalue,spi:value,dcterms:title,spi:defaults,oslc:shortTitle,dcterms:identifier').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'domainworktype_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw1360a9a',
                  'local' : false,
                  'pkIndex' : 5,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'domainworktype_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'awa1491ce5',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'domainworktype_maxvalue_spimaxvalue',
                  'maxSize' : 50,
                  'id' : 'aw6f285fc4',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:maxvalue',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'domainworktype_value_spivalue',
                  'maxSize' : 50,
                  'id' : 'aw48da1536',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'domainworktype_description_dctermstitle',
                  'maxSize' : 256,
                  'id' : 'awf278565e',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaults',
                  'index' : false,
                  'artifactId' : 'domainworktype_defaults_spidefaults',
                  'id' : 'awf7e2ad84',
                  'local' : false,
                  'remoteName' : 'spi:defaults',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'domainworktype_domainid_oslcshortTitle',
                  'maxSize' : 18,
                  'id' : 'awa9833f52',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'synonymdomainid',
                  'index' : false,
                  'artifactId' : 'domainworktype_synonymdomainid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw7964c7d4',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getworktype', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22WORKTYPE%22');
            var resourcePromise035 = PersistenceManager.initCollection( resource035 );


            var resource036 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'additionalstoreroom',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'additionalstoreroom',
                  'additionalData' : true,
                  'id' : 'awaa316b1e',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,spi:siteid,oslc:shortTitle,dcterms:title,spi:status,spi:type').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'locationsid',
                  'index' : false,
                  'artifactId' : 'additionalstoreroom_locationsid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw206b6574',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : true,
                  'artifactId' : 'additionalstoreroom_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'aw9098e670',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'location',
                  'index' : true,
                  'artifactId' : 'additionalstoreroom_location_oslcshortTitle',
                  'maxSize' : 12,
                  'id' : 'aw19ce7678',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'locationForSearch',
                  'formula' : '${location}',
                  'index' : true,
                  'artifactId' : 'additionalstoreroom_locationForSearch_string',
                  'id' : 'aw741a9d39',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : true,
                  'artifactId' : 'additionalstoreroom_description_dctermstitle',
                  'maxSize' : 100,
                  'id' : 'aw1035d7e0',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'status',
                  'index' : false,
                  'artifactId' : 'additionalstoreroom_status_spistatus',
                  'maxSize' : 20,
                  'id' : 'awaa5cb21b',
                  'local' : false,
                  'remoteName' : 'spi:status',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'type',
                  'index' : false,
                  'artifactId' : 'additionalstoreroom_type_spitype',
                  'maxSize' : 16,
                  'id' : 'aw40b3e4f4',
                  'local' : false,
                  'remoteName' : 'spi:type',
               }).
               setQueryBases([
                     {name:'getlocationstoreroom', queryString:'\/oslc\/os\/oslcopersroom', queryLabel:'' }
               ]).
               setWhereClause('spi%3Atype+in+%5B%24%7Badditionalloctype%5Bmaxvalue%3DSTOREROOM%5D.value%7D%5D');
            var resourcePromise036 = PersistenceManager.initCollection( resource036 );


            var resource037 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'additionalamcrew',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'additionalamcrew',
                  'additionalData' : true,
                  'id' : 'aw4d0fc6a3',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,oslc:shortTitle,spi:amcrewtype,dcterms:title,spi:calnum,spi:shiftnum').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'amcrewid',
                  'index' : false,
                  'artifactId' : 'additionalamcrew_amcrewid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awfa5e1d0a',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'amcrew',
                  'index' : true,
                  'artifactId' : 'additionalamcrew_amcrew_oslcshortTitle',
                  'maxSize' : 8,
                  'id' : 'awcc503562',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'amcrewtype',
                  'index' : false,
                  'artifactId' : 'additionalamcrew_amcrewtype_spiamcrewtype',
                  'maxSize' : 8,
                  'id' : 'aw9773384',
                  'local' : false,
                  'remoteName' : 'spi:amcrewtype',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'additionalamcrew_description_dctermstitle',
                  'maxSize' : 50,
                  'id' : 'aw285b7f76',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'calnum',
                  'index' : false,
                  'artifactId' : 'additionalamcrew_calnum_spicalnum',
                  'maxSize' : 8,
                  'id' : 'awd4414f58',
                  'local' : false,
                  'remoteName' : 'spi:calnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'shiftnum',
                  'index' : false,
                  'artifactId' : 'additionalamcrew_shiftnum_spishiftnum',
                  'maxSize' : 8,
                  'id' : 'awbd4255ab',
                  'local' : false,
                  'remoteName' : 'spi:shiftnum',
               }).
               setQueryBases([
                     {name:'getamcreww', queryString:'\/oslc\/os\/oslcamcrew', queryLabel:'' }
               ]).
               setWhereClause('spi%3Astatus+in+%5B%24%7Bdomaincrewstatustype%5Bmaxvalue%3DACTIVE%5D.value%7D%5D+and+spi%3Acalnum%3D%22*%22+and+spi%3Ashiftnum%3D%22*%22');
            var resourcePromise037 = PersistenceManager.initCollection( resource037 );


            var resource038 = new ResourceMetadata({
                  'refreshOnLogin' : 'true',
                  'pageSize' : 10,
                  'resourceName' : 'mylabor',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'mylabor',
                  'id' : 'aw9345dc4e',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:personid,oslc:shortTitle,dcterms:identifier,spi:orgid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'personid',
                  'index' : false,
                  'artifactId' : 'mylabor_personid_spipersonid',
                  'maxSize' : 30,
                  'id' : 'aw9728653',
                  'local' : false,
                  'remoteName' : 'spi:personid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'laborcode',
                  'index' : false,
                  'artifactId' : 'mylabor_laborcode_oslcshortTitle',
                  'maxSize' : 8,
                  'id' : 'awe3178d0',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'laborid',
                  'index' : false,
                  'artifactId' : 'mylabor_laborid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awc89e8c8a',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'mylabor_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw95114d8a',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:orgid',
               }).
               setQueryBases([
                     {name:'getlabor', queryString:'\/oslc\/os\/oslclabor', queryLabel:'' }
               ]).
               setWhereClause('spi%3Apersonid%3D%24%7Bpersonid%7D+and+spi%3Aorgid%3D%24%7Bdeforg%7D');
            var resourcePromise038 = PersistenceManager.initCollection( resource038 );


            var resource039 = new ResourceMetadata({
                  'refreshOnLogin' : 'true',
                  'pageSize' : 10,
                  'resourceName' : 'mylaborcraftrate',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'mylaborcraftrate',
                  'id' : 'awa627b7eb',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:skilllevel,spi:craft,spi:laborcode,spi:contractnum,spi:vendor,dcterms:identifier,spi:defaultcraft,spi:orgid,foaf:name').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'skilllevel',
                  'index' : false,
                  'artifactId' : 'mylaborcraftrate_skilllevel_spiskilllevel',
                  'maxSize' : 15,
                  'id' : 'awb4554c8f',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:skilllevel',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'craft',
                  'index' : false,
                  'artifactId' : 'mylaborcraftrate_craft_spicraft',
                  'maxSize' : 8,
                  'id' : 'aw6bd87b1a',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:craft',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'laborcode',
                  'index' : false,
                  'artifactId' : 'mylaborcraftrate_laborcode_spilaborcode',
                  'maxSize' : 8,
                  'id' : 'aw4fcfab00',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:laborcode',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'contractnum',
                  'index' : false,
                  'artifactId' : 'mylaborcraftrate_contractnum_spicontractnum',
                  'maxSize' : 8,
                  'id' : 'awf89ca052',
                  'local' : false,
                  'pkIndex' : 6,
                  'remoteName' : 'spi:contractnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'vendor',
                  'index' : false,
                  'artifactId' : 'mylaborcraftrate_vendor_spivendor',
                  'maxSize' : 12,
                  'id' : 'aw33f170ee',
                  'local' : false,
                  'pkIndex' : 5,
                  'remoteName' : 'spi:vendor',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'laborcraftrateid',
                  'index' : false,
                  'artifactId' : 'mylaborcraftrate_laborcraftrateid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awd614616b',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaultcraft',
                  'index' : false,
                  'artifactId' : 'mylaborcraftrate_defaultcraft_spidefaultcraft',
                  'id' : 'awdcbc797',
                  'local' : false,
                  'remoteName' : 'spi:defaultcraft',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : true,
                  'artifactId' : 'mylaborcraftrate_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw4114a7e1',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'laborname',
                  'index' : false,
                  'artifactId' : 'mylaborcraftrate_laborname_foafname',
                  'maxSize' : 62,
                  'id' : 'aw9d129aaa',
                  'local' : false,
                  'remoteName' : 'foaf:name',
               }).
               setQueryBases([
                     {name:'getlaborcraftrate', queryString:'\/oslc\/os\/oslclaborcraftrate', queryLabel:'' }
               ]).
               setWhereClause('spi%3Alaborcode+in+%5B%24%7Bmylabor.laborcode%7D%5D+and+spi%3Adefaultcraft%3D1');
            var resourcePromise039 = PersistenceManager.initCollection( resource039 );


            var resource040 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'additionallaborcraftrate',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'additionallaborcraftrate',
                  'additionalData' : true,
                  'id' : 'awb722a5a4',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:skilllevel,spi:craft,spi:laborcode,spi:contractnum,spi:vendor,dcterms:identifier,spi:defaultcraft,foaf:name,spi:orgid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'skilllevel',
                  'index' : true,
                  'artifactId' : 'additionallaborcraftrate_skilllevel_spiskilllevel',
                  'maxSize' : 15,
                  'id' : 'aw6e836e9d',
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:skilllevel',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'craft',
                  'index' : true,
                  'artifactId' : 'additionallaborcraftrate_craft_spicraft',
                  'maxSize' : 8,
                  'id' : 'awf8e529bb',
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:craft',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'laborcode',
                  'index' : true,
                  'artifactId' : 'additionallaborcraftrate_laborcode_spilaborcode',
                  'maxSize' : 8,
                  'id' : 'awb320fd3f',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:laborcode',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'contractnum',
                  'index' : true,
                  'artifactId' : 'additionallaborcraftrate_contractnum_spicontractnum',
                  'maxSize' : 8,
                  'id' : 'aw55084bb3',
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'pkIndex' : 6,
                  'remoteName' : 'spi:contractnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'vendor',
                  'index' : true,
                  'artifactId' : 'additionallaborcraftrate_vendor_spivendor',
                  'maxSize' : 12,
                  'id' : 'aw1885ea3',
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'pkIndex' : 5,
                  'remoteName' : 'spi:vendor',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'laborcraftrateid',
                  'index' : false,
                  'artifactId' : 'additionallaborcraftrate_laborcraftrateid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw9689b90b',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaultcraft',
                  'index' : false,
                  'artifactId' : 'additionallaborcraftrate_defaultcraft_spidefaultcraft',
                  'id' : 'aw7d76935e',
                  'local' : false,
                  'remoteName' : 'spi:defaultcraft',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'laborname',
                  'index' : true,
                  'artifactId' : 'additionallaborcraftrate_laborname_foafname',
                  'maxSize' : 62,
                  'id' : 'aw4139454',
                  'local' : false,
                  'remoteName' : 'foaf:name',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : true,
                  'artifactId' : 'additionallaborcraftrate_orgid_orgid',
                  'maxSize' : 8,
                  'id' : 'aw84767635',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'craftForSearch',
                  'formula' : '${craft}',
                  'index' : true,
                  'artifactId' : 'additionallaborcraftrate_craftForSearch_boolean',
                  'id' : 'awb796a974',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'vendorForSearch',
                  'formula' : '${vendor}',
                  'index' : true,
                  'artifactId' : 'additionallaborcraftrate_vendorForSearch_boolean',
                  'id' : 'aw5f04cd32',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'skilllevelForSearch',
                  'formula' : '${skilllevel}',
                  'index' : true,
                  'artifactId' : 'additionallaborcraftrate_skilllevelForSearch_boolean',
                  'id' : 'aw84595fdc',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'contractnumForSearch',
                  'formula' : '${contractnum}',
                  'index' : true,
                  'artifactId' : 'additionallaborcraftrate_contractnumForSearch_boolean',
                  'id' : 'awfb13b6a',
                  'persistent' : true,
                  'local' : true,
               }).
               setQueryBases([
                     {name:'getlaborcraftrate', queryString:'\/oslc\/os\/oslclaborcraftrate', queryLabel:'' }
               ]);
            var resourcePromise040 = PersistenceManager.initCollection( resource040 );


            var resource041 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'additionalitem',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'additionalitem',
                  'additionalData' : true,
                  'id' : 'aw72fb7399',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('oslc:shortTitle,dcterms:identifier,dcterms:title,spi:itemtype,spi:rotating,spi:itemsetid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'itemnum',
                  'index' : true,
                  'artifactId' : 'additionalitem_itemnum_oslcshortTitle',
                  'maxSize' : 30,
                  'id' : 'aw533a672',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'itemid',
                  'index' : false,
                  'artifactId' : 'additionalitem_itemid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awa60a52a3',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'additionalitem_description_dctermstitle',
                  'maxSize' : 100,
                  'id' : 'awa84fecae',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'itemtype',
                  'index' : false,
                  'artifactId' : 'additionalitem_itemtype_spiitemtype',
                  'maxSize' : 15,
                  'id' : 'aw5f0eb6cf',
                  'local' : false,
                  'remoteName' : 'spi:itemtype',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rotating',
                  'index' : false,
                  'artifactId' : 'additionalitem_rotating_spirotating',
                  'id' : 'aw86eac301',
                  'local' : false,
                  'remoteName' : 'spi:rotating',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'itemsetid',
                  'index' : false,
                  'artifactId' : 'additionalitem_itemsetid_spiitemsetid',
                  'maxSize' : 8,
                  'id' : 'aw86cea148',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:itemsetid',
               }).
               setQueryBases([
                     {name:'getitem', queryString:'\/oslc\/os\/oslcitem', queryLabel:'' }
               ]);
            var resourcePromise041 = PersistenceManager.initCollection( resource041 );


            var resource042 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'itemorginfo',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'itemorginfo',
                  'id' : 'aw186d98e2',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:orgid,spi:status').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : true,
                  'artifactId' : 'itemorginfo_orgid',
                  'maxSize' : 8,
                  'id' : 'aw44b5304e',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'status',
                  'index' : true,
                  'artifactId' : 'itemorginfo_status',
                  'maxSize' : 16,
                  'id' : 'aw13366d03',
                  'local' : false,
                  'remoteName' : 'spi:status',
               }).
               setWhereClause('spi%3Aorgid%3D%24%7Bdeforg%7D');
            var resourcePromise042 = PersistenceManager.initCollection( resource042 );


            var resource043 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'toolqual',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'toolqual',
                  'id' : 'aw2cfd411b',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:toolqualid,spi:qualificationid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'toolqualid',
                  'index' : false,
                  'artifactId' : 'toolqual_toolqualid',
                  'id' : 'aw41507d8c',
                  'local' : false,
                  'remoteName' : 'spi:toolqualid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'qualificationid',
                  'index' : true,
                  'artifactId' : 'toolqual_qualificationid',
                  'maxSize' : 8,
                  'id' : 'aw12f85436',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:qualificationid',
               });
            var resourcePromise043 = PersistenceManager.initCollection( resource043 );


            var resource044 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'additionaltool',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'additionaltool',
                  'additionalData' : true,
                  'id' : 'aw4d136856',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:itemnum,dcterms:title,spi:rotating,spi:status,spi:itemsetid,spi:pluscsolution').
               setSupportiveFieldsSelectExpression('spi:itemorginfo{spi:orgid,spi:status},spi:toolqual{spi:toolqualid,spi:qualificationid}').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'itemnum',
                  'index' : true,
                  'artifactId' : 'additionaltool_itemnum_spiitemnum',
                  'maxSize' : 30,
                  'id' : 'awc82cea51',
                  'key' : '1',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:itemnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : true,
                  'artifactId' : 'additionaltool_description_dctermstitle',
                  'maxSize' : 100,
                  'id' : 'aw589b677c',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'rotating',
                  'index' : false,
                  'artifactId' : 'additionaltool_rotating_spirotating',
                  'id' : 'awa3bfb389',
                  'local' : false,
                  'remoteName' : 'spi:rotating',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'status',
                  'index' : true,
                  'artifactId' : 'additionaltool_rotating_spistatus',
                  'maxSize' : 16,
                  'id' : 'aw25c310b8',
                  'local' : false,
                  'remoteName' : 'spi:status',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'index' : true,
                  'maxSize' : 8,
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'name' : 'itemsetid',
                  'artifactId' : 'additionaltool_itemsetid_spiitemsetid',
                  'id' : 'aw2591e762',
                  'key' : '2',
                  'pkIndex' : 2,
                  'remoteName' : 'spi:itemsetid',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'itemorginfo',
                  'name' : 'itemorginfo',
                  'index' : false,
                  'artifactId' : 'additionaltool_itemorginfo',
                  'id' : 'aw9cc57c36',
                  'describedByResource' : 'itemorginfo',
                  'local' : false,
                  'remoteName' : 'spi:itemorginfo',
                  'selectExpression' : 'spi:itemorginfo{spi:orgid,spi:status}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'toolqual',
                  'name' : 'toolqual',
                  'index' : false,
                  'artifactId' : 'additionaltool_toolqual',
                  'id' : 'awe58b1868',
                  'describedByResource' : 'toolqual',
                  'local' : false,
                  'remoteName' : 'spi:toolqual',
                  'selectExpression' : 'spi:toolqual{spi:toolqualid,spi:qualificationid}',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'solution',
                  'index' : false,
                  'artifactId' : 'additionaltool_toolsolution',
                  'id' : 'aw7e257bcc',
                  'local' : false,
                  'remoteName' : 'spi:pluscsolution',
               }).
               setQueryBases([
                     {name:'gettoolitem', queryString:'\/oslc\/os\/oslctoolitem', queryLabel:'' }
               ]);
            var resourcePromise044 = PersistenceManager.initCollection( resource044 );


            var resource045 = new ResourceMetadata({
                  'pageSize' : 100,
                  'resourceName' : 'additionalworktype',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'additionalworktype',
                  'additionalData' : true,
                  'id' : 'awce192bc6',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:orgid,spi:worktype,dcterms:title,spi:woclass,dcterms:identifier').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : true,
                  'artifactId' : 'additionalworktype_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw292a52b9',
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'worktype',
                  'index' : true,
                  'artifactId' : 'additionalworktype_worktype_spiworktype',
                  'maxSize' : 5,
                  'id' : 'aw15ec09fd',
                  'local' : false,
                  'remoteName' : 'spi:worktype',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'wtypedesc',
                  'index' : true,
                  'artifactId' : 'additionalworktype_wtypedesc_dctermstitle',
                  'maxSize' : 50,
                  'id' : 'aw404fc3d3',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'woclass',
                  'index' : true,
                  'artifactId' : 'additionalworktype_woclass_spiwoclass',
                  'maxSize' : 16,
                  'id' : 'awf40f5cb3',
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'remoteName' : 'spi:woclass',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'worktypeid',
                  'index' : false,
                  'artifactId' : 'additionalworktype_worktypeid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw5cda656a',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getworktype', queryString:'\/oslc\/os\/oslcworktype', queryLabel:'' }
               ]);
            var resourcePromise045 = PersistenceManager.initCollection( resource045 );


            var resource046 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'additionalserviceaddress',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'additionalserviceaddress',
                  'additionalData' : true,
                  'id' : 'awa69aaff4',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,oslc:shortTitle,dcterms:title,spi:formattedaddress').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'serviceaddressid',
                  'index' : false,
                  'artifactId' : 'additionalserviceaddress_serviceaddressid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw3028c3b4',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'addresscode',
                  'index' : false,
                  'artifactId' : 'additionalserviceaddress_addresscode_oslcshortTitle',
                  'maxSize' : 12,
                  'id' : 'aw22ccebd6',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'additionalserviceaddress_description_dctermstitle',
                  'maxSize' : 50,
                  'id' : 'aw92dde6ff',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'formattedaddress',
                  'index' : false,
                  'artifactId' : 'additionalserviceaddress_formattedaddress_spiformattedaddress',
                  'maxSize' : 150,
                  'id' : 'awe961ab27',
                  'local' : false,
                  'remoteName' : 'spi:formattedaddress',
               }).
               setQueryBases([
                     {name:'getserviceaddress', queryString:'\/oslc\/os\/oslcserviceaddress', queryLabel:'' }
               ]);
            var resourcePromise046 = PersistenceManager.initCollection( resource046 );


            var resource047 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'additionalbin',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'additionalbin',
                  'additionalData' : true,
                  'id' : 'aw979536f8',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,spi:binnum,spi:curbal,spi:itemnum,spi:itemsetid,spi:location,spi:siteid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'invbalancesid',
                  'index' : false,
                  'artifactId' : 'additionalbin_invbalancesid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw3ab7206b',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'binnum',
                  'index' : true,
                  'artifactId' : 'additionalbin_binnum_spibinnum',
                  'maxSize' : 8,
                  'id' : 'aw6248dc74',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:binnum',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'name' : 'currentbalance',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'additionalbin_currentbalance_spicurbal',
                  'id' : 'awa69ee43a',
                  'local' : false,
                  'remoteName' : 'spi:curbal',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'itemnum',
                  'index' : true,
                  'artifactId' : 'additionalbin_itemnum_spiitemnum',
                  'maxSize' : 30,
                  'id' : 'aw10688f2e',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:itemnum',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'itemsetid',
                  'index' : true,
                  'artifactId' : 'additionalbin_itemsetid_spiitemsetid',
                  'maxSize' : 8,
                  'id' : 'aw44cc8e84',
                  'local' : false,
                  'pkIndex' : 7,
                  'remoteName' : 'spi:itemsetid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'location',
                  'index' : true,
                  'artifactId' : 'additionalbin_location_spilocation',
                  'maxSize' : 12,
                  'id' : 'awdcc5e5c',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:location',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : true,
                  'artifactId' : 'additionalbin_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'aw6fc4d80a',
                  'local' : false,
                  'pkIndex' : 6,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'hasbalance',
                  'formula' : '${currentbalance} > 0',
                  'index' : true,
                  'artifactId' : 'additionalbin_hasbalance_boolean',
                  'id' : 'awd4a07504',
                  'persistent' : true,
                  'local' : true,
               }).
               setQueryBases([
                     {name:'getinvbalances', queryString:'\/oslc\/os\/oslcinvbalances', queryLabel:'' }
               ]);
            var resourcePromise047 = PersistenceManager.initCollection( resource047 );


            var resource048 = new ResourceMetadata({
                  'pageSize' : 100,
                  'resourceName' : 'additionalpremiumpaycode',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'additionalpremiumpaycode',
                  'additionalData' : true,
                  'id' : 'awf7969c0e',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:orgid,dcterms:title,dcterms:identifier,oslc:shortTitle').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : true,
                  'artifactId' : 'additionalpremiumpaycode_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw212de8d9',
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : true,
                  'artifactId' : 'additionalpremiumpaycode_description_dctermstitle',
                  'maxSize' : 100,
                  'id' : 'aw7d595771',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'premiumpayid',
                  'index' : false,
                  'artifactId' : 'additionalpremiumpaycode_premiumpayid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw670fad29',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'premiumpaycode',
                  'index' : true,
                  'artifactId' : 'additionalpremiumpaycode_premiumpaycode_oslcshortTitle',
                  'maxSize' : 8,
                  'id' : 'aw950b9779',
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'premiumpaycodeForSearch',
                  'formula' : '${premiumpaycode}',
                  'index' : true,
                  'artifactId' : 'additionalpremiumpaycode_premiumpaycodeForSearch_string',
                  'id' : 'aw391684e',
                  'persistent' : true,
                  'local' : true,
               }).
               setQueryBases([
                     {name:'getpremiumpaycode', queryString:'\/oslc\/os\/oslcpremiumpay', queryLabel:'' }
               ]);
            var resourcePromise048 = PersistenceManager.initCollection( resource048 );


            var resource049 = new ResourceMetadata({
                  'pageSize' : 200,
                  'resourceName' : 'additionalpremiumpaycraftrate',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'additionalpremiumpaycraftrate',
                  'additionalData' : true,
                  'id' : 'awed0f7b81',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:ppcraftrateid,spi:orgid,spi:craft,spi:premiumpaycode').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'ppcraftrateid',
                  'index' : false,
                  'artifactId' : 'additionalpremiumpaycraftrate_ppcraftrateid_spippcraftrateid',
                  'id' : 'aw5dfcb995',
                  'local' : false,
                  'remoteName' : 'spi:ppcraftrateid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : true,
                  'artifactId' : 'additionalpremiumpaycraftrate_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw24969d4c',
                  'key' : '1',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'craft',
                  'index' : true,
                  'artifactId' : 'additionalpremiumpaycraftrate_craft_spicraft',
                  'maxSize' : 8,
                  'id' : 'awe5a41b7',
                  'key' : '2',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:craft',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'premiumpaycode',
                  'index' : true,
                  'artifactId' : 'additionalpremiumpaycraftrate_premiumpaycode_spipremiumpaycode',
                  'maxSize' : 8,
                  'id' : 'awa5e1949d',
                  'key' : '3',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:premiumpaycode',
               }).
               setQueryBases([
                     {name:'getppcraftrate', queryString:'\/oslc\/os\/oslcppcraftrate', queryLabel:'' }
               ]);
            var resourcePromise049 = PersistenceManager.initCollection( resource049 );


            var resource050 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'assetattrtypes',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'assetattrtypes',
                  'id' : 'awe87f671c',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:orgid,spi:siteid,spi:maxvalue,spi:value,dcterms:title,spi:defaults,oslc:shortTitle,dcterms:identifier').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'assetattrtypes_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'awbc6d2661',
                  'local' : false,
                  'pkIndex' : 5,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'assetattrtypes_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'aw64d9f52b',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'assetattrtypes_maxvalue_spimaxvalue',
                  'maxSize' : 50,
                  'id' : 'awc5c691fb',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:maxvalue',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'assetattrtypes_value_spivalue',
                  'maxSize' : 50,
                  'id' : 'awf58139cd',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'assetattrtypes_description_dctermstitle',
                  'maxSize' : 256,
                  'id' : 'aw37ff9177',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaults',
                  'index' : false,
                  'artifactId' : 'assetattrtypes_defaults_spidefaults',
                  'id' : 'aw5d0c63bb',
                  'local' : false,
                  'remoteName' : 'spi:defaults',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'assetattrtypes_domainid_oslcshortTitle',
                  'maxSize' : 18,
                  'id' : 'aw947fa8ea',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'synonymdomainid',
                  'index' : false,
                  'artifactId' : 'assetattrtypes_synonymdomainid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw2bc1e679',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getassetattrtypes', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22DATATYPE%22');
            var resourcePromise050 = PersistenceManager.initCollection( resource050 );


            var resource051 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'domaintypes',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'domaintypes',
                  'id' : 'awa9c9d44c',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:orgid,spi:siteid,spi:maxvalue,spi:value,dcterms:title,spi:defaults,oslc:shortTitle,dcterms:identifier').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'domaintypes_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'awca00a0a4',
                  'local' : false,
                  'pkIndex' : 5,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'domaintypes_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'awd68f8658',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'domaintypes_maxvalue_spimaxvalue',
                  'maxSize' : 50,
                  'id' : 'aw237560f2',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:maxvalue',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'domaintypes_value_spivalue',
                  'maxSize' : 50,
                  'id' : 'aw83ecbf08',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'domaintypes_description_dctermstitle',
                  'maxSize' : 256,
                  'id' : 'aw78707d2c',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaults',
                  'index' : false,
                  'artifactId' : 'domaintypes_defaults_spidefaults',
                  'id' : 'awbbbf92b2',
                  'local' : false,
                  'remoteName' : 'spi:defaults',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'domaintypes_domainid_oslcshortTitle',
                  'maxSize' : 18,
                  'id' : 'awc461a149',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'synonymdomainid',
                  'index' : false,
                  'artifactId' : 'domaintypes_synonymdomainid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw8fe92b5e',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getdomaintypes', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22DOMTYPE%22');
            var resourcePromise051 = PersistenceManager.initCollection( resource051 );


            var resource052 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'metertypes',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'metertypes',
                  'id' : 'awf90b0d92',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:orgid,spi:siteid,spi:maxvalue,spi:value,dcterms:title,spi:defaults,oslc:shortTitle,dcterms:identifier').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'metertypes_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'awac832c9c',
                  'local' : false,
                  'pkIndex' : 5,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'metertypes_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'aw251e932b',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'metertypes_maxvalue_spimaxvalue',
                  'maxSize' : 50,
                  'id' : 'awcfc16e6',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:maxvalue',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'metertypes_value_spivalue',
                  'maxSize' : 50,
                  'id' : 'awe56f3330',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'metertypes_description_dctermstitle',
                  'maxSize' : 256,
                  'id' : 'awb6e7b75d',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaults',
                  'index' : false,
                  'artifactId' : 'metertypes_defaults_spidefaults',
                  'id' : 'aw9436e4a6',
                  'local' : false,
                  'remoteName' : 'spi:defaults',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'metertypes_domainid_oslcshortTitle',
                  'maxSize' : 18,
                  'id' : 'aw324f4f3e',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'synonymdomainid',
                  'index' : false,
                  'artifactId' : 'metertypes_synonymdomainid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw82da9041',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getmetertypes', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22METERTYPE%22');
            var resourcePromise052 = PersistenceManager.initCollection( resource052 );


            var resource053 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'readingtypes',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'readingtypes',
                  'id' : 'aw3343917f',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:orgid,spi:siteid,spi:maxvalue,spi:value,dcterms:title,spi:defaults,oslc:shortTitle,dcterms:identifier').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'readingtypes_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'awce1ddbdc',
                  'local' : false,
                  'pkIndex' : 5,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'readingtypes_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'awf6bed90f',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'readingtypes_maxvalue_spimaxvalue',
                  'maxSize' : 50,
                  'id' : 'awef7c191e',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:maxvalue',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'readingtypes_value_spivalue',
                  'maxSize' : 50,
                  'id' : 'aw87f1c470',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'readingtypes_description_dctermstitle',
                  'maxSize' : 256,
                  'id' : 'awfce9e5a1',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaults',
                  'index' : false,
                  'artifactId' : 'readingtypes_defaults_spidefaults',
                  'id' : 'aw77b6eb5e',
                  'local' : false,
                  'remoteName' : 'spi:defaults',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'readingtypes_domainid_oslcshortTitle',
                  'maxSize' : 18,
                  'id' : 'awe3b8f25a',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'synonymdomainid',
                  'index' : false,
                  'artifactId' : 'readingtypes_synonymdomainid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw1be70623',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getreadingtypes', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22READINGTYPE%22');
            var resourcePromise053 = PersistenceManager.initCollection( resource053 );


            var resource054 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'domainwostatus',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'domainwostatus',
                  'id' : 'awe2144736',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:orgid,spi:siteid,spi:maxvalue,spi:value,dcterms:title,spi:defaults,oslc:shortTitle,dcterms:identifier').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'domainwostatus_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw9dce90ad',
                  'local' : false,
                  'pkIndex' : 5,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'domainwostatus_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'aw21945a73',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'domainwostatus_maxvalue_spimaxvalue',
                  'maxSize' : 50,
                  'id' : 'aw5a3a28bc',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:maxvalue',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'domainwostatus_value_spivalue',
                  'maxSize' : 50,
                  'id' : 'awd4228f01',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'domainwostatus_description_dctermstitle',
                  'maxSize' : 256,
                  'id' : 'aw230a1408',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaults',
                  'index' : false,
                  'artifactId' : 'domainwostatus_defaults_spidefaults',
                  'id' : 'awc2f0dafc',
                  'local' : false,
                  'remoteName' : 'spi:defaults',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'domainwostatus_domainid_oslcshortTitle',
                  'maxSize' : 18,
                  'id' : 'aw60a698f6',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'synonymdomainid',
                  'index' : false,
                  'artifactId' : 'domainwostatus_synonymdomainid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awb1013430',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getwostatus', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22WOSTATUS%22+and+spi%3Asiteid%21%3D%22*%22+and+spi%3Aorgid%21%3D%22*%22');
            var resourcePromise054 = PersistenceManager.initCollection( resource054 );


            var resource055 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'additionalLineType',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'additionalLineType',
                  'id' : 'aw1e788268',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:orgid,spi:siteid,spi:maxvalue,spi:value,dcterms:title,spi:defaults,oslc:shortTitle,dcterms:identifier').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'additionalLineType_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw6d83daa4',
                  'local' : false,
                  'pkIndex' : 5,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'additionalLineType_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'aw665fb9f9',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'additionalLineType_maxvalue_spimaxvalue',
                  'maxSize' : 50,
                  'id' : 'awb3cccaac',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:maxvalue',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'additionalLineType_value_spivalue',
                  'maxSize' : 50,
                  'id' : 'aw246fc508',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'additionalLineType_description_dctermstitle',
                  'maxSize' : 256,
                  'id' : 'aw42455bbe',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaults',
                  'index' : false,
                  'artifactId' : 'additionalLineType_defaults_spidefaults',
                  'id' : 'aw2b0638ec',
                  'local' : false,
                  'remoteName' : 'spi:defaults',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'additionalLineType_domainid_oslcshortTitle',
                  'maxSize' : 18,
                  'id' : 'aw4416fd28',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'synonymdomainid',
                  'index' : false,
                  'artifactId' : 'additionalLineType_synonymdomainid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awb298409',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getlinetype', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22LINETYPE%22+and+spi%3Amaxvalue+in+%5B%22ITEM%22%2C%22MATERIAL%22%5D');
            var resourcePromise055 = PersistenceManager.initCollection( resource055 );


            var resource056 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'additionalloctype',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'additionalloctype',
                  'id' : 'awf341d40a',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:maxvalue,spi:value,oslc:shortTitle,dcterms:identifier').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'additionalloctype_maxvalue_spimaxvalue',
                  'maxSize' : 50,
                  'id' : 'aw34b204e7',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:maxvalue',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'additionalloctype_value_spivalue',
                  'maxSize' : 50,
                  'id' : 'aw47c85490',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'additionalloctype_domainid_oslcshortTitle',
                  'maxSize' : 18,
                  'id' : 'awda1d3975',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'synonymdomainid',
                  'index' : false,
                  'artifactId' : 'additionalloctype_synonymdomainid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw4075ca82',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getloctype', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22LOCTYPE%22+and+spi%3Amaxvalue%3D%22STOREROOM%22');
            var resourcePromise056 = PersistenceManager.initCollection( resource056 );


            var resource057 = new ResourceMetadata({
                  'pageSize' : 100,
                  'resourceName' : 'domainitemstatus',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'domainitemstatus',
                  'id' : 'aw7073e103',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:orgid,spi:siteid,spi:maxvalue,spi:value,dcterms:title,spi:defaults,oslc:shortTitle,dcterms:identifier').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'domainitemstatus_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw275f93fe',
                  'local' : false,
                  'pkIndex' : 5,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'domainitemstatus_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'aw290bbfcf',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'domainitemstatus_maxvalue_spimaxvalue',
                  'maxSize' : 50,
                  'id' : 'aw5ab5d532',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:maxvalue',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'domainitemstatus_value_spivalue',
                  'maxSize' : 50,
                  'id' : 'aw6eb38c52',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'domainitemstatus_description_dctermstitle',
                  'maxSize' : 256,
                  'id' : 'aw2f8bb107',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaults',
                  'index' : false,
                  'artifactId' : 'domainitemstatus_defaults_spidefaults',
                  'id' : 'awc27f2772',
                  'local' : false,
                  'remoteName' : 'spi:defaults',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'domainitemstatus_domainid_oslcshortTitle',
                  'maxSize' : 18,
                  'id' : 'aw5718af3d',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'synonymdomainid',
                  'index' : false,
                  'artifactId' : 'domainitemstatus_synonymdomainid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awd5b63334',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getitemstatus', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22ITEMSTATUS%22+and+spi%3Asiteid%21%3D%22*%22+and+spi%3Aorgid%21%3D%22*%22');
            var resourcePromise057 = PersistenceManager.initCollection( resource057 );


            var resource058 = new ResourceMetadata({
                  'pageSize' : 100,
                  'resourceName' : 'domainAssetstatus',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'domainAssetstatus',
                  'id' : 'aw1036c42d',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:orgid,spi:siteid,spi:maxvalue,spi:value,dcterms:title,spi:defaults,oslc:shortTitle,dcterms:identifier').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'domainAssetstatus_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw83deed10',
                  'local' : false,
                  'pkIndex' : 5,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'domainAssetstatus_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'aw5e4b9917',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'domainAssetstatus_maxvalue_spimaxvalue',
                  'maxSize' : 50,
                  'id' : 'awbb8dd58c',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:maxvalue',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'domainAssetstatus_value_spivalue',
                  'maxSize' : 50,
                  'id' : 'awca32f2bc',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'domainAssetstatus_description_dctermstitle',
                  'maxSize' : 256,
                  'id' : 'aw12b4e6bb',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaults',
                  'index' : false,
                  'artifactId' : 'domainAssetstatus_defaults_spidefaults',
                  'id' : 'aw234727cc',
                  'local' : false,
                  'remoteName' : 'spi:defaults',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'domainAssetstatus_domainid_oslcshortTitle',
                  'maxSize' : 18,
                  'id' : 'awb0dac458',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'synonymdomainid',
                  'index' : false,
                  'artifactId' : 'domainAssetstatus_synonymdomainid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awc2ca3baa',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getlocassetstatus', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22LOCASSETSTATUS%22+and+spi%3Asiteid%21%3D%22*%22+and+spi%3Aorgid%21%3D%22*%22');
            var resourcePromise058 = PersistenceManager.initCollection( resource058 );


            var resource059 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'domaintimerstatus',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'domaintimerstatus',
                  'id' : 'aw7e559e8b',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:orgid,spi:siteid,spi:maxvalue,spi:value,dcterms:title,spi:defaults,oslc:shortTitle,dcterms:identifier').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'domaintimerstatus_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'awe000ef47',
                  'local' : false,
                  'pkIndex' : 5,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'domaintimerstatus_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'aw45bf5076',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'domaintimerstatus_maxvalue_spimaxvalue',
                  'maxSize' : 50,
                  'id' : 'aw5cdc0570',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:maxvalue',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'domaintimerstatus_value_spivalue',
                  'maxSize' : 50,
                  'id' : 'awa9ecf0eb',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'domaintimerstatus_description_dctermstitle',
                  'maxSize' : 256,
                  'id' : 'awce43615a',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaults',
                  'index' : false,
                  'artifactId' : 'domaintimerstatus_defaults_spidefaults',
                  'id' : 'awc416f730',
                  'local' : false,
                  'remoteName' : 'spi:defaults',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'domaintimerstatus_domainid_oslcshortTitle',
                  'maxSize' : 18,
                  'id' : 'aw9150ea76',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'synonymdomainid',
                  'index' : false,
                  'artifactId' : 'domaintimerstatus_synonymdomainid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw725cfac2',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'gettimerstatus', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22TIMERSTATUS%22+and+spi%3Asiteid%21%3D%22*%22+and+spi%3Aorgid%21%3D%22*%22');
            var resourcePromise059 = PersistenceManager.initCollection( resource059 );


            var resource060 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'domainwoclass',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'domainwoclass',
                  'id' : 'awf038899c',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:orgid,spi:siteid,spi:maxvalue,spi:value,dcterms:title,spi:defaults,oslc:shortTitle,dcterms:identifier').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'domainwoclass_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'awfc35ef60',
                  'local' : false,
                  'pkIndex' : 5,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'domainwoclass_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'aw9f7afe26',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'domainwoclass_maxvalue_spimaxvalue',
                  'maxSize' : 50,
                  'id' : 'aw94bc6279',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:maxvalue',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'domainwoclass_value_spivalue',
                  'maxSize' : 50,
                  'id' : 'awb5d9f0cc',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'domainwoclass_description_dctermstitle',
                  'maxSize' : 256,
                  'id' : 'awe91d250',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaults',
                  'index' : false,
                  'artifactId' : 'domainwoclass_defaults_spidefaults',
                  'id' : 'awc769039',
                  'local' : false,
                  'remoteName' : 'spi:defaults',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'domainwoclass_domainid_oslcshortTitle',
                  'maxSize' : 18,
                  'id' : 'awf98f4d09',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'synonymdomainid',
                  'index' : false,
                  'artifactId' : 'domainwoclass_synonymdomainid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw92bfadc0',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getwoclass', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22WOCLASS%22');
            var resourcePromise060 = PersistenceManager.initCollection( resource060 );


            var resource061 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'domainrelatetype',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'domainrelatetype',
                  'id' : 'aw6a504711',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:orgid,spi:siteid,spi:maxvalue,spi:value,dcterms:title,spi:defaults,oslc:shortTitle,dcterms:identifier').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'domainrelatetype_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw95f5430a',
                  'local' : false,
                  'pkIndex' : 5,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'domainrelatetype_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'awdf08fb08',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'domainrelatetype_maxvalue_spimaxvalue',
                  'maxSize' : 50,
                  'id' : 'awb94f227b',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:maxvalue',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'domainrelatetype_value_spivalue',
                  'maxSize' : 50,
                  'id' : 'awdc195ca6',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'domainrelatetype_description_dctermstitle',
                  'maxSize' : 256,
                  'id' : 'awae4c7910',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaults',
                  'index' : false,
                  'artifactId' : 'domainrelatetype_defaults_spidefaults',
                  'id' : 'aw2185d03b',
                  'local' : false,
                  'remoteName' : 'spi:defaults',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'domainrelatetype_domainid_oslcshortTitle',
                  'maxSize' : 18,
                  'id' : 'aw2ec675e9',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'synonymdomainid',
                  'index' : false,
                  'artifactId' : 'domainrelatetype_synonymdomainid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw68022676',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getrelatetype', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22RELATETYPE%22');
            var resourcePromise061 = PersistenceManager.initCollection( resource061 );


            var resource062 = new ResourceMetadata({
                  'pageSize' : 10,
                  'resourceName' : 'domainlogtype',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'domainlogtype',
                  'id' : 'aw38008c42',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:maxvalue,spi:value,dcterms:title,spi:defaults,oslc:shortTitle,dcterms:identifier').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'domainlogtype_maxvalue_spimaxvalue',
                  'maxSize' : 50,
                  'id' : 'awde9f141e',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:maxvalue',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : true,
                  'artifactId' : 'domainlogtype_value_spivalue',
                  'maxSize' : 50,
                  'id' : 'aw17c502f1',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : true,
                  'artifactId' : 'domainlogtype_description_dctermstitle',
                  'maxSize' : 256,
                  'id' : 'awd0bcd6e7',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaults',
                  'index' : false,
                  'artifactId' : 'domainlogtype_defaults_spidefaults',
                  'id' : 'aw4655e65e',
                  'local' : false,
                  'remoteName' : 'spi:defaults',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'domainlogtype_domainid_oslcshortTitle',
                  'maxSize' : 18,
                  'id' : 'aw6f153fe4',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'synonymdomainid',
                  'index' : false,
                  'artifactId' : 'domainlogtype_synonymdomainid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awbcae2b6d',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getlogtype', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22LOGTYPE%22');
            var resourcePromise062 = PersistenceManager.initCollection( resource062 );


            var resource063 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'domainitemtype',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'domainitemtype',
                  'additionalData' : true,
                  'id' : 'awb03fcd84',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:orgid,spi:siteid,spi:maxvalue,spi:value,dcterms:title,spi:defaults,oslc:shortTitle,dcterms:identifier').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'domainitemtype_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw62db75ea',
                  'local' : false,
                  'pkIndex' : 5,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'domainitemtype_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'aw4ecc6a53',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'domainitemtype_maxvalue_spimaxvalue',
                  'maxSize' : 50,
                  'id' : 'aw710cc987',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:maxvalue',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'domainitemtype_value_spivaljue',
                  'maxSize' : 50,
                  'id' : 'aw2df65f89',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'domainitemtype_title_spidescription',
                  'maxSize' : 256,
                  'id' : 'awc76742a8',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaults',
                  'index' : false,
                  'artifactId' : 'domainitemtype_defaults_spidefaults',
                  'id' : 'awe9c63bc7',
                  'local' : false,
                  'remoteName' : 'spi:defaults',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'domainitemtype_shorttitle_spidomainid',
                  'maxSize' : 18,
                  'id' : 'aw52fb0acf',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'synonymdomainid',
                  'index' : false,
                  'artifactId' : 'domainitemtype_orgid_spisynonymdomainid',
                  'maxSize' : 19,
                  'id' : 'aw9e188d81',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getItemType', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22ITEMTYPE%22');
            var resourcePromise063 = PersistenceManager.initCollection( resource063 );


            var resource064 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'domainlabortransactiontype',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'domainlabortransactiontype',
                  'id' : 'awa7cb9071',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:orgid,spi:siteid,spi:maxvalue,spi:value,dcterms:title,spi:defaults,oslc:shortTitle,dcterms:identifier').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'domainlabortransactiontype_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw2bd16dc6',
                  'local' : false,
                  'pkIndex' : 5,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'domainlabortransactiontype_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'aw6491d0a1',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'domainlabortransactiontype_maxvalue_spimaxvalue',
                  'maxSize' : 50,
                  'id' : 'aw410486a2',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:maxvalue',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : true,
                  'artifactId' : 'domainlabortransactiontype_value_spivalue',
                  'maxSize' : 50,
                  'id' : 'aw623d726a',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'domainlabortransactiontype_description_dctermstitle',
                  'maxSize' : 256,
                  'id' : 'aw8b8a965f',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaults',
                  'index' : false,
                  'artifactId' : 'domainlabortransactiontype_defaults_spidefaults',
                  'id' : 'awd9ce74e2',
                  'local' : false,
                  'remoteName' : 'spi:defaults',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'domainlabortransactiontype_domainid_oslcshortTitle',
                  'maxSize' : 18,
                  'id' : 'aw87fb9a5b',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'synonymdomainid',
                  'index' : false,
                  'artifactId' : 'domainlabortransactiontype_synonymdomainid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awcb75e359',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getlttypework', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22LTTYPE%22+and+spi%3Amaxvalue%3D%22WORK%22');
            var resourcePromise064 = PersistenceManager.initCollection( resource064 );


            var resource065 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'domainlocationstatustype',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'domainlocationstatustype',
                  'id' : 'aw7ccb22f7',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:orgid,spi:siteid,spi:maxvalue,spi:value,dcterms:title,spi:defaults,oslc:shortTitle,dcterms:identifier').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'domainlocationstatustype_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'awa349b796',
                  'local' : false,
                  'pkIndex' : 5,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'domainlocationstatustype_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'awb82c3ea7',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'domainlocationstatustype_maxvalue_spimaxvalue',
                  'maxSize' : 50,
                  'id' : 'aw191d6ade',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:maxvalue',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'domainlocationstatustype_value_spivalue',
                  'maxSize' : 50,
                  'id' : 'aweaa5a83a',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'domainlocationstatustype_description_dctermstitle',
                  'maxSize' : 256,
                  'id' : 'awf42bd061',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaults',
                  'index' : false,
                  'artifactId' : 'domainlocationstatustype_defaults_spidefaults',
                  'id' : 'aw81d7989e',
                  'local' : false,
                  'remoteName' : 'spi:defaults',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'domainlocationstatustype_domainid_oslcshortTitle',
                  'maxSize' : 18,
                  'id' : 'aw4cb01f17',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'synonymdomainid',
                  'index' : false,
                  'artifactId' : 'domainlocationstatustype_synonymdomainid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awd9dc54bd',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getlocstat', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22LOCSTAT%22');
            var resourcePromise065 = PersistenceManager.initCollection( resource065 );


            var resource066 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'domaincrewstatustype',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'domaincrewstatustype',
                  'id' : 'aw5cd78050',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:orgid,spi:siteid,spi:maxvalue,spi:value,dcterms:title,spi:defaults,oslc:shortTitle,dcterms:identifier').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'domaincrewstatustype_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw67ffe1e7',
                  'local' : false,
                  'pkIndex' : 5,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'domaincrewstatustype_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'awc004667',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'domaincrewstatustype_maxvalue_spimaxvalue',
                  'maxSize' : 50,
                  'id' : 'awc08fa10b',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:maxvalue',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'domaincrewstatustype_value_spivalue',
                  'maxSize' : 50,
                  'id' : 'aw2e13fe4b',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'domaincrewstatustype_description_dctermstitle',
                  'maxSize' : 256,
                  'id' : 'awc4236283',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaults',
                  'index' : false,
                  'artifactId' : 'domaincrewstatustype_defaults_spidefaults',
                  'id' : 'aw5845534b',
                  'local' : false,
                  'remoteName' : 'spi:defaults',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'domaincrewstatustype_domainid_oslcshortTitle',
                  'maxSize' : 18,
                  'id' : 'awf1fd14f8',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'synonymdomainid',
                  'index' : false,
                  'artifactId' : 'domaincrewstatustype_synonymdomainid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw6e5a65c0',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getcrewstatus', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22CREWSTATUS%22');
            var resourcePromise066 = PersistenceManager.initCollection( resource066 );


            var resource067 = new ResourceMetadata({
                  'pageSize' : 200,
                  'resourceName' : 'maxdomain',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'maxdomain',
                  'id' : 'aw9e88f39c',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('spi_wm:domainid,spi_wm:maxdomainid,spi_wm:description,spi_wm:maxtype,spi_wm:domaintype').
               setSupportiveFieldsSelectExpression('spi_wm:numericdomain{spi_wm:value,spi_wm:valueid,spi_wm:numericdomainid,spi_wm:description},spi_wm:alndomain{spi_wm:value,spi_wm:valueid,spi_wm:alndomainid,spi_wm:description}').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'index' : true,
                  'maxSize' : 18,
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'name' : 'domainid',
                  'artifactId' : 'maxdomain_domainid_spi_wmdomainid',
                  'id' : 'awc9065e0f',
                  'key' : '1',
                  'pkIndex' : 1,
                  'remoteName' : 'spi_wm:domainid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'maxdomainid',
                  'index' : true,
                  'artifactId' : 'maxdomain_maxdomainid_spi_wmmaxdomainid',
                  'id' : 'awe4040bae',
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'remoteName' : 'spi_wm:maxdomainid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : true,
                  'artifactId' : 'maxdomain_description_spi_wmdescription',
                  'maxSize' : 100,
                  'id' : 'awbf81bbee',
                  'local' : false,
                  'remoteName' : 'spi_wm:description',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'maxtype',
                  'index' : false,
                  'artifactId' : 'maxdomain_maxtype_spi_wmmaxtype',
                  'maxSize' : 8,
                  'id' : 'awa4cffa46',
                  'local' : false,
                  'remoteName' : 'spi_wm:maxtype',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domaintype',
                  'index' : true,
                  'artifactId' : 'maxdomain_domaintype_spi_wmdomaintype',
                  'maxSize' : 20,
                  'id' : 'aw3560f116',
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'remoteName' : 'spi_wm:domaintype',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'numericDomainResource',
                  'name' : 'numericdomain',
                  'index' : true,
                  'artifactId' : 'maxdomain_numericdomain_spi_wmnumericdomain',
                  'id' : 'awc8144a7e',
                  'describedByResource' : 'numericDomainResource',
                  'local' : false,
                  'remoteName' : 'spi_wm:numericdomain',
                  'selectExpression' : 'spi_wm:numericdomain{spi_wm:value,spi_wm:valueid,spi_wm:numericdomainid,spi_wm:description}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'alnDomainResource',
                  'name' : 'alndomain',
                  'index' : true,
                  'artifactId' : 'maxdomain_alndomain_spi_wmalndomain',
                  'id' : 'awe8378d54',
                  'describedByResource' : 'alnDomainResource',
                  'local' : false,
                  'remoteName' : 'spi_wm:alndomain',
                  'selectExpression' : 'spi_wm:alndomain{spi_wm:value,spi_wm:valueid,spi_wm:alndomainid,spi_wm:description}',
               }).
               setQueryBases([
                     {name:'getmaxdomain', queryString:'\/oslc\/os\/oslcmaxdomain?savedQuery=getWorkOrderSpecificationDomains', queryLabel:'' }
               ]).
               setWhereClause('spi_wm%3Adomaintype+in+%5B%24%7Bdomaintypes%5Bmaxvalue%3DNUMERIC%5D.value%7D%2C%24%7Bdomaintypes%5Bmaxvalue%3DALN%5D.value%7D%5D');
            var resourcePromise067 = PersistenceManager.initCollection( resource067 );


            var resource068 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'numericDomainResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'numericDomainResource',
                  'id' : 'aw826a14cc',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
                  'classInstance' : MaxDomainObject,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi_wm:value,spi_wm:valueid,spi_wm:numericdomainid,spi_wm:description').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'name' : 'value',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'numericDomainResource_value_spi_wmvalue',
                  'id' : 'aw89dda200',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi_wm:value',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'valueid',
                  'index' : false,
                  'artifactId' : 'numericDomainResource_valueid_spi_wmvalueid',
                  'maxSize' : 300,
                  'id' : 'aw331b53bf',
                  'local' : false,
                  'remoteName' : 'spi_wm:valueid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'numericdomainid',
                  'index' : true,
                  'artifactId' : 'numericDomainResource_numericdomainid_spi_wmnumericdomainid',
                  'id' : 'awae247ee',
                  'isExactMatchIndex' : 'true',
                  'key' : '1',
                  'local' : false,
                  'remoteName' : 'spi_wm:numericdomainid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'serverDescription',
                  'index' : true,
                  'artifactId' : 'numericDomainResource_description_spi_wmdescription',
                  'maxSize' : 100,
                  'id' : 'aw171ba1ea',
                  'local' : false,
                  'remoteName' : 'spi_wm:description',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'description',
                  'formula' : '(${serverDescription} || ${value})',
                  'index' : true,
                  'artifactId' : 'numericDomainResource_description_local',
                  'id' : 'aw1aeac532',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise068 = PersistenceManager.initCollection( resource068 );


            var resource069 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'alnDomainResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'alnDomainResource',
                  'id' : 'awc3250113',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
                  'classInstance' : MaxDomainObject,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi_wm:value,spi_wm:valueid,spi_wm:alndomainid,spi_wm:description').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'alnDomainResource_value_spi_wmvalue',
                  'maxSize' : 254,
                  'id' : 'aw758c8835',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi_wm:value',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'valueid',
                  'index' : false,
                  'artifactId' : 'alnDomainResource_valueid_spi_wmvalueid',
                  'maxSize' : 300,
                  'id' : 'awd69f4a38',
                  'local' : false,
                  'remoteName' : 'spi_wm:valueid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'alndomainid',
                  'index' : true,
                  'artifactId' : 'alnDomainResource_alndomainid_spi_wmalndomainid',
                  'id' : 'awb35fc8f9',
                  'isExactMatchIndex' : 'true',
                  'key' : '1',
                  'local' : false,
                  'remoteName' : 'spi_wm:alndomainid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'serverDescription',
                  'index' : true,
                  'artifactId' : 'alnDomainResource_description_spi_wmdescription',
                  'maxSize' : 100,
                  'id' : 'awd9b6ea55',
                  'local' : false,
                  'remoteName' : 'spi_wm:description',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'description',
                  'formula' : '(${serverDescription} || ${value})',
                  'index' : true,
                  'artifactId' : 'alnDomainResource_description_local',
                  'id' : 'awe6bbef07',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise069 = PersistenceManager.initCollection( resource069 );


            var resource070 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'workOrderTimer',
                  'resourceName' : 'workOrderTimer',
                  'id' : 'awdb0cb18a',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'classInstance' : WorkOrderTimer,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'workOrderId',
                  'index' : true,
                  'artifactId' : 'workOrderTimer_workOrderId_string',
                  'id' : 'awf9d0352a',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'wonum',
                  'index' : false,
                  'artifactId' : 'workOrderTimer_wonum_string',
                  'id' : 'awaef093e7',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'labor',
                  'index' : false,
                  'artifactId' : 'workOrderTimer_labor_string',
                  'id' : 'aw745faf5',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'method' : 'startTimeChanged',
                  'dataType' : 'dateTime',
                  'name' : 'startTime',
                  'index' : false,
                  'artifactId' : 'workOrderTimer_startTime_dateTime',
                  'id' : 'aw9c4e553f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'method' : 'endTimeChanged',
                  'dataType' : 'dateTime',
                  'name' : 'endTime',
                  'index' : false,
                  'artifactId' : 'workOrderTimer_endTime_dateTime',
                  'id' : 'aw32888fda',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'method' : 'durationChanged',
                  'dataType' : 'duration',
                  'name' : 'duration',
                  'index' : false,
                  'artifactId' : 'workOrderTimer_duration_duration',
                  'id' : 'aw934c72d4',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'nextWorkOrderId',
                  'index' : false,
                  'artifactId' : 'workOrderTimer_nextWorkOrderId_string',
                  'id' : 'aw6d9af567',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'resetOnCleanup',
                  'index' : false,
                  'artifactId' : 'workOrderTimer_resetOnCleanup_boolean',
                  'id' : 'awde6590a7',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'deferredWonum',
                  'index' : false,
                  'artifactId' : 'workOrderTimer_deferredWonum_string',
                  'id' : 'awb7879ae0',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'deferredStartTime',
                  'index' : false,
                  'artifactId' : 'workOrderTimer_deferredStartTime_dateTime',
                  'id' : 'aw6944072c',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'useCrewToCreateActual',
                  'index' : false,
                  'artifactId' : 'workOrderTimer_useCrewToCreateActual_boolean',
                  'id' : 'aw7537ddb7',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'paused',
                  'index' : false,
                  'artifactId' : 'workOrderTimer_paused_boolean',
                  'id' : 'aw69f910b4',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise070 = PersistenceManager.initCollection( resource070 );


            var resource071 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'mapCache',
                  'resourceName' : 'mapCache',
                  'id' : 'aw4e8b936d',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'cacheId',
                  'index' : true,
                  'artifactId' : 'mapCache_cacheId_string',
                  'id' : 'awc91e2579',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'data',
                  'index' : false,
                  'artifactId' : 'mapCache_data_string',
                  'id' : 'aw5e40e19e',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise071 = PersistenceManager.initCollection( resource071 );


            var resource072 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'statusChangeResource',
                  'resourceName' : 'statusChangeResource',
                  'id' : 'aw8e54bcf7',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'status',
                  'index' : false,
                  'artifactId' : 'statusChangeResource_status_string',
                  'id' : 'awa736a284',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'statusdesc',
                  'index' : false,
                  'artifactId' : 'statusChangeResource_statusdesc_string',
                  'id' : 'aw5085f7de',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'changedate',
                  'index' : false,
                  'artifactId' : 'statusChangeResource_changedate_dateTime',
                  'id' : 'aw333260f4',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'memo',
                  'index' : false,
                  'artifactId' : 'statusChangeResource_memo_string',
                  'maxSize' : 50,
                  'id' : 'awbc5e5f99',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise072 = PersistenceManager.initCollection( resource072 );


            var resource073 = new ResourceMetadata({
                  'pageSize' : 200,
                  'resourceName' : 'oslcmaxvars',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'oslcmaxvars',
                  'id' : 'aw62c90710',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:varname,spi:varvalue,spi:orgid,dcterms:identifier').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'varname',
                  'index' : true,
                  'artifactId' : 'oslcmaxvars_varname_spivarname',
                  'maxSize' : 18,
                  'id' : 'aw5856cfa4',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:varname',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'varvalue',
                  'index' : false,
                  'artifactId' : 'oslcmaxvars_varvalue_spivarvalue',
                  'maxSize' : 254,
                  'id' : 'aw13572ab1',
                  'local' : false,
                  'remoteName' : 'spi:varvalue',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'oslcmaxvars_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'awf84390c8',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'oslcmaxvars_identifier_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awd301f76a',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getmaxvarsinprglabtrans', queryString:'\/oslc\/os\/oslcmaxvars', queryLabel:'' }
               ]).
               setWhereClause('spi%3Avarname+in+%5B%22STARTTIMERINPRG%22%2C%22LABTRANSTOLERANCE%22%5D');
            var resourcePromise073 = PersistenceManager.initCollection( resource073 );


            var resource074 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'additionalInventory',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'additionalInventory',
                  'additionalData' : true,
                  'id' : 'awa7cd3123',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:itemnum,spi:binnum,dcterms:identifier,spi:itemsetid,spi:location,spi:siteid,spi:status,spi:storeloc,spi:invitem{spi:itemtype,spi:rotating,dcterms:title},spi:invbalances{spi:curbal}').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'itemnum',
                  'index' : true,
                  'artifactId' : 'additionalInventory_itemnum_spiitemnum',
                  'maxSize' : 30,
                  'id' : 'awc2f5e7e0',
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:itemnum',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'itemnumForSearch',
                  'formula' : '${itemnum}',
                  'index' : true,
                  'artifactId' : 'additionalInventory_itemnumForSearch_string',
                  'id' : 'awe8b1002b',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'binnum',
                  'index' : true,
                  'artifactId' : 'additionalInventory_binnum_spibinnum',
                  'maxSize' : 8,
                  'id' : 'aw30666b7b',
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'remoteName' : 'spi:binnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'inventoryid',
                  'index' : false,
                  'artifactId' : 'additionalInventory_inventoryid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awe2db4393',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'itemsetid',
                  'index' : true,
                  'artifactId' : 'additionalInventory_itemsetid_spiitemsetid',
                  'maxSize' : 8,
                  'id' : 'aw38a8ca86',
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:itemsetid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'location',
                  'index' : true,
                  'artifactId' : 'additionalInventory_location_spilocation',
                  'maxSize' : 12,
                  'id' : 'aw1bdc9f6b',
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:location',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'locationForSearch',
                  'formula' : '${location}',
                  'index' : true,
                  'artifactId' : 'additionalInventory_locationForSearch_string',
                  'id' : 'aw43795a01',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : true,
                  'artifactId' : 'additionalInventory_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'aw3dea6f05',
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'status',
                  'index' : true,
                  'artifactId' : 'additionalInventory_status_spistatus',
                  'maxSize' : 16,
                  'id' : 'aw72e3b6e',
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'remoteName' : 'spi:status',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'storeloc',
                  'index' : false,
                  'artifactId' : 'additionalInventory_storeloc_spistoreloc',
                  'maxSize' : 12,
                  'id' : 'aw5af96676',
                  'local' : false,
                  'remoteName' : 'spi:storeloc',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi:curbal',
                  'dataType' : 'inline',
                  'referenceResource' : 'additionalInventory',
                  'name' : 'curbal',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'additionalInventory_curbal_spiinvbalancesspicurbal',
                  'id' : 'aw858a62d',
                  'local' : false,
                  'remoteName' : 'spi:invbalances',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'dcterms:title',
                  'dataType' : 'inline',
                  'referenceResource' : 'additionalInventory',
                  'name' : 'description',
                  'index' : true,
                  'artifactId' : 'additionalInventory_description_spiinvitemdctermstitle',
                  'maxSize' : 100,
                  'id' : 'aw287e46b5',
                  'local' : false,
                  'remoteName' : 'spi:invitem',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi:itemtype',
                  'dataType' : 'inline',
                  'usage' : 'upper',
                  'referenceResource' : 'additionalInventory',
                  'index' : true,
                  'maxSize' : 15,
                  'isExactMatchIndex' : 'true',
                  'local' : false,
                  'name' : 'itemtype',
                  'artifactId' : 'additionalInventory_itemtype_spiinvitemspiitemtype',
                  'id' : 'awd93c1476',
                  'remoteName' : 'spi:invitem',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi:rotating',
                  'dataType' : 'inline',
                  'referenceResource' : 'additionalInventory',
                  'name' : 'rotating',
                  'index' : false,
                  'artifactId' : 'additionalInventory_rotating_spiinvitemspirotating',
                  'id' : 'aw26f36005',
                  'local' : false,
                  'remoteName' : 'spi:invitem',
               }).
               setQueryBases([
                     {name:'getinventory', queryString:'\/oslc\/os\/oslcinventory', queryLabel:'' }
               ]);
            var resourcePromise074 = PersistenceManager.initCollection( resource074 );


            var resource075 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'wostatusResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'wostatusResource',
                  'id' : 'aw3056ff38',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
                  'classInstance' : WoStatusObject,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,spi_wm:status,spi_wm:changedate,spi_wm:changeby,spi_wm:memo,spi_wm:orgid,spi_wm:fincntrlid,spi_wm:parent,spi_wm:glaccount').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'wostatusResource_identifier_dcterms_identifier',
                  'maxSize' : 19,
                  'id' : 'aw41805fdf',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'status',
                  'index' : false,
                  'artifactId' : 'wostatusResource_status_spi_wmstatus',
                  'maxSize' : 16,
                  'id' : 'aw3cfdfd7',
                  'local' : false,
                  'remoteName' : 'spi_wm:status',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'datetime',
                  'name' : 'changedate',
                  'index' : false,
                  'artifactId' : 'wostatusResource_changedate_spi_wmchangedate',
                  'id' : 'awb0f70526',
                  'local' : false,
                  'remoteName' : 'spi_wm:changedate',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'changeby',
                  'index' : false,
                  'artifactId' : 'wostatusResource_changeby_spi_wmchangeby',
                  'maxSize' : 30,
                  'id' : 'awbfe9522d',
                  'local' : false,
                  'remoteName' : 'spi_wm:changeby',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'memo',
                  'index' : false,
                  'artifactId' : 'wostatusResource_memo_spi_wmmemo',
                  'maxSize' : 50,
                  'id' : 'awa89e120a',
                  'local' : false,
                  'remoteName' : 'spi_wm:memo',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'wostatusResource_orgid_spi_wmorgid',
                  'maxSize' : 8,
                  'id' : 'awa15d33bd',
                  'local' : false,
                  'remoteName' : 'spi_wm:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'fincntrlid',
                  'index' : false,
                  'artifactId' : 'wostatusResource_fincntrlid_spi_wmfincntrlid',
                  'maxSize' : 8,
                  'id' : 'awa31f7447',
                  'local' : false,
                  'remoteName' : 'spi_wm:fincntrlid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'parent',
                  'index' : false,
                  'artifactId' : 'wostatusResource_parent_spi_wmparent',
                  'maxSize' : 25,
                  'id' : 'awdf919f55',
                  'local' : false,
                  'remoteName' : 'spi_wm:parent',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'gl',
                  'name' : 'glaccount',
                  'index' : false,
                  'artifactId' : 'wostatusResource_glaccount_spi_wmglaccount',
                  'maxSize' : 23,
                  'id' : 'awbf255b1f',
                  'local' : false,
                  'remoteName' : 'spi_wm:glaccount',
               }).
               setQueryBases([
                     {name:'getwostatus', queryString:'\/oslc\/os\/oslcwostatus', queryLabel:'' }
               ]);
            var resourcePromise075 = PersistenceManager.initCollection( resource075 );


            var resource076 = new ResourceMetadata({
                  'pageSize' : 20,
                  'resourceName' : 'oslcwpeditsetting',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'oslcwpeditsetting',
                  'id' : 'awbdd17e53',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,spi:orgid,spi:status,spi:editasset,spi:editloc,spi:editglaccount,spi:editwptool,spi:plusceditpoint,spi:editwpser,spi:editwplab,spi:editwpmat').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'oslcwpeditsetting_identifier_dcterms_identifier',
                  'maxSize' : 19,
                  'id' : 'awc7a5c537',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : true,
                  'artifactId' : 'oslcwpeditsetting_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'awa7d012e3',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'status',
                  'index' : true,
                  'artifactId' : 'oslcwpeditsetting_status_spistatus',
                  'maxSize' : 8,
                  'id' : 'aw761cb481',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:status',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'editasset',
                  'index' : false,
                  'artifactId' : 'oslcwpeditsetting_editasset_spieditasset',
                  'id' : 'awb4694048',
                  'local' : false,
                  'remoteName' : 'spi:editasset',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'editloc',
                  'index' : false,
                  'artifactId' : 'oslcwpeditsetting_editloc_spieditloc',
                  'id' : 'aw60f15d9',
                  'local' : false,
                  'remoteName' : 'spi:editloc',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'editglaccount',
                  'index' : false,
                  'artifactId' : 'oslcwpeditsetting_editglaccount_spieditglaccount',
                  'id' : 'aw2cf49bcd',
                  'local' : false,
                  'remoteName' : 'spi:editglaccount',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'editwptool',
                  'index' : false,
                  'artifactId' : 'oslcwpeditsetting_editwptool_spieditwptool',
                  'id' : 'awf5915c39',
                  'local' : false,
                  'remoteName' : 'spi:editwptool',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'plusceditpoint',
                  'index' : false,
                  'artifactId' : 'oslcwpeditsetting_plusceditpoint_spiplusceditpoint',
                  'id' : 'aw5f465c7f',
                  'local' : false,
                  'remoteName' : 'spi:plusceditpoint',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'editwpser',
                  'index' : false,
                  'artifactId' : 'oslcwpeditsetting_editwpser_spieditwpser',
                  'id' : 'aw2b98d81e',
                  'local' : false,
                  'remoteName' : 'spi:editwpser',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'editwplab',
                  'index' : false,
                  'artifactId' : 'oslcwpeditsetting_editwplab_spieditwplab',
                  'id' : 'awc13ae998',
                  'local' : false,
                  'remoteName' : 'spi:editwplab',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'editwpmat',
                  'index' : false,
                  'artifactId' : 'oslcwpeditsetting_editwpmat_spieditwpmat',
                  'id' : 'aw434d0b5',
                  'local' : false,
                  'remoteName' : 'spi:editwpmat',
               }).
               setQueryBases([
                     {name:'getwpeditsetting', queryString:'\/oslc\/os\/oslcwpeditsetting', queryLabel:'' }
               ]);
            var resourcePromise076 = PersistenceManager.initCollection( resource076 );


            var resource077 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'materialSummary',
                  'resourceName' : 'materialSummary',
                  'id' : 'aw69943347',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'itemdisplay',
                  'index' : false,
                  'artifactId' : 'materialSummary_itemdisplay_string',
                  'id' : 'aweee7de53',
                  'persistent' : true,
                  'key' : '1',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'descdisplay',
                  'index' : false,
                  'artifactId' : 'materialSummary_descdisplay_string',
                  'id' : 'awd57e0c89',
                  'persistent' : true,
                  'key' : '2',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'storeroomdisplay',
                  'index' : false,
                  'artifactId' : 'materialSummary_storeroomdisplay_string',
                  'id' : 'awa8fab96b',
                  'persistent' : true,
                  'key' : '3',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'quantitydisplay',
                  'index' : false,
                  'artifactId' : 'materialSummary_quantitydisplay_string',
                  'id' : 'awe8292520',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'materialcheckbox',
                  'index' : false,
                  'artifactId' : 'materialSummary_materialcheckbox_boolean',
                  'id' : 'aw5c5b2cb3',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise077 = PersistenceManager.initCollection( resource077 );


            var resource078 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'toolSummary',
                  'resourceName' : 'toolSummary',
                  'id' : 'aw9df7b460',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'tooldisplay',
                  'index' : false,
                  'artifactId' : 'toolSummary_tooldisplay_string',
                  'id' : 'aw8856ae59',
                  'persistent' : true,
                  'key' : '1',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'descdisplay',
                  'index' : false,
                  'artifactId' : 'toolSummary_descdisplay_string',
                  'id' : 'aw815403d3',
                  'persistent' : true,
                  'key' : '2',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'storeroomdisplay',
                  'index' : false,
                  'artifactId' : 'toolSummary_storeroomdisplay_string',
                  'id' : 'aw69372531',
                  'persistent' : true,
                  'key' : '3',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'quantitydisplay',
                  'index' : false,
                  'artifactId' : 'toolSummary_quantitydisplay_string',
                  'id' : 'aw44a8d41e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'toolcheckbox',
                  'index' : false,
                  'artifactId' : 'toolSummary_toolcheckbox_boolean',
                  'id' : 'awc95cd17',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise078 = PersistenceManager.initCollection( resource078 );


            var resource079 = new ResourceMetadata({
                  'pageSize' : 20,
                  'resourceName' : 'domaincrewstatus',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'domaincrewstatus',
                  'id' : 'awd7e5cbc0',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:orgid,spi:siteid,spi:maxvalue,spi:value,dcterms:title,spi:defaults,oslc:shortTitle,dcterms:identifier').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : true,
                  'artifactId' : 'domaincrewstatus_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw15ebd185',
                  'local' : false,
                  'pkIndex' : 5,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : true,
                  'artifactId' : 'domaincrewstatus_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'aw7d120dfa',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'domaincrewstatus_maxvalue_spimaxvalue',
                  'maxSize' : 50,
                  'id' : 'awac9ccb2a',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:maxvalue',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'domaincrewstatus_value_spivalue',
                  'maxSize' : 50,
                  'id' : 'aw5c07ce29',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'domaincrewstatus_description_dctermstitle',
                  'maxSize' : 256,
                  'id' : 'awbc0688cf',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaults',
                  'index' : false,
                  'artifactId' : 'domaincrewstatus_defaults_spidefaults',
                  'id' : 'aw3456396a',
                  'local' : false,
                  'remoteName' : 'spi:defaults',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'domaincrewstatus_domainid_oslcshortTitle',
                  'maxSize' : 18,
                  'id' : 'awd3defab0',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'synonymdomainid',
                  'index' : false,
                  'artifactId' : 'domaincrewstatus_synonymdomainid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw3e1835ed',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getcrewstatus', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22CREWSTATUS%22+and+spi%3Asiteid%21%3D%22*%22+and+spi%3Aorgid%21%3D%22*%22');
            var resourcePromise079 = PersistenceManager.initCollection( resource079 );


            var resource080 = new ResourceMetadata({
                  'refreshOnLogin' : 'true',
                  'pageSize' : 10,
                  'resourceName' : 'laborcrew',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'laborcrew',
                  'additionalData' : true,
                  'id' : 'aw8e8b0a79',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
                  'classInstance' : CrewLaborObject,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,oslc:shortTitle,dcterms:title,spi:vendor,spi:contractnum').
               setSupportiveFieldsSelectExpression('spi:amcrewamcrewlabor{spi:laborcode,spi:skilllevel,spi:position,spi:craft,spi:effectivedate,spi:enddate,spi:vendor,spi:contractnum,spi:amcrewlaborid},spi:amcrewamcrewtool{spi:assetnum,spi:effectivedate,spi:enddate,spi:toolseq,spi:siteid,spi:amcrewtoolid}').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'laborcrew_identifier_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awad8a1191',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'crewid',
                  'index' : true,
                  'artifactId' : 'laborcrew_crewid_oslcshortTitle',
                  'maxSize' : 8,
                  'id' : 'aw8c516420',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'laborcrew_description_dctermstitle',
                  'maxSize' : 50,
                  'id' : 'awbd5bb63d',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'vendor',
                  'index' : false,
                  'artifactId' : 'laborcrew_vendor_spivendor',
                  'maxSize' : 12,
                  'id' : 'aw933559dd',
                  'local' : false,
                  'remoteName' : 'spi:vendor',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'contractnum',
                  'index' : false,
                  'artifactId' : 'laborcrew_contractnum_spicontractnum',
                  'maxSize' : 8,
                  'id' : 'awec4d3732',
                  'local' : false,
                  'remoteName' : 'spi:contractnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'laborCrewList',
                  'name' : 'crewlabor',
                  'index' : false,
                  'artifactId' : 'laborcrew_crewlabor_spiamcrewamcrewlabor',
                  'id' : 'aw92618bf1',
                  'describedByResource' : 'laborCrewList',
                  'local' : false,
                  'remoteName' : 'spi:amcrewamcrewlabor',
                  'selectExpression' : 'spi:amcrewamcrewlabor{spi:laborcode,spi:skilllevel,spi:position,spi:craft,spi:effectivedate,spi:enddate,spi:vendor,spi:contractnum,spi:amcrewlaborid}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'toolCrewList',
                  'name' : 'crewtool',
                  'index' : false,
                  'artifactId' : 'laborcrew_crewtool_spiamcrewamcrewtool',
                  'id' : 'aw56d92612',
                  'describedByResource' : 'toolCrewList',
                  'local' : false,
                  'remoteName' : 'spi:amcrewamcrewtool',
                  'selectExpression' : 'spi:amcrewamcrewtool{spi:assetnum,spi:effectivedate,spi:enddate,spi:toolseq,spi:siteid,spi:amcrewtoolid}',
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'actualstaskid',
                  'index' : false,
                  'artifactId' : 'laborcrew_actualstaskid_integer',
                  'id' : 'aw1e6a0e06',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'method' : 'startDateChanged',
                  'dataType' : 'date',
                  'name' : 'startdate',
                  'index' : false,
                  'artifactId' : 'laborcrew_startdate_date',
                  'id' : 'awb9fd141',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'method' : 'startTimeChanged',
                  'dataType' : 'time',
                  'name' : 'starttime',
                  'index' : false,
                  'artifactId' : 'laborcrew_starttime_time',
                  'id' : 'aw43f6fea7',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'method' : 'finishDateChanged',
                  'dataType' : 'date',
                  'name' : 'finishdate',
                  'index' : false,
                  'artifactId' : 'laborcrew_finishdate_date',
                  'id' : 'aw93c5622b',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'method' : 'finishTimeChanged',
                  'dataType' : 'time',
                  'name' : 'finishtime',
                  'index' : false,
                  'artifactId' : 'laborcrew_finishtime_time',
                  'id' : 'awdbac4dcd',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'method' : 'regularHoursChanged',
                  'dataType' : 'duration',
                  'name' : 'regularhours',
                  'index' : false,
                  'artifactId' : 'laborcrew_regularhours_duration',
                  'id' : 'aw7fff1b',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'transtype',
                  'index' : false,
                  'artifactId' : 'laborcrew_transtype_string',
                  'id' : 'awa920352f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'revisionnum',
                  'index' : false,
                  'artifactId' : 'laborcrew_revisionnum_string',
                  'id' : 'aw70f9fc7a',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'premiumpaycode',
                  'index' : false,
                  'artifactId' : 'laborcrew_premiumpaycode_string',
                  'id' : 'awab33f959',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'premiumpayhours',
                  'index' : false,
                  'artifactId' : 'laborcrew_premiumpayhours_string',
                  'id' : 'aw5833c04',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'timerStatus',
                  'index' : false,
                  'artifactId' : 'laborcrew_timerStatus_string',
                  'id' : 'aw572711a',
                  'persistent' : true,
                  'local' : true,
               }).
               setQueryBases([
                     {name:'getamcrew', queryString:'\/oslc\/os\/oslcamcrew', queryLabel:'' }
               ]).
               setWhereClause('spi%3Aamcrewamcrewlabor%7Bspi%3Alaborcode%3D%24%7Bmylabor.laborcode%7D%7D+and+spi%3Aorgid%3D%24%7Bmylabor.orgid%7D+and+spi%3Astatus+in+%5B%24%7Bdomaincrewstatus%5Bmaxvalue%3DACTIVE%5D.value%7D%5D');
            var resourcePromise080 = PersistenceManager.initCollection( resource080 );


            var resource081 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'searchWorkOrder',
                  'resourceName' : 'searchWorkOrder',
                  'id' : 'aw2c6811c9',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'wonum',
                  'index' : true,
                  'artifactId' : 'searchWorkOrder_wonum_string',
                  'id' : 'awc4dca8c0',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'searchWorkOrder_description_string',
                  'id' : 'aw9d25a996',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'statusdesc',
                  'index' : false,
                  'artifactId' : 'searchWorkOrder_statusdesc_string',
                  'id' : 'aw8422b2e0',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'asset',
                  'index' : false,
                  'artifactId' : 'searchWorkOrder_asset_string',
                  'id' : 'aw9e71d4f9',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'location',
                  'index' : false,
                  'artifactId' : 'searchWorkOrder_location_string',
                  'id' : 'aw6c36ef21',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'priority',
                  'index' : false,
                  'artifactId' : 'searchWorkOrder_priority_string',
                  'id' : 'awdfd90e58',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'date',
                  'name' : 'startdate',
                  'index' : false,
                  'artifactId' : 'searchWorkOrder_startdate_date',
                  'id' : 'aw27ab3eaa',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'date',
                  'name' : 'enddate',
                  'index' : false,
                  'artifactId' : 'searchWorkOrder_enddate_date',
                  'id' : 'aw9521872e',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise081 = PersistenceManager.initCollection( resource081 );


            var resource082 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'crewToolResource',
                  'resourceName' : 'crewToolResource',
                  'id' : 'awdb3ee56c',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'classInstance' : CrewToolObject,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'amcrew',
                  'index' : true,
                  'artifactId' : 'crewToolResource_amcrew_string',
                  'id' : 'aw704ec380',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'itemnum',
                  'index' : false,
                  'artifactId' : 'crewToolResource_itemnum_string',
                  'id' : 'awe6d79daf',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'crewToolResource_description_string',
                  'id' : 'awe0d0c2be',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'itemsetid',
                  'index' : false,
                  'artifactId' : 'crewToolResource_itemsetid_string',
                  'id' : 'aw8c382269',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'toolseq',
                  'index' : false,
                  'artifactId' : 'crewToolResource_toolseq_string',
                  'id' : 'aw1a6c930d',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'crewToolResource_siteid_string',
                  'id' : 'awf1ac656b',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'assetnum',
                  'index' : false,
                  'artifactId' : 'crewToolResource_assetnum_string',
                  'id' : 'aw75dba2b7',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'method' : 'toolHoursChanged',
                  'dataType' : 'duration',
                  'name' : 'toolhrs',
                  'index' : false,
                  'artifactId' : 'crewToolResource_toolhrs_duration',
                  'id' : 'awfeef2526',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'actualstaskid',
                  'index' : false,
                  'artifactId' : 'crewToolResource_actualstaskid_integer',
                  'id' : 'aw3b1af8a6',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise082 = PersistenceManager.initCollection( resource082 );


            var resource083 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'crewLaborResource',
                  'resourceName' : 'crewLaborResource',
                  'id' : 'awd4953e9',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'classInstance' : CrewLaborObject,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'amcrew',
                  'index' : true,
                  'artifactId' : 'crewLaborResource_amcrew_string',
                  'id' : 'awc7501f69',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'actualstaskid',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_actualstaskid_integer',
                  'id' : 'aw50dd1832',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'laborcode',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_laborcode_string',
                  'id' : 'aw641f8622',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'laborname',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_laborname_string',
                  'id' : 'aw1de14dcd',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'craft',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_craft_string',
                  'id' : 'aw21b9a2d5',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'skilllevel',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_skilllevel_string',
                  'id' : 'aw6c2b55c3',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'position',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_position_string',
                  'id' : 'aw946bb3e1',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'transtype',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_transtype_string',
                  'id' : 'awc237516e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'vendor',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_vendor_string',
                  'id' : 'aw34c2f147',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'contractnum',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_contractnum_string',
                  'id' : 'aw839ed68f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'revisionnum',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_revisionnum_string',
                  'id' : 'awd3444c68',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'method' : 'startDateChanged',
                  'dataType' : 'date',
                  'name' : 'startdate',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_startdate_date',
                  'id' : 'awe2c5368f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'method' : 'startTimeChanged',
                  'dataType' : 'time',
                  'name' : 'starttime',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_starttime_time',
                  'id' : 'awaaac1969',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'method' : 'finishDateChanged',
                  'dataType' : 'date',
                  'name' : 'finishdate',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_finishdate_date',
                  'id' : 'aweff0d77b',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'method' : 'finishTimeChanged',
                  'dataType' : 'time',
                  'name' : 'finishtime',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_finishtime_time',
                  'id' : 'awa799f89d',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'method' : 'regularHoursChanged',
                  'dataType' : 'duration',
                  'name' : 'regularhours',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_regularhours_duration',
                  'id' : 'aw4ec8e92f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'duration',
                  'name' : 'premiumpayhours',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_premiumpayhours_duration',
                  'id' : 'awfd09a984',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'premiumpaycode',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_premiumpaycode_string',
                  'id' : 'awe584ef6d',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'duration',
                  'name' : 'actuallaborhours',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_actuallaborhours_duration',
                  'id' : 'awb50acf2f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'timerStatus',
                  'index' : false,
                  'artifactId' : 'crewLaborResource_timerStatus_string',
                  'id' : 'awa6cfc108',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise083 = PersistenceManager.initCollection( resource083 );


            var resource084 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'laborCrewList',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'laborCrewList',
                  'id' : 'awd45bb017',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:laborcode,spi:skilllevel,spi:position,spi:craft,spi:effectivedate,spi:enddate,spi:vendor,spi:contractnum,spi:amcrewlaborid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'laborcode',
                  'index' : true,
                  'artifactId' : 'laborCrewList_laborcode_spilaborcode',
                  'maxSize' : 8,
                  'id' : 'aw3df08ccd',
                  'local' : false,
                  'remoteName' : 'spi:laborcode',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'skilllevel',
                  'index' : false,
                  'artifactId' : 'laborCrewList_skilllevel_spiskilllevel',
                  'maxSize' : 15,
                  'id' : 'aw6f0b22d8',
                  'local' : false,
                  'remoteName' : 'spi:skilllevel',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'position',
                  'index' : false,
                  'artifactId' : 'laborCrewList_position_spiposition',
                  'maxSize' : 20,
                  'id' : 'awf0f9e9b',
                  'key' : '1',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:position',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'craft',
                  'index' : false,
                  'artifactId' : 'laborCrewList_craft_spicraft',
                  'maxSize' : 8,
                  'id' : 'aweb04883d',
                  'local' : false,
                  'remoteName' : 'spi:craft',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'datetime',
                  'name' : 'effectivedate',
                  'index' : false,
                  'artifactId' : 'laborCrewList_effectivedate_spieffectivedate',
                  'id' : 'aw2a6da13d',
                  'local' : false,
                  'remoteName' : 'spi:effectivedate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'enddate',
                  'index' : false,
                  'artifactId' : 'laborCrewList_enddate_spienddate',
                  'id' : 'awf6ac64aa',
                  'local' : false,
                  'remoteName' : 'spi:enddate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'vendor',
                  'index' : false,
                  'artifactId' : 'laborCrewList_vendor_spivendor',
                  'maxSize' : 12,
                  'id' : 'awcd80e1f1',
                  'local' : false,
                  'remoteName' : 'spi:vendor',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'contractnum',
                  'index' : false,
                  'artifactId' : 'laborCrewList_contractnum_spicontractnum',
                  'maxSize' : 8,
                  'id' : 'awa76cfcc0',
                  'local' : false,
                  'remoteName' : 'spi:contractnum',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'amcrewlaborid',
                  'index' : false,
                  'artifactId' : 'laborCrewList_AMCREWLABORID_spiamcrewlaborid',
                  'id' : 'aw36d69215',
                  'key' : '2',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:amcrewlaborid',
               });
            var resourcePromise084 = PersistenceManager.initCollection( resource084 );


            var resource085 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'toolCrewList',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'toolCrewList',
                  'id' : 'awf9e1d57',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:assetnum,spi:effectivedate,spi:enddate,spi:toolseq,spi:siteid,spi:amcrewtoolid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'assetnum',
                  'index' : true,
                  'artifactId' : 'toolCrewList_assetnum_spiassetnum',
                  'maxSize' : 25,
                  'id' : 'aw9a3b0423',
                  'local' : false,
                  'remoteName' : 'spi:assetnum',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'datetime',
                  'name' : 'effectivedate',
                  'index' : false,
                  'artifactId' : 'toolCrewList_effectivedate_spieffectivedate',
                  'id' : 'awcae7313',
                  'local' : false,
                  'remoteName' : 'spi:effectivedate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'enddate',
                  'index' : false,
                  'artifactId' : 'toolCrewList_enddate_spienddate',
                  'id' : 'aw66395565',
                  'local' : false,
                  'remoteName' : 'spi:enddate',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'toolseq',
                  'index' : false,
                  'artifactId' : 'toolCrewList_toolseq_spitoolseq',
                  'maxSize' : 8,
                  'id' : 'awba5f1faa',
                  'key' : '1',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:toolseq',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'toolCrewList_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'aw78e1294b',
                  'local' : false,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'amcrewtoolid',
                  'index' : false,
                  'artifactId' : 'toolCrewList_amcrewtoolid_spiamcrewtoolid',
                  'id' : 'aw736af7a7',
                  'key' : '2',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:amcrewtoolid',
               });
            var resourcePromise085 = PersistenceManager.initCollection( resource085 );


            var resource086 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'userInfo',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'userInfo',
                  'id' : 'awcdc6e618',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,spi:userid,spi:loginid,spi:storeroomsite,spi:type,spi:personid,spi:sysuser,spi:querywithsite,spi:status,spi:emailpswd,spi:screenreader,spi:failedlogins,spi:inactivesites,spi:defsite{spi:orgid,oslc:shortTitle}').
               setSupportiveFieldsSelectExpression('spi:groupuser{spi:groupname}').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'maxuserid',
                  'index' : false,
                  'artifactId' : 'userInfo_maxuserid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awde7d904c',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'userid',
                  'index' : false,
                  'artifactId' : 'userInfo_userid_spiuserid',
                  'maxSize' : 30,
                  'id' : 'aw1721e125',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:userid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'loginid',
                  'index' : false,
                  'artifactId' : 'userInfo_loginid_spiloginid',
                  'maxSize' : 50,
                  'id' : 'aw571ea7ff',
                  'local' : false,
                  'remoteName' : 'spi:loginid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'storeroomsite',
                  'index' : false,
                  'artifactId' : 'userInfo_storeroomsite_spistoreroomsite',
                  'maxSize' : 8,
                  'id' : 'aw783663cd',
                  'local' : false,
                  'remoteName' : 'spi:storeroomsite',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'type',
                  'index' : false,
                  'artifactId' : 'userInfo_type_spitype',
                  'maxSize' : 30,
                  'id' : 'aw8dfd38c1',
                  'local' : false,
                  'remoteName' : 'spi:type',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'personid',
                  'index' : false,
                  'artifactId' : 'userInfo_personid_spipersonid',
                  'maxSize' : 30,
                  'id' : 'aw5921e790',
                  'local' : false,
                  'remoteName' : 'spi:personid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'sysuser',
                  'index' : false,
                  'artifactId' : 'userInfo_sysuser_spisysuser',
                  'id' : 'aw23d89622',
                  'local' : false,
                  'remoteName' : 'spi:sysuser',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'querywithsite',
                  'index' : false,
                  'artifactId' : 'userInfo_querywithsite_spiquerywithsite',
                  'id' : 'awb3145bb0',
                  'local' : false,
                  'remoteName' : 'spi:querywithsite',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'userInfo',
                  'name' : 'defsite',
                  'index' : false,
                  'artifactId' : 'userInfo_defsite_spidefsiteoslcshortTitle',
                  'maxSize' : 8,
                  'id' : 'awfde9fdbe',
                  'local' : false,
                  'remoteName' : 'spi:defsite',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi:orgid',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'userInfo',
                  'name' : 'deforg',
                  'index' : false,
                  'artifactId' : 'userInfo_deforg_spidefsitespiorgid',
                  'maxSize' : 8,
                  'id' : 'aw4f037420',
                  'local' : false,
                  'remoteName' : 'spi:defsite',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'status',
                  'index' : false,
                  'artifactId' : 'userInfo_status_spistatus',
                  'maxSize' : 12,
                  'id' : 'aw6215aa5a',
                  'local' : false,
                  'remoteName' : 'spi:status',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'emailpswd',
                  'index' : false,
                  'artifactId' : 'userInfo_emailpswd_spiemailpswd',
                  'id' : 'aw4014ff32',
                  'local' : false,
                  'remoteName' : 'spi:emailpswd',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'screenreader',
                  'index' : false,
                  'artifactId' : 'userInfo_screenreader_spiscreenreader',
                  'id' : 'aw33b6facb',
                  'local' : false,
                  'remoteName' : 'spi:screenreader',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'name' : 'failedlogins',
                  'index' : false,
                  'artifactId' : 'userInfo_failedlogins_spifailedlogins',
                  'id' : 'aw207c7908',
                  'local' : false,
                  'remoteName' : 'spi:failedlogins',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'inactivesites',
                  'index' : false,
                  'artifactId' : 'userInfo_inactivesites_spiinactivesites',
                  'id' : 'aw616d0513',
                  'local' : false,
                  'remoteName' : 'spi:inactivesites',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'userRoles',
                  'name' : 'groupList',
                  'index' : false,
                  'artifactId' : 'userInfo_groupList_spigroupuser',
                  'id' : 'aw52840d8c',
                  'describedByResource' : 'userRoles',
                  'local' : false,
                  'remoteName' : 'spi:groupuser',
                  'selectExpression' : 'spi:groupuser{spi:groupname}',
               }).
               setQueryBases([
                     {name:'currentUser', queryString:'\/oslc\/os\/oslcmaxuser?savedQuery=currentUser', queryLabel:'' }
               ]);
            var resourcePromise086 = PersistenceManager.initCollection( resource086 );


            var resource087 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'userRoles',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'userRoles',
                  'id' : 'aw505b3d11',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:groupname').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'roleName',
                  'index' : false,
                  'artifactId' : 'userRoles_roleName_spigroupname',
                  'maxSize' : 30,
                  'id' : 'aw96e0c83c',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:groupname',
               });
            var resourcePromise087 = PersistenceManager.initCollection( resource087 );


            var resource088 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'failureListResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'failureListResource',
                  'additionalData' : true,
                  'id' : 'awbf36648',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:failurelist,spi:type,spi:parent,spi:orgid,spi_wm:failureCode{dcterms:title,oslc:shortTitle}').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'failurelist',
                  'index' : false,
                  'artifactId' : 'failureListResource_failurelist_spifailurelist',
                  'id' : 'aw4b9371e0',
                  'key' : '1',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:failurelist',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'type',
                  'index' : false,
                  'artifactId' : 'failureListResource_type_spitype',
                  'maxSize' : 12,
                  'id' : 'awc82cf9e8',
                  'local' : false,
                  'remoteName' : 'spi:type',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'parent',
                  'index' : true,
                  'artifactId' : 'failureListResource_parent_spiparent',
                  'id' : 'aw8e875d24',
                  'local' : false,
                  'remoteName' : 'spi:parent',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : true,
                  'artifactId' : 'failureListResource_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw205c0bb2',
                  'key' : '2',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'failureListResource',
                  'name' : 'failurecode',
                  'index' : true,
                  'artifactId' : 'failureListResource_failurecode_spi_wmfailureCodeoslcshortTitle',
                  'maxSize' : 8,
                  'id' : 'aw3055edcd',
                  'local' : false,
                  'remoteName' : 'spi_wm:failureCode',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'dcterms:title',
                  'dataType' : 'reference',
                  'referenceResource' : 'failureListResource',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'failureListResource_description_spi_wmfailureCodedctermstitle',
                  'maxSize' : 100,
                  'id' : 'awf448e9f6',
                  'local' : false,
                  'remoteName' : 'spi_wm:failureCode',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'filterparent',
                  'formula' : '${parent}?${parent}:\'nullvalue\'',
                  'index' : true,
                  'artifactId' : 'parent_local_attribute_failurelist',
                  'id' : 'awa96cbcb7',
                  'persistent' : true,
                  'local' : true,
               }).
               setQueryBases([
                     {name:'getfailureList', queryString:'\/oslc\/os\/oslcfailurelist', queryLabel:'' }
               ]).
               setWhereClause('spi%3Aorgid%3D%24%7Bmylabor.orgid%7D');
            var resourcePromise088 = PersistenceManager.initCollection( resource088 );


            var resource089 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'failureReportResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'failureReportResource',
                  'id' : 'aw2402914b',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,spi_wm:type,spi_wm:linenum,spi_wm:anywhererefid,spi:failureCode{dcterms:title,oslc:shortTitle}').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'failureReportResource_identifier_spi_identifier',
                  'maxSize' : 19,
                  'id' : 'aw65991d0b',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'type',
                  'index' : false,
                  'artifactId' : 'failureReportResource_type_spi_wmtype',
                  'maxSize' : 12,
                  'id' : 'awfbbb0c1a',
                  'local' : false,
                  'remoteName' : 'spi_wm:type',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'linenum',
                  'index' : false,
                  'artifactId' : 'failureReportResource_linenum_spi_wmlinenum',
                  'id' : 'aw6c1082db',
                  'local' : false,
                  'remoteName' : 'spi_wm:linenum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'dcterms:title',
                  'dataType' : 'reference',
                  'referenceResource' : 'failureReportResource',
                  'name' : 'failureDesc',
                  'index' : false,
                  'artifactId' : 'failureReportResource_failureDesc_spifailureCodedctermstitle',
                  'maxSize' : 100,
                  'id' : 'aw53cea25f',
                  'local' : false,
                  'remoteName' : 'spi:failureCode',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'failureReportResource',
                  'name' : 'failurecode',
                  'index' : false,
                  'artifactId' : 'failureReportResource_failurecode_spifailureCodeoslcshortTitle',
                  'maxSize' : 8,
                  'id' : 'aw6c6e10d5',
                  'local' : false,
                  'remoteName' : 'spi:failureCode',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'anywhereRefId',
                  'index' : false,
                  'artifactId' : 'failureReportResource_anywhereRefId_spi_wmanywhererefid',
                  'id' : 'awf28d2e2a',
                  'local' : false,
                  'remoteName' : 'spi_wm:anywhererefid',
               });
            var resourcePromise089 = PersistenceManager.initCollection( resource089 );


            var resource090 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'failureClassResource',
                  'resourceName' : 'failureClassResource',
                  'id' : 'awaae2fa03',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'failureClass',
                  'index' : false,
                  'artifactId' : 'failureClassResource_failureClass_string',
                  'id' : 'aw11995958',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'failureCodeDesc',
                  'index' : false,
                  'artifactId' : 'failureClassResource_failureCodeDesc_string',
                  'id' : 'awdbcfd22c',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise090 = PersistenceManager.initCollection( resource090 );


            var resource091 = new ResourceMetadata({
                  'pageSize' : 2000,
                  'resourceName' : 'meterCharacteristics',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'meterCharacteristics',
                  'additionalData' : true,
                  'id' : 'awf1ea9822',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:value,spi:domainid,spi:alndomainid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : true,
                  'artifactId' : 'meterCharacteristics_value_spivalue',
                  'maxSize' : 254,
                  'id' : 'aw732e8f8b',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : true,
                  'artifactId' : 'meterCharacteristics_domainid_spidomainid',
                  'maxSize' : 18,
                  'id' : 'aw3104bb68',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:domainid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'alndomainid',
                  'index' : true,
                  'artifactId' : 'meterCharacteristics_alndomainid_spialndomainid',
                  'id' : 'aw63e8d90b',
                  'key' : '1',
                  'local' : false,
                  'remoteName' : 'spi:alndomainid',
               }).
               setQueryBases([
                     {name:'getCharacteristics', queryString:'\/oslc\/os\/oslcalndomain', queryLabel:'' }
               ]);
            var resourcePromise091 = PersistenceManager.initCollection( resource091 );


            var resource092 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'appDocType',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'appDocType',
                  'id' : 'aw1b80930e',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:appdoctypeid,spi:doctype,spi:app').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : true,
                  'artifactId' : 'appDocType_identifier_spiappdoctypeid',
                  'id' : 'aw4e3b4d85',
                  'local' : false,
                  'remoteName' : 'spi:appdoctypeid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'doctype',
                  'index' : true,
                  'artifactId' : 'appDocType_doctype_spidoctype',
                  'maxSize' : 16,
                  'id' : 'aw8863ce66',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:doctype',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'app',
                  'index' : true,
                  'artifactId' : 'appDocType_app_spiapp',
                  'maxSize' : 20,
                  'id' : 'awc818771',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:app',
               }).
               setQueryBases([
                     {name:'getWODocTypes', queryString:'\/oslc\/os\/oslcappdoctype?oslc.where=spi:app=%22WOTRACK%22', queryLabel:'' }
               ]);
            var resourcePromise092 = PersistenceManager.initCollection( resource092 );


            var resource093 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'site',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'site',
                  'id' : 'aw694309e4',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('oslc:shortTitle,spi:orgid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : true,
                  'artifactId' : 'site_siteid_oslcshortTitle',
                  'maxSize' : 8,
                  'id' : 'awed696d5a',
                  'key' : '1',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'site_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw1ad86d03',
                  'local' : false,
                  'remoteName' : 'spi:orgid',
               }).
               setQueryBases([
                     {name:'getSite', queryString:'\/oslc\/os\/oslcsite', queryLabel:'' }
               ]);
            var resourcePromise093 = PersistenceManager.initCollection( resource093 );


            var resource094 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'sketchSettingsResource',
                  'resourceName' : 'sketchSettingsResource',
                  'id' : 'aw3e0d6a08',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'measureAreaUnit',
                  'index' : false,
                  'artifactId' : 'sketchSettingsResource_measureAreaUnit_string',
                  'id' : 'awb34e22bd',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'measureLengthUnit',
                  'index' : false,
                  'artifactId' : 'sketchSettingsResource_measureLengthUnit_string',
                  'id' : 'aw882c6d35',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'measuresEnabled',
                  'index' : false,
                  'artifactId' : 'sketchSettingsResource_measuresEnabled_boolean',
                  'id' : 'aw70759d96',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'sketchName',
                  'index' : false,
                  'artifactId' : 'sketchSettingsResource_sketchName_string',
                  'id' : 'aw4538ddb9',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'sketchJson',
                  'index' : false,
                  'artifactId' : 'sketchSettingsResource_sketchJson_string',
                  'id' : 'awa526cb3e',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise094 = PersistenceManager.initCollection( resource094 );


            var resource095 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'sketchSettingsLengthUnitResource',
                  'resourceName' : 'sketchSettingsLengthUnitResource',
                  'id' : 'aw2639d7d7',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'lengthUnit',
                  'index' : false,
                  'artifactId' : 'sketchSettingsLengthUnitResource_lenghtUnit_string',
                  'id' : 'awfc8caed6',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'lengthUnitDescription',
                  'index' : false,
                  'artifactId' : 'sketchSettingsLengthUnitResource_lenghtUnit_description',
                  'id' : 'aw7c8de7c4',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise095 = PersistenceManager.initCollection( resource095 );


            var resource096 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'sketchSettingsAreaUnitResource',
                  'resourceName' : 'sketchSettingsAreaUnitResource',
                  'id' : 'aw7f15a13b',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'areaUnit',
                  'index' : false,
                  'artifactId' : 'sketchSettingsAreaUnitResource_lenghtUnit_string',
                  'id' : 'aw22a3db9e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'areaUnitDescription',
                  'index' : false,
                  'artifactId' : 'sketchSettingsAreaUnitResource_lenghtUnit_description',
                  'id' : 'aw64454dae',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise096 = PersistenceManager.initCollection( resource096 );


            var resource097 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'layerResource',
                  'resourceName' : 'layerResource',
                  'id' : 'aw64fb0478',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'layerLabel',
                  'index' : false,
                  'artifactId' : 'layerResource_label',
                  'id' : 'aw88d76742',
                  'persistent' : true,
                  'key' : '1',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'layerId',
                  'index' : false,
                  'artifactId' : 'layerResource_layerId',
                  'id' : 'aw3aac3ab0',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'mapServerId',
                  'index' : false,
                  'artifactId' : 'layerResource_mapServerId',
                  'id' : 'aw19f69338',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'layerVisibility',
                  'index' : false,
                  'artifactId' : 'layerResource_isVisible',
                  'id' : 'aw3461ee0e',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise097 = PersistenceManager.initCollection( resource097 );


            var resource098 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'mapLoadOfflineArea',
                  'resourceName' : 'mapLoadOfflineArea',
                  'id' : 'awefbc5ce7',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'offlineAreaName',
                  'index' : false,
                  'artifactId' : 'LoadofflineArea_offlineAreaName_string',
                  'id' : 'awfc7cc819',
                  'persistent' : true,
                  'key' : '1',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'downloadedImg',
                  'index' : false,
                  'artifactId' : 'LoadofflineArea_offlineAreaIsDefault_downloadedImg',
                  'id' : 'awd55878d6',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'offlineAreaId',
                  'index' : false,
                  'artifactId' : 'LoadofflineArea_offlineAreaName_id',
                  'id' : 'awa1f6ad61',
                  'persistent' : true,
                  'key' : '1',
                  'local' : true,
               });
            var resourcePromise098 = PersistenceManager.initCollection( resource098 );


            var resource099 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'mapOfflineArea',
                  'resourceName' : 'mapOfflineArea',
                  'id' : 'aw7270235',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'offlineAreaName',
                  'index' : false,
                  'artifactId' : 'offlineArea_offlineAreaName_string',
                  'id' : 'aw4183a983',
                  'persistent' : true,
                  'key' : '1',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'downloadedImg',
                  'index' : false,
                  'artifactId' : 'offlineArea_offlineAreaIsDefault_downloadedImg',
                  'id' : 'aw9a86ab8d',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'cssShowCurrentLocation',
                  'index' : false,
                  'artifactId' : 'offlineArea_offlineAreaIsDefault_showCurrentlocation',
                  'id' : 'aw2add3f76',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'locdesc',
                  'index' : false,
                  'artifactId' : 'offlineArea_offlineAreaIsDefault_desclocation',
                  'id' : 'aw13fb0b25',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'offlineAreaId',
                  'index' : false,
                  'artifactId' : 'offlineArea_offlineAreaName_id',
                  'id' : 'awc326c60f',
                  'persistent' : true,
                  'key' : '1',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'downloadSizeMB',
                  'index' : false,
                  'artifactId' : 'offlineArea_offlineSize_string',
                  'id' : 'awc4e6b220',
                  'persistent' : true,
                  'key' : '6',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'lastSync',
                  'index' : false,
                  'artifactId' : 'offlineArea_lastSync',
                  'id' : 'aw7a463cd4',
                  'persistent' : true,
                  'key' : '6',
                  'local' : true,
               });
            var resourcePromise099 = PersistenceManager.initCollection( resource099 );


            var resource100 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'offlineAreasSummary',
                  'resourceName' : 'offlineAreasSummary',
                  'id' : 'awfeb0b2e5',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'mblareaname',
                  'index' : false,
                  'artifactId' : 'offlineAreasSummary_mblareaname_string',
                  'id' : 'aw7e8348aa',
                  'persistent' : true,
                  'key' : '1',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'mblextent',
                  'index' : false,
                  'artifactId' : 'offlineAreasSummary_string',
                  'id' : 'aw17690764',
                  'persistent' : true,
                  'key' : '2',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'mblfnlzoom',
                  'index' : false,
                  'artifactId' : 'offlineAreasSummary_mblfnlzoom_string',
                  'id' : 'aw8c88c570',
                  'persistent' : true,
                  'key' : '3',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'mblinitzoom',
                  'index' : false,
                  'artifactId' : 'offlineAreasSummary_mblinitzoom_string',
                  'id' : 'aweb9beb2',
                  'persistent' : true,
                  'key' : '4',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'offlineAreasSummary_siteid_string',
                  'id' : 'awd64ddb8b',
                  'persistent' : true,
                  'key' : '7',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'oslcofflineareaid',
                  'index' : false,
                  'artifactId' : 'offlineAreasSummary_oslcofflineareaid_string',
                  'id' : 'aw25ed5195',
                  'persistent' : true,
                  'key' : '5',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'status_longdescription',
                  'index' : false,
                  'artifactId' : 'offlineAreasSummary_status_longdescription_string',
                  'id' : 'aw1a45bd2d',
                  'persistent' : true,
                  'key' : '6',
                  'local' : true,
               });
            var resourcePromise100 = PersistenceManager.initCollection( resource100 );


            var resource101 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'identifyFeatureList',
                  'resourceName' : 'identifyFeatureList',
                  'id' : 'awa2955562',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'attributeName',
                  'index' : false,
                  'artifactId' : 'identifyFeatureList_attributeName_string',
                  'id' : 'awfccf3eb1',
                  'persistent' : true,
                  'key' : '1',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'attributeValue',
                  'index' : false,
                  'artifactId' : 'identifyFeatureList_attributeValue_string',
                  'id' : 'aw29984108',
                  'persistent' : true,
                  'key' : '2',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'layerName',
                  'index' : false,
                  'artifactId' : 'identifyFeatureList_layerName_string',
                  'id' : 'aw49578b0a',
                  'persistent' : true,
                  'key' : '3',
                  'local' : true,
               });
            var resourcePromise101 = PersistenceManager.initCollection( resource101 );


            var resource102 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'featureAttributes',
                  'resourceName' : 'featureAttributes',
                  'id' : 'aw8545fc2f',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'featureAttributeTitle',
                  'index' : false,
                  'artifactId' : 'featureAttribute_attributes_title',
                  'id' : 'awdced23c2',
                  'persistent' : true,
                  'key' : '1',
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'featureAttributeValue',
                  'index' : false,
                  'artifactId' : 'featureAttribute_attributes_value',
                  'id' : 'aweaac039d',
                  'persistent' : true,
                  'key' : '2',
                  'local' : true,
               });
            var resourcePromise102 = PersistenceManager.initCollection( resource102 );


            var resource103 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'sketchResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'sketchResource',
                  'id' : 'awad2b652b',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi_wm:mapsketchid,spi_wm:sketchname,spi_wm:createdby,spi_wm:recordtype,spi_wm:recordnum,spi_wm:sketchlist,spi_wm:datecreated,spi_wm:ismobile,spi_wm:anywhererefid,spi_wm:status,spi_wm:mapname,spi_wm:sketchextent').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : true,
                  'artifactId' : 'sketchresource_sketchid',
                  'id' : 'awfb649454',
                  'local' : false,
                  'remoteName' : 'spi_wm:mapsketchid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'sketchname',
                  'index' : false,
                  'artifactId' : 'sketchresource_sketchname',
                  'maxSize' : 200,
                  'id' : 'aw1efb5cf9',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi_wm:sketchname',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'createdby',
                  'index' : false,
                  'artifactId' : 'sketchresource_createdby',
                  'maxSize' : 12,
                  'id' : 'aw75218baf',
                  'local' : false,
                  'remoteName' : 'spi_wm:createdby',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'recordtype',
                  'index' : false,
                  'artifactId' : 'sketchresource_recordtype',
                  'maxSize' : 256,
                  'id' : 'aw45ca38f6',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi_wm:recordtype',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'recordnum',
                  'index' : false,
                  'artifactId' : 'sketchresource_recordnum',
                  'id' : 'awc40cf61d',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi_wm:recordnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'clob',
                  'name' : 'sketchlist',
                  'index' : false,
                  'artifactId' : 'sketchresource_sketchlist',
                  'maxSize' : 999999,
                  'id' : 'aw410dae7',
                  'local' : false,
                  'remoteName' : 'spi_wm:sketchlist',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'datecreated',
                  'index' : false,
                  'artifactId' : 'sketchresource_datecreated',
                  'id' : 'aw18d553d',
                  'local' : false,
                  'remoteName' : 'spi_wm:datecreated',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'ismobile',
                  'index' : false,
                  'artifactId' : 'sketchresource_ismobile',
                  'id' : 'awa438661',
                  'local' : false,
                  'remoteName' : 'spi_wm:ismobile',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'anywhereRefId',
                  'index' : false,
                  'artifactId' : 'sketchresource_anywhereRefId',
                  'id' : 'aw5ce6d779',
                  'local' : false,
                  'remoteName' : 'spi_wm:anywhererefid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'status',
                  'index' : false,
                  'artifactId' : 'sketchresource_status',
                  'maxSize' : 20,
                  'id' : 'aw96659043',
                  'local' : false,
                  'remoteName' : 'spi_wm:status',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'mapname',
                  'index' : false,
                  'artifactId' : 'sketchresource_mapname',
                  'maxSize' : 100,
                  'id' : 'awc92946e1',
                  'local' : false,
                  'remoteName' : 'spi_wm:mapname',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'clob',
                  'name' : 'sketchextent',
                  'index' : false,
                  'artifactId' : 'sketchresource_sketchextent',
                  'maxSize' : 999999,
                  'id' : 'aw604aa506',
                  'local' : false,
                  'remoteName' : 'spi_wm:sketchextent',
               });
            var resourcePromise103 = PersistenceManager.initCollection( resource103 );


            var resource104 = new ResourceMetadata({
                  'pageSize' : 200,
                  'resourceName' : 'anywherePropVal',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'anywherePropValRes',
                  'id' : 'awb4801c67',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:propid,spi:propvalue,spi:description,spi:changedate,dcterms:identifier,spi:appid,spi:maxgroupid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'propid',
                  'index' : false,
                  'artifactId' : 'anywherePropValPropId',
                  'id' : 'aw344e19d',
                  'local' : false,
                  'remoteName' : 'spi:propid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'anywherePropValValues',
                  'id' : 'aw5cc16cbe',
                  'local' : false,
                  'remoteName' : 'spi:propvalue',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'anywherePropValDescription',
                  'id' : 'awba4810a1',
                  'local' : false,
                  'remoteName' : 'spi:description',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'changedate',
                  'index' : false,
                  'artifactId' : 'anywherePropValChangedate',
                  'id' : 'aw9752257c',
                  'local' : false,
                  'remoteName' : 'spi:changedate',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'identifier',
                  'index' : true,
                  'artifactId' : 'anywherePropValIdentifier',
                  'id' : 'awd6acea8b',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'appName',
                  'index' : true,
                  'artifactId' : 'anywherePropValAppName',
                  'id' : 'awf8dec4e3',
                  'local' : false,
                  'remoteName' : 'spi:appid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'groupName',
                  'index' : true,
                  'artifactId' : 'anywherePropValGroupName',
                  'id' : 'aw6312bf1a',
                  'local' : false,
                  'remoteName' : 'spi:maxgroupid',
               }).
               setQueryBases([
                     {name:'anywherepropvalQB', queryString:'\/oslc\/os\/oslcanywherepropval', defaultForSearch: true, queryLabel:'' }
               ]);
            var resourcePromise104 = PersistenceManager.initCollection( resource104 );


            var resource105 = new ResourceMetadata({
                  'pageSize' : 200,
                  'resourceName' : 'anywhereResourceSrc',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'anywhereResourceSrcRes',
                  'id' : 'aw84adce73',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,spi:resourceid,spi:type,spi:pagesize,spi:description,spi:changedate,spi:appid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'identifier',
                  'index' : true,
                  'artifactId' : 'anywhereResourceIdentifier',
                  'id' : 'aw69698b5d',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'resourceId',
                  'index' : false,
                  'artifactId' : 'anywhereResourceResourceId',
                  'id' : 'aw92b27486',
                  'local' : false,
                  'remoteName' : 'spi:resourceid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'type',
                  'index' : false,
                  'artifactId' : 'anywhereResourceType',
                  'id' : 'awce0667d7',
                  'local' : false,
                  'remoteName' : 'spi:type',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'pageSize',
                  'index' : false,
                  'artifactId' : 'anywhereResourcePageSize',
                  'id' : 'aw45c77190',
                  'local' : false,
                  'remoteName' : 'spi:pagesize',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'anywhereResourceDescription',
                  'id' : 'awd547a221',
                  'local' : false,
                  'remoteName' : 'spi:description',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'changedate',
                  'index' : false,
                  'artifactId' : 'anywhereResourceChangedate',
                  'id' : 'aw289744aa',
                  'local' : false,
                  'remoteName' : 'spi:changedate',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'appName',
                  'index' : true,
                  'artifactId' : 'anywhereResourceAppName',
                  'id' : 'aw751c4988',
                  'local' : false,
                  'remoteName' : 'spi:appid',
               }).
               setQueryBases([
                     {name:'anywhereResourceQB', queryString:'\/oslc\/os\/oslcanywhereresrc', defaultForSearch: true, queryLabel:'' }
               ]);
            var resourcePromise105 = PersistenceManager.initCollection( resource105 );


            var resource106 = new ResourceMetadata({
                  'pageSize' : 200,
                  'resourceName' : 'anywhereResVal',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'AnywhereResValRes',
                  'id' : 'aw282573c2',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:sort,spi:sequence,spi:changedate,dcterms:identifier,spi:appid,spi:maxgroupid,spi:queryid,spi:description,spi:resourceid,spi:blindcount,spi:resanywhereresource{spi:type}').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'sort',
                  'index' : false,
                  'artifactId' : 'AnywhereResValSort',
                  'id' : 'aw5c180fb5',
                  'local' : false,
                  'remoteName' : 'spi:sort',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'sequence',
                  'index' : false,
                  'artifactId' : 'AnywhereResValSequence',
                  'id' : 'awc24febf7',
                  'local' : false,
                  'remoteName' : 'spi:sequence',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'changedate',
                  'index' : false,
                  'artifactId' : 'AnywhereResValChangedate',
                  'id' : 'aw34322ac0',
                  'local' : false,
                  'remoteName' : 'spi:changedate',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'identifier',
                  'index' : true,
                  'artifactId' : 'AnywhereResValIdentifier',
                  'id' : 'aw75cce537',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'appName',
                  'index' : true,
                  'artifactId' : 'AnywhereResValAppName',
                  'id' : 'aweb29360a',
                  'local' : false,
                  'remoteName' : 'spi:appid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'groupName',
                  'index' : true,
                  'artifactId' : 'AnywhereResValGroupName',
                  'id' : 'awbf1d7778',
                  'local' : false,
                  'remoteName' : 'spi:maxgroupid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'query',
                  'index' : true,
                  'artifactId' : 'AnywhereResValQuery',
                  'id' : 'aw4adb8ff1',
                  'local' : false,
                  'remoteName' : 'spi:queryid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'queryDescription',
                  'index' : false,
                  'artifactId' : 'AnywhereResValQueryDescription',
                  'id' : 'aw9a342410',
                  'local' : false,
                  'remoteName' : 'spi:description',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'resourceId',
                  'index' : true,
                  'artifactId' : 'AnywhereResValResourceId',
                  'id' : 'aw8e171aec',
                  'local' : false,
                  'remoteName' : 'spi:resourceid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'blindCount',
                  'index' : false,
                  'artifactId' : 'AnywhereResValBlindCount',
                  'id' : 'aw8b5ff5c9',
                  'local' : false,
                  'remoteName' : 'spi:blindcount',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi:type',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'referenceResource' : 'anywhereResVal',
                  'name' : 'type',
                  'index' : false,
                  'artifactId' : 'AnywhereResValType',
                  'maxSize' : 80,
                  'id' : 'aw81e2aabe',
                  'local' : false,
                  'remoteName' : 'spi:resanywhereresource',
               }).
               setQueryBases([
                     {name:'AnywhereResValQB', queryString:'\/oslc\/os\/oslcanywhereresrval', defaultForSearch: true, queryLabel:'' }
               ]);
            var resourcePromise106 = PersistenceManager.initCollection( resource106 );


            var resource107 = new ResourceMetadata({
                  'defaultOrderBy' : 'notificationId desc',
                  'pageSize' : 5,
                  'resourceName' : 'osusernotification',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'osusernotification',
                  'id' : 'awe5c87076',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 10,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:osusernotificationid,spi:eventname,spi:intobjectname,spi:notfeventmessage,spi:notificationtime,spi:eventforuser,spi:appid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'notificationId',
                  'index' : true,
                  'artifactId' : 'oslcosusernotificationid',
                  'id' : 'awceee3768',
                  'local' : false,
                  'remoteName' : 'spi:osusernotificationid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'eventName',
                  'index' : false,
                  'artifactId' : 'oslcosusernotificatiEventName',
                  'id' : 'awf9242f79',
                  'local' : false,
                  'remoteName' : 'spi:eventname',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'intObjectName',
                  'index' : false,
                  'artifactId' : 'oslcosusernotificatiIntobjectName',
                  'id' : 'awcf896a27',
                  'local' : false,
                  'remoteName' : 'spi:intobjectname',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'notfeventmessage',
                  'index' : false,
                  'artifactId' : 'oslcosusernotificatiNotfeventmessage',
                  'id' : 'awba8ec9a7',
                  'local' : false,
                  'remoteName' : 'spi:notfeventmessage',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'notifDate',
                  'index' : false,
                  'artifactId' : 'oslcosusernotificati_notifDate_dateTime',
                  'id' : 'aw1edc3be',
                  'local' : false,
                  'remoteName' : 'spi:notificationtime',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'owner',
                  'index' : false,
                  'artifactId' : 'oslcosusernotificati_eventforuser_string',
                  'id' : 'aw4da92124',
                  'local' : false,
                  'remoteName' : 'spi:eventforuser',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'appid',
                  'index' : false,
                  'artifactId' : 'oslcosusernotificati_appid_string',
                  'id' : 'aw26547590',
                  'local' : false,
                  'remoteName' : 'spi:appid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'itemnum',
                  'index' : false,
                  'artifactId' : 'oslcosusernotificati_itemnum_string',
                  'id' : 'aw8d6872e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'itemDesc',
                  'index' : false,
                  'artifactId' : 'oslcosusernotificati_itemDesc_string',
                  'id' : 'awe13aa2f6',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'viewed',
                  'index' : false,
                  'artifactId' : 'oslcosusernotificati_viewed_boolean',
                  'id' : 'awee3971d8',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'uiDate',
                  'index' : false,
                  'artifactId' : 'oslcosusernotificati_uiDate_dateTime',
                  'id' : 'awe4cea6a1',
                  'persistent' : true,
                  'local' : true,
               }).
               setQueryBases([
                     {name:'oslcosusernotificatiQB', queryString:'\/oslc\/os\/oslcosusernotificati', defaultForSearch: true, queryLabel:'' }
               ]).
               setWhereClause('spi%3Aeventforuser%3D%24%7Bpersonid%7D');
            var resourcePromise107 = PersistenceManager.initCollection( resource107 );


            var resource108 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformAttachmentInfoResource',
                  'resourceName' : 'PlatformAttachmentInfoResource',
                  'id' : 'awdb366a89',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'name',
                  'index' : false,
                  'artifactId' : 'PlatformAttachmentInfoResource_name_string',
                  'maxSize' : 20,
                  'id' : 'aw7ad1254c',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'PlatformAttachmentInfoResource_description_string',
                  'maxSize' : 50,
                  'id' : 'aw91c3001f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'category',
                  'index' : false,
                  'artifactId' : 'PlatformAttachmentInfoResource_category_string',
                  'id' : 'aw5507e626',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'fileType',
                  'index' : false,
                  'artifactId' : 'PlatformAttachmentInfoResource_fileType_string',
                  'id' : 'aw2507e37c',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'fileSize',
                  'index' : false,
                  'artifactId' : 'PlatformAttachmentInfoResource_fileSize_integer',
                  'id' : 'aw6141898c',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'localPath',
                  'index' : false,
                  'artifactId' : 'PlatformAttachmentInfoResource_localPath_string',
                  'id' : 'awc2c06db6',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'createDate',
                  'index' : false,
                  'artifactId' : 'PlatformAttachmentInfoResource_createDate_dateTime',
                  'id' : 'awc78ca0bd',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise108 = PersistenceManager.initCollection( resource108 );


            var resource109 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformAttachmentCategoryResource',
                  'resourceName' : 'PlatformAttachmentCategoryResource',
                  'id' : 'aw4ffdce67',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'folderName',
                  'index' : false,
                  'artifactId' : 'PlatformAttachmentCategoryResource_folderName_string',
                  'maxSize' : 20,
                  'id' : 'awee53f8c0',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise109 = PersistenceManager.initCollection( resource109 );


            var resource110 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformEsigResource',
                  'resourceName' : 'PlatformEsigResource',
                  'id' : 'aw8a065cd1',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'userName',
                  'index' : false,
                  'artifactId' : 'PlatformEsigResource_username_string',
                  'id' : 'awb26601cc',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'password',
                  'index' : false,
                  'artifactId' : 'PlatformEsigResource_password_string',
                  'id' : 'awfddb352d',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'reason',
                  'index' : false,
                  'artifactId' : 'PlatformEsigResource_reason_boolean',
                  'maxSize' : 50,
                  'id' : 'awb0845042',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'success',
                  'index' : false,
                  'artifactId' : 'PlatformEsigResource_success_boolean',
                  'id' : 'awc27b3d43',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise110 = PersistenceManager.initCollection( resource110 );


            var resource111 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'PlatformEsigAttributeResource',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'enableFeatureByProperty' : 'esig.enabled',
                  'inMemory' : false,
                  'artifactId' : 'PlatformEsigAttributeResource',
                  'id' : 'awe7711043',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:objectname,spi:attributename').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'objectname',
                  'index' : false,
                  'artifactId' : 'PlatformEsigAttributeResource_objectname_string',
                  'id' : 'awe55b6275',
                  'local' : false,
                  'remoteName' : 'spi:objectname',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'attributename',
                  'index' : false,
                  'artifactId' : 'PlatformEsigAttributeResource_attributename_string',
                  'id' : 'aw2ab13920',
                  'local' : false,
                  'remoteName' : 'spi:attributename',
               }).
               setQueryBases([
                     {name:'PlatformEsigAttributeResource_query', queryString:'\/oslc\/os\/oslcesigattribute', queryLabel:'' }
               ]).
               setWhereClause('spi%3Aesigenabled%3D1');
            var resourcePromise111 = PersistenceManager.initCollection( resource111 );


            var resource112 = new ResourceMetadata({
                  'defaultOrderBy' : 'attemptdate desc',
                  'pageSize' : 1000,
                  'resourceName' : 'PlatformLoginTrackingResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'enableFeatureByProperty' : 'esig.enabled',
                  'inMemory' : false,
                  'artifactId' : 'PlatformLoginTrackingResource',
                  'id' : 'aw39ae8c71',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:attemptdate,spi:attemptresult,spi:reason,spi:app,spi:keyvalue1,spi:keyvalue2,spi:userid,spi:loginid,spi:clienthost,spi:clientaddr,spi:ownertable').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'attemptdate',
                  'index' : true,
                  'artifactId' : 'PlatformLoginTrackingResource_attemptdate',
                  'id' : 'awff5afbab',
                  'local' : false,
                  'remoteName' : 'spi:attemptdate',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'attemptresult',
                  'index' : false,
                  'artifactId' : 'PlatformLoginTrackingResource_attemptresult',
                  'id' : 'aw199bee12',
                  'local' : false,
                  'remoteName' : 'spi:attemptresult',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'reason',
                  'index' : false,
                  'artifactId' : 'PlatformLoginTrackingResource_reason',
                  'id' : 'awa3d2f66f',
                  'local' : false,
                  'remoteName' : 'spi:reason',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'app',
                  'index' : false,
                  'artifactId' : 'PlatformLoginTrackingResource_app',
                  'id' : 'awd0285547',
                  'local' : false,
                  'remoteName' : 'spi:app',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'keyvalue1',
                  'index' : false,
                  'artifactId' : 'PlatformLoginTrackingResource_keyvalue1_site',
                  'id' : 'aw80f270fa',
                  'local' : false,
                  'remoteName' : 'spi:keyvalue1',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'keyvalue2',
                  'index' : false,
                  'artifactId' : 'PlatformLoginTrackingResource_keyvalue2_wonum',
                  'id' : 'aw699cc6c',
                  'local' : false,
                  'remoteName' : 'spi:keyvalue2',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'userid',
                  'index' : false,
                  'artifactId' : 'PlatformLoginTrackingResource_userid',
                  'id' : 'aw6958170d',
                  'local' : false,
                  'remoteName' : 'spi:userid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'loginid',
                  'index' : false,
                  'artifactId' : 'PlatformLoginTrackingResource_loginid',
                  'id' : 'aw2d6e9ead',
                  'local' : false,
                  'remoteName' : 'spi:loginid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'clienthost',
                  'index' : false,
                  'artifactId' : 'PlatformLoginTrackingResource_clienthost',
                  'id' : 'awb3d21c4f',
                  'local' : false,
                  'remoteName' : 'spi:clienthost',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'clientaddr',
                  'index' : false,
                  'artifactId' : 'PlatformLoginTrackingResource_clientaddr',
                  'id' : 'aw2e6f9d87',
                  'local' : false,
                  'remoteName' : 'spi:clientaddr',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'ownertable',
                  'index' : false,
                  'artifactId' : 'PlatformLoginTrackingResource_ownertable',
                  'id' : 'aw2b901921',
                  'local' : false,
                  'remoteName' : 'spi:ownertable',
               }).
               setCreationFactories([
                     {name:'logEsig', creationString:'\/oslc\/os\/oslclogintracking' }
               ]).
               setQueryBases([
                     {name:'PlatformLoginTrackingResource_query', queryString:'\/oslc\/os\/oslclogintracking', queryLabel:'' }
               ]).
               setWhereClause('spi%3Aattemptdate%21%3D%22*%22');
            var resourcePromise112 = PersistenceManager.initCollection( resource112 );


            var resource113 = new ResourceMetadata({
                  'pageSize' : 100,
                  'resourceName' : 'attemptResultDomain',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'enableFeatureByProperty' : 'esig.enabled',
                  'inMemory' : false,
                  'artifactId' : 'attemptResultDomain',
                  'id' : 'aw63d066a',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:orgid,spi:siteid,spi:maxvalue,spi:value,dcterms:title,spi:defaults,oslc:shortTitle,dcterms:identifier').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'attemptResultDomain_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'awf56cb276',
                  'local' : false,
                  'pkIndex' : 5,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'attemptResultDomain_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'aw96386fe1',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'attemptResultDomain_maxvalue_spimaxvalue',
                  'maxSize' : 50,
                  'id' : 'aw3864f322',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:maxvalue',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'attemptResultDomain_value_spivalue',
                  'maxSize' : 50,
                  'id' : 'awbc80adda',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'attemptResultDomain_description_dctermstitle',
                  'maxSize' : 256,
                  'id' : 'aw78cd28e0',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaults',
                  'index' : false,
                  'artifactId' : 'attemptResultDomain_defaults_spidefaults',
                  'id' : 'awa0ae0162',
                  'local' : false,
                  'remoteName' : 'spi:defaults',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'attemptResultDomain_domainid_oslcshortTitle',
                  'maxSize' : 18,
                  'id' : 'aw79346d49',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'synonymdomainid',
                  'index' : false,
                  'artifactId' : 'attemptResultDomain_synonymdomainid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw8d7e08c0',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getAttemptResultDomain', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22ATTEMPTRESULT%22');
            var resourcePromise113 = PersistenceManager.initCollection( resource113 );


            var resource114 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformLongPressResource',
                  'resourceName' : 'PlatformLongPressResource',
                  'id' : 'awb1ffcb05',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'platform' : 'true',
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'label',
                  'index' : false,
                  'artifactId' : 'PlatformLongPressResource_label_string',
                  'id' : 'aw64d95f11',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'transitionTo',
                  'index' : false,
                  'artifactId' : 'PlatformLongPressResource_transitionTo_string',
                  'id' : 'awffa4a814',
                  'persistent' : true,
                  'key' : '1',
                  'local' : true,
               });
            var resourcePromise114 = PersistenceManager.initCollection( resource114 );


            var resource115 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformViewQueryResource',
                  'resourceName' : 'PlatformViewQueryResource',
                  'id' : 'awacb7affd',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'viewid',
                  'index' : false,
                  'artifactId' : 'PlatformViewQueryResource_viewid_string',
                  'id' : 'aw75cb4bd2',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'index',
                  'index' : false,
                  'artifactId' : 'PlatformViewQueryResource_index_integer',
                  'id' : 'aw2e6fb89f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'queryid',
                  'index' : false,
                  'artifactId' : 'PlatformViewQueryResource_queryid_string',
                  'id' : 'aw94d0b850',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise115 = PersistenceManager.initCollection( resource115 );


            var resource116 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformListSortResource',
                  'resourceName' : 'PlatformListSortResource',
                  'id' : 'aw1a0eea87',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'listid',
                  'index' : false,
                  'artifactId' : 'PlatformListSortResource_listid_string',
                  'id' : 'aw9064a276',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'index',
                  'index' : false,
                  'artifactId' : 'PlatformListSortResource_index_integer',
                  'id' : 'awe8ec244c',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise116 = PersistenceManager.initCollection( resource116 );


            var resource117 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformListSearchResource',
                  'resourceName' : 'PlatformListSearchResource',
                  'id' : 'aw6a400d8e',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'listid',
                  'index' : false,
                  'artifactId' : 'PlatformListSearchResource_listid_string',
                  'id' : 'awcaa8923a',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'search',
                  'index' : false,
                  'artifactId' : 'PlatformListSearchResource_search_string',
                  'id' : 'aw65d03ec8',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'querybase',
                  'index' : false,
                  'artifactId' : 'PlatformListSearchResource_querybase_string',
                  'id' : 'aw91302f64',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'fromscan',
                  'index' : false,
                  'artifactId' : 'PlatformListSearchResource_fromscan_boolean',
                  'id' : 'awdf9c4f91',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'exact',
                  'index' : false,
                  'artifactId' : 'PlatformListSearchResource_exact_boolean',
                  'id' : 'aw8148e995',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise117 = PersistenceManager.initCollection( resource117 );


            var resource118 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformResourceMetricsResource',
                  'resourceName' : 'PlatformResourceMetricsResource',
                  'id' : 'aw589b431',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'resourceName',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_resourcename_string',
                  'id' : 'aw9ccdf5ce',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'queryBase',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_querybase_string',
                  'id' : 'aw8c157d61',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'serverCount',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_serverCount_integer',
                  'id' : 'awbfceeff2',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'allDownloaded',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_allDownloaded_boolean',
                  'id' : 'aw300f625',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'pageCount',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_pageCount_integer',
                  'id' : 'aw5a6b5e5',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'pageSize',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_pageSize_integer',
                  'id' : 'aw3c45365e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'worklistDownloaded',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_worklistDownloaded_boolean',
                  'id' : 'aw43cb396d',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'scanFilter',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_scanFilter_string',
                  'id' : 'aw4f310615',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'type',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_type_string',
                  'id' : 'awd38d7b81',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'stringr',
                  'name' : 'errorCode',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_errorCode_integer',
                  'id' : 'awab704940',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'resourcePreviousPageSize',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_resourcePreviousPageSize_integer',
                  'id' : 'awca853d70',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'totalNumberOfPagesToDownlaod',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_totalNumberOfPagesToDownlaod_integer',
                  'id' : 'awe74022e4',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'numberOfPagesDownloaded',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_numberOfPagesDownloaded_integer',
                  'id' : 'aw3628b6b1',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'detlaTotalNumberOfPagesToDownlaod',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_detlaTotalNumberOfPagesToDownlaod_integer',
                  'id' : 'aw9778eaab',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'deltaNumberOfPagesDownloaded',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_deltaNumberOfPagesDownloaded_integer',
                  'id' : 'aw462530e7',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'attempt',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_attempt_integer',
                  'id' : 'aw84b751ff',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'maxrowstamp',
                  'index' : false,
                  'artifactId' : 'PlatformResourceMetricsResource_maxrowstamp_string',
                  'id' : 'aw7569ffdb',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise118 = PersistenceManager.initCollection( resource118 );


            var resource119 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'DataSyncTracking',
                  'resourceName' : 'DataSyncTracking',
                  'id' : 'aw9df5e2ad',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'resourceName',
                  'index' : false,
                  'artifactId' : 'DataSyncTracking_resourcename_string',
                  'id' : 'aw99060f54',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'type',
                  'index' : false,
                  'artifactId' : 'DataSyncTracking_type_integer',
                  'id' : 'aw1422fdcb',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'resourceCurrentPageSize',
                  'index' : false,
                  'artifactId' : 'DataSyncTracking_resourceCurrentPageSize_boolean',
                  'id' : 'awdee5c0b8',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'resourcePreviousPageSize',
                  'index' : false,
                  'artifactId' : 'DataSyncTracking_resourcePreviousPageSize_integer',
                  'id' : 'aw2eacbe9e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'totalNumberOfPagesToDownlaod',
                  'index' : false,
                  'artifactId' : 'DataSyncTracking_totalNumberOfPagesToDownlaod_integer',
                  'id' : 'awd1b208bc',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'numberOfPagesDownloaded',
                  'index' : false,
                  'artifactId' : 'DataSyncTracking_numberOfPagesDownloaded_boolean',
                  'id' : 'awc1ee705e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'dateAndTime',
                  'index' : false,
                  'artifactId' : 'DataSyncTracking_dateAndTime_string',
                  'id' : 'awd27b5819',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'queryBase',
                  'index' : false,
                  'artifactId' : 'DataSyncTracking_querybase_string',
                  'id' : 'awba2958d5',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'errrorCode',
                  'index' : false,
                  'artifactId' : 'DataSyncTracking_errrorCode_integer',
                  'id' : 'awdd1981da',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'detlaTotalNumberOfPagesToDownlaod',
                  'index' : false,
                  'artifactId' : 'DataSyncTracking_detlaTotalNumberOfPagesToDownlaod_boolean',
                  'id' : 'awbf423453',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'deltaNumberOfPagesDownloaded',
                  'index' : false,
                  'artifactId' : 'DataSyncTracking_deltaNumberOfPagesDownloaded_string',
                  'id' : 'aw29249252',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'attempt',
                  'index' : false,
                  'artifactId' : 'DataSyncTracking_attempt_string',
                  'id' : 'aw479ef4e2',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise119 = PersistenceManager.initCollection( resource119 );


            var resource120 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformDateLookupResource',
                  'resourceName' : 'PlatformDateLookupResource',
                  'id' : 'aw903a86e4',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'platform' : 'true',
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'date',
                  'name' : 'date',
                  'index' : false,
                  'artifactId' : 'PlatformDateLookupResource_date_date',
                  'id' : 'aw175ff2d4',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'duration',
                  'index' : false,
                  'artifactId' : 'PlatformDateLookupResource_duration_string',
                  'id' : 'awaf69d37',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise120 = PersistenceManager.initCollection( resource120 );


            var resource121 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'LastADDownload',
                  'resourceName' : 'LastADDownload',
                  'id' : 'aw62f56f6f',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'platform' : 'true',
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'downloadStatus',
                  'index' : false,
                  'artifactId' : 'LastADDownload_downloadStatus_string',
                  'id' : 'aw78bd99e1',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'lastDownloadDateMsg',
                  'index' : false,
                  'artifactId' : 'LastADDownload_lastDownloadDateMsg_string',
                  'id' : 'aw8aff521f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'totalDownloaded',
                  'index' : false,
                  'artifactId' : 'LastADDownload_totalDownloaded_string',
                  'id' : 'awbfb04f52',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'downloadAttachments',
                  'index' : false,
                  'artifactId' : 'LastADDownload_downloadAttachments_boolean',
                  'id' : 'awbe6526f5',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'numberOfDaysToSync',
                  'index' : false,
                  'artifactId' : 'LastADDownload_numberOfDaysToSync_string',
                  'id' : 'aw636896bb',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise121 = PersistenceManager.initCollection( resource121 );


            var resource122 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformProgressResource',
                  'resourceName' : 'PlatformProgressResource',
                  'id' : 'aw6e8f90d1',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'progressMsg',
                  'index' : false,
                  'artifactId' : 'PlatformProgressResource_progressMsg_string',
                  'id' : 'aw88797d3c',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'started',
                  'index' : false,
                  'artifactId' : 'PlatformProgressResource_started_boolean',
                  'id' : 'awa770aaae',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise122 = PersistenceManager.initCollection( resource122 );


            var resource123 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'timeTrack',
                  'resourceName' : 'timeTrack',
                  'id' : 'awe7baae94',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'ttid',
                  'index' : true,
                  'artifactId' : 'timeTrack_ttid_string',
                  'id' : 'awd1b2cb94',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'content',
                  'index' : false,
                  'artifactId' : 'timeTrack_content_string',
                  'id' : 'aw8ea513de',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise123 = PersistenceManager.initCollection( resource123 );


            var resource124 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformChangePasswordForm',
                  'resourceName' : 'PlatformChangePasswordForm',
                  'id' : 'aw58a2c8cd',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'username',
                  'index' : false,
                  'artifactId' : 'PlatformChangePasswordForm_username_string',
                  'id' : 'awedfd5901',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'currentpassword',
                  'index' : false,
                  'artifactId' : 'PlatformChangePasswordForm_currentpassword_string',
                  'id' : 'aw8978d11e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'newpassword',
                  'index' : false,
                  'artifactId' : 'PlatformChangePasswordForm_newpassword_string',
                  'maxSize' : 35,
                  'id' : 'aw40b72096',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'confirmnewpassword',
                  'index' : false,
                  'artifactId' : 'PlatformChangePasswordForm_confirmnewpassword_string',
                  'maxSize' : 35,
                  'id' : 'awd6f928ad',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'loginFailed',
                  'index' : false,
                  'artifactId' : 'PlatformChangePasswordForm_loginFailed_boolean',
                  'id' : 'aw601efe23',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'errorMsg',
                  'index' : false,
                  'artifactId' : 'PlatformChangePasswordForm_errorMsg_string',
                  'id' : 'awb8f94064',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'infoMsg',
                  'index' : false,
                  'artifactId' : 'PlatformChangePasswordForm_infoMsg_string',
                  'id' : 'aw9d64719b',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'oslcMaxUserURL',
                  'index' : false,
                  'artifactId' : 'PlatformChangePasswordForm_oslcMaxUserURL_string',
                  'id' : 'aw82d3981b',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise124 = PersistenceManager.initCollection( resource124 );


            var resource125 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformTempPushNotification',
                  'resourceName' : 'PlatformTempPushNotification',
                  'id' : 'aw539422b',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'title',
                  'index' : false,
                  'artifactId' : 'tempPushNotification_title_string',
                  'id' : 'aw9f0d98f1',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'tempPushNotification_description_string',
                  'id' : 'aw534ca27b',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'resourceId',
                  'index' : false,
                  'artifactId' : 'tempPushNotification_resourceId_string',
                  'id' : 'aw850e973d',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'resource',
                  'index' : false,
                  'artifactId' : 'tempPushNotification_resource_string',
                  'id' : 'awa816018f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'msgType',
                  'index' : false,
                  'artifactId' : 'tempPushNotification_msgType_string',
                  'id' : 'aw61585e4a',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'transitionTo',
                  'index' : false,
                  'artifactId' : 'tempPushNotification_transitionTo_string',
                  'id' : 'awcb25d777',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'afterLogin',
                  'index' : false,
                  'artifactId' : 'tempPushNotification_afterLogin_boolean',
                  'id' : 'aw6ff206dc',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'msgProp1',
                  'index' : false,
                  'artifactId' : 'tempPushNotification_msgProp1_string',
                  'id' : 'aw8bc5d3ed',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'msgProp2',
                  'index' : false,
                  'artifactId' : 'tempPushNotification_msgProp2_string',
                  'id' : 'aw54ad40e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'msgProp3',
                  'index' : false,
                  'artifactId' : 'tempPushNotification_msgProp3_string',
                  'id' : 'awc9e0d490',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise125 = PersistenceManager.initCollection( resource125 );


            var resource126 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformDemoModeResource',
                  'resourceName' : 'PlatformDemoModeResource',
                  'id' : 'awa62d35c6',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'platform' : 'true',
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'boolean',
                  'name' : 'DemoONOFF',
                  'index' : false,
                  'artifactId' : 'PlatformDemoModeResource_mode_indicator',
                  'id' : 'aw80f9a21a',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'MessageText',
                  'index' : false,
                  'artifactId' : 'PlatformDemoModeResource_message',
                  'id' : 'awc0326999',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise126 = PersistenceManager.initCollection( resource126 );


            var resource127 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformMapMarkerInfo',
                  'resourceName' : 'PlatformMapMarkerInfo',
                  'id' : 'aweb22e8c9',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'startAddress',
                  'index' : false,
                  'artifactId' : 'PlatformMapMarkerInfo_startAddress_string',
                  'id' : 'aw5c490ed7',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'endAddress',
                  'index' : false,
                  'artifactId' : 'PlatformMapMarkerInfo_endAddress_string',
                  'id' : 'aw6bf681b6',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'currentMarker',
                  'index' : false,
                  'artifactId' : 'PlatformMapMarkerInfo_currentMarker_string',
                  'id' : 'aw903318f3',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'startMarker',
                  'index' : false,
                  'artifactId' : 'PlatformMapMarkerInfo_startMarker_string',
                  'id' : 'aw6f93bebe',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'endMarker',
                  'index' : false,
                  'artifactId' : 'PlatformMapMarkerInfo_endMarker_string',
                  'id' : 'aw8272f55',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise127 = PersistenceManager.initCollection( resource127 );


            var resource128 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformDirectionSteps',
                  'resourceName' : 'PlatformDirectionSteps',
                  'id' : 'awe22af0ac',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'step',
                  'index' : false,
                  'artifactId' : 'PlatformDirectionSteps_step_string',
                  'id' : 'aw559d69ac',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise128 = PersistenceManager.initCollection( resource128 );


            var resource129 = new ResourceMetadata({
                  'pageSize' : 200,
                  'resourceName' : 'mapmanager',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'hasManagedQuery' : 'true',
                  'artifactId' : 'mapmanager',
                  'id' : 'aw47931906',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,dcterms:title,spi:active,spi:mapsites,spi:ismobile,spi:mapprovider,spi:bmapslicense,spi:gmapsapikey').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'identifier',
                  'index' : true,
                  'artifactId' : 'mapmanager_1_1_1',
                  'maxSize' : 18,
                  'id' : 'aw6be898a4',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : true,
                  'artifactId' : 'mapmanager_1_1_2',
                  'maxSize' : 50,
                  'id' : 'awf2e1c91e',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'boolean',
                  'name' : 'active',
                  'index' : true,
                  'artifactId' : 'mapmanager_1_1_3',
                  'id' : 'aw85e6f988',
                  'local' : false,
                  'remoteName' : 'spi:active',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'name' : 'mapsiteslist',
                  'index' : true,
                  'artifactId' : 'mapmanager_1_1_4',
                  'id' : 'aw1b826c2b',
                  'local' : false,
                  'remoteName' : 'spi:mapsites',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'ismobile',
                  'index' : true,
                  'artifactId' : 'mapmanager_1_1_6',
                  'id' : 'awf58c0d07',
                  'local' : false,
                  'remoteName' : 'spi:ismobile',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'mapprovider',
                  'index' : true,
                  'artifactId' : 'mapmanager_1_1_7',
                  'maxSize' : 25,
                  'id' : 'aw828b3d91',
                  'local' : false,
                  'remoteName' : 'spi:mapprovider',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'bmapslicense',
                  'index' : true,
                  'artifactId' : 'mapmanager_1_1_8',
                  'maxSize' : 1000,
                  'id' : 'aw12342000',
                  'local' : false,
                  'remoteName' : 'spi:bmapslicense',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'gmapsapikey',
                  'index' : true,
                  'artifactId' : 'mapmanager_1_1_9',
                  'maxSize' : 1000,
                  'id' : 'aw65331096',
                  'local' : false,
                  'remoteName' : 'spi:gmapsapikey',
               }).
               setQueryBases([
                     {name:'defaultquery', queryString:'\/oslc\/os\/oslcmapmanager', defaultForSearch: true, queryLabel:'' }
               ]).
               setWhereClause('spi%3Aismobile%3D1');
            var resourcePromise129 = PersistenceManager.initCollection( resource129 );


            var resource130 = new ResourceMetadata({
                  'pageSize' : 200,
                  'resourceName' : 'plussmapmanager',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'hasManagedQuery' : 'true',
                  'artifactId' : 'plussmapmanager',
                  'id' : 'aw40711e5e',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,dcterms:title,spi_spatial:active,spi_spatial:mapsites,spi_spatial:plussmapservice,spi_spatial:ismobile,spi_spatial:spatialtokensecurity,spi_spatial:useproxy').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'identifier',
                  'index' : true,
                  'artifactId' : 'plussmapmanager_1_1_1',
                  'maxSize' : 18,
                  'id' : 'aw402c5118',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : true,
                  'artifactId' : 'plussmapmanager_1_1_2',
                  'maxSize' : 50,
                  'id' : 'awd92500a2',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'boolean',
                  'name' : 'active',
                  'index' : true,
                  'artifactId' : 'plussmapmanager_1_1_3',
                  'id' : 'awae223034',
                  'local' : false,
                  'remoteName' : 'spi_spatial:active',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'name' : 'mapsiteslist',
                  'index' : true,
                  'artifactId' : 'plussmapmanager_1_1_4',
                  'id' : 'aw3046a597',
                  'local' : false,
                  'remoteName' : 'spi_spatial:mapsites',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'name' : 'servicelist',
                  'index' : true,
                  'artifactId' : 'plussmapmanager_1_1_5',
                  'id' : 'aw47419501',
                  'local' : false,
                  'remoteName' : 'spi_spatial:plussmapservice',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'ismobile',
                  'index' : true,
                  'artifactId' : 'plussmapmanager_1_1_6',
                  'id' : 'awde48c4bb',
                  'local' : false,
                  'remoteName' : 'spi_spatial:ismobile',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'spatialtokensecurity',
                  'index' : true,
                  'artifactId' : 'plussmapmanager_1_1_7',
                  'id' : 'awa94ff42d',
                  'local' : false,
                  'remoteName' : 'spi_spatial:spatialtokensecurity',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'useproxy',
                  'index' : true,
                  'artifactId' : 'plussmapmanager_1_1_8',
                  'id' : 'aw39f0e9bc',
                  'local' : false,
                  'remoteName' : 'spi_spatial:useproxy',
               }).
               setQueryBases([
                     {name:'defaultquery', queryString:'\/oslc\/os\/oslcplussmapmanager', defaultForSearch: true, queryLabel:'' }
               ]).
               setWhereClause('spi_spatial%3Aismobile%3D1');
            var resourcePromise130 = PersistenceManager.initCollection( resource130 );


            var resource131 = new ResourceMetadata({
                  'defaultOrderBy' : 'serviceorder desc',
                  'pageSize' : 200,
                  'resourceName' : 'plussmapservice',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'hasManagedQuery' : 'true',
                  'artifactId' : 'plussmapservice',
                  'id' : 'aw5bc8a135',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,dcterms:title,spi_spatial:serviceorder,spi_spatial:url,spi_spatial:transparency,spi_spatial:proxy,spi_spatial:mapname,spi_spatial:visible,spi_spatial:tokensecurityusername,spi_spatial:tokensecuritypswd,spi_spatial:webmapdefined,spi_spatial:istiledlayer,spi_spatial:jsonlayers,spi_spatial:jsonfeatureserver,spi_spatial:jsonmapserver').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : true,
                  'artifactId' : 'plussmapservice_1',
                  'maxSize' : 19,
                  'id' : 'aw2ec4595e',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'servicename',
                  'index' : true,
                  'artifactId' : 'plussmapservice_2',
                  'maxSize' : 256,
                  'id' : 'awb7cd08e4',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'name' : 'serviceorder',
                  'index' : true,
                  'artifactId' : 'plussmapservice_3',
                  'id' : 'awc0ca3872',
                  'local' : false,
                  'remoteName' : 'spi_spatial:serviceorder',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'url',
                  'index' : true,
                  'artifactId' : 'plussmapservice_4',
                  'maxSize' : 1000,
                  'id' : 'aw5eaeadd1',
                  'local' : false,
                  'remoteName' : 'spi_spatial:url',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'name' : 'transparency',
                  'index' : true,
                  'artifactId' : 'plussmapservice_5',
                  'id' : 'aw29a99d47',
                  'local' : false,
                  'remoteName' : 'spi_spatial:transparency',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'proxy',
                  'index' : true,
                  'artifactId' : 'plussmapservice_6',
                  'id' : 'awb0a0ccfd',
                  'local' : false,
                  'remoteName' : 'spi_spatial:proxy',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'mapname',
                  'index' : true,
                  'artifactId' : 'plussmapservice_7',
                  'maxSize' : 18,
                  'id' : 'awc7a7fc6b',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi_spatial:mapname',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'visible',
                  'index' : true,
                  'artifactId' : 'plussmapservice_9',
                  'id' : 'aw201fd16c',
                  'local' : false,
                  'remoteName' : 'spi_spatial:visible',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'tokensecurityusername',
                  'index' : true,
                  'artifactId' : 'plussmapservice_10',
                  'maxSize' : 1000,
                  'id' : 'aw7826678b',
                  'local' : false,
                  'remoteName' : 'spi_spatial:tokensecurityusername',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'crypto',
                  'name' : 'tokensecuritypswd',
                  'index' : true,
                  'artifactId' : 'plussmapservice_11',
                  'maxSize' : 2000,
                  'id' : 'awf21571d',
                  'local' : false,
                  'remoteName' : 'spi_spatial:tokensecuritypswd',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'webmapdefined',
                  'index' : true,
                  'artifactId' : 'plussmapservice_12',
                  'id' : 'aw962806a7',
                  'local' : false,
                  'remoteName' : 'spi_spatial:webmapdefined',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'boolean',
                  'name' : 'istiledlayer',
                  'index' : true,
                  'artifactId' : 'plussmapservice_13',
                  'id' : 'awe12f3631',
                  'local' : false,
                  'remoteName' : 'spi_spatial:istiledlayer',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'clob',
                  'name' : 'jsonlayers',
                  'index' : true,
                  'artifactId' : 'plussmapservice_14',
                  'maxSize' : 999999,
                  'id' : 'aw7f4ba392',
                  'local' : false,
                  'remoteName' : 'spi_spatial:jsonlayers',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'clob',
                  'name' : 'jsonfeatureserver',
                  'index' : true,
                  'artifactId' : 'plussmapservice_15',
                  'maxSize' : 999999,
                  'id' : 'aw84c9304',
                  'local' : false,
                  'remoteName' : 'spi_spatial:jsonfeatureserver',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'clob',
                  'name' : 'jsonmapserver',
                  'index' : true,
                  'artifactId' : 'plussmapservice_16',
                  'maxSize' : 999999,
                  'id' : 'aw9145c2be',
                  'local' : false,
                  'remoteName' : 'spi_spatial:jsonmapserver',
               }).
               setQueryBases([
                     {name:'defaultquery', queryString:'\/oslc\/os\/oslcplussmapservice', defaultForSearch: true, queryLabel:'' }
               ]);
            var resourcePromise131 = PersistenceManager.initCollection( resource131 );


            var resource132 = new ResourceMetadata({
                  'pageSize' : 200,
                  'resourceName' : 'PLUSSSECURITYTOKEN',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'hasManagedQuery' : 'true',
                  'artifactId' : 'PLUSSSECURITYTOKEN',
                  'id' : 'awb9de8269',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,spi_spatial:expiretime,spi_spatial:expireresetlimit').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'identifier',
                  'index' : true,
                  'artifactId' : 'PLUSSSECURITYTOKEN_1',
                  'maxSize' : 255,
                  'id' : 'aw9aadd862',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'expiretime',
                  'index' : true,
                  'artifactId' : 'PLUSSSECURITYTOKEN_2',
                  'id' : 'aw3a489d8',
                  'local' : false,
                  'remoteName' : 'spi_spatial:expiretime',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'expireresetlimit',
                  'index' : true,
                  'artifactId' : 'PLUSSSECURITYTOKEN_3',
                  'id' : 'aw74a3b94e',
                  'local' : false,
                  'remoteName' : 'spi_spatial:expireresetlimit',
               }).
               setQueryBases([
                     {name:'defaultquery', queryString:'\/oslc\/os\/oslcplusstoken', defaultForSearch: true, queryLabel:'' }
               ]);
            var resourcePromise132 = PersistenceManager.initCollection( resource132 );


            var resource133 = new ResourceMetadata({
                  'pageSize' : 200,
                  'resourceName' : 'PLUSSLINKEDMBO',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'hasManagedQuery' : 'true',
                  'artifactId' : 'PLUSSLINKEDMBO',
                  'id' : 'aw61f49b60',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,spi_spatial:jsonmbo').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'identifier',
                  'index' : true,
                  'artifactId' : 'PLUSSLINKEDMBO_1',
                  'maxSize' : 255,
                  'id' : 'aw2f0413c1',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'clob',
                  'name' : 'jsonmbo',
                  'index' : true,
                  'artifactId' : 'PLUSSLINKEDMBO_2',
                  'maxSize' : 999999,
                  'id' : 'awb60d427b',
                  'local' : false,
                  'remoteName' : 'spi_spatial:jsonmbo',
               }).
               setQueryBases([
                     {name:'defaultquery', queryString:'\/oslc\/os\/oslcplusslinkedmbo', defaultForSearch: true, queryLabel:'' }
               ]);
            var resourcePromise133 = PersistenceManager.initCollection( resource133 );


            var resource134 = new ResourceMetadata({
                  'pageSize' : 100,
                  'resourceName' : 'lbslocation',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'lbslocation',
                  'id' : 'aw16c9c8ec',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:altitude,spi:altitudeaccuracy,spi:key1,spi:key2,spi:key3,spi:longitude,spi:refobject,spi:speed,spi:lastupdate,spi:latitude,spi:wonum,spi:siteid,spi:heading,spi:locationaccuracy').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'altitude',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'lbslocation_altitude',
                  'id' : 'aw6c41f5f1',
                  'local' : false,
                  'remoteName' : 'spi:altitude',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'altitudeaccuracy',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'lbslocation_altitudeaccuracy',
                  'id' : 'awe0441ac',
                  'local' : false,
                  'remoteName' : 'spi:altitudeaccuracy',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'key1',
                  'index' : false,
                  'artifactId' : 'lbslocation_key1',
                  'maxSize' : 255,
                  'id' : 'awad42e064',
                  'local' : false,
                  'remoteName' : 'spi:key1',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'key2',
                  'index' : false,
                  'artifactId' : 'lbslocation_key2',
                  'maxSize' : 255,
                  'id' : 'aw344bb1de',
                  'local' : false,
                  'remoteName' : 'spi:key2',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'key3',
                  'index' : false,
                  'artifactId' : 'lbslocation_key3',
                  'maxSize' : 255,
                  'id' : 'aw434c8148',
                  'local' : false,
                  'remoteName' : 'spi:key3',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'longitude',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'lbslocation_longitude',
                  'id' : 'aw875b7731',
                  'local' : false,
                  'remoteName' : 'spi:longitude',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'refobject',
                  'index' : false,
                  'artifactId' : 'lbslocation_refobject',
                  'maxSize' : 30,
                  'id' : 'aw53e43ae8',
                  'local' : false,
                  'remoteName' : 'spi:refobject',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'speed',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'lbslocation_speed',
                  'id' : 'aw2e1314c7',
                  'local' : false,
                  'remoteName' : 'spi:speed',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'lastupdate',
                  'index' : false,
                  'artifactId' : 'lbslocation_lastupdate',
                  'id' : 'awfbeaed0d',
                  'local' : false,
                  'remoteName' : 'spi:lastupdate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'latitude',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'lbslocation_latitude',
                  'id' : 'aw969381e0',
                  'local' : false,
                  'remoteName' : 'spi:latitude',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'wonum',
                  'index' : false,
                  'artifactId' : 'lbslocation_wonum',
                  'maxSize' : 25,
                  'id' : 'aweca2b0da',
                  'local' : false,
                  'remoteName' : 'spi:wonum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'lbslocation_siteid',
                  'maxSize' : 8,
                  'id' : 'awad08b58f',
                  'local' : false,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'heading',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'lbslocation_heading',
                  'id' : 'aw84361220',
                  'local' : false,
                  'remoteName' : 'spi:heading',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'locationaccuracy',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'lbslocation_locationaccuracy',
                  'id' : 'aw91161f6b',
                  'local' : false,
                  'remoteName' : 'spi:locationaccuracy',
               }).
               setCreationFactories([
                     {name:'createLbslocation', creationString:'\/oslc\/os\/oslclbslocation' }
               ]).
               setQueryBases([
                     {name:'getLbslocation', queryString:'\/oslc\/os\/oslclbslocation', queryLabel:'' }
               ]);
            var resourcePromise134 = PersistenceManager.initCollection( resource134 );


            var resource135 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'PlatformGeolocationLocalStore',
                  'resourceName' : 'PlatformGeolocationLocalStore',
                  'id' : 'awd5b5d51a',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'wonum',
                  'index' : false,
                  'artifactId' : 'tempPlatformGeolocationLocalStore_wonum_string',
                  'id' : 'awdbe10dd2',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'wositeid',
                  'index' : false,
                  'artifactId' : 'tempPlatformGeolocationLocalStore_wositeid_string',
                  'id' : 'aw28f7f0c4',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'gpswatchid',
                  'index' : false,
                  'artifactId' : 'tempPlatformGeolocationLocalStore_gpswatchid_string',
                  'id' : 'awca7b645e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'integer',
                  'name' : 'offlinecount',
                  'index' : false,
                  'artifactId' : 'tempPlatformGeolocationLocalStore_offlinecount_integer',
                  'id' : 'awbf02aa12',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'latitudey',
                  'index' : false,
                  'artifactId' : 'tempPlatformGeolocationLocalStore_LatitudeY_string',
                  'id' : 'awfd598fd9',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'longitudex',
                  'index' : false,
                  'artifactId' : 'tempPlatformGeolocationLocalStore_LongitudeX_string',
                  'id' : 'awd56b4278',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'errorcode',
                  'index' : false,
                  'artifactId' : 'tempPlatformGeolocationLocalStore_errorcode_string',
                  'id' : 'awaea299c9',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'watchid',
                  'index' : false,
                  'artifactId' : 'tempPlatformGeolocationLocalStore_watchID_string',
                  'id' : 'awc678254f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'timerid',
                  'index' : false,
                  'artifactId' : 'tempPlatformGeolocationLocalStore_timerID_string',
                  'id' : 'awa992dff6',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'timestamp',
                  'index' : false,
                  'artifactId' : 'tempPlatformGeolocationLocalStore_timerstamp_string',
                  'id' : 'aw38b15ed8',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise135 = PersistenceManager.initCollection( resource135 );


            all([resourcePromise001, resourcePromise002, resourcePromise003, resourcePromise004, resourcePromise005, resourcePromise006, resourcePromise007, resourcePromise008, resourcePromise009, resourcePromise010, resourcePromise011, resourcePromise012, resourcePromise013, resourcePromise014, resourcePromise015, resourcePromise016, resourcePromise017, resourcePromise018, resourcePromise019, resourcePromise020, resourcePromise021, resourcePromise022, resourcePromise023, resourcePromise024, resourcePromise025, resourcePromise026, resourcePromise027, resourcePromise028, resourcePromise029, resourcePromise030, resourcePromise031, resourcePromise032, resourcePromise033, resourcePromise034, resourcePromise035, resourcePromise036, resourcePromise037, resourcePromise038, resourcePromise039, resourcePromise040, resourcePromise041, resourcePromise042, resourcePromise043, resourcePromise044, resourcePromise045, resourcePromise046, resourcePromise047, resourcePromise048, resourcePromise049, resourcePromise050, resourcePromise051, resourcePromise052, resourcePromise053, resourcePromise054, resourcePromise055, resourcePromise056, resourcePromise057, resourcePromise058, resourcePromise059, resourcePromise060, resourcePromise061, resourcePromise062, resourcePromise063, resourcePromise064, resourcePromise065, resourcePromise066, resourcePromise067, resourcePromise068, resourcePromise069, resourcePromise070, resourcePromise071, resourcePromise072, resourcePromise073, resourcePromise074, resourcePromise075, resourcePromise076, resourcePromise077, resourcePromise078, resourcePromise079, resourcePromise080, resourcePromise081, resourcePromise082, resourcePromise083, resourcePromise084, resourcePromise085, resourcePromise086, resourcePromise087, resourcePromise088, resourcePromise089, resourcePromise090, resourcePromise091, resourcePromise092, resourcePromise093, resourcePromise094, resourcePromise095, resourcePromise096, resourcePromise097, resourcePromise098, resourcePromise099, resourcePromise100, resourcePromise101, resourcePromise102, resourcePromise103, resourcePromise104, resourcePromise105, resourcePromise106, resourcePromise107, resourcePromise108, resourcePromise109, resourcePromise110, resourcePromise111, resourcePromise112, resourcePromise113, resourcePromise114, resourcePromise115, resourcePromise116, resourcePromise117, resourcePromise118, resourcePromise119, resourcePromise120, resourcePromise121, resourcePromise122, resourcePromise123, resourcePromise124, resourcePromise125, resourcePromise126, resourcePromise127, resourcePromise128, resourcePromise129, resourcePromise130, resourcePromise131, resourcePromise132, resourcePromise133, resourcePromise134, resourcePromise135]).then(function(results) {
                 promise.resolve();
            }).
            otherwise(function(error) {
                 promise.reject(error);
            });
         }
      });
});
