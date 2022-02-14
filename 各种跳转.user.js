// ==UserScript==
// @name         各种跳转
// @namespace    http://tampermonkey.net/
// @version      0.2
// @author       15x15
// @match        *.scpwiki.com/*
// @match        share.api.weibo.cn/*weibo_id
// @grant        none
// ==/UserScript==

(function()
{
    'use strict';
   // location.href = location.href.replace("www.scpwiki.com", "scp-wiki.wikidot.com")
   // location.href = location.href.replace(/https:\/\/share\.api\.weibo\.cn\/share\/\d+\.html\?weibo_id=/, "https://m.weibo.cn/detail/")
   
    if(location.href.match("scpwiki")){
       location.href = location.href.replace("www.scpwiki.com", "scp-wiki.wikidot.com");
    }
    else if(location.href.match("api.weibo.cn")){
        location.href = location.href.replace(/https:\/\/share\.api\.weibo\.cn\/share\/\d+\.html\?weibo_id=/, "https://m.weibo.cn/detail/")
    }
    // Your code here...
})();
