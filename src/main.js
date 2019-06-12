import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import http from '@/plugins/http.js';
import moment from 'moment';

import '@/assets/css/style.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

Vue.use(ElementUI);
Vue.use(http);
Vue.config.productionTip = false;

// 全局过滤器
// 格式化日期
Vue.filter('fmtDate', (value, fmtString) => {
  return moment(value).format(fmtString);
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
