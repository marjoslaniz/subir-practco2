import fs from 'fs';

//leer archivo de forma asicronica
fs.readFile('./data/example.txt', 'utf8',(err, data) => {
    if(err) throw err;
    console.log('Contenido del archivo: ', data);    
});

//escribir archivo nuevo
fs.writeFile('./data/newfile.txt', 'Contenido nuevo', (err) => {
    if(err) throw err;
    console.log('Archivo creado y escrito');

});

//renombrar un archivo
fs.rename('./data/newfile.txt', './data/renamefile.txt', (err) => {
    if(err) throw err;
    console.log('Archivo renombrado');

});