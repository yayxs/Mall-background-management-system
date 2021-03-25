<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>序号</th>
          <th>IMEI</th>
          <th>型号</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in dataList" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.IMEI }}</td>
          <td>{{ item.type }}</td>
          <td>
            <button @click="handleClick(index)">改变序号</button>
            <button @click="handleDel(index)">删除序号</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'SetComp',
  data() {
    return {
      dataList: [
        {
          id: '1',
          IMEI: 'sdxasda',
          type: 'dasc',
        },
      ],
      info: {
        a: 1,
      },
    }
  },
  methods: {
    handleClick(index) {
      this.$set(this.dataList, index, {
        id: '2',
        IMEI: 'sdxasda',
        type: 'dasc',
      })
    },
    handleDel(index) {
      this.$set(this.dataList, index)
    },
  },
}
</script>

<style lang="scss" scoped></style>
