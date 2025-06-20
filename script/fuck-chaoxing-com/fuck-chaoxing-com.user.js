// ==UserScript==
// @name         超星学习通考试页面流氓功能移除工具
// @namespace    https://fuck-chaoxing-com.developer.ama.moe/
// @version      0.1
// @description  自动移除超星学习通考试界面的各种流氓功能
// @author       Neko
// @match        *://*.chaoxing.com/exam/*
// @match        *://*.chaoxing.com/exam-ans/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chaoxing.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function unlockPageFeatures() {
        try {
            // 解锁选择行为
            if (document.body) document.body.removeAttribute('onselectstart');
            if (document.documentElement) document.documentElement.style.userSelect = 'unset';
        } catch (e) {
            console.warn('[解除复制] 解除选择失败:', e);
        }

        // 移除遮水印
        try {
            const removeMaskDiv = () => {
                const masks = document.querySelectorAll('.mask_div');
                masks.forEach(mask => mask.remove());
            };

            // 重复执行
            removeMaskDiv();
            let attempts = 0;
            const maxAttempts = 10;
            const interval = setInterval(() => {
                removeMaskDiv();
                if (++attempts >= maxAttempts) clearInterval(interval);
            }, 500);
        } catch (e) {
            console.warn('[解除复制] 移除遮罩失败:', e);
        }

        // 解锁 UE 编辑器粘贴限制
        try {
            setTimeout(() => {
                if (window.UE && UE.instants) {
                    Object.entries(UE.instants).forEach(([_, instance]) => {
                        if (instance?.options) {
                            instance.options.disablePasteImage = false;
                        }
                        if (typeof instance?.removeListener === 'function') {
                            instance.removeListener('beforepaste', window.editorPaste);
                        }
                    });
                }
            }, 1000);
        } catch (e) {
            console.warn('[解除复制] UEditor 解锁失败:', e);
        }
    }

    document.addEventListener('DOMContentLoaded', unlockPageFeatures);

    window.addEventListener('load', unlockPageFeatures);
})();
