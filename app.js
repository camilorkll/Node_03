


const argv = require('.\\config\\yargs').argv;

const colors = require('colors');

const { crearArchivo, listarTabla } = require('.\\multiplicar\\multiplicar');


let comando = argv._[0];

switch( comando ) {
   case 'listar':
       listarTabla(argv.base, argv.limite);
       break;

       case 'crear':
           console.log('crear');
           crearArchivo(argv.base, argv.limite)
               .then( archivo => console.log('El archivo se ha creado: ' + colors.bold.red(archivo)))
               .catch(err => console.log(err));
           break;
    default:
        console.log('PEro que coño de comando has puesto');
        break;
}
