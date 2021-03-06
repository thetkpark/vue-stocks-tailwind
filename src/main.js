import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/tailwind.css";

Vue.config.productionTip = false;

Vue.filter("currency", el => {
  if (el) {
    return "$ " + el.toLocaleString();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
