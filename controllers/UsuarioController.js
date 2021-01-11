const db = require('../models');
const bcrypt = require('bcryptjs');
// Servicios
const tokenServices = require('../services/token')


exports.login = async (pregunta, respuesta, next) => {
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

        token = tokenServices.encode(usuario.usuario, usuario.tipo_usuario)

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
