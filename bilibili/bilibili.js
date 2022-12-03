// ==UserScript==
// @name         去除b站灰色以及广告拦截器插件弹窗
// @namespace    https://i.alongw.cn/bilibili/bilibili.js/
// @version      0.2
// @description  去除b站烦人的弹窗
// @author       阿龙
// @match        https://www.bilibili.com/
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// @updateURL    https://i.alongw.cn/bilibili/bilibili.js/
// ==/UserScript==

document.documentElement.removeAttribute('class', '');
document.querySelector('.adblock-tips').style.display = 'none';