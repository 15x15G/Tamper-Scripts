// ==UserScript==
// @name         解锁右键+限制
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        http://59.110.175.37:5000/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=175.37
// @require https://code.jquery.com/jquery-2.1.4.min.js
// @resource     toastCss https://cdnjs.cloudflare.com/ajax/libs/jquery-toast-plugin/1.3.1/jquery.toast.min.css
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery-toast-plugin/1.3.1/jquery.toast.min.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

function aaa() {
    function t(e) {
        e.stopPropagation();
        e.stopImmediatePropagation && e.stopImmediatePropagation()
    }
    document.querySelectorAll("*").forEach(e =>{
        "none" === window.getComputedStyle(e, null).getPropertyValue("user-select") && e.style.setProperty("user-select", "text", "important")
    });
    ["copy", "cut", "contextmenu", "selectstart", "mousedown", "mouseup", "mousemove", "keydown", "keypress", "keyup"].forEach(function(e) {
        document.documentElement.addEventListener(e, t, {
            capture: !0
        })
    });
    $.toast({
        text: '解除限制成功啦！',
        hideAfter: 1000
    });
}

const toastCss = GM_getResourceText('toastCss');
GM_addStyle(toastCss);
setTimeout(aaa,500)
