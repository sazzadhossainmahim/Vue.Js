import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditVue from '@/components/Edit.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import('../components/Add.vue'),
  },
  {
    path: '/customer/:id',
    name: 'customerDetails',
    component: () => import('../components/CustomerDetails.vue'),
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: () => import('../components/Edit.vue'),
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
