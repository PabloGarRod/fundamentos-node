// const process = require("process");

process.on("beforeExit", () => {
  console.log("proceso va a terminar");
});

process.on("exit", () => {
  console.log("proceso acabado");
  setTimeout(() => console.log("Esto nunca se verá"), 3000);
});

process.on("uncaughtException", (err, origen) => {
  console.error("Se olvidó capturar el error");
  console.error(err.message);
  setTimeout(() => console.log("Esto se ve en la excepcion"), 3000);
});

funcionQueNoExiste();
