<template>
  <div>
    <h1 v-if="level === 1">
      <slot />
    </h1>
    <h2 v-else-if="level === 2">
      <slot></slot>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'AnchoredHeading',
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
