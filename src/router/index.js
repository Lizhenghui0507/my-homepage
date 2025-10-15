// router/index.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AboutDetail from '../views/AboutDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about-detail',
    name: 'AboutDetail',
    component: AboutDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router