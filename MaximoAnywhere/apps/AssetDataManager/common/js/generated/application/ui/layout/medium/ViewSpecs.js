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
// Build: 2022-05-26 15:48:14
//----------------------------------------------------------------//
define(   "generated/application/ui/layout/medium/ViewSpecs", 
      [
         "dojo/_base/declare", 
         "platform/ui/layout/_LayoutWidgetBase", 
         "dojo/_base/array", 
         "dojo/dom-construct", 
         "dojo/dom-class"
      ],

function(declare, _LayoutWidgetBase, array, domConstruct, domClass) {
      return declare("generated.application.ui.layout.medium.ViewSpecs", _LayoutWidgetBase, {

         buildRendering : function() {
            this.inherited(arguments);

            var table = domConstruct.create('table', {role:'presentation'} );
            table.style.width = '100%';
            domClass.add(table, 'layout ViewSpecs ');

            var row = table.insertRow(-1);
            row.className  = 'ViewSpecs_row_0';

            var col_item1 = row.insertCell(-1);
            col_item1.className  = 'ViewSpecs_item1_column';
            col_item1.colSpan = '12';
            var div_item1 = domConstruct.create('div');
            col_item1.appendChild(div_item1);
            domClass.add(div_item1, 'hideextra');
            this._storeAttachToDomReference('item1', div_item1);
            
            var row = table.insertRow(-1);
            row.className  = 'ViewSpecs_row_0_1';

            var col_desc1 = row.insertCell(-1);
            col_desc1.className  = 'ViewSpecs_desc1_column';
            col_desc1.colSpan = '12';
            var div_desc1 = domConstruct.create('div');
            col_desc1.appendChild(div_desc1);
            domClass.add(div_desc1, 'hideextra');
            this._storeAttachToDomReference('desc1', div_desc1);
            
            var row = table.insertRow(-1);
            row.className  = 'ViewSpecs_row_1';

            var col_val2 = row.insertCell(-1);
            col_val2.className  = 'ViewSpecs_val2_column';
            col_val2.colSpan = '12';
            var div_val2 = domConstruct.create('div');
            col_val2.appendChild(div_val2);
            domClass.add(div_val2, 'hideextra');
            this._storeAttachToDomReference('val2', div_val2);
            
            var row = table.insertRow(-1);
            row.className  = 'ViewSpecs_row_1_1';

            var col_uom2 = row.insertCell(-1);
            col_uom2.className  = 'ViewSpecs_uom2_column';
            col_uom2.colSpan = '12';
            var div_uom2 = domConstruct.create('div');
            col_uom2.appendChild(div_uom2);
            domClass.add(div_uom2, 'hideextra');
            this._storeAttachToDomReference('uom2', div_uom2);
            
            this.domNode = table;
         }
      });
});
