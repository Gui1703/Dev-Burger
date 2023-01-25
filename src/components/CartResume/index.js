import React, { useEffect, useState } from 'react'

import { useCart } from '../../hooks/CardContext'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import { Container, ContainerItems, ContainerPrice } from './styles'

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(10)
  const { cartProducts } = useCart()

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)

    setFinalPrice(sumAllItems)
  }, [cartProducts])

  return (
    <div>
      <Container>
        <ContainerItems>
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">{formatCurrency(finalPrice)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">{formatCurrency(deliveryTax)}</p>
        </ContainerItems>

        <ContainerPrice>
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliveryTax)}</p>
        </ContainerPrice>
      </Container>

      <Button style={{ width: '100%', marginTop: '30px' }}>
        Finalizar pedido
      </Button>
    </div>
  )
}
