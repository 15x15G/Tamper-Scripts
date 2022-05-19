// ==UserScript==
// @name         href-to-cn
// @namespace    http://tampermonkey.net/
// @version      0.5
// @author       15x15
// @match        */en-us/*
// @match        */ja-jp/*
// @match        */ru-ru/*
// @match        */zh-cn/*
// @grant             GM_registerMenuCommand
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    function registerMenuCommand()
    {
        GM_registerMenuCommand('zh-cn', () =>{
            window.location.href = window.location.href.replace(/\/ru-ru\/|\/ja-jp\/|\/en-us\//,'/zh-cn/')
        });
        GM_registerMenuCommand('en-us', () =>{
            window.location.href = window.location.href.replace(/\/ru-ru\/|\/ja-jp\/|\/zh-cn\//,'/en-us/')
        });
    }
    registerMenuCommand();
})();
