import React, { FormEventHandler } from 'react'
import styled from 'styled-components'
import Forms from '../components/Form/Form';
import Input from '../components/Form/Input'
import Logo from '../components/Logo'

export default function LoginPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const buttonLabel = "Entrar"
  const linkLabel = "Não tem uma conta? Cadastre-se"
  const href = "/register"
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email,
      password)
  }
  
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(email
      , password
    )
  }

  return (
    <Container>
      <Forms onSubmit={handleSubmit} linkLabel={linkLabel} href={href} buttonLabel={buttonLabel}>
        <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input label="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Forms>
    </Container>
  )
}


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;  
  max-height: -webkit-fill-available;
  `
