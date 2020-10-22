<template>
  <div id="app">
    <head-comp></head-comp>
    <hr />
    <banner-comp></banner-comp>
    <hr />
    <main-comp></main-comp>
  </div>
</template>

<script>
import HeadComp from "./components/HeadComp";
import BannerComp from "./components/BannerComp";
import MainComp from "./components/MainComp";
export default {
  name: "App",
  components: {
    HeadComp,
    BannerComp,
    MainComp,
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
