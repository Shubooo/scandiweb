import { createRouter, createWebHashHistory } from "vue-router";
import IndexPage from "../views/IndexPage.vue";
import ProductAdd from "../views/ProductAdd.vue";

const routes = [
  {
    path: "/",
    name: "IndexPage",
    component: IndexPage,
  },
  {
    path: "/add-product",
    name: "ProductAdd",
    component: ProductAdd,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
