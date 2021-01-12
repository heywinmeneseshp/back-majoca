const db = require('../models');
const bcrypt = require('bcryptjs');
// Servicios
const tokenServices = require('../services/token.js')


exports.login = async (pregunta, respuesta) => {
    const user = await db.usuarios.findOne({
        where: {
            usuario: pregunta.body.usuario
        }
    })
    console.log(user.usuario)
    try {
        if (!user) {
            return respuesta.status(404).send("Usuario no encontrado.");
        }
        
        var contrasenaEsValida = await bcrypt.compareSync(pregunta.body.contrasena, user.contrasena);

        if (!contrasenaEsValida) {
            return respuesta.status(401).send({
                auth: false, accessToken: null,
                reason: "Contraseña invalida"
            });
        }

        token = await tokenServices.encode(user)

        respuesta.status(200).send({ auth: true, accessToken: token });
    } catch (error) {
        respuesta.status(500).send("Error ->" + error);
    };
}

exports.register = async (pregunta, respuesta) => {
    pregunta.body.contrasena = await bcrypt.hashSync(pregunta.body.contrasena, 12);
    var usuario = await db.usuarios.create(pregunta.body);
    respuesta.status(200).json(usuario);
}

exports.encontrarTodos = async (pregunta, respuesta) => {
    var usuarios = await db.usuarios.findAll();
    respuesta.status(200).json(usuarios);
};
