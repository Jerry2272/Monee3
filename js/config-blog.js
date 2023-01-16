/* --------------------------------------------------------------------------
 * File        : config-blog.js
 * Version     : 1.0
 * Author      : indonez
 * Author URI  : http://www.indonez.com
 *
 * Indonez Copyright 2020 All Rights Reserved.
 * -------------------------------------------------------------------------- 
 * javascript handle initialization
    1. Media player from Plyr.io
 * -------------------------------------------------------------------------- */

(function($) {

    'use strict';

    let themeApp = {
        //----------- 1. Media player from Plyr.io -----------
        theme_plyrMedia: function() {
            let media = Plyr.setup('.media');
        },
        // theme init
        theme_init: function() {
            themeApp.theme_plyrMedia();
        }
    }

    jQuery(document).ready(function($) {
        themeApp.theme_init();
    });

})(jQuery);