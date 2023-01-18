import React, { useEffect, useState } from 'react'

import ProductLogo from '../../assets/product-logo.svg'
import { CardProduct } from '../../components'
import api from '../../services/api'
import {
  CategoriesMenu,
  CategoryButton,
  Container,
  ProductImg,
  ProductsContainer
} from './styles'

export function Products() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todas' }, ...data]

      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data } = await api.get('products')

      setProducts(data)
    }

    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) return setFilteredProducts(products)
    const newFilteredProducts = products.filter(
      product => product.category_id === activeCategory
    )
    setFilteredProducts(newFilteredProducts)
  }, [activeCategory, products])

  return (
    <Container>
      <ProductImg src={ProductLogo} alt="logo-product" />

      <CategoriesMenu>
        {categories &&
          categories.map(category => {
            return (
              <CategoryButton
                type="button"
                key={category.id}
                isActiveCategory={activeCategory === category.id}
                onClick={() => {
                  setActiveCategory(category.id)
                }}
              >
                {category.name}
              </CategoryButton>
            )
          })}
      </CategoriesMenu>

      <ProductsContainer>
        {filteredProducts &&
          filteredProducts.map(product => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </Container>
  )
}
