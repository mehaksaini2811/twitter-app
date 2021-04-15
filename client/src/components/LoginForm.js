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
import { gql, useMutation } from '@apollo/client'
import Homepage from '../views/Homepage'
import  '../App.css'
//import Authentication from './Authentication.js'
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
  // const [formData, setFormData] = useState()
  const [loginDetails, setLoginDetails]=useState({
    email:'',
    password:''
  })
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
  })
  const AUTH = gql`
  mutation AuthUser($input: authData) {
    auth(input: $input) {
      email
    }
  }
`
const [signIn, { loading,error ,data}] = useMutation(AUTH)

if(loading)
    return <div className="lds-dual-ring"></div>
if(error)
  return <p>Error Occured</p>
  if(data){
    console.log('email'+data.auth.email)
    return <Homepage/>
  }

const handleChange = (value, event) => {
  setLoginDetails({
    ...loginDetails,
    [event.target.name]: event.target.value,
  })
}


  const onSubmit = () => {
    console.log("onsubmit")
    console.log('loading'+loading)
    signIn({
      variables: {
        input: {
          email: loginDetails.email,
          password:loginDetails.password,
        },
      },
    })
      .then((res) => {
        console.log('signin successful:'+res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

   

  return (
    <Form fluid onSubmit={handleSubmit(onSubmit)}>
   
      <FormGroup>
        <ControlLabel htmlFor="email">Email</ControlLabel>
        <FormControl name="email" inputRef={register} onChange={handleChange}/>
        {errors.email && (
          <Message type="error" description={<p>{errors.email.message}</p>} />
        )}
      </FormGroup>
      <FormGroup>
        <ControlLabel htmlFor="password">Password</ControlLabel>
        <FormControl type="password" name="password" inputRef={register} onChange={handleChange}/>
        {errors.password && (
          <Message
            type="error"
            description={<p>{errors.password.message}</p>}
          />
        )}
      </FormGroup>
      <Button type="submit" appearance="primary" style={{ marginRight: 8 }} >
        Login
      </Button>
      {/* {authnFlag && formData && <Authentication userCredentials={formData} />} */}
      <Button appearance="ghost" onClick={() => onSignUp()}>
        Sign Up
      </Button> 
    </Form>
  )
}

export default LoginForm
