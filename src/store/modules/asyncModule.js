import { CHANGE_LIST_DATA_MUTATION } from "../mutation-types";
import axios from "axios";

const state = {
  asyncData: [],
};
const mutations = {
  [CHANGE_LIST_DATA_MUTATION](state) {
    console.log(state);
  },
};
const actions = {
  fetchListDataAction() {
    // console.log(ctx);
    return new Promise((resolve, reject) => {
      axios(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => {
          console.log(res);
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
