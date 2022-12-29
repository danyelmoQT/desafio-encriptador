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
            code = "imes";
        }
        else if (letra == "a") {
            code = "ai";
        }
        else if (letra == "o") {
            code = "ober";
        }
        else if (letra == "u") {
            code = "ufat";
        }
        else {
            code = letra;
        }
        textoSalida = textoSalida + code;
    }
    document.getElementById("txtResultado").value = textoSalida;
    cambiarVisibilidad(textoSalida);
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
    cambiarVisibilidad(textoSalida);
}

function cambiarVisibilidad(texto) {
const col2 = document.getElementsByClassName("col-2");
const col3 = document.getElementsByClassName("col-3");

    if (texto.length < 1) {
        col2[0].style.display = "none";
        col3[0].style.display = "table-cell";
    } else {
        col3[0].style.display = "none";
        col2[0].style.display = "table-cell";
    }
}

function copiar() {
    const textSalida = document.getElementById("txtResultado");
    navigator.clipboard.writeText(textSalida.value);
    alert("Texto copiado");
}
