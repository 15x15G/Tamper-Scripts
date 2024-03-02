// ==UserScript==
// @name         antidebugger
// @namespace    http://tampermonkey.net/
// @version      2023-12-21
// @description  try to take over the world!
// @author       15x15
// @match        https://ff14risingstones.web.sdo.com/pc/index.html
// @icon         https://icons.duckduckgo.com/ip2/sdo.com.ico
// @grant        none
// ==/UserScript==

window.Fun = Function;
window.Function=function(a){
  if(a=="debugger"){
    a ='undefined;'
  }
  return window.Fun(a);
}

Function.prototype.__constructor_back = window.Fun.prototype.constructor;
window.Fun.prototype.constructor = function() {
    if(arguments && typeof arguments[0]==='string'){
        if("debugger" === arguments[0]){
            arguments[0]='undefined;';
//             return
        }
    }
   return Function.prototype.__constructor_back.apply(this,arguments);
}
