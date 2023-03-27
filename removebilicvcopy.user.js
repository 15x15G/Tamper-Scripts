// ==UserScript==
// @name         remove bilibili cv copy
// @name:zh-CN   移除B站专栏复制注入
// @namespace    15x15
// @version      0.1.1
// @description  移除B站专栏复制注入
// @author       15x15
// @match        *://*.bilibili.com/read/cv*
// @icon         https://icons.duckduckgo.com/ip2/bilibili.com.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let dom = document.getElementById("article-content");
    dom.addEventListener("copy",function(e){e.stopPropagation();},true)
    // chrome debug console only:
    //let listener =getEventListeners(dom)["copy"][0];
    //dom.removeEventListener("copy",listener.listener,listener.useCapture)
})();
