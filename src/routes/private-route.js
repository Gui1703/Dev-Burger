import PropTypes from 'prop-types'
import React from 'react'
import { Navigate } from 'react-router-dom'

import { Header } from '../components/Header'
import { useUser } from '../hooks/UserContext'

function PrivateRoute({ component: Component, ...rest }) {
  const { userData } = useUser()

  if (!userData) {
    return <Navigate to="/login" />
  }

  if (!userData.admin && rest.isAdmin) {
    return <Navigate to="/" />
  }

  return (
    <>
      {!rest.isAdmin && <Header />}
      <Component />
    </>
  )
}
export default PrivateRoute

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
