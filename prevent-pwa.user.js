// ==UserScript==
// @name         prevent-pwa
// @name:zh      阻止pwa应用
// @description  移除manifest以阻止pwa应用
// @namespace    15x15
// @author       15x15
// @version      0.7
// @icon         data:image/svg+xml,<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm.25-9A3.25 3.25 0 0121 6.25v5.772a6.471 6.471 0 00-1.5-.709V10h-4v1.313a6.471 6.471 0 00-1.5.709V10h-4v4h2.022a6.471 6.471 0 00-.709 1.5H10v4h1.313c.173.534.412 1.037.709 1.5H6.25A3.25 3.25 0 013 17.75V6.25A3.25 3.25 0 016.25 3h11.5zm-2.604 12.146a.5.5 0 000 .708l1.647 1.646-1.647 1.646a.5.5 0 00.708.708l1.646-1.647 1.646 1.647a.5.5 0 00.708-.708L18.207 17.5l1.647-1.646a.5.5 0 00-.708-.708L17.5 16.793l-1.646-1.647a.5.5 0 00-.708 0zM8.5 15.5h-4v2.25a1.75 1.75 0 001.606 1.744l.144.006H8.5v-4zm0-5.5h-4v4h4v-4zm0-5.5H6.25A1.75 1.75 0 004.5 6.25V8.5h4v-4zm9.25 0H15.5v4h4V6.25a1.75 1.75 0 00-1.606-1.744L17.75 4.5zM14 4.5h-4v4h4v-4z" fill="%23212121" fill-rule="nonzero"/></svg>
// @match        *://*/*
// @grant        none
// ==/UserScript==

window.addEventListener("load", function () {
  if (navigator.userAgent.indexOf("Mobile") === -1) {
    //document.querySelectorAll('link[rel="manifest"]').remove();
    [...document.querySelectorAll('link[rel="manifest"]')].map((x) => x.remove());
  }
});

window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
});

/*
https://stackoverflow.com/questions/57556321/prevent-pwa-install-prompt-chrome-76-on-desktop
*/
