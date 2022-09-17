// ==UserScript==
// @name         Notranslate
// @name:zh-CN   防止翻译代码段和公式
// @description  A tampermonkey script aims to prevent unnecessary translation of code segment and math equations.
// @description:zh-CN  避免文献及博客阅读时代码段与公式被不正确地翻译
// @namespace    15x15
// @author       15x15
// @version      0.7
// @icon         data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"><svg x="44" y="44"><path d="M185.802 105.689h277.06c21.364 0 38.688 17.32 38.688 38.689V462.86c.001 21.366-17.318 38.69-38.687 38.69H280.479l-94.677-395.861z" fill="%23fff"/><path fill="%230084ff" d="M361.15 406.306l-80.671 95.239-31.69-95.239z"/><path d="M361.15 406.306H49.137c-21.364 0-38.688-17.32-38.688-38.69V49.138c0-21.365 17.32-38.689 38.688-38.689h182.387L361.15 406.306z" fill="%2310bafc"/><path d="M462.863 95.24H270.286L241.455 7.197A10.45 10.45 0 00231.524 0H49.137C22.043 0 0 22.043 0 49.138v318.478c0 27.095 22.043 49.138 49.137 49.138h192.115l29.311 88.095a10.449 10.449 0 009.914 7.15h182.384C489.957 512 512 489.957 512 462.862V144.38c0-27.095-22.043-49.14-49.137-49.14zM20.898 367.616V49.138c0-15.571 12.668-28.24 28.239-28.24h174.814l122.783 374.96H49.137c-15.571-.001-28.239-12.67-28.239-28.242zm390.46-126.245c-5.469 11.908-15.308 30.468-31.079 51.099a285.211 285.211 0 01-11.901-16.717c-9.028-13.722-15.237-25.776-19.184-34.381l62.164-.001zm-84.948 0c3.62 8.944 11.118 25.394 24.047 45.165a306.829 306.829 0 0016.206 22.461 294.822 294.822 0 01-19.759 20.226l-28.768-87.852h8.274zm-63.132 175.384h75.328l-54.084 63.85-21.244-63.85zm227.824 46.107c0 15.571-12.668 28.24-28.239 28.24H303.018l65.929-77.834a10.395 10.395 0 002.673-6.961c0-1.378-.266-2.695-.751-3.9l-16.85-51.458a317.52 317.52 0 0026.302-25.839 318.683 318.683 0 0069.799 57.876 10.442 10.442 0 0014.367-3.455c3.013-4.921 1.466-11.354-3.456-14.367a297.884 297.884 0 01-67.082-56.152c23.199-29.342 35.285-55.429 40.202-67.64h30.828c5.77 0 10.449-4.678 10.449-10.449s-4.679-10.449-10.449-10.449h-74.907V202.71c0-5.771-4.679-10.449-10.449-10.449s-10.449 4.678-10.449 10.449v17.763h-57.882l-34.165-104.335h185.734c15.571 0 28.239 12.669 28.239 28.24v318.483h.002z"/><path d="M147.087 286.44c42.444 0 76.974-34.531 76.974-76.974 0-5.771-4.678-10.449-10.449-10.449H154.41c-5.771 0-10.449 4.678-10.449 10.449s4.678 10.449 10.449 10.449h47.777c-4.91 25.944-27.75 45.628-55.1 45.628-30.921 0-56.077-25.156-56.077-56.077s25.156-56.077 56.077-56.077a56.09 56.09 0 0136.343 13.368c4.391 3.742 10.988 3.215 14.73-1.178 3.742-4.394 3.214-10.988-1.179-14.73a77.002 77.002 0 00-49.894-18.358c-42.444 0-76.974 34.531-76.974 76.974 0 42.444 34.529 76.975 76.974 76.975zM201.622 351.434h-4.678c-5.77 0-10.449 4.678-10.449 10.449s4.679 10.449 10.449 10.449h4.678c5.77 0 10.449-4.678 10.449-10.449s-4.679-10.449-10.449-10.449zM163.141 351.434H61.649c-5.77 0-10.449 4.678-10.449 10.449s4.679 10.449 10.449 10.449h101.492c5.77 0 10.449-4.678 10.449-10.449s-4.679-10.449-10.449-10.449z"/></svg><path stroke-width="50" stroke="red" d="M20 20l560 560"/></svg>
// @match        *://*/*
// @grant        none
// ==/UserScript==
// fork from https://github.com/windingwind/notranslate https://github.com/xiandanin/LardMonkeyScripts/blob/master/translation_bypass.js
(function () {
  "use strict";
  const href = [];
  const behaviorList = [
    "pre",
    "#repository-container-header > div:nth-child(1)",
    "summary.btn.css-truncate",
    ".commit-author",
    ".js-navigation-open.link-gray-dark",
    ".Box-title",
    ".BorderGrid-cell > div.mt-3 > a.Link--muted",
    '.BorderGrid-cell > a[data-pjax="#repo-content-pjax-container"] > div > div:first-child',
    ".BorderGrid-cell > ul.list-style-none",
    'div[role="rowheader"]',
    ".prettyprint",
    ".mjx-chtml",
    ".MJXc-display",
    ".MathJax_Display",
    ".math-container",
    ".MathJax",
    ".katex--display",
    ".syntaxhighlighter",
    ".code_cell",
    ".highlight",
    ".Link--primary.js-navigation-open",
  ];
  function addNotranslate() {
    let i = 0;
    behaviorList.forEach((name) => {
      [...document.querySelectorAll(name)].forEach((node) => {
        if (node.className.indexOf("notranslate") === -1) {
          i++;
          node.classList.add("notranslate");
        }
      });
    });
    console.log(`notranslate ${i}`);
  }

  const isMatch = href.some((rx) => rx.test(window.location.href));
  if (isMatch) {
    console.log("notranslate meta");
    var meta = document.createElement("meta");
    meta.name = "google";
    meta.content = "notranslate";
    document.getElementsByTagName("head")[0].appendChild(meta);
    return;
  }
  addNotranslate();

  const observer = new MutationObserver(addNotranslate);
  const targetNode = document.querySelector("head");
  const config = { childList: true, subtree: true, attributes: false };
  observer.observe(targetNode, config);
})();
