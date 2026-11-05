<script setup>
import { recipes } from '../recipesData/recipes.js'
</script>

<template>
    <h1>receptes</h1>
    <article v-for="recipe in recipes" :key="recipe">
        <img :src="recipe.image" :alt="recipe.name">
        <h3>{{ recipe.name }}</h3>
        <p>{{ recipe.description }}</p>
        <button>
            <RouterLink :to="'/recipes/' + recipe.id">Veure detall</RouterLink>
        </button>
    </article>
</template>
