<template>
  <div>
    <ul>
      <li v-for="item in dataList" :key="item.id">
        <router-link :to="`/detail/${item.id}`">{{ item.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "List",
  data() {
    return {
      dataList: [],
    };
  },
  mounted() {
    this.fetchList();
  },
  methods: {
    fetchList() {
      axios(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
        console.log(res);
        this.dataList = res.data;
      });
    },
  },
};
</script>

<style scoped></style>
