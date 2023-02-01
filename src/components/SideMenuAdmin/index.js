import LogoutIcon from '@mui/icons-material/Logout'
import React from 'react'
import { useLocation } from 'react-router-dom'

import { useUser } from '../../hooks/UserContext'
import listLinks from './menu-list'
import { Container, ItemContainer, ListLink } from './styles'

export function SideMenuAdmin() {
  const { logout } = useUser()
  const location = useLocation()
  return (
    <Container>
      <hr></hr>

      {listLinks.map(item => (
        <ItemContainer
          key={item.id}
          isActive={location.pathname === `/admin/${item.link}`}
          style={
            location.pathname === '/admin' &&
            location.state === null &&
            item.label === 'Pedidos'
              ? { background: '#565656' }
              : {}
          }
        >
          <img src={item.icon} />
          <ListLink to={`/admin/${item.link}`}>{item.label}</ListLink>
        </ItemContainer>
      ))}

      <hr></hr>

      <ItemContainer style={{ position: 'fixed', bottom: '30px' }}>
        <LogoutIcon style={{ color: '#fff' }} />
        <ListLink to={'/login'} onClick={logout}>
          Sair
        </ListLink>
      </ItemContainer>
    </Container>
  )
}
