const express = require('express')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('API de Tarefas no Ar');
})

//verifica o funcionamento da API

const tarefas= 
[
    {
        id: 1,
        titulo: 'Fazer compras',
        concluida: true
    },
    {
        id: 2,
        titulo: 'Ir ao shopping',
        concluida: true
    },
    {
        id: 3,
        titulo: 'Limpar a casa',
        concluida: false
    }
]

app.get('/tarefas', (req,res) => {
    res.status(200).json(tarefas)
})
//retorna todas as tarefas

app.get('/tarefas/:id', (req, res) => {
    const { id } = req.params
    const buscaId = tarefas.find( p => p.id === Number(id))

    if (!buscaId) {
        return res.status(404).json(
            {error: "tarefa não foi encontrada."})
    }

    res.status(200).json(buscaId)
})
//retorna uma tarefa pelo ID
app.get('/tarefas', (req, res) => {
    const { concluida } = req.query
    if (concluida === undefined) {
        return res.status(200).json(tarefas)}

    const buscaConcluida = tarefas.filter(p => p.concluida === (concluida === 'true'))

    if (buscaConcluida.length === 0) {
        return res.status(404).json(
            {error: "tarefas não encontradas"})}
    res.status(200).json(buscaConcluida)
})
//retorna todas as tarefas, sendo elas concluidas e nao concluidas

app.post('/tarefas', (req, res) => {
    const novaTarefa = {
        id: tarefas.length + 1,
        titulo: req.body.titulo, 
        concluida: false  }
    tarefas.push(novaTarefa)
    res.status(201).json(novaTarefa)
})
//cadastrar uma nova tarefa
app.listen(3000);