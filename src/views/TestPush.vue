<template>
  <div>
    <h4>test-push</h4>
    <button @click="goFoo(1)">Go to Foo use str</button>
    <button @click="goFoo(2)">Go to Foo user obj</button>
    <button @click="goFoo(3)">Go to Foo user params</button>
    <button @click="goFoo(4)">Go to Foo user query</button>
  </div>
</template>

<script>
export default {
  methods: {
    goFoo(type) {
      switch (type) {
        case 1:
          this.$router.push('foo')
          break
        case 2:
          // path 会忽略params
          this.$router.push({ path: 'foo', params: { userId: 'hulue' } })

          this.$router.push({ path: 'foo/123' })
          break
        case 3:
          this.$router.push({ name: 'foo', params: { userId: '123' } })
          break
        case 4:
          this.$router.push({ path: '/foo', query: { userId: '123' } })
          break
        default:
          break
      }
      // this.$router.push({
      //   name: 'home',
      //   params: {
      //     obj: {
      //       name: 'yayxs',
      //       list: [
      //         {
      //           id: '1',
      //         },
      //       ],
      //     },
      //   },
      //   query: {
      //     info: {
      //       desc: 'query传参',
      //     },
      //     simm: 'hah',
      //     sin: 'sin',
      //     subs: [
      //       {
      //         id: 2,
      //       },
      //     ],
      //   },
      // })
    },
  },
}
</script>

<style lang="scss" scoped></style>
