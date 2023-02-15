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
            component: HomeView,
            children: [
                {
                    path: 'feature',
                    component: FeatureView,
                    children: [
                        {
                            path: 'pedia',
                            name: 'pedia',
                            component: PediaView
                        }
                    ]
                },
            ]
        },
    ]
})

export default router
