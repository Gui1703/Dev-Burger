import React from 'react'
import { useLocation } from 'react-router-dom'

import { SideMenuAdmin } from '../../components/SideMenuAdmin'
import EditProduct from './EditProduct'
import ListProducts from './ListProducts'
import NewProduct from './NewProduct'
import Orders from './Orders'
import { Container } from './styles'

export function Admin() {
  const location = useLocation()

  const mountComponents = () => {
    if (location.pathname === '/admin' && location.state === null) {
      return <Orders />
    } else if (location.pathname === '/admin/orders') {
      return <Orders />
    } else if (location.pathname === '/admin/products') {
      return <ListProducts />
    } else if (location.pathname === '/admin/new-product') {
      return <NewProduct />
    } else if (location.pathname === '/admin/edit-product') {
      return <EditProduct />
    }
  }

  return (
    <Container>
      <SideMenuAdmin />
      {mountComponents()}
    </Container>
  )
}
