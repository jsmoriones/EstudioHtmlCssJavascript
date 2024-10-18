//Obtenemos el numero a adivinar
const numeroSecreto = Math.floor(Math.random() * 100)+1; //iniciamos los intentos en cero
let intentos = 0; //iniciamos en que no hemos adivinado el numero
let adivinado = false; //indicamos que aun no queremos continuar con el juego

//Le agregamos un evento al input text cuando presionamos enter
document.getElementById("txtNumIngresar").addEventListener("keypress", function(event){
    if(event.key == "Enter"){ //Ejecutamos la funcion compruebaDatos al momento de presionar enter
        compruebaDatos();
    }
})

//definimos la funcion compruebaDatos
function compruebaDatos(){
    let continuar = true; //definimos una variable continuar en true, para indicar que iniciamos y queremos seguir el juego
    let numIngresado; //definimos una variable numIngresado para guardar el numero que nos da el usuario
    let sePreguntoContinuar = false;

    do{
        //Asignamos el valor de lo que ingresa el usuario en la variable numIngresado
        numIngresado = parseInt( document.getElementById("txtNumIngresar").value );

        //con isNaN verificamos si el parametro es un numero, verificamos si el numeroIngresado es menor a un y si es mayor a 100. Si es asi le mendamos un mensaje
        if(isNaN(numIngresado) || numIngresado < 1 || numIngresado > 100){
            setMessage("¡Por Favor introduce un número válido, entre 0 y 100!", "😀");
            return;
        }
        
        //console.log(intentos % 6 === 0)
        intentos++;
        
        if(numIngresado === numeroSecreto){
            setMessage(`¡Felicidades! Has adivinado el número: ${numeroSecreto} en ${intentos}`, "😮");
            adivinado = true;
            document.getElementById("txtNumIngresar").disabled = true;
            document.getElementById("btnNumIngresar").disabled = true;
            document.getElementById("btnNumIngresar").classList.add("success");
            return;
        }else if(numIngresado < numeroSecreto){
            setMessage("El número ingresado es demasiado pequeño. Intentalo de nuevo", "😒");
        }else{
            setMessage("El número ingresado es demasiado alto. Intentalo de nuevo", "😒")
        }

        if(intentos === 6 || intentos % 6 === 0){
            if(!sePreguntoContinuar){
                continuar = confirm("se han agotado los seis intentos. ¿Deseas seguir intentando?");
                if(!continuar){
                    document.getElementById("txtNumIngresar").disabled = true;
                    document.getElementById("btnNumIngresar").disabled = true;
                    return;
                }
                sePreguntoContinuar = true;
            }else{
                return;
            }
        }


        mostrarIntentosRider(intentos);
        //console.log(intentos)
        return;
    }while(!adivinado && continuar);
}

function setMessage(msg, emoji){
    //document.getElementById("message").textContent = msg;
    document.getElementById("message").innerHTML = `<span style="margin-right: 10px;">${emoji}</span> ${msg}`;
}
/*function mostrarIntentosRider(intentos){
    //console.log(intentos % 6)
    let mostrarEmojis = "🟥".repeat(intentos % 6) + "😊".repeat(6 - (intentos % 6));
    let intentosRealizados;
    let cuadroEspacio = "<li>";
    
    if(intentos % 6 == 0){
        document.getElementById("intentosRider").textContent = "😊😊😊😊😊😊";
        intentosRealizados = ["🟥", "🟥", "🟥", "🟥", "🟥", "🟥"];
        intentosRealizados.forEach(function(cuadro, index, array) {
            cuadroEspacio += `<span><p class="emoji">${cuadro}</p><p>${index+1}</p></span>`;
        });
        cuadroEspacio += "</li>";
        document.getElementById("listaDeIntentos").insertAdjacentHTML("afterbegin", cuadroEspacio);
        //document.getElementById("intentosRider").innerHTML += "<br>" + mostrarEmojis;
    }else{
        document.getElementById("intentosRider").textContent = mostrarEmojis;
    }
}*/

function inten(valor){
    let resultado = valor == 6?6:valor - 6;
    return resultado;
}

let fallidos = 0;
function mostrarIntentosRider(intentos){
    let mostrarEmojis = "🟥".repeat(intentos % 6) + "😊".repeat(6 - (intentos % 6));
    let cuadroEspacio = "";
    let intentosRealizados = "";
    
    if(intentos % 6 == 0){
        document.getElementById("listaDeIntentos").innerHTML = "";
        document.getElementById("intentosRider").textContent = "😊😊😊😊😊😊";

        fallidos = fallidos + 6;
        console.log(fallidos)
        intentosRealizados += "<li>"
        for(let i = 1; i <= fallidos; i++){
            intentosRealizados += `
                    <span>
                        <img src="square.jpg" class="squareImage">
                        <img src="emoji.png" class="squareImageFace">
                        <p>${i}</p>
                    </span>
            `;
            if(i%6==0){
                intentosRealizados += "<div class='separacion'></div></li><li>"
            }
        }
        cuadroEspacio += intentosRealizados;
        //cuadroEspacio += "</li>";
        
        document.getElementById("listaDeIntentos").insertAdjacentHTML("afterbegin", cuadroEspacio);
        //document.getElementById("intentosRider").innerHTML += "<br>" + mostrarEmojis;
        //document.getElementById("listaDeIntentos").innerHTML = ""
    }else{
        document.getElementById("intentosRider").textContent = mostrarEmojis;
    }
}