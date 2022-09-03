// ==UserScript==
// @name         SoulPlusGetKey
// @name:zh      南+提取标题和链接
// @description
// @namespace    15x15
// @author       15x15
// @version      0.5
// @icon         https://www.google.com/s2/favicons?domain=spring-plus.net
// @match        *://*.spring-plus.net/read.php*
// @grant        none
// ==/UserScript==

{
  let href0 = "";

  !(function ajax_fixer() {
    var href = location.href;
    if (href0 != href) {
      var oldDOM = document.getElementById("toptiltle");
      if (oldDOM) {
        oldDOM.parentNode.removeChild(oldDOM);
      }
      soTab_init();
      href0 = href;
    }
    setTimeout(ajax_fixer, 2222);
  })();

  function soTab_init() {
    //加载css
    var dom = document.createElement("style"),
      dom_body = document.getElementsByTagName("body")[0];
    dom.innerHTML = `
    th.r_one a img{zoom:0.5}
    th.r_one a img:hover {transform: scale(2);transition-delay:0.3s;}
    .toptiltle {
    top: 10px;
    left:0;
    right:0;
    margin:0 auto;
    width: 90%;
    padding: 1px;
	position: fixed;
	background-color: #fff;
	opacity: 0.7;
	color: #000;
	z-index: 9999999;
    text-align: center;
    border-style:solid;
    border-width:1px;
    font-size: large;
    }

    .toptiltle:hover {
    opacity: 0.9;
    }

    .lefttip {
    position: fixed;
    left: 10%;
    top: 50%;
    width: 200px;
    -ms-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    padding: 10px;
	background-color: #fff;
	opacity: 0.7;
	color: #000;
	z-index: 9999999;
    text-align: center;
    border-style:solid;
    border-width:2px;
    font-size: large;
    }
    .lefttip:hover {
    opacity: 0.9;
    }

    .righttip {
    position: fixed;
    left: 90%;
    top: 50%;
    width: 200px;
    -ms-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    padding: 10px;
	background-color: #fff;
	opacity: 0.7;
	color: #000;
	z-index: 9999999;
    text-align: center;
    border-style:solid;
    border-width:2px;
    }
    .righttip:hover {
    opacity: 0.9;
    }
    .btn{
    cursor:pointer;
    }
    `;
    dom_body?.appendChild(dom);

    var str = document.getElementById("subject_tpc")?.innerText;

    if (!str || !dom_body) return;

    //生成切换框2
    dom = document.createElement("div");
    dom.id = "lefttip";
    let str1 = str.replace(/[\[\]\(\)\<\>]/g, "$");
    console.log(str1);
    str1 = str1.replace(/^\$|\$$/g, "");
    str1 = str1.replace(/(\s*\$\s*)+/g, "<br/><br/>");
    dom.innerHTML = `<p>${str1}</p>`;
    dom.className = "lefttip";
    dom_body.appendChild(dom);
    //生成切换框3
    let list = document.getElementsByTagName("a");
    dom = document.createElement("div");
    let br = document.createElement("br");
    for (const v of list) {
      if (v.innerText.length && v.href === v.innerText) {
        dom.appendChild(v.cloneNode(true));
        dom.appendChild(br.cloneNode(true));
        dom.appendChild(br.cloneNode(true));
      }
    }
    dom.id = "righttip";
    dom.className = "righttip";
    dom_body.appendChild(dom);
  }
} //end userScript
