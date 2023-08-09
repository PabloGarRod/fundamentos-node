function otraFuncion() {
  seRompe();
}

function seRompe() {
  return 3 + z;
}

function seRompeAsync(cb) {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (err) {
      cb();
      console.error(err.message);
    }
  });
}

try {
  seRompeAsync(function () {
    console.error("hay error");
  });
} catch (err) {
  console.error("Algo se ha roto:");
  console.error(err.message);
  console.log("Lo hemos capturado");
}

console.log("Esto está al final");
