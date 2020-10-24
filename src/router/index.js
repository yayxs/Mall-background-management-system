import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import List from "@/pages/List.vue";
import More from "@/pages/More.vue";
import Detail from "@/pages/Detail.vue";
import Main from "../components/Main.vue";
import Aside from "../components/Aside.vue";
const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
    // props: true,
    props: {
      name: "props",
    },
  },
  {
    path: "/list",
    component: List,
  },
  {
    // path: "/detail/:id/title/:title",
    path: "/detail/:id",

    component: Detail,
  },
  {
    path: "/about",
    components: {
      default: About,
      a: Main,
      b: Aside,
    },
  },
  {
    path: "/more",
    component: More,
  },
];
export default new VueRouter({
  routes, // (缩写) 相当于 routes: routes
});
