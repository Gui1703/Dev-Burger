import PropTypes from 'prop-types'
import React from 'react'

import { Button } from '../'
import { useCart } from '../../hooks/CardContext'
import formatCurrency from '../../utils/formatCurrency'
import { Container, Image, ProductName, ProductPrice } from './style'

export function CardProduct({ product }) {
  const { putProductsInCart } = useCart()
  return (
    <Container>
      <Image src={product.url} />

      <div>
        <ProductName>{product.name}</ProductName>

        <div>
          <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
          <Button onClick={() => putProductsInCart(product)}>Adicionar</Button>
        </div>
      </div>
    </Container>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object
}
