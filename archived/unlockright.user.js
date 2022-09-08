// ==UserScript==
// @name         unlockright
// @name:zh      解除右键限制
// @description
// @namespace    15x15
// @author       15x15
// @version      0.3
// @icon         data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 299.997 299.997"><path d="M134.437 161.482c-8.613 0-15.598 6.982-15.598 15.598 0 5.778 3.149 10.807 7.817 13.502v17.346h15.562v-17.346c4.668-2.695 7.817-7.726 7.817-13.502 0-8.616-6.985-15.598-15.598-15.598z"/><path d="M149.996 0C67.157 0 .001 67.158.001 149.997c0 82.837 67.156 150 149.995 150s150-67.163 150-150C299.996 67.156 232.835 0 149.996 0zm102.947 134.436h-25.936v-27.915c0-13.108-10.665-23.775-23.773-23.775-13.111 0-23.775 10.665-23.775 23.775v25.321h1.063c9.734 0 17.626 7.892 17.626 17.629v56.921c0 9.736-7.892 17.629-17.626 17.629H88.349c-9.734 0-17.626-7.892-17.626-17.629v-56.924c0-9.736 7.892-17.629 17.626-17.629h65.174V106.52c0-27.409 22.302-49.711 49.711-49.711s49.709 22.3 49.709 49.711v27.916z"/></svg>
// @match        http://59.110.175.37:5000/
// @require      https://code.jquery.com/jquery-2.1.4.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery-toast-plugin/1.3.1/jquery.toast.min.js
// @resource     toastCss https://cdnjs.cloudflare.com/ajax/libs/jquery-toast-plugin/1.3.1/jquery.toast.min.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

function aaa() {
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
  $.toast({
    text: "解除限制成功啦！",
    hideAfter: 1000,
  });
}

const toastCss = GM_getResourceText("toastCss");
GM_addStyle(toastCss);
setTimeout(aaa, 500);
