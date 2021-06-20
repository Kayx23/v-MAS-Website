import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollactive from 'vue-scrollactive'
import LoadScript from 'vue-plugin-load-script';
import { VueWindowSizePlugin } from "vue-window-size/option-api";

Vue.config.productionTip = false

Vue.use(VueScrollactive);
Vue.use(VueWindowSizePlugin);
Vue.use(LoadScript);

/* Vue.LoadScript("https://unpkg.com/@fullcalendar/core@4.3.0/main.min.js"); */

new Vue({
  router,
  VueScrollactive,
  VueWindowSizePlugin,
  LoadScript,
  render: h => h(App),
}).$mount('#app')
