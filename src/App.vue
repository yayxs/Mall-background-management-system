<template>
  <div id="app">
    <!-- <head-comp></head-comp>
    <hr />
    <banner-comp></banner-comp>
    <hr />
    <main-comp></main-comp>
    <hr />
    <footer-comp></footer-comp> -->
    <button @click="goHome">去首页</button>
    <router-view></router-view>
  </div>
</template>

<script>
// import HeadComp from "./components/HeadComp";
// import BannerComp from "./components/BannerComp";
// import MainComp from "./components/MainComp";
// import FooterComp from "./components/FooterComp";
export default {
  name: "App",
  components: {
    // HeadComp,
    // BannerComp,
    // MainComp,
    // FooterComp,
  },
  methods: {
    // params 参数传参的时候 path与params h会被忽略
    goHome() {
      // console.log(this.$router);
      this.$router.push({
        name: "home",
        params: {
          obj: {
            name: "yayxs",
            list: [
              {
                id: "1",
              },
            ],
          },
        },
        query: {
          info: {
            desc: "query传参",
          },
          simm: "hah",
          sin: "sin",
          subs: [
            {
              id: 2,
            },
          ],
        },
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
