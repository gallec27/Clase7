const fs = require("fs");
const data = fs.readFileSync("./tasksData.json", "utf-8");
let dataParseada = JSON.parse(data);

function borrar(tituloBorrar) {
  if (dataParseada.some((tarea) => tarea.titulo === tituloBorrar)){    
    fs.writeFileSync("./tasksData.json", JSON.stringify(dataParseada.filter(tarea => tarea.titulo !== tituloBorrar)));     
  }
}

module.exports = { borrar };