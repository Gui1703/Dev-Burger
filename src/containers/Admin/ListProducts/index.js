import CheckIcon from '@mui/icons-material/Check'
import ClearIcon from '@mui/icons-material/Clear'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'

import api from '../../../services/api'
import formatCurrency from '../../../utils/formatCurrency'
import { Container, IconEdit } from './styles'

export default function ListProducts() {
  const [products, setProducts] = useState([])

  console.log(products)

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('products')

      setProducts(data)
    }
    loadProducts()
  }, [])
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ width: '100%' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Produto</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell align="center">Oferta</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.length > 0 &&
              products.map(product => (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell>{formatCurrency(product.price)}</TableCell>
                  <TableCell align="center">
                    {product.offer ? (
                      <CheckIcon style={{ color: '#228b22' }} />
                    ) : (
                      <ClearIcon style={{ color: '#cc1717' }} />
                    )}
                  </TableCell>
                  <TableCell>
                    <img src={product.url} alt="imagem do produto" />
                  </TableCell>
                  <TableCell>
                    <IconEdit />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
