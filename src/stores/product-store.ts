import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '../types/product'
import ProductApi from '../services/product-api'

export const useProductStore = defineStore('product', () => {
  const products = ref<Product[]>([])
  const categories = ref<string[]>([])
  const loadingProducts = ref<boolean>(false)
  const loadingCategories = ref<boolean>(false)

  const search = ref<string>('')
  const selectedCategory = ref<string>('all')
  const page = ref<number>(1)
  const limit = ref<number>(10)

  const filteredProducts = computed(() => {
    let result = products.value

    if (search.value) {
      result = result.filter((product) =>
        product.title.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()),
      )
    }

    if (selectedCategory.value) {
      result = result.filter((product) => product.category === selectedCategory.value)
    }

    return result
  })

  const paginatedProducts = computed(() => {
    const start = (page.value - 1) * limit.value
    const end = start + limit.value
    return filteredProducts.value.slice(start, end)
  })

  const totalPages = computed(() => {
    return Math.ceil(filteredProducts.value.length / limit.value)
  })

  const fetchProducts = async () => {
    try {
      loadingProducts.value = true
      const data = await ProductApi.getProducts()

      if (data) {
        products.value = data
      }
    } catch (error) {
      console.error('Error fetching products', error)
    } finally {
      loadingProducts.value = false
    }
  }

  const fetchCategories = async () => {
    try {
      loadingCategories.value = true
      const data = await ProductApi.getCategories()

      if (data) {
        categories.value = data
      }
    } catch (error) {
      console.error('Error fetching categories', error)
    } finally {
      loadingCategories.value = false
    }
  }

  return {
    products,
    categories,
    loadingProducts,
    loadingCategories,
    search,
    selectedCategory,
    page,
    limit,
    filteredProducts,
    paginatedProducts,
    totalPages,
    fetchProducts,
    fetchCategories,
  }
})
