import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import VueScrollactive from 'vue-scrollactive'
import LoadScript from 'vue-plugin-load-script';
import { VueWindowSizePlugin } from "vue-window-size/option-api";
import VueScrollProgress from 'vue-scroll-progress'

Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion-/]
// the enternal element ion-icon is not an error...don't print error on console log

Vue.use(VueScrollactive);
Vue.use(VueWindowSizePlugin);
Vue.use(LoadScript);
Vue.use(VueScrollProgress)

new Vue({
  router,
  VueScrollactive,
  VueWindowSizePlugin,
  LoadScript,
  render: h => h(App),
}).$mount('#app')
