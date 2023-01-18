import PropTypes from 'prop-types'
import React from 'react'

import { Button } from '../'
import formatCurrency from '../../utils/formatCurrency'
import { Container, Image, ProductName, ProductPrice } from './style'

export function CardProduct({ product }) {
  return (
    <Container>
      <Image src={product.url} />

      <div>
        <ProductName>{product.name}</ProductName>

        <div>
          <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
          <Button>Adicionar</Button>
        </div>
      </div>
    </Container>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object
}
