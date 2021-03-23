<template>
  <div>
    <h4>test-go</h4>
    <button @click="handleBack">回退</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleBack() {
      this.$router.go(-1)
    },
  },
}
</script>

<style lang="scss" scoped></style>
