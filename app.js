const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('API de tarefas no Ar')
});

const tarefas= 
[
    {
        id: 1,
        titulo: 'Comprar alimentação',
        concluida: true
    },
    {
        id: 2,
        titulo: 'Fazer prova',
        concluida: true
    },
    {
        id: 3,
        titulo: 'Lavar a casa',
        concluida: false
    }
];

app.get('/tarefas', (req,res) => {
    res.status(200).json(tarefas)
});

app.get('/tarefas/:id', (req, res) => {
    const { id } = req.params
    const buscaId = tarefas.find( p => p.id === Number(id));

    if (!buscaId) {
        return res.status(404).json(
            {error: "tarefa não foi encontrada."});
    }

    res.status(200).json(buscaId);
});

app.get('/tarefas', (req, res) => {
    const { concluida } = req.query
    if (concluida === undefined) {
        return res.status(200).json(tarefas)};

    const buscaConcluida = tarefas.filter(p => p.concluida === (concluida === 'true'));

    if (buscaConcluida.length === 0) {
        return res.status(404).json(
            {error: "tarefas não encontradas"})}
    res.status(200).json(buscaConcluida)
});

app.listen(3000);