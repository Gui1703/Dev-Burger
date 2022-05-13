import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../containers/Home'
import Login from '../containers/Login'
import Products from '../containers/Products'
import Register from '../containers/Register'
import PrivateRoute from './private-route'

export default function myRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route exact path="/" element={<PrivateRoute component={Home} />} />
        <Route
          path="/products"
          element={<PrivateRoute component={Products} />}
        />
      </Routes>
    </Router>
  )
}
