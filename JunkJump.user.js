// ==UserScript==
// @name         JunkJump
// @name:zh      翻译垃圾再利用
// @description
// @namespace    15x15
// @author       no1xsyzy 15x15
// @version      0.5.1
// @icon         data:image/svg+xml,<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path fill="%23444" d="M8 3.1l1.4 2.2-1.6 1.1 1.3.3 2.8.6.6-2.7.4-1.4-1.8 1.1-2-3.3H6.9L4.3 5.3l1.7 1zM16 12l-2.7-4.3-1.7 1 2 3.3H11v-2l-3 3 3 3v-2h3.7zM2.4 12l1.4-2.3 1.7 1.1-.9-4.2-2.8.7-1.3.3 1.6 1L0 12l1.3 2H7v-2z"/></svg>
// @match        *://*.stackexchange.com/search?q=*
// @match        *://stackoverflow.com/search?q=*
// @match        *://xbuba.com/questions/*
// @match        *://www.itranslater.com/qa/details/*
// @match        *://itranslater.com/qa/details/*
// @match        *://codeday.me/bug/*
// @match        *://www.codenong.com/*
// @match        *://codenong.com/*
// @match        *://ask.helplib.com/others/*
// @match        *://hant.ask.helplib.com/others/*
// @match        *://qa.1r1g.com/sf/ask/*
// @match        *://www.ojit.com/article/*
// @match        *://www.thinbug.com/q/*
// @match        *://*.stackovernet.xyz/cn/q/*
// @match        *://qastack.cn/*/*
// @match        *://*.voidcc.com/question/*
// @grant        none
// ==/UserScript==

// fork from https://greasyfork.org/zh-TW/scripts/389270

const HASHTAG = "#__translate_junk_jump";

(function () {
  "use strict";

  try {
    switch (
      window.location.hostname.split(".").slice(-2).join(".") // match second-level domain
    ) {
      case "stackexchange.com":
      case "stackoverflow.com":
        if (window.location.hash === HASHTAG) {
          // assure hash tag for jump indication
          let g = document.querySelectorAll(`.search-result`);
          if (g.length === 1) {
            // assure only one result
            let link = g[0].querySelector(`a.question-hyperlink`);
            window.location.href = link.href;
          } else {
            let searchQuery = document.querySelector(`input.s-input`).value;
            for (let gg of g) {
              if (gg.querySelector("a.question-hyperlink").getAttribute("title") === searchQuery) {
                window.location.href = gg.querySelector("a.question-hyperlink").getAttribute("href");
                break;
              }
            }
          }
        }
        break;
      case "xbuba.com":
      case "ojit.com":
        window.location.href = document.querySelector(`a[href^="https://stackoverflow.com/q"]`).getAttribute("href");
        break;
      case "itranslater.com":
        window.location.href = document.querySelector(`a[href^="https://stackoverflow.com:/q"]`).getAttribute("href");
        break;
      case "codeday.me":
        window.location.href = document.querySelector(`span.article-es-url:nth-child(4) > a:nth-child(1)`).getAttribute("href");
        break;
      case "codenong.com":
        if (window.location.pathname === "/") {
          throw TypeError;
        }
        window.location.href = "https://stackoverflow.com/q" + window.location.pathname;
        break;
      case "helplib.com":
        window.location.href = "https://stackoverflow.com/search?q=" + document.querySelector(`a.main_title`).getAttribute("oldtitle") + HASHTAG;
        break;
      case "1r1g.com":
        window.location.href = "https://stackoverflow.com/q/" + (+/\d+/.exec(window.location.pathname)[0] - 31) / 70;
        break;
      case "thinbug.com":
        window.location.href = "https://stackoverflow.com" + window.location.pathname;
        break;
      case "stackovernet.xyz":
        var sub = window.location.hostname.split(".")[0];
        window.location.href = `https://${sub}.stackexchange.com/search?q=` + document.querySelector(`h1`).innerHTML + HASHTAG;
        break;
      case "qastack.cn":
        var domain = document.querySelector(`small>a:last-child`).hostname;
        window.location.href = `https://${domain}/q/${window.location.pathname.split("/")[2]}`;
        break;
      case "voidcc.com":
        window.location.href = document.querySelector(
          "#wrap > div > div:nth-child(2) > div.col-lg-9.col-md-8.col-sm-7 > div > div:nth-child(4) > article > div.post-offset > div > div > p:nth-child(1) > span > a"
        ).href;
        break;
      default:
        throw Error;
    }
  } catch (e) {
    console.log("unknown source");
  }
})();
