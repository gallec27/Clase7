const { editar } = require("./edit"); 
const fs = require("fs");
const data = fs.readFileSync("./tasksData.json", "utf-8");
let dataParseada = JSON.parse(data);

function agregar(tituloNuevo, nuevaDescripcion) {
  if (dataParseada.some((tarea) => tarea.titulo === tituloNuevo)){    
    editar(tituloNuevo, nuevaDescripcion);
  }

  else {    
    dataParseada.push({titulo: tituloNuevo, descripcion: nuevaDescripcion});
    fs.writeFileSync("./tasksData.json", JSON.stringify(dataParseada));
  }
}

module.exports = { agregar };