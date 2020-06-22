// 要等页面加载完毕后才能播放CSS动画
document.body.classList.add("js-loading");
window.addEventListener("load", function () {
    document.body.classList.remove("js-loading");
}, false);
