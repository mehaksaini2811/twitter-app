const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const jwt = require('jsonwebtoken')

const users = [
  {
    email: 'mehaksaini2811@gmail.com',
    password: 'abcdef',
  },
]

const typeDefs = gql`
  type Query

  extend type Query {
    authenticate(email: String!, password: String!): String
  }
`

const loggingMiddleware = (req, res, next) => {
  const token = jwt.sign({ username: 'Mehak' }, 'sssssssh')
}

const resolvers = {
  Query: {
    authenticate: (_, { email, password }) => {
      console.log(email, password)
      return jwt.sign({ username: email }, 'sssssh')
    },

    // authenticate:({email,password}){
    // return "Hello";
  },
}

const server = new ApolloServer({ typeDefs, resolvers })
const app = express()
//app.use(loggingMiddleware);
server.applyMiddleware({ app })
app.listen({ port: 5000 }, () =>
  console.log(`Server ready at http://localhost:5000${server.graphqlPath}`)
)
