// ==UserScript==
// @name         read t.cn header
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       15x15
// @match        *://t.cn/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if(document.querySelector('.text').innerHTML.search('停止访问')>-1){
        const req = new XMLHttpRequest();
        req.open('GET', document.location, false);
        req.send(null);
        const json=getResponseHeaderMap(req);
        document.querySelector('.text').innerHTML+='\n'+json.location
    }
})();

function getResponseHeaderMap(xhr) {
  const headers = {};
  xhr.getAllResponseHeaders()
      .trim()
      .split(/[\r\n]+/)
      .map(value => value.split(/: /))
      .forEach(keyValue => {
        headers[keyValue[0].trim()] = keyValue[1].trim();
      });
  return headers;
}
