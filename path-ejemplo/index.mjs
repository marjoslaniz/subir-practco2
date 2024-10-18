import path from "path";

//definir ruta del archivo
const filePath = ('./data/example.txt');

//obtener directorio base
const dirName = path.dirname(filePath);
console.log('Directorio base: ',dirName);

//obtner arhivo sin extension
const baseName = path.basename(filePath, '.txt');
console.log('Nombre del archivo:', baseName);

//obtener la extension del archivo
const extName = path.extname(filePath);
console.log('Extension del archivo: ', extName);

//Crear una ruta
const newPath = path.join('./user','docs','newfile.txt');
console.log('Nueva ruta: ',newPath);    





