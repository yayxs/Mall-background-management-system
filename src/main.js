import Vue from 'vue';

import moment from 'moment';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'; // lang i18n
import '@/assets/css/style.css';

import App from './App.vue';
import router from './router';
import myHttpServer from '@/plugins/http.js';

Vue.use(ElementUI, { locale });
Vue.use(myHttpServer);
Vue.config.productionTip = false;

// 全局过滤器
// 格式化日期
Vue.filter('fmtDate', (value, fmtString) => moment(value).format(fmtString));
/* eslint-disable no-new */

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
