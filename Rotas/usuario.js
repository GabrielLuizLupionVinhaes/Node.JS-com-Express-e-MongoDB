const expres = require("express");
const Usuario = require("../Classes/usuario");
const rota = expres.Router();

rota.post("/UsuarioCadastra", async(req, res) =>{
    try{
        const usuario = new Usuario({
            nome: req.body.nome,
            senha: req.body.senha,
            email: req.body.email
        })
        usuario.save();
        return res.send(usuario);
    }catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Erro ao CRIAR usuario" });
    }
})

rota.get("/Usuario", async(req, res) =>{
    try{
        const usuario = await Usuario.find();
        return res.send(usuario);
    }catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Erro ao BUSCAR usuario" });
    }  
})

rota.delete("/UsuarioDeleta/:id", async(req, res) =>{
    try{
        const usuario = await Usuario.findByIdAndDelete(req.params.id);
        if (!usuario) {
            return res.status(404).send({ message: "Usuário não encontrado" });
        }
        return res.send({ message: "Usuário deletado com sucesso" });
    }catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Erro ao DELETAR usuario" });
    }
})


rota.put("/UsuarioAtualiza/:id", async(req, res) =>{
    try{
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, {
            nome: req.body.nome,
            senha: req.body.senha,
            email: req.body.email
        })
        if (!usuario) {
            return res.status(404).send({ message: "Usuario não encontrada" });
        }
        return res.send(usuario);
    }catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Erro ao ATUALIZAR usuario" });
    }    
})

module.exports = rota;