const express = require("express");
const Categoria = require("../Classes/categoria");
const rota = express.Router();


rota.post("/CategoriaCadastra" , async(req, res) =>{
    try{
        const categoria = new Categoria({
            nome: req.body.nome,
            cor: req.body.cor
        })
        categoria.save();
        return res.send(categoria);
    }catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Erro ao CRIAR categotria" });
    }    
})

rota.get("/Categoria", async(req, res) =>{
    try{
        const categoria = await Categoria.find();
        return res.send(categoria);
    }catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Erro ao BUSCAR categotria" });
    }        
})

rota.delete("/CategoriaDeleta/:id", async(req, res) =>{
    try{
        const categoria = await Categoria.findByIdAndDelete(req.params.id);
        if (!categoria) {
            return res.status(404).send({ message: "Categoria não encontrado" });
        }
        return res.send({ message: "Categoria deletada com sucesso" });
    }catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Erro ao DELETAR categotria" });
    }        
})

rota.put("/CategoriaAtualiza/:id", async(req, res) =>{
    try{
        const categoria = await Categoria.findByIdAndUpdate(req.params.id, {
            nome: req.body.nome,
            cor: req.body.cor
        })
        if (!categoria) {
            return res.status(404).send({ message: "Categoria não encontrada" });
        }
        return res.send(categoria);
    }catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Erro ao ATUALIZAR categotria" });
    }    
})

module.exports = rota;
