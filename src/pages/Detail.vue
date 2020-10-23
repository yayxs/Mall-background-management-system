<template>
  <section>
    <div>Detail ----{{ id }}</div>
    <h3>{{ title }}</h3>
    <section v-if="hadData">
      <h4>{{ info.id }}</h4>
      <h4>{{ info.title }}</h4>
      <h4>{{ info.body }}</h4>
    </section>
    <section v-else>
      加载中
    </section>
    <router-view></router-view>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      info: null,
      hadData: false,
    };
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to);
    console.log(from);
    this.fetchDetail();
    next();
  },
  // watch: {
  //   $route(to, from) {
  //     console.log(to);
  //     console.log(from);
  //     this.fetchDetail();
  //   },
  // },
  computed: {
    id() {
      return this.$route.params.id;
    },
    title() {
      return this.$route.params.title;
    },
  },
  methods: {
    fetchDetail() {
      this.hadData = false;
      axios(`https://jsonplaceholder.typicode.com/posts/${this.id}`).then(
        (res) => {
          console.log(res);
          this.info = res.data;
          this.hadData = true;
        }
      );
    },
  },
  mounted() {
    console.log(`生命周期有没有被调用`);
    this.fetchDetail();
  },
};
</script>

<style scoped></style>
