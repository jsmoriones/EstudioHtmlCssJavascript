function generateMatrices(){
    const numMatrices = parseInt(document.getElementById("num-matrices").value)
    const rows =  parseInt(document.getElementById("rows").value)
    const columns = parseInt(document.getElementById("cols").value)

    const matrizContainer = document.getElementById("matriz-container")
    matrizContainer.innerHTML = ""

    for(let k = 0; k < numMatrices; k++){
        let matrizHTML = '<div class="matriz"></>'
            matrizHTML += '<h3> La Matriz: '+(k+1)+'</h3>'
            matrizHTML += '<table>'
                for(let i=0; i<rows; i++){ //filas
                    matrizHTML += '<tr>'
                    for(let j = 0; j < columns; j++){ // columnas
                        matrizHTML += '<td> <input type="number" class="cell" id="cell_'+k+'_'+i+'_'+j+'"></td>'
                    }
                    matrizHTML += "</tr>"
                }
            matrizHTML += '</table>'
            matrizHTML += `<button onclick="llenarAletoriamente(this, ${rows}, ${columns})">Llenar Matriz</button>`
            matrizHTML += '</div>'
            matrizContainer.innerHTML += matrizHTML

    }

    if(numMatrices > 1){
        matrizContainer.innerHTML += `
            <button class='btn-sumar' onclick='sumarMatrices()'>Sumar</button> <br />
            <button class='btn-multiplicar' onclick='multiplicarMatrices()'>Multiplicar</button>
        `
    }
}

/*function realizarEcuacion(x, y, r){
    let reserv = 0, mult = 0, sum = 0
    let xPrev = x, yPrev = y
    if( !isNaN(x) && !isNaN(y) ){
        for(let i = 0; i < r; i++){
            console.log(x, y)
        }
    }
}*/
let arr = []
function multiplicarMatrices(){
    const numMatrices = parseInt(document.getElementById("num-matrices").value)
    const rows =  parseInt(document.getElementById("rows").value)
    const columns = parseInt(document.getElementById("cols").value)
    const matrizContainer = document.getElementById("matriz-container")
    let suma = 0;
    let mult = 1
    for(let k = 0; k < numMatrices; k++){ // Numero de Matriz
        for(let i=0; i<rows; i++){ //filas
            for(let j = 0; j < columns; j++){ // columnas
                let val1 = parseInt(document.querySelector(`#cell_${k}_${k}_${j}`).value)
                let val2 = parseInt(document.querySelector(`#cell_${k+1}_${j}_${i}`).value)

                mult = val1 * val2;
                arr.push(mult)
            }
        }
        
        for (let index = 0; index < arr.length; index++) {
            console.log( arr[index] );
        }
    }

}

function sumarMatrices(x){
    const numMatrices = parseInt(document.getElementById("num-matrices").value)
    const rows =  parseInt(document.getElementById("rows").value)
    const columns = parseInt(document.getElementById("cols").value)
    const matrizContainer = document.getElementById("matriz-container")
    let matrizSumaTotal = "<table class='table-result'>"
    document.querySelector(".resultado-suma") != null ? document.querySelector(".resultado-suma").remove() : null
    matrizContainer.insertAdjacentHTML("afterend", "<div class='resultado-suma'></div>")
    
    for(let k = 0; k < numMatrices; k++){ // Numero de Matriz
        for(let i=0; i<rows; i++){ //filas
            matrizSumaTotal += "<tr>"
            for(let j = 0; j < columns; j++){ // columnas
                let valorDeFor = (i+1) * (j+1)
                
                //console.log( document.querySelector(`#cell_${k}_${i}_${j}`) )
                
                let valorOrden = rows  * columns
                
                /*console.log(
                    parseInt(document.querySelector(`#cell_${k}_${i}_${j}`).value) + parseInt(document.querySelector(`#cell_${k+1}_${i}_${j}`).value)
                )*/

                let valor = parseInt(document.querySelector(`#cell_${k}_${i}_${j}`).value) + parseInt(document.querySelector(`#cell_${k+1}_${i}_${j}`).value)
                matrizSumaTotal += '<td>'+valor+'</td>'
            }
            matrizSumaTotal += "</tr>"
        }

        matrizSumaTotal.innerHTML += "</table>"
        document.querySelector(".resultado-suma").insertAdjacentHTML("afterend", matrizSumaTotal)
    }
}

function llenarAletoriamente(button, r, c){
    /*let matriz = button.closest(".matriz")
    let cell = matriz.querySelectorAll(`.cell`)
    for(let i = 0; i < cell.length; i++){
        let aleatorio =  Math.floor( Math.random() * 100)+1
        cell[i].value = aleatorio
        
    }*/
    let cell = button.parentNode.querySelectorAll(`.cell`)

    /*for(let i = 0; i < (cell.length > 9 ? cell.length / 2 : cell.length); i++){
        console.log("Llegue ", cell[i])
    }*/

    for(let i = 0; i < cell.length; i++){
        let aleatorio =  Math.floor( Math.random() * 100)+1
        cell[i].value = aleatorio
    }
    
}