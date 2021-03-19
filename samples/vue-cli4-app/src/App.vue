<template>
  <div>
    <anchored-heading :level="1"> 一级标题 </anchored-heading>
  </div>
</template>

<script>
import AnchoredHeading from './components/AnchoredHeading';
export default {
  name: 'App',
  components: {
    AnchoredHeading,
  },
};
</script>

<style lang="scss" scoped></style>
