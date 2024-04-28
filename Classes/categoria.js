const mongoose = require("mongoose");

const Categoria = mongoose.model("Categoria", {
    nome: String,
    cor: String
})


module.exports = Categoria;