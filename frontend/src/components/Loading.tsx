import { CircularProgress } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

export default function Loading() {
    return (
      <Container>
        <CircularProgress />        
      </Container>
    
  )
}

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`
