const arreglo = [1,2,3,4,5,6]

let pares = function(){ //Devuelve pares del arreglo
    let result = []
    arreglo.forEach(function (ar, index){
        if(ar % 2 == 0){
            result.push(ar)
        }
    })

    return result
}
let imPares = function(){ //Devuelve impares del arreglo
    let result = []
    arreglo.forEach(function (ar, index){
        if(ar % 2 >= 1){
            result.push(ar)
        }
    })

    return result
}

console.log( pares() )
console.log( imPares() )