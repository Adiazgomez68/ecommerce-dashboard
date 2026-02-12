import { BASE_URL } from '@/lib/constants'

class ProductApi {
  static readonly getProducts = async () => {
    const response = await fetch(`${BASE_URL}/products`)

    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }

    return response.json()
  }

  static readonly getProduct = async (id: number) => {
    const response = await fetch(`${BASE_URL}/products/${id}`)

    if (!response.ok) {
      throw new Error('Failed to fetch product')
    }

    return response.json()
  }

  static readonly getCategories = async () => {
    const response = await fetch(`${BASE_URL}/products/categories`)

    if (!response.ok) {
      throw new Error('Failed to fetch categories')
    }

    return response.json()
  }
}

export default ProductApi
