import React from 'react'
import { useQuery, gql } from '@apollo/client'

const msgQuery = gql`
  query authenticateCreds {
    authenticate(email: "mehak", password: "sainiMEhak")
  }
`
function Message() {
  const { loading, error, data } = useQuery(msgQuery)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error.</p>
  return <p>{data.hello}</p>
}

export default Message
