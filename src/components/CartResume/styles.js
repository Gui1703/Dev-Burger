import styled from 'styled-components'

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 315px;
  height: 301px;
`

export const ContainerItems = styled.div`
  display: grid;
  grid-template-areas:
    'title title'
    'items items-price'
    'delivery-tax delivery-tax-price';
  justify-content: space-between;

  p {
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #222222;
  }

  .title {
    grid-area: title;
    margin-bottom: 20px;
  }
  .items {
    grid-area: items;
    margin-bottom: 14px;
  }
  .items-price {
    grid-area: items-price;
    margin-bottom: 14px;
  }
  .delivery-tax {
    grid-area: delivery-tax;
  }
  .delivery-tax-price {
    grid-area: delivery-tax-price;
  }
`

export const ContainerPrice = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  display: flex;
  justify-content: space-between;
`
