const prisma = require('../../database/prisma');

// Expõe os métodos do Prisma (findMany, create, update, delete, etc.)
const ProdutoModel = prisma.produto;

module.exports = ProdutoModel;