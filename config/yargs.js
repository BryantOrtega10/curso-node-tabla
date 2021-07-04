const argv = require('yargs')
            .option("b",{
                alias: "base",
                type : "number",
                demandOption: true,
                desc: "Es la base de la tabla a multiplicar"
            })
            .option('l', {
                alias: "listar",
                type: "boolean",
                default: false,
                desc: "Lista la tabla de multiplicar"
            })
            .option('h',{
                alias: "hasta",
                type: "number",
                default: 10,
                desc: "Especifica hasta que número se haran las multiplicaciones"
            })
            .check((argv, options) => {
                if(isNaN(argv.b)){
                    throw 'La base debe ser un número';
                }
                if(isNaN(argv.h)){
                    throw 'El valor de hasta debe ser un número';
                }
                return true;
            })
            .argv;

module.exports = argv;