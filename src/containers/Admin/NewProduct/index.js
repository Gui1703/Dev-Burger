import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import api from '../../../services/api'
import { ButtonForm, Container, Input, LabelUpload, Select } from './styles'

export default function NewProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const { register, handleSubmit, control } = useForm()

  const submit = data => console.log(data)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')
      setCategories(data)
    }

    loadCategories()
  }, [])

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(submit)}>
        <Input placeholder="Nome" type="text" {...register('productName')} />

        <Input placeholder="Preço" type="number" {...register('price')} />

        <LabelUpload htmlFor="image-input">
          {fileName || (
            <>
              <CloudUploadIcon />
              Imagem do Produto
            </>
          )}
          <input
            type="file"
            id="image-input"
            accept="image/png, image/jpeg"
            {...register('image')}
            onChange={value => setFileName(value.target.files[0]?.name)}
          />
        </LabelUpload>

        <Controller
          name="category_id"
          control={control}
          render={({ field }) => {
            return (
              <Select
                {...field}
                options={categories}
                getOptionLabel={cat => cat.name}
                getOptionValue={cat => cat.id}
                placeholder="Categorias"
              />
            )
          }}
        ></Controller>

        <ButtonForm>Adicionar Produto</ButtonForm>
      </form>
    </Container>
  )
}
