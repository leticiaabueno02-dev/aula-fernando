const express = require('express');
const router = express.Router();

const produtosRoutes = require('./produtoRoutes');

router.use('/produtos', produtosRoutes);

// Associa o prefixo /produtos ao arquivo produtoRoutes
router.use('/produtos', produtosRoutes);

module.exports= router;