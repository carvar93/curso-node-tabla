const fs=require('fs')
const colors= require('colors');

const crearArchivo = (base = 5, listar = false, limite=12) => {
  return new Promise((resolve, reject) => {
      

      let salida = '';
      
      for (let i = 1; i <= limite; i++) {
          salida += `${base} x ${i} = ${base * i}\n`;
      }
      if (listar) {
          console.log('======================'.green);
          console.log('Tabla del'.cyan, base)
          console.log('======================'.green);

          console.log(salida.blue); 
      }
      try {
          fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
          resolve(`tabla-${base}.txt`.rainbow);
      } catch (error) {
          reject(err);
      }
      (salida)
          ? resolve()
          : reject ('Error')
  })
}


module.exports ={
crearArchivo
}