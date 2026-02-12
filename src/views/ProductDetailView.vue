<script setup lang="ts">
import WrapperContainer from '../components/common/WrapperContainer.vue'
import { useProductStore } from '../stores/product-store'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import ProductDetail from '../components/ProductDetail.vue'
import LoaderSpinner from '../components/common/LoaderSpinner.vue'

const store = useProductStore()
const router = useRoute()

onMounted(() => {
  store.fetchProduct(Number(router.params.id))
})
</script>

<template>
  <WrapperContainer>
    <header class="header">
      <h1>Detalle del Producto</h1>
    </header>

    <div v-if="store.loadingProducts" class="loading">
      <LoaderSpinner message="Cargando productos..." />
    </div>

    <div v-else-if="store.productDetail" class="content">
      <ProductDetail :product="store.productDetail" />
    </div>

    <div v-else class="content">
      <p>No se encontró el producto.</p>
    </div>
  </WrapperContainer>
</template>

<style scoped>
.content {
  margin-top: 1.7rem;
}
</style>
