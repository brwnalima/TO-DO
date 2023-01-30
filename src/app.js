// importando o packages
import express from "express"

// instaciando o servidor
const app = express()

// importando os controllers

import usuarioController from "./controllers/usuario.controller"
import tarefaController from "./controllers/tarefa-controller"

usuarioController.rotas(app)
tarefaController.rotas(app)

export default app