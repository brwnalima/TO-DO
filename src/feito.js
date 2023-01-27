const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000

console.log(`Importando`);

const usuario = require('./controllers/usuario.controller')
console.log(`\t ${usuario}`);

const tarefa = require('./controllers/tarefa-controller')
console.log(`\t ${tarefa}`);

app.listen(port, () => {
  console.log(`Porta: ${port}`)
})