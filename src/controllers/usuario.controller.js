class usuarioController {


usuario = () => {

    app.get('/usuario', (req, res) => {
        res.send(`\t Rota ativada com GET e recurso usuario: 
    valores de usuario devem ser retornados.`)
    })

}


}

export default usuario 