// ==UserScript==
// @name         antilink关闭链接
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       15x15
// @match        https://www.tsdm39.net/plugin.php?id=dsu_paulsign:sign
// @match        https://www.tsdm39.net/plugin.php?id=np_cliworkdz:work
// @match        *.stackoverflow.com/questions/*
// @icon         https://www.google.com/s2/favicons?domain=tsdm39.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    jQuery('.qdsmile a').each((i,item)=>{item.removeAttribute('href')})
    jQuery('#advids a').each((i,item)=>{item.removeAttribute('href')})
    jQuery('.question-hyperlink').each((i,item)=>{item.removeAttribute('href')})

    // Your code here...
})();
