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

module.exports = rota;
