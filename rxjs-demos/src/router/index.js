import Vue from "vue";
import VueRouter from "vue-router";
import DemoList from "../components/DemoList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "DemoList",
    component: DemoList
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
