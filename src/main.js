import Vue from 'vue'
import App from './App.vue'
// import store from "./store/index";
import router from './router'
Vue.config.productionTip = false
import './permission'
new Vue({
  render: (h) => h(App),
  // store,
  router,
}).$mount('#app')
