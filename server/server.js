const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const jwt = require('jsonwebtoken')
const mongoose=require('mongoose')
const PORT=5000||process.env.PORT
const config=require('./config/config')
const typeDefs=require('./graphql/schema')
const {Query}=require('./graphql/resolvers/Query')
const {Mutation}=require('./graphql/resolvers/mutations')
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

