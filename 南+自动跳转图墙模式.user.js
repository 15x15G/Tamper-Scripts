// ==UserScript==
// @name         南+自动跳转图墙模式
// @namespace    south-plus
// @version      1.3
// @description  自动跳转图墙模式
// @author       15x15
// @match        *://*.south-plus.net/thread.php*
// @match        *://*.white-plus.net/thread.php*
// @match        *://*.level-plus.net/thread.php*
// @match        *://*.spring-plus.net/thread.php*
// @grant GM_setValue
// @grant GM_getValue
// ==/UserScript==

(function () {

    var array=GM_getValue("page",json);
    var str2="thread\\.php\\?fid[-=]("+array.join("|")+")[-\\.]?";

    var patt2 = new RegExp(str2);
    if(!patt2.test(location.href))
    {location.href=location.href.replace("thread","thread_new")}
    GM_setValue("page",array);
    console.log(str2)

})();


var json={
    "page": [
        "172",
        "164",
        "158",
        "152",
        "144",
        "143",
        "129",
        "116",
        "97",
        "78",
        "89",
        "30",
        "36",
        "67",
        "81",
        "55",
        "53",
        "54",
        "107",
        "136",
        "43",
        "124",
        "8",
        "12",
        "48",
        "9",
        "2",
        "4"
    ]
}
