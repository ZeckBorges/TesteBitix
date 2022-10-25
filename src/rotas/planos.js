'use strict'

const planos = require('../database/plans.json')

const plano = () => {
    const result = []
    planos.forEach(document => {
        result.push({
            codigo: document.codigo,
            ...document
        });
    })

    console.log(result)
    return result;
}

const init = (expressInstance, basePath) => {
    expressInstance.get(`${basePath}planos`, (req, res) => {
        res.send(plano())
    })
}

module.exports = {
    init
};