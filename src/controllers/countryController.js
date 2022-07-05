const httpStatus = require('../helpers/httpStatus')

const countryController = (Country) => {
  const getAllCountries = async (req, res, next) => {
    // trae por query a los usuarios
    try {
      const { query } = req

      const response = await Country.find(query)

      return res.status(httpStatus.OK).json(response)
    } catch (err) {
      next(err)
    }
  }

  const postCountry = async (req, res, next) => {
    try {
      const { body } = req

      const country = await new Country(body)

      await country.save()

      res.status(httpStatus.CREATED).json(country)
    } catch (err) {
      next(err)
    }
  }

  const putCountryById = async (req, res, next) => {
    try {
      const { body, params } = req

      const checkData = await Country.find({
        _id: params.id
      })

      if (checkData === null) {
        res.status(httpStatus.FORBIDDEN).send('No data found with the provided ID.')
      }

      await Country.updateOne(
        {
          _id: params.id
        },
        {
          $set: {
            country: body.country,
            continent: body.continente,
            hemisphere: body.hemisphere,
            language: body.language
          }
        }
      )

      return res.status(httpStatus.CREATED).send('Data successful updated')
    } catch (err) {
      next(err)
    }
  }

  const getCountryById = async (req, res, next) => {
    try {
      const { params } = req

      const response = await Country.findById(params.id)

      return res.status(httpStatus.OK).json(response)
    } catch (err) {
      next(err)
    }
  }

  const deleteCountryById = async (req, res, next) => {
    try {
      const { params } = req

      await Country.findByIdAndDelete(params.id)

      return res.status(httpStatus.OK).send('Data successful deleted')
    } catch (err) {
      next(err)
    }
  }

  return {
    getAllCountries,
    getCountryById,
    postCountry,
    putCountryById,
    deleteCountryById
  }
}

module.exports = countryController
