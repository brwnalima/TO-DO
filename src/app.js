// Importando o packages
import express from 'express'
import cors from 'cors'

// instanciando o servidor
const app = express()

// configurando o servidor para receber requisições com o corpo no formato JSON
// Usando Middleware
app.use(express.json())

// configurando o servidor para receber requisições com o corpo em formato JSON
app.use(express.json())

// configurando o servidor para receber requisições de qualquer origem
app.use(cors())

// importando os controllers
import usuarioController from './controllers/usuario-controller.js'
import tarefaController from './controllers/tarefa-controller.js'

usuarioController.rotas(app)
tarefaController.rotas(app)

export default app