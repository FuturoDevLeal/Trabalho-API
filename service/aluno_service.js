const alunoRepository = require('../repository/aluno_repository')

function listar() {
    return alunoRepository.listar();
}

function inserir(aluno) {
    let novoAluno = alunoRepository.buscarPorLikeNome(aluno.nome);
    if (novoAluno) {
       throw{id:400, message: "Aluno já existe"};
    };
    if(aluno) {// aluno != undefined
        if(aluno.matricula)  {
            if(aluno.nome) {
                alunoRepository.inserir(aluno)
            } else  {
                throw {id:400, message:"Aluno sem Matricula"}
            }
        } else {
            throw {id:400, message:"Aluno sem Nome"}
        }
    }

}

function buscarPorMatricula(matricula) {
    const aluno = alunoRepository.buscarPorMatricula(matricula.matricula);
    if(aluno) {
        return aluno;
    }
    else {
        throw {id:400, message:"Matricula não Encontrada"};
    }
}
function buscarPorLikeNome(nome) {
    const aluno = alunoRepository.buscarPorLikeNome(nome.nome);
    console.log(aluno);
    if(aluno) {
        return aluno;
    }
    else {
        throw {id:404, message:"Nome não Encontrado"};
    }
}

function atualizarMatricula(newmatri) {
    const aluno = alunoRepository.buscarPorid(newmatri.id);
    //console.log(aluno)
    if(aluno) {
        if(newmatri.matricula){
            alunoRepository.atualizarMatricula(newmatri);
        }else{
            throw {id:400, message:"Aluno não possui nome ou matricula"};
        }
}else{
    throw {id:404, message:"Aluno não Encontrado"};
}}

function atualizarNome(oldname) {
    const aluno = alunoRepository.buscarPorMatricula(oldname.matricula);
    if(aluno) {
        if(oldname.nome){
            alunoRepository.atualizarNome(oldname);
            attaluno = alunoRepository.buscarPorMatricula(oldname.matricula);
            console.log(attaluno)
            return attaluno;
        }else{
            throw {id:400, message:"Nome não Aceito"};
        }
    }
    else {
        throw {id:404, message:"Aluno não Encontrado"};
    }
}

function deletar(id) {
    const aluno = alunoRepository.buscarPorid(id)
    //console.log(id)
    //console.log(aluno)
    if(aluno){
        //console.log(aluno)
        alunoRepository.deletar(id)
        return aluno;
    }
    else {
        throw {id: 404, message: "Aluno não encontrado"};
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