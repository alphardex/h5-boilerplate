// 工具函数
var show = function (el) { return el.removeAttribute('hidden'); };
var hide = function (el) { return el.setAttribute('hidden', ''); };
var refresh = function () { return location.href = 'main.php?mod=main'; };
var enable = function (el) { return el.removeAttribute('disabled'); };
var disable = function (el) { return el.setAttribute('disabled', ''); };
var trim = function (str) { return str.replace(/(^\s*)|(\s*$)/g, ""); };
