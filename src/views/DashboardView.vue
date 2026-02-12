<script setup lang="ts">
import { useProductStore } from '../stores/product-store'

const store = useProductStore()
</script>

<template>
  <div class="dashboard">
    <header class="header">
      <h1>Productos</h1>
    </header>

    <div class="content">
      <div class="filters">
        <input type="text" v-model="store.search" placeholder="Buscar producto" />

        <select name="categories" v-model="store.selectedCategory">
          <option value="all">Todas las categorías</option>
          <option v-for="category in store.categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  padding: 2rem;
  font-family: Arial, Helvetica, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  font-size: x-small;
  border-bottom: 1px solid #ccc;
}
</style>
