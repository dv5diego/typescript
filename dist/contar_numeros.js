"use strict";
// Contar la cantidad de números dada una cadena de texto.
function numberCounter(text) {
    let getText = text.replace(/[^0-9-' ']/g, "");
    return getText.toString().length;
}
let text2 = "aasdsds44erer//668*8__lll52.__._96";
console.log("La cantidad de números encontradas en la cadena de texto es: ", numberCounter(text2));
