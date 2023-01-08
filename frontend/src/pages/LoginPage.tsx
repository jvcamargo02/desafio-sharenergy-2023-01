import React from 'react'
import styled from 'styled-components'
import Forms from '../components/Form/Form';
import Input from '../components/Form/Input'
import Logo from '../components/Logo'

export default function LoginPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <Container>
      <Forms>
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
