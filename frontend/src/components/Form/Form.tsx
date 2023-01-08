import { Button, Link } from '@mui/material'
import { isDisabled } from '@testing-library/user-event/dist/utils'
import styled from 'styled-components'

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
            <Link href={formOptions.href} underline="hover" color="inherit">
                {formOptions.linkLabel}
            </Link>
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