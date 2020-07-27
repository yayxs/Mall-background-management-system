/*
 * @Author: your name
 * @Date: 2020-07-27 21:53:20
 * @LastEditTime: 2020-07-27 21:58:42
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-source-code\examples\vue-cli2-app\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
