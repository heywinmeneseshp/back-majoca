/*
    id_curso: DataTypes.STRING,
    materia: DataTypes.STRING,
    id_tarea: DataTypes.STRING,
    nota: DataTypes.DOUBLE,
    tipo_nota: DataTypes.STRING,
    periodo: DataTypes.STRING
*/
const db = require("../models");

exports.encontrarTodos = async (pregunta, respuesta) => {
    var notas = await db.notas.findAll();
    respuesta.status(200).json(notas);
};

exports.registro = async (pregunta, respuesta) => {
    nuevaNota = await db.notas.create(pregunta.body);
    respuesta.status(200).json(nuevaCurso);
};

