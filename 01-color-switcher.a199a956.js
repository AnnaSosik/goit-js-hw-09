const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")};let e;t.stopBtn.disabled=!0,t.startBtn.addEventListener("click",(function(){e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.startBtn.disabled=!0,t.stopBtn.disabled=!1})),t.stopBtn.addEventListener("click",(()=>{clearInterval(e),t.stopBtn.disabled=!0,t.startBtn.disabled=!1}));
//# sourceMappingURL=01-color-switcher.a199a956.js.map
