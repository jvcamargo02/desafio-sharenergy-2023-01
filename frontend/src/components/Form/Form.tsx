import { Button, FormGroupProps } from '@mui/material'
import styled from 'styled-components'

import Logo from '../Logo'

export default function Forms({ children }: FormGroupProps, onSubmit: () => {}, buttonLabel = "Entrar") {
    return (
    <Form onSubmit={onSubmit}>
    <Logo />
            {children}
            <StyledButton fullWidth type="submit">{buttonLabel}</StyledButton>
    </Form>
  )
}



const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  gap: 15px;
  border-radius: 10px;
  background-color: #fff;
`

const StyledButton = styled(Button)`
    background-color: rgba(27,162,161,1) !important;
    color: #fff !important;
    font-weight: 700 !important;
`