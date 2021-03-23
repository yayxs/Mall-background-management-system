<template>
  <div>
    <h4>User Set</h4>
    <!-- <NavBar /> -->
    <router-view></router-view>
    <router-view name="helper"></router-view>
  </div>
</template>

<script>
export default {
  name: 'UserSettings',
}
</script>

<style lang="scss" scoped></style>
