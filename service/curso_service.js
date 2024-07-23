const cursoRepository = require('../repository/curso_repository')

function listar() {
    return cursoRepository.listar();
}

function inserir(curso) {
    let novoCurso = cursoRepository.buscarPorLikeNome(curso.nome);
    if (novoCurso) {
        throw {id:400, message: "Curso já existe"};
    };
    if(curso) {// curso != undefined
        if(curso.codcurso)  {
            if(curso.nome) {
                cursoRepository.inserir(curso)
            } else  {
                throw {id:400, message:"Curso sem Codigo"}
            }
        } else {
            throw {id:400, message:"Curso sem Nome"}
        }
    }

}

function buscarPorCodcurso(codcurso) {
    const curso = cursoRepository.buscarPorCodcurso(codcurso.codcurso);
    if(curso) {
        return curso;
    }
    else {
        throw {id:400, message:"Codigo do Curso não Encontrado"};
    }
}

function buscarPorLikeNome(nome) {
    const curso = cursoRepository.buscarPorLikeNome(nome.nome);
    if(curso) {
        return curso;
    }
    else {
        throw {id:404, message:"Nome do Curso não Encontrado"};
    }
}

function atualizarCodcurso(newcurso) {
    const curso = cursoRepository.buscarPorid(newcurso.id);
    if(curso) {
        if(newcurso.codcurso){
            cursoRepository.atualizarCodcurso(newcurso);
        }else{
            throw {id:400, message:"Curso não possui Codigo ou nome"};
        }
}else{
    throw {id:404, message:"Curso não Encontrado"};
}}

function atualizarNome(oldname) {
    const curso = cursoRepository.buscarPorCodcurso(oldname.codcurso);
    if(curso) {
        if(oldname.nome){
            cursoRepository.atualizarNome(oldname);
            attcurso = cursoRepository.buscarPorCodcurso(oldname.codcurso);
            console.log(attcurso)
            return attcurso;
        }else{
            throw {id:400, message:"Nome não Aceito"};
        }
    }
    else {
        throw {id:404, message:"Curso não Encontrado"};
    }
}

function deletar(id) {
    const curso = cursoRepository.buscarPorid(id)
    if(curso){
        cursoRepository.deletar(id)
        return curso;
    }
    else {
        throw {id: 404, message: "Curso não encontrado"};
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
