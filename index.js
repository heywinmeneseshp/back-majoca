const usuario = require("./controllers/User.js");
const materia = require("./controllers/Materia.js");
const express = require("express");
const db = require("./models");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");

app.use(function (pregunta, respuesta, next) {
    respuesta.header("Access-Control-Allow-Origin", "*");
    respuesta.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

//API ENPONITS
//Usuarios
app.get("/", usuario.encontrarTodos);
app.get("/api/users", usuario.encontrarTodos);
app.post("/api/user/register", usuario.register);
app.post("/api/user/login", usuario.signing);
//Materias
app.get("/api/materias", materia.encontrarTodos);
app.post("/api/materias/registro", materia.registro);
//INCOMPLETO EL ACTIVAR Y DESACTIVAR MATERIA//
app.post("/api/materias/activar", materia.activar); //Activar o desactivar materia
//API ENPOINTS

app.set("PORT", process.env.PORT || 3000)

app.listen(app.get("PORT"), () => {
    console.log("el servido esta vivo")
})

module.exports = app;