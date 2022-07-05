const mongoose = require('mongoose')

const { Schema } = mongoose

const countryModel = new Schema({
  country: { type: String, required: true },
  continent: { type: String, required: true },
  hemisphere: {
    type: String,
    required: true
  },
  language: { type: String, required: true }
})

module.exports = mongoose.model('Country', countryModel)
