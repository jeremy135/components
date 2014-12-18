requirejs.config({
    //baseUrl : "../../../",
    baseUrl : "http://localhost:63343/components/",
    urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
        components: "components",
        vendor: "vendor",

        'amcharts'          : 'vendor/amcharts/amcharts',
        'amcharts.funnel'   : 'vendor/amcharts/funnel',
        'amcharts.gauge'    : 'vendor/amcharts/gauge',
        'amcharts.pie'      : 'vendor/amcharts/pie',
        'amcharts.radar'    : 'vendor/amcharts/radar',
        'amcharts.serial'   : 'vendor/amcharts/serial',
        'amcharts.xy'       : 'vendor/amcharts/xy',
        'amcharts.ru'       : 'vendor/amcharts/lang/ru'

    },


    // Define dependencies
    shim: {

        'amcharts.funnel'   : {
            deps: ['amcharts'],
            exports: 'AmCharts',
            init: function() {
                AmCharts.isReady = true;
            }
        },
        'amcharts.gauge'    : {
            deps: ['amcharts'],
            exports: 'AmCharts',
            init: function() {
                AmCharts.isReady = true;
            }
        },
        'amcharts.pie'      : {
            deps: ['amcharts'],
            exports: 'AmCharts',
            init: function() {
                AmCharts.isReady = true;
            }
        },
        'amcharts.radar'    : {
            deps: ['amcharts'],
            exports: 'AmCharts',
            init: function() {
                AmCharts.isReady = true;
            }
        },
        'amcharts.serial'   : {
            deps: ['amcharts'],
            exports: 'AmCharts',
            init: function() {
                AmCharts.isReady = true;
            }
        },
        'amcharts.xy'       : {
            deps: ['amcharts'],
            exports: 'AmCharts',
            init: function() {
                AmCharts.isReady = true;
            }
        },

        'amcharts.ru'       : {
            deps: ['amcharts'],
            init: function() {
                AmCharts.isReady = true;
            }
        }

    },

    map: {
        '*': {
            'css': 'vendor/require-css/css.min',
            'text': 'vendor/require-text/text',
            'html': 'vendor/require-text/text'
        }
    },

    generateSourceMaps:true,
    preserveLicenseComments:false
});