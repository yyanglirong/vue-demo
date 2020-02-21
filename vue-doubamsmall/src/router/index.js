import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)
const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
    children: [{
      path: '/reading',
      component: () => import('../views/reading.vue')
    }, {
      path: '/movie',
      component: () => import('../views/movie.vue')
    }, {
      path: '/my',
      component: () => import('../views/my.vue')
    }, {
      path: '/music',
      component: () => import('../views/music.vue')
    }],
    redirect: "/reading"
  },
  {
    path: '/moviedetail/:subTitle',
    name: 'moviedetail',
    component: () => import('../views/Moviedetail.vue')
  },
  {
    path: '/detailm/:id',
    name: 'detailm',
    component: () => import('../views/Detailm.vue')
  },
  {
    path: '/musicdetail/:id',
    name: 'musicdetail',
    component: () => import('../views/Musicdetail.vue')
  },
  {
    path:'/readdetail/:postId',
    name:'readdetail',
    component:()=>import('../views/Readdetail.vue')
  },
  {
    path: '/a',
    redirect: '/b'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router