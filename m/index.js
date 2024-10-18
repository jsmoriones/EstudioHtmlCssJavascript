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
            <div class="contendor-botones">
                <button class='btn-sumar' onclick='sumarMatrices()'>Sumar</button>
                <button class='btn-multiplicar' onclick='multiplicarMatrices()'>Multiplicar</button>
            </div>
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
function multiplicarMatrices(){
    const numMatrices = parseInt(document.getElementById("num-matrices").value)
    const rows =  parseInt(document.getElementById("rows").value)
    const columns = parseInt(document.getElementById("cols").value)
    document.querySelector(".resultado-matriz").innerHTML = "<h3>Resultado Multiplicación</h3>"
    let arr1 = []


    //const matrizContainer = document.getElementById("matriz-container")
    for(let k = 0; k < numMatrices; k++){ // Numero de Matriz
        arr1[k] = []
        for(let i=0; i<rows; i++){ //filas
            arr1[k][i] = []
            for(let j = 0; j < columns; j++){ // columnas
                let val1 = parseInt(document.querySelector(`#cell_${k}_${i}_${j}`).value)
                arr1[k][i][j] = val1
            }
        }
    }

    procesoMultiply(arr1)
    
}

function procesoMultiply(matriz){
    if(matriz[0][0].length !== matriz[1].length){
        alert("No se puede multiplicar.")

        return;
    }
    let filas = matriz[0].length
    let columns = matriz[0][0].length
    let nuevoArray = new Array(columns)
        .fill(0)
        .map(row => new Array(filas).fill(0) )

    for(let i = 0; i < nuevoArray.length; i++){
        for(let j = 0; j < nuevoArray[i].length; j++){ // x Fila
            for(let k = 0; k < matriz[0].length; k++){
                nuevoArray[i][j] += matriz[0][i][k] * matriz[1][k][j]
            }
        }
    }

    console.log(nuevoArray);


    let table = document.createElement("TABLE")
    table.classList.add("tabla-multiplicacion")

    for(let p = 0; p < nuevoArray.length; p++){
        let row = table.insertRow();
        for(let y = 0; y < nuevoArray[0].length; y++){
            let cell = row.insertCell()
            cell.classList.add('cell')
            cell.textContent = nuevoArray[p][y]
        }
    }

    document.querySelector(".resultado-matriz").insertAdjacentElement("afterbegin", table)

}

function sumarMatrices(){
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
        let aleatorio =  Math.floor( Math.random() * 10)+1
        cell[i].value = aleatorio
    }    
}