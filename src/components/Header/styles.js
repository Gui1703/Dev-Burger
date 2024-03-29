import styled from 'styled-components'

export const Container = styled.div`
  height: 72px;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

export const ContainerLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`

export const PageLink = styled.a`
  text-decoration: none;
  color: ${props => (props.isActive ? '#9758A6' : '#555555')};
  cursor: pointer;
  font-size: 16px;
  line-height: 19px;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
`

export const PageLinkExit = styled.a`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #9758a6;
  cursor: pointer;
`

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const Line = styled.div`
  height: 40px;
  border: 0.5px solid #bababa;
`

export const ContainerText = styled.div`
  p {
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #555555;
  }
`
