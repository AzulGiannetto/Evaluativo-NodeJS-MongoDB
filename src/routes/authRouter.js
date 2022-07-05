const express = require('express')
const authController = require('../controllers/authController')
const validator = require('express-joi-validation').createValidator({})
const { bodySchema } = require('../validations/peopleBodyValidator')

const router = (People) => {
  const authRouter = express.Router()

  const { logIn, register } = authController(People)

  authRouter.route('/auth/login').post(logIn)

  authRouter.route('/auth/register').post(validator.body(bodySchema), register)

  return authRouter
}

module.exports = router
