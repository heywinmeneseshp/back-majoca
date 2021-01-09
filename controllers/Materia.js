const db = require("../models");

exports.encontrarTodos = async (pregunta, respuesta) => {
    var materias = await db.materias.findAll();
    respuesta.status(200).json(materias);
};

exports.registro = async (pregunta, respuesta) => {
    var materia = await db.materias.findOne({ where: { nombre_materia: pregunta.body.nombre_materia } });
    if (materia === null) {
        let id = pregunta.body.nombre_materia.substr(0,4)
        pregunta.body.id_materia = id
        nuevaMateria = await db.materias.create(pregunta.body);
        respuesta.status(200).json(nuevaMateria);
    } else {
        
        return respuesta.status(404).send("Esta materia ya existe");
    }
}

exports.activar = async (pregunta, respuesta) => {
    var materia = await db.materias.findOne({ where: { nombre_materia: pregunta.body.nombre_materia } });
    if (materia === null) {
        return respuesta.status(404).send("Esta materia no existe");
    } else {
        if (materia.estado_materia == "true") {
            await db.materias.update({ estado_materia: "false" }, {
                where: { nombre_materia: pregunta.body.nombre_materia }
            });
        } else {
            await db.materias.update({ estado_materia: "true" }, {
                where: { nombre_materia: pregunta.body.nombre_materia }
            });
        }
    }
    nuevoEstado = await db.materias.findOne({ where: { nombre_materia: pregunta.body.nombre_materia } });
    respuesta.status(200).json(nuevoEstado);
}






