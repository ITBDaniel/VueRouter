import { createRouter, createWebHistory } from 'vue-router'

const routes = [

    {
        path: '/',
        name: "home",
        component: () => import('../views/Home.vue'),
    },

    {
        path: '/recipes',
        name: "recipes",
        component: () => import('../views/Recipes.vue'),
    },

    {
        path: '/recipes/:id',
        name: "detalls",
        component: () => import('../views/RecipeDetails.vue'),
    },

    {
        path: '/:patMatch(.*)*',
        name: "notFound",
        component: () => import('../views/NotFound.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
