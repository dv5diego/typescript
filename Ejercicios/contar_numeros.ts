
// Contar la cantidad de números dada una cadena de texto.

function numberCounter(text: string): number{

    let getText: string=text.replace(/[^0-9-' ']/g, "")
    return getText.toString().length
}

let text2: string="aasdsds44erer//668*8__lll52.__._96"
console.log("La cantidad de números encontradas en la cadena de texto es: ",numberCounter(text2))