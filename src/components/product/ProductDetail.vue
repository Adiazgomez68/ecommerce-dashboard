<script setup lang="ts">
import type { Product } from '../../types/product'
import { capitalize, formatCurrency } from '../../lib/utils.ts'
import StatsCard from '../common/StatsCard.vue'

defineProps<{
  product: Product
}>()
</script>

<template>
  <div class="product-detail-container">
    <div class="product-detail-info">
      <div class="product-image">
        <img :src="product.image" :alt="product.title" />
      </div>

      <div class="product-info">
        <h2 class="product-title">{{ product.title }}</h2>
        <p class="product-description">{{ capitalize(product.description) }}</p>
      </div>
    </div>
  </div>

  <div class="stats">
    <StatsCard title="Precio" :value="formatCurrency(Number(product.price))" />
    <StatsCard title="Categoría" :value="capitalize(product.category)" />
    <StatsCard title="Rating ⭐" :value="product.rating.rate" />
    <StatsCard title="Cantidad de votos" :value="product.rating.count" />
  </div>
</template>

<style scoped>
.product-detail-container {
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  background-color: #ffffff;
}

.product-detail-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

.product-image {
  height: 8rem;
  width: 8rem;
  display: flex;
  border-radius: 0.75rem;
  padding: 0.5rem;
  background-color: #e5e5e5ad;
}

.product-image img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.product-info {
  flex: 1;
}

.product-title {
  font-weight: 600;
  letter-spacing: -0.025rem;
  color: #1f2937;
  text-wrap: balance;
  margin-block-start: 0;
  margin-block-end: 0;
}

.product-description {
  margin-top: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.625;
  color: #6b7280;
}

.product-price {
  font-size: 1.5rem;
  font-weight: bold;
}

.stats {
  margin-bottom: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

@media (min-width: 640px) {
  .product-detail-info {
    flex-direction: row;
    align-items: flex-start;
  }
  .stats {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
