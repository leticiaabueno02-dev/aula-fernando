const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController') // faz a referencia e puxa o controller

// ROTA POST 
// /podutos/novo
router.post('/novo', categoriaController.criarCategoria);
router.get('/listar', categoriaController.listarCategoria); // post sempre cria 
// models, modelo de armazenamento --- representação das tabelas
// controller controla as regras de armazenamento
router.get('/', categoriaController.listarCategoria);

module.exports = router;