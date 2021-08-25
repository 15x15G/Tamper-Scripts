// ==UserScript==
// @name         各种跳转
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       15x15
// @match        *.scpwiki.com/*
// @match        *.api.weibo.cn/*
// @grant        none
// ==/UserScript==

(function()
{
    'use strict';
    location.href = location.href.replace("www.scpwiki.com", "scp-wiki.wikidot.com")
    location.href = location.href.replace(/https:\/\/share\.api\.weibo\.cn\/share\/\d+\.html\?weibo_id=/, "https://m.weibo.cn/detail/")

    // Your code here...
})();