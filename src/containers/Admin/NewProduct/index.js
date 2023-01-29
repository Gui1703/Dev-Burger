import React, { useEffect } from 'react'

import api from '../../../services/api'
import { Container } from './styles'

export default function NewProduct() {
  useEffect(() => {
    async function loadOrders() {
      await api.post('products')
    }
  }, [])

  return (
    <Container>
      <h1>Hello World</h1>
    </Container>
  )
}
