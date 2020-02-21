import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible/index.js'
import axios from 'axios'
import '@/assets/css/reset.css'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.config.productionTip = false
Vue.filter("format",function(value){
  if(value){
    if(value.length>5){
      value = value.slice(0,5)+"...";
    }
    return value
  }
})
Vue.filter("title",function(value){
  if(value){
    if(value.length>300){
      value = value.slice(0,300)+"..."
    }
    return value
  }
})
Vue.use(Vant)
axios.defaults.baseURL = 'https://douban.uieee.com/'
Vue.prototype.axios = axios
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
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
