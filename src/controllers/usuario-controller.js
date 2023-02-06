import { bdUsuarios } from '../bd.js';

class usuarioController {
    static rotas(app) {
        // Rota para o recurso usuario
        app.get('/', usuarioController.listar)
        app.post('/', usuarioController.inserir)
        app.get('/email/:email', usuarioController.buscarPorEmail)
        // /usuario
    }

    static listar(req, res) {
        const usuario = bdUsuarios
        // devolve a lista de usuarios
        res.send(usuario)
    }

    static inserir(req, res) {
        res.send('Rota ativada com POST e recurso usuario: usuario deve ser inserido')
        // Console log do corpo da requisição
        console.log(req.body)
    }

    static buscarPorEmail(req, res) {
        // busca o email na lista de usuarios
        const usuario = bdUsuarios.find(usuario => usuario.email === req.params.email)

        // se o usuario n for encontrado, devolve um erro
        if (!usuario) {
            res.status(404).send("Usuário não encontrado!")
        } else {
            // se o usuario for encontrado, devolve o usuario
            res.send(usuario)
        }


    }
}

export default usuarioController
