const {gql}=require('apollo-server-express')
const typeDefs=gql`
    type Query{
        hello:String!
    }
    type User{
        _id:ID!
        email:String!
        password:String!
    }
    type Mutation{
        auth(input:authData):User!
        signUp(input:authData):User!
    }
    input authData{
        email:String!
        password:String!
    }
`
module.exports=typeDefs