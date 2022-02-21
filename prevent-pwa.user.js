// ==UserScript==
// @name         移除manifest以阻止pwa应用
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       15x15
// @include         http://*
// @include         https://*
// @grant        none
// ==/UserScript==

window.addEventListener("load", function() {
  if (navigator.userAgent.indexOf('Mobile') === -1) {
    //document.querySelectorAll('link[rel="manifest"]').remove();
    [...document.querySelectorAll('link[rel="manifest"]')].map(x => x.remove());
  }
});

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
});

/*
https://stackoverflow.com/questions/57556321/prevent-pwa-install-prompt-chrome-76-on-desktop
*/
