const express = require('express')
const countryController = require('../controllers/countryController')
const validator = require('express-joi-validation').createValidator({})
const { countryBodySchema, paramsSchema, countryQuerySchema } = require('../validations/peopleBodyValidator')

const router = (Country) => {
  const countryRouter = express.Router()

  const { getAllCountries, getCountryById, postCountry, putCountryById, deleteCountryById } =
    countryController(Country)

  countryRouter
    .route('/country')
    .get(validator.query(countryQuerySchema), getAllCountries)
    .post(validator.body(countryBodySchema), postCountry)

  countryRouter
    .route('/country/:id')
    .get(getCountryById)
    .put(validator.body(countryBodySchema), putCountryById)
    .delete(validator.params(paramsSchema), deleteCountryById)

  return countryRouter
}

module.exports = router
