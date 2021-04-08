const myAlert = (msg, cb) => {
  $("#my-alert .my-alert-body").html(msg);
  $("#my-alert").modal();
};

const iosInputScrollFix = () => {
  document.querySelectorAll("input, select, textarea").forEach((input) => {
    input.addEventListener("blur", () => {
      window.scrollBy(0, -1);
    });
  });
};

const getURLParameters = (url) =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => (
      (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
    ),
    {}
  );

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
