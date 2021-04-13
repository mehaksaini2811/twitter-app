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
        #signUp(input:authData):User!
        signUp(input:signUpData):User!
    }
    input authData{
        email:String!
        password:String!
    }
    input signUpData{
        name:String!
        email: String!
        password:String!
        dateOfBirth:String!

    }
`
module.exports=typeDefs