/*
 * File: app/view/filter/eventlogViewController.js
 *
 * This file was generated by Sencha Architect version 4.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.5.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.5.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('EventLog.view.filter.eventlogViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.filter.eventlog',

    createComboStore: function(component, key) {
         var ds = Ext.create("Ext.data.Store", {
             proxy: {
                 url: '/opmon/seagull/www/index.php/statusgrid/action/comboContent/filter/' + key,
                 type: 'ajax',
                 autoload: true,
                 noCache: false,
                 actionMethods: {
                     read: 'POST'
                },
                reader: {
                    rootProperty: 'data',
                    totalProperty: 'total',
                    id: 'id'
                }
            },
            fields: [
                {name: 'id', mapping: 'id'},
                {name: 'display_name', mapping: 'display_name'}
            ]
        });

        component.setStore(ds);
    }

});