// ==UserScript==
// @name         Add Fonts for Baidu
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Beautify the Baidu Search Page by adding Fonts for it.
// @author       Y2Nk4
// @match        *.baidu.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var css = "div, p, span, h1, h2, h3, h4, h5, a{font-family: 'PingFang SC',Arial,'Microsoft YaHei',sans-serif!important;}",
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

    head.appendChild(style);

    style.type = 'text/css';
    if (style.styleSheet){
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
})();
