
const express = require("express");
const mongoose = require("mongoose");

const Usuario = require('./Rotas/usuario');
const Categoria = require('./Rotas/categoria');
const Tarefa = require('./Rotas/tarefa');

const app = express();
app.use(express.json());
const port = 3000;
mongoose.connect("mongodb://localhost:27017/Estudando");

app.use(Usuario);
app.use(Categoria);
app.use(Tarefa);


app.listen(port, () =>{
    console.log("Servidor rodando!!!");
});

