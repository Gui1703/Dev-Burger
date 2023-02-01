import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Admin, Cart, Home, Login, Products, Register } from '../containers'
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
        <Route path="/cart" element={<PrivateRoute component={Cart} />} />

        <Route
          path="/admin"
          element={<PrivateRoute component={Admin} isAdmin />}
        />
        <Route
          path="/admin/orders"
          element={<PrivateRoute component={Admin} isAdmin />}
        />
        <Route
          path="/admin/products"
          element={<PrivateRoute component={Admin} isAdmin />}
        />
        <Route
          path="/admin/new-product"
          element={<PrivateRoute component={Admin} isAdmin />}
        />
        <Route
          path="/admin/edit-product"
          element={<PrivateRoute component={Admin} isAdmin />}
        />
      </Routes>
    </Router>
  )
}
