const precos = require('./precos')
const planos = require('./planos')


module.exports.init = (expressInstance, basePath) => {
    precos.init(expressInstance, basePath);
    planos.init(expressInstance, basePath)
    
};