import Vue from 'vue'
import App from './App.vue'
// 全局配置
Vue.config.productionTip = false // 设置false 阻止vue 启动时 生成生产提示
Vue.config.silent = false // 默认false true:取消日志警告
Vue.config.optionMergeStrategies._my_option = function() {}
let env = process.env.NODE_ENV
Vue.config.devtools = env === 'development'
Vue.config.errorHandler = undefined
Vue.config.warnHandler = undefined
// 创建构造器 参数是组件选项

// const Line = Vue.extend({
//   template:`<p>
//   line 1
//   </p>`,
//   data(){
//     return {
//       isShow:true
//     }
//   },
// })
import * as filters from './filters' // global filters
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})
new Vue({
  el: '#app', // string(CSS选择器) 或者是Element（HTMLElement实例）
  template: `
  <p>line 1</p>
  `,
  render: (h) => h(App),
})
// 手动进行开始编译
// .$mount('#app')

// new Line().$mount('#app')
