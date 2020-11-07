import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Homepage from '../views/Homepage.js'

const AUTH = gql`
  query authUser($email: String!, $password: String!) {
    authenticate(email: $email, password: $password)
  }
`
function Authentication(props) {
  const formData = props.userCredentials
  const { loading, error, data } = useQuery(AUTH, {
    variables: { email: formData.email, password: formData.password },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error.</p>
  console.log(data.authenticate)
  if (data.authenticate) {
    localStorage.setItem('token', data.authenticate)
    return <Homepage />
  }
}

export default Authentication
