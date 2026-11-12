const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController') // faz a referencia e puxa o controller

// ROTA POST 
// /podutos/novo
router.post('/novo', produtoController.criarProduto) // post sempre cria 
// models, modelo de armazenamento --- representação das tabelas
// controller controla as regras de armazenamento

module.exports = router; 
