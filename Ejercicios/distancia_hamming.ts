// Identificar si las cadenas dadas presentan o no la distancia de hamming.

function getDistance(string1: string, string2: string): number{
    let distance: number=0
    let flag: boolean=true

    if(string1.length!==string2.length){
        flag=false
       console.error("Los textos tienen un tamaño diferente.")
    }
    
    for(let i=0; i<string1.length; i++){
        if(string1[i]!==string2[i]){
            distance++
        }
    }

    //retornará el valor de -1 si el tamaño de las cadenas son diferentes
    return flag?distance:-1
}

let string1: string="Sudamerica"
let string2: string="Suramerica"

// 1-Descomentar para obtener el valor en la comparativa entre cadenas. Antes se debe comentar la variable
// string2 antes definida.
// let string2: string="Sudamerica"

// 2-Descomentar para obtener el valor en la comparativa entre cadenas de diferentes tamaños.
// Antes se debe comentar la variable string2 antes definida.
// let string2: string="Suramerica1"

console.log("La distancia es de: ",getDistance(string1,string2))
