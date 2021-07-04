const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require("colors");

console.clear();

crearArchivo(argv.base, argv.l, argv.h)
    .then( archivo => console.log(archivo.rainbow, "creado"))
    .catch(err => console.log("Error", err));