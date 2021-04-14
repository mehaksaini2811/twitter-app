const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SALT_I = 10
require('dotenv').config()

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  token: {
    type: String,
  },
})

UserSchema.pre('save', function (next) {
  var user = this
  if (user.isModified('password')) {
    bcrypt.genSalt(SALT_I, function (err, hash) {
      if (err) {
        return next(err)
      }
      bcrypt.hash(user.password, SALT_I, function (err, hash) {
        if (err) {
          return next()
        }
        user.password = hash
        next()
      })
    })
  } else {
    next()
  }
})

UserSchema.methods.generateToken = async function () {
  var user = this
  var token = jwt.sign({ email: user.email }, process.env.SECRET, {
    expiresIn: '7d',
  })
  user.token = token
  return user.save()
}

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
  });
};
const User = mongoose.model('user', UserSchema)

module.exports = { User }
