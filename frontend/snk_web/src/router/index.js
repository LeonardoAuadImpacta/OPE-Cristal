import Vue from "vue";
import VueRouter from "vue-router";
import jwt_decode from "jwt-decode";

import SnkViewLogin from "../views/SnkViewLogin.vue";
import SnkAdmin from "../views/SnkAdmin.vue";

Vue.use(VueRouter);

const routes = [
<<<<<<< HEAD
  
  {
    path: '/shop',
    name: 'SnkShop',
    component: () => import(/* webpackChunkName: "about" */ '../views/SnkShop.vue')
=======
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
>>>>>>> origin/main
  },
  {
    path: "/acquisitions",
    name: "SnkCompras",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SnkCompras.vue"),
    alias: "/",
  },
  {
    path: "/address",
    name: "SnkEnderecoCliente",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SnkEnderecoCliente.vue"),
    alias: "/",
  },
  {
<<<<<<< HEAD
    path:'/carrinho',
    name: 'SnkCarrinho',
    component: () => import(/* webpackChunkName: "about" */ '../views/SnkCarrinho.vue')
  },
  {
    path:'/confirma',
    name: 'SnkConfirmView',
    component: () => import(/* webpackChunkName: "about" */ '../views/SnkConfirmView.vue')
  }
]
=======
    path: "/account",
    name: "SnkPerfilCliente",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SnkPerfilCliente"),
    alias: "/",
  },
  {
    path: "/acquisitions-details/:acquisitionsId",
    name: "SnkDetalhesCompras",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SnkDetalhesCompras.vue"),
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
    meta: { authorize: ["ADMIN"] },
    component: SnkAdmin,
    children: [
      {
        path: "admin-area",
        meta: { authorize: ["ADMIN"] },
        component: () =>
          import(
            /* webpackChunkName: "Overview" */ "../views/admin/SnkOverview.vue"
          ),
      },
      {
        path: "catalogo",
        meta: { authorize: ["ADMIN"] },
        component: () =>
          import(
            /* webpackChunkName: "Messages" */ "../views/admin/SnkCatalogo.vue"
          ),
      },
      {
        path: "estoque",
        meta: { authorize: ["ADMIN"] },
        component: () =>
          import(
            /* webpackChunkName: "Profile" */ "../views/admin/SnkEstoque.vue"
          ),
      },
      {
        path: "controle-acesso",
        meta: { authorize: ["ADMIN"] },
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
    meta: { authorize: ["ADMIN", "CUSTOMER"] },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SnkCarrinho.vue"),
  },
  { path: "*", redirect: "/" },
];
>>>>>>> origin/main

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const { authorize } = to.meta;

  // Acessando direto o localStorage para dar bypass no lifecycle do Vuex
  const rawStore = localStorage.getItem("store");
  const store = rawStore && JSON.parse(rawStore);
  const currentUser = store.session;

  if (authorize) {
    if (!currentUser) {
      return next({ path: "/login" });
    }

    const decodedToken = currentUser.token && jwt_decode(currentUser.token);
    const authorized =
      decodedToken &&
      decodedToken.claims.some((claim) =>
        authorize.includes(claim.split("/")[0])
      );
    if (authorize.length && !authorized) {
      return next({ path: "/" });
    }
  }

  next();
});

export default router;
