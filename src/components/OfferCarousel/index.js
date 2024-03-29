import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Offer from '../../assets/offer.png'
import { useCart } from '../../hooks/CardContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Button, Container, ContainerItems, Image, OfferImg } from './styles'

export function OfferCarousel() {
  const { putProductsInCart } = useCart()
  const [offers, setOffers] = useState([])

  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('products')
      const onlyOffers = data
        .filter(product => product.offer)
        .map(product => {
          return { ...product, formatedPrice: formatCurrency(product.price) }
        })

      setOffers(onlyOffers)
    }

    loadOffers()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <OfferImg src={Offer} alt="image-offer" />

      <Carousel
        itemsToShow={5}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {offers &&
          offers.map(product => (
            <ContainerItems key={product.id}>
              <Image src={product.url} alt="product photo" />
              <p>{product.name}</p>
              <p>{product.formatedPrice}</p>
              <Button onClick={() => putProductsInCart(product)}>
                Peça agora
              </Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  )
}
