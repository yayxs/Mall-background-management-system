<template>
  <div>
    <span id="span" ref="msgSpan">{{ msg | uppercaseFirst }}</span>
    <button @click="handleChangeMsg">change msg</button>
    <input type="text" name="" id="" v-focus />
  </div>
</template>

<script>
import Focus from '../directives/input'
export default {
  name: 'NextTickComp',
  directives: {
    Focus,
  },
  data() {
    return {
      msg: 'old',
    }
  },
  methods: {
    handleChangeMsg() {
      this.msg = 'new'
      console.log(this.$refs.msgSpan.innerHTML)
      this.$nextTick(() => {
        console.log('next-tick', this.$refs.msgSpan.innerHTML)
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
