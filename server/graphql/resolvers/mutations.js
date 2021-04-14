const { UserInputError } = require('apollo-server-express')

const { User } = require('../../models/user')
module.exports = {
  Mutation: {
    auth: async (parent, args, context, info) => {
      /*const user = new User({
        email: args.input.email,
        password: args.input.password,
      })*/
      const instance = await User.findOne({ email:args.input.email },{}, function(err, user){
        if(err){
          throw err
        }
        if(!user){
          console.log("no user found")
        }
        if(user){
          console.log("user found"+user)
        }
        user.comparePassword(args.input.password, function(err, isMatch){
          console.log(isMatch)
        })
      }
      )
      return {...instance._doc}
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
