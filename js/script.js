// 自定义弹窗
const myAlert = (msg, cb) => {
  $("#my-alert .my-alert-body").html(msg);
  $("#my-alert").modal();
};

// 修复ios输入框弹出问题
const iosInputScrollFix = () => {
  document.querySelectorAll("input, select, textarea").forEach((input) => {
    input.addEventListener("blur", () => {
      window.scrollBy(0, -1);
    });
  });
};

// 获取url的qs
const getURLParameters = (url) =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, v) => ((a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a), {});

// 延迟
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
