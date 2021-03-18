import Home from "@/pages/Home.vue";
import SignIn from "@/pages/SignIn.vue";
import UserAccount from "@/pages/UserAccount.vue";
import store from "@/store";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/account",
    name: "UserAccount",
    component: UserAccount,
    beforeEnter: (to, from, next) => {
      store.state.user.isLoggedIn ? next() : next("/");
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
