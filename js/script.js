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
