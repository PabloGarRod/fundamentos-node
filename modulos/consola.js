function funcion1() {
  console.group("Función1:");
  console.log("Esto es de la F1");
  console.log("Esto es de la F1");
  console.log("Esto es de la F1");
  funcion2();
  console.groupEnd();
}
function funcion2() {
  console.group("Función2:");
  console.log("f2");
  console.log("f2");
  console.log("f2");
  console.groupEnd();
}

console.log("Empezamos");

funcion1();

console.log("Fin");
