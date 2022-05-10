import React from 'react'

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
  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-image" />
      <ContainerItems>
        <img src={Logo} alt="logo-code-burger" />
        <h1>Login</h1>

        <Label>Email</Label>
        <Input />

        <Label>Senha</Label>
        <Input />

        <Button>Login</Button>

        <SignInLink>
          Não possui conta ? <a>Cadastre-se</a>
        </SignInLink>
      </ContainerItems>
    </Container>
  )
}

export default Login
