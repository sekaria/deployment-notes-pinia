import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import EditView from '@/views/EditView.vue'

const routes = [
  { path: '/', name: 'HomeView', component: HomeView },
  { path: '/edit/:index', name: 'EditView', component: EditView }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
