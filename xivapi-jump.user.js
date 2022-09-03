// ==UserScript==
// @name         xivapijump
// @description
// @namespace    15x15
// @author       15x15
// @version      0.2
// @match        *://*.cafemaker.wakingsands.com/*
// @match        *://*.xivapi.com/*
// @icon         https://cafemaker.wakingsands.com/favicon.ico
// @grant             GM_registerMenuCommand
// ==/UserScript==

(function () {
  "use strict";

  // Your code here...
  function registerMenuCommand() {
    GM_registerMenuCommand("上一页", () => {
      const array = window.location.href.match(/.*\/(\w+)/);
      if (array.length < 2) return;
      const num = Number.parseInt(array[1]);
      window.location.href = window.location.href.replace(num, num - 1);
    });
    GM_registerMenuCommand("下一页", () => {
      const array = window.location.href.match(/.*\/(\w+)/);
      if (array.length < 2) return;
      const num = Number.parseInt(array[1]);
      window.location.href = window.location.href.replace(num, num + 1);
    });
  }
  registerMenuCommand();
})();
