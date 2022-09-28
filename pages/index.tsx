import React from 'react'
import { Container } from '../styles/pages/Home'
import  Head  from 'next/head'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage Gabriel</title>
      </Head>

    
      <h1>ReactJS Structure</h1>
      <p>Gabriel Ximenes Template</p>
    </Container>
  )
}

export default Home