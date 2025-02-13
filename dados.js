async function lanzarDados() {
    // Función para generar un número aleatorio entre 1 y 6
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;

    // Seleccionar las imágenes de los dados
    const imagenDado1 = document.getElementById('dado1');
    const imagenDado2 = document.getElementById('dado2');

    // Mostrar la suma de los dados
    const resultado = document.getElementById('resultado');

    // Asignar imágenes usando un switch
    switch (dado1) {
        case 1: imagenDado1.src = 'dado1.png'; break;
        case 2: imagenDado1.src = 'dado2.png'; break;
        case 3: imagenDado1.src = 'dado3.png'; break;
        case 4: imagenDado1.src = 'dado4.png'; break;
        case 5: imagenDado1.src = 'dado5.png'; break;
        case 6: imagenDado1.src = 'dado6.png'; break;
    }

    switch (dado2) {
        case 1: imagenDado2.src = 'dado1.png'; break;
        case 2: imagenDado2.src = 'dado2.png'; break;
        case 3: imagenDado2.src = 'dado3.png'; break;
        case 4: imagenDado2.src = 'dado4.png'; break;
        case 5: imagenDado2.src = 'dado5.png'; break;
        case 6: imagenDado2.src = 'dado6.png'; break;
    }

    // Mostrar el resultado de la suma
    resultado.textContent = `La suma de los dados es: ${dado1 + dado2}`;

    //Subo a la API los resultados

    await fetch("https://crudcrud.com/api/e458d480066e49eebac6f59aedc369b5/resultados",
    {
        method: 'POST', 
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            dado1: dado1,
            dado2: dado2,
            resultado: resultado
        })
    });
    
}
async function verResultados() {
    console.log("inicio de la petición");
    let respuesta = await fetch("https://crudcrud.com/api/e458d480066e49eebac6f59aedc369b5/resultados");
    let datos = await respuesta.json();
    console.log ("Datos obtenidos", datos);
}

