<script setup lang="ts">
import type { Product } from '../types/product'
import { useRouter } from 'vue-router'

const props = defineProps<{
  products: Product[]
}>()

const router = useRouter()

const gotToProductDetails = (id: number) => {
  router.push({ name: 'product-detail', params: { id } })
}
</script>

<template>
  <div class="product-list-container">
    <table>
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Categoría</th>
          <th>Precio</th>
          <th>Rating</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="product in props.products" :key="product.id">
          <td>
            <img :src="product.image" :alt="product.title" class="product-image" />
          </td>

          <td>{{ product.title }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.rating.rate }}</td>

          <td>
            <button class="btn-detail" @click="gotToProductDetails(product.id)">Ver Detalle</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.product-list-container {
  margin-top: 0.5rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 0.5rem;
}

th,
td {
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: left;
}

.product-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
}

.btn-detail {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
}

.btn-detail:hover {
  background-color: #0056b3;
}
</style>
