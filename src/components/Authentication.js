import React, { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client'

const AUTH = gql`
  query authUser($email: String!, $password: String!) {
    authenticate(email: $email, password: $password)
  }
`
function Authentication(props) {
  console.log('inside')
  const [status, setStatus] = useState('')

  const { loading, error, data } = useQuery(AUTH, {
    variables: { email: 'mehaksaini2811@gmail.com', password: 'Saini' },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error.</p>
  console.log(data.authenticate)
  if (data.authenticate) {
    return <p>Login Successful</p>
  }
}

export default Authentication
