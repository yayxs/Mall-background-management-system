<template>
  <div>
    <h4>Main</h4>
    <button @click="handleToUser">to foo</button>
    <router-link :to="{ name: 'foo', params: { userId: '123' } }"
      >to foo</router-link
    >
  </div>
</template>

<script>
export default {
  methods: {
    handleToUser() {
      this.$router.push({ name: 'foo', params: { userId: 123 } })
    },
  },
}
</script>

<style scoped></style>
