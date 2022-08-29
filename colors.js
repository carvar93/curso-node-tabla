export var colors = require('colors');
 
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});
 
// outputs red text
console.log("this is an error".error);
 
// outputs yellow text
console.log("this is a warning".warn);



const fs=require('fs')
// const crearArchivo=(base=5)=>{
   
//     console.log('Tabla ')
//     console.log('------- ')
   
    let salida='';
    for (let i = 0; i < 12; i++) {
      salida+=`${num}*${i}=${num*i}\n`;
   
    }
//     console.log(salida);

//     fs.writeFileSync(`tabla-${num}.txt`,salida);
//     console.log(`tabla-${num}.txt creado`)
    
    
    
// }
