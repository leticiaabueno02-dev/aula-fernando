// colocar rota usuario post no index
// criar um controller de usuarion

const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController') // faz a referencia e puxa o controller

// ROTA POST 
// /usuario/novo
router.post('/novo', usuarioController.criarUsuario) // post sempre cria 
// models, modelo de armazenamento --- representação das tabelas
// controller controla as regras de armazenamento

module.exports = router; 
