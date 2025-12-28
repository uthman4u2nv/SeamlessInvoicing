import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARD.LIST.DASHBOARD',
        icon: 'las la-house-damage',
        link: '/pages',
    },
    {
        id: 3,
        label: 'MENUITEMS.PAGES.TEXT',
        isTitle: true
    },
    {
        id: 4,
        label: 'MENUITEMS.INVOICEMANAGEMENT.TEXT',
        icon: "las la-file-invoice",
        subItems: [
            {
                id: 4,
                label: 'MENUITEMS.INVOICEMANAGEMENT.LIST.INVOICE',
                link: '/pages/invoice',
                parentId: 3
            },
            {
                id: 5,
                label: 'MENUITEMS.INVOICEMANAGEMENT.LIST.ADDINVOICE',
                link: '/pages/invoice-add',
                parentId: 3
            },
            {
                id: 6,
                label: 'MENUITEMS.INVOICEMANAGEMENT.LIST.INVOICEDETAILS',
                link: '/pages/invoice-details',
                parentId: 3
            },
            {
                id: 7,
                label: 'MENUITEMS.INVOICEMANAGEMENT.LIST.PAYMENTS',
                link: '/pages/payments',
                parentId: 3
            },
            {
                id: 8,
                label: 'MENUITEMS.INVOICEMANAGEMENT.LIST.TAXES',
                link: '/pages/taxes',
                parentId: 3
            },
            {
                id: 9,
                label: 'MENUITEMS.INVOICEMANAGEMENT.LIST.PRODUCTS',
                subItems: [
                    {
                        id: 10,
                        label: 'MENUITEMS.INVOICEMANAGEMENT.LIST.PRODUCTLIST',
                        link: '/pages/product-list',
                        parentId: 3
                    },
                    {
                        id: 11,
                        label: 'MENUITEMS.INVOICEMANAGEMENT.LIST.ADDPRODUCT',
                        link: '/pages/product-add',
                        parentId: 3
                    },
                ]
            },
            {
                id: 12,
                label: 'MENUITEMS.INVOICEMANAGEMENT.LIST.REPORT',
                subItems: [
                    {
                        id: 10,
                        label: 'MENUITEMS.INVOICEMANAGEMENT.LIST.PAYMENTSUMMARY',
                        link: '/pages/payment-summary',
                        parentId: 3
                    },
                    {
                        id: 11,
                        label: 'MENUITEMS.INVOICEMANAGEMENT.LIST.SALEREPORT',
                        link: '/pages/sale-report',
                        parentId: 3
                    },
                    {
                        id: 11,
                        label: 'MENUITEMS.INVOICEMANAGEMENT.LIST.EXPENCESREPORT',
                        link: '/pages/expenses-report',
                        parentId: 3
                    },
                ]
            },
            {
                id: 13,
                label: 'MENUITEMS.INVOICEMANAGEMENT.LIST.USERS',
                link: '/pages/user',
                parentId: 3
            },
            {
                id: 14,
                label: 'MENUITEMS.INVOICEMANAGEMENT.LIST.TRANSACTION',
                subItems: [
                    {
                        id: 10,
                        label: 'MENUITEMS.INVOICEMANAGEMENT.LIST.TRANSACTIONLIST',
                        link: '/pages/transaction-list',
                        parentId: 3
                    },
                    {
                        id: 11,
                        label: 'MENUITEMS.INVOICEMANAGEMENT.LIST.NEWTRANSACTION',
                        link: '/pages/transaction-new',
                        parentId: 3
                    }
                ]
            },
        ]
    },
    {
        id: 52,
        label: 'MENUITEMS.AUTH.TEXT',
        icon: 'las la-cog',
        subItems: [
            {
                id: 53,
                label: 'MENUITEMS.AUTH.LIST.SIGNIN',
                link: '/auth/auth-signin',
                parentId: 52
            },
            {
                id: 54,
                label: 'MENUITEMS.AUTH.LIST.SIGNUP',
                link: '/auth/auth-signup',
                parentId: 52
            },
            {
                id: 55,
                label: 'MENUITEMS.AUTH.LIST.PASSWORDRESET',
                link: '/auth/auth-pass-reset',
                parentId: 52
            },
            {
                id: 55,
                label: 'MENUITEMS.AUTH.LIST.LOCKSCREEN',
                link: '/auth/auth-lockscreen',
                parentId: 52
            }
        ]
    },
    {
        id: 1,
        label: 'MENUITEMS.COMPONENTS.TEXT',
        isTitle: true
    },
    {
        id: 3,
        label: 'MENUITEMS.BOOTSTRAPUI.TEXT',
        icon: "las la-pen-nib",
        subItems: [
            {
                id: 4,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.ALERTS',
                link: '/pages/ui-alerts',
                parentId: 3
            },
            {
                id: 5,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.BADGES',
                link: '/pages/ui-badges',
                parentId: 3
            },
            {
                id: 6,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.BUTTONS',
                link: '/pages/ui-buttons',
                parentId: 3
            },
            {
                id: 7,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.COLORS',
                link: '/pages/ui-colors',
                parentId: 3
            },
            {
                id: 8,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.CARDS',
                link: '/pages/ui-cards',
                parentId: 3
            },
            {
                id: 9,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.CAROUSEL',
                link: '/pages/ui-carousel',
                parentId: 3
            },
            {
                id: 10,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.DROPDOWNS',
                link: '/pages/ui-dropdowns',
                parentId: 3
            },
            {
                id: 11,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.GRID',
                link: '/pages/ui-grid',
                parentId: 3
            },
            {
                id: 12,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.IMAGES',
                link: '/pages/ui-images',
                parentId: 3
            },
            {
                id: 13,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.TABS',
                link: '/pages/ui-tabs',
                parentId: 3
            },
            {
                id: 14,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.ACCORDION&COLLAPSE',
                link: '/pages/ui-accordions',
                parentId: 3
            },
            {
                id: 15,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.MODALS',
                link: '/pages/ui-modals',
                parentId: 3
            },
            {
                id: 17,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.PLACEHOLDERS',
                link: '/pages/ui-placeholders',
                parentId: 3
            },
            {
                id: 18,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.PROGRESS',
                link: '/pages/ui-progress',
                parentId: 3
            },
            {
                id: 19,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.NOTIFICATIONS',
                link: '/pages/ui-notifications',
                parentId: 3
            },
            {
                id: 20,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.MEDIAOBJECT',
                link: '/pages/ui-media',
                parentId: 3
            },
            {
                id: 21,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.EMBEDVIDEO',
                link: '/pages/ui-embed-video',
                parentId: 3
            },
            {
                id: 22,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.TYPOGRAPHY',
                link: '/pages/ui-typography',
                parentId: 3
            },
            {
                id: 23,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.LISTS',
                link: '/pages/ui-lists',
                parentId: 3
            },
            {
                id: 24,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.GENERAL',
                link: '/pages/ui-general',
                parentId: 3
            },
            {
                id: 25,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.UTILITIES',
                link: '/pages/ui-utilities',
                parentId: 3
            },
        ]
    },
    {
        id: 26,
        label: 'MENUITEMS.ADVANCEUI.TEXT',
        icon: "las la-share-alt",
        subItems: [
            {
                id: 27,
                label: 'MENUITEMS.ADVANCEUI.LIST.SWEETALERT',
                link: '/pages/advance-ui-sweetalerts',
                parentId: 26
            },
            {
                id: 28,
                label: 'MENUITEMS.BOOTSTRAPUI.LIST.OFFCANVAS',
                link: '/pages/ui-offcanvas',
                parentId: 3
            },
            {
                id: 29,
                label: 'MENUITEMS.ADVANCEUI.LIST.SCROLLBAR',
                link: '/pages/advance-ui-scrollbar',
                parentId: 26
            },
            {
                id: 30,
                label: 'MENUITEMS.ADVANCEUI.LIST.SWIPERSLIDER',
                link: '/pages/advance-ui-swiper',
                parentId: 26
            },
            {
                id: 31,
                label: 'MENUITEMS.ADVANCEUI.LIST.RATTINGS',
                link: '/pages/advance-ui-ratings',
                parentId: 26
            },
            {
                id: 32,
                label: 'MENUITEMS.ADVANCEUI.LIST.HIGHLIGHT',
                link: '/pages/advance-ui-highlight',
                parentId: 26
            },
            // {
            //     id: 33,
            //     label: 'MENUITEMS.ADVANCEUI.LIST.SCROLLSPY',
            //     link: '/pages/advance-ui-scrollspy',
            //     parentId: 26
            // }
        ]
    },
    {
        id: 38,
        label: 'MENUITEMS.FORMS.TEXT',
        icon: 'lab la-wpforms',
        subItems: [
            {
                id: 39,
                label: 'MENUITEMS.FORMS.LIST.BASICELEMENTS',
                link: '/pages/forms-elements',
                parentId: 38
            },
            {
                id: 40,
                label: 'MENUITEMS.FORMS.LIST.FORMSELECT',
                link: '/pages/forms-select',
                parentId: 38
            },
            {
                id: 41,
                label: 'MENUITEMS.FORMS.LIST.CHECKBOXS&RADIOS',
                link: '/pages/forms-checkboxs-radios',
                parentId: 38
            },
            {
                id: 42,
                label: 'MENUITEMS.FORMS.LIST.PICKERS',
                link: '/pages/forms-pickers',
                parentId: 38
            },
            {
                id: 43,
                label: 'MENUITEMS.FORMS.LIST.INPUTMASKS',
                link: '/pages/forms-masks',
                parentId: 38
            },
            {
                id: 44,
                label: 'MENUITEMS.FORMS.LIST.ADVANCED',
                link: '/pages/forms-advanced',
                parentId: 38
            },
            {
                id: 45,
                label: 'MENUITEMS.FORMS.LIST.RANGESLIDER',
                link: '/pages/forms-range-sliders',
                parentId: 38
            },
            {
                id: 46,
                label: 'MENUITEMS.FORMS.LIST.VALIDATION',
                link: '/pages/forms-validation',
                parentId: 38
            },
            {
                id: 48,
                label: 'MENUITEMS.FORMS.LIST.EDITORS',
                link: '/pages/forms-editors',
                parentId: 38
            },
            {
                id: 50,
                label: 'MENUITEMS.FORMS.LIST.FORMLAYOUTS',
                link: '/pages/forms-layouts',
                parentId: 38
            },
            {
                id: 50,
                label: 'MENUITEMS.FORMS.LIST.FORMWIZARD',
                link: '/pages/forms-wizard',
                parentId: 38
            },
        ]
    },
    {
        id: 52,
        label: 'MENUITEMS.TABLES.TEXT',
        icon: 'las la-table',
        subItems: [
            {
                id: 53,
                label: 'MENUITEMS.TABLES.LIST.BASICTABLES',
                link: '/pages/tables-basic',
                parentId: 52
            },
            {
                id: 54,
                label: 'MENUITEMS.TABLES.LIST.GRIDJS',
                link: '/pages/tables-gridjs',
                parentId: 52
            }
        ]
    },
    {
        id: 56,
        label: 'MENUITEMS.CHARTS.TEXT',
        icon: 'las la-chart-pie',
        subItems: [
            {
                id: 57,
                label: 'MENUITEMS.CHARTS.LIST.LINE',
                link: '/pages/charts-apex-line',
                parentId: 56
            },
            {
                id: 58,
                label: 'MENUITEMS.CHARTS.LIST.AREA',
                link: '/pages/charts-apex-area',
                parentId: 56
            },
            {
                id: 59,
                label: 'MENUITEMS.CHARTS.LIST.COLUMN',
                link: '/pages/charts-apex-column',
                parentId: 56
            },
            {
                id: 60,
                label: 'MENUITEMS.CHARTS.LIST.BAR',
                link: '/pages/charts-apex-bar',
                parentId: 56
            },
            {
                id: 61,
                label: 'MENUITEMS.CHARTS.LIST.MIXED',
                link: '/pages/charts-apex-mixed',
                parentId: 56
            },
            {
                id: 62,
                label: 'MENUITEMS.CHARTS.LIST.TIMELINE',
                link: '/pages/charts-apex-timeline',
                parentId: 56
            },
            {
                id: 63,
                label: 'MENUITEMS.CHARTS.LIST.CANDLESTICK',
                link: '/pages/charts-apex-candlestick',
                parentId: 56
            },
            {
                id: 64,
                label: 'MENUITEMS.CHARTS.LIST.BOXPLOT',
                link: '/pages/charts-apex-boxplot',
                parentId: 56
            },
            {
                id: 65,
                label: 'MENUITEMS.CHARTS.LIST.BUBBLE',
                link: '/pages/charts-apex-bubble',
                parentId: 56
            },
            {
                id: 66,
                label: 'MENUITEMS.CHARTS.LIST.SCATTER',
                link: '/pages/charts-apex-scatter',
                parentId: 56
            },
            {
                id: 67,
                label: 'MENUITEMS.CHARTS.LIST.HEATMAP',
                link: '/pages/charts-apex-heatmap',
                parentId: 56
            },
            {
                id: 68,
                label: 'MENUITEMS.CHARTS.LIST.TREEMAP',
                link: '/pages/charts-apex-treemap',
                parentId: 56
            },
            {
                id: 69,
                label: 'MENUITEMS.CHARTS.LIST.PIE',
                link: '/pages/charts-apex-pie',
                parentId: 56
            },
            {
                id: 70,
                label: 'MENUITEMS.CHARTS.LIST.RADIALBAR',
                link: '/pages/charts-apex-radialbar',
                parentId: 56
            },
            {
                id: 71,
                label: 'MENUITEMS.CHARTS.LIST.RADAR',
                link: '/pages/charts-apex-radar',
                parentId: 56
            },
            {
                id: 72,
                label: 'MENUITEMS.CHARTS.LIST.POLARAREA',
                link: '/pages/charts-apex-polar',
                parentId: 56
            },
        ]
    },
    {
        id: 73,
        label: 'MENUITEMS.ICONS.TEXT',
        icon: 'las la-gift',
        subItems: [
            {
                id: 74,
                label: 'MENUITEMS.ICONS.LIST.REMIX',
                link: '/pages/icons-remix',
                parentId: 73
            },
            {
                id: 75,
                label: 'MENUITEMS.ICONS.LIST.BOXICONS',
                link: '/pages/icons-boxicons',
                parentId: 73
            },
            {
                id: 76,
                label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
                link: '/pages/icons-materialdesign',
                parentId: 73
            },
            {
                id: 77,
                label: 'MENUITEMS.ICONS.LIST.BOOTSTRAP',
                link: '/pages/icons-bootstrap',
                parentId: 73
            },
            {
                id: 78,
                label: 'MENUITEMS.ICONS.LIST.LINEAWESOME',
                link: '/pages/icons-lineawesome',
                parentId: 73
            }
        ]
    },
    {
        id: 79,
        label: 'MENUITEMS.MAPS.TEXT',
        icon: 'las la-map-marked',
        subItems: [
            {
                id: 80,
                label: 'MENUITEMS.MAPS.LIST.GOOGLE',
                link: '/pages/maps-google',
                parentId: 79
            },
            {
                id: 82,
                label: 'MENUITEMS.MAPS.LIST.LEAFLET',
                link: '/pages/maps-leaflet',
                parentId: 79
            }
        ]
    },
    {
        id: 83,
        label: 'MENUITEMS.MULTILEVEL.TEXT',
        icon: 'las la-share-square',
        subItems: [
            {
                id: 84,
                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.1',
                parentId: 83
            },
            {
                id: 85,
                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.2',
                parentId: 83,
                subItems: [
                    {
                        id: 86,
                        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.1',
                        parentId: 85
                    },
                    {
                        id: 87,
                        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.2',
                        parentId: 85,
                        subItems: [
                            {
                                id: 76,
                                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.LEVEL3.1',
                                parentId: 87
                            },
                            {
                                id: 76,
                                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.LEVEL3.2',
                                parentId: 87,

                            }
                        ]
                    }
                ]
            }
        ]
    },
]
