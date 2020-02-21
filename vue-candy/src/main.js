import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './routers'
import '@/assets/css/reset.css'
Vue.config.productionTip = false
axios.defaults.baseURL = "http://localhost:8080";
Vue.prototype.axios = axios
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
