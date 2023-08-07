// Contar la cantidad de palabras dada una determinada frase.

function wordCounter(phrase: string): number{
    // let text1:string="  .   esto es    un texto   // "
        
    // let arrayText: string[]=text1.trim().split(" ")
    let getText=phrase.replace(/[^a-zA-Z-' ']/g, "")
    //reemplazar números==>replace(/[^0-9-' ']/g, "")
    let wordArrangement: string[]=[]
    
    
    // console.log(getText.trim().split(" "))
    
    //of: para recorrer una cadena  ||  in: para recorrer una lista
    for(let val of getText.trim().split(" ")){
        if(val!=""){
            wordArrangement.push(val)
        }
    }
    
    return wordArrangement.length
}

let phrase: string="   .  esto es    un texto   // $ __._"
console.log("La cantidad de palabras encontradas en la frase es: ",wordCounter(phrase))

// arrayText.forEach(element => {
//     if(element!=""){
//         phrase.push(element)
//         console.log("---",phrase)
//     }
// })

// for(let i=0; i<arrayText.length; i++){
    
// }