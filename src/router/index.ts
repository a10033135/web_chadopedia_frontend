import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PediaView from "@/views/feature/PediaView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: async () => await import('../views/HomeView.vue'),
            children: [
                {
                    path: '',
                    name: 'home-default',
                    component: async () => await import('../views/feature/PediaView.vue')
                },
                {
                    path: '/pedia',
                    name: 'pedia',
                    component: async () => await import('../views/feature/PediaView.vue')
                },
                {
                    path: 'about',
                    name: 'about',
                    component: async () => await import('../views/feature/AboutView.vue')
                }
            ]
        },
    ]
})

export default router
