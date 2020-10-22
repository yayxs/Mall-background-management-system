<template>
  <div>
    <!-- 每次都会调用 -->
    <section>{{ addNumAlias(12) }}</section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // ...mapGetters(["addNum"]),
    ...mapGetters({
      addNumAlias: "addNum",
    }),
  },
};
</script>

<style scoped></style>
