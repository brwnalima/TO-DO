import { bdUsuarios } from '../bd.js';

class usuarioController {
    static rotas(app) {
        // Rota para o recurso usuario
        app.get('/', usuarioController.listar)
        app.post('/', usuarioController.inserir)
        app.get('/email/:email', usuarioController.buscarPorEmail)
        app.delete('/email/:email', usuarioController.deletar)
        //usuario
    }

    static listar(req, res) {
        const usuario = bdUsuarios
        // devolve a lista de usuarios
        res.send(usuario)
    }

    static inserir(req, res) {
        res.send('Rota ativada com POST e recurso usuario: usuario deve ser inserido manualmente.')
        // Console log do corpo da requisição
        console.log(req.body)
    }

    static buscarPorEmail(req, res) {
        // busca o email na lista de usuarios
        const usuario = bdUsuarios.find(usuario => usuario.email === req.params.email)

        // se o usuario n for encontrado, devolve um erro
        !usuario ? res.status(404).send("USUÁRIO NÃO ENCONTRADO - Verifique o endereço digitado.") : res.send(usuario)
        // se o usuario for encontrado, devolve o usuario
    }

    static deletar(req, res) {
        // busca o email na lista de usuarios
        const usuario = bdUsuarios.find(usuario => usuario.email === req.params.email)

        // se o usario não for encontrado, devolve um erro
        !usuario ? res.status(404).send('USUÁRIO NÃO ENCONTRADO - Verifique o endereço digitado.') : res.send(`USUÁRIO DELETADO.`)

        // se o usuario for encontrado, deleta o usuario
        const index = bdUsuarios.indexOf(usuario)
        bdUsuarios.splice(index, 1)

        // devolve o usuário deletado
        res.send(usuario)
    }
}

export default usuarioController
