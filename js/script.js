// �Զ��嵯��
const myAlert = (msg, cb) => {
  $("#my-alert .my-alert-body").html(msg);
  $("#my-alert").modal();
};

// �޸�ios����򵯳�����
const iosInputScrollFix = () => {
  document.querySelectorAll("input, select, textarea").forEach((input) => {
    input.addEventListener("blur", () => {
      window.scrollBy(0, -1);
    });
  });
};
