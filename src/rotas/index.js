const precos = require('./precos')
const planos = require('./planos')
const clientes = require('./clientes')


module.exports.init = (expressInstance, basePath) => {
    precos.init(expressInstance, basePath)
    planos.init(expressInstance, basePath)
    clientes.init(expressInstance, basePath)
};