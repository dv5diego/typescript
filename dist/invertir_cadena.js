"use strict";
// Invertir una cadena dada.
function generateReverseText(text) {
    // let text: string="Sudamerica"
    let reverseText = text.split("").reverse();
    // console.log("La cadena inversa es: ", reverseText.join("").toString())
    return reverseText.join("").toString();
}
let text = "Sudamerica";
console.log("La cadena inversa es: ", generateReverseText(text));
