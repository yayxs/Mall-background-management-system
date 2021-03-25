<template>
  <div>
    <h4>
      {{ newName }}
    </h4>
    <button @click="handleClick"></button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  //
  data() {
    return {
      name: 'old',
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: {
        f: {
          g: 5,
        },
      },
    }
  },
  props: {},
  computed: {
    newName: {
      get() {
        return this.name
      },
      set(v) {
        this.name = v
      },
    },
  },
  methods: {
    handleClick() {
      this.newName = 123
    },
  },
  watch: {
    a(val, oldVal) {
      console.log(val)
      console.log(oldVal)
    },
    c: {
      handler: function() {
        /* ... */
      },
      deep: true,
    },
    'e.f': function() {
      /* ... */
    },
  },
}
</script>

<style lang="scss" scoped></style>
