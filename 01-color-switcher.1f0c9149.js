!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")};t.stopBtn.disabled=!0;var n=null;t.startBtn.addEventListener("click",(function(){n=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.startBtn.disabled=!0,t.stopBtn.disabled=!1})),t.stopBtn.addEventListener("click",(function(){clearInterval(n),t.stopBtn.disabled=!0,t.startBtn.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.1f0c9149.js.map
