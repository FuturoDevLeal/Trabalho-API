const cursoService = require('../service/curso_service')

function listar(req, res) {
    const listaCursos = cursoService.listar();
    res.json(listaCursos);
}

function inserir(req, res) {
    let curso = req.body;
    try {
        cursoService.inserir(curso);
        res.status(201).json({message:'Curso Inserido com Sucesso!'})
    }
    catch(err) {
        res.status(err.id).json({msg: err.message});
    }
}

function buscarPorCodcurso(req, res){
    const codcurso = req.body;
    try {
        const curs = cursoService.buscarPorCodcurso(codcurso);
        res.json(curs)
    }
    catch(err) {
        res.status(err.id).json({msg: err.message});
    }
}

function buscarPorLikeNome(req, res){
    const nome = req.body;
    try {
        C = cursoService.buscarPorLikeNome(nome);
        res.json(C);
    }catch(err) {
        res.status(err.id).json({msg: err.message});
    }
}

function atualizarCodcurso(req, res){
    const cursonew = req.body;
    console.log(cursonew.id);
    console.log(cursonew);
    try {
        cursoService.atualizarCodcurso(cursonew);
        res.json({msg:'Codigo do Curso atualizado com sucesso'});
    }catch(err) {
        res.status(err.id).json({msg: err.message});
    }
}

function atualizarNome(req, res){
    const curso = req.body;
    try {
        cursoService.atualizarNome(curso);
        res.json(curso);
    }catch(err) {
        res.status(err.id).json({msg: err.message});
    }
}

function deletar(req, res){
    const id = +req.params.id;
    try {
        const cursoDeletado = cursoService.deletar(id);
        console.log(cursoDeletado)
        res.json(cursoDeletado);
    }catch(err) {
        res.status(err.id).json({msg: err.message});
    }
}

module.exports = {
	listar,
    inserir,
    buscarPorCodcurso,
    buscarPorLikeNome,
    atualizarCodcurso,
    atualizarNome,
    deletar
}