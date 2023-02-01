import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import { ErrorMessage } from '../../../components'
import { trueOrFalse } from '../../../constants/paths'
import api from '../../../services/api'
import { ButtonForm, Container, Input, LabelUpload, Select } from './styles'

export default function EditProduct() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const [fileName, setFileName] = useState(state?.url ?? '')
  const [file, setFile] = useState(state?.url ?? null)
  const [fileError, setFileError] = useState(false)
  const [categories, setCategories] = useState([])

  console.log(state)

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

    const formData = new FormData()

    formData.append('name', data.productName)
    formData.append('price', data.price)
    formData.append('category_id', data.category_id.id)
    formData.append('offer', data.offer.value)
    formData.append('file', file)

    await toast.promise(api.put(`products/${state.id}`, formData), {
      pending: 'Editando produto...',
      success: 'Produto editado com sucesso',
      error: 'Falha ao tentar editar o seu produto, tente novamente'
    })

    setTimeout(() => {
      navigate('/admin/products')
    }, 2000)
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
        <Input
          placeholder="Nome"
          type="text"
          defaultValue={state.name}
          {...register('productName')}
        />
        <ErrorMessage>{errors.productName?.message}</ErrorMessage>

        <Input
          placeholder="Preço"
          type="number"
          defaultValue={state.price}
          {...register('price')}
        />
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
          defaultValue={
            state.offer
              ? { name: 'Sim', value: true }
              : { name: 'Não', value: false }
          }
          control={control}
          render={({ field }) => {
            return (
              <Select
                {...field}
                options={trueOrFalse}
                getOptionLabel={cat => cat.name}
                getOptionValue={cat => cat.value}
                placeholder="Oferta"
                defaultValue={
                  state.offer
                    ? { name: 'Sim', value: true }
                    : { name: 'Não', value: false }
                }
              />
            )
          }}
        ></Controller>
        <ErrorMessage>{errors.offer?.message}</ErrorMessage>

        <Controller
          name="category_id"
          control={control}
          defaultValue={state.category}
          render={({ field }) => {
            return (
              <Select
                {...field}
                options={categories}
                getOptionLabel={cat => cat.name}
                getOptionValue={cat => cat.id}
                placeholder="Categorias"
                defaultValue={state.category}
              />
            )
          }}
        ></Controller>
        <ErrorMessage>{errors.category_id?.message}</ErrorMessage>

        <ButtonForm>Editar Produto</ButtonForm>
      </form>
    </Container>
  )
}
