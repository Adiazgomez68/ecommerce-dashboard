import { createRouter, createWebHistory } from 'vue-router'
import DashboardLayout from '../layouts/DashboardLayout.vue'
import ProductView from '../views/ProductView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DashboardLayout,
      redirect: '/products',
      children: [
        {
          path: '/products',
          name: 'products',
          component: ProductView,
        },
        {
          path: 'products/:id',
          name: 'product-detail',
          component: ProductDetailView,
        },
      ],
    },
  ],
})

export default router
