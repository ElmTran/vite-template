import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomeView/index.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/LoginView/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export function resetRouter() {
    const newRouter = createRouter({
        history: createWebHashHistory(),
        routes,
    });
    router.matcher = newRouter.matcher;
}


export default router
