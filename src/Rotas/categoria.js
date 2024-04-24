const express = require("express");
const Categoria = require("../Classes/categoria");
const rota = express.Router();


rota.post("/CategoriaCadastra" , async(req, res) =>{
    const categoria = new Categoria({
        id: req.body.id,
        nome: req.body.nome,
        cor: req.body.cor
    })
    categoria.save();
    return res.send(categoria);
})

rota.get("/Categoria", async(req, res) =>{
    const categoria = await Categoria.find();
    return res.send(categoria);
})

rota.delete("/CategoriaDeleta/:id", async(req, res) =>{
    const categoria = await Categoria.findByIdAndUpdate(req.params.id);
    return res.send(categoria); 
})

app.put("/CategoriaAtualiza/:id", async(req, res) =>{
    const categoria = await Categoria.findByIdAndUpdate(req.params.id, {
        id: req.body.id,
        nome: req.body.nome,
        cor: req.body.cor
    })
    return res.send(categoria);
})

module.exports = rota;
