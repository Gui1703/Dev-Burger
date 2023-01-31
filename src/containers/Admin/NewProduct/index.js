import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import ReactSelect from 'react-select'

import { Button } from '../../../components'
import api from '../../../services/api'
import { Container, Input, Label } from './styles'

export default function NewProduct() {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)

  useEffect(() => {
    async function loadOrders() {
      await api.post('products')
    }
  }, [])

  return (
    <Container>
      <form noValidate onSubmit={onSubmit}>
        <Label>Produto</Label>
        <Input type="text" {...register('productName')} />

        <Label>Preço</Label>
        <Input type="number" {...register('price')} />

        <Label>Upload</Label>
        <Input type="file" accept="image/png, image/jpeg" />

        <ReactSelect />

        <Button type="submit">Adicionar Produto</Button>
      </form>
    </Container>
  )
}
