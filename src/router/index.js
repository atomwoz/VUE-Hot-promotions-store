import { createRouter, createWebHistory } from 'vue-router'

//static load
//@ oznacza katalog /src

import Home from '@/views/HomeView.vue'
import PromotionView from '@/views/PromotionView.vue'
//import AboutView from '@/views/AboutView.vue'

//lazy load - renderuje się tylko gdy jest potrzebny a nie z gory

const NotFoundView = () => import('@/views/NotFoundView.vue')
const About = () => "About"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/promotion/:id',
      name: 'PromotionView',
      component: PromotionView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFoundView',
      component: NotFoundView
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/RegisterView.vue')
    }
  ]
})

export default router
