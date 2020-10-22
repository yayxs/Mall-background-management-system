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
import { mapMutations, mapState } from "vuex";
import {
  CHANGE_NAME_MUTATION,
  FETCH_LIST_DATA_MUTATION,
} from "../store/mutation-types";
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
    fetchListAsync() {
      this.$store.commit({
        type: FETCH_LIST_DATA_MUTATION,
      });
    },
    ...mapMutations({
      changeName: CHANGE_NAME_MUTATION,
    }),
  },
};
</script>

<style scoped></style>
