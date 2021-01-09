<template>
  <button @click="add">+ now count is {{ count }}</button>
</template>

<script>
import { reactive, computed, watchEffect, ref } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup() {
    const count = ref(0)
    const add = () => {
      count.value++
    }
    watchEffect(() => {})
    setTimeout(() => {
      add()
    }, 2000)
    return {
      count,
    }
  },
}
</script>
