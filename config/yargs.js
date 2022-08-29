

const argv=require('yargs' )
.option('b',{
    alias:'base',
    type:'number',
    demandOptions:true
}).option('l',{
    alias:'listar',
    type:'boolean',
    demandOptions:true,
    default:false
}).option('h',{
    alias:'limite',
    type:'number',
    demandOptions:true,
    default:12
})
.check((argv,options)=>{
    if(isNaN(argv.b)){
        throw 'La base tiene que ser un numero'
    }
   return true;
}).argv;



module.exports= argv;



