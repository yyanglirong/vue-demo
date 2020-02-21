import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import '@/assets/css/reset.css'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.config.productionTip = false
axios.defaults.baseURL = "http://localhost:8080";
Vue.prototype.axios = axios
Vue.use(Vant);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
