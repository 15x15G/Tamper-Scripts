// ==UserScript==
// @name         href-to-cn
// @name:zh      语言跳转菜单
// @description
// @namespace    15x15
// @author       15x15
// @version      0.8
// @icon         data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M26.986 10l.774-.001-2.437-6.133h-.669L22.216 10h.775l.653-1.641h2.691L26.986 10zm-3.057-2.361l1.06-2.666 1.059 2.666h-2.119zM13 31.36H1A.36.36 0 01.64 31V19a.36.36 0 01.36-.36h12a.36.36 0 01.36.36v12a.36.36 0 01-.36.36zm-11.64-.72h11.28V19.36H1.36v11.28zM25 13.36c-3.507 0-6.36-2.853-6.36-6.36S21.493.64 25 .64 31.36 3.493 31.36 7s-2.853 6.36-6.36 6.36zm0-12c-3.11 0-5.64 2.53-5.64 5.64s2.529 5.64 5.64 5.64 5.64-2.53 5.64-5.64S28.11 1.36 25 1.36zM13.924 3.919l-.509.509 2.212 2.212H9a2.363 2.363 0 00-2.36 2.361V17h.72V9.001c0-.905.736-1.641 1.64-1.641h6.631l-2.216 2.216.509.509 3.083-3.083-3.083-3.083zM24.64 15.001v8A1.64 1.64 0 0123 24.639h-6.63l2.212-2.212-.51-.51-3.083 3.084 3.083 3.083.51-.51-2.216-2.215H23a2.362 2.362 0 002.36-2.358v-8h-.72zM10 23.36v-.72H7.36V21.5h-.72v1.14H4v.721h3.993c-.013.631-.156 2.036-1.023 3.064-.65-.619-1.066-1.368-1.202-1.999l-.704.152c.152.702.612 1.599 1.373 2.345-.634.47-1.445.719-2.438.719v.721c1.225 0 2.221-.34 2.997-.974a4.964 4.964 0 003.003.974v-.721a4.303 4.303 0 01-2.469-.767c1.013-1.212 1.173-2.798 1.184-3.514L10 23.36z"/><path fill="none" d="M0 0h32v32H0z"/></svg>
// @include        *en-us*
// @include        *en-ca*
// @include        *ja-jp*
// @include        *ru-ru*
// @include        *zh-cn*
// @include        *zh-tw*
// @include        *zh-sg*
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function () {
  "use strict";

  const rex = /\b(ru-ru|ja-jp|en-us|en-ca|zh-cn|zh-tw|zh-sg)\b/i;
  // Your code here...
  function registerMenuCommand() {
    GM_registerMenuCommand("zh-cn", () => {
      window.location.href = window.location.href.replace(rex, "/zh-cn/");
    });
    GM_registerMenuCommand("en-us", () => {
      window.location.href = window.location.href.replace(rex, "/en-us/");
    });
  }
  registerMenuCommand();
})();
