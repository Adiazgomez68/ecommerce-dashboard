<script setup lang="ts">
import WrapperContainer from '../components/common/WrapperContainer.vue'
import { useProductStore } from '../stores/product-store'
import { useRoute, useRouter } from 'vue-router'
import { onMounted } from 'vue'
import ProductDetail from '../components/product/ProductDetail.vue'
import LoaderSpinner from '../components/common/LoaderSpinner.vue'
import ArrowLeft from '../components/common/icons/ArrowLeft.vue'

const store = useProductStore()
const path = useRoute()
const router = useRouter()

const previousPage = () => {
  router.push({ name: 'products' })
}

onMounted(() => {
  store.fetchProduct(Number(path.params.id))
})
</script>

<template>
  <WrapperContainer>
    <header class="header">
      <button class="back-btn" @click="previousPage">
        <ArrowLeft />
      </button>
      <h1>Detalle del Producto</h1>
    </header>

    <div v-if="store.loadingProducts" class="loading">
      <LoaderSpinner message="Cargando producto..." />
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
.header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.header h1 {
  font-weight: 600;
  color: #333333;
}

.content {
  margin-top: 1rem;
}

.back-btn {
  padding: 0.6rem;
  background: white;
  color: #616162;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
