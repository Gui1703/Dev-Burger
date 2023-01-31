import PropTypes from 'prop-types'
import React from 'react'

import { Error } from './styles'

export function ErrorMessage({ children }) {
  return <Error>{children}</Error>
}

ErrorMessage.propTypes = {
  children: PropTypes.string
}
