const jwt = require('jsonwebtoken');
const models = require('../models');
const config = require('../secret/config.js');

const checkToken = async (token) => {
    let localID = null;
    try {
        const _id = await jwt.decode(token);
        localID = _id;
    } catch (error) {
        return false
    };

    const usuario = await models.usurios.findOne({
        where: { usurio: localID.usuario }
    });

    if (usuario) {
        var token = await this.encode(usurio, tipo_usuario);
        return token
    } else {
        return false
    }
}

//GENERAR TOKEN
exports.encode = async (usuario, tipo_usuario) => {
    var token = await jwt.sign({
        usuario: usuario,
        tipo_usuario: tipo_usuario
    }, config.secret, {
        expiresIn: 8640 //2 horas 40 minutos
    });
    return token
}

//DECODIFICAR TOKEN
exports.decode = async (token) => {

    try {
        const user = await jwt.verify(token, config.secret);
        const usuario = await models.usuarios.findOne({
            where: { usuario: user.usuario }
        });

        if (usuario) {
            return usuario
        } else {
            return false
        }
    } catch (error) {
        const newToken = await checkToken(token);
        return newToken
    }
};


