import React from 'react'
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache
} from '@apollo/client'
import styled from 'styled-components'
import Login from './views/Login'
import 'rsuite/dist/styles/rsuite-default.css'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
})

const MainContainer = styled.div`
  padding: 64px;
  height: 100%;
  widht: 100%;
`

//TODO: Improve code!
function App() {
  return (
    <ApolloProvider client={client}>
      <MainContainer>
        <Login />
      </MainContainer>
    </ApolloProvider>
  )
}

export default App
