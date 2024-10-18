const numeroSecreto = Math.floor(Math.random() * 100)+1;
let intentos = 0;
let adivinado = false;

document.getElementById("txtNumIngresar").addEventListener("keypress", function(event){
    if(event.key == "Enter"){
        compruebaDatos();
    }
})

function compruebaDatos(){
    let continuar = true;
    let numIngresado;
    let sePreguntoContinuar = false;

    do{
        numIngresado = parseInt( document.getElementById("txtNumIngresar").value );
        if(isNaN(numIngresado) || numIngresado < 1 || numIngresado > 100){
            setMessage("¡Por Favor introduce un número válido, entre 0 y 100!", "😀");
            return;
        }
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
        return;
    }while(!adivinado && continuar);
}

function setMessage(msg, emoji){
    document.getElementById("message").innerHTML = `<span style="margin-right: 10px;">${emoji}</span> ${msg}`;
}

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
        
        document.getElementById("listaDeIntentos").insertAdjacentHTML("afterbegin", cuadroEspacio);
    }else{
        document.getElementById("intentosRider").textContent = mostrarEmojis;
    }
}