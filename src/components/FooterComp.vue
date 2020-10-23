<template>
  <div>
    Actions 模块化异步获取数据
    <button @click="fetchListApi">模块化异步获取数据</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      fetchListApi: "asyncModule/fetchListDataAction",
    }),
  },
};
</script>

<style scoped></style>
