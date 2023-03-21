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
// Build: 2022-05-26 15:48:12
//----------------------------------------------------------------//
define(   "generated/application/data/ApplicationStoresBuilder", 
      [
         "dojo/_base/declare", 
         "dojo/promise/all", 
         "platform/boot/data/_StoresBuilderBase", 
         "platform/store/ResourceMetadata", 
         "platform/store/PersistenceManager", 
         "application/business/AssetObject", 
         "application/business/AssetStatusObject", 
         "application/business/MaxDomainObject", 
         "application/business/AttachmentsObject", 
         "application/business/ClassStructureObject"
      ],

function(declare, all, StoresBuilderBase, ResourceMetadata, PersistenceManager, AssetObject, AssetStatusObject, MaxDomainObject, AttachmentsObject, ClassStructureObject) {
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
                  'defaultOrderBy' : 'assetnum asc',
                  'pageSize' : 40,
                  'resourceName' : 'asset',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'hasManagedQuery' : 'true',
                  'artifactId' : 'assetResource',
                  'id' : 'aw5241366b',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
                  'classInstance' : AssetObject,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,spi:assetid,spi:orgid,spi:siteid,oslc:shortTitle,dcterms:title,spi:status,spi:rolltoallchildren,spi:removefromactiveroutes,spi:removefromactivesp,spi:changepmstatus,spi:assettype,spi:itemnum,spi:itemtype,spi:itemsetid,spi:binnum,spi:calnum,spi:shiftnum,spi:serialnum,spi:isrunning,spi:totdowntime,spi:priority,spi:description_longdescription,spi:classstructureid,spi:islinear,spi:failureCode{dcterms:title,oslc:shortTitle},spi:updownstatus{spi:changedate},spi:parent{spi:description_longdescription,dcterms:title,oslc:shortTitle},spi:location{spi:description_longdescription,dcterms:title,oslc:shortTitle}').
               setSupportiveFieldsSelectExpression('spi:downtimereport{spi:statuschangecode,spi:statuschangedate,spi:code,spi:startdate,spi:enddate,spi:downtime,spi:isdowntimereport,spi:startdatesource},spi:assetmeter{spi:linearassetmeterid,dcterms:identifier,spi:active,spi:dorollover,spi:rollover,spi:isdelta,spi:inspector,spi:newreading,spi:newreadingdate,spi:readingtype,spi:lastreading,spi:lastreadingdate,spi:remarks,spi:meter{spi:domainid,dcterms:title,spi:metertype,oslc:shortTitle}},spi:assetattachments{oslc_cm:attachmentSize,dcterms:title,spi:fileName,dcterms:description,dcterms:created,spi:urlType,spi:docType,spi:printthrulink,spi:contentLocation,spi:anywhererefid,spi:createby},spi:assetspec{spi:assetspecid,spi:classstructureid,spi:mandatory,spi:orgid,spi:changedate,spi:displaysequence,spi:changeby,spi:numvalue,spi:alnvalue,spi:tablevalue,spi:section,spi:linearassetspecid,spi:measureunitid,spi:anywhererefid,spi_wm:assetattr{spi_wm:assetattrid,spi_wm:domainid,spi_wm:description,spi_wm:datatype}},spi:assetclassspec{spi:domainid,spi_wm:assetattr{spi_wm:assetattrid}},spi:assetmovedflt{spi:tloamdfltnewglaccount,spi:pluscdfltnewlploc,spi:orgid,spi:dfltnewsite,spi:dfltnewparentchkbox,spi:dfltnewparent,spi:dfltneworgid,spi:dfltnewlocationchkbox,spi:dfltnewlocation,spi:dfltnewbinnumchkbox,spi:dfltnewbinnum,spi:dfltnewassetnum}').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'assetuid',
                  'index' : false,
                  'artifactId' : 'asset_assetuid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw269abbd5',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'assetid',
                  'index' : false,
                  'artifactId' : 'asset_assetid_spiassetid',
                  'id' : 'awb5739ac0',
                  'local' : false,
                  'remoteName' : 'spi:assetid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : true,
                  'artifactId' : 'asset_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw61f8901c',
                  'local' : false,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : true,
                  'artifactId' : 'asset_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'awdc4a39bc',
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
                  'artifactId' : 'asset_assetnum_oslcshortTitle',
                  'maxSize' : 25,
                  'id' : 'awecfd10e6',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : true,
                  'artifactId' : 'asset_description_dctermstitle',
                  'maxSize' : 100,
                  'id' : 'awa242fe58',
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
                  'artifactId' : 'asset_location_spilocationoslcshortTitle',
                  'maxSize' : 12,
                  'id' : 'awce8a7257',
                  'local' : false,
                  'remoteName' : 'spi:location',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'dcterms:title',
                  'referenceResource' : 'additionallocations',
                  'dataType' : 'reference',
                  'name' : 'maxlocationdesc',
                  'index' : true,
                  'artifactId' : 'asset_locationdesc_spilocationdctermstitle',
                  'maxSize' : 100,
                  'id' : 'awbcbc8ece',
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
                  'artifactId' : 'asset_locationld_spilocationspidescription_longdescription',
                  'maxSize' : 32000,
                  'id' : 'aw3da9d0b',
                  'local' : false,
                  'remoteName' : 'spi:location',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'referenceResource' : 'additionalasset',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'name' : 'parent',
                  'index' : true,
                  'artifactId' : 'asset_parent_spiparentshorttitle',
                  'maxSize' : 25,
                  'id' : 'aw500372fb',
                  'local' : false,
                  'remoteName' : 'spi:parent',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'dcterms:title',
                  'referenceResource' : 'additionalasset',
                  'dataType' : 'reference',
                  'name' : 'maxparentdesc',
                  'index' : true,
                  'artifactId' : 'asset_parentdesc_spiparenttitle',
                  'maxSize' : 100,
                  'id' : 'awa3744efa',
                  'local' : false,
                  'remoteName' : 'spi:parent',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi:description_longdescription',
                  'referenceResource' : 'additionalasset',
                  'dataType' : 'reference',
                  'usage' : 'longaln',
                  'name' : 'parentld',
                  'index' : false,
                  'artifactId' : 'asset_assetld_spiparentspidescription_longdescription',
                  'maxSize' : 32000,
                  'id' : 'awc9335747',
                  'local' : false,
                  'remoteName' : 'spi:parent',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'status',
                  'index' : true,
                  'artifactId' : 'asset_status_spistatus',
                  'maxSize' : 20,
                  'id' : 'awe68e6dd7',
                  'local' : false,
                  'remoteName' : 'spi:status',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'stausdesc',
                  'index' : false,
                  'artifactId' : 'asset_stausdesc_string',
                  'id' : 'awf000a31e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'boolean',
                  'name' : 'rolltoallchildren',
                  'index' : false,
                  'artifactId' : 'asset_status_spirolltoallchildren',
                  'id' : 'awe08a7284',
                  'local' : false,
                  'remoteName' : 'spi:rolltoallchildren',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'boolean',
                  'name' : 'removefromactiveroutes',
                  'index' : false,
                  'artifactId' : 'asset_status_spiremovefromactiveroutes',
                  'id' : 'aw9cadf466',
                  'local' : false,
                  'remoteName' : 'spi:removefromactiveroutes',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'boolean',
                  'name' : 'removefromactivesp',
                  'index' : false,
                  'artifactId' : 'asset_status_spiremovefromactivesp',
                  'id' : 'aw49f3487a',
                  'local' : false,
                  'remoteName' : 'spi:removefromactivesp',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'boolean',
                  'name' : 'changepmstatus',
                  'index' : false,
                  'artifactId' : 'asset_status_spichangepmstatus',
                  'id' : 'aw749167b8',
                  'local' : false,
                  'remoteName' : 'spi:changepmstatus',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'assettype',
                  'index' : true,
                  'artifactId' : 'asset_assettype_spiassettype',
                  'maxSize' : 15,
                  'id' : 'awda038f15',
                  'local' : false,
                  'remoteName' : 'spi:assettype',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'itemnum',
                  'index' : true,
                  'artifactId' : 'asset_itemnum_spiitemnum',
                  'maxSize' : 30,
                  'id' : 'aw75fae770',
                  'local' : false,
                  'remoteName' : 'spi:itemnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'itemtype',
                  'index' : true,
                  'artifactId' : 'asset_itemtype_spiitemtype',
                  'maxSize' : 15,
                  'id' : 'aw887512cf',
                  'local' : false,
                  'remoteName' : 'spi:itemtype',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'itemsetid',
                  'index' : true,
                  'artifactId' : 'asset_itemsetid_spiitemsetid',
                  'maxSize' : 8,
                  'id' : 'aw577511c2',
                  'local' : false,
                  'remoteName' : 'spi:itemsetid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'binnum',
                  'index' : true,
                  'artifactId' : 'asset_binnum_spibinnum',
                  'maxSize' : 8,
                  'id' : 'awd1c63dc2',
                  'local' : false,
                  'remoteName' : 'spi:binnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'calnum',
                  'index' : false,
                  'artifactId' : 'asset_spicalnunm_calnum',
                  'maxSize' : 8,
                  'id' : 'aw2a5d1531',
                  'local' : false,
                  'remoteName' : 'spi:calnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'shiftnum',
                  'index' : false,
                  'artifactId' : 'asset_spishiftnum_shiftnum',
                  'maxSize' : 8,
                  'id' : 'awa15496d2',
                  'local' : false,
                  'remoteName' : 'spi:shiftnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'serialnum',
                  'index' : false,
                  'artifactId' : 'asset_spiserialnum_serialnum',
                  'maxSize' : 64,
                  'id' : 'aw47b8b0d0',
                  'local' : false,
                  'remoteName' : 'spi:serialnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'asset',
                  'name' : 'failurecode',
                  'index' : false,
                  'artifactId' : 'asset_failurecode_spifailureCodeoslcshortTitle',
                  'maxSize' : 8,
                  'id' : 'aw804d51df',
                  'local' : false,
                  'remoteName' : 'spi:failureCode',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'dcterms:title',
                  'dataType' : 'reference',
                  'referenceResource' : 'asset',
                  'name' : 'failurecodedesc',
                  'index' : false,
                  'artifactId' : 'asset_failurecodedesc_spifailureCodedctermstitle',
                  'maxSize' : 100,
                  'id' : 'aw5d5e4869',
                  'local' : false,
                  'remoteName' : 'spi:failureCode',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'isrunning',
                  'index' : false,
                  'artifactId' : 'asset_isrunning_spiisrunning',
                  'id' : 'aw8f82658f',
                  'local' : false,
                  'remoteName' : 'spi:isrunning',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi:changedate',
                  'dataType' : 'inline',
                  'referenceResource' : 'asset',
                  'name' : 'updownstatusdate',
                  'index' : false,
                  'artifactId' : 'additionalasset_updownstatusdate_spiupdownstatusspichangedate',
                  'id' : 'awa704f28e',
                  'local' : false,
                  'remoteName' : 'spi:updownstatus',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'double',
                  'usage' : 'duration',
                  'name' : 'totdowntime',
                  'index' : false,
                  'scale' : 0,
                  'artifactId' : 'asset_totdowntime_spitotdowntime',
                  'id' : 'awd8b66860',
                  'local' : false,
                  'remoteName' : 'spi:totdowntime',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'downTimeResource',
                  'name' : 'downtimereport',
                  'index' : false,
                  'artifactId' : 'asset_assetmeterlist_spi_downtime',
                  'id' : 'aw667c1245',
                  'describedByResource' : 'downTimeResource',
                  'local' : false,
                  'remoteName' : 'spi:downtimereport',
                  'selectExpression' : 'spi:downtimereport{spi:statuschangecode,spi:statuschangedate,spi:code,spi:startdate,spi:enddate,spi:downtime,spi:isdowntimereport,spi:startdatesource}',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'name' : 'priority',
                  'index' : false,
                  'artifactId' : 'asset_priority_spipriority',
                  'id' : 'awa1f23997',
                  'local' : false,
                  'remoteName' : 'spi:priority',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'longaln',
                  'name' : 'assetlongdesc',
                  'index' : false,
                  'artifactId' : 'asset_assetlongdesc_spidescription_longdescription',
                  'maxSize' : 32000,
                  'id' : 'aw3d5e96b8',
                  'local' : false,
                  'remoteName' : 'spi:description_longdescription',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'admAssetMeters',
                  'name' : 'assetmeterlist',
                  'index' : false,
                  'artifactId' : 'asset_assetmeterlist_spi_assetmeter',
                  'id' : 'aw9eaf5630',
                  'describedByResource' : 'admAssetMeters',
                  'local' : false,
                  'remoteName' : 'spi:assetmeter',
                  'selectExpression' : 'spi:assetmeter{spi:linearassetmeterid,dcterms:identifier,spi:active,spi:dorollover,spi:rollover,spi:isdelta,spi:inspector,spi:newreading,spi:newreadingdate,spi:readingtype,spi:lastreading,spi:lastreadingdate,spi:remarks,spi:meter{spi:domainid,dcterms:title,spi:metertype,oslc:shortTitle}}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'attachments',
                  'name' : 'attachments',
                  'index' : false,
                  'artifactId' : 'asset_attachments_spiassetattachments',
                  'id' : 'awc6348c07',
                  'describedByResource' : 'attachments',
                  'local' : false,
                  'remoteName' : 'spi:assetattachments',
                  'selectExpression' : 'spi:assetattachments{oslc_cm:attachmentSize,dcterms:title,spi:fileName,dcterms:description,dcterms:created,spi:urlType,spi:docType,spi:printthrulink,spi:contentLocation,spi:anywhererefid,spi:createby}',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'classstructureid',
                  'index' : false,
                  'artifactId' : 'asset_classstructureid_spiclassstructureid',
                  'maxSize' : 20,
                  'id' : 'aw3be6cb9',
                  'local' : false,
                  'remoteName' : 'spi:classstructureid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'islinear',
                  'index' : false,
                  'artifactId' : 'asset_islinear_spiislinear',
                  'id' : 'aw8530eb99',
                  'local' : false,
                  'remoteName' : 'spi:islinear',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'assetSpecResource',
                  'name' : 'assetSpec',
                  'index' : false,
                  'artifactId' : 'asset_assetSpec_spi_assetspec',
                  'id' : 'aw5fd1792a',
                  'describedByResource' : 'assetSpecResource',
                  'local' : false,
                  'remoteName' : 'spi:assetspec',
                  'selectExpression' : 'spi:assetspec{spi:assetspecid,spi:classstructureid,spi:mandatory,spi:orgid,spi:changedate,spi:displaysequence,spi:changeby,spi:numvalue,spi:alnvalue,spi:tablevalue,spi:section,spi:linearassetspecid,spi:measureunitid,spi:anywhererefid,spi_wm:assetattr{spi_wm:assetattrid,spi_wm:domainid,spi_wm:description,spi_wm:datatype}}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'assetClassSpec',
                  'name' : 'assetClassSpec',
                  'index' : false,
                  'artifactId' : 'asset_assetClassSpec_spi_assetClassSpec',
                  'id' : 'awc7bbbbd1',
                  'describedByResource' : 'assetClassSpec',
                  'local' : false,
                  'remoteName' : 'spi:assetclassspec',
                  'selectExpression' : 'spi:assetclassspec{spi:domainid,spi_wm:assetattr{spi_wm:assetattrid}}',
               }).
               addField({
                  'multiplicity' : 'zero-or-many',
                  'dataType' : 'inline',
                  'referenceResource' : 'assetMovedFltResource',
                  'name' : 'assetmovedflt',
                  'index' : false,
                  'artifactId' : 'asset_spiassetmovedflt_assetmovedflt',
                  'id' : 'awc23bc0aa',
                  'describedByResource' : 'assetMovedFltResource',
                  'local' : false,
                  'remoteName' : 'spi:assetmovedflt',
                  'selectExpression' : 'spi:assetmovedflt{spi:tloamdfltnewglaccount,spi:pluscdfltnewlploc,spi:orgid,spi:dfltnewsite,spi:dfltnewparentchkbox,spi:dfltnewparent,spi:dfltneworgid,spi:dfltnewlocationchkbox,spi:dfltnewlocation,spi:dfltnewbinnumchkbox,spi:dfltnewbinnum,spi:dfltnewassetnum}',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'locationdesc',
                  'index' : false,
                  'artifactId' : 'asset_locationdesc_string',
                  'id' : 'aw83c901b9',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'parentdesc',
                  'index' : false,
                  'artifactId' : 'asset_parentdesc_string',
                  'id' : 'awa400bd36',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'displayisrunning',
                  'index' : false,
                  'artifactId' : 'asset_displayisrunning_spiisrunning',
                  'id' : 'aw122271a9',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'displayupdownstatusdate',
                  'index' : false,
                  'artifactId' : 'additionalasset_displayupdownstatusdate_spiupdownstatusspichangedate',
                  'id' : 'aw4ba32885',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'duration',
                  'name' : 'displaytotaldowntime',
                  'index' : false,
                  'artifactId' : 'asset_displaytotaldowntime_spitotdowntime',
                  'id' : 'awd67b93e7',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'displaydowntimecode',
                  'index' : false,
                  'artifactId' : 'asset_displaydowntimecode_downtimecode',
                  'id' : 'aw6f07f848',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'itemnumnotnull',
                  'formula' : '${itemnum} ? true : false',
                  'index' : true,
                  'artifactId' : 'asset_itemnumnotnull_boolean',
                  'id' : 'awa8235b2b',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'parentanddescription',
                  'index' : false,
                  'artifactId' : 'asset_parentanddescription_string',
                  'id' : 'aw1c83cd77',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'locationanddescription',
                  'index' : false,
                  'artifactId' : 'asset_locationanddescription_string',
                  'id' : 'awca2ef77c',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'statusdesc',
                  'index' : false,
                  'artifactId' : 'asset_statusdesc_string',
                  'id' : 'awe210dde0',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'descriptionModified',
                  'index' : false,
                  'artifactId' : 'asset_descriptionModified_boolean',
                  'id' : 'aweafb97e9',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'assetdesc',
                  'index' : false,
                  'artifactId' : 'asset_assetdesc_string',
                  'id' : 'aw4dc5006d',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'attachmentssize',
                  'index' : false,
                  'artifactId' : 'asset_attachmentssize_string',
                  'id' : 'aw7b430b3a',
                  'persistent' : false,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'assetspecsize',
                  'index' : false,
                  'artifactId' : 'asset_specificationssize_string',
                  'id' : 'awa81090fe',
                  'persistent' : false,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'classification',
                  'index' : false,
                  'artifactId' : 'asset_classification_string',
                  'id' : 'awa3074071',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'classificationdesc',
                  'index' : false,
                  'artifactId' : 'asset_classificationdesc_string',
                  'id' : 'aw8a6bd62e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'classificationpath',
                  'index' : false,
                  'artifactId' : 'asset_classificationpath_string',
                  'id' : 'awa4a4b082',
                  'persistent' : true,
                  'local' : true,
               }).
               setCreationFactories([
                     {name:'createMyAsset', creationString:'\/oslc\/os\/oslcasset' }
               ]).
               setQueryBases([
                     {name:'searchAllAssets', queryString:'\/oslc\/os\/oslcasset?savedQuery=getAllAssets', defaultForSearch: true, queryLabel:'' },
                     {name:'getMyAssets', queryString:'\/oslc\/os\/oslcasset?savedQuery=getMyAssets', queryLabel:'' }
               ]);
            var resourcePromise004 = PersistenceManager.initCollection( resource004 );


            var resource005 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'admAssetMeters',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'AssetDataManager_assetMeters',
                  'id' : 'aw7c52c57e',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:linearassetmeterid,dcterms:identifier,spi:active,spi:dorollover,spi:rollover,spi:isdelta,spi:inspector,spi:newreading,spi:newreadingdate,spi:readingtype,spi:lastreading,spi:lastreadingdate,spi:remarks,spi:meter{spi:domainid,dcterms:title,spi:metertype,oslc:shortTitle}').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'linearassetmeterid',
                  'index' : true,
                  'artifactId' : 'AssetDataManager_assetMeters_active_spiactive22',
                  'id' : 'aw83569609',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:linearassetmeterid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : true,
                  'artifactId' : 'AssetDataManager_assetMeters_identifier_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw89f65835',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'active',
                  'index' : true,
                  'artifactId' : 'AssetDataManager_assetMeters_active_spiactive',
                  'id' : 'aw131d9f0f',
                  'local' : false,
                  'remoteName' : 'spi:active',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'dorollover',
                  'index' : false,
                  'artifactId' : 'AssetDataManager_assetMeters_dorollover_spidorollover',
                  'id' : 'awfd4de1c4',
                  'local' : false,
                  'remoteName' : 'spi:dorollover',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'rollover',
                  'index' : false,
                  'scale' : 2,
                  'artifactId' : 'AssetDataManager_assetMeters_rollover_spirollover',
                  'id' : 'awb890cc73',
                  'local' : false,
                  'remoteName' : 'spi:rollover',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'isdelta',
                  'index' : false,
                  'artifactId' : 'AssetDataManager_assetMeters_isdelta_spiisdelta',
                  'id' : 'awec668348',
                  'local' : false,
                  'remoteName' : 'spi:isdelta',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'inspector',
                  'index' : false,
                  'artifactId' : 'AssetDataManager_assetMeters_inspector_spiinspector',
                  'maxSize' : 30,
                  'id' : 'aw29546df3',
                  'local' : false,
                  'remoteName' : 'spi:inspector',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'newreading',
                  'index' : false,
                  'artifactId' : 'AssetDataManager_assetMeters_newreading_spinewreading',
                  'maxSize' : 18,
                  'id' : 'aw206d6699',
                  'local' : false,
                  'remoteName' : 'spi:newreading',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'newreadingdate',
                  'index' : false,
                  'artifactId' : 'AssetDataManager_assetMeters_newreadingdate_spinewreadingdate',
                  'id' : 'aw959191a',
                  'local' : false,
                  'remoteName' : 'spi:newreadingdate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'oslc:shortTitle',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'admAssetMeters',
                  'name' : 'metername',
                  'index' : true,
                  'artifactId' : 'AssetDataManager_assetMeters_metername_spimeteroslcshortTitle',
                  'maxSize' : 10,
                  'id' : 'aw4b926d5d',
                  'local' : false,
                  'remoteName' : 'spi:meter',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'dcterms:title',
                  'dataType' : 'reference',
                  'referenceResource' : 'admAssetMeters',
                  'name' : 'meterdesc',
                  'index' : false,
                  'artifactId' : 'AssetDataManager_assetMeters_meterdesc_spimeterdctermstitle',
                  'maxSize' : 100,
                  'id' : 'aweef2b753',
                  'local' : false,
                  'remoteName' : 'spi:meter',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi:metertype',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'admAssetMeters',
                  'name' : 'metertype',
                  'index' : false,
                  'artifactId' : 'AssetDataManager_assetMeters_metertype_spimeterspimetertype',
                  'maxSize' : 25,
                  'id' : 'awc2a694e0',
                  'local' : false,
                  'remoteName' : 'spi:meter',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi:domainid',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'admAssetMeters',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'AssetDataManager_assetMeters_domainid_spimeterspidomainid',
                  'maxSize' : 18,
                  'id' : 'aw131cd40',
                  'local' : false,
                  'remoteName' : 'spi:meter',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'readingtype',
                  'index' : false,
                  'artifactId' : 'AssetDataManager_assetMeters_readingtype_spireadingtype',
                  'maxSize' : 10,
                  'id' : 'aw71cd61d2',
                  'local' : false,
                  'remoteName' : 'spi:readingtype',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'lastreading',
                  'index' : false,
                  'artifactId' : 'AssetDataManager_assetMeters_lastreading_spilastreading',
                  'maxSize' : 18,
                  'id' : 'awf0832d9',
                  'local' : false,
                  'remoteName' : 'spi:lastreading',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'lastreadingdate',
                  'index' : false,
                  'artifactId' : 'AssetDataManager_assetMeters_lastreadingdate_spilastreadingdate',
                  'id' : 'awa9563f70',
                  'local' : false,
                  'remoteName' : 'spi:lastreadingdate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'remarks',
                  'index' : false,
                  'artifactId' : 'AssetDataManager_assetMeters_remarks_spiremarks',
                  'maxSize' : 50,
                  'id' : 'aw1c72adae',
                  'local' : false,
                  'remoteName' : 'spi:remarks',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'localLastReading',
                  'formula' : '${lastreading}',
                  'index' : false,
                  'artifactId' : 'AssetDataManager_assetMeters_localLastReading_string',
                  'id' : 'aw6c9acb2e',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'localLastReadingDate',
                  'formula' : '${lastreadingdate}',
                  'index' : false,
                  'artifactId' : 'AssetDataManager_assetMeters_localLastReadingDate_dateTime',
                  'id' : 'aw77b61007',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'newreadinglookup',
                  'index' : false,
                  'artifactId' : 'AssetDataManager_newreadinglookup_string',
                  'id' : 'aw6d7509e5',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise005 = PersistenceManager.initCollection( resource005 );


            var resource006 = new ResourceMetadata({
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
                  'referenceResource' : 'asset',
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
            var resourcePromise006 = PersistenceManager.initCollection( resource006 );


            var resource007 = new ResourceMetadata({
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
            var resourcePromise007 = PersistenceManager.initCollection( resource007 );


            var resource008 = new ResourceMetadata({
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
                  'key' : '1',
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
            var resourcePromise008 = PersistenceManager.initCollection( resource008 );


            var resource009 = new ResourceMetadata({
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
            var resourcePromise009 = PersistenceManager.initCollection( resource009 );


            var resource010 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'downTimeResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'downTimeResource',
                  'id' : 'aw6a06088c',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:statuschangecode,spi:statuschangedate,spi:code,spi:startdate,spi:enddate,spi:downtime,spi:isdowntimereport,spi:startdatesource').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'statuschangecode',
                  'index' : false,
                  'artifactId' : 'downTimeResource_statuschangecode',
                  'maxSize' : 12,
                  'id' : 'awa704a221',
                  'local' : false,
                  'remoteName' : 'spi:statuschangecode',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'statuschangedate',
                  'index' : false,
                  'artifactId' : 'downTimeResource_statuschangedate',
                  'id' : 'aw7a8fa5c3',
                  'local' : false,
                  'remoteName' : 'spi:statuschangedate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'reportdowntimecode',
                  'index' : false,
                  'artifactId' : 'downTimeResource_code',
                  'maxSize' : 12,
                  'id' : 'awdca60',
                  'local' : false,
                  'remoteName' : 'spi:code',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'startdate',
                  'index' : false,
                  'artifactId' : 'downTimeResource_startdate',
                  'id' : 'aw84ac180',
                  'local' : false,
                  'remoteName' : 'spi:startdate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'datetime',
                  'name' : 'enddate',
                  'index' : false,
                  'artifactId' : 'downTimeResource_enddate',
                  'id' : 'awd79c5883',
                  'local' : false,
                  'remoteName' : 'spi:enddate',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'usage' : 'duration',
                  'name' : 'downtime',
                  'index' : false,
                  'scale' : 0,
                  'artifactId' : 'downTimeResource_downtime',
                  'id' : 'aw85734aa0',
                  'local' : false,
                  'remoteName' : 'spi:downtime',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'isdowntimereport',
                  'index' : false,
                  'artifactId' : 'downTimeResource_isdowntimereport',
                  'maxSize' : 2,
                  'id' : 'aw909b78d5',
                  'local' : false,
                  'remoteName' : 'spi:isdowntimereport',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'startdatesource',
                  'index' : false,
                  'artifactId' : 'downTimeResource_startdatesource',
                  'maxSize' : 14,
                  'id' : 'aw6ff54321',
                  'local' : false,
                  'remoteName' : 'spi:startdatesource',
               });
            var resourcePromise010 = PersistenceManager.initCollection( resource010 );


            var resource011 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : true,
                  'pageSize' : 1000,
                  'artifactId' : 'tempReportDowntimeResource',
                  'resourceName' : 'tempReportDowntimeResource',
                  'id' : 'awc3e816d0',
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
                  'name' : 'ischangestatus',
                  'index' : false,
                  'artifactId' : 'tempReportDowntimeResource_ischangestatus_boolean',
                  'id' : 'awd0a46474',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'downtimecode',
                  'index' : false,
                  'artifactId' : 'tempReportDowntimeResource_downtimecode_string',
                  'id' : 'aw6f0be957',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'startdate',
                  'index' : false,
                  'artifactId' : 'tempReportDowntimeResource_startdate_datetime',
                  'id' : 'awf6bb19e5',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'dateTime',
                  'name' : 'enddate',
                  'index' : false,
                  'artifactId' : 'tempReportDowntimeResource_enddate_datetime',
                  'id' : 'aw5b5afe36',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise011 = PersistenceManager.initCollection( resource011 );


            var resource012 = new ResourceMetadata({
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
               setSimpleFieldsSelectExpression('dcterms:identifier,spi:assetid,spi:orgid,spi:siteid,oslc:shortTitle,dcterms:title,spi:itemnum,spi:itemtype,spi:itemsetid,spi:description_longdescription,spi:location{spi:description_longdescription,dcterms:title,oslc:shortTitle}').
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
                  'displayValueRemoteName' : 'spi:description_longdescription',
                  'referenceResource' : 'additionallocations',
                  'dataType' : 'reference',
                  'usage' : 'longaln',
                  'name' : 'locationld',
                  'index' : true,
                  'artifactId' : 'additionalasset_locationld_spilocationld',
                  'maxSize' : 32000,
                  'id' : 'awe4732def',
                  'local' : false,
                  'remoteName' : 'spi:location',
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
               setQueryBases([
                     {name:'getadditionalasset', queryString:'\/oslc\/os\/oslcasset', queryLabel:'' }
               ]).
               setWhereClause('spi%3Asiteid%3D%24%7Bdefsite%7D');
            var resourcePromise012 = PersistenceManager.initCollection( resource012 );


            var resource013 = new ResourceMetadata({
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
               setSimpleFieldsSelectExpression('dcterms:identifier,spi:siteid,oslc:shortTitle,dcterms:title,spi:status,spi:description_longdescription,spi:locoper{spi:failureCode{dcterms:title,oslc:shortTitle}}').
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
                  'local' : false,
                  'remoteName' : 'spi:status',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'longaln',
                  'name' : 'locationld',
                  'index' : false,
                  'artifactId' : 'additionallocations_locationld_spilocationld',
                  'maxSize' : 32000,
                  'id' : 'aw96fb4f6d',
                  'local' : false,
                  'remoteName' : 'spi:description_longdescription',
               }).
               setQueryBases([
                     {name:'getlocation', queryString:'\/oslc\/os\/oslcoperloc', queryLabel:'' }
               ]);
            var resourcePromise013 = PersistenceManager.initCollection( resource013 );


            var resource014 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'domainAssetType',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'domainAssetType',
                  'additionalData' : true,
                  'id' : 'awb432aaed',
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
                  'artifactId' : 'domainAssetType_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'awfbad598e',
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
                  'artifactId' : 'domainAssetType_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'aw7d853165',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'domainAssetType_maxvalue_spimaxvalue',
                  'maxSize' : 50,
                  'id' : 'aw5ace3af1',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:maxvalue',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'domainAssetType_value_spivalue',
                  'maxSize' : 50,
                  'id' : 'awb2414622',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'domainAssetType_description_dctermstitle',
                  'maxSize' : 256,
                  'id' : 'aw2506c74f',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaults',
                  'index' : false,
                  'artifactId' : 'domainAssetType_defaults_spidefaults',
                  'id' : 'awc204c8b1',
                  'local' : false,
                  'remoteName' : 'spi:defaults',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'domainAssetType_domainid_oslcshortTitle',
                  'maxSize' : 18,
                  'id' : 'awdac0c0b3',
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
                  'artifactId' : 'domainAssetType_synonymdomainid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw9299a268',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getassettype', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22ASSETTYPE%22');
            var resourcePromise014 = PersistenceManager.initCollection( resource014 );


            var resource015 = new ResourceMetadata({
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
               ]).
               setWhereClause('spi%3Arotating%3D1+and+spi%3Aitemtype%3D%22ITEM%22');
            var resourcePromise015 = PersistenceManager.initCollection( resource015 );


            var resource016 = new ResourceMetadata({
                  'pageSize' : 500,
                  'resourceName' : 'additionalshift',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'additionalshift',
                  'additionalData' : true,
                  'id' : 'awd6bacd90',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,oslc:shortTitle,dcterms:title,spi:orgid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'shiftid',
                  'index' : false,
                  'artifactId' : 'additionalshift_amcrewid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awafcd9047',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'shiftnum',
                  'index' : true,
                  'artifactId' : 'additionalshift_amcrew_oslcshortTitle',
                  'maxSize' : 8,
                  'id' : 'aw1349d85e',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'additionalshift_description_dctermstitle',
                  'maxSize' : 100,
                  'id' : 'aw8a91463c',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'additionalshift_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'awd6efd02a',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:orgid',
               }).
               setQueryBases([
                     {name:'getshift', queryString:'\/oslc\/os\/oslcshift', queryLabel:'' }
               ]).
               setWhereClause('spi%3Aorgid%3D%24%7Bdeforg%7D');
            var resourcePromise016 = PersistenceManager.initCollection( resource016 );


            var resource017 = new ResourceMetadata({
                  'pageSize' : 500,
                  'resourceName' : 'additionalcalendar',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'additionalcalendar',
                  'additionalData' : true,
                  'id' : 'aw1b6b93cf',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('dcterms:identifier,oslc:shortTitle,dcterms:title,spi:orgid,spi:startdate,spi:enddate').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'calendarid',
                  'index' : false,
                  'artifactId' : 'additionalcalendar_amcrewid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awfde2196e',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'calnum',
                  'index' : true,
                  'artifactId' : 'additionalcalendar_amcrew_oslcshortTitle',
                  'maxSize' : 8,
                  'id' : 'awfb3a2e2b',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'additionalcalendar_description_dctermstitle',
                  'maxSize' : 100,
                  'id' : 'aw53418ad2',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'additionalcalendar_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw5a137b85',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'datetime',
                  'usage' : 'date',
                  'name' : 'startdate',
                  'index' : false,
                  'artifactId' : 'additionalcalendar_startdate_spistartdate',
                  'id' : 'aw94153933',
                  'local' : false,
                  'remoteName' : 'spi:startdate',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'datetime',
                  'usage' : 'date',
                  'name' : 'endadate',
                  'index' : false,
                  'artifactId' : 'additionalcalendar_enddate_spienddate',
                  'id' : 'aw490dc4bc',
                  'local' : false,
                  'remoteName' : 'spi:enddate',
               }).
               setQueryBases([
                     {name:'getcalendar', queryString:'\/oslc\/os\/oslccalendar', queryLabel:'' }
               ]).
               setWhereClause('spi%3Aorgid%3D%24%7Bdeforg%7D');
            var resourcePromise017 = PersistenceManager.initCollection( resource017 );


            var resource018 = new ResourceMetadata({
                  'pageSize' : 200,
                  'resourceName' : 'domainDownCode',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'domainDownCode',
                  'additionalData' : true,
                  'id' : 'awe5d263f8',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:value,spi:description,spi:domainid,spi:alndomainid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'domainDownCode_value_spivalue',
                  'maxSize' : 254,
                  'id' : 'awa07f699f',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'domainDownCode_description_dctermstitle',
                  'maxSize' : 100,
                  'id' : 'aw6340461c',
                  'local' : false,
                  'remoteName' : 'spi:description',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'domainDownCode_domainid_oslcshortTitle',
                  'maxSize' : 18,
                  'id' : 'awf5ffea1c',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:domainid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'identifier',
                  'index' : false,
                  'artifactId' : 'domainDownCode_synonymdomainid_dctermsidentifier',
                  'id' : 'awb80df3ad',
                  'local' : false,
                  'remoteName' : 'spi:alndomainid',
               }).
               setQueryBases([
                     {name:'getdowncode', queryString:'\/oslc\/os\/oslcalndomain', queryLabel:'' }
               ]).
               setWhereClause('spi%3Adomainid%3D%22DOWNCODE%22');
            var resourcePromise018 = PersistenceManager.initCollection( resource018 );


            var resource019 = new ResourceMetadata({
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
            var resourcePromise019 = PersistenceManager.initCollection( resource019 );


            var resource020 = new ResourceMetadata({
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
            var resourcePromise020 = PersistenceManager.initCollection( resource020 );


            var resource021 = new ResourceMetadata({
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
            var resourcePromise021 = PersistenceManager.initCollection( resource021 );


            var resource022 = new ResourceMetadata({
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
            var resourcePromise022 = PersistenceManager.initCollection( resource022 );


            var resource023 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'domainAssetStatus',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'domainAssetStatus',
                  'id' : 'aw179ac11b',
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
                  'artifactId' : 'domainAssetStatus_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw1416c8c8',
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
                  'artifactId' : 'domainAssetStatus_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'aw5cae958f',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'domainAssetStatus_maxvalue_spimaxvalue',
                  'maxSize' : 50,
                  'id' : 'aw7648326',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:maxvalue',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'domainAssetStatus_value_spivalue',
                  'maxSize' : 50,
                  'id' : 'aw5dfad764',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'domainAssetStatus_description_dctermstitle',
                  'maxSize' : 256,
                  'id' : 'aw1538fada',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaults',
                  'index' : false,
                  'artifactId' : 'domainAssetStatus_defaults_spidefaults',
                  'id' : 'aw9fae7166',
                  'local' : false,
                  'remoteName' : 'spi:defaults',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'domainAssetStatus_domainid_oslcshortTitle',
                  'maxSize' : 18,
                  'id' : 'aw5102bc5c',
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
                  'artifactId' : 'domainAssetStatus_synonymdomainid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awf0753a17',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getassetstatus', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22LOCASSETSTATUS%22');
            var resourcePromise023 = PersistenceManager.initCollection( resource023 );


            var resource024 = new ResourceMetadata({
                  'pageSize' : 50,
                  'resourceName' : 'domainLocationType',
                  'isAttachment' : false,
                  'isSystem' : true,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'domainLocationType',
                  'id' : 'aw40fe347d',
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
                  'artifactId' : 'domainLocationType_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw1fc46858',
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
                  'artifactId' : 'domainLocationType_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'awfb39b7af',
                  'local' : false,
                  'pkIndex' : 4,
                  'remoteName' : 'spi:siteid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'domainLocationTypes_maxvalue_spimaxvalue',
                  'maxSize' : 50,
                  'id' : 'awe40e84e',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'spi:maxvalue',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'name' : 'value',
                  'index' : false,
                  'artifactId' : 'domainLocationType_value_spivalue',
                  'maxSize' : 50,
                  'id' : 'aw562877f4',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:value',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'domainLocationType_description_dctermstitle',
                  'maxSize' : 256,
                  'id' : 'aw7608d544',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'defaults',
                  'index' : false,
                  'artifactId' : 'domainLocationType_defaults_spidefaults',
                  'id' : 'aw72e76640',
                  'local' : false,
                  'remoteName' : 'spi:defaults',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'domainLocationType_domainid_oslcshortTitle',
                  'maxSize' : 18,
                  'id' : 'aw6741fb41',
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
                  'artifactId' : 'domainLocationType_synonymdomainid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'awf4770be7',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               setQueryBases([
                     {name:'getlocationtype', queryString:'\/oslc\/os\/oslcsynonymdomain', queryLabel:'' }
               ]).
               setWhereClause('oslc%3AshortTitle%3D%22LOCTYPE%22');
            var resourcePromise024 = PersistenceManager.initCollection( resource024 );


            var resource025 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'statusChangeResource',
                  'resourceName' : 'statusChangeResource',
                  'id' : 'aw8e54bcf7',
                  'additionalData' : false,
                  'maxFetchDataLimit' : 0,
                  'classInstance' : AssetStatusObject,
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
                  'dataType' : 'boolean',
                  'name' : 'rolltoallchildren',
                  'index' : false,
                  'artifactId' : 'statusChangeResource_spirolltoallchildren',
                  'id' : 'aw2651a9da',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'removefromactiveroutes',
                  'index' : false,
                  'artifactId' : 'statusChangeResource_spiremovefromactiveroutes',
                  'id' : 'awf6a7114d',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'removefromactivesp',
                  'index' : false,
                  'artifactId' : 'statusChangeResource_spiremovefromactivesp',
                  'id' : 'awc5e6ef52',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'boolean',
                  'name' : 'changepmstatus',
                  'index' : false,
                  'artifactId' : 'statusChangeResource_spichangepmstatus',
                  'id' : 'aw4abcb2f1',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'maxvalue',
                  'index' : false,
                  'artifactId' : 'statusChangeResource_maxvalue',
                  'id' : 'aw91079d00',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise025 = PersistenceManager.initCollection( resource025 );


            var resource026 = new ResourceMetadata({
                  'refreshOnLogin' : 'true',
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
            var resourcePromise026 = PersistenceManager.initCollection( resource026 );


            var resource027 = new ResourceMetadata({
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
            var resourcePromise027 = PersistenceManager.initCollection( resource027 );


            var resource028 = new ResourceMetadata({
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
            var resourcePromise028 = PersistenceManager.initCollection( resource028 );


            var resource029 = new ResourceMetadata({
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
            var resourcePromise029 = PersistenceManager.initCollection( resource029 );


            var resource030 = new ResourceMetadata({
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
            var resourcePromise030 = PersistenceManager.initCollection( resource030 );


            var resource031 = new ResourceMetadata({
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
            var resourcePromise031 = PersistenceManager.initCollection( resource031 );


            var resource032 = new ResourceMetadata({
                  'pageSize' : 500,
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
                     {name:'getmaxdomain', queryString:'\/oslc\/os\/oslcmaxdomain?savedQuery=getAssetSpecificationDomains', queryLabel:'' }
               ]).
               setWhereClause('spi_wm%3Adomaintype+in+%5B%22NUMERIC%22%2C%22ALN%22%2C%22TABLE%22%5D');
            var resourcePromise032 = PersistenceManager.initCollection( resource032 );


            var resource033 = new ResourceMetadata({
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
            var resourcePromise033 = PersistenceManager.initCollection( resource033 );


            var resource034 = new ResourceMetadata({
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
            var resourcePromise034 = PersistenceManager.initCollection( resource034 );


            var resource035 = new ResourceMetadata({
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
               setQueryBases([
                     {name:'getfailureList', queryString:'\/oslc\/os\/oslcfailurelist', queryLabel:'' }
               ]).
               setWhereClause('spi%3Aorgid%3D%24%7Bdeforg%7D+and+spi%3Aparent%21%3D%22*%22');
            var resourcePromise035 = PersistenceManager.initCollection( resource035 );


            var resource036 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'searchAsset',
                  'resourceName' : 'searchAsset',
                  'id' : 'awc551102a',
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
                  'index' : true,
                  'artifactId' : 'searchAsset_assetnum_string',
                  'id' : 'awe7c03880',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'searchAsset_description_string',
                  'id' : 'awc03f9a45',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'parent',
                  'index' : false,
                  'artifactId' : 'searchAsset_parent_string',
                  'id' : 'awa289a389',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'status',
                  'index' : false,
                  'artifactId' : 'searchAsset_statusdesc_string',
                  'id' : 'awf60a631a',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'location',
                  'index' : false,
                  'artifactId' : 'searchAsset_location_string',
                  'id' : 'awb535ae1d',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'priority',
                  'index' : false,
                  'artifactId' : 'searchAsset_priority_string',
                  'id' : 'aw6da4f64',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise036 = PersistenceManager.initCollection( resource036 );


            var resource037 = new ResourceMetadata({
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
            var resourcePromise037 = PersistenceManager.initCollection( resource037 );


            var resource038 = new ResourceMetadata({
                  'pageSize' : 100,
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
               setSimpleFieldsSelectExpression('spi_wm:classstructureid,spi_wm:description,spi_wm:haschildren,spi_wm:classificationid,spi_wm:hierarchypath,spi_wm:parent').
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
                     {name:'getclassstructure', queryString:'\/oslc\/os\/oslcclassstructure?savedQuery=ANYWHEREASSETALL', queryLabel:'' }
               ]);
            var resourcePromise038 = PersistenceManager.initCollection( resource038 );


            var resource039 = new ResourceMetadata({
                  'pageSize' : 500,
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
                  'index' : false,
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
                  'index' : false,
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
               setWhereClause('spi_wm%3Aclassspecusewith%7Bspi_wm%3Aobjectname%3D%22ASSET%22%7D');
            var resourcePromise039 = PersistenceManager.initCollection( resource039 );


            var resource040 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'assetSpecResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'assetSpecResource',
                  'id' : 'aw6932cceb',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:assetspecid,spi:classstructureid,spi:mandatory,spi:orgid,spi:changedate,spi:displaysequence,spi:changeby,spi:numvalue,spi:alnvalue,spi:tablevalue,spi:section,spi:linearassetspecid,spi:measureunitid,spi:anywhererefid,spi_wm:assetattr{spi_wm:assetattrid,spi_wm:domainid,spi_wm:description,spi_wm:datatype}').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'assetspecid',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_assetSpecid_spiassetSpecid',
                  'id' : 'awe29a0198',
                  'key' : '1',
                  'local' : false,
                  'remoteName' : 'spi:assetspecid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'classstructureid',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_classstructureid_spiclassstructureid',
                  'maxSize' : 20,
                  'id' : 'awe62d3751',
                  'local' : false,
                  'remoteName' : 'spi:classstructureid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'mandatory',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_mandatory_spimandatory',
                  'id' : 'aw2f587b78',
                  'local' : false,
                  'remoteName' : 'spi:mandatory',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_orgid_spiorgid',
                  'maxSize' : 8,
                  'id' : 'aw6f5b7de1',
                  'local' : false,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'datetime',
                  'name' : 'changedate',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_changedate_spichangedate',
                  'id' : 'awb289f5e0',
                  'local' : false,
                  'remoteName' : 'spi:changedate',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'smallint',
                  'name' : 'displaysequence',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_displaysequence_spidisplaysequence',
                  'id' : 'aw1c252a5b',
                  'local' : false,
                  'remoteName' : 'spi:displaysequence',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'changeby',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_changeby_spichangeby',
                  'maxSize' : 30,
                  'id' : 'awe922803c',
                  'local' : false,
                  'remoteName' : 'spi:changeby',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:domainid',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'assetSpecResource',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_domainid_spi_wmclassspecspi_wmdomainid',
                  'maxSize' : 18,
                  'id' : 'aw9b65e99a',
                  'local' : false,
                  'remoteName' : 'spi_wm:assetattr',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi_wm:assetattrid',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'assetSpecResource',
                  'name' : 'assetattrid',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_assetattrid_spi_wmassetattrspi_wmassetattrid',
                  'maxSize' : 16,
                  'id' : 'aw18d37efa',
                  'local' : false,
                  'remoteName' : 'spi_wm:assetattr',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'displayValueRemoteName' : 'spi_wm:description',
                  'dataType' : 'reference',
                  'referenceResource' : 'assetSpecResource',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_description_spiassetattrspidescription',
                  'maxSize' : 100,
                  'id' : 'aw4936f104',
                  'local' : false,
                  'remoteName' : 'spi_wm:assetattr',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi_wm:datatype',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'assetSpecResource',
                  'name' : 'datatype',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_datatype_spiassetattrspidatatype',
                  'maxSize' : 8,
                  'id' : 'awc3785f8',
                  'local' : false,
                  'remoteName' : 'spi_wm:assetattr',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'double',
                  'name' : 'numvalue',
                  'index' : false,
                  'scale' : 10,
                  'artifactId' : 'assetSpecResource_numvalue_spinumvalue',
                  'id' : 'aw1fe53d26',
                  'local' : false,
                  'remoteName' : 'spi:numvalue',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'alnvalue',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_alnvalue_spialnvalue',
                  'maxSize' : 254,
                  'id' : 'awe90f8fad',
                  'local' : false,
                  'remoteName' : 'spi:alnvalue',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'tablevalue',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_tablevalue_spitablevalue',
                  'maxSize' : 254,
                  'id' : 'awa42e0457',
                  'local' : false,
                  'remoteName' : 'spi:tablevalue',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'section',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_section_spisection',
                  'maxSize' : 10,
                  'id' : 'aw161b789a',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:section',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'linearassetspecid',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_linearassetspecid_spilinearassetspecid',
                  'id' : 'aw1f004a22',
                  'local' : false,
                  'pkIndex' : 5,
                  'remoteName' : 'spi:linearassetspecid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'measureunitid',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_measureunitid_spimeasureunitid',
                  'maxSize' : 16,
                  'id' : 'aw4f9be6eb',
                  'local' : false,
                  'remoteName' : 'spi:measureunitid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'integer',
                  'usage' : 'bigint',
                  'name' : 'anywhereRefId',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_anywhereRefId__anywhererefid',
                  'id' : 'awe9185885',
                  'local' : false,
                  'remoteName' : 'spi:anywhererefid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'uivalue',
                  'index' : false,
                  'artifactId' : 'assetSpecResource_uivalue',
                  'id' : 'awab4d4f66',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise040 = PersistenceManager.initCollection( resource040 );


            var resource041 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'assetClassSpec',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'assetClassSpec',
                  'id' : 'aw75840445',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:domainid,spi_wm:assetattr{spi_wm:assetattrid}').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'domainid',
                  'index' : false,
                  'artifactId' : 'domainid',
                  'maxSize' : 18,
                  'id' : 'awa6c22451',
                  'local' : false,
                  'remoteName' : 'spi:domainid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'displayValueRemoteName' : 'spi_wm:assetattrid',
                  'dataType' : 'reference',
                  'usage' : 'upper',
                  'referenceResource' : 'assetClassSpec',
                  'name' : 'assetattrid',
                  'index' : false,
                  'artifactId' : 'assetattrid',
                  'maxSize' : 16,
                  'id' : 'aw2c9307d2',
                  'local' : false,
                  'remoteName' : 'spi_wm:assetattr',
               });
            var resourcePromise041 = PersistenceManager.initCollection( resource041 );


            var resource042 = new ResourceMetadata({
                  'pageSize' : 200,
                  'resourceName' : 'assetAttribute',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'assetAttribute',
                  'additionalData' : true,
                  'id' : 'awd42032b8',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi_wm:datatype,spi_wm:description,spi_wm:assetattrid,spi_wm:measureunitid,spi_wm:siteid,spi_wm:orgid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'datatype',
                  'index' : false,
                  'artifactId' : 'assetAttribute_datatype_spiwmdatatype',
                  'id' : 'awf67fe3ec',
                  'local' : false,
                  'remoteName' : 'spi_wm:datatype',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : false,
                  'artifactId' : 'assetAttribute_description_spiwmdescription',
                  'id' : 'aw4adb715c',
                  'local' : false,
                  'remoteName' : 'spi_wm:description',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'assetattrid',
                  'index' : true,
                  'artifactId' : 'assetAttribute_assetattrid_spiwmassetid',
                  'id' : 'aw61129d6f',
                  'local' : false,
                  'remoteName' : 'spi_wm:assetattrid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'measureunitid',
                  'index' : false,
                  'artifactId' : 'assetAttribute_assetattrid_spiwmmeasureunitid',
                  'id' : 'aw7140d6b2',
                  'local' : false,
                  'remoteName' : 'spi_wm:measureunitid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'siteid',
                  'index' : false,
                  'artifactId' : 'assetAttribute_siteid_spiwmsiteid',
                  'id' : 'awf0595d18',
                  'local' : false,
                  'remoteName' : 'spi_wm:siteid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'orgid',
                  'index' : true,
                  'artifactId' : 'assetAttribute_orgid_spiwmorgid',
                  'id' : 'awc587a5e',
                  'key' : '2',
                  'local' : false,
                  'remoteName' : 'spi_wm:orgid',
               }).
               setQueryBases([
                     {name:'getassetattr', queryString:'\/oslc\/os\/oslcassetattr', queryLabel:'' }
               ]).
               setWhereClause('spi_wm%3Aorgid%3D%24%7Bdeforg%7D');
            var resourcePromise042 = PersistenceManager.initCollection( resource042 );


            var resource043 = new ResourceMetadata({
                  'pageSize' : 100,
                  'resourceName' : 'measureUnit',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'measureUnit',
                  'additionalData' : true,
                  'id' : 'aw5a6b7179',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:abbreviation,spi:measureunitid,spi:orgid,spi:siteid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'dataType' : 'string',
                  'name' : 'abbreviation',
                  'index' : false,
                  'artifactId' : 'measureunit_abbreviation_spiabbreviation',
                  'id' : 'aw9608fd9',
                  'local' : false,
                  'remoteName' : 'spi:abbreviation',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'measureunitid',
                  'index' : true,
                  'artifactId' : 'measureunit_measureunitid_spimeasureunitid',
                  'id' : 'aw7a5040f5',
                  'local' : false,
                  'remoteName' : 'spi:measureunitid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'orgid',
                  'index' : true,
                  'artifactId' : 'measureunit_orgid_spiorgid',
                  'id' : 'aw994bd7f0',
                  'local' : false,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'siteid',
                  'index' : true,
                  'artifactId' : 'measureunit_siteid_spisiteid',
                  'id' : 'awc639a9dc',
                  'local' : false,
                  'remoteName' : 'spi:siteid',
               }).
               setQueryBases([
                     {name:'getmeasureunit', queryString:'\/oslc\/os\/oslcmeasureunit', queryLabel:'' }
               ]);
            var resourcePromise043 = PersistenceManager.initCollection( resource043 );


            var resource044 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'assetMovedFltResource',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'inMemory' : false,
                  'artifactId' : 'assetMovedFltResource',
                  'id' : 'aw718247ec',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:tloamdfltnewglaccount,spi:pluscdfltnewlploc,spi:orgid,spi:dfltnewsite,spi:dfltnewparentchkbox,spi:dfltnewparent,spi:dfltneworgid,spi:dfltnewlocationchkbox,spi:dfltnewlocation,spi:dfltnewbinnumchkbox,spi:dfltnewbinnum,spi:dfltnewassetnum').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'gl',
                  'name' : 'tloamdfltnewglaccount',
                  'index' : false,
                  'artifactId' : 'assetMovedFltResource_tloamdfltnewglaccount_spi_tloamdfltnewglaccount',
                  'maxSize' : 23,
                  'id' : 'aw568720bb',
                  'local' : false,
                  'remoteName' : 'spi:tloamdfltnewglaccount',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'pluscdfltnewlploc',
                  'index' : false,
                  'artifactId' : 'assetMovedFltResource_pluscdfltnewlploc_spi_pluscdfltnewlploc',
                  'maxSize' : 12,
                  'id' : 'awa125b340',
                  'local' : false,
                  'remoteName' : 'spi:pluscdfltnewlploc',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'orgid',
                  'index' : false,
                  'artifactId' : 'assetMovedFltResource_orgid_spi_orgid',
                  'maxSize' : 8,
                  'id' : 'awa06913fa',
                  'local' : false,
                  'remoteName' : 'spi:orgid',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'dfltnewsite',
                  'index' : false,
                  'artifactId' : 'assetMovedFltResource_dfltnewsite_spi_dfltnewsite',
                  'maxSize' : 8,
                  'id' : 'awcd5704cb',
                  'local' : false,
                  'remoteName' : 'spi:dfltnewsite',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'dfltnewparentchkbox',
                  'index' : false,
                  'artifactId' : 'assetMovedFltResource_dfltnewparentchkbox_spi_dfltnewparentchkbox',
                  'id' : 'awf742c804',
                  'local' : false,
                  'remoteName' : 'spi:dfltnewparentchkbox',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'dfltnewparent',
                  'index' : false,
                  'artifactId' : 'assetMovedFltResource_dfltnewparent_spi_dfltnewparent',
                  'maxSize' : 25,
                  'id' : 'aw6c5fb13d',
                  'local' : false,
                  'remoteName' : 'spi:dfltnewparent',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'dfltneworgid',
                  'index' : false,
                  'artifactId' : 'assetMovedFltResource_dfltneworgid_spi_dfltneworgid',
                  'maxSize' : 8,
                  'id' : 'aw67023ec7',
                  'local' : false,
                  'remoteName' : 'spi:dfltneworgid',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'dfltnewlocationchkbox',
                  'index' : false,
                  'artifactId' : 'assetMovedFltResource_dfltnewlocationchkbox_spi_dfltnewlocationchkbox',
                  'id' : 'aw9c32b8b0',
                  'local' : false,
                  'remoteName' : 'spi:dfltnewlocationchkbox',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'dfltnewlocation',
                  'index' : false,
                  'artifactId' : 'assetMovedFltResource_dfltnewlocation_spi_dfltnewlocation',
                  'maxSize' : 12,
                  'id' : 'awb13d67aa',
                  'local' : false,
                  'remoteName' : 'spi:dfltnewlocation',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'boolean',
                  'name' : 'dfltnewbinnumchkbox',
                  'index' : false,
                  'artifactId' : 'assetMovedFltResource_dfltnewbinnumchkbox_spi_dfltnewbinnumchkbox',
                  'id' : 'awc4bcaec6',
                  'local' : false,
                  'remoteName' : 'spi:dfltnewbinnumchkbox',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'dfltnewbinnum',
                  'index' : false,
                  'artifactId' : 'assetMovedFltResource_dfltnewbinnum_spi_dfltnewbinnum',
                  'maxSize' : 8,
                  'id' : 'aw62532fba',
                  'local' : false,
                  'remoteName' : 'spi:dfltnewbinnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'dfltnewassetnum',
                  'index' : false,
                  'artifactId' : 'assetMovedFltResource_dflnewassetnum_dflspinewassetnum',
                  'maxSize' : 12,
                  'id' : 'aw1908273b',
                  'local' : false,
                  'remoteName' : 'spi:dfltnewassetnum',
               });
            var resourcePromise044 = PersistenceManager.initCollection( resource044 );


            var resource045 = new ResourceMetadata({
                  'isSystem' : false,
                  'inMemory' : false,
                  'pageSize' : 1000,
                  'artifactId' : 'assetmoveresource',
                  'resourceName' : 'assetmoveresource',
                  'id' : 'awefd138cb',
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
                  'name' : 'parent',
                  'index' : true,
                  'artifactId' : 'assetMoveResource_parent_spi_parent',
                  'maxSize' : 12,
                  'id' : 'aw29e74f4d',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'toParent',
                  'index' : true,
                  'artifactId' : 'assetMoveResource_toParent_spi_toParent',
                  'maxSize' : 12,
                  'id' : 'aw6521e5bb',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'location',
                  'index' : true,
                  'artifactId' : 'assetMoveResource_location_spi_location',
                  'maxSize' : 12,
                  'id' : 'aw75775d57',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'toLocation',
                  'index' : true,
                  'artifactId' : 'assetMoveResource_toLocation_spi_toLocation',
                  'maxSize' : 12,
                  'id' : 'awc39d311b',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'toBin',
                  'index' : true,
                  'artifactId' : 'assetMoveResource_toBin_spi_toBin',
                  'maxSize' : 8,
                  'id' : 'aw9c32402',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'site',
                  'index' : true,
                  'artifactId' : 'assetMoveResource_site_spi_site',
                  'maxSize' : 8,
                  'id' : 'aw7121a799',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'toSite',
                  'index' : true,
                  'artifactId' : 'assetMoveResource_site_spi_tosite',
                  'maxSize' : 8,
                  'id' : 'awd9eb4926',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'newAsset',
                  'index' : true,
                  'artifactId' : 'assetMoveResource_newAsset_spi_newAsset',
                  'maxSize' : 12,
                  'id' : 'awb47e2981',
                  'persistent' : true,
                  'local' : true,
               }).
               addField({
                  'dataType' : 'string',
                  'name' : 'locationtype',
                  'index' : true,
                  'artifactId' : 'assetMoveResource_locationtypet_spi_locationtype',
                  'maxSize' : 16,
                  'id' : 'awbe2467ee',
                  'persistent' : true,
                  'local' : true,
               });
            var resourcePromise045 = PersistenceManager.initCollection( resource045 );


            var resource046 = new ResourceMetadata({
                  'defaultOrderBy' : 'location asc',
                  'pageSize' : 200,
                  'resourceName' : 'moveLocations',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'moveLocations',
                  'additionalData' : true,
                  'id' : 'aw4e2a84e8',
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
                  'index' : true,
                  'artifactId' : 'movelocations_locationsid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw92a84416',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : true,
                  'artifactId' : 'movelocations_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'aw183357a',
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
                  'artifactId' : 'movelocations_location_oslcshortTitle',
                  'maxSize' : 12,
                  'id' : 'aw3bd867e5',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : true,
                  'artifactId' : 'movelocations_description_dctermstitle',
                  'maxSize' : 100,
                  'id' : 'aw9ea92e08',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'status',
                  'index' : true,
                  'artifactId' : 'movelocations_status_spistatus',
                  'maxSize' : 20,
                  'id' : 'aw3b476111',
                  'local' : false,
                  'remoteName' : 'spi:status',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'locationtype',
                  'index' : true,
                  'artifactId' : 'movelocations_movetype_spitype',
                  'maxSize' : 16,
                  'id' : 'awebce926',
                  'local' : false,
                  'remoteName' : 'spi:type',
               }).
               setQueryBases([
                     {name:'getLocation', queryString:'\/oslc\/os\/oslclocations', queryLabel:'' }
               ]);
            var resourcePromise046 = PersistenceManager.initCollection( resource046 );


            var resource047 = new ResourceMetadata({
                  'pageSize' : 200,
                  'resourceName' : 'moveParent',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'moveParent',
                  'additionalData' : true,
                  'id' : 'aw7c18964c',
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('oslc:shortTitle,dcterms:title,spi:siteid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'assetnum',
                  'index' : true,
                  'artifactId' : 'moveParent_assetnum_oslcshortTitle',
                  'maxSize' : 25,
                  'id' : 'aw6d737746',
                  'local' : false,
                  'pkIndex' : 2,
                  'remoteName' : 'oslc:shortTitle',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'description',
                  'index' : true,
                  'artifactId' : 'moveParent_description_dctermstitle',
                  'maxSize' : 100,
                  'id' : 'aw7415d3d7',
                  'local' : false,
                  'remoteName' : 'dcterms:title',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'siteid',
                  'index' : true,
                  'artifactId' : 'moveParent_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'aw266fd0b2',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:siteid',
               }).
               setQueryBases([
                     {name:'getadditionalasset', queryString:'\/oslc\/os\/oslcasset', queryLabel:'' }
               ]);
            var resourcePromise047 = PersistenceManager.initCollection( resource047 );


            var resource048 = new ResourceMetadata({
                  'pageSize' : 1000,
                  'resourceName' : 'inventory',
                  'isAttachment' : false,
                  'isSystem' : false,
                  'urlBase' : 'http:\/\/9.30.212.122:7001\/maximo',
                  'inMemory' : false,
                  'artifactId' : 'inventory',
                  'id' : 'awb12d4a36',
                  'additionalData' : false,
                  'adapterName' : 'OSLCGenericAdapter',
                  'maxFetchDataLimit' : 0,
               }).
               setLocal( false ).
               setSimpleFieldsSelectExpression('spi:itemnum,spi:binnum,dcterms:identifier,spi:itemsetid,spi:location,spi:siteid').
               setSupportiveFieldsSelectExpression('').
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'itemnum',
                  'index' : true,
                  'artifactId' : 'inventory_itemnum_spiitemnum',
                  'maxSize' : 30,
                  'id' : 'awa75d7dea',
                  'local' : false,
                  'pkIndex' : 1,
                  'remoteName' : 'spi:itemnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'name' : 'binnum',
                  'index' : true,
                  'artifactId' : 'inventory_binnum_spibinnum',
                  'maxSize' : 8,
                  'id' : 'awc4ed44ac',
                  'local' : false,
                  'remoteName' : 'spi:binnum',
               }).
               addField({
                  'multiplicity' : 'zero-or-one',
                  'dataType' : 'string',
                  'usage' : 'bigint',
                  'name' : 'inventoryid',
                  'index' : false,
                  'artifactId' : 'inventory_inventoryid_dctermsidentifier',
                  'maxSize' : 19,
                  'id' : 'aw118a8d1c',
                  'local' : false,
                  'remoteName' : 'dcterms:identifier',
               }).
               addField({
                  'multiplicity' : 'exactly-one',
                  'dataType' : 'string',
                  'usage' : 'upper',
                  'name' : 'itemsetid',
                  'index' : true,
                  'artifactId' : 'inventory_itemsetid_spiitemsetid',
                  'maxSize' : 8,
                  'id' : 'awfc97b4f2',
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
                  'artifactId' : 'inventory_location_spilocation',
                  'maxSize' : 12,
                  'id' : 'awf1e96813',
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
                  'artifactId' : 'inventory_siteid_spisiteid',
                  'maxSize' : 8,
                  'id' : 'awc96140d2',
                  'local' : false,
                  'pkIndex' : 3,
                  'remoteName' : 'spi:siteid',
               }).
               setQueryBases([
                     {name:'getinventory', queryString:'\/oslc\/os\/oslcinventory?savedQuery=getWithComplexQuery', queryLabel:'' }
               ]);
            var resourcePromise048 = PersistenceManager.initCollection( resource048 );


            var resource049 = new ResourceMetadata({
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
            var resourcePromise049 = PersistenceManager.initCollection( resource049 );


            var resource050 = new ResourceMetadata({
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
            var resourcePromise050 = PersistenceManager.initCollection( resource050 );


            var resource051 = new ResourceMetadata({
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
            var resourcePromise051 = PersistenceManager.initCollection( resource051 );


            var resource052 = new ResourceMetadata({
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
            var resourcePromise052 = PersistenceManager.initCollection( resource052 );


            var resource053 = new ResourceMetadata({
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
            var resourcePromise053 = PersistenceManager.initCollection( resource053 );


            var resource054 = new ResourceMetadata({
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
            var resourcePromise054 = PersistenceManager.initCollection( resource054 );


            var resource055 = new ResourceMetadata({
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
            var resourcePromise055 = PersistenceManager.initCollection( resource055 );


            var resource056 = new ResourceMetadata({
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
            var resourcePromise056 = PersistenceManager.initCollection( resource056 );


            var resource057 = new ResourceMetadata({
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
            var resourcePromise057 = PersistenceManager.initCollection( resource057 );


            var resource058 = new ResourceMetadata({
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
            var resourcePromise058 = PersistenceManager.initCollection( resource058 );


            var resource059 = new ResourceMetadata({
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
            var resourcePromise059 = PersistenceManager.initCollection( resource059 );


            var resource060 = new ResourceMetadata({
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
            var resourcePromise060 = PersistenceManager.initCollection( resource060 );


            var resource061 = new ResourceMetadata({
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
            var resourcePromise061 = PersistenceManager.initCollection( resource061 );


            var resource062 = new ResourceMetadata({
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
            var resourcePromise062 = PersistenceManager.initCollection( resource062 );


            var resource063 = new ResourceMetadata({
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
            var resourcePromise063 = PersistenceManager.initCollection( resource063 );


            var resource064 = new ResourceMetadata({
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
            var resourcePromise064 = PersistenceManager.initCollection( resource064 );


            var resource065 = new ResourceMetadata({
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
            var resourcePromise065 = PersistenceManager.initCollection( resource065 );


            var resource066 = new ResourceMetadata({
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
            var resourcePromise066 = PersistenceManager.initCollection( resource066 );


            var resource067 = new ResourceMetadata({
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
            var resourcePromise067 = PersistenceManager.initCollection( resource067 );


            var resource068 = new ResourceMetadata({
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
            var resourcePromise068 = PersistenceManager.initCollection( resource068 );


            var resource069 = new ResourceMetadata({
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
            var resourcePromise069 = PersistenceManager.initCollection( resource069 );


            var resource070 = new ResourceMetadata({
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
            var resourcePromise070 = PersistenceManager.initCollection( resource070 );


            var resource071 = new ResourceMetadata({
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
            var resourcePromise071 = PersistenceManager.initCollection( resource071 );


            var resource072 = new ResourceMetadata({
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
            var resourcePromise072 = PersistenceManager.initCollection( resource072 );


            var resource073 = new ResourceMetadata({
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
            var resourcePromise073 = PersistenceManager.initCollection( resource073 );


            all([resourcePromise001, resourcePromise002, resourcePromise003, resourcePromise004, resourcePromise005, resourcePromise006, resourcePromise007, resourcePromise008, resourcePromise009, resourcePromise010, resourcePromise011, resourcePromise012, resourcePromise013, resourcePromise014, resourcePromise015, resourcePromise016, resourcePromise017, resourcePromise018, resourcePromise019, resourcePromise020, resourcePromise021, resourcePromise022, resourcePromise023, resourcePromise024, resourcePromise025, resourcePromise026, resourcePromise027, resourcePromise028, resourcePromise029, resourcePromise030, resourcePromise031, resourcePromise032, resourcePromise033, resourcePromise034, resourcePromise035, resourcePromise036, resourcePromise037, resourcePromise038, resourcePromise039, resourcePromise040, resourcePromise041, resourcePromise042, resourcePromise043, resourcePromise044, resourcePromise045, resourcePromise046, resourcePromise047, resourcePromise048, resourcePromise049, resourcePromise050, resourcePromise051, resourcePromise052, resourcePromise053, resourcePromise054, resourcePromise055, resourcePromise056, resourcePromise057, resourcePromise058, resourcePromise059, resourcePromise060, resourcePromise061, resourcePromise062, resourcePromise063, resourcePromise064, resourcePromise065, resourcePromise066, resourcePromise067, resourcePromise068, resourcePromise069, resourcePromise070, resourcePromise071, resourcePromise072, resourcePromise073]).then(function(results) {
                 promise.resolve();
            }).
            otherwise(function(error) {
                 promise.reject(error);
            });
         }
      });
});
