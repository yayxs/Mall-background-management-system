<template>
  <div>
    <button @click="handleClick">改变数据</button>
    <section>{{ numAlias }}</section>
    <section>{{ list }}</section>
    <section>{{ name }}</section>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HeadComp",
  created() {
    // console.log(this.$store);
    // let obj = {
    //   name: "yayxs",
    // };
    // console.log(...obj);

    let finObj = {
      name: "yayxs",
      ...{
        fav: "12",
        list: [],
      },
    };
    console.log(finObj);
  },
  computed: {
    newVal() {
      return `123`;
    },
    // ...mapState(['num']),
    ...mapState({
      numAlias: "num",
      list: (state) => state.list,
      name(state) {
        console.log(state);
        return state.obj.name;
      },
    }),
  },
  methods: {
    handleClick() {
      this.$store.commit("changeState");
      console.log(this.$store.state);
    },
  },
};
</script>

<style scoped></style>
