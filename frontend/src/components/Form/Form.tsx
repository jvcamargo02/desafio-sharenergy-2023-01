import { Button, FormGroupProps, Link } from '@mui/material'
import styled from 'styled-components'

import Logo from '../Logo'

export default function Forms({ children, buttonLabel, linkLabel, href, onSubmit }: { children: React.ReactNode, buttonLabel: string, linkLabel: string, href: string, onSubmit: (event: React.FormEvent<HTMLFormElement>) => void}) {
    console.log(onSubmit)
    return (
        <Form onSubmit={onSubmit}>
    <Logo />
            {children}
            <StyledButton fullWidth type="submit">{buttonLabel}</StyledButton>
            <Link href={href} underline="hover" color="inherit">
                {linkLabel}
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