import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FeatureView from "@/views/feature/FeatureView.vue";
import PediaView from "@/views/feature/pedia/PediaView.vue";
import PediaContentView from "@/views/feature/pedia/PediaContentView.vue";
import ContentDetailView from "@/views/feature/pedia/ContentDetailView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            children: [
                {
                    path: '/feature',
                    component: FeatureView
                },
                {
                    path: '/pedia/:id',
                    component: PediaView,
                    children: []
                },
                {
                    path: '/pedia/:id/:sub_id',
                    component: PediaContentView
                }
                ,
                {
                    path: '/content/:id',
                    component: ContentDetailView
                }
            ]
        },
    ]
})

export default router
