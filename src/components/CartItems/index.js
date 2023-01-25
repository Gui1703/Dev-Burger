import React from 'react'

import { useCart } from '../../hooks/CardContext'
import formatCurrency from '../../utils/formatCurrency'
import { Body, Container, EmptyCart, Header, QuantityContainer } from './styles'

export function CartItems() {
  const { cartProducts } = useCart()

  return (
    <Container>
      <Header>
        <p></p>
        <p>Itens</p>
        <p>Preço</p>
        <p style={{ paddingRight: 30 }}>Quantidade</p>
        <p>Total</p>
      </Header>

      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map(product => (
          <Body key={product.id}>
            <img src={product.url} />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <QuantityContainer>
              <button>-</button>
              <p>{product.quantity}</p>
              <button>+</button>
            </QuantityContainer>
            <p>{formatCurrency(product.quantity * product.price)}</p>
          </Body>
        ))
      ) : (
        <EmptyCart>Carrinho vazio</EmptyCart>
      )}
    </Container>
  )
}
