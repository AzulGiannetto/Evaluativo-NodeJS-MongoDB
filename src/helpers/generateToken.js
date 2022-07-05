const jwt = require('jsonwebtoken')

const generateToken = () => {
  const token = jwt.sign(
    {
      data: 'Azul'
    },
    process.env.SECRET,
    { expiresIn: '10d' }
  )

  return token
}

module.exports = generateToken
