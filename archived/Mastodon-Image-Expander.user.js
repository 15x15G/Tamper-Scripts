// ==UserScript==
// @name         Mastodon Image Expander
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Prevents images in the Mastodon  feed from having the top and bottom cropped off
// @author       15x15
// @grant        none
// @licnse       ISC; https://opensource.org/licenses/ISC
// ==/UserScript==


(function() {
    'use strict';
    var cmxglobalStyle = document.createElement("style");
    cmxglobalStyle.type = "text/css";
    cmxglobalStyle.id="cmxglobalStyle";
    document.head.appendChild(cmxglobalStyle);
    // cmxglobalStyle.sheet.insertRule(`
    //     .media-gallery__item {
    //         height: auto !important;
    //         max-height: 300px !important;
    //     }`);
    // cmxglobalStyle.sheet.insertRule(`
    //     .media-gallery {
    //         height: auto !important;
    //     }`);
    cmxglobalStyle.sheet.insertRule(`
        .media-gallery__item-thumbnail > img {
            object-fit: contain !important;
            object-position: center !important;
        }`);
        // cmxglobalStyle.sheet.insertRule(`
        // .media-gallery__item {
        //     border: 2px solid;
        // }`);
        // cmxglobalStyle.sheet.insertRule(`
        // .media-gallery {
        //     overflow: visible;
        // }`);
})();
