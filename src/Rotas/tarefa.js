const express = require("express");
const Tarefa = require("../Classes/tarefa");
const rota = express.Router();

rota.post("/TarefaCadastra", async(req, res) =>{
    const tarefa = new Tarefa({
        id: req.body.id,
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        dataCriacao: req.body.dataCriacao,
        dataConclusao: req.body.dataConclusao,
        categoria: req.body.categoria,
        status: req.body.status,
        usuarioAssociado: req.body.usuarioAssociado
    })
    tarefa.save();
    return res.send(tarefa);
})

rota.get("/Tarefa", async(req, res) => {
    const tarefa = await Tarefa.find();
    return res.send(tarefa);
})

rota.delete("/TarefaDeleta/:id", async(req, res) =>{
    const tarefa = await Tarefa.findByIdAndUpdate(req.params.id);
    return res.send(tarefa); 
})

app.put("/TarefaAtualiza/:id", async(req, res) =>{
    const tarefa = await Tarefa.findByIdAndUpdate(req.params.id, {
        id: req.body.id,
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        dataCriacao: req.body.dataCriacao,
        dataConclusao: req.body.dataConclusao,
        categoria: req.body.categoria,
        status: req.body.status,
        usuarioAssociado: req.body.usuarioAssociado
    })
    return res.send(tarefa);
})

module.exports = rota;

