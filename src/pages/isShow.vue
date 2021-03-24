<template>
  <div>
    <button @click="handleClick">
      是否展示文字
    </button>
    <SpanShow v-if="isShow" />
  </div>
</template>

<script>
import SpanShow from './SpanShow'
export default {
  name: 'IsShow',
  data() {
    return {
      isShow: true,
    }
  },
  components: {
    SpanShow,
  },
  methods: {
    handleClick() {
      this.isShow = !this.isShow
    },
  },
}
</script>

<style scoped></style>
