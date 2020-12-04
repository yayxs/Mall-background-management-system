<template>
<li>
  <slot name="pre-icon" :value="value"></slot>
  <span class="red" v-if="!del">{{title}}</span>
  <span v-else class="del">{{title}}</span>
  <button v-show="!del" @click="handleClick">删除</button>
</li>
</template>

<script>
export default {
  name: 'TodoList',
  props:{
    title:String,
    del:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      value: Math.random()
    }
  },
  methods: {
    handleClick(){
      this.$emit('delete',this.title)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.red{
  color: red;
}
.del{
  text-decoration: line-through;
}
</style>
