<template>
  <div>
    <button @click="changeStatus">登录与否</button>
    <section>{{ isLogin }}</section>
    <button @click="changeName({ newName: 'hah' })">改变名字</button>
    <button @click="fetchList">获取数据</button>
    <ul>
      <li v-for="item in asyncData" :key="item.id">{{ item.name }}</li>
    </ul>
    <hr />
    <input type="text" v-model="obj.name" />
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
// const { mapActions } = createNamespacedHelpers("asyncModule");

import { CHANGE_NAME_MUTATION } from "../store/mutation-types";
export default {
  computed: {
    ...mapState({
      isLogin: "isLogin",
      asyncData: "asyncData",
      obj: "obj",
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
    fetchListAsync() {},
    ...mapMutations({
      changeName: CHANGE_NAME_MUTATION,
    }),
    // // 以对象形式分发
    ...mapActions(["fetchList"]),
  },
};
</script>

<style scoped></style>
