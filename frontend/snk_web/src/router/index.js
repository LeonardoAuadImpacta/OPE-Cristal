import SnkViewLogin from "../views/SnkViewLogin.vue";
import VueRouter from "vue-router";
import Vue from "vue";
import SnkAdmin from "../views/SnkAdmin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SnkShop.vue"),
  },
  {
    path: "/shop",
    name: "SnkShop",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SnkShop.vue"),
    alias: "/",
  },
  {
    path: "/acquisitions",
    name: "SnkCompras",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SnkCompras.vue"),
    alias: "/",
  },
  {
    path: "/login",
    name: "SnkViewLogin",
    component: SnkViewLogin,
  },
  {
    path: "/admin-area",
    name: "SnkAdmin",
    component: SnkAdmin,
    children: [
      {
        path: "admin-area",
        component: () =>
          import(
            /* webpackChunkName: "Overview" */ "../views/admin/SnkOverview.vue"
          ),
      },
      {
        path: "catalogo",
        component: () =>
          import(
            /* webpackChunkName: "Messages" */ "../views/admin/SnkCatalogo.vue"
          ),
      },
      {
        path: "estoque",
        component: () =>
          import(
            /* webpackChunkName: "Profile" */ "../views/admin/SnkEstoque.vue"
          ),
      },
      {
        path: "controle-acesso",
        component: () =>
          import(
            /* webpackChunkName: "Settings" */ "../views/admin/SnkControleAcesso.vue"
          ),
      },
      {
        path: "controle-pedido",
        component: () => import("../views/admin/SnkControlePedido.vue"),
      },
    ],
  },
  {
    path: "/carrinho",
    name: "SnkCarrinho",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SnkCarrinho.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
