import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background: #3c3c3c;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
  width: 300px;
  top: 0;
  left: 0;
  margin-right: 24px;

  hr {
    margin: 50px 15px;
  }
`

export const ItemContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  background: ${props => (props.isActive ? '#565656' : 'transparent')};
  border-radius: 2px;
  margin: 8px 15px;
  gap: 17px;
  padding-left: 20px;
  cursor: pointer;
`

export const ListLink = styled(Link)`
  text-decoration: none;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`
