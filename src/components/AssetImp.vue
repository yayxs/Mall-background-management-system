<template>
  <div>
    <img src="../assets/logo.png" alt="相对路径" />
    <!-- 相对模块请求 -->
    <img src="../../public/logo.png" alt="直接拷贝" />

    <!-- 绝对路径保留 -->
    <img src="/src/assets/logo.png" alt="绝对路径" />
    <!-- 任何内容都是一个模块解析 -->
    <!-- <img src="~@/assets/logo/png" alt="" /> -->
    <!-- @ 也作为模块 -->
    <img src="@/assets/logo.png" alt="" />
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
