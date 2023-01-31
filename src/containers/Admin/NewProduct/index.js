import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import ReactSelect from 'react-select'

import api from '../../../services/api'
import { ButtonForm, Container, Input } from './styles'

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
        <Input placeholder="Nome" type="text" {...register('productName')} />

        <Input placeholder="Preço" type="number" {...register('price')} />

        <Input type="file" accept="image/png, image/jpeg" />

        <ReactSelect placeholder="Categoria" />

        <ButtonForm type="submit">Adicionar Produto</ButtonForm>
      </form>
    </Container>
  )
}
