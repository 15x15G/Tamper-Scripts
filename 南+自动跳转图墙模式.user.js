// ==UserScript==
// @name         南+自动跳转图墙模式
// @namespace    south-plus
// @version      1.4
// @description  自动跳转图墙模式
// @author       15x15
// @match        *://*.south-plus.net/thread.php*
// @match        *://*.white-plus.net/thread.php*
// @match        *://*.level-plus.net/thread.php*
// @match        *://*.spring-plus.net/thread.php*
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function()
{
    //不跳转的页面
    var json = {
        "page": ["172", "164", "158", "152", "144", "143", "129", "116", "97", "78", "89", "30", "67", "81", "55", "53", "54", "107", "136", "43", "124", "8", "12", "48", "9", "2", "4"]
    }
    var array = GM_getValue("page", json.page);
    console.log(array);
    var str1 = array.join("|");
    console.log(str1)
    var str2 = "thread\\.php\\?fid[-=](" + str1 + ")[-\\.]?";
    var patt2 = new RegExp(str2);
    if (!patt2.test(location.href)) { location.href = location.href.replace("thread", "thread_new") }
    GM_setValue("page", array);
    console.log(str2)

})();