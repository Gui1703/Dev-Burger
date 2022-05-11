import PropTypes from 'prop-types'
import React from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRoute({ component: Component, ...rest }) {
  const user = localStorage.getItem('codeburger:userData')

  if (!user) {
    return <Navigate to="/login" />
  }

  return <Component />
}
export default PrivateRoute

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
