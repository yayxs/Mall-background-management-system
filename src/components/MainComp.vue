<template>
  <div>
    <button @click="changeStatus">登录与否</button>
    <section>{{ isLogin }}</section>
    <button @click="changeName({ newName: 'hah' })">改变名字</button>
    <button @click="fetchListAsync">获取数据</button>
    <ul>
      <li v-for="item in asyncData" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { createNamespacedHelpers, mapState, mapMutations } from "vuex";
const { mapActions } = createNamespacedHelpers("asyncModule");

import { CHANGE_NAME_MUTATION } from "../store/mutation-types";
export default {
  computed: {
    ...mapState({
      isLogin: "isLogin",
      asyncData: "asyncData",
    }),
  },
  methods: {
    changeStatus() {
      this.$store.commit({
        type: "toogleMuta",
        newFlag: true,
      });
    },
    // changeName() {
    //   this.$store.commit({
    //     type: CHANGE_NAME_MUTATION,
    //     newName: "哈哈哈哈",
    //   });
    // },
    // fetchListAsync() {
    //   // this.$store.commit({
    //   //   type: FETCH_LIST_DATA_MUTATION,
    //   // });
    //   this.$store.dispatch("asyncModule", {
    //     type: "fetchListDataAction",
    //     // payload
    //   });
    // },
    ...mapMutations({
      changeName: CHANGE_NAME_MUTATION,
    }),
    // // 以对象形式分发
    ...mapActions(["fetchListAsync"]),
  },
};
</script>

<style scoped></style>
