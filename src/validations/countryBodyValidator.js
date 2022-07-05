const Joi = require('joi')

const schema = Joi.object({
  country: Joi.string().alphanum().required().trim(),
  continent: Joi.string().alphanum().required().trim(),
  hemisphere: Joi.string().alphanum().required().trim(),
  language: Joi.string().alphanum().required().trim()
})

module.exports = schema
