// ==UserScript==
// @name         AddGithubButton
// @name:zh      github添加按钮
// @description  给github加上gist和CDN按钮
// @namespace    15x15
// @author       15x15
// @version      0.4
// @match        *://*.github.com/*
// @icon         https://www.google.com/s2/favicons?domain=jsdelivr.com
// @grant        none
// ==/UserScript==

const gistsvg = `<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-package UnderlineNav-octicon hide-sm"><path fill-rule="evenodd" d="M1.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25H1.75zM0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0114.25 16H1.75A1.75 1.75 0 010 14.25V1.75zm9.22 3.72a.75.75 0 000 1.06L10.69 8 9.22 9.47a.75.75 0 101.06 1.06l2-2a.75.75 0 000-1.06l-2-2a.75.75 0 00-1.06 0zM6.78 6.53a.75.75 0 00-1.06-1.06l-2 2a.75.75 0 000 1.06l2 2a.75.75 0 101.06-1.06L5.31 8l1.47-1.47z"></path></svg>Gists`;

function AddCDNButton() {
  const el = document.getElementById("raw-url");
  const el2 = document.getElementById("jsdelivrCDN");
  if (el && !el2) {
    let link = el.href;
    link = link.replace(/https:\/\/github\.com\//, "https://cdn.jsdelivr.net/gh/");
    link = link.replace(/\/raw\//, "@");

    const newnode = el.cloneNode(true);
    newnode.href = link;
    newnode.innerHTML = "CDN";
    newnode.id = "jsdelivrCDN";
    el.before(newnode);
  }

  const gist1 = document.querySelector("[aria-label='User profile']")?.lastElementChild;
  if (gist1 && gist1.getAttribute("data-tab-item") != "gists") {
    const a = gist1.cloneNode(true);
    a.removeAttribute("aria-current");
    a.removeAttribute("data-hydro-click");
    a.removeAttribute("data-hydro-click-hmac");
    a.classList.remove("selected");
    a.setAttribute("data-tab-item", "gists");
    a.innerHTML = gistsvg;
    a.href = "https://gist.github.com" + location.pathname;
    gist1.after(a);
  }

  const gist2 = document.querySelector("details-menu > ul")?.lastElementChild;
  if (gist2 && gist2.getAttribute("data-menu-item") != "gists") {
    const b = gist2.cloneNode(true);
    b.setAttribute("data-menu-item", "gists");
    const ba = b.children[0];
    ba.removeAttribute("data-selected-links");
    ba.setAttribute("href", "https://gist.github.com" + location.pathname);
    ba.innerHTML = "Gist";
    gist2.after(b);
  }
}

function throttle() {
  if (AddCDNButton._id) {
    clearTimeout(AddCDNButton._id);
  }
  AddCDNButton._id = window.setTimeout(() => {
    AddCDNButton();
    AddCDNButton._id = null;
  }, 1000);
}

(function () {
  // Your code here...
  AddCDNButton();
  const observer = new MutationObserver(throttle);
  const targetNode = document.querySelector("head");
  const config = { childList: true, subtree: true, attributes: false };
  observer.observe(targetNode, config);
})();
