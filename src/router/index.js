import store from "@/store";
import Home from "@/views/Home.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import UserAccount from "@/views/UserAccount.vue";
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
    beforeEnter: (to, from, next) => {
      store.state.user.isLoggedIn ? next({ name: "UserAccount" }) : next();
    },
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
    beforeEnter: (to, from, next) => {
      store.state.user.isLoggedIn ? next({ name: "UserAccount" }) : next();
    },
  },
  {
    path: "/account",
    name: "UserAccount",
    component: UserAccount,
    beforeEnter: (to, from, next) => {
      store.state.user.isLoggedIn ? next() : next({ name: "Home" });
    },
  },
  {
    path: "/:pathMatch(.*)*",
    beforeEnter: (to, from, next) => {
      next("/");
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
