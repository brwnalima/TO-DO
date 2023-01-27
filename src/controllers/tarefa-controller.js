tarefa = () => {

    app.get('/tarefa', (req, res) => {
        res.send(`\t Rota ativada com GET e recurso tarefa: 
    valores de tarefa devem ser retornados.`)
    })

}

export default tarefa