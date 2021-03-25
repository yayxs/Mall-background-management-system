<template>
  <div>
    {{ $attrs }}
    <hr />
    {{ $listeners }}
  </div>
</template>

<script>
export default {
  name: 'Bar',
  created() {
    console.log(this.$appName)
    console.log(this.$attrs) // age, infoObj, height
    console.log(this.$listeners) // updateInfo: f, delInfo: f, addInfo: f
    this.$emit('updateInfo') // 可以触发 father 组件中的updateInfo函数
  },
}
</script>

<style lang="scss" scoped></style>
