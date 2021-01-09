<template>
  <Child :props-data="propsData" @hadnleChangeProps="hadnleChangeProps" />
</template>

<script>
import { reactive, ref } from 'vue'
import Child from './Child.vue'
export default {
  components: {
    Child,
  },
  setup() {
    const propsData = ref('setupComp')
    function hadnleChangeProps(paylaod) {
      console.log('hadnleChangeProps')
      propsData.value = paylaod
    }

    return {
      propsData,
      hadnleChangeProps,
    }
  },
}
</script>
