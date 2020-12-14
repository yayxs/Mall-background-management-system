<template>
    <button @click="increment">
    Count is: {{ state.count }}, double is: {{ state.double }}
  </button>
</template>

<script>
 import { reactive, computed ,watchEffect } from 'vue'
export default {
    setup(){
        const state = reactive({
            count:0,
            double:computed(()=>state.count *2)
        })

        const increment = ()=>{
            state.count ++ 
        }
          watchEffect(()=>{
            document.title = `count is ${state.count}`
        })
        return {
            state,
            increment
        }
    }
}
</script>