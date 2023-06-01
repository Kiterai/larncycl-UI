import { createRouter, createWebHistory } from 'vue-router'
import HomeViewVue from '../views/HomeView.vue'
import CourcesViewVue from '@/views/CourcesView.vue'
import CalenderViewVue from '@/views/CalenderView.vue'
import CourceDetailViewVue from '@/views/CourceDetailView.vue'
import NewCourceViewVue from '@/views/NewCourceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewVue
    },
    {
      path: '/cources',
      name: 'cources',
      component: CourcesViewVue
    },
    {
      path: '/cources/new',
      name: 'new-cource',
      component: NewCourceViewVue
    },
    {
      path: '/calender',
      name: 'calender',
      component: CalenderViewVue
    },
    {
      path: '/cource/:id',
      name: 'courcedetail',
      component: CourceDetailViewVue
    }
  ]
})

export default router
