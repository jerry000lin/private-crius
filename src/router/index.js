import Vue from "vue";
import VueRouter from "vue-router";
import manage from "../views/manage/index";
import dataManage from "../views/manage/data";
import projectManage from "../views/manage/project";
import dashboardManage from "../views/manage/dashboard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/manage/data"
  },
  {
    path: "/manage",
    component: manage,
    children: [
      {
        path: "/manage/data",
        component: dataManage
      },
      {
        path: "/manage/project",
        component: projectManage
      },
      {
        path: "/manage/dashboard",
        component: dashboardManage
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
