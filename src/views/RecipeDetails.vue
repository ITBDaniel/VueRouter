<template>
    <h1>receptes</h1>
    <article v-for="recipe in recipes" :key="recipe">
        <img :src="recipe.image" :alt="recipe.name">
        <h2>{{ recipe.name }}</h2>
        <p>{{ recipe.description }}</p>
        <h3>Ingredients:</h3>
        <p v-for="ingredient in recipes.ingredients" :key="ingredient">
            {{ ingredient }}
        </p>
        <h3>Pas a pas:</h3>
        <p v-for="step in recipes.steps" :key="step">
            {{ step }}
        </p>
    </article>
</template>
