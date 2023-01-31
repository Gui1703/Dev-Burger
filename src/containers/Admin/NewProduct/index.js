import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import { ErrorMessage } from '../../../components'
import { trueOrFalse } from '../../../constants/paths'
import api from '../../../services/api'
import { ButtonForm, Container, Input, LabelUpload, Select } from './styles'

export default function NewProduct() {
  const [fileName, setFileName] = useState('')
  const [file, setFile] = useState()
  const [fileError, setFileError] = useState(false)
  const [categories, setCategories] = useState([])

  const schema = yup
    .object({
      productName: yup.string().required('O campo é obrigatório'),
      price: yup.string().required('O campo é obrigatório'),
      category_id: yup.mixed().required('O campo é obrigatório'),
      offer: yup.mixed().nullable().required('O campo é obrigatório')
    })
    .required()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const submit = async data => {
    if (!file) return setFileError(true)
    console.log(data)
    const formData = new FormData()

    formData.append('name', data.productName)
    formData.append('price', data.price)
    formData.append('category_id', data.category_id.id)
    formData.append('offer', data.offer.value)
    formData.append('file', file)

    await toast.promise(api.post('products', formData), {
      pending: 'Cadastrando produto...',
      success: 'Produto cadastrado com sucesso',
      error: 'Falha ao tentar cadastrar o seu produto, tente novamente'
    })

    console.log(file)
  }

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')
      setCategories(data)
    }

    loadCategories()
  }, [])

  const handleFile = value => {
    setFile(value.target.files[0])
    setFileName(value.target.files[0]?.name)
  }

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(submit)}>
        <Input placeholder="Nome" type="text" {...register('productName')} />
        <ErrorMessage>{errors.productName?.message}</ErrorMessage>

        <Input placeholder="Preço" type="number" {...register('price')} />
        <ErrorMessage>{errors.price?.message}</ErrorMessage>

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
            onChange={value => handleFile(value)}
          />
        </LabelUpload>
        <ErrorMessage>
          {fileError && !file ? 'O campo é obrigatório' : ''}
        </ErrorMessage>

        <Controller
          name="offer"
          control={control}
          render={({ field }) => {
            return (
              <Select
                {...field}
                options={trueOrFalse}
                getOptionLabel={cat => cat.name}
                getOptionValue={cat => cat.value}
                placeholder="Oferta"
              />
            )
          }}
        ></Controller>
        <ErrorMessage>{errors.offer?.message}</ErrorMessage>

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
        <ErrorMessage>{errors.category_id?.message}</ErrorMessage>

        <ButtonForm>Adicionar Produto</ButtonForm>
      </form>
    </Container>
  )
}
