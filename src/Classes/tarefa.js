const mongoose = require("mongoose");

const Tarefa = mongoose.model("Tarefa", {
    id: Number,
    titulo: String,
    descricao: String,
    dataCriacao: String,
    dataConclusao: String,
    categoria: String,
    status: String,
    usuarioAssociado: String
})



module.exports = Tarefa;