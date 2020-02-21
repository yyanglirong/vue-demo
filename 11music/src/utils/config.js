import Vue from 'vue'
import 'lib-flexible/flexible.js'
import '@/assets/css/reset.css'
import BsBtn from '@/components/BsBtn.vue';
import video from 'video.js'
import axios from 'axios'
Vue.filter("format",function(val){
    if(val.length>8){
        val = val.slice(0,8)+"..."
    }
    return val;
})
Vue.filter("handleTime",function(time){
    var data = new Date(time);
    var minu = data.getMinutes();
    if(minu<10){
        minu = "0"+minu
    }
    var sec = data.getSeconds();
    if(sec<10){
        sec = "0" +sec
    }
    var sum = minu+":"+sec;
    return sum
})
axios.defaults.baseURL = 'http://192.168.14.49:5000';
Vue.prototype.axios = axios
Vue.prototype.$video = video
Vue.component('BsBtn',BsBtn)
export default Vue