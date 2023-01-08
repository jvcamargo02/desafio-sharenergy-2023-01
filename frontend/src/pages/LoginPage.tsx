import React from 'react'
import { useNavigate } from 'react-router-dom';

import Forms from '../components/Form/Form';
import Input from '../components/Form/Input'
import { Container } from '../globalStyle/Container';

export default function LoginPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [formOptions, setFormOptions] = React.useState({
    linkLabel: 'Não tem uma conta? Cadastre-se',
    href: '/register',
    buttonLabel: 'Entrar',
    isDisabled: false
  })
  const navigate = useNavigate();
  
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormOptions({
      ...formOptions,
      buttonLabel: 'Entrando...',
      isDisabled: true
    }) 
    console.log(email
      , password
    )

    navigate('/dashboard/random-user')
    
  }

  return (
    <Container>
      <Forms onSubmit={handleSubmit} formOptions={formOptions}>
        <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input label="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Forms>
    </Container>
  )
}