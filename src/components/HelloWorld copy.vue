<template>
  <button @click="add">+ now count is {{ state }}</button>
</template>

<script>
import { reactive, computed, watchEffect } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2),
    })
    console.log(state) //  Proxy {count: 0, double: ComputedRefImpl}[[Handler]]: Object[[Target]]: Object[[IsRevoked]]: false
    const add = () => {
      console.log('add')
      state.count++
    }

    const double = computed(() => state.count * 3) // 在这里 double 是一个对象，我们管它叫“ref”, 用来作为一个响应性引用保留内部的值
    watchEffect(() => {
      document.title = `${state.count}`
      console.log(double.value)
    })
    return {
      state,
      add,
    }
  },
}
</script>
