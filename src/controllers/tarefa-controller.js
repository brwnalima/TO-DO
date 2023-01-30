class tarefaController {
    static rotas(app) {
        // rota pro recurso tarefa
        app.get('/', tarefaController.listar)
        // app.get('/tarefa', tarefaController.listar)
    }

    static listar(req, res) {
        res.send('Rotas ativada com GET e recurso tarefa: lista de tarefa deve ser retornada')
    }
}

export default tarefaController
