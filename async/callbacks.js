function hola(nombre, miCallBack){
    setTimeout(function () {
        console.log('Hola', nombre);
        miCallBack(nombre);
    }, 1500);
};

function adios(nombre, otroCallbak){
    setTimeout(function(){
        console.log('Adios', nombre)
        otroCallbak();
    }, 1000)
}

console.log('Iniciando proceso...');

hola('Carlos', function (nombre) {
    adios(nombre, function() {
        console.log('Terminando proceso...');
    });
});

// hola('Carlos', function(){});
// adios('Carlos', function(){});