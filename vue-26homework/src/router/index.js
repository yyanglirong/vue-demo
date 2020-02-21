import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: ()=>import('../views/Home.vue'),
    children:[
      {
        path:'nowplaying',
        component:()=>import('../views/Nowplaying.vue')
      },
      {
        path:'comingsong',
        component:()=>import('../views/Comingsong.vue')
      }
    ],
    redirect:"/home/nowplaying"
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/nowdetail/:id',
    name:'nowdetail',
    component:()=>import('../views/Nowdetail.vue')
  },
  {
    path:'/comingdetail/:id',
    name:'comingdetail',
    component:()=>import('../views/Comingdetail.vue')
  },
  {
    path:'/location',
    name:'location',
    component:()=>import('../views/Location.vue')
  },
  {
    path:'/',
    redirect:"/Location"
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
