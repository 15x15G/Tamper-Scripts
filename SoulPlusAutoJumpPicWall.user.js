// ==UserScript==
// @name         SoulPlusAutoJumpPicWall
// @name:zh      南+自动跳转图墙模式
// @description
// @namespace    15x15
// @author       15x15
// @version      1.5
// @icon         https://www.google.com/s2/favicons?domain=spring-plus.net
// @match        *://*.south-plus.net/thread.php*
// @match        *://*.white-plus.net/thread.php*
// @match        *://*.level-plus.net/thread.php*
// @match        *://*.spring-plus.net/thread.php*
// ==/UserScript==

(function () {
  //不跳转的页面
  var json = {
    page: [
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
      "4",
    ],
  };
  var array = json.page;
  var str1 = array.join("|");
  var str2 = "thread\\.php\\?fid[-=](" + str1 + ")[-\\.]?";
  var patt2 = new RegExp(str2);
  if (!patt2.test(location.href)) {
    location.href = location.href.replace("thread", "thread_new");
  }
})();
