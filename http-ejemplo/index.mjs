import http from 'http';

//crear un servidor HTTP basico
const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('¡Hola Mundo!');
});

//Configurar servidor para que se escuche en puerto 3000
server.listen(3000,'127.0.0.1',()=>{
    console.log('Servidor corriendo en http://127.0.0.1:3000/'); 
});
