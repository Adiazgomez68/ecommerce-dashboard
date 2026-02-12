<script setup lang="ts">
import { onMounted } from 'vue'
import { useProductStore } from '../stores/product-store'
import ProductList from '../components/ProductList.vue'
import ProductPagination from '../components/ProductPagination.vue'
import WrapperContainer from '../components/common/WrapperContainer.vue'
import LoaderSpinner from '../components/common/LoaderSpinner.vue'

const store = useProductStore()

onMounted(() => {
  store.fetchProducts()
  store.fetchCategories()
})
</script>

<template>
  <WrapperContainer>
    <header class="header">
      <h1>Productos</h1>
    </header>

    <div v-if="store.products.length === 0 && store.loadingProducts" class="loading">
      <LoaderSpinner message="Cargando productos..." />
    </div>

    <div v-else-if="store.products.length > 0" class="content">
      <div class="filters">
        <input type="text" v-model="store.search" placeholder="Buscar producto" />

        <select v-model="store.selectedCategory">
          <option value="all">Todas las categorías</option>
          <option v-for="category in store.categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
      </div>

      <div class="product-list">
        <ProductList :products="store.paginatedProducts" />
      </div>

      <div class="pagination" v-if="store.totalPages > 1">
        <ProductPagination />
      </div>
    </div>

    <div v-else class="content">
      <p>No se encontraron productos</p>
    </div>
  </WrapperContainer>
</template>

<style scoped>
.filters {
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
