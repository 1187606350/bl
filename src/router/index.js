import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/index/Home.vue'
import Rank from '../views/index/Rank.vue'
import Shop from '../views/index/Shop.vue'
import Download from '../views/index/Download.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Rank',
    name: 'Rank',
    component: Rank
  },
  {
    path: '/Shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/Download',
    name: 'Download',
    component: Download
  },
  {
      path: '*',
      name: 'Home',
      redirect: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
