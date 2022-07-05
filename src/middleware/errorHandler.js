// dice que error paso, ejemplo que la info este repetida cuando especifico que no se puede
const ERROR_HANDLERS = {
  MongoServerError: (res, err) =>
    res
      .status(400)
      .send({
        error: err.name,
        cause: err.message,
        message: 'No podes utilizar el mismo username, email o phone.'
      }),
  defaultError: (res, err) =>
    // como no se el numero de error, uso uno por defecto en el manejador de errores. Puedo agregar errores nuevos y personalizar
    res.status(500).send({ error: err.name, cause: err.message })
}

const errorHandler = (err, req, res, next) => {
  // response porque tiene que dar una respuesta y error porque necesita saber que le paso
  const handler = ERROR_HANDLERS[err.name] || ERROR_HANDLERS.defaultError
  // puedo asignarle una propiedad (que puede ser prop, valor, funcion, objeto) o una funcion
  handler(res, err)
}

module.exports = errorHandler
