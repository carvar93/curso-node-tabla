
// //limpiar la consola
// console.clear('fs');
// console.log('tabla del 5');
// console.log('-------------');

// const fs=require('fs')

// let num = 5;
// let resultado=0;
// let salida='';
// for (let i = 0; i < 12; i++) {
//   salida+=`${num}*${i}=${num*i}\n`;
// //  resultado = num*i;
//  // console.log('5 x',i ,resultado);
// }

// fs.writeFileSync(`tabla-${num}.txt`,salida);
//   console.log(`tabla-${num}.txt creado`)




//const fs=require('fs') 





//const base=3;



// const {crearArchivo}= require('./helpers/multiplicar.js');
// const argv= require('./config/yargs');

// console.clear();
// crearArchivo(argv.b,argv.l)
// .then(nombreArchivo=>console.log(nombreArchivo,'creado'))
// .catch(err=>console.log(err));




// const[,,arg3='base=5']=process.argv;
// const[,base=5]=arg3.split('=');
// console.log(base);


const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

 console.clear();
//   console.log(process.argv);
//  console.log(argv);


crearArchivo(argv.b, argv.l,argv.h)
    .then (nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));








