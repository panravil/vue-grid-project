import { createWebHistory, createRouter } from 'vue-router'
import HomePage from '../pages/Home.vue'
import CustomGrid from '../pages/CustomGrid.vue'
import VueGrid from '../pages/VueGrid.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: "/customgrid",
        name: "customgrid",
        component: CustomGrid
    },
    {
        path: "/vuegrid",
        name: "vuegrid",
        component: VueGrid
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;