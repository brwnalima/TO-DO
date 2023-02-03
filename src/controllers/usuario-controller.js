import Usuario from '../models/usuario.js'
import { log } from 'util';

class usuarioController {
    static rotas(app) {
         // Rota para o recurso usuario
         app.get('/usuario', usuarioController.listar)
         app.post('/usuario', usuarioController.inserir)
         // /usuario
    }

    static listar(req, res) {
        const usuario = new Usuario ('bruna', '@gmail.com', '123456', new Date())
        res.send('Rotas ativada com GET e recurso usuário: lista de usuário deve ser retornada')

        console.log(usuario)
    }

    static inserir(req, res){
        res.send('Rota ativada com POST e recurso usuario: usuario deve ser inserido')
        // Console log do corpo da requisição
        console.log(req.body)        
    }
}

export default usuarioController
