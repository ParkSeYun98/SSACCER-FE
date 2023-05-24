import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_MAP_API_KEY,
    libraries: "places", // This is required if you use the Autocomplete plugin
    region: "KR",
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },
});

Vue.config.productionTip = false;

// Import Bootstrap and Bootstrap CSS files (order is important)
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BootstrapIconsPlugin } from "bootstrap-icons-vue";

Vue.use(BootstrapIconsPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
