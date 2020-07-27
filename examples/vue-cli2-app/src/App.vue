<!--
 * @Author: your name
 * @Date: 2020-07-27 21:53:20
 * @LastEditTime: 2020-07-27 22:04:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-source-code\examples\vue-cli2-app\src\App.vue
-->
<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    console.log(this.msg);
  },
  data() {
    return {
      msg: '',
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
