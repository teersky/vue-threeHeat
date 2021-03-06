import Vue from "vue";
import App from "./App.vue";
import router from "@/router/index.ts";
import store from "@/store/index.ts";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
