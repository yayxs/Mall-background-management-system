<template>
  <div>
    <h4>Foo</h4>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Foo',
  computed: {
    username() {
      console.log()
      return 'yaxs'
    },
  },
  methods: {
    handleClick() {
      this.$router.push('/no')
    },
  },
}
</script>

<style lang="scss" scoped></style>
