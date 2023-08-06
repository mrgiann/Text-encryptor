function encriptar() {
    let texto = document.getElementById("texto").value;

    // Creamos variables de reemplazos
    let textoCifrado = texto
      .replace(/e/gi, "M4j2pS")
      .replace(/i/gi, "9gJbn0x")
      .replace(/a/gi, "l56fdGb")
      .replace(/o/gi, "7b3GH8z")
      .replace(/u/gi, "8FbS5gkk")

    // Si hay texto, ciframos
    if (texto.length !== 0) {
      document.getElementById("texto").value = textoCifrado;
    }
  }

  // Si hay texto, desencriptamos
  function desencriptar() {
    let texto = document.getElementById("texto").value;

    let textoCifrado = texto
      .replace(/M4j2pS/gi, "e")
      .replace(/9gJbn0x/gi, "i")
      .replace(/l56fdGb/gi, "a")
      .replace(/7b3GH8z/gi, "o")
      .replace(/8FbS5gkk/gi, "u")

    if (texto.length !== 0) {
      document.getElementById("texto").value = textoCifrado;
    }
  }