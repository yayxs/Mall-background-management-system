<template>
  <div>
    <input type="text" v-focus />
    {{ foo }}
    <button @click="handleClick">vm.$attrs</button>
    <Bar
      :height="height"
      :weight="weight"
      @addInfo="addInfo"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </div>
</template>

<script>
import Bar from './Bar'
import Focus from '../directives/input'
export default {
  name: 'Foo', // 组件选项
  directives: {
    Focus,
  },
  data() {
    return {
      height: 100,
      weight: 50,
    }
  },
  inject: ['foo'],
  components: {
    Bar,
  },
  methods: {
    handleClick() {
      console.log(this.$attrs)
    },
    addInfo() {
      console.log('foo-addinfo')
    },
    updateInfo() {},
  },
}
</script>

<style lang="scss" scoped></style>
