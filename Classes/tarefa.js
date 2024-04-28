const mongoose = require("mongoose");
const Tarefa = mongoose.model("Tarefa", {
    titulo: String,
    descricao: String,
    dataCriacao: String,
    dataConclusao: String,
    categoria: String,
    status: String,
    usuarioAssociado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario" // Refere-se ao nome do modelo `Usuario`
    }
})



module.exports = Tarefa;