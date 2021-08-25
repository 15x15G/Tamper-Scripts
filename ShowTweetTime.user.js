// ==UserScript==
// @name        ShowTweetTime
// @version      0.2
// @author       15x15
// @match        https://twitter.com/*
// @require      https://cdn.bootcss.com/jquery/3.3.1/jquery.js
// @grant        none
// ==/UserScript==

(function()
{
    'use strict';

    function reset()
    {
        $("time").each(function()
        {
            if (($(this).text()).search('（') == -1)
            {
                let f = new Date($(this).attr("datetime"));
                let s = f.format(" （MM月DD日 hh时mm分）");
                $(this).text($(this).text() + s);
            }
        });
    }
    Date.prototype.format = function(fmt)
    {
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };

        //  获取年份
        // ①
        if (/(y+)/i.test(fmt))
        {
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }

        for (var k in o)
        {
            // ②
            if (new RegExp("(" + k + ")", "i").test(fmt))
            {
                fmt = fmt.replace(
                    RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    }
    reset();
    setInterval(() =>
    {
        reset();
    }, 3000);
})();