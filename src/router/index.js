import { createRouter, createWebHashHistory } from "vue-router";
import DashboardLayout from "../views/pages/DashboardLayout";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: DashboardLayout,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
