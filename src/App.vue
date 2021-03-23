<template>
  <div id="app">
    <router-view name="default"></router-view>
    <!-- <router-view name="r"></router-view>
    <router-view name="z"></router-view> -->
  </div>
</template>

<script>
// import HeadComp from "./components/HeadComp";
// import BannerComp from "./components/BannerComp";
// import MainComp from "./components/MainComp";
// import FooterComp from "./components/FooterComp";
export default {
  name: 'App',
}
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
