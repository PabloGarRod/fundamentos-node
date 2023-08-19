console.time("todo");
let suma = 0;
console.time("bucle 1");
for (let i = 0; i < 100000; i++) {
  suma += 1;
}
console.timeEnd("bucle 1");

let sum2 = 0;
console.time("bucle 2");
for (let i = 0; i < 100000; i++) {
  suma += 1;
}
console.timeEnd("bucle 2");

console.time("asincrono");
console.log("Comienza proceso asincrono");
asincrona().then(() => console.timeEnd("asincrono"));

console.timeEnd("todo");

function asincrona() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Termina el proceso asincrono");
      resolve();
    });
  });
}
