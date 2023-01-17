import React, { useEffect, useState } from 'react'

import ProductLogo from '../../assets/product-logo.svg'
import CardProduct from '../../components/CardProduct'
import api from '../../services/api'
import {
  CategoriesMenu,
  CategoryButton,
  Container,
  ProductImg,
  ProductsContainer
} from './styles'

function Products() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todas' }, ...data]

      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data } = await api.get('products')

      console.log(data)
      setProducts(data)
    }

    loadProducts()
    loadCategories()
  }, [])

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
        {products &&
          products.map(product => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </Container>
  )
}

export default Products
