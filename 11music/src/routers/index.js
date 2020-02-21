import Vue from 'vue';
import Router from 'vue-router';
import Music from '@/pages/Music'
import Mv from '@/pages/Mv'
Vue.use(Router);
export default new Router({
    mode:"hash",
    routes:[
        {
            path:'/music',
            name:"music",
            component:Music
        },
        {
            path:'/mv',
            name:"mv",
            component:Mv
        },
        {
            path:"/detail",
            name:"detail",
            component:()=>import('@/pages/Detail')
        },
        {
            path:"/details",
            name:"details",
            component:()=>import('@/pages/Details')
        },
        {
            path:"/all",
            name:"all",
            component:()=>import('@/pages/All')
        }
    ]
})