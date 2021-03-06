/*
 * File: app/view/index.js
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

Ext.define('EventLog.view.index', {
    extend: 'Ext.container.Container',
    alias: 'widget.index',

    requires: [
        'EventLog.view.indexViewModel',
        'Ext.grid.Panel',
        'Ext.grid.column.Date',
        'Ext.view.Table',
        'Ext.toolbar.Toolbar',
        'Ext.form.field.Date'
    ],

    viewModel: {
        type: 'index'
    },

    items: [
        {
            xtype: 'gridpanel',
            border: false,
            ui: 'light',
            title: 'Event logs',
            headerBorders: false,
            store: 'Eventlog',
            columns: [
                {
                    xtype: 'datecolumn',
                    width: 200,
                    dataIndex: 'time',
                    text: '{{Date}}',
                    format: 'Y-m-d h:i:s'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'class_name',
                    text: '{{Class}}'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'host_name',
                    text: '{{Host}}'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'service_description',
                    text: '{{Service}}'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'state_type',
                    text: '{{State Type}}'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'detail',
                    flex: 1,
                    sealed: true,
                    cellWrap: true,
                    enableTextSelection: true,
                    text: '{{Detail}}'
                }
            ],
            viewConfig: {
                shrinkWrap: 1,
                enableTextSelection: true,
                stripeRows: false
            },
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'daterangepicker',
                            width: 187,
                            emptyText: '{{Filter by date}}'
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            emptyText: '{{Filter detail}}'
                        }
                    ]
                }
            ]
        }
    ]

});