let body = document.querySelector("body");
    rangoRojo = document.getElementById("rojo");
    rangoVerde = document.getElementById("verde");
    rangoAzul = document.getElementById("azul");
    textoRojo = document.getElementById("rangoRojo");
    textoVerde = document.getElementById("rangoVerde");
    textoAzul = document.getElementById("rangoAzul");

textoRojo.innerText = rangoRojo.value;
textoVerde.innerText = rangoVerde.value;
textoAzul.innerText = rangoAzul.value;

function cambioColor(rojo, verde, azul){

    let coloresRGB = `rgb(${rojo}, ${verde}, ${azul})`;

    textoRojo.innerText = rojo;
    textoVerde.innerText = verde;
    textoAzul.innerText = azul;
    body.style.backgroundColor = coloresRGB;

}

rangoRojo.addEventListener("change", () => {
    cambioColor(rangoRojo.value, rangoVerde.value, rangoAzul.value);
})

rangoVerde.addEventListener("change", () => {
    cambioColor(rangoRojo.value, rangoVerde.value, rangoAzul.value);
})

rangoAzul.addEventListener("change", () => {
    cambioColor(rangoRojo.value, rangoVerde.value, rangoAzul.value);
})