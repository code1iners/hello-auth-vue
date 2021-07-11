import { createRouter, createWebHistory } from "vue-router";
import SignUp from "../views/auth/SignUp.vue";
import SignIn from "../views/auth/SignIn.vue";
import Me from "../views/auth/Me.vue";
import NotFound from "../views/NotFound.vue";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/auth/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/auth/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/auth/me",
    name: "Me",
    component: Me,
  },
  {
    path: "/:catchall(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
