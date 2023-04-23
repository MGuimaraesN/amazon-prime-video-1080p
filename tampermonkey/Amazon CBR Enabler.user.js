/* eslint-env browser */

// ==UserScript==
// @name         Amazon CBR Enabler
// @namespace    nyuszika7h@gmail.com
// @version      0.1.2
// @description  Enable higher quality CBR streams for Amazon Video
// @author       nyuszika7h
// @match        https://www.amazon.com/*
// @match        https://www.amazon.co.uk/*
// @match        https://www.amazon.de/*
// @match        https://www.amazon.co.jp/*
// @match        https://www.primevideo.com/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  (function (open) {
    XMLHttpRequest.prototype.open = function () {
      arguments[1] = arguments[1].replace('CVBR%2CCBR', 'CBR')
      open.apply(this, arguments)
    }
  })(XMLHttpRequest.prototype.open)
})()