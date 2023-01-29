import React from 'react'
import { useLocation } from 'react-router-dom'

import { SideMenuAdmin } from '../../components/SideMenuAdmin'
import ListProducts from './ListProducts'
import NewProduct from './NewProduct'
import Orders from './Orders'
import { Container } from './styles'

export function Admin() {
  const location = useLocation()

  const mountComponents = () => {
    if (location.pathname === '/admin' && location.state === null) {
      return <Orders />
    } else if (location.state.slug === 'order') {
      return <Orders />
    } else if (location.state.slug === 'products-admin') {
      return <ListProducts />
    } else if (location.state.slug === 'new-product') {
      return <NewProduct />
    }
  }

  return (
    <Container>
      <SideMenuAdmin />
      {mountComponents()}
    </Container>
  )
}
