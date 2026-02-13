<script setup lang="ts">
import { onMounted } from 'vue'
import { useProductStore } from '../stores/product-store'
import ProductList from '../components/product/ProductList.vue'
import ProductPagination from '../components/product/ProductPagination.vue'
import WrapperContainer from '../components/common/WrapperContainer.vue'
import LoaderSpinner from '../components/common/LoaderSpinner.vue'
import CategoriesSelector from '../components/product/CategoriesSelector.vue'

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
        <div class="search-container">
          <input
            type="text"
            v-model="store.search"
            @input="store.page = 1"
            placeholder="Buscar producto..."
          />
        </div>

        <CategoriesSelector />
      </div>

      <template v-if="store.paginatedProducts.length > 0">
        <div class="product-list">
          <ProductList :products="store.paginatedProducts" />
        </div>

        <div class="pagination-container" v-if="store.totalPages > 1">
          <p class="total-products">
            Mostrando <strong>{{ store.paginatedProducts.length }}</strong> de
            <strong>{{ store.products.length }}</strong> productos
          </p>
          <ProductPagination />
        </div>
      </template>

      <template v-else>
        <p class="no-products">No se encontraron productos relacionados.</p>
      </template>
    </div>

    <div v-else class="no-products">
      <p>No se encontraron productos.</p>
    </div>
  </WrapperContainer>
</template>

<style scoped>
.content {
  border: 1px solid #eeeded;
  border-radius: 8px;
  background-color: #fff;
}

.header {
  margin-bottom: 1rem;
}

.header h1 {
  font-weight: 600;
  color: #333333;
}

.filters {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 12px;
  padding: 12px;
}

.search-container {
  position: relative;
  flex: 1;
}

.pagination-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px 10px 12px;
}

.total-products {
  font-size: 13px;
  color: #616162;
}

.no-products {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #616162;
  padding: 12px;
}

@media (min-width: 768px) {
  .filters {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .search-container {
    max-width: 20rem;
  }
}
</style>
