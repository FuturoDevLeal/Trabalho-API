let listaAlunos = []
let idGerador = 1;

function geraId() {
	return idGerador++;
}

function listar() {
return listaAlunos;
}

function inserir(aluno) {
	aluno.id = geraId();
	listaAlunos.push(aluno);
}

function buscarPorid(id){
    return listaAlunos.find(function(aluno) {
        return(aluno.id === id);        
    })   
}


function buscarPorMatricula(matricula) {
	return listaAlunos.find(function(aluno) {
		return(aluno.matricula === matricula);
		})
}


function buscarPorLikeNome(nome){
    return listaAlunos.find(function(aluno) {
        return(aluno.nome === nome);        
    })   
}

function atualizarMatricula(aluno) {
	for(let ind in listaAlunos) {
		if(listaAlunos[ind].id === aluno.id) {
            listaAlunos[ind].matricula = aluno.matricula;
            return;
        }
    }
}


function atualizarNome(alunonew) {
	for(let ind in listaAlunos) {
		if(listaAlunos[ind].matricula === alunonew.matricula) {
            listaAlunos[ind].nome = alunonew.nome;
            return;
        }
    }
}

function deletar(id)  {
    for(let ind in listaAlunos) {
        if(listaAlunos[ind].id === id) {
            return listaAlunos.splice(ind,1)[0];
        }
    }
}


module.exports = {
	listar,
	inserir,
	buscarPorMatricula,
	buscarPorLikeNome,
	atualizarMatricula,
	atualizarNome,
	deletar,
	buscarPorid
}