const CategoriaModel = require('../models/categoriaModel');

const categoriaController = {
    criarCategoria: async (req,res) => {
        const { codigo,descricao} = req.body;
        // validação simples dos campos obrigatórios
        if(!codigo || !descricao){
            return res.status(400).json({
                sucesso:false,
                mensagem:"Todos os campos(código, nome, quantidade, preco) são obrigatórios"
            });
        }

         // transformar a calcular os dados
         const codigoNumero = Number(codigo)
         const descricaoMaiscula = String(descricao).toUpperCase();
        

    const novoCategoria = await CategoriaModel.create({
        data: {
        codigo: codigoNumero,
        descricao: descricaoMaiscula
        }
    });

    // retorna a resposta http 201 (created)
    return res.status(201).json({
        sucesso:true, 
        mensagem: "Produto cadastrado com sucesso!",
        produto: novoCategoria
    });
    },

        listarCategoria: async (req,res) => {
        try {

            const categorias = await CategoriaModel.findMany();
            return res.status(200).json({
                sucesso: true,
                categorias
            });
        } catch (error) {
            return res.status(500).json({sucesso: false,erro: error.message})
        }
        
        }
    };




module.exports = categoriaController;