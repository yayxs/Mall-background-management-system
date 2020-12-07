<template>
  <section class="container">
    <section class="main">
      <section class="composition-api">
        <section>
          <h4>vue 3 Sum</h4>
        </section>
        <section class="ipt">
          <p>
            counter：
            <Counter :total="total" />
          </p>
          <form id="sum">
            <input type="text" class="form-control" v-model="number1" />
            <input type="text" class="form-control" v-model="number2" />
            <button @click="handleAddClick" type="button" class="btn">
              加一起
            </button>
          </form>
        </section>
      </section>
    </section>
  </section>
  <section>
    <h4>fetch data</h4>
  </section>
  <!-- <ul class="list">
    <li v-for="item in todoLists" :key="item.id">{{ item.title }}</li>
  </ul> -->
</template>
<script>
// ref
import { ref, computed, reactive, toRefs, onMounted, watch } from "vue";
import Counter from "./Counter.vue";
const SumApp = {
  props: {
    userId: {
      type: String,
      default: "01xx",
    },
  },
  components: {
    Counter,
  },
  setup(props, ctx) {
    // console.log(this); //  undefined
    // console.log(props); // proxy { userId: } // 只能访问props
    const { userId } = props;
    const todoLists = ref([]);
    const number1 = ref(0);
    const number2 = ref(0);
    const sum = ref(0);
    const title = reactive({
      title: `test-title`,
    });
    const total = computed({
      get: () => {
        return `总和是${sum.value}`;
      },
    });
    const handleAddClick = () => {
      sum.value = parseInt(number1.value) + parseInt(number2.value);
    };
    const getTodoLists = async () => {
      console.log("gettodolist");
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      todoLists.value = await response.json();
    };
    onMounted(getTodoLists);
    watch(userId, getTodoLists);
    return {
      obj: {
        name: "yaxs",
      },
      number1,
      number2,
      total,
      todoLists,
      handleAddClick,
      getTodoLists,
      ...toRefs(title),
    };
  },
};

export default SumApp;
</script>
<style lang="css" scoped></style>
