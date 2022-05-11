import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginImage = styled.img`
  height: 80%;
`

export const ContainerItems = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 80%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #fff;
    text-align: center;
    margin-top: 20px;
  }

  > form {
    display: flex;
    flex-direction: column;
  }
`

export const Label = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #fff;
  margin-top: 28px;
  margin-bottom: 5px;
  padding-left: 10px;
`

export const Input = styled.input`
  width: 391.42px;
  height: 38.32px;
  background: #fff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border: ${props => (props.error ? '2px solid #cc1717' : 'none')};
  border-radius: 5px;
  padding-left: 10px;
  font-size: 16px;
`

export const Button = styled.button`
  width: 182.81px;
  height: 36.13px;
  background: #9758a6;
  border: none;
  border-radius: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  cursor: pointer;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #fff;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`

export const SignInLink = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #fff;

  > a {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const Error = styled.span`
  padding: 5px 0 0 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #cc1717;
`
