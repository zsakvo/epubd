/*
 * Copyright 2016 Daniel Bateman
 * All rights reserved.
 */
"use strict";

var LithiumThemes = function () {

    /** WebKit allows overriding text color through a vendor specific attribute. */
    var WEBKIT_COLOR_FIX = "-webkit-text-fill-color: currentcolor !important;";

    var styleElement = void 0;

    function init() {
        styleElement = document.getElementById('__LithiumThemeStyle');
        styleElement.dataset.excludeFromFootnote = true;
    }

    function intToHexColor(color) {
        var hex = color.toString(16);
        while (hex.length < 6) {
            hex = "0" + hex;
        }
        return hex;
    }

    function set(theme) {
        var css = "";
        if (theme) {
            css += "body {";
            css += "background-color: #" + intToHexColor(theme.backgroundColor) + " !important;";
            css += "}";
            css += "* {";
            css += "background-color: transparent !important;";
            css += "color: #" + intToHexColor(theme.textColor) + " !important;" + WEBKIT_COLOR_FIX;
            css += "}";
            css += "a, a:link, a:visited, a:hover, a * {";
            css += "color: #" + intToHexColor(theme.linkColor) + " !important;" + WEBKIT_COLOR_FIX;
            css += "}";
        }
        styleElement.innerText = css;

        LithiumAnnotations.onThemeApplied(theme);
    }

    function getCss() {
        return styleElement.innerText;
    }

    document.addEventListener('DOMContentLoaded', function () {
        init();
    });

    return {
        set: set,
        getCss: getCss
    };
}();
//# sourceMappingURL=../../../../maps/themes.js.map
