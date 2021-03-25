<template>
  <div>
    <NextTickComp />
    <SetComp />
    <Home />
  </div>
</template>

<script>
import NextTickComp from './components/NextTickComp'
import SetComp from './components/SetComp'
import Home from './views/Home'
export default {
  name: 'App',
  components: {
    NextTickComp,
    SetComp,
    Home,
  },
}
</script>

<style lang="scss" scoped></style>
