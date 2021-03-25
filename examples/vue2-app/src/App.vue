<template>
  <div>
    <NextTickComp />
    <SetComp />
    <Home />
    <Foo
      :name="name"
      :age="age"
      :infoObj="infoObj"
      @updateInfo="updateInfo"
      @delInfo="delInfo"
    />
  </div>
</template>

<script>
import NextTickComp from './components/NextTickComp'
import SetComp from './components/SetComp'
import Home from './views/Home'
import Foo from './views/Foo'
export default {
  name: 'App',
  data() {
    return {
      name: 'App',
      age: '20',
      infoObj: {
        from: 'App',
        job: 'coder',
        hobby: ['r', 'w'],
      },
    }
  },
  components: {
    NextTickComp,
    SetComp,
    Home,
    Foo,
  },
  provide() {
    return {
      foo: 'app-foo',
    }
  },
  methods: {
    updateInfo() {},
    delInfo() {},
  },
}
</script>

<style lang="scss" scoped></style>
