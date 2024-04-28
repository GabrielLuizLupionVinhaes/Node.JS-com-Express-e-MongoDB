const mongoose = require("mongoose");

const Usuario = mongoose.model("Usuario", {
    nome: String,
    senha: String,
    email: String
})


module.exports = Usuario;