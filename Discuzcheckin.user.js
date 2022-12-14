// ==UserScript==
// @name         Discuzcheckin
// @name:zh-CN   Discuz签到
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       15x15
// @match        https://gmgard.com/
// @match        https://www.tsdm39.net/plugin.php?id=dsu_paulsign:sign
// @match        http://www.txtnovel.pro/plugin.php*
// @icon         https://icons.duckduckgo.com/ip2/tsdm39.net.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if(window.location.href.includes('gmgard')){
        签到(document.getElementById('checkin'));
        return;
    }
    document.querySelector('#shuai_s').checked=true

    if(document.querySelector('#qiandao > table.tfm > tbody > tr:nth-child(1) > td > label:nth-child(2) > input[type=radio]')){
        document.querySelector('#qiandao > table.tfm > tbody > tr:nth-child(1) > td > label:nth-child(2) > input[type=radio]').checked=true
    }

    showWindow('qwindow', 'qiandao', 'post', '0')


    // Your code here...
})();
