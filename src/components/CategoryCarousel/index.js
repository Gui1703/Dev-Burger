import React, { useEffect } from 'react'

import Category from '../../assets/category.png'
import api from '../../services/api'
import { CategoryImg, Container } from './styles'

function CategoryCarousel() {
  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('categories')

      console.log(response)
    }

    loadCategories()
  }, [])

  return (
    <Container>
      <CategoryImg src={Category} alt="image-category" />
    </Container>
  )
}

export default CategoryCarousel
