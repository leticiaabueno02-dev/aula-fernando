const produtoModel = require('../models/produtoModel');

const produtoController = {
    criarProduto: async (req,res) => {
        const { codigo,nome,qtde,preco} = req.body;
        // validação simples dos campos obrigatórios
        if(!codigo || !nome || !quantidade || !preco){
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

    const novoProduto= await produtoModel.create({
        data: {
        codigo,
        nome:nomeMaiusculo ,
        quantidade: quantidade,
        preco: valorPreco,
        total: valorTotal,
        }
    });

    // retorna a resposta http 201 (created)
    return res.status(201).json({
        sucesso:true, 
        mensagem: "Produto cadastrado com sucesso!",
        produto: produtoSalvo
    });
    },

        listarProduto: async (req,res) => {
        try {

            const produtos = produtoModel.buscarTodos();
            return res.json({
                sucesso: true,
                total: produtos.length,
                produtos
            });
        } catch (error) {
            return res.status(500).json({sucesso: false,erro: error.message})
        }
        
        }
    };




module.exports = produtoController;