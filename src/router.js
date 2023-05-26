import { createRouter, createWebHistory } from 'vue-router'
const Inicio = () => import('../src/components/views/Inicio')
const PublicarVaga = () => import('../src/components/views/PublicarVaga')


const routes = [
    {
        path: '/',
        component: Inicio,
    },
    {
        path: '/publicarvaga',
        component: PublicarVaga,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router