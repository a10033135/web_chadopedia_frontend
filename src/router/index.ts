import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FeatureView from "@/views/feature/FeatureView.vue";
import PediaView from "@/views/feature/pedia/PediaView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: async () => await import('../views/HomeView.vue'),
            children: [
                {
                    path: 'feature',
                    component: async () => await import('../views/feature/FeatureView.vue'),
                },
                {
                    path: 'pedia',
                    name: 'pedia',
                    component: async () => await import('../views/feature/pedia/PediaView.vue')
                }
            ]
        },
    ]
})

export default router
