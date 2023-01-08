import { Button } from '@mui/material'
import styled from 'styled-components'
import Links from '../Link'

import Logo from '../Logo'

interface IFormOptions {
    linkLabel: string
    href: string
    buttonLabel: string | React.ReactNode
    isDisabled?: boolean
}

export default function Forms({ children, formOptions, onSubmit }: { children: React.ReactNode, formOptions: IFormOptions, onSubmit: (e: React.FormEvent<HTMLFormElement>) => void }) {
    
    return (
        <Form onSubmit={onSubmit}>
    <Logo />
            {children}
            <StyledButton disabled={formOptions.isDisabled} fullWidth type="submit">{formOptions.buttonLabel}</StyledButton>
            <Links href={formOptions.href}>{formOptions.linkLabel}</Links>
    </Form>
  )
}



const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  padding: 50px;
  gap: 15px;
  border-radius: 10px;
  background-color: #fff;

    @media (max-width: 600px) {
        width: 100vw;
        box-sizing: border-box;
        border-radius: 0;
    }
`

const StyledButton = styled(Button)`
    background-color: rgba(27,162,161,1) !important;
    color: #fff !important;
    font-weight: 700 !important;
`