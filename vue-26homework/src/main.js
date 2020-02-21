import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible/index.js'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios';
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  store.state.isLoading = true;
  return config;
});
axios.interceptors.response.use(function (response) {
  // Do something with response data
  store.state.isLoading = false;
  return response;
});
Vue.filter("format",function(item){
  item = item.join(" | ");
  return item;
})
Vue.config.productionTip = false
Vue.use(Vant);
Vue.prototype.axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
