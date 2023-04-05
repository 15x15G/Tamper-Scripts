// ==UserScript==
// @name         Discuzcheckin
// @name:zh-CN   Discuz签到
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       15x15
// @match        https://gmgard.com/
// @match        https://www.tsdm39.net/plugin.php?id=dsu_paulsign:sign
// @match        http://www.txtnovel.pro/plugin.php*
// @match        https://*.yamibo.com/
// @match        https://*.hifini.com/*
// @match        https://masiro.me/admin/wishingPondIndex
// @icon         https://icons.duckduckgo.com/ip2/tsdm39.net.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if(window.location.href.includes('hifini') && $("#sign").text()=="签到"){
        $("#sg_sign").click();
    }
    else if(window.location.href.includes('yamibo') && document.querySelector('#nv_forum > div.oyheader > div > div > ul.header-tool.y > li > a:nth-child(3)')?.innerHTML.includes("签到")==true){
        var a = document.querySelector('#nv_forum > div.oyheader > div > div > ul.header-tool.y > li > a:nth-child(3)').href
        window.location.href=a
        return;
    }
    else if(window.location.href.includes('gmgard')){
        签到(document.getElementById('checkin'));
        return;
    }
    else if(window.location.href.includes('plugin.php')){
        document.querySelector('#shuai_s').checked=true;

        if(document.querySelector('#qiandao > table.tfm > tbody > tr:nth-child(1) > td > label:nth-child(2) > input[type=radio]')){
            document.querySelector('#qiandao > table.tfm > tbody > tr:nth-child(1) > td > label:nth-child(2) > input[type=radio]').checked=true;
        }

        showWindow('qwindow', 'qiandao', 'post', '0');
        return;
    }
    else if(window.location.href.includes('masiro.me/admin/wishingPondIndex')){
      $.ajax({
        type: 'post',
        url: '/admin/gachiyaWishingPond',
        dataType: 'json',
        data: { 'wp_id': 1, 'cost': NaN },
        success: function (data) {
          if (data.code == 1) {
            showND(data.html);
            $('.yue').html('余额:' + data.money);
          } else {
            layer.msg(data.msg, { icon: 2 });
          }
        },
        error: function (data) {
          if (data.code == 1) {
            showND(data.html);
            $('.yue').html('余额:' + data.money);
          } else if (data.code == -1) {
            layer.msg(data.msg, { icon: 2 });
          } else {
            layer.msg('网络错误，稍后重试!', { icon: 2 });
          }
        }
      })
    }
})();
