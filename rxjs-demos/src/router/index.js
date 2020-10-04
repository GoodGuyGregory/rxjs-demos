import Vue from "vue";
import VueRouter from "vue-router";
import DemoList from "../components/DemoList.vue";
import CreateObservable from "../examples/CreateObservable.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'DemoList',
    component: DemoList
  },
  {
    path: "/create-observable",
    name: "CreateObservable",
    component: CreateObservable
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
