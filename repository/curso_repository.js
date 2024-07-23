let listaCursos = [ ]
let idGerador = 1;

function geraId() {
	return idGerador++;
}

function listar() {
return listaCursos;
}

function inserir(curso) {
	curso.id = geraId();
	listaCursos.push(curso);
}

function buscarPorid(id){
    return listaCursos.find(function(curso) {
        return(curso.id === id);        
    })   
}

function buscarPorCodcurso(codcurso) {
	return listaCursos.find(function(curso) {
		return(curso.codcurso === codcurso);
		})
}

function buscarPorLikeNome(nome){
    return listaCursos.find(function(curso) {
        return(curso.nome === nome);        
    })   
}

function atualizarCodcurso(curso) {
	for(let ind in listaCursos) {
		if(listaCursos[ind].id === curso.id) {
            listaCursos[ind].codcurso = curso.codcurso;
            return;
        }
    }
}

function atualizarNome(newcurso) {
	for(let ind in listaCursos) {
		if(listaCursos[ind].codcurso === newcurso.codcurso) {
            listaCursos[ind].nome = newcurso.nome;
            return;
        }
    }
}

function deletar(id)  {
    for(let ind in listaCursos) {
        if(listaCursos[ind].id === id) {
            return listaCursos.splice(ind,1)[0];
        }
    }
}


module.exports = {
	listar,
	inserir,
	buscarPorid,
	buscarPorCodcurso,
	buscarPorLikeNome,
	atualizarCodcurso,
	atualizarNome,
	deletar

}