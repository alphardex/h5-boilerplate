// 工具函数
const show = (el: Element) => el.removeAttribute('hidden')
const hide = (el: Element) => el.setAttribute('hidden', '')
const refresh = () => location.href = 'main.php?mod=main'
const enable = (el: Element) => el.removeAttribute('disabled')
const disable = (el: Element) => el.setAttribute('disabled', '')
const trim = (str: string) => str.replace(/(^\s*)|(\s*$)/g, "")
