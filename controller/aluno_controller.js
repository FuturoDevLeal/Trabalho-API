const alunoService = require('../service/aluno_service')

function listar(req, res) {
    const listaAlunos = alunoService.listar();
    res.json(listaAlunos);
}

function inserir(req, res) {
    let aluno = req.body;
    try {
        alunoService.inserir(aluno);
        res.status(201).json({message:'Aluno Inserido com Sucesso!'})
    }
    catch(err) {
        res.status(err.id).json({msg: err.message});
    }
}

function buscarPorMatricula(req, res){
    const matricula = req.body;
    try {
        const alun = alunoService.buscarPorMatricula(matricula);
        res.json(alun)
    }
    catch(err) {
        res.status(err.id).json({msg: err.message});
    }
}

function buscarPorLikeNome(req, res){
    const nome = req.body;
    console.log(nome);
    //console.log(nome.nome);
    try {
        A = alunoService.buscarPorLikeNome(nome);
        res.json(A);
    }catch(err) {
        res.status(err.id).json({msg: err.message});
    }
}

function atualizarMatricula(req, res){
    const newmatri = req.body;
    console.log(newmatri.id);
    console.log(newmatri);
    try {
        alunoService.atualizarMatricula(newmatri);
        res.json({msg:'Matricula atualizado com sucesso'});
    }catch(err) {
        res.status(err.id).json({msg: err.message});
    }
}

function atualizarNome(req, res){
    const aluno = req.body;
    try {
        alunoService.atualizarNome(aluno);
        res.json(aluno);
    }catch(err) {
        res.status(err.id).json({msg: err.message});
    }
}

function deletar(req, res){
    const id = +req.params.id;
    try {
        const alunoDeletado = alunoService.deletar(id);
        console.log(alunoDeletado)
        res.json(alunoDeletado);
    }catch(err) {
        res.status(err.id).json({msg: err.message});
    }
}

module.exports = {
	listar,
    inserir,
    buscarPorMatricula,
    buscarPorLikeNome,
    atualizarMatricula,
    atualizarNome,
    deletar
}