<template>
  <div id="app">
    <!-- <head-comp></head-comp>
    <hr />
    <banner-comp></banner-comp>
    <hr />
    <main-comp></main-comp>
    <hr />
    <footer-comp></footer-comp> -->
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
