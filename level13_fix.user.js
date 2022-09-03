// ==UserScript==
// @name         level13_fix
// @description  fix level13 hidden element
// @namespace    15x15
// @author       15x15
// @version      0.2
// @match        https://nroutasuo.github.io/level13/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nroutasuo.github.io
// @grant        GM_addElement
// ==/UserScript==

(function () {
  var tag = document.createElement("style");

  tag.innerHTML = `
        [style*="overflow: hidden"]{
            overflow: visible !important;
        }`;
  var hookTag = document.getElementsByTagName("script")[0];
  hookTag.parentNode.insertBefore(tag, hookTag);
})();
