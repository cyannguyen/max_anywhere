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
// Build: 2022-05-26 15:49:18
//----------------------------------------------------------------//
define(   "generated/application/data/ApplicationStoresBuilder", 
      [
         "dojo/_base/declare", 
         "dojo/promise/all", 
         "platform/boot/data/_StoresBuilderBase", 
         "platform/store/ResourceMetadata", 
         "platform/store/PersistenceManager", 
         "application/business/WorkOrderObject", 
         "application/business/TaskObject", 
         "application/business/MultiAssetLocObject", 
         "application/business/PlannedServiceObject", 
         "application/business/PlannedMaterialObject", 
         "application/business/PlannedToolObject"
      ],

function(declare, all, StoresBuilderBase, ResourceMetadata, PersistenceManager, WorkOrderObject, TaskObject, MultiAssetLocObject, PlannedServiceObject, PlannedMaterialObject, PlannedToolObject) {
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
                  'defaultOrderBy' : 'wonum asc',
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
               setSimpleFieldsSelectExpression('dcterms:identifier,dcterms:title,dcterms:description,spi_wm:woclass,oslc:shortTitle,spi_wm:schedstart,spi_wm:schedfinish,spi_wm:targstartdate,spi_wm:targcompdate,spi:status,spi_wm:siteid,spi_wm:orgid,spi_wm:worktype,spi_wm:wopriority,dcterms:created,spi_wm:glaccount,spi_wm:np_statusmemo,spi_wm:statusdate,spi_wm:istask,spi_wm:estintlabhrs,spi_wm:estoutlabhrs,spi_wm:estlabhrs,spi_wm:estintlabcost,spi_wm:estoutlabcost,spi_wm:estlabcost,spi_wm:estmatcost,spi_wm:esttoolcost,spi_wm:estservcost,spi_wm:assetancestor{spi_wm:ancestor},dcterms:creator{foaf:name},spi:asset{spi:description_longdescription,dcterms:title,oslc:shortTitle},spi:location{spi:description_longdescription,dcterms:title,oslc:shortTitle},spi_wm:locancestor{spi_wm:ancestor},spi:woserviceaddress{spi_wm:formattedaddress}').
               setSupportiveFieldsSelectExpression('spi_wm:task{spi_wm:taskid,dcterms:title,spi_wm:description_longdescription,spi:status,spi_wm:schedstart,spi_wm:parent,spi_wm:istask,spi_wm:statusdate,spi_wm:np_statusmemo,spi_wm:siteid,oslc:shortTitle,spi_wm:parentchgsstatus,spi_wm:estintlabhrs,spi_wm:estoutlabhrs,spi_wm:estlabhrs,spi_wm:estintlabcost,spi_wm:estoutlabcost,spi_wm:estlabcost,spi_wm:estmatcost,spi_wm:esttoolcost,spi_wm:estservcost,spi:asset{dcterms:title,oslc:shortTitle},spi:location{dcterms:title,oslc:shortTitle}},spi_wm:wpservice{spi_wm:wpitemid,spi_wm:taskid,spi_wm:itemnum,spi_wm:description,spi_wm:description_longdescription,spi_wm:itemqty,spi_wm:unitcost,spi_wm:linecost,spi_wm:vendor,spi_wm:linetype},spi_wm:wplabor{spi_wm:wplaborid,spi_wm:taskid,spi_wm:laborcode,spi_wm:skilllevel,spi_wm:laborhrs,spi_wm:displayrate,spi_wm:linecost,spi_wm:contractnum,spi_wm:amcrew,spi_wm:crewworkgroup,spi_wm:amcrewtype,spi:vendor{oslc:shortTitle},spi_wm:craft{oslc:shortTitle}},spi_wm:multiassetlocci{spi_wm:multiid,spi_wm:sequence,spi_wm:progress,spi:asset{dcterms:title,oslc:shortTitle},spi:location{dcterms:title,oslc:shortTitle}},spi_wm:wpmaterial{spi_wm:wpitemid,spi_wm:taskid,spi_wm:itemnum,spi_wm:description,spi_wm:description_longdescription,spi_wm:itemqty,spi_wm:unitcost,spi_wm:linecost,spi_wm:linetype,spi_wm:directreq,spi:location{dcterms:title,oslc:shortTitle}},spi_wm:wptool{spi_wm:wpitemid,spi_wm:itemnum,spi_wm:taskid,spi_wm:description,spi_wm:description_longdescription,spi_wm:itemqty,spi_wm:hours,spi_wm:linecost,spi_wm:rate,spi:location{dcterms:title,oslc:shortTitle}},spi_wm:worklog{spi_wm:worklogid,spi_wm:createdate,spi_wm:createby,spi_wm:clientviewable,spi_wm:logtype,spi_wm:description,spi_wm:description_longdescription,spi_wm:anywhererefid},spi_wm:actuallabor{spi_wm:taskid}').
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
                  'dataType' : 'reference',
                  'referenceResource' : 'workOrder',
                  'name' : 'assetdesc',
                  'index' : false,
                  'artifactId' : 'workOrder_assetdesc_spiassetdctermstitle',
                  'maxSize' : 100,
                  'id' : 'aw14b0ccbf',
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
                  'name' : 'targetstart',
                  'index' : false,
                  'artifactId' : 'workOrder_targetstart_spi_wmtargstartdate',
                  'id' : 'aw6c2bd5c0',
                  'local' : false,
                  'remoteName' : 'spi_wm:targstartdate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'targetfinish',
                  'index' : false,
                  'artifactId' : 'workOrder_targetfinish_spi_wmtargcompdate',
                  'id' : 'aw88a157b0',
                  'local' : false,
                  'remoteName' : 'spi_wm:targcompdate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'workOrder',
                  'name' : 'location',
                  'index' : false,
                  'artifactId' : 'workOrder_location_spilocationoslcshortTitle',
                  'maxSize' : 12,
                  'id' : 'aw7138f85d',
                  'local' : false,
                  'remoteName' : 'spi:location',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'dcterms:title',
                  'dataType' : 'reference',
                  'referenceResource' : 'workOrder',
                  'name' : 'locationdesc',
                  'index' : false,
                  'artifactId' : 'workOrder_locationdesc_spilocationdctermstitle',
                  'maxSize' : 100,
                  'id' : 'aw4b3eb3c8',
                  'local' : false,
                  'remoteName' : 'spi:location',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi:description_longdescription',
                  'dataType' : 'reference',
                  'usage' : 'longaln',
                  'referenceResource' : 'workOrder',
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
                  'displayValueRemoteName' : 'foaf:name',
                  'dataType' : 'reference',
                  'referenceResource' : 'workOrder',
                  'name' : 'reportedby',
                  'index' : false,
                  'artifactId' : 'workOrder_reportedby_dctermscreatorfoafname',
                  'maxSize' : 62,
                  'id' : 'aw4a94bf58',
                  'local' : false,
                  'remoteName' : 'dcterms:creator',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'reporteddate',
                  'index' : false,
                  'artifactId' : 'workOrder_reporteddate_dctermscreated',
                  'id' : 'awc5a0219e',
                  'local' : false,
                  'remoteName' : 'dcterms:created',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'gl',
                  'name' : 'glaccount',
                  'index' : false,
                  'artifactId' : 'workOrder_glaccount_spi_wmglaccount',
                  'maxSize' : 23,
                  'id' : 'aw8aa4781e',
                  'local' : false,
                  'remoteName' : 'spi_wm:glaccount',
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
                  'selectExpression' : 'spi_wm:task{spi_wm:taskid,dcterms:title,spi_wm:description_longdescription,spi:status,spi_wm:schedstart,spi_wm:parent,spi_wm:istask,spi_wm:statusdate,spi_wm:np_statusmemo,spi_wm:siteid,oslc:shortTitle,spi_wm:parentchgsstatus,spi_wm:estintlabhrs,spi_wm:estoutlabhrs,spi_wm:estlabhrs,spi_wm:estintlabcost,spi_wm:estoutlabcost,spi_wm:estlabcost,spi_wm:estmatcost,spi_wm:esttoolcost,spi_wm:estservcost,spi:asset{dcterms:title,oslc:shortTitle},spi:location{dcterms:title,oslc:shortTitle}}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'plannedServiceResource',
                  'name' : 'servicelist',
                  'index' : false,
                  'artifactId' : 'workOrder_servicelist_spi_wmwpservice',
                  'id' : 'awd09447d',
                  'describedByResource' : 'plannedServiceResource',
                  'local' : false,
                  'remoteName' : 'spi_wm:wpservice',
                  'selectExpression' : 'spi_wm:wpservice{spi_wm:wpitemid,spi_wm:taskid,spi_wm:itemnum,spi_wm:description,spi_wm:description_longdescription,spi_wm:itemqty,spi_wm:unitcost,spi_wm:linecost,spi_wm:vendor,spi_wm:linetype}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'plannedLaborResource',
                  'name' : 'laborlist',
                  'index' : false,
                  'artifactId' : 'workOrder_laborlist_spi_wmwplabor',
                  'id' : 'aw445f4b7',
                  'describedByResource' : 'plannedLaborResource',
                  'local' : false,
                  'remoteName' : 'spi_wm:wplabor',
                  'selectExpression' : 'spi_wm:wplabor{spi_wm:wplaborid,spi_wm:taskid,spi_wm:laborcode,spi_wm:skilllevel,spi_wm:laborhrs,spi_wm:displayrate,spi_wm:linecost,spi_wm:contractnum,spi_wm:amcrew,spi_wm:crewworkgroup,spi_wm:amcrewtype,spi:vendor{oslc:shortTitle},spi_wm:craft{oslc:shortTitle}}',
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
                  'selectExpression' : 'spi_wm:multiassetlocci{spi_wm:multiid,spi_wm:sequence,spi_wm:progress,spi:asset{dcterms:title,oslc:shortTitle},spi:location{dcterms:title,oslc:shortTitle}}',
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
                  'selectExpression' : 'spi_wm:wpmaterial{spi_wm:wpitemid,spi_wm:taskid,spi_wm:itemnum,spi_wm:description,spi_wm:description_longdescription,spi_wm:itemqty,spi_wm:unitcost,spi_wm:linecost,spi_wm:linetype,spi_wm:directreq,spi:location{dcterms:title,oslc:shortTitle}}',
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
                  'selectExpression' : 'spi_wm:wptool{spi_wm:wpitemid,spi_wm:itemnum,spi_wm:taskid,spi_wm:description,spi_wm:description_longdescription,spi_wm:itemqty,spi_wm:hours,spi_wm:linecost,spi_wm:rate,spi:location{dcterms:title,oslc:shortTitle}}',
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
                  'referenceResource' : 'actualLaborResource',
                  'name' : 'actuallaborlist',
                  'index' : false,
                  'artifactId' : 'workOrder_actuallaborlist_spi_wmactuallabor',
                  'id' : 'awc1321270',
                  'describedByResource' : 'actualLaborResource',
                  'local' : false,
                  'remoteName' : 'spi_wm:actuallabor',
                  'selectExpression' : 'spi_wm:actuallabor{spi_wm:taskid}',
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
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'usage' : 'duration',
                  'name' : 'estintlabhrs',
                  'index' : false,
                  'scale' : 0,
                  'artifactId' : 'workOrder_estintlabhrs_spi_wmestintlabhrs',
                  'id' : 'awf87d084d',
                  'local' : false,
                  'remoteName' : 'spi_wm:estintlabhrs',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'usage' : 'duration',
                  'name' : 'estoutlabhrs',
                  'index' : false,
                  'scale' : 0,
                  'artifactId' : 'workOrder_estoutlabhrs_spi_wmestoutlabhrs',
                  'id' : 'aw806802e8',
                  'local' : false,
                  'remoteName' : 'spi_wm:estoutlabhrs',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'usage' : 'duration',
                  'name' : 'estlabhrs',
                  'index' : false,
                  'scale' : 0,
                  'artifactId' : 'workOrder_estlabhrs_spi_wmestlabhrs',
                  'id' : 'awfd5739d',
                  'local' : false,
                  'remoteName' : 'spi_wm:estlabhrs',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'usage' : 'amount',
                  'name' : 'estintlabcost',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'workOrder_estintlabcost_spi_wmestintlabcost',
                  'id' : 'awf780531d',
                  'local' : false,
                  'remoteName' : 'spi_wm:estintlabcost',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'usage' : 'amount',
                  'name' : 'estoutlabcost',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'workOrder_estoutlabcost_spi_wmestoutlabcost',
                  'id' : 'awd055960d',
                  'local' : false,
                  'remoteName' : 'spi_wm:estoutlabcost',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'usage' : 'amount',
                  'name' : 'estlabcost',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'workOrder_estlabcost_spi_wmestlabcost',
                  'id' : 'aw40a9794a',
                  'local' : false,
                  'remoteName' : 'spi_wm:estlabcost',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'usage' : 'amount',
                  'name' : 'estmatcost',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'workOrder_estmatcost_spi_wmestmatcost',
                  'id' : 'aw535d653a',
                  'local' : false,
                  'remoteName' : 'spi_wm:estmatcost',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'usage' : 'amount',
                  'name' : 'esttoolcost',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'workOrder_esttoolcost_spi_wmesttoolcost',
                  'id' : 'aw161dd2c3',
                  'local' : false,
                  'remoteName' : 'spi_wm:esttoolcost',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'usage' : 'amount',
                  'name' : 'estservcost',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'workOrder_estservcost_spi_wmestservcost',
                  'id' : 'awe0067a46',
                  'local' : false,
                  'remoteName' : 'spi_wm:estservcost',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'localtotalcost',
                  'index' : false,
                  'artifactId' : 'workOrder_localtotalcost_string',
                  'id' : 'aw76b58725',
                  'persistent' : true,
                  'local' : true,
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
                  'name' : 'statusdesc',
                  'index' : false,
                  'artifactId' : 'workOrder_statusdesc_string',
                  'id' : 'aw8ceb99f',
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
                  'name' : 'starttimeISO',
                  'formula' : '${starttime}',
                  'index' : true,
                  'artifactId' : 'workOrder_starttimeISO_string',
                  'id' : 'aw473f3b38',
                  'persistent' : true,
                  'local' : true,
                  'remoteName' : 'spi_wm:schedstart',
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
                  'name' : 'multiassetloclistsize',
                  'index' : false,
                  'artifactId' : 'workOrder_multiassetloclistsize_string',
                  'id' : 'aw1dfc8d54',
                  'persistent' : false,
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
                  'name' : 'laborlistsize',
                  'index' : false,
                  'artifactId' : 'workOrder_laborlistsize_string',
                  'id' : 'aw7a3d075c',
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
                  'name' : 'servicelistsize',
                  'index' : false,
                  'artifactId' : 'workOrder_servicelistsize_string',
                  'id' : 'awd78d3ca9',
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
               setQueryBases([
                     {name:'searchAllWorkOrders', queryString:'\/oslc\/os\/oslcwodetail', defaultForSearch: true, queryLabel:'' },
                     {name:'myapprovals', queryString:'\/oslc\/os\/oslcwodetail?savedQuery=myapprovals', queryLabel:'' }
               ]);
            var resourcePromise004 = PersistenceManager.initCollection( resource004 );


            var resource005 = new ResourceMetadata({
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
               setSimpleFieldsSelectExpression('spi_wm:taskid,dcterms:title,spi_wm:description_longdescription,spi:status,spi_wm:schedstart,spi_wm:parent,spi_wm:istask,spi_wm:statusdate,spi_wm:np_statusmemo,spi_wm:siteid,oslc:shortTitle,spi_wm:parentchgsstatus,spi_wm:estintlabhrs,spi_wm:estoutlabhrs,spi_wm:estlabhrs,spi_wm:estintlabcost,spi_wm:estoutlabcost,spi_wm:estlabcost,spi_wm:estmatcost,spi_wm:esttoolcost,spi_wm:estservcost,spi:asset{dcterms:title,oslc:shortTitle},spi:location{dcterms:title,oslc:shortTitle}').
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
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'taskResource',
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
                  'dataType' : 'reference',
                  'referenceResource' : 'taskResource',
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
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'taskResource',
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
                  'dataType' : 'reference',
                  'referenceResource' : 'taskResource',
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
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'usage' : 'duration',
                  'name' : 'estintlabhrs',
                  'index' : false,
                  'scale' : 0,
                  'artifactId' : 'taskResource_estintlabhrs_spi_wmestintlabhrs',
                  'id' : 'awc904499c',
                  'local' : false,
                  'remoteName' : 'spi_wm:estintlabhrs',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'usage' : 'duration',
                  'name' : 'estoutlabhrs',
                  'index' : false,
                  'scale' : 0,
                  'artifactId' : 'taskResource_estoutlabhrs_spi_wmestoutlabhrs',
                  'id' : 'awb1114339',
                  'local' : false,
                  'remoteName' : 'spi_wm:estoutlabhrs',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'usage' : 'duration',
                  'name' : 'estlabhrs',
                  'index' : false,
                  'scale' : 0,
                  'artifactId' : 'taskResource_estlabhrs_spi_wmestlabhrs',
                  'id' : 'aw6271b432',
                  'local' : false,
                  'remoteName' : 'spi_wm:estlabhrs',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'usage' : 'amount',
                  'name' : 'estintlabcost',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'taskResource_estintlabcost_spi_wmestintlabcost',
                  'id' : 'aw6e78e73c',
                  'local' : false,
                  'remoteName' : 'spi_wm:estintlabcost',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'usage' : 'amount',
                  'name' : 'estoutlabcost',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'taskResource_estoutlabcost_spi_wmestoutlabcost',
                  'id' : 'aw49ad222c',
                  'local' : false,
                  'remoteName' : 'spi_wm:estoutlabcost',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'usage' : 'amount',
                  'name' : 'estlabcost',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'taskResource_estlabcost_spi_wmestlabcost',
                  'id' : 'aw6c36e3db',
                  'local' : false,
                  'remoteName' : 'spi_wm:estlabcost',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'usage' : 'amount',
                  'name' : 'estmatcost',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'taskResource_estmatcost_spi_wmestmatcost',
                  'id' : 'aw7fc2ffab',
                  'local' : false,
                  'remoteName' : 'spi_wm:estmatcost',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'usage' : 'amount',
                  'name' : 'esttoolcost',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'taskResource_esttoolcost_spi_wmesttoolcost',
                  'id' : 'aw6e9d3f5d',
                  'local' : false,
                  'remoteName' : 'spi_wm:esttoolcost',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'usage' : 'amount',
                  'name' : 'estservcost',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'taskResource_estservcost_spi_wmestservcost',
                  'id' : 'aw988697d8',
                  'local' : false,
                  'remoteName' : 'spi_wm:estservcost',
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
               });
            var resourcePromise005 = PersistenceManager.initCollection( resource005 );


            var resource006 = new ResourceMetadata({
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
            var resourcePromise006 = PersistenceManager.initCollection( resource006 );


            var resource007 = new ResourceMetadata({
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
               setSimpleFieldsSelectExpression('spi_wm:multiid,spi_wm:sequence,spi_wm:progress,spi:asset{dcterms:title,oslc:shortTitle},spi:location{dcterms:title,oslc:shortTitle}').
               setSupportiveFieldsSelectExpression('').
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
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'multiAssetLocResource',
                  'name' : 'asset',
                  'index' : false,
                  'artifactId' : 'multiAssetLocResource_asset_spiassetoslcshortTitle',
                  'maxSize' : 25,
                  'id' : 'aw5f6cdb62',
                  'local' : false,
                  'remoteName' : 'spi:asset',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'dcterms:title',
                  'dataType' : 'reference',
                  'referenceResource' : 'multiAssetLocResource',
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
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'multiAssetLocResource',
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
                  'dataType' : 'reference',
                  'referenceResource' : 'multiAssetLocResource',
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
            var resourcePromise007 = PersistenceManager.initCollection( resource007 );


            var resource008 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'plannedLaborResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'plannedLaborResource',
                  'id' : 'awce05c1f8',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi_wm:wplaborid,spi_wm:taskid,spi_wm:laborcode,spi_wm:skilllevel,spi_wm:laborhrs,spi_wm:displayrate,spi_wm:linecost,spi_wm:contractnum,spi_wm:amcrew,spi_wm:crewworkgroup,spi_wm:amcrewtype,spi:vendor{oslc:shortTitle},spi_wm:craft{oslc:shortTitle}').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'plannedLaborResource_wplaborid_spi_wmwplaborid',
                  'maxSize' : 20,
                  'id' : 'awacf86137',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi_wm:wplaborid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'taskid',
                  'index' : false,
                  'artifactId' : 'plannedLaborResource_taskid_spi_wmtaskid',
                  'id' : 'aw92da556',
                  'local' : false,
                  'remoteName' : 'spi_wm:taskid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'laborcode',
                  'index' : false,
                  'artifactId' : 'plannedLaborResource_laborcode_spi_wmlaborcode',
                  'maxSize' : 8,
                  'id' : 'awf5e01517',
                  'local' : false,
                  'remoteName' : 'spi_wm:laborcode',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'plannedLaborResource',
                  'name' : 'craft',
                  'index' : false,
                  'artifactId' : 'plannedLaborResource_craft_spi_wmcraftoslcshortTitle',
                  'maxSize' : 8,
                  'id' : 'aw9369fdfe',
                  'local' : false,
                  'remoteName' : 'spi_wm:craft',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'skilllevel',
                  'index' : false,
                  'artifactId' : 'plannedLaborResource_skilllevel_spi_wmskilllevel',
                  'maxSize' : 15,
                  'id' : 'aw2b803760',
                  'local' : false,
                  'remoteName' : 'spi_wm:skilllevel',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'usage' : 'duration',
                  'name' : 'hours',
                  'index' : false,
                  'scale' : 0,
                  'artifactId' : 'plannedLaborResource_hours_spi_wmlaborhrs',
                  'id' : 'awc20c9062',
                  'local' : false,
                  'remoteName' : 'spi_wm:laborhrs',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'rate',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'plannedLaborResource_rate_spi_wmdisplayrate',
                  'id' : 'aw2b787e61',
                  'local' : false,
                  'remoteName' : 'spi_wm:displayrate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'usage' : 'amount',
                  'name' : 'linecost',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'plannedLaborResource_linecost_spi_wmlinecost',
                  'id' : 'aw824b6d8e',
                  'local' : false,
                  'remoteName' : 'spi_wm:linecost',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'plannedLaborResource',
                  'name' : 'vendor',
                  'index' : false,
                  'artifactId' : 'plannedLaborResource_vendor_spivendoroslcshortTitle',
                  'maxSize' : 12,
                  'id' : 'aw773d2acb',
                  'local' : false,
                  'remoteName' : 'spi:vendor',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'contractnum',
                  'index' : false,
                  'artifactId' : 'plannedLaborResource_contractnum_spi_wmcontractnum',
                  'maxSize' : 8,
                  'id' : 'aw3ab8818e',
                  'local' : false,
                  'remoteName' : 'spi_wm:contractnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'crew',
                  'index' : false,
                  'artifactId' : 'plannedLaborResource_crew_spi_wmamcrew',
                  'maxSize' : 8,
                  'id' : 'awc566cfd0',
                  'local' : false,
                  'remoteName' : 'spi_wm:amcrew',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'crewworkgroup',
                  'index' : false,
                  'artifactId' : 'plannedLaborResource_crewworkgroup_spi_wmcrewworkgroup',
                  'maxSize' : 8,
                  'id' : 'aw48eb18b7',
                  'local' : false,
                  'remoteName' : 'spi_wm:crewworkgroup',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'crewtype',
                  'index' : false,
                  'artifactId' : 'plannedLaborResource_crewtype_spi_wmamcrewtype',
                  'maxSize' : 8,
                  'id' : 'aw850c9f56',
                  'local' : false,
                  'remoteName' : 'spi_wm:amcrewtype',
               });
            var resourcePromise008 = PersistenceManager.initCollection( resource008 );


            var resource009 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'plannedServiceResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'plannedServiceResource',
                  'id' : 'aw975fd033',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
                  'classInstance' : PlannedServiceObject,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi_wm:wpitemid,spi_wm:taskid,spi_wm:itemnum,spi_wm:description,spi_wm:description_longdescription,spi_wm:itemqty,spi_wm:unitcost,spi_wm:linecost,spi_wm:vendor,spi_wm:linetype').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'plannedServiceResource_wpitemid_spi_wpitemid',
                  'id' : 'awdfac99cd',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi_wm:wpitemid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'taskid',
                  'index' : false,
                  'artifactId' : 'plannedServiceResource_taskid_spi_wmtaskid',
                  'id' : 'awcfcf4e5',
                  'local' : false,
                  'remoteName' : 'spi_wm:taskid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'service',
                  'index' : false,
                  'artifactId' : 'plannedServiceResource_service_spi_wmitemnum',
                  'maxSize' : 30,
                  'id' : 'awdc70451c',
                  'local' : false,
                  'remoteName' : 'spi_wm:itemnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'servicedesc',
                  'index' : false,
                  'artifactId' : 'plannedServiceResource_servicedesc_spi_wmdescription',
                  'maxSize' : 100,
                  'id' : 'awa2fb436b',
                  'local' : false,
                  'remoteName' : 'spi_wm:description',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'longaln',
                  'name' : 'serviceld',
                  'index' : false,
                  'artifactId' : 'plannedServiceResource_serviceld_spi_wmdescription_longdescription',
                  'maxSize' : 32000,
                  'id' : 'awe3270957',
                  'local' : false,
                  'remoteName' : 'spi_wm:description_longdescription',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'quantity',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'plannedServiceResource_quantity_spi_wmitemqty',
                  'id' : 'aw483e8739',
                  'local' : false,
                  'remoteName' : 'spi_wm:itemqty',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'usage' : 'amount',
                  'name' : 'unitcost',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'plannedServiceResource_unitcost_spi_wmunitcost',
                  'id' : 'awfd4a556d',
                  'local' : false,
                  'remoteName' : 'spi_wm:unitcost',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'usage' : 'amount',
                  'name' : 'linecost',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'plannedServiceResource_linecost_spi_wmlinecost',
                  'id' : 'aw8bbc8ac',
                  'local' : false,
                  'remoteName' : 'spi_wm:linecost',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'vendor',
                  'index' : false,
                  'artifactId' : 'plannedServiceResource_vendor_spi_wmvendor',
                  'maxSize' : 12,
                  'id' : 'awf786060c',
                  'local' : false,
                  'remoteName' : 'spi_wm:vendor',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'linetype',
                  'index' : false,
                  'artifactId' : 'plannedServiceResource_linetype_spi_wmlinetype',
                  'maxSize' : 15,
                  'id' : 'awfe35af2e',
                  'local' : false,
                  'remoteName' : 'spi_wm:linetype',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'serviceanddescription',
                  'index' : false,
                  'artifactId' : 'plannedServiceResource_serviceanddescription_string',
                  'id' : 'awa143e470',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise009 = PersistenceManager.initCollection( resource009 );


            var resource010 = new ResourceMetadata({
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
               setSimpleFieldsSelectExpression('spi_wm:wpitemid,spi_wm:taskid,spi_wm:itemnum,spi_wm:description,spi_wm:description_longdescription,spi_wm:itemqty,spi_wm:unitcost,spi_wm:linecost,spi_wm:linetype,spi_wm:directreq,spi:location{dcterms:title,oslc:shortTitle}').
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
                  'dataType' : 'double',
                  'usage' : 'amount',
                  'name' : 'unitcost',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'plannedMaterialResource_unitcost_spi_wmunitcost',
                  'id' : 'awb36204e8',
                  'local' : false,
                  'remoteName' : 'spi_wm:unitcost',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'usage' : 'amount',
                  'name' : 'linecost',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'plannedMaterialResource_linecost_spi_wmlinecost',
                  'id' : 'aw46939929',
                  'local' : false,
                  'remoteName' : 'spi_wm:linecost',
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
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'plannedMaterialResource',
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
                  'dataType' : 'reference',
                  'referenceResource' : 'plannedMaterialResource',
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
            var resourcePromise010 = PersistenceManager.initCollection( resource010 );


            var resource011 = new ResourceMetadata({
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
               setSimpleFieldsSelectExpression('spi_wm:wpitemid,spi_wm:itemnum,spi_wm:taskid,spi_wm:description,spi_wm:description_longdescription,spi_wm:itemqty,spi_wm:hours,spi_wm:linecost,spi_wm:rate,spi:location{dcterms:title,oslc:shortTitle}').
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
                  'dataType' : 'double',
                  'usage' : 'amount',
                  'name' : 'linecost',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'plannedToolResource_linecost_spi_wmlinecost',
                  'id' : 'awdcb351dc',
                  'local' : false,
                  'remoteName' : 'spi_wm:linecost',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'usage' : 'amount',
                  'name' : 'rate',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'plannedToolResource_rate_spi_wmrate',
                  'id' : 'aw3c31ecf8',
                  'local' : false,
                  'remoteName' : 'spi_wm:rate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'plannedToolResource',
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
                  'dataType' : 'reference',
                  'referenceResource' : 'plannedToolResource',
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
            var resourcePromise011 = PersistenceManager.initCollection( resource011 );


            var resource012 = new ResourceMetadata({
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
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi_wm:taskid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'actualstaskid',
                  'index' : false,
                  'artifactId' : 'actualLaborResource_actualstaskid_spi_wmtaskid',
                  'id' : 'awd579cb87',
                  'local' : false,
                  'remoteName' : 'spi_wm:taskid',
               });
            var resourcePromise012 = PersistenceManager.initCollection( resource012 );


            var resource013 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'workCosts',
                  'resourceName' : 'workCosts',
                  'id' : 'awca3ab98f',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : '',
                  'name' : 'localestintlabhrs',
                  'index' : false,
                  'artifactId' : 'workCosts_localestintlabhrs',
                  'id' : 'aw35f6be3',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : '',
                  'name' : 'localestoutlabhrs',
                  'index' : false,
                  'artifactId' : 'workCosts_localestoutlabhrs',
                  'id' : 'aw51943f14',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : '',
                  'name' : 'localestlabhrs',
                  'index' : false,
                  'artifactId' : 'workCosts_localestlabhrs',
                  'id' : 'aw68eb530f',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : '',
                  'name' : 'localestintlabcost',
                  'index' : false,
                  'artifactId' : 'workCosts_localestintlabcost',
                  'id' : 'aw7f950123',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : '',
                  'name' : 'localestoutlabcost',
                  'index' : false,
                  'artifactId' : 'workCosts_localestoutlabcost',
                  'id' : 'aw5c1eadc8',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : '',
                  'name' : 'localestlabcost',
                  'index' : false,
                  'artifactId' : 'workCosts_localestlabcost',
                  'id' : 'awd6421b48',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : '',
                  'name' : 'localestmatcost',
                  'index' : false,
                  'artifactId' : 'workCosts_localestmatcost',
                  'id' : 'aw9f9572de',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : '',
                  'name' : 'localesttoolcost',
                  'index' : false,
                  'artifactId' : 'workCosts_localesttoolcost',
                  'id' : 'aw2cbf77b6',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : '',
                  'name' : 'localestservcost',
                  'index' : false,
                  'artifactId' : 'workCosts_localestservcost',
                  'id' : 'aw1712bf87',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : '',
                  'name' : 'localesttotalcost',
                  'index' : false,
                  'artifactId' : 'workCosts_localesttotalcost',
                  'id' : 'awecf8cc36',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise013 = PersistenceManager.initCollection( resource013 );


            var resource014 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'workOrderPOInfo',
                  'resourceName' : 'workOrderPOInfo',
                  'id' : 'awda026da4',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'isAttachment' : false,
               }).
               setLocal( true ).
               setSingleton( true ).
               setSimpleFieldsSelectExpression('').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : '',
                  'name' : 'pototal',
                  'index' : false,
                  'artifactId' : 'workOrderPOInfo_pototal',
                  'id' : 'awb2084744',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : '',
                  'name' : 'prtotal',
                  'index' : false,
                  'artifactId' : 'workOrderPOInfo_prtotal',
                  'id' : 'awd405601',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise014 = PersistenceManager.initCollection( resource014 );


            var resource015 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'workLogEntry',
                  'resourceName' : 'workLogEntry',
                  'id' : 'awfe5e1713',
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
                  'name' : 'person',
                  'index' : true,
                  'artifactId' : 'workLogEntry_person_string',
                  'id' : 'aw7013be7c',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'createdDate',
                  'index' : false,
                  'artifactId' : 'workLogEntry_createdDate_dateTime',
                  'id' : 'awefb10ffe',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise015 = PersistenceManager.initCollection( resource015 );


            var resource016 = new ResourceMetadata({
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
            var resourcePromise016 = PersistenceManager.initCollection( resource016 );


            var resource017 = new ResourceMetadata({
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
            var resourcePromise017 = PersistenceManager.initCollection( resource017 );


            var resource018 = new ResourceMetadata({
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
               }).
               setQueryBases([
                     {name:'getlocancestor', queryString:'\/oslc\/shapes\/oslcwodetail\/locancestor', queryLabel:'' }
               ]);
            var resourcePromise018 = PersistenceManager.initCollection( resource018 );


            var resource019 = new ResourceMetadata({
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
               }).
               setQueryBases([
                     {name:'getassetancestor', queryString:'\/oslc\/shapes\/oslcwodetail\/assetancestor', queryLabel:'' }
               ]);
            var resourcePromise019 = PersistenceManager.initCollection( resource019 );


            var resource020 = new ResourceMetadata({
                  'pageSize' : 1000,
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
               setSimpleFieldsSelectExpression('dcterms:identifier,spi:orgid,spi:siteid,oslc:shortTitle,dcterms:title,spi:status,spi:itemnum,spi:itemsetid,spi:parent,spi:description_longdescription,spi:location{dcterms:title,oslc:shortTitle}').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'assetid',
                  'index' : false,
                  'artifactId' : 'additionalasset_assetid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awc89d3252',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
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
                  'method' : 'locationChanged',
                  'referenceResource' : 'additionallocations',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'index' : true,
                  'maxSize' : 12,
                  'local' : false,
                  'name' : 'location',
                  'artifactId' : 'additionalasset_location_spilocationoslcshortTitle',
                  'id' : 'aw81c1bc95',
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
                  'formula' : '${itemnum} != null',
                  'index' : true,
                  'artifactId' : 'additionalasset_itemnumnotnull_boolean',
                  'id' : 'awfb346281',
                  'persistent' : true,
                  'local' : true,
               }).
               setQueryBases([
                     {name:'getadditionalasset', queryString:'\/oslc\/os\/oslcasset', queryLabel:'' }
               ]).
               setWhereClause('spi%3Astatus+in+%5B%24%7BdomainAssetstatus%5Bmaxvalue%3DOPERATING%5D.value%7D%5D');
            var resourcePromise020 = PersistenceManager.initCollection( resource020 );


            var resource021 = new ResourceMetadata({
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
               setSimpleFieldsSelectExpression('dcterms:identifier,spi:siteid,oslc:shortTitle,dcterms:title,spi:status').
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
                     {name:'getlocation', queryString:'\/oslc\/os\/oslclocations', queryLabel:'' }
               ]).
               setWhereClause('spi%3Astatus+in+%5B%24%7BdomainAssetstatus%5Bmaxvalue%3DOPERATING%5D.value%7D%5D');
            var resourcePromise021 = PersistenceManager.initCollection( resource021 );


            var resource022 = new ResourceMetadata({
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
                     {name:'getdomainAssetstatus', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22LOCASSETSTATUS%22+and+spi%3Asiteid%21%3D%22*%22+and+spi%3Aorgid%21%3D%22*%22');
            var resourcePromise022 = PersistenceManager.initCollection( resource022 );


            var resource023 = new ResourceMetadata({
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
                     {name:'getdomainwostatus', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22WOSTATUS%22');
            var resourcePromise023 = PersistenceManager.initCollection( resource023 );


            var resource024 = new ResourceMetadata({
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
                  'index' : false,
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
                  'index' : false,
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
                     {name:'getdomainlogtypes', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22LOGTYPE%22');
            var resourcePromise024 = PersistenceManager.initCollection( resource024 );


            var resource025 = new ResourceMetadata({
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
                     {name:'getdomainwoclass', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22WOCLASS%22');
            var resourcePromise025 = PersistenceManager.initCollection( resource025 );


            var resource026 = new ResourceMetadata({
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
               setSimpleFieldsSelectExpression('dcterms:identifier,spi:userid,spi:loginid,spi:storeroomsite,spi:type,spi:personid,spi:sysuser,spi:querywithsite,spi:defsite,spi:status,spi:emailpswd,spi:screenreader,spi:failedlogins,spi:inactivesites').
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
                  'dataType' : 'reference',
                  'name' : 'defsite',
                  'index' : false,
                  'artifactId' : 'userInfo_defsite_spidefsite',
                  'id' : 'awefb13c2c',
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
            var resourcePromise026 = PersistenceManager.initCollection( resource026 );


            var resource027 = new ResourceMetadata({
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
            var resourcePromise027 = PersistenceManager.initCollection( resource027 );


            var resource028 = new ResourceMetadata({
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
            var resourcePromise028 = PersistenceManager.initCollection( resource028 );


            var resource029 = new ResourceMetadata({
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
            var resourcePromise029 = PersistenceManager.initCollection( resource029 );


            var resource030 = new ResourceMetadata({
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
            var resourcePromise030 = PersistenceManager.initCollection( resource030 );


            var resource031 = new ResourceMetadata({
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
            var resourcePromise031 = PersistenceManager.initCollection( resource031 );


            var resource032 = new ResourceMetadata({
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
            var resourcePromise032 = PersistenceManager.initCollection( resource032 );


            var resource033 = new ResourceMetadata({
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
            var resourcePromise033 = PersistenceManager.initCollection( resource033 );


            var resource034 = new ResourceMetadata({
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
            var resourcePromise034 = PersistenceManager.initCollection( resource034 );


            var resource035 = new ResourceMetadata({
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
            var resourcePromise035 = PersistenceManager.initCollection( resource035 );


            var resource036 = new ResourceMetadata({
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
            var resourcePromise036 = PersistenceManager.initCollection( resource036 );


            var resource037 = new ResourceMetadata({
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
            var resourcePromise037 = PersistenceManager.initCollection( resource037 );


            var resource038 = new ResourceMetadata({
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
            var resourcePromise038 = PersistenceManager.initCollection( resource038 );


            var resource039 = new ResourceMetadata({
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
            var resourcePromise039 = PersistenceManager.initCollection( resource039 );


            var resource040 = new ResourceMetadata({
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
            var resourcePromise040 = PersistenceManager.initCollection( resource040 );


            var resource041 = new ResourceMetadata({
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
            var resourcePromise041 = PersistenceManager.initCollection( resource041 );


            var resource042 = new ResourceMetadata({
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
            var resourcePromise042 = PersistenceManager.initCollection( resource042 );


            var resource043 = new ResourceMetadata({
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
            var resourcePromise043 = PersistenceManager.initCollection( resource043 );


            var resource044 = new ResourceMetadata({
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
            var resourcePromise044 = PersistenceManager.initCollection( resource044 );


            var resource045 = new ResourceMetadata({
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
            var resourcePromise045 = PersistenceManager.initCollection( resource045 );


            var resource046 = new ResourceMetadata({
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
            var resourcePromise046 = PersistenceManager.initCollection( resource046 );


            var resource047 = new ResourceMetadata({
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
            var resourcePromise047 = PersistenceManager.initCollection( resource047 );


            var resource048 = new ResourceMetadata({
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
            var resourcePromise048 = PersistenceManager.initCollection( resource048 );


            var resource049 = new ResourceMetadata({
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
            var resourcePromise049 = PersistenceManager.initCollection( resource049 );


            var resource050 = new ResourceMetadata({
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
            var resourcePromise050 = PersistenceManager.initCollection( resource050 );


            var resource051 = new ResourceMetadata({
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
            var resourcePromise051 = PersistenceManager.initCollection( resource051 );


            var resource052 = new ResourceMetadata({
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
            var resourcePromise052 = PersistenceManager.initCollection( resource052 );


            all([resourcePromise001, resourcePromise002, resourcePromise003, resourcePromise004, resourcePromise005, resourcePromise006, resourcePromise007, resourcePromise008, resourcePromise009, resourcePromise010, resourcePromise011, resourcePromise012, resourcePromise013, resourcePromise014, resourcePromise015, resourcePromise016, resourcePromise017, resourcePromise018, resourcePromise019, resourcePromise020, resourcePromise021, resourcePromise022, resourcePromise023, resourcePromise024, resourcePromise025, resourcePromise026, resourcePromise027, resourcePromise028, resourcePromise029, resourcePromise030, resourcePromise031, resourcePromise032, resourcePromise033, resourcePromise034, resourcePromise035, resourcePromise036, resourcePromise037, resourcePromise038, resourcePromise039, resourcePromise040, resourcePromise041, resourcePromise042, resourcePromise043, resourcePromise044, resourcePromise045, resourcePromise046, resourcePromise047, resourcePromise048, resourcePromise049, resourcePromise050, resourcePromise051, resourcePromise052]).then(function(results) {
                 promise.resolve();
            }).
            otherwise(function(error) {
                 promise.reject(error);
            });
         }
      });
});
