/* --------------------------------------------------------------------------
 * File        : config-peity.js
 * Version     : 1.0
 * Author      : indonez
 * Author URI  : http://www.indonez.com
 *
 * Indonez Copyright 2020 All Rights Reserved.
 * -------------------------------------------------------------------------- 
 * javascript handle initialization
    1. Line Chart Jquery
 * -------------------------------------------------------------------------- */

(function($) {

    'use strict';

    let themeApp = {
        //---------- 1. Line Chart Jquery -----------
        theme_line_chart: function() {
            $('.monee-line-chart').peity('line', {
                delimiter: ',',
                fill: '#e7f0fb',
                max: null,
                min: 40,
                stroke: '#4184dd',
                strokeWidth: 2,
                width: '100%',
                height: '91'
            })
        },
        // theme init
        theme_init: function() {
            themeApp.theme_line_chart();
        }
    }


    jQuery(document).ready(function($) {
        themeApp.theme_init();
    });

})(jQuery);