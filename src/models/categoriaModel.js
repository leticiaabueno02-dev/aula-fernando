const prisma = require('../../database/prisma');

// Expõe os métodos do Prisma (findMany, create, update, delete, etc.)
const CategoriaModel = prisma.categoria;

module.exports = CategoriaModel;