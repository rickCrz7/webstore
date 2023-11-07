import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    {
        path: '/momentum4',
        name: 'Momentum4',
        component: () => import('./views/Product1.vue')
    },
    {
        path: '/WH-1000XM4',
        name: 'XM4',
        component: () => import('./views/Product2.vue')
    },
    {
        path: '/QuietComfort',
        name: 'QuietComfort',
        component: () => import('./views/Product3.vue')
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: () => import('./views/Checkout.vue')
    },
    {
        path: '/order',
        name: 'ThankYou',
        component: () => import('./views/ThankYou.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
