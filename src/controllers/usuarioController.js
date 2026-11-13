
const usuarioController = {
     criarUsuario: (req,res) => {
        const { nome, idade } = req.body;
        // validação simples dos campos obrigatórios
        if(!nome || !idade ){
            return res.status(400).json({
                sucesso:false,
                mensagem:"Todos os campos(nome e idade) são obrigatórios"
            });
        }

         // transformar a calcular os dados
         const nomeMaiusculo = String(nome).toUpperCase();
         const idadeConvertida = Number(idade);

    const novoUsuario= {
        nome:nomeMaiusculo ,
        idade: idadeConvertida,
        criadoEm: new Date().toISOString()
    };
    return res.status(201).json({ sucesso: true, usuario: novoUsuario });
}
};
module.exports = usuarioController;