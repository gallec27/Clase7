const fs = require("fs");
const data = fs.readFileSync("./tasksData.json", "utf-8");
const dataParseada = JSON.parse(data);

function editar(tituloEditar, nuevaDescripcion) {
  const nuevoArray = dataParseada.map((item) => {
    if (item.titulo === tituloEditar) {
      return {
        titulo: tituloEditar,
        descripcion: nuevaDescripcion,
      };
    }
    return item;
  });  
  
  fs.writeFileSync("./tasksData.json", JSON.stringify(nuevoArray));
}

module.exports = { editar };