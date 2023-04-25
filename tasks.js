const { buscar } = require("./comandos/find");
const { listar } = require("./comandos/list");
const { editar } = require("./comandos/edit");
const { filtrar } = require("./comandos/filter");
const { retornar } = require("./comandos/return");
const { agregar } = require("./comandos/add");
const { borrar } = require("./comandos/delete");

//console.log(listar());
//console.log(buscar("dormir"));
//console.log(filtrar("r"));
//console.log(retornar("dormir"));
//editar("viajar", "Vacaciones!!!");
//agregar("viajar", "disfrutar las vacaciones");
//borrar("dormir");

switch (process.argv[2]) {
  case "add":
    agregar(process.argv[3], process.argv[4]);
    break;
  case "delete":
    borrar(process.argv[3]);
    break;
  case "edit":
    editar(process.argv[3], process.argv[4]);
    break;
  case "filter":
    console.log(filtrar(process.argv[3]));
    break;
  case "find":
    console.log(buscar(process.argv[3]));
    break;
  case "list":
    console.log(listar());
    break;
  case "return":
    console.log(retornar(process.argv[3]));
    break;
}
