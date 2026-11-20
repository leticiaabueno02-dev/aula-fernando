const express = require('express');
const router = express.Router();

const produtosRoutes = require('./produtoRoutes');
const usuarioRoute = require('./usuarioRoute');
const categoriaRoute = require('./categoriaRoutes');

router.use('/produtos', produtosRoutes);
router.use('/usuario',usuarioRoute);
router.use('/categorias', categoriaRoute);

// Associa o prefixo /produtos ao arquivo produtoRoutes

module.exports= router;