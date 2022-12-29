function encriptar() {
    let textoEntrada = document.getElementById("txtEntrada").value;
    let textoSalida = "";
    let code = "";

    for (var i = 0; i < textoEntrada.length; i++) {
        let letra = textoEntrada.charAt(i);

        if (letra == 'e') {
            code = "enter";
        }
        else if (letra == "i") {
            code = "imes"
        }
        else if (letra == "a") {
            code = "ai"
        }
        else if (letra == "o") {
            code = "ober"
        }
        else if (letra == "u") {
            code = "ufat"
        }
        else {
            code = letra;
        }
        textoSalida = textoSalida + code;
    }

    document.getElementById("txtResultado").value = textoSalida;
}

function desencriptar() {
    let textoEntrada = document.getElementById("txtEntrada").value;
    let textoSalida = "";

    textoSalida = textoEntrada.replaceAll("enter", "e");
    textoSalida = textoSalida.replaceAll("imes", "i");
    textoSalida = textoSalida.replaceAll("ai", "a");
    textoSalida = textoSalida.replaceAll("ober", "o");
    textoSalida = textoSalida.replaceAll("ufat", "u");
    document.getElementById("txtResultado").value = textoSalida;
}

function copiar() {
    const textSalida = document.getElementById("txtResultado");

    //medio fancy esto:
    textSalida.select();
    textSalida.setSelectionRange(0, 99999); // For mobile devices

    //Esta es la línea importante
    navigator.clipboard.writeText(textSalida.value);

    // Aviso
    alert("Texto copiado");
}
