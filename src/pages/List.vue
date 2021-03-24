<template>
  <div>
    <template v-if="loading"> <span>loading</span></template>
    <template v-if="error"> <span>error</span></template>
    <template v-if="dataList.length !== 0">
      <ul>
        <li v-for="item in dataList" :key="item.id">
          <span>{{ item.id }}</span>
          <router-link :to="`/detail/${item.id}`">{{ item.title }}</router-link>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'List',
  data() {
    return {
      dataList: [],
      loading: false,
      error: null,
    }
  },
  mounted() {
    this.fetchList()
  },
  methods: {
    fetchList() {
      this.error = null
      this.dataList.length = 0
      this.loading = true
      axios(`https://jsonplaceholder.typicode.com/posts`)
        .then((res) => {
          this.loading = false
          this.dataList = res.data
        })
        .catch((err) => {
          this.error = err.toString()
        })
    },
  },
}
</script>

<style scoped></style>
