//import express from "express"
const express = require('express')

const app = express()

const usuario = require('./controllers/usuario.controller')
console.log(`\t ${usuario}`);

const tarefa = require('./controllers/tarefa-controller')
console.log(`\t ${tarefa}`);

export default app