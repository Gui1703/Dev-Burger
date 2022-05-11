import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import LoginImg from '../../assets/login-image.svg'
import Logo from '../../assets/logo.svg'
import {
  LoginImage,
  Button,
  Container,
  ContainerItems,
  Input,
  Label,
  SignInLink,
  Error
} from './styles'

function Login() {
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

  const onSubmit = data => console.log(data)

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

          <Button type="submit">Login</Button>
        </form>

        <SignInLink>
          Não possui conta ? <a>Cadastre-se</a>
        </SignInLink>
      </ContainerItems>
    </Container>
  )
}

export default Login
