const fs = require("fs");
const dataParseada = JSON.parse(fs.readFileSync("./tasksData.json", "utf-8"));

function buscar(tit) {
    return dataParseada.some((tarea) => tarea.titulo === tit);
}

module.exports = {buscar};