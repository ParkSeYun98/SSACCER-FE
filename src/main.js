import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Import Bootstrap and Bootstrap CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import { BootstrapIconsPlugin } from "bootstrap-icons-vue";

Vue.config.productionTip = false;
Vue.use(BootstrapIconsPlugin);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
