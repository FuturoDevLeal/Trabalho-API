const express = require('express')
const router = express.Router()

const cursoController = require('../controller/curso_controller')

router.get('/' , cursoController.listar);
router.post('/', cursoController.inserir);
router.get('/buscaCodcurso', cursoController.buscarPorCodcurso);
router.get('/buscaNomeCurso', cursoController.buscarPorLikeNome);
router.put('/attCodcurso', cursoController.atualizarCodcurso);
router.put('/Atualizanome', cursoController.atualizarNome);
router.delete('/:id', cursoController.deletar);

module.exports = router;
