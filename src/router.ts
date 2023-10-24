import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    {
        path: '/momentum4',
        name: 'Momentum4',
        component: () => import('./views/Product1.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
