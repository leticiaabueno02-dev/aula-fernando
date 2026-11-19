require('dotenv').config();
const express= require('express');
const routes = require('./routes'); // importa automaticamente o routes /index.js
const prisma = require('../database/prisma');
const app = express();

app.use(express.json());

app.use(routes);
//carrega todas as rotas principais da api

const PORT = process.env.PORT
app.listen(PORT, async () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);

  try {
    await prisma.$connect();
    console.log('🗄️  Conectado ao banco de dados MySQL com sucesso!');
  } catch (error) {
    console.error('❌ Falha ao conectar no MySQL. Verifique se o serviço está ligado!');
    console.error(error.message);
  }
}); // async manda a resposta e await processa e guia 