function agregarNombre(){
    const nombre = prompt("Ingrese su nombre");
    document.getElementById("saludo").innerHTML= `¡Hola ${nombre}!`;
}