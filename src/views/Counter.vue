<template>
  <div id="counter">Counter: {{ total }}</div>
  <hr />
  <span>init data {{initNumber}}</span>
</template>

<script>
import { toRefs ,ref} from 'vue'
const CounterApp = {
  props:{
    total:{

    }
  },
  setup(props,{attrs,slots,emit}) {
    console.log(props) 
    // 1 props 是响应式的
    // 2 解构的时候使用 toRefs
    const {total}  = toRefs(props)

    console.log(attrs)
    console.log(slots)
    console.log(emit)

    const initNumber = ref(0)

    return {
      initNumber
    }
  },
};

export default CounterApp;
</script>
