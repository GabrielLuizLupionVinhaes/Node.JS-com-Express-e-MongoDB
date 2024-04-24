const expres = require("express");
const Usuario = require("../Classes/usuario");
const rota = expres.Router();

rota.post("/UsuarioCadastra", async(req, res) =>{
    const usuario = new Usuario({
        id: req.body.id,
        nome: req.body.nome,
        senha: req.body.senha,
        email: req.body.email
    })
    usuario.save();
    return res.send(usuario)
})

rota.get("/Usuario", async(req, res) =>{
    const usuario = await Usuario.find();
    return res.send(usuario);  
})

rota.delete("/UsuarioDeleta/:id", async(req, res) =>{
    const usuario = await Usuario.findByIdAndUpdate(req.params.id);
    return res.send(usuario); 
})

app.put("/UsuarioAtualiza/:id", async(req, res) =>{
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, {
        id: req.body.id,
        nome: req.body.nome,
        senha: req.body.senha,
        email: req.body.email
    })
    return res.send(usuario);
})

module.exports = rota;