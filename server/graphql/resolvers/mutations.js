const { UserInputError, decorateWithLogger } = require('apollo-server-express')

const { User } = require('../../models/user')
const jwt = require('jsonwebtoken')
require('dotenv').config()
module.exports = {
  Mutation: {
    auth: async (parent, args, context, info) => {
      /*const user = new User({
        email: args.input.email,
        password: args.input.password,
      })*/
      const instance = await User.findOne(
        { email: args.input.email },
        {},
        function (err, user) {
          if (err) {
            throw err
          }
          if (!user) {
            console.log('no user found')
          }
          user.comparePassword(
            args.input.password,
            function (err, isMatch) {
              if (!isMatch) {
                console.log('Invalid Password')
                return null
              }
              const token=jwt.sign({user:user},process.env.SECRET, {
                expiresIn:'7d'
              })
              console.log('token:'+token)
              return user.email
            }
          )
        }
      )
      console.log('doc:' + { ...instance._doc })
      return { ...instance._doc }
    },
    signUp: async (parent, args, context, info) => {
      const user = new User({
        firstName: args.input.name,
        dateOfBirth: args.input.dateOfBirth,
        email: args.input.email,
        password: args.input.password,
      })
      const getToken = await user.generateToken()
      if (!getToken) {
        throw err
      }
      return { ...getToken._doc }
    },
  },
}
