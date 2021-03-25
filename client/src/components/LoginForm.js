import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup'
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Message,
} from 'rsuite'
import Authentication from './Authentication.js'
const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Please enter your email'),
  password: yup.string().required('Please enter your password'),
})

function LoginForm(props) {
  const { onSignUp } = props

  const [authnFlag, setAuthnFlag] = useState(false)
  const [formData, setFormData] = useState()
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
  })

  const onSubmit = data => {
    setAuthnFlag(true)
    setFormData(data)
  }

  return (
    <Form fluid onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <ControlLabel htmlFor="email">Email</ControlLabel>
        <FormControl name="email" inputRef={register} />
        {errors.email && (
          <Message type="error" description={<p>{errors.email.message}</p>} />
        )}
      </FormGroup>
      <FormGroup>
        <ControlLabel htmlFor="password">Password</ControlLabel>
        <FormControl type="password" name="password" inputRef={register} />
        {errors.password && (
          <Message
            type="error"
            description={<p>{errors.password.message}</p>}
          />
        )}
      </FormGroup>
      <Button type="submit" appearance="primary" style={{ marginRight: 8 }}>
        Login
      </Button>
      {authnFlag && formData && <Authentication userCredentials={formData} />}
      <Button appearance="ghost" onClick={() => onSignUp()}>
        Sign Up
      </Button>
    </Form>
  )
}

export default LoginForm
