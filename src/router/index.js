import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// import Home from "@/pages/Home.vue";
// import About from "@/pages/About.vue";
// import List from "@/pages/List.vue";
// import More from "@/pages/More.vue";
// import Detail from "@/pages/Detail.vue";
import Main from '../components/Main.vue'
// import Aside from "../components/Aside.vue";
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }
import Bar from '../views/Bar.vue'
// import Baz from '../views/Baz.vue'
import Foo from '../views/Foo.vue'
import User from '../views/User.vue'
import UserInfo from '../views/UserInfo.vue'
import UserHome from '../views/UserHome.vue'
import TestPush from '../views/TestPush.vue'
import TestReplace from '../views/TestReplace.vue'
import TestGo from '../views/TestGo.vue'
import UserSettings from '../components/UserSettings'
import Email from '../components/UserSettings/Email.vue'
import Info from '../components/UserSettings/Info.vue'
const routes = [
  {
    path: '/',
    redirect: { name: 'main' },
  },
  {
    path: '/settings',
    component: UserSettings,
    children: [
      {
        path: 'email',
        component: Email,
      },
      {
        path: 'info',
        components: {
          default: Info,
        },
      },
    ],
  },
  {
    path: '/main',
    name: 'main',
    component: Main,
    alias: '/m',
  },
  {
    path: '/foo',
    name: 'foo',
    component: Foo,
  },
  {
    path: '/bar/:name/base/:age',
    component: Bar,
  },
  {
    path: '/testPush',
    component: TestPush,
  },
  {
    path: '/testReplace',
    component: TestReplace,
  },
  {
    path: '/testGo',
    component: TestGo,
  },
  // 如果 props 被设置为 true，route.params 将会被设置为组件属性
  {
    path: '/user/:id',
    component: User,
    name: 'user',
    props: { flag: true },
    children: [
      {
        path: 'info',
        component: UserInfo,
      },
      {
        path: '',
        component: UserHome,
      },
    ],
  },
  {
    path: '*',
  },
]
// const routes = [
//   {
//     path: "/home",
//     name: "home",
//     component: Home,
//     // props: true,
//     props: {
//       name: "props",
//     },
//   },
//   {
//     path: "/list",
//     component: List,
//   },
//   {
//     // path: "/detail/:id/title/:title",
//     path: "/detail/:id",

//     component: Detail,
//   },
//   {
//     path: "/about",
//     components: {
//       default: About,
//       a: Main,
//       b: Aside,
//     },
//   },
//   {
//     path: "/more",
//     component: More,
//   },
// ];
export default new VueRouter({
  routes, // (缩写) 相当于 routes: routes
})
