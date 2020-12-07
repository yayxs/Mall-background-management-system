<template>
  <div>
    <span></span>
  </div>
</template>
<script>
import { toRefs, watch, ref } from "vue";
export default {
  name: "ListItem",
  props: ['todoId'],
  setup(props) {
    // 使用 `toRefs` 创建对prop的 `user` property 的响应式引用
    const {todoId} = toRefs(props);
    
    const oneData = ref(null);

    const fetchOne = async () => {
      const res1 = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`
      );
      oneData.value = res1.json();
    };
    // 在用户 prop 的响应式引用上设置一个侦听器
    watch(todoId, fetchOne);

    return {
      oneData,
    };
  },
};
</script>
