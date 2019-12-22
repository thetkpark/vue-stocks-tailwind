import Vue from "vue";
import VueRouter from "vue-router";

import SignIn from "../components/auth/Signin.vue";
import SignUp from "../components/auth/Signup.vue";

import Home from "../components/home/Home.vue";
import Portfolio from "../components/portfolio/Portfolio.vue";
import Stocks from "../components/stocks/Stocks.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/signup", name: "signup", component: SignUp },
  { path: "/signin", name: "signin", component: SignIn },
  { path: "", name: "home", component: Home },
  { path: "/portfolio", name: "portfolio", component: Portfolio },
  { path: "/stocks", name: "stocks", component: Stocks },
  { path: "/*", redirect: "/" }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
