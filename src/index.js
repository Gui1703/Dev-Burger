import React from 'react'
import ReactDOM from 'react-dom/client'

import Register from './containers/Register'
import Global from './styles/GlobalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Register />
    <Global />
  </>
)
