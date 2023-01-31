import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactSelect from 'react-select'

import api from '../../../services/api'
import { ButtonForm, Container, Input, LabelUpload } from './styles'

export default function NewProduct() {
  const [fileName, setFileName] = useState(null)
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

        <LabelUpload htmlFor="file">
          {fileName || (
            <>
              <CloudUploadIcon />
              Imagem do Produto
            </>
          )}
          <input
            id="file"
            type="file"
            accept="image/png, image/jpeg"
            {...register('file')}
            onChange={value => setFileName(value.target.files[0]?.name)}
          />
        </LabelUpload>

        <ReactSelect placeholder="Categoria" />

        <ButtonForm type="submit">Adicionar Produto</ButtonForm>
      </form>
    </Container>
  )
}
