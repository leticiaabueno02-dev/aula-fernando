const produtoModel = require('../models/produtosModel');

const produtoController = {
    criarProduto: (resq,res) => {
        const {codigo,nome,qtde,preco} = req.body;
        // validação simples dos campos obrigatórios
        if(!codigo || !nome || !quantidade || !preco){
            return res.status(400).json({
                sucesso:false,
                mensagem:"Todos os campos(código, nome, quantidade, preco) são obrigatórios"
            })
        }

         // transformar a calcular os dados
         const nomeMaiusculo = String(nome).toUpperCase();
         const quantidade = Number(qtde);
         const valorPreco = Number(preco);
         const valorTotal = quantidade * valorPreco;

    const novoProduto= {
        codigo,
        nome:nomeMaiusculo ,
        quantidade: quantidade,
        preco: valorPreco,
        total: valorTotal,
        criadoEm: new Date().toISOString()
    }
// chama o model para persistir no arquivo json
    const produtoSalvo = produtoModel.salvar(novoProduto);

    // retorna a resposta http 201 (created)
    return res.status(201).json({
        sucesso:true, 
        mensagem: "Produto cadastrado com sucesso!",
        produto: produtoSalvo
    })
    }
}