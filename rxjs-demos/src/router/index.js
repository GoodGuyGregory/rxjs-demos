import Vue from "vue";
import VueRouter from "vue-router";
import Guide from "../components/Guide.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Guide",
    component: Guide
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
