
const express = require("express");
const cors = require('cors');

//Configuração do express
const app = express()
require('express-async-errors');
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cors({ origin: true}))

//Iniciando as Rotas
const router = require("./rotas")
router.init(app, '/');


//Rota principal
app.get('/', (req, res) => {
    res.send("Teste Bitix")
})

app.listen(8181, () => {
    console.log('Rodando na porta 8181')
})