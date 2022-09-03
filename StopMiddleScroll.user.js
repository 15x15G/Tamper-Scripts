// ==UserScript==
// @name         StopMiddleScroll
// @name:zh      禁用中键自动滚动
// @description
// @namespace    15x15
// @author       15x15
// @version      0.2
// @icon         data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167 167"><path d="M93.6 104v31.2h20.8l-31.2 31.2L52 135.2h20.8V104zM72.8 62.4V31.2H52L83.2 0l31.2 31.2H93.6v31.2zM62.4 93.6H31.2v20.8L0 83.2 31.2 52v20.8h31.2zM104 72.8h31.2V52l31.2 31.2-31.2 31.2V93.6H104z"/><path d="M0 83.875c0 46.249 37.626 83.875 83.875 83.875s83.875-37.626 83.875-83.875S130.125 0 83.875 0 0 37.626 0 83.875zm83.875 68.876C45.897 152.751 15 121.854 15 83.875c0-16.292 5.698-31.272 15.191-43.078l96.762 96.762c-11.806 9.493-26.785 15.192-43.078 15.192zm68.875-68.876c0 16.292-5.698 31.272-15.19 43.078L40.797 30.191C52.603 20.698 67.583 15 83.875 15c37.978 0 68.875 30.897 68.875 68.875z" fill="red"/></svg>
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  document.addEventListener("mousedown", function (mouseEvent) {
    if (mouseEvent.button != 1) {
      return;
    }
    mouseEvent.preventDefault();
    mouseEvent.stopPropagation();
  });
})();
