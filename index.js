require('dotenv').config();
const { json } = require('body-parser');
const express= require('express');
const fs = require('fs'); // fs é system file = arquivo 
const path = require('path'); // path é caminho

//1. define o caminho do arquivo produto.json
const arquivoProduto = path.join(__dirname,'database','produtos.json'); // dirname é nome do diretorio, que é satabase  e depois mostra o arquivo
const app = express();
app.use(express.json());

app.post('/produtos',(req,res) => {
    const {codigo,nome,qtde,preco} = req.body;


    // 2. transformar a calcular os dados
    const novoProduto= {
        codigo,
        nome: String(nome).toUpperCase(),
        quantidade: Number(qtde),
        preco: Number(preco),
        total: Number(qtde) * Number(preco)
    }

    // 3 ler o arquivo produtos.json
    const conteudoTexto = fs.readFileSync(arquivoProduto, 'utf-8'); // utf-8 codigo para acentuação
    console.log(conteudoTexto);
    const listaProdutos= JSON.parse(conteudoTexto); // converte texto em array js (array é a lista) pra transformar em texto, ele le um arquivo em palavras e transforma em json

    // 4 adiciionar o novo produto na lista(array) 
    listaProdutos.push(novoProduto);

    // 5 salvar 
    fs.writeFileSync(arquivoProduto, JSON.stringify(listaProdutos,null,2))

    return res.json({
        mensagem:"produto recebido com sucesso!",
        dadosOriginais: {codigo,nome,quantidade,preco}
    })

})

const PORT = process.env.PORT
app.listen(PORT,() =>{
    console.log(`Servidor rodando na porta ${PORT}`)
})