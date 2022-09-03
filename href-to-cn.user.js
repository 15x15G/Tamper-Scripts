// ==UserScript==
// @name         href-to-cn
// @name:cn      语言跳转菜单
// @description
// @namespace    15x15
// @author       15x15
// @version      0.6
// @match        *en-us*
// @match        *en-ca*
// @match        *ja-jp*
// @match        *ru-ru*
// @match        *zh-cn*
// @match        *zh-tw*
// @match        *zh-sg*
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function () {
  "use strict";

  const rex = /\b(ru-ru|ja-jp|en-us|en-ca|zh-cn|zh-tw|zh-sg)\b/i;
  // Your code here...
  function registerMenuCommand() {
    GM_registerMenuCommand("zh-cn", () => {
      window.location.href = window.location.href.replace(rex, "/zh-cn/");
    });
    GM_registerMenuCommand("en-us", () => {
      window.location.href = window.location.href.replace(rex, "/en-us/");
    });
  }
  registerMenuCommand();
})();
