let nombre = process.env.NOMBRES || 'sin nombre';
let web = process.env.WEB || 'no web';

console.log('Hola', nombre);
console.log('Mi web es', web);