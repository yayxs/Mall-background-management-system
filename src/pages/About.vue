<template>
  <div>
    <section style="width:500px;height:400px;border:1px solid #eee">
      <aside>
        <router-view name="aside"></router-view>
      </aside>
      <main>
        <router-view name="a"></router-view>
      </main>
    </section>
    <section>
      <router-view name="b"></router-view>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
