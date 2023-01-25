import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 10px;
  width: max-content;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  border-bottom: 1px solid #b5b5b5;

  p {
    font-size: 16px;
    color: #b5b5b5;
  }
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: max-content;
  grid-gap: 10px 15px;
  padding: 10px;

  img {
    width: 182px;
    height: 167px;
    border-radius: 20px;
  }

  p {
    font-size: 16px;
    color: #000;
  }
`

export const EmptyCart = styled.p`
  padding: 20px;
  font-weight: bold;
  text-align: center;
`

export const QuantityContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 20px;

  button {
    cursor: pointer;
    font-size: 24px;
    font-weight: bold;
    background: transparent;
    border: none;
  }

  p {
    font-size: 16px;
    color: #000;
    margin-top: 5px;
  }
`
