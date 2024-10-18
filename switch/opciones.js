const ball = document.getElementById("bola");
let x = 0;
let y = 0;
const rango = 10;
let valorBallTop;
let valorBallLeft;

document.addEventListener('DOMContentLoaded', function(){
    mostrarPiezasAComer();
});

function mostrarPiezasAComer(){
    //Generando el numero de puntos a comer
    let piezas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    //Estableciendo el ancho y alto de la pantalla por defecto
    const alto = document.body.scrollHeight;
    const ancho = document.body.scrollWidth;
    
    let i = 0;
    let temp;
    while(i < piezas.length){//document.getElementsByClassName("pieza1")[0].classList[1]
        //Creo el elemento
        const pieza = document.createElement("SPAN");
        //Agrego una clase que tiene estilos y una clase distinta a cada span
        pieza.classList.add("pieza", `pieza${i}`);
        //Agrego el elemento a el documento
        document.body.append(pieza);
        
        //Declaracion de la temporal

        temp = piezas[i]-1;
        //Agrego la posicion aleatoria a cada pieza
        const posicionAletoriaAncho = Math.floor(Math.random()*ancho);
        const posicionAletoriaAlto = Math.floor(Math.random()*alto);
        document.getElementsByClassName(`pieza${i}`)[0].style.top = `${posicionAletoriaAlto}px`;
        document.getElementsByClassName(`pieza${i}`)[0].style.left = `${posicionAletoriaAncho}px`;

        //console.log(piezas[i]);
        i++;

        //Evaluando con if cada pieza, para llegar a diferenciar cada pieza y dar una posicion distinta a cada pieza
        /*if( document.getElementsByClassName(`pieza${i}`)[0].classList[1] != temp ){
        }else console.log("No es distinto");*/
    }
}
const comePieza = () => {
    //console.log(Math.floor(ball.getBoundingClientRect().top));
    valorBallTop = Math.floor(ball.getBoundingClientRect().top);
    valorBallLeft = Math.floor(ball.getBoundingClientRect().left);
    
    if(document.getElementsByClassName("pieza0")[0].getBoundingClientRect().top === valorBallTop && document.getElementsByClassName("pieza0")[0].getBoundingClientRect().left === valorBallLeft){
        document.getElementsByClassName("pieza0")[0].style.display = "none"
    }
}
const mueveme = (direccion) => {
    switch(direccion){
        case 'ArrowUp': {
            if(y > 0){
                y = y-rango;
            }else{
                ball.style.top = "0px";
            }
            document.getElementById("audio").play();
            break;
        }
        case 'ArrowDown': {
            if(y >= (document.body.scrollHeight - 110)){
                ball.style.top = "0px";
            }else{
                y = y+rango;
            }
            document.getElementById("audio").play();
            break;
        }
        case 'ArrowLeft': {
            //console.log(x)
            if(x <= 0){
                ball.style.left = "0px";
            }else{
                x = x - rango;
            }
            document.getElementById("audio").play();
            break;
        }
        case 'ArrowRight': {
            //document.body.scrollWidth
            //console.log(x)
            if(x >= (document.body.scrollWidth - 100)){
                ball.style.left = "0px";
            }else{
                x = x + rango;
            }
            //x = x + rango;
            document.getElementById("audio").play();
            break;
        }
    }
    ball.style.top = `${y}px`;
    ball.style.left = `${x}px`;

    comePieza();
};
document.addEventListener("keydown", (event) => {
    mueveme(event.key);
});


function mostrarContenido(opcion){
    const contenido = document.getElementById("contenido");
    switch(opcion){
        case 'Inicio':
            contenido.innerHTML = '<h1>Te encuentras en la opción de Inicio</h1>';
            break;
        case 'Bola':
            contenido.innerHTML = '<h1>Te encuentras en la opción de Bola</h1>';
            break;
        case 'Ejemplo':
            contenido.innerHTML = '<h1>Te encuentras en la opción de Ejemplo</h1>';
            break;
        case 'Salir':
            contenido.innerHTML = '<h1>Has salido de el menú</h1>';
            break;
        case 'ParImpar':
            let i = 0;
            let mensaje = "";

            contenido.innerHTML = "";
            while(i <= 10){
                if(i % 2 == 0){
                    if(i == 0){
                        mensaje = `El número <b>${i}</b> No es PAR ni IMPAR <br />`;
                    }else{
                        mensaje = `<b>Con While</b> El número ${i} es PAR <br />`;
                    }
                }else{
                    mensaje = `<b>Con While</b> El número ${i} es IMPAR <br />`;
                }
                contenido.innerHTML += mensaje;
                i++;
            }
            break;
        default:
            contenido.innerHTML = '<h1>Opción no Válida</h1>';
    }
}