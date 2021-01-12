const jwt = require('jsonwebtoken');
const db = require('../models');
const config = require('../secret/config.js');

const checkToken = async (token) => {
    var localUser = null;
    try {
        const { usuario } = await jwt.decode(token);
        localUser = usuario;
    } catch (error) {
        return false
    };

    const usuario = await db.usuarios.findOne({
        where: { usuario: localUser }
    });

    if (usuario) {
        const token = await encode(usuario);
        return token
    } else {
        return false
    }
}

//GENERAR TOKEN
exports.encode = async (usuario) => {
    const token = await jwt.sign({
        usuario: usuario.usuario,
        tipo_usuario: usuario.tipo_usuario,
    }, config.secret, {
        expiresIn: 3600 //2 horas 40 minutos
    });
    return token
}

//DECODIFICAR TOKEN
exports.decode = async (token) => {
    try {
        const { usuario } = await jwt.verify(token, config.secret);
        const user = await db.usuarios.findOne({
            where: { usuario: usuario }
        });
        if (user) {
            return user
        } else {
            return false
        }
    } catch (error) {
        const newToken = await checkToken(token);
        return newToken
    }
};


