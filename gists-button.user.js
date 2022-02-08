// ==UserScript==
// @name         gists button
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       15x15
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here..
    const content=`<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-package UnderlineNav-octicon hide-sm">
    <path fill-rule="evenodd" d="M1.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25H1.75zM0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0114.25 16H1.75A1.75 1.75 0 010 14.25V1.75zm9.22 3.72a.75.75 0 000 1.06L10.69 8 9.22 9.47a.75.75 0 101.06 1.06l2-2a.75.75 0 000-1.06l-2-2a.75.75 0 00-1.06 0zM6.78 6.53a.75.75 0 00-1.06-1.06l-2 2a.75.75 0 000 1.06l2 2a.75.75 0 101.06-1.06L5.31 8l1.47-1.47z"></path>
</svg>
      Gists`
    const dom=document.querySelector("[aria-label='User profile']")
    if(dom){
        const a = document.createElement('a')
        a.className='UnderlineNav-item'
        a.innerHTML=content
        a.href='https://gist.github.com'+location.pathname
        dom.appendChild(a)
    }
})();
