'use strict'

const precos = require('../database/prices.json')

const preco = () => {
    const result = []
    precos.forEach(document => {
        result.push({
            codigo: document.codigo,
            ...document
        });
    })

    console.log(result)
    return result;
}

const init = (expressInstance, basePath) => {
    expressInstance.get(`${basePath}precos`, (req, res) => {
        res.send(preco())
    })
}

module.exports = {
    init
};