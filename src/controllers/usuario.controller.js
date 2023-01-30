class usuarioController {
    static rotas(app) {
        // rota pro recurso tarefa
        app.get('/', usuarioController.listar)
        // app.get('/usuario', usuarioController.listar)
    }

    static listar(req, res) {
        res.send('Rotas ativada com GET e recurso usuário: lista de usuário deve ser retornada')
    }
}

export default usuarioController
