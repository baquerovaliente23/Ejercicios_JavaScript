async function lanzarDados() {

    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;

    const imagenDado1 = document.getElementById('dado1');
    const imagenDado2 = document.getElementById('dado2');

    const resultado = document.getElementById('resultado');

    switch (dado1) {
        case 1: imagenDado1.src = '../images/dado1.png'; break;
        case 2: imagenDado1.src = '../images/dado2.png'; break;
        case 3: imagenDado1.src = '../images/dado3.png'; break;
        case 4: imagenDado1.src = '../images/dado4.png'; break;
        case 5: imagenDado1.src = '../images/dado5.png'; break;
        case 6: imagenDado1.src = '../images/dado6.png'; break;
    }

    switch (dado2) {
        case 1: imagenDado2.src = '../images/dado1.png'; break;
        case 2: imagenDado2.src = '../images/dado2.png'; break;
        case 3: imagenDado2.src = '../images/dado3.png'; break;
        case 4: imagenDado2.src = '../images/dado4.png'; break;
        case 5: imagenDado2.src = '../images/dado5.png'; break;
        case 6: imagenDado2.src = '../images/dado6.png'; break;
    }

    resultado.textContent = `La suma de los dados es: ${dado1 + dado2}`;


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

