const mongoose = require("mongoose");

const Categoria = mongoose.model("Categoria", {
    id: Number,
    nome: String,
    cor: String
})


module.exports = Categoria;