// ==UserScript==
// @name         jsdelivrCDN
// @description  给github文件加上CDN链接
// @namespace    http://tampermonkey.net/
// @version      0.3
// @author       15x15
// @match        *://*.github.com/*
// @icon         https://www.google.com/s2/favicons?domain=jsdelivr.com
// @grant        none
// ==/UserScript==

function AddCDNButton(){
    const el=document.querySelector( "[data-target='readme-toc.content'] .BtnGroup" );
    if(el){
        if(el.querySelector('#jsdelivrCDN')){return;}
        let link=el.querySelector("a").href;
        link=link.replace(/https:\/\/github\.com\//,'https://cdn.jsdelivr.net/gh/');
        link=link.replace(/\/raw\//,'@');

        const newnode=el.querySelector("a").cloneNode(true);
        newnode.href=link;
        newnode.innerHTML='CDN';
        newnode.id='jsdelivrCDN';
        el.appendChild(newnode);
    }
}

function throttle() {
    if (AddCDNButton._id) {
        clearTimeout(AddCDNButton._id);
    }
    AddCDNButton._id = window.setTimeout(() => {
        AddCDNButton();
        AddCDNButton._id = null;
    }, 1000);
}

(function() {
    'use strict';
    // Your code here...
    AddCDNButton();
    const observer = new MutationObserver(throttle);
    const targetNode = document.querySelector('head');
    const config = { childList: true, subtree: true,attributes: false };
    observer.observe(targetNode, config);
})();
