const fs = require("fs");
const dataParseada = JSON.parse(fs.readFileSync("./tasksData.json", "utf-8"));

function filtrar(tit) {
    return dataParseada.filter((tarea) => tarea.titulo.includes(tit));
}

module.exports = {filtrar};