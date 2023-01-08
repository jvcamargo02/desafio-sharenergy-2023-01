import React from 'react'

import Forms from '../components/Form/Form';
import Input from '../components/Form/Input'
import { Container } from '../globalStyle/Container';

export default function Register() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [formOptions, setFormOptions] = React.useState({
    linkLabel: 'Já tem uma conta? Faça login',
    href: '/',
    buttonLabel: 'Registrar',
    isDisabled: false
  })
  
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormOptions({
      ...formOptions,
      buttonLabel: 'Registrando...',
      isDisabled: true
    }) 
    console.log(email
      , password
    )
  }

  return (
    <Container>
      <Forms onSubmit={handleSubmit} formOptions={formOptions}>
      <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input label="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Forms>
    </Container>
  )
}