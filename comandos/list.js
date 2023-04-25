const fs = require("fs");
const dataParseada = JSON.parse(fs.readFileSync("./tasksData.json", "utf-8"));

function listar() {
    return dataParseada.map((tarea) => tarea.titulo);
}

module.exports = {listar};