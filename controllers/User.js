const config = require("../secret/config.js");
const db = require("../models");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");


exports.signing = async (pregunta, respuesta) => {
    usuario = await db.usuarios.findOne({
        where: {
            usuario: pregunta.body.usuario
        }
    }).then(user => {
        if (!user) {
            return respuesta.status(404).send("Usuario no encontrado.");
        }

        var contrasenaEsValida = bcrypt.compareSync(pregunta.body.contrasena, user.contrasena);

        if (!contrasenaEsValida) {
            return respuesta.status(401).send({
                auth: false, accessToken: null,
                reason: "Contraseña invalida"
            });
        }

        var token = jwt.sign({
            doc: user.doc,
            usuario: user.usuario,
            tipo_usuario: user.tipo_usuario,
            email: user.email
        }, config.secret, {
            expiresIn: 8640 // 2 horas 40 minutos
        });

        respuesta.status(200).send({ auth: true, accessToken: token });
    }).catch(error => {
        res.status(500).send("Error ->" + error);
    });
}

exports.register = async(pregunta, respuesta) =>{
    pregunta.body.contrasena = await bcrypt.hashSync(pregunta.body.contrasena, 6);
    var usuario = await db.usuarios.create(pregunta.body);
    respuesta.status(200).json(usuario);
}

exports.encontrarTodos = async (pregunta, respuesta) => {
    var usuarios = await db.usuarios.findAll();
    respuesta.status(200).json(usuarios);
};
