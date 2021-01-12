const tokenServices = require("../services/token.js");

module.exports = {
    
    verificarAdministrador: async(req, res, next) => {
        if (!req.headers.token){
            return res.status(404).send({ message: "No hay token!"});
        } else {
            const response = await tokenServices.decode(req.headers.token);
            if (response.tipo_usuario == "Administrador"){
                next();
            } else {
                return res.status(403).send({
                    message: "Usuario sin permisos"
                })
            }
        }
    },

    verificarProfesor: async(req, res, next) => {
        if (!req.headers.token){
            return res.status(404).send({ message: "No hay token!"});
        } else {
            const response = await tokenServices.decode(req.headers.token);
            if (response.tipo_usuario == "Profesor" || response.tipo_usuario == "Administrador" ){
                next();
            } else {
                return res.status(403).send({
                    message: "Usuario sin permisos"
                })
            }
        }
    }
}