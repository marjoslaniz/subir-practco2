import { EventEmitter } from "events";

//crea una instancia del EventEmitter  
const emisor = new EventEmitter();

//definir evento personalizado
emisor.on('saludo', (nombre)=>{

    console.log(`¡Hola, ${nombre}!`);

});

//emitir el saludo
emisor.emit('saludo','Mundo');