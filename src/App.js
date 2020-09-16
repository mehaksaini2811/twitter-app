import React from 'react'
import styled from 'styled-components'
import Login from './views/Login'
import LoginForm from './components/LoginForm'

import 'rsuite/dist/styles/rsuite-default.css'

const MainContainer = styled.div`
  padding: 64px;
  height: 100%;
  widht: 100%;
`

//TODO: Improve code!
function App() {
  return (
    <MainContainer>
      <Login />
    </MainContainer>
  )
}

export default App
