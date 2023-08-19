// let buffer = Buffer.alloc(4);
// let buffer = Buffer.from([1, 2, 5]);
let buffer = Buffer.from("Hola");

// console.log(buffer);
// console.log(buffer.toString());

// ----

let abc = Buffer.alloc(102);
console.log(abc);

for (let i = 0; i < 102; i++) {
  abc[i] = i + 26;
}

console.log(abc.toString());
