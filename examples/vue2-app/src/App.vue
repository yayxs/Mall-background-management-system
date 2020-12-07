<template>
  <div id="app">
    <div class="box" v-for="item in list" :ref="setItemRef" :key="item">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      itemRefs: [],
      list: [1, 2, 3],
    };
  },
  methods: {
    setItemRef(el) {
      console.log(el)
      this.itemRefs.push(el);
    },
  },
  beforeUpdate() {
    this.itemRefs = [];
  },
  updated() {
    console.log(this.itemRefs);
  },
};
</script>

<style></style>
