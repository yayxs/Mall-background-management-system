<template>
  <div>
    <div class="box">
      <input v-model="searchQuery" /> 
    </div>
    <span>{{typeof searchQuery}}</span>
    <ul>
      <list-item  :todoId="1" />
    </ul>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import ListItem from "./ListItem.vue";
export default {
  name: "List",
  components: {
    ListItem,
  },
  // 创建组件之前执行，组件实例没有创建
  setup(props) {
    const todos = ref([]);
    const searchQuery = ref("");

    const getTodos = async () => {
      console.log("网络请求触发");
      const res1 = await fetch("https://jsonplaceholder.typicode.com/todos");
      const res2 = await res1.json();
      todos.value = res2;
    };
    onMounted(getTodos);
    return {
      searchQuery,
      todos,
      getTodos,
    };
  },
};
</script>
