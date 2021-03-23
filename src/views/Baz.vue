<template>
  <div>
    <h4>Baz</h4>
  </div>
</template>

<script>
export default {
  name: 'Baz',
  data() {
    return {
      name: '',
    }
  },
  created() {
    console.log(this.$route.params)
  },
}
</script>

<style lang="scss" scoped></style>
