const express = require('express')
const router = express.Router()

const alunoController = require('../controller/aluno_controller')

router.get('/' , alunoController.listar);
router.post('/', alunoController.inserir);
router.get('/buscaMatricula', alunoController.buscarPorMatricula);
router.get('/buscaNomeAluno', alunoController.buscarPorLikeNome);
router.put('/attMatricula', alunoController.atualizarMatricula);
router.put('/Atualizanome', alunoController.atualizarNome);
router.delete('/:id', alunoController.deletar);

module.exports = router;
