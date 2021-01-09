## `setup函数`

首先`setup` 是一个函数，新的组件选项，在之前的vue2版本组件选项有 `data` `methods` `生命周期`  `props` 等

```js
props: {
    propsData: String,
  },
  beforeCreate() {
    console.log('beforeCreate2')
  },
  setup() {
    console.log('setup1')
    return {}
  },
```

执行时间：显示父组件传来的`props` 初始化--> 接着是`setup` -->然后是 `beforeCreate`  

```vue
<template>
  <h4>{{ propsData }}1props初始化 2 setup函数执行 3beforeCreate执行</h4>
  <h4>{{ num }} 不需要.value</h4>
  <h4>name is {{ info.name }}</h4>
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
    // return {
    //   num,
    //   info,
    // }
    console.log('setup1-------------')
    return render
  },
}
</script>

```

