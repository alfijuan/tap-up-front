import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/appointments',
    name: 'Appointments',
    component: () => import('../views/Appointments.vue')
  },
  {
    path: '/appointments/:id',
    name: 'AppointmentsForm',
    component: () => import('../views/AppointmentsForm.vue')
  },
  {
    path: '/cars',
    name: 'Cars',
    component: () => import('../views/Cars.vue')
  },
  {
    path: '/cars/:id',
    name: 'CarsForm',
    component: () => import('../views/CarsForm.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
export default router