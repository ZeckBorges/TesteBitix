'use strict'
const { create } = require('domain')
const fs = require('fs')

const init = (expressInstance, basePath) => {
    expressInstance.post(`${basePath}register/cliente`, (req, res) => {
        const cliente = {
            nome: req.body.nome,
            idade: req.body.idade,
            plano: req.body.plano
        }

        fs.writeFileSync('beneficarios.json', JSON.stringify(cliente, null, 2))
    }),

    expressInstance.get(`${basePath}clientes`, (req, res) => {
        res.send('Clientes')
    })
}

module.exports = {
    init
};