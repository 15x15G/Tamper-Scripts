// ==UserScript==
// @name 南+域名跳转
// @version      0.1
// @namespace southplus
// @match *://*.level-plus.net/*
// @match *://*.south-plus.net/*
// @match *://*.south-plus.org/*
// @match *://*.spring-plus.net/*
// @match *://*.spring-plus.org/*
// @grant none
// @run-at document-start
// ==/UserScript==

if (location.hostname !== 'spring-plus.net') {
  location.hostname = 'spring-plus.net';
}
