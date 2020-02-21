import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export default new Router({
    mode:"history",
    routes:[
        {
            path:'/app',
            name:"app",
            component:()=>import('../App.vue')
        },
        {
            path:'/detail',
            name:"detail",
            component:()=>import('../Detail.vue')
        }
    ]
})