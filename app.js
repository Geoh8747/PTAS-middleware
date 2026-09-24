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