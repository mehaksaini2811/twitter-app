const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const jwt = require('jsonwebtoken')
const mongoose=require('mongoose')
const PORT=5000||process.env.PORT
const config=require('./config/config')
const typeDefs=require('./graphql/schema')
const {Query}=require('./graphql/resolvers/Query')
const {Mutation}=require('./graphql/resolvers/mutations')
const cors=require('cors')

/*const users = [
  {
    email: 'mehaksaini2811@gmail.com',
    password: 'abcdef',
  },
]*/

/*const typeDefs = gql`
  type Query

  extend type Query {
    authenticate(email: String!, password: String!): String
  }
`*/

/*const loggingMiddleware = (req, res, next) => {
  const token = jwt.sign({ username: 'Mehak' }, 'sssssssh')
}*/

/*const resolvers = {
  Query: {
    authenticate: (_, { email, password }) => {
      console.log(email, password)
      return jwt.sign({ username: email }, 'sssssh')
    },

    // authenticate:({email,password}){
    // return "Hello";
  },
}*/


const server = new ApolloServer({
  typeDefs,
  resolvers:{
    Query,
    Mutation
  }
});
const app = express()
//app.use(cors)
server.applyMiddleware({ app })

mongoose.connect(`mongodb+srv://${config.mongoDBUser}:${config.mongoDBPassword}@cluster0.cd5fp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(app.listen(PORT, () =>
console.log(`Server ready at http://localhost:${PORT}`)
)).catch(err=>{
  console.log(err)
})

