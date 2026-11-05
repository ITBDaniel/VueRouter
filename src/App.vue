<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <h2>FoodExplorer</h2>
  <nav class="nav">
    <RouterLink to="/">Inici</RouterLink>
    <RouterLink to="/recipes">Receptes</RouterLink>
  </nav>

  <main class="content">
    <RouterView />
  </main>
</template>
