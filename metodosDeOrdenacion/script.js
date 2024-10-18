var arrayOld = []
var totalValueArray = 0

function numeroMayor(array){
    let mayor = array[array.length - 1]
    for(let i = 0; i < array.length; i++){
        if(array[i] > mayor){ // Numero Mayor
            mayor = array[i]
        }
    }
    
    return mayor
}
var igual = 0
 function numeroMenor(array){ // EL PROBLEMA ESTA AQUI
    let menor = array[0]
    for(let i = 0; i < array.length; i++){
        if(array[i] < menor){ //Numero menor
            menor = array[i]
        }
    }
    /*for(let i = 0; i <= totalValueArray; i++){
        if(array[i] < menor){
            menor = array[i]
        }
    }*/
    console.log(igual)
    return menor
}


function eliminarValorDeArray(x, array){ //SI NO ES DIFERENTE TE LO DEJA AHI MISMO
    for(let j = 0; j <= array.length; j++){
        //console.log(x)
        if(x == array[j]){
            let index = array.indexOf(x) //Aqui me da la posicion donde se encuentra el numero deseado
            if( index > -1 ){
                array.splice(index, 1);
            }
        }
    }
}

document.getElementById("formQuicksort").addEventListener("submit", (event) => {
    event.preventDefault()
    
    const inputQuicksort = document.querySelector("#inputQuicksort").value

    let array = Array.from(inputQuicksort.split(","), (x) => parseInt(x)) //Aqui convierto en arreglo los valores seperados por coma ingresados en el input. Ademas los convierto a numeros porque el input me los devuelve en cadena
    let armando = []
    arrayOld = array
    totalValueArray = array.length

    //console.log(array)
    for(let i = 0; i < totalValueArray; i++){
        let nm = numeroMenor(array)
        eliminarValorDeArray(nm, array)
        
        armando.push(nm)
        /*let resultado = eliminarValorDeArray(nm, arrayOld)
        console.log( resultado )*/
    }

    console.log(armando)

    /*let numMenor = numeroMenor(array),
        numMayor = numeroMayor(array),
        armando = []

    console.log(
        numMenor,
        numMayor
    )
    eliminarValorDeArray(numMenor, array)
    eliminarValorDeArray(numMayor, array)

    
    console.log(arrayOld)
    for(let i = 0; i <= arrayOld.length; i++){
        
        armando.push( eliminarValorDeArray( numeroMenor(arrayOld), arrayOld ) )
    
        console.log(armando)
    }*/












    /*let arr1 = [], arr2 = []
    if(array.length > 2){
        for(let i = 0; i < array.length; i++){
            if(array[3] < array[i]){
                arr1.push( array[i] )
            }else{
                arr2.push( array[i] )
            }
        }
        for(let j = 0; j < array.length; j++){ // ARREGLO NORMAL
            for(let i = array.length; i >= 1; i--){ // ARREGLO ALREVES
                if(array[j] < array[i]){
                    console.log( array[j] )
                }
            }
        }
    }*/

    /*let a = 0, b = 1, temp
    for(let i = 0; i < arr1.length; i++){
        
    }*/
})