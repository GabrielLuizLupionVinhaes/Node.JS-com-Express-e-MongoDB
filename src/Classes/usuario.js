const mongoose = require("mongoose");

const Usuario = mongoose.model("Usuario", {
    id: Number,
    nome: String,
    senha: String,
    email: String
})


module.exports = Usuario;