import React from 'react'
import { useForm } from 'react-hook-form'

import LoginImg from '../../assets/login-image.svg'
import Logo from '../../assets/logo.svg'
import {
  LoginImage,
  Button,
  Container,
  ContainerItems,
  Input,
  Label,
  SignInLink
} from './styles'

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />
      <ContainerItems>
        <img src={Logo} alt="logo-code-burger" />
        <h1>Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input type="email" {...register('email')} />

          <Label>Senha</Label>
          <Input type="password" {...register('password')} />

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
