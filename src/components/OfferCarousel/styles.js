import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  .rec.rec-arrow {
    background: #9758a6;
    color: #efefef;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: none;
  }

  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background: #efefef;
    color: #9758a6;
  }

  .rec.rec-arrow:disabled {
    border: none;
    background: #bebebf;
    color: #efefef;
  }
`

export const OfferImg = styled.img`
  @media screen and (max-width: 600px) {
    width: 60%;
  }
`

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 120%;
    color: #424242;
  }
`

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 16px;
`

export const Button = styled.button`
  height: 50px;
  margin-top: 16px;
  background: #9758a6;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 100%;
  color: #ffffff;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`
