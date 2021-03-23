<template>
  <div>
    <h4>User {{ $route.params.id }}</h4>
    <h5>{{ flag }}</h5>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: ['flag'],
  computed: {
    username() {
      console.log('this.$route当前路由')
      return 'yaxs'
    },
  },
  created() {
    console.log(`user init`)
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to)
    console.log(from)
    console.log(next)
  },
  //   watch: {
  //     $route(to, from) {
  //       console.log(to)
  //       console.log(from)
  //     },
  //   },
}
</script>

<style lang="scss" scoped></style>
