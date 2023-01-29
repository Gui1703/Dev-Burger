import PropTypes from 'prop-types'
import React from 'react'
import { Navigate } from 'react-router-dom'

import { Header } from '../components/Header'

function PrivateRoute({ component: Component, ...rest }) {
  const user = JSON.parse(localStorage.getItem('codeburger:userData'))

  if (!user) {
    return <Navigate to="/login" />
  }

  if (!user.admin && rest.isAdmin) {
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
