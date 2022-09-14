// ==UserScript==
// @name            linka
// @name            文本转链接
// @description     点击匹配文本变为超链接
// @namespace       15x15
// @author          15x15
// @version         1.2
// @icon            data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999"><g fill="%23d1d3d4"><path d="M99.017 316.822l-53.339-53.339c-60.002-60.003-61.025-157.546-2.281-217.442 59.724-60.896 157.959-61.478 218.362-1.074l54.556 54.556c12.679 12.677 12.68 33.197 0 45.876l-19.383 19.383c-12.679 12.679-33.196 12.679-45.876-.001l-53.695-53.696c-24.038-24.037-63.048-24.726-86.96-1.531-24.615 23.877-24.845 63.288-.682 87.452l54.556 54.556c12.679 12.676 12.68 33.197 0 45.877l-19.383 19.382c-12.676 12.68-33.194 12.681-45.875.001zM248.502 466.305l-53.34-53.339c-12.648-12.648-12.648-33.227-.001-45.875l19.384-19.384c12.678-12.679 33.196-12.679 45.877.001l53.696 53.696c24.037 24.037 63.047 24.725 86.958 1.531 24.615-23.877 24.848-63.288.682-87.452l-54.556-54.558c-12.648-12.648-12.648-33.227-.001-45.875l19.384-19.383c12.678-12.679 33.197-12.679 45.876.001l54.556 54.555c60.39 60.39 59.916 158.544-1.075 218.363-59.888 58.74-157.435 57.727-217.44-2.281z"/><path d="M286.702 352.466L159.516 225.281c-12.648-12.648-12.648-33.227-.001-45.875l19.384-19.383c12.648-12.648 33.227-12.648 45.876-.001l127.186 127.187c12.679 12.677 12.68 33.197 0 45.876l-19.383 19.381c-12.677 12.68-33.198 12.681-45.876 0z"/></g><g fill="%23bcbec0"><path d="M44.709 44.739l65.26 65.26c.147-.146.285-.298.433-.443 23.913-23.195 62.922-22.504 86.96 1.531l53.695 53.696c12.68 12.68 33.197 12.679 45.876 0l19.383-19.382c12.68-12.679 12.679-33.2 0-45.876L261.76 44.967c-59.965-59.966-157.207-59.815-217.051-.228zM467.017 250.223l-54.555-54.555c-12.68-12.68-33.199-12.679-45.876-.001l-19.384 19.383c-12.647 12.648-12.647 33.226.001 45.875l54.556 54.558c23.861 23.858 23.917 62.57.224 86.526l65.265 65.265c59.677-59.933 59.722-157.098-.231-217.051z"/><path d="M178.899 160.023l-9.453 9.453L342.508 342.54l9.453-9.453c12.68-12.68 12.679-33.2 0-45.876l-127.185-127.19c-12.65-12.646-33.229-12.646-45.877.002z"/></g></svg>
// @include         *://*
// @grant           none
// @run-at          document-end
// ==/UserScript==

(function () {
  document.onclick = function (e) {
    //console.log(e)
    //console.log(e.target)
    if (!e.target.innerHTML.match(/<a/) && e.path.length > 4) {
      //console.log(e.target.innerHTML)
      const link = /\b((magnet?:)(\.|\w|-|#|\?|=|\/|\+|@|%|&|:|;|!|\*|(?![\u4e00-\u9fa5\s*\n\r'"]))+)/g;
      const rj = /\b(R[JE]\d{6})\b/gi;
      const bili1 = /\b(av[0-9]+)\b/gi;
      const bili2 = /\b(bv[A-z0-9]{10,11})/gi;
      const bili3 = /\b(cv[0-9]+)\b/gi;
      const scp = /\b(scp-?\d{3,4})(?!-|\d)/gi;
      if (e.target.innerText.match(link)) {
        e.target.innerHTML = e.target.innerHTML.replace(link, '<a target="_blank" href="$1" style="text-decoration:underline;">$1</a>');
      } else if (e.target.innerText.match(rj)) {
        e.target.innerHTML = e.target.innerHTML.replace(
          rj,
          '<a target="_blank" href="https://www.dlsite.com/maniax/work/=/product_id/$1.html/?locale=ja_JP" style="text-decoration:underline;">$1</a>'
        );
        console.log(e.target);
      } else if (e.target.innerText.match(bili1)) {
        e.target.innerHTML = e.target.innerHTML.replace(
          bili1,
          '<a target="_blank" href="https://www.bilibili.com/video/$1" style="text-decoration:underline;">$1</a>'
        );
        console.log(e.target);
      } else if (e.target.innerText.match(bili2)) {
        e.target.innerHTML = e.target.innerHTML.replace(
          bili2,
          '<a target="_blank" href="https://www.bilibili.com/video/$1" style="text-decoration:underline;">$1</a>'
        );
        console.log(e.target);
      } else if (e.target.innerText.match(bili3)) {
        e.target.innerHTML = e.target.innerHTML.replace(
          bili3,
          '<a target="_blank" href="https://www.bilibili.com/video/$1" style="text-decoration:underline;">$1</a>'
        );
        console.log(e.target);
      } else if (e.target.innerText.match(scp)) {
        e.target.innerHTML = e.target.innerHTML.replace(
          scp,
          '<a target="_blank" href="https://scp-wiki-cn.wikidot.com/$1" style="text-decoration:underline;">$1</a>'
        );
        console.log(e.target);
      }
    }
  };
})();
