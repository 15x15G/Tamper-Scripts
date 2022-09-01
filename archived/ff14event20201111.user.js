// ==UserScript==
// @name         FF14隼鸦集结计算
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  弹个窗把计算结果显示出来
// @author       15x15
// @match        https://actff1.web.sdo.com/20201111Award/index.html
// @grant        none
// ==/UserScript==

(function () {
  var nn = "";
  $("#suanUp").click(function () {
    var e = document.getElementById("inpu1").value,
      t = document.getElementById("inpu2").value,
      a = document.getElementById("inpu3").value,
      s = document.getElementById("inpu4").value;
    if (0 == e.length || isNaN(e)) e = 0;
    if (0 == t.length || isNaN(t)) t = 0;
    if (0 == a.length || isNaN(a)) a = 0;
    if (0 == s.length || isNaN(s)) s = 0;
    var n = e / 8e5 + t / 1e6 + a / 8e5 + s / 300;
    nn = nn + n + "\n";
    alert(nn);
    //n >= 1 ? $(".sess,.fullpage").fadeIn() : $(".noone,.fullpage").fadeIn()
  });
})();
