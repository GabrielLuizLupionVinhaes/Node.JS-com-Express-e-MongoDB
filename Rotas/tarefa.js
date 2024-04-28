const express = require("express");
const Tarefa = require("../Classes/tarefa");
const Usuario = require("../Classes/usuario"); 
const rota = express.Router();

rota.post("/TarefaCadastra", async(req, res) =>{
        try{
        const usuarioId = req.body.usuarioAssociado;
        const usuario = await Usuario.findById(usuarioId);

        if (!usuario) {
            return res.status(404).send({ message: "Usuário não encontrado" });
        }

        const tarefa = new Tarefa({
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            dataCriacao: req.body.dataCriacao,
            dataConclusao: req.body.dataConclusao,
            categoria: req.body.categoria,
            status: req.body.status,
            usuarioAssociado: usuarioId._id
        })

        await tarefa.save();
        return res.send(tarefa);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Erro ao CRIAR tarefa" });
    }
})

rota.get("/Tarefa", async(req, res) => {
    try{
        const tarefa = await Tarefa.find();
        return res.send(tarefa);
    }catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Erro ao BUSCAR tarefa" });
    }
})

rota.delete("/TarefaDeleta/:id", async(req, res) =>{
    try{
        const tarefa = await Tarefa.findByIdAndDelete(req.params.id);
        if (!tarefa) {
            return res.status(404).send({ message: "Tarefa não encontrada" });
        }
        return res.send({ message: "Tarefa deletada com sucesso" });
    }catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Erro ao DELETAR tarefa" });
    }
})

rota.put("/TarefaAtualiza/:id", async(req, res) =>{
    try{
        const tarefa = await Tarefa.findByIdAndUpdate(
            req.params.id,
            {
                titulo: req.body.titulo,
                descricao: req.body.descricao,
                dataCriacao: req.body.dataCriacao,
                dataConclusao: req.body.dataConclusao,
                categoria: req.body.categoria,
                status: req.body.status,
                usuarioAssociado: req.body.usuarioAssociado
            },
            { new: true }
        );

        if (!tarefa) {
            return res.status(404).send({ message: "Tarefa não encontrada" });
        }
        return res.send(tarefa);
    }catch (error) {
        console.error(error);
        return res.status(500).send({ message: "Erro ao ATUALIZAR tarefa" });
    }
})

module.exports = rota;

