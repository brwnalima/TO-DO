// import { bdUsuarios } from '../bd.js';

class usuarioController {
    static rotas(app) {
         // Rota para o recurso usuario
         app.get('/', usuarioController.listar)
         app.post('/', usuarioController.inserir)
         // /usuario
    }

    static listar(req, res) {
        const usuario = bdUsuarios
        // devolve a lista de usuarios
        res.send(usuario)
    }

    static inserir(req, res){
        res.send('Rota ativada com POST e recurso usuario: usuario deve ser inserido')
        // Console log do corpo da requisição
        console.log(req.body)        
    }

                                                               
}

export default usuarioController
