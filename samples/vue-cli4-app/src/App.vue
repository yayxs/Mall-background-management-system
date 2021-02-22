<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <input type="text" v-model="message" />
    <hr />
    <ul>
      <li v-for="item in list" :key="item.id">{{ item.title }}</li>
    </ul>
    <!-- <todo-list>
      <todo-item
        @delete="handleDelete"
        v-for="(item, index) in list"
        :key="index"
        :title="item.title"
        :del="item.del"
      >
        <template v-slot:pre-icon="{ value }">
          <span>前置图标 {{ value }}</span>
        </template>
      </todo-item>
    </todo-list> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import TodoList from "./components/TodoList.vue";
// import TodoItem from "./components/TodoItem.vue";

export default {
  name: 'App',
  components: {
    // TodoList,
    // TodoItem,
  },
  data() {
    return {
      // message: "hello",
      list: [
        {
          title: 'vue',
          id: 1,
          del: false,
        },
        {
          title: 'react',
          id: 2,
          del: true,
        },
      ],
    }
  },
  methods: {
    handleDelete(val) {
      console.log(val)
    },
  },
}
</script>

<style></style>
