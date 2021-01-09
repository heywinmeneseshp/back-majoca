const db = require("../models");

exports.encontrarTodos = async (pregunta, respuesta) => {
    var tareas = await db.tareas.findAll();
    respuesta.status(200).json(tareas);
};

exports.registro = async (pregunta, respuesta) => {
    var tarea = await db.tareas.create(pregunta.body);
    respuesta.status(200).json(tarea);
};