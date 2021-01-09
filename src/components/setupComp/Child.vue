<template>
  <h4>{{ propsData }}</h4>
  <h4>1props初始化 2 setup函数执行 3beforeCreate执行</h4>
  <h4>{{ num }} 不需要.value</h4>
  <h4>name is {{ info.name }}</h4>
  <!-- <h4>{{ propsData }}</h4> -->
  <h4>
    <button @click="hadnleChangeProps">hadnleChangeProps</button>
  </h4>
</template>

<script>
import { h, reactive, ref, watchEffect } from 'vue'
export default {
  props: {
    propsData: String,
  },
  beforeCreate() {
    console.log('beforeCreate2')
  },
  setup(props, { attrs, slots, emit }) {
    console.log('setup1-------------')
    console.log(props)
    const { propsData } = props
    console.log('attrs', attrs)
    const num = ref(0)

    const info = reactive({
      name: 'vast',
    })
    watchEffect(() => {
      console.log('watchEffect', propsData)
    })
    const render = () => h('h4', [num.value, info.name])

    const hadnleChangeProps = () => {
      emit('hadnleChangeProps', 'payload')
    }
    return {
      num,
      info,
      hadnleChangeProps,
    }
    console.log('setup1-------------')
    // return render
  },
}
</script>
