<template>
  <div>
    <!-- Home {{ username }} -->
    <button @click="goback">返回</button>
    {{ obj }}
  </div>
</template>

<script>
export default {
  props: ["obj"],
  mounted() {
    // console.log(this.$router);
    console.log(this.$route);
  },
  computed: {
    // name() {
    //   return this.$route.params.username;
    // },
  },
  methods: {
    goback() {
      window.history.length ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>

<style scoped></style>
