import os from 'os';

//obtener la arquitectura del sistema
console.log('Arquitectura: ',os.arch());
 
//obtener el tipo de sistema operativo
console.log('Plataforma: ',os.platform());

//obtener la cantidad de memoria
console.log('Memoria total: ', os.totalmem());

//obtener la memoria libre
console.log('Memoria libre: ',os.freemem());

//obtner informacion del cpu
console.log('Informacion del cpu: ',os.cpus());

