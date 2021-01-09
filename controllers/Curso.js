/*
    curso: DataTypes.STRING,
    anho: DataTypes.INTEGER,
    estado_curso: DataTypes.STRING,
    profesores_curso: DataTypes.JSON
    id_curso: DataTypes.STRING,
*/
const db = require("../models");

exports.encontrarTodos = async (pregunta, respuesta) => {
    var cursos = await db.cursos.findAll();
    respuesta.status(200).json(cursos);
};

exports.registro = async (pregunta, respuesta) => {
    var curso = await db.cursos.findOne({ where: { id_curso: pregunta.body.id_curso } });
    if (curso === null) {
        pregunta.body.estado_curso = "true"
        nuevaCurso = await db.cursos.create(pregunta.body);
        respuesta.status(200).json(nuevaCurso);
    } else {
        return respuesta.status(404).send("Este curso ya existe");
    }
}

exports.activar = async (pregunta, respuesta) => {
    var curso = await db.cursos.findOne({ where: { id_curso: pregunta.body.id_curso } });
    if (curso === null) {
        return respuesta.status(404).send("Esta materia no existe");
    } else {
        if (curso.estado_curso == "true") {
            await db.cursos.update({ estado_curso: "false" }, {
                where: { curso: pregunta.body.curso }
            });
        } else {
            await db.cursos.update({ estado_curso: "true" }, {
                where: { curso: pregunta.body.curso }
            });
        }
    }
    nuevoEstado = await db.cursos.findOne({ where: { id_curso: pregunta.body.id_curso } });
    respuesta.status(200).json(nuevoEstado);
}
