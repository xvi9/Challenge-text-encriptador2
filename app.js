
function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco =  document.getElementById("muñeco");

    let textoCifrado = texto
                .replace(/e/gi, "enter")
                .replace(/i/gi, "imes")
                .replace(/a/gi, "ai")
                .replace(/o/gi, "ober")
                .replace(/u/gi, "ufat");


if(texto.length !=0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "texto encriptado con exito";
    parrafo.textContent = "";
    muñeco.src = "./img/inosuke.png";
} else {
    muñeco.src = "./img/satoru.webp"; 
    tituloMensaje.textContent = "ningun mensaje fue encontrado";
    parrafo.textContent = "Ingrese el texto que deseas encriptar o desencriptar";  
    swal(" Ooops!", "Debes de ingresar un texto", "warning");

    }
    
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco =  document.getElementById("muñeco");

    let textoCifrado = texto 
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");   

    if(texto.length !=0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "texto desencriptado con exito";
        parrafo.textContent = "";
        muñeco.src = "./img/tanjiro.jpg";  
    }else {
        muñeco.src = "./img/satoru.webp"; 
        tituloMensaje.textContent = "ningun mensaje fue encontrado";
        parrafo.textContent = "Ingrese el texto que deseas encriptar o desencriptar";  
        swal(" Ooops!", "Debes de ingresar un texto", "warning");

    }
}
