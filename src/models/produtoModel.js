const fs = require('fs'); // fs é system file = arquivo 

const path = require('path'); // path é caminho

//1. define o caminho do arquivo produto.json
const arquivoProduto = path.join(__dirname, '..', '..', 'database', 'produtos.json');
    // dirname é nome do diretorio, que é satabase  e depois mostra o arquivo

 const produtoModel = {
    // 1. Le todos os produtos do arquivo json
    buscarTodos: () => {
        if(!fs.readFileSync(arquivoProduto, 'utf-8')) {
            return[];
        }
        const conteudo = fs.readFileSync(arquivoProduto, 'utf-8');
        return conteudo.trim()? JSON.parse(conteudo) : [];
    },

    // 2. Salva um novo produto no arquivo JSON
    salvar:(novoProduto) => {
        const listaProdutos= produtoModel.buscarTodos(); 

    // 3. adiciionar o novo produto na lista(array) 
    listaProdutos.push(novoProduto);

    // 4. salvar 
    fs.writeFileSync(arquivoProduto, JSON.stringify(listaProdutos,null,2))

    return novoProduto

    }

 }

 module.exports= produtoModel;