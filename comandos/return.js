const fs = require("fs");
const dataParseada = JSON.parse(fs.readFileSync("./tasksData.json", "utf-8"));

function retornar(tit) {
  let resultadoBusqueda = null;
  resultadoBusqueda = dataParseada.find((tarea) => tarea.titulo === tit);

  if (resultadoBusqueda != null) {
    return resultadoBusqueda;
  } else {
    return "No se encontraron resultados.";
  }
}

module.exports = { retornar };
