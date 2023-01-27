import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
   
    component: () => import('../views/About.vue')
  },

  {

    path: '/login',
    name: 'login',

    component: () => import('../views/login.vue')
  },
  {

    path: '/register',
    name: 'register',

    component: () => import('../views/register.vue')
  }



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
