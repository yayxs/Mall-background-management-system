import axios from "axios";
import Vue from "vue";
/**
 * Store: typeof Store;
    install: typeof install;
    mapState: typeof mapState;
    mapMutations: typeof mapMutations;
    mapGetters: typeof mapGetters;
    mapActions: typeof mapActions;
    createNamespacedHelpers: typeof createNamespacedHelpers;
    createLogger: typeof createLogger;
 */

import Vuex from "vuex";
Vue.use(Vuex);
import getters from "./getters";
import asyncModule from "./modules/asyncModule";
import { CHANGE_NAME_MUTATION } from "./mutation-types";
export default new Vuex.Store({
  state: {
    num: 0,
    isLogin: false,
    list: [
      {
        name: "zhangsan",
        age: 12,
      },
      {
        name: "lisi",
        age: "17",
      },
      {
        name: "lisi",
        age: 20,
      },
    ],
    obj: {
      name: "subs",
    },
    res: null,
  },
  modules: {
    asyncModule,
  },
  getters,
  mutations: {
    numMuta(state) {
      // console.log(state);
      state.num++;
      // console.log(state);
    },
    toogleMuta(state, payload) {
      state.isLogin = payload.newFlag;
    },
    [CHANGE_NAME_MUTATION](state, payload) {
      console.log(payload);
      // 不建议这样搞
      // state.obj.name = payload.newName;
      state.obj = { ...state.obj, name: payload.newName };
    },
    changeRes(state, payload) {
      console.log(state);
      console.log(payload);
      state.res = { ...payload.data };
    },
  },
  actions: {
    fetchList({ commit }) {
      return new Promise((reso, rej) => {
        axios(`https://jsonplaceholder.typicode.com/todos/1`)
          .then((res) => {
            commit("changeRes", res);
            reso(res);
          })
          .catch((err) => {
            rej(err);
          });
      });
    },
  },
});
