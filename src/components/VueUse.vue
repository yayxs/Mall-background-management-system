<template>
  <div></div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStorage, useTitle } from '@vueuse/core';
const name = ref('hello');

const title = computed(() => {
  return `${name.value} - hi`;
});
const token = useStorage('token', '123');
useTitle(title);
onMounted(() => {
  console.log('token', token.value);
  name.value = '123';
});
</script>

<style lang="scss" scoped></style>
