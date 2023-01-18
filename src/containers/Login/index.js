import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import LoginImg from '../../assets/login-image.svg'
import Logo from '../../assets/logo.svg'
import { Button } from '../../components'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import {
  LoginImage,
  Container,
  ContainerItems,
  Input,
  Label,
  SignInLink,
  Error
} from './styles'

export function Login() {
  const navigate = useNavigate()
  const { putUserData } = useUser()

  const schema = yup
    .object({
      email: yup
        .string()
        .email('Digite um e-mail válido')
        .required('O e-mail é obrigatório'),
      password: yup
        .string()
        .required('A senha é obrigatória')
        .min(6, 'A senha deve conter no mínimo 6 dígitos')
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Seja bem-vindo (a)',
        error: 'Verifique seus dados'
      }
    )
    putUserData(data)

    setTimeout(() => {
      navigate('/')
    }, 1000)
  }

  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />
      <ContainerItems>
        <img src={Logo} alt="logo-code-burger" />
        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <Error>{errors.email?.message}</Error>

          <Label>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <Error>{errors.password?.message}</Error>

          <Button type="submit" style={{ marginTop: 20, marginBottom: 20 }}>
            Login
          </Button>
        </form>

        <SignInLink>
          Não possui conta ?
          <Link className="link" to="/register">
            Cadastre-se
          </Link>
        </SignInLink>
      </ContainerItems>
    </Container>
  )
}
