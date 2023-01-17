import PropTypes from 'prop-types'
import React from 'react'

import formatCurrency from '../../utils/formatCurrency'
import Button from '../Button'
import { Container, Image, ProductName, ProductPrice } from './style'

export default function CardProduct({ product }) {
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
