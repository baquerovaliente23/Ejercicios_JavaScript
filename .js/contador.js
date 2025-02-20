let contador = 0;

function actualizarContador() {
    document.getElementById("contador").innerText = contador;
}

function añadir() {
    if (contador < 10) {
        contador++;
        actualizarContador();
    } else {
        alert("El contador no puede ser mayor a 10");
    }
}

function quitar() {
    if (contador > 0) {
        contador--;
        actualizarContador();
    } else {
        alert("El contador no puede ser negativo");
    }
}

function reset() {
    contador = 0;
    actualizarContador();
}
