'use strict'

const init = (expressInstance, basePath) => {
    expressInstance.get(`${basePath}clientes`, (req, res) => {
        res.send('Clientes')
    })
}

module.exports = {
    init
};