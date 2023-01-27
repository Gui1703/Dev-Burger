import React from 'react'

import HomeLogo from '../../assets/home-logo.svg'
import { CategoryCarousel, Header, OfferCarousel } from '../../components'
import { Container, HomeImg } from './styles'

export function Home() {
  return (
    <Container>
      <Header />

      <HomeImg src={HomeLogo} alt="logo-home" />

      <CategoryCarousel />

      <OfferCarousel />
    </Container>
  )
}
