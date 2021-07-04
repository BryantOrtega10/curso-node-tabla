const fs = require('fs');
const colors = require("colors");

const crearArchivo = async(numero = 5, listar = false, hasta = 10) => {
    try{
        let salida = `Tabla del ${numero} \n`;
        for (let i = 1; i <= hasta; i++) {
            salida += `${numero}`;
            salida += ` x `;
            salida += `${i}`;
            salida += " = ";
            salida += `${numero * i}\n`;
        }
        if(listar){
            console.log(salida.trap.blue);
        }        
        fs.writeFileSync(`./salida/tabla-${numero}.txt`, salida);
        return `tabla-${numero}.txt`;
    }
    catch(err){
        throw err
    }
}

module.exports = {
    crearArchivo
}