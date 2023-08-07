// Contar la cantidad de letras dada una cadena de texto.

function letterCounter(text: string): number{

    let getText=text.replace(/[^a-zA-Z-' ']/g, "")

    return getText.toString().length
}

let text1: string="aasdsds44erer//668*8__lll52.__._"
console.log("La cantidad de letras encontradas en la cadena de texto es: ",letterCounter(text1))
