import EditIcon from '@mui/icons-material/Edit'
import styled from 'styled-components'

export const Container = styled.div`
  width: 50%;

  img {
    width: 60px;
    border-radius: 5px;
  }
`

export const IconEdit = styled(EditIcon)`
  cursor: pointer;
  color: #323d5d;
  border-radius: 5px;
  border: 1px solid #323d5d;
`
