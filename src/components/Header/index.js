import React from 'react'

import Cart from '../../assets/cart.svg'
import Person from '../../assets/person.svg'
import {
  Container,
  ContainerLeft,
  ContainerRight,
  ContainerText,
  Line,
  PageLink,
  PageLinkExit
} from './styles'

export function Header() {
  return (
    <Container>
      <ContainerLeft>
        <PageLink>Home</PageLink>
        <PageLink>Ver Produtos</PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink>
          <img src={Cart} alt="carrinho" />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={Person} alt="pessoa" />
        </PageLink>

        <ContainerText>
          <p>Olá, Guilherme</p>
          <PageLinkExit>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
