import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'amfe-flexible/index.js'
import '@/assets/css/reset.css'
import axios from 'axios';
axios.defaults.baseURL = 'https://douban-api.uieee.com/v2/movie/';
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
Vue.prototype.axios = axios
Vue.config.productionTip = false
Vue.use(Vant);
Vue.filter("format",function(item){
  if(item){
    if(item.length>58){
      item = item.slice(0,58)+"..."
    }
    return item
  }
})
Vue.filter("number",function(value){
  if(value){
    value = Math.round(value/2);
  }
  return value
})
Vue.filter("formatone",function(val){
  if(val){
    if(val.length>6){
      val=val.slice(0,6)+"..."
    }

  }return val
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
