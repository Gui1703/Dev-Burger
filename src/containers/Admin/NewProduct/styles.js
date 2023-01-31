import styled from 'styled-components'

import { Button } from '../../../components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 30px;

  form {
    background: #565656;
    border-radius: 10px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 23px;
    width: 417px;
  }
`

export const Input = styled.input`
  outline: none;
  background: #ffffff;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  height: 50px;
  padding-left: 21px;
  width: 100%;

  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #333333;
`
export const ButtonForm = styled(Button)`
  width: 100%;
  height: 48px;
  margin-top: 80px;
`
export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px dashed #fff;
  background: transparent;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  height: 50px;
  padding-left: 21px;
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #fff;
  gap: 10px;

  input {
    opacity: 0;
    display: none;
  }
`
