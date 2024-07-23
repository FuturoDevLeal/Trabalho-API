const express = require('express');

const alunoRouter = require('./route/aluno_router');
const cursoRouter = require('./route/curso_router');

const app = express();
app.use(express.json());

const port = 3000
app.use(express.json());

app.get('/' , (req, res) => {
    res .send('<h1>Universidade de Tecnologia</h1>')
})

app.use('/api/aluno', alunoRouter);

app.use('/api/curso', cursoRouter);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})