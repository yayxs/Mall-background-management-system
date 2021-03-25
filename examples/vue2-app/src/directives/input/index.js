import Focus from './focus'
/**
 * 方法调用的时候会将Vue传进去
 * @param {*} Vue
 */
const install = function(Vue) {
  Vue.directive('focus', Focus)
}
if (window.Vue) {
  window.focus = Focus
  // 安装插件
  Vue.use(install) // eslint-disable-line
}

Focus.install = install
export default Focus
