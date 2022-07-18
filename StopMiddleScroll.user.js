// ==UserScript==
// @name         StopMiddleScroll
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       15x15
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener("mousedown", function(mouseEvent) {
    if (mouseEvent.button != 1) {
        return;
    }
    mouseEvent.preventDefault();
    mouseEvent.stopPropagation();
});

})();
