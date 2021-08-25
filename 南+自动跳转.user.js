// ==UserScript==
// @name         南+自动跳转
// @namespace    https://jackxhe.net
// @version      0.19
// @description  解决烦人的域名问题，自动跳转到常用域名
// @author       JackXhE
// @run-at       document-start
// @match        *://*.spring-plus.net/*
// @match        *://*.level-plus.net/*
// @match        *://*.white-plus.net/*
// @match        *://*.south-plus.net/*
// @match        *://*.south-plus.org/*
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==


(function()
{
    'use strict';
    //你的常用域名应该存在于下面集合里， /^([\w\.]*)?(你的常用域名$)/i
    const Domains = [
        /^([\w\.]*\.)?(spring-plus.net$)/i,
        /^([\w\.]*\.)?(level-plus.net$)/i,
        /^([\w\.]*\.)?(white-plus.net$)/i,
        /^([\w\.]*\.)?(south-plus.(net|org)$)/i,
        /^([\w\.]*\.)?(imoutolove.me$)/i,
        /^([\w\.]*\.)?(summer-plus.net$)/i,
    ];
    //不跳转的path，防止多次提交无效购买与发帖,虽然基本用不到把.
    const NoJumpPath = ["/job.php", "/post.php", "/userpay.php"]
    var Config = {}
    Config.isJump = true;
    //Config.isJump=false;//不跳转
    Config.isLog = false; //是否打印调试信息
    //Config.isLog = true;
    Config.isDebug = false;
    //Config.isDebug = true;
    //Config.forceDomain=null; //强制指定跳转域名。不建议使用。 Config.forceDomain="level-plus.net";
    Config.forceDomain = "spring-plus.net";

    function checkDomain(s)
    {
        var isCheck = false;
        for (var i = 0; i < Domains.length; i++)
        {
            try
            {
                log("checkDomain:" + Domains[i])
                log("checkDomain:" + Domains[i].test(s))
                if (Domains[i].test(s) == true)
                {
                    isCheck = true;
                    log("checkDomain:True")
                    break;
                    log("checkDomain:True:Break")
                }
            }
            catch (e)
            {

                log("checkDomain:ERR" + e)
            }
            finally
            {
                log("checkDomain:Fin")
            }
        }
        log("checkDomain:Return:" + isCheck)
        return isCheck
    }

    function log(s)
    {
        if (Config.isLog == true || Config.isDebug == true)
        {
            console.log("DOMAIN:" + s);
        }
    }

    function settingDomain()
    {
        var setDomain;
        try { setDomain = prompt("输入你常用的域名如:level-plus.net").trim().toLowerCase(); }
        catch (e) { log("settingDomainERR:" + e) }
        log("settingBefore:" + setDomain);
        if (setDomain != null)
        {
            if (checkDomain(setDomain) == false)
            {
                log("setDomainNoInclude");
                var con = confirm("你输入的域名：" + setDomain + "  不在常用域名集合内，确定吗?\n确定也没什么卵用2333\n目前使用域名：" + JSON.parse(GM_getValue('domainJumpConfig')).usingDomain + "\n点击确定更改域名为：" + window.location.host);
                if (con == false)
                {
                    log("confirm;return:before");
                    return;
                    log("confirm;return:after");
                }
                setDomain = window.location.host
            }

            GM_setValue('domainJumpConfig', JSON.stringify(
            {
                usingDomain: setDomain
            }));
            log(JSON.stringify(GM_getValue('domainJumpConfig')));

        }
        else
        {
            log("settingNull");
        }
    }

    var domainJumpConfig = {};
    var usingDomain = window.location.host;
    log("INIT:Debug:" + Config.isDebug)
    log("INIT:nowDomain:" + window.location.host);
    log("INIT:" + GM_getValue('domainJumpConfig'));

    if (GM_getValue('domainJumpConfig') != null && GM_getValue('domainJumpConfig') != undefined)
    {
        log("GET");
        domainJumpConfig = JSON.parse(GM_getValue('domainJumpConfig'));
        log(JSON.stringify(domainJumpConfig));

        if (domainJumpConfig.jumpRes != undefined && domainJumpConfig.jumpRes != null)
        {
            log("GET:ChcekJumpRes:" + JSON.stringify(domainJumpConfig.jumpRes));

            if (domainJumpConfig.jumpRes.jumpDomain != window.location.host && domainJumpConfig.jumpRes.isSuc == false)
            {

                log("GET:ChcekJumpRes:域名设置可能出错，取消跳转");

                if (confirm("域名设置可能出错，取消跳转\n请重新设置\n(因网络问题访问失败点取消)") == false)
                {

                    return
                }
                settingDomain()
                return;
            }
            var tmp1 = JSON.parse(GM_getValue('domainJumpConfig'));
            tmp1.jumpRes = {
                jumpDomain: usingDomain,
                isSuc: true
            };
            GM_setValue('domainJumpConfig', JSON.stringify(tmp1));
            log("GET:ChcekJumpRes:End:" + GM_getValue('domainJumpConfig'));

        }

        if (Config.isJump == true && checkDomain(domainJumpConfig.usingDomain) == true)
        {
            usingDomain = domainJumpConfig.usingDomain;
            log("getting:" + usingDomain);
        }
        log("GET:" + usingDomain);
        log("GET:END");
    }
    else
    {
        log("SET");
        GM_setValue('domainJumpConfig', JSON.stringify(
        {
            usingDomain: usingDomain
        }));
        log("SET:END" + JSON.parse(GM_getValue('domainJumpConfig')));
        return;
    }


    //usingDomain = domains[0];

    if (Config.forceDomain != null && Config.forceDomain != undefined)
    {
        log("UsingForceDomain");
        usingDomain = Config.forceDomain;

    }
    log("Jump:nowDomain:" + window.location.host);
    log("Jump:usingDomain:" + usingDomain);
    if (window.location.host != usingDomain)
    {
        if (NoJumpPath.includes(window.location.pathname) == true)
        {
            log("NoJumpPath");
            return;
        }
        log("startJump");
        var url = "//" + usingDomain + window.location.pathname + window.location.search;
        log('Jump:To:' + url);
        if (Config.isDebug == false)
        {
            if (/iphone|android|SymbianOS|Windows Phone|ipod/i.test(navigator.userAgent.toLowerCase()) == false)
            {
                //好像Firefox Android 安装Tampermonkey后无效 emmm
                window.stop();
            }
            var a = document.createElement('a');
            a.rel = "noreferrer";
            a.href = url;

            var tmp2 = JSON.parse(GM_getValue('domainJumpConfig'));

            tmp2.jumpRes = {
                jumpDomain: usingDomain,
                isSuc: false
            };
            log("JumpRes:" + JSON.stringify(tmp2))
            GM_setValue('domainJumpConfig', JSON.stringify(tmp2));

            a.click();
        }
    }
    else
    {
        log("NoNeedJump");
    }





    function addSettingPage()
    {
        if (location.pathname != "/profile.php")
        {
            return;
        }
        var setMenu = document.getElementById("set-menu");
        var jumpSet = document.createElement("a");
        jumpSet.text = "域名跳转设置";
        jumpSet.href = "javascript:void(0);"
        var tmp = document.createElement("li");
        tmp.append(jumpSet);
        setMenu.append(tmp);
        jumpSet.onclick = function(e)
        {
            settingDomain()
        }


    }

    window.onload = function()
    {

        addSettingPage();
    }








})();