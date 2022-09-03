// ==UserScript==
// @name         mastodon-og-only
// @name:zh      只看原创嘟文
// @description
// @namespace    15x15
// @author       15x15
// @version      0.4
// @match        *://*/@*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mastodon.social
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function () {
  "use strict";
  function handleClick() {
    let retoots = document.getElementsByClassName("entry h-cite entry-reblog");
    for (let r of retoots) {
      let style = r.style.display;
      r.style.display = style == "none" ? "block" : "none";
    }
  }
  function registerMenuCommand() {
    GM_registerMenuCommand("只看原创", () => {
      handleClick();
    });
  }
  registerMenuCommand();
})();
