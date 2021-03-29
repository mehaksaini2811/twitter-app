const { UserInputError } = require('apollo-server-express')

const { User } = require('../../models/user')
module.exports = {
  Mutation: {
    auth: (parent, args, context, info) => {
      return true
    },
    signUp: async (parent, args, context, info) => {
      const user = new User({
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
