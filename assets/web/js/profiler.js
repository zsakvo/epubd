/*
 * Copyright 2016 Daniel Bateman
 * All rights reserved.
 */
"use strict";

var profiler = function () {

    function getTime() {
        return +new Date();
    }

    var timings = {};

    return {
        start: function start(tag) {
            timings[tag] = getTime();
        },
        end: function end(tag) {
            var time = getTime() - timings[tag];
            console.log(tag + ': ' + time);
        }
    };
}();
//# sourceMappingURL=../../../../maps/profiler.js.map
