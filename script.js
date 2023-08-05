// Creamos función encriptar
function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let mono = document.getElementById("mono");
    // Creamos variables de reemplazos
    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    // Si hay texto, ciframos
    if (texto.length !== 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";

        // Mostrar alerta de éxito
        Swal.fire({
            icon: 'success',
            title: '¡Texto encriptado con éxito!',
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        mono.src = "./img/mono.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";

        // Mostrar alerta de error
        Swal.fire({
            icon: 'error',
            title: 'Oh No!',
            text: 'No has ingresado el texto a cifrar'
        });
    }
}

// Si hay texto, desencriptamos
function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let mono = document.getElementById("mono");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length !== 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";

        // Mostrar alerta de éxito
        Swal.fire({
            icon: 'success',
            title: '¡Texto desencriptado con éxito!',
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        mono.src = "./img/mono.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";

        // Mostrar alerta de error
        Swal.fire({
            icon: 'error',
            title: 'Oh No!',
            text: 'No has ingresado el texto a descifrar'
        });
    }
}
