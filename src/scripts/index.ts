// 工具函数
const show = (el: Element) => el.removeAttribute('hidden')
const hide = (el: Element) => el.setAttribute('hidden', '')
const refresh = () => location.href = 'main.php?mod=main'
const enable = (el: Element) => el.removeAttribute('disabled')
const disable = (el: Element) => el.setAttribute('disabled', '')
const trim = (str: string) => str.replace(/(^\s*)|(\s*$)/g, "")

const shareTip = document.querySelector('.share-tip')
const backdrop = document.querySelector('.backdrop')

// 显示分享提示
const showShareTip = () => {
  show(backdrop)
  show(shareTip)
}

// 隐藏分享提示
const hideShareTip = () => {
  hide(shareTip)
  hide(backdrop)
}