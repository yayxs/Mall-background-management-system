<template>
  <div>
    Foo
    <button @click="handleClick">Go to no</button>
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
