// ==UserScript==
// @name         SoulPlusBanList
// @name:zh      南+黑名单
// @description
// @namespace    15x15
// @author       15x15
// @version      0.3
// @icon         https://www.google.com/s2/favicons?domain=spring-plus.net
// @match        https://spring-plus.net/thread_new.php?fid-173-page-*.html
// @match        https://spring-plus.net/thread_new.php?fid=173&page=*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  var dom = document.querySelector("#thread_img > div > ul");
  for (let item of dom.children) {
    if (item.innerHTML.search(/60c54a3f|920a0a18|c74d84ea|huihuitao|冲鸭冲鸭|63a4c28f|c0ffeb55|情之一字|DDMr/) > -1) {
      item.hidden = true;
    }
  }
})();
