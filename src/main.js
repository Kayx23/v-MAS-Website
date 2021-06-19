import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollactive from 'vue-scrollactive'

Vue.config.productionTip = false

Vue.use(VueScrollactive);

new Vue({
  router,
  VueScrollactive,
  render: h => h(App),
}).$mount('#app')
