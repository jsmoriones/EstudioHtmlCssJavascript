/*function jugar(eleccionUsuario) {
    const opciones = ['piedra', 'papel', 'tijera'];
    const eleccionComputador = opciones[Math.floor(Math.random()*opciones.length)];

    let mensajeResultado = "";
    if(eleccionUsuario === eleccionComputador){
        mensajeResultado = `Estan empatados (Usuario saco: ${eleccionUsuario}, Computadora saco: ${eleccionComputador}) 👋👋👋`;
    }else if(
        (eleccionUsuario == "piedra" && eleccionComputador == "tijera") ||
        (eleccionUsuario == "tijera" && eleccionComputador == "papel") ||
        (eleccionUsuario == "papel" && eleccionComputador == "piedra")
    ){
        mensajeResultado = `Gana el Usuario (Usuario saco: ${eleccionUsuario}, Computadora saco: ${eleccionComputador}) 😀😀😀😀`;
    }else {
        mensajeResultado = `Perdiste gano la Computadora (Computadora saco: ${eleccionComputador}, Tu sacaste: ${eleccionUsuario}) 😢😢😢😢`;
    }
    document.getElementById("resultado").textContent = mensajeResultado;

}*/



let localJugador;
let ronda = 0;
let jug1 = 0;
let jug2 = 0;
let empatados = 0;
let valueRondaJug1 = 0;
let valueRondaJug2 = 0;
function jugar(eleccion) {
    localJugador = eleccion;

    /*if( (eleccion == localJugador && eleccion == "papel2") || (eleccion == "piedra" && eleccion == "piedra2") || (eleccion == "tijera" && eleccion == "tijera2") ){
        alert("Empatados")
    }*/
    
}
// document.getElemenById("jug1")
function jugar2(eleccion){
    if(localJugador == undefined){
        alert("Empieza jugador uno")
    }else{
        if( eleccion == localJugador ){
            empatados++;
            ronda++;
            alert("Empatados");
        }else if( //pierde jugador uno, gana jugador dos | localJugador es jugador 1
            (localJugador == "piedra" && eleccion == "papel") ||
            (localJugador == "papel" && eleccion == "tijera") ||
            (localJugador == "tijera" && eleccion == "piedra")
        ){
            alert("Gana jugador Dos")
            jug2++;
            ronda++;
        }else{
            alert("Gana jugador uno")
            jug1++;
            ronda++;
        }

        if(ronda == 3){
            alert("Termino la ronda")
            alert("Jugador 1: "+jug1);
            alert("Jugador 2: "+jug2);
            if(jug1 > jug2){
                valueRondaJug1++;
                document.getElementById("jug1").textContent = valueRondaJug1;
            }else{
                valueRondaJug2++;
                document.getElementById("jug2").textContent = valueRondaJug2;
            }
            jug1 = 0;
            jug2 = 0;
            ronda = 0;
            localJugador = undefined;
        }else if(empatados == 3){
            empatados = 0;
            ronda = 0;
            localJugador = undefined;
            alert("Termino la Ronda estan Empatados")
        }
    }
}