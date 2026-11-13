const produtoModel = require('../models/produtoModel');

const produtoController = {
    criarProduto: (req,res) => {
        const { codigo,nome,qtde,preco} = req.body;
        // validação simples dos campos obrigatórios
        if(!codigo || !nome || !qtde || !preco){
            return res.status(400).json({
                sucesso:false,
                mensagem:"Todos os campos(código, nome, quantidade, preco) são obrigatórios"
            });
        }

         // transformar a calcular os dados
         const nomeMaiusculo = String(nome).toUpperCase();
         const quantidade = Number(qtde);
         const valorPreco = Number(preco);
         const valorTotal = qtde * valorPreco;

    const novoProduto= {
        codigo,
        nome:nomeMaiusculo ,
        qtde: quantidade,
        preco: valorPreco,
        total: valorTotal,
        criadoEm: new Date().toISOString()
    };
// chama o model para persistir no arquivo json
    const produtoSalvo = produtoModel.salvar(novoProduto);

    // retorna a resposta http 201 (created)
    return res.status(201).json({
        sucesso:true, 
        mensagem: "Produto cadastrado com sucesso!",
        produto: produtoSalvo
    });
    },

        listarProduto:(req,res) => {
        const produtos = produtoModel.buscarTodos();
        return res.json({
            sucesso: true,
            total: produtos.length,
            produtos
        });
        }
    };




module.exports = produtoController;