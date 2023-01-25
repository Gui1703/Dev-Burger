import React from 'react'

import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import { Container, ContainerItems, ContainerPrice } from './styles'

export function CartResume() {
  return (
    <div>
      <Container>
        <ContainerItems>
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">{formatCurrency(10)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">{formatCurrency(10)}</p>
        </ContainerItems>

        <ContainerPrice>
          <p>Total</p>
          <p>{formatCurrency(100)}</p>
        </ContainerPrice>
      </Container>

      <Button style={{ width: '100%', marginTop: '30px' }}>
        Finalizar pedido
      </Button>
    </div>
  )
}
