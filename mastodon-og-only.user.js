// ==UserScript==
// @name         mastodon-og-only
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       15x15
// @include      /^https?://.*\..*/\@.*$/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mastodon.social
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function() {
    'use strict';
    function handleClick() {
        let retoots = document.getElementsByClassName("entry h-cite entry-reblog");
        for (let r of retoots) {
            let style = r.style.display;
            r.style.display = style == "none" ? "block" : "none";
        };
    }
    function registerMenuCommand()
    {
        GM_registerMenuCommand('只看原创', () =>{
            handleClick();
        });
    }
    registerMenuCommand();


})();
