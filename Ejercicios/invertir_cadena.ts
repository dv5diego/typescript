// Invertir una cadena dada.

function generateReverseText(text: string): string{
    // let text: string="Sudamerica"

    let reverseText: string[]=text.split("").reverse()

    // console.log("La cadena inversa es: ", reverseText.join("").toString())
    return reverseText.join("").toString()
}

let text: string="Sudamerica"
console.log("La cadena inversa es: ",generateReverseText(text))