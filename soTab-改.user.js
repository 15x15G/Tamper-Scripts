// ==UserScript==
// @name                soTab - Search Engine Switcher
// @name:zh-CN          soTab-改 一键切换搜索
// @description         Add links to each other in search engines. Including multiple search modes.
// @description:zh-CN   在常用的搜索引擎页面中添加互相切换的按钮，包括图片、视频、知道、学术搜索。
// @description:zh-TW   在常用的搜索引擎頁面中添加互相切換的按鈕，包括圖片、視頻、知道、學術搜索。
// @namespace           15x15
// @author              Moshel,15x15
// @homepageURL         http://hzy.pw/p/1849
// @supportURL          https://github.com/h2y/link-fix
// @icon                data:image/png;base64,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
// @license             GPL-3.0

// @match               *://*.baidu.com/*
// @exclude             *.baidu.com/link?*
// @match               *://*.google.com/*
// @grant               none
// @run-at              document_end

// @date                10/30/2015
// @modified            05/04/2017
// @version             1.4.4
// ==/UserScript==

{
  let href0 = "";

  !(function ajax_fixer() {
    var href = location.href;
    if (href0 != href) {
      //var oldDOM = document.getElementById('soTab');
      if (document.getElementById("soTab")) {
      } else {
        soTab_init();
      }
      href0 = href;
    }
    setTimeout(ajax_fixer, 2222);
  })();

  function soTab_init() {
    if (top != window) {
      console.log("soTab! not top window");
      return;
    }

    //判断搜索引擎，将仅使用hostname适配
    var site = ["baidu", "google"],
      siteName = ["百度", "谷歌"],
      siteID = -1;
    for (var i = 0; i < site.length; i++) {
      if (site[i] && location.hostname.indexOf(site[i]) >= 0) {
        siteID = i;
        break;
      }
    }
    if (siteID == -1) {
      console.log("soTab can't match site.");
      return;
    }

    //判断搜索类型，使用href适配
    var kind = [];
    switch (siteID) {
      case 0:
        kind = ["www.baidu", "image.baidu", "zhidao.baidu.com/search", "v.baidu", "xueshu.baidu.com/s"];
        break;
      case 1: //google
        kind = ["", "tbm=isch", "", "tbm=vid", "scholar.google"];
        break;
    }
    //0:normal  1:pic  2:zhidao  3:video  4:xueshu
    var kindID = -1;
    for (i = 0; i < kind.length; i++) {
      if (!kind[i]) {
        continue;
      } else if (Array.isArray(kind[i])) {
        //数组形式
        for (var j = 0; j < kind[i].length; j++) {
          if (location.href.indexOf(kind[i][j]) >= 0) {
            kindID = i;
            break;
          }
        }
        if (kindID != -1) {
          break;
        }
      } else if (location.href.indexOf(kind[i]) >= 0) {
        kindID = i;
        break;
      }
    }
    //谷歌特殊处理
    if (siteID == 1 && kindID == -1) {
      if (location.href.indexOf("q=") >= 0) {
        kindID = 0;
      }
    }
    if (kindID == -1) {
      console.log("soTab! no kind found");
      return;
    }

    console.log("soTab loaded: " + siteID + "." + kindID);

    //初始化搜索路径
    //"百度", "谷歌"
    var link = []; //link[siteID]
    if (kindID == 0) {
      //normal
      link = ["https://www.baidu.com/s?wd=", "https://www.google.com/search?q="];
    } else if (kindID == 1) {
      //pic
      link = ["https://image.baidu.com/search/index?tn=baiduimage&word=", "https://www.google.com/search?tbm=isch&q="];
    } else if (kindID == 2) {
      //zhidao
      link = ["https://zhidao.baidu.com/search?word=", ""];
    } else if (kindID == 3) {
      //video
      link = ["https://v.baidu.com/v?ie=utf-8&word=", "https://www.google.com/search?tbm=vid&q="];
    } else if (kindID == 4) {
      //xueshu
      link = ["https://xueshu.baidu.com/s?wd=", "https://scholar.google.com/scholar?q="];
    }

    //获取搜索词(get通用)
    var key;
    if (siteID == 0) {
      key = location.search.indexOf("wd=") >= 0 ? "wd" : "word";
    } else {
      key = "q";
    }
    var tmp = location.href.split(key + "=", 2);
    if (tmp.length <= 1) {
      console.log("soTab! no keyword found");
      return;
    }
    var tmp2 = tmp[1];
    tmp = tmp2.split("&", 2);
    key = tmp[0];

    //加载css
    var dom = document.createElement("style"),
      dom_body = document.getElementsByTagName("body")[0];
    dom.innerHTML = `
.soTab {
	position: fixed;
	background-color: #000;
	opacity: .5;
	border-radius: 10px;
	color: #fff;
	padding: 10px;
	top: 100px;
	left: 10px;
	z-index: 999;
    font-size:large;
	transition: all 400ms
}
.soTab:hover {
	opacity: 1;
	box-shadow: 5px -5px 10px #777
}
.soTab p {
	margin:0 auto;
}
p.soTab_title {
	font-weight: bold;
}
.soTab a {
	color: #0cf;
}`;
    //dom_body.appendChild(dom);
    document.getElementsByTagName("html")[0].appendChild(dom);

    //生成切换框
    dom = document.createElement("div");
    dom.id = "soTab";
    var str = "<p class='soTab_title'></p><p>";
    for (i = 0; i < link.length; i++) {
      if (i != siteID && link[i]) {
        str += "<a href='" + link[i] + key + "' target='_blank'>" + siteName[i] + "</a>";
      }
    }
    dom.innerHTML = str + "</p>";
    dom.className = "soTab soTab_site" + siteID + " soTab_kind" + kindID;
    //dom_body.appendChild(dom);
    document.getElementsByTagName("html")[0].appendChild(dom);
  }
} //end userScript
