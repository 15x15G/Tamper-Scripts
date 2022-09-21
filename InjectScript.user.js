// ==UserScript==
// @name         InjectScript
// @name:zh      注入脚本
// @description
// @namespace    15x15
// @author       15x15
// @version      0.3
// @icon         data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M128 0c-17.6 0-32 14.4-32 32v448c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V128L352 0H128z" fill="%23e2e5e7"/><path d="M384 128h96L352 0v96c0 17.6 14.4 32 32 32z" fill="%23b0b7bd"/><path fill="%23cad1d8" d="M480 224l-96-96h96z"/><path d="M416 416c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V256c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v160z" fill="%23576d7e"/><path d="M193.744 303.152c0-10.752 16.896-10.752 16.896 0v50.528c0 20.08-9.6 32.24-31.712 32.24-10.88 0-19.968-2.96-27.888-13.168-6.528-7.808 5.744-19.056 12.4-10.88 5.376 6.656 11.12 8.192 16.752 7.92 7.168-.256 13.44-3.456 13.568-16.112v-50.528h-.016zm36.528 11.504c2.944-24.816 40.416-29.28 58.08-15.712 8.704 7.024-.512 18.16-8.192 12.528-9.472-6.016-30.96-8.832-33.648 4.464-3.456 20.992 52.192 8.976 51.296 42.992-.896 32.496-47.968 33.264-65.632 18.672-4.224-3.44-4.096-9.056-1.792-12.528 3.328-3.312 7.024-4.464 11.392-.896 10.48 7.168 37.488 12.544 39.408-5.648-1.664-18.912-54.88-7.52-50.912-43.872z" fill="%23fff"/><path d="M400 432H96v16h304c8.8 0 16-7.2 16-16v-16c0 8.8-7.2 16-16 16z" fill="%23cad1d8"/></svg>
// @match        *://*/*
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function () {
  "use strict";

  function Injectjquery() {
    var tag = document.createElement("script");
    tag.src = "https://code.jquery.com/jquery.min.js";
    tag.type = "text/javascript";
    tag.async = "true";
    var hookTag = document.getElementsByTagName("script")[0];
    hookTag.parentNode.insertBefore(tag, hookTag);
  }
  function Unlockright1() {
    function addlistener(string) {
      var event = "on" + string;
      if (window.addEventListener) {
        window.addEventListener(
          string,
          function (f) {
            for (var g = f.originalTarget; g; g = g.parentNode) {
              g[event] = null;
            }
          },
          true
        );
      }
      window[event] = null;
      document[event] = null;
      if (document.body) {
        document.body[event] = null;
      }
    }
    addlistener("contextmenu");
    addlistener("click");
    addlistener("mousedown");
    addlistener("mouseup");
    addlistener("selectstart");
  }
  function Unlockright2() {
    function t(e) {
      e.stopPropagation();
      e.stopImmediatePropagation && e.stopImmediatePropagation();
    }
    document.querySelectorAll("*").forEach((e) => {
      "none" === window.getComputedStyle(e, null).getPropertyValue("user-select") && e.style.setProperty("user-select", "text", "important");
    });
    ["copy", "cut", "contextmenu", "selectstart", "mousedown", "mouseup", "mousemove", "keydown", "keypress", "keyup"].forEach(function (e) {
      document.documentElement.addEventListener(e, t, {
        capture: !0,
      });
    });
  }
  function CheckP() {
    //https://gist.github.com/JoeyBurzynski/a84e3b865ae18985fd5166c282dc3bfa
    document.body.appendChild(document.createElement("div")).innerHTML = '<iframe id="temoin" style="display:none"></iframe>';
    Object.keys(window)
      .filter((a) => !(a in window.frames[window.frames.length - 1]))
      .sort()
      .forEach((a, i) => console.log(i, a, window[a]));
    document.body.removeChild(document.querySelectorAll("#temoin")[0].parentNode);
    console.log("done");
  }
  GM_registerMenuCommand("Jquery", Injectjquery);
  GM_registerMenuCommand("解锁1", Unlockright1);
  GM_registerMenuCommand("解锁2", Unlockright2);
  GM_registerMenuCommand("检查变量", CheckP);
})();
