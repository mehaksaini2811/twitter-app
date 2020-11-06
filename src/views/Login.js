import React, { useState } from 'react'
import { Button, Modal, Container, Content, FlexboxGrid, Panel } from 'rsuite'
import styled from 'styled-components'

import LoginForm from '../components/LoginForm'
import RegisterUserModal from '../components/RegisterUserModal'
import Test from '../components/Test'
import Authentication from '../components/Authentication.js'

const Title = styled.h3`
  text-align: center;
  color: DeepSkyBlue;
`

const LoginImg = styled.img`
  height: 120px;
  margin: 32px auto;
`

function RegisterModal(props) {
  const { onHide, visible } = props
  return (
    <RegisterUserModal
      show={visible}
      onHide={() => onHide()}
    ></RegisterUserModal>
  )
}

function Login() {
  console.log('login called')
  const [visible, setVisibility] = useState(false)

  return (
    <Container>
      <Content>
        <Panel
          style={{ maxWidth: 480, margin: '0 auto' }}
          header={<Title>Log in to Twitter</Title>}
          bordered
        >
          <LoginImg src="/img/login.svg" alt="login" />
          <LoginForm onSignUp={() => setVisibility(true)} />
          <RegisterModal
            visible={visible}
            onHide={() => setVisibility(false)}
          />
        </Panel>
      </Content>
    </Container>
  )
}

export default Login
