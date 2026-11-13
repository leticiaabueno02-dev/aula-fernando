const express = require('express');
const router = express.Router();

const produtosRoutes = require('./produtoRoutes');
const usuarioRoute = require('./usuarioRoute');

router.use('/produtos', produtosRoutes);
router.use('/usuario',usuarioRoute);

// Associa o prefixo /produtos ao arquivo produtoRoutes
router.use('/produtos', produtosRoutes);
module.exports= router;