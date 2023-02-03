class usuarioController {
    static rotas(app) {
         // Rota para o recurso usuario
         app.get('/usuario', usuarioController.listar)
         app.post('/usuario', usuarioController.inserir)
         // /usuario
    }

    static listar(req, res) {
        res.send('Rotas ativada com GET e recurso usuário: lista de usuário deve ser retornada')
    }

    static inserir(req, res){
        res.send('Rota ativada com POST e recurso usuario: usuario deve ser inserido')
        // Console log do corpo da requisição
        console.log(req.body)        
    }
}

export default usuarioController
