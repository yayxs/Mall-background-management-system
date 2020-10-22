import Vue from "vue";

import App from "./App.vue";
import store from "./store/index";
Vue.config.productionTip = false;

// console.log(store.state);
// commit 个 mutation
// store.commit("changeState");
// console.log(this.$store);
new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
