import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import { UserProvider } from './hooks/UserContext'
import Routes from './routes/routes'
import Global from './styles/GlobalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <UserProvider>
      <Routes />
    </UserProvider>
    <ToastContainer autoClose={2000} theme="dark" />
    <Global />
  </>
)
