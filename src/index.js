require('dotenv').config();
const express= require('express');
const routes = require('./routes'); // importa automaticamente o routes /index.js
const app = express();

app.use(express.json());

app.use(routes);
//carrega todas as rotas principais da api

const PORT = process.env.PORT
app.listen(PORT,() =>{
    console.log(`Servidor rodando na porta ${PORT}`)
})
// apenas o necessário para rodar o servidor