// ==UserScript==
// @name         href-to-cn
// @namespace    http://tampermonkey.net/
// @version      0.3
// @author       15x15
// @match        */en-us/*
// @match        */ja-jp/*
// @grant             GM_registerMenuCommand
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    function registerMenuCommand()
    {
        GM_registerMenuCommand('zh-cn', () =>{
            window.location.href = window.location.href.replace(/\/ja-jp\/|\/en-us\//,'/zh-cn/'))
        });
    }
    registerMenuCommand();
})();
