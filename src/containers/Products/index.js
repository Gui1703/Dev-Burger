import React, { useEffect, useState } from 'react'

import ProductLogo from '../../assets/product-logo.svg'
import api from '../../services/api'
import { CategoriesMenu, CategoryButton, Container, ProductImg } from './styles'

function Products() {
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todas' }, ...data]

      setCategories(newCategories)
    }

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
    </Container>
  )
}

export default Products
