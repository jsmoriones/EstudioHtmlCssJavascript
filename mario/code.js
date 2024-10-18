const cielo = document.getElementById("cielo")
const mario = document.createElement("DIV")
mario.classList.add("mario")
cielo.appendChild(mario)


let x = 0
let y = 0
const rango = 10
const ancho = document.getElementById("cielo").scrollWidth
const alto = document.getElementById("cielo").scrollHeight

document.addEventListener('DOMContentLoaded', function(){
    iniciarJuego();
});

function iniciarJuego(){
    const numNubes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

    for(let i = 0; i < numNubes.length; i++){
        const nube = document.createElement("div")
        nube.classList.add("nube")
        nube.style.top = `${Math.floor(Math.random() * 400)}px`
        nube.style.left = `${Math.floor(Math.random() * 4900)}px`

        cielo.appendChild(nube)
    }

    const tortuga = document.createElement("div")
    tortuga.classList.add("tortuga")
    tortuga.style.left = `${Math.floor(Math.random() * 5000)}px`
    cielo.appendChild(tortuga)
}
let xChangeScroll = 0
function mueveAmario(direccion){
    mario.style.animationName = ""
    let tortuga = document.querySelector(".tortuga")
    let barra = document.querySelector("#suelo");
    switch(direccion){
        case 'ArrowUp': {
            mario.style.backgroundImage = "url(mariojump.png)"
            mario.style.animationName = "marioUp"
            mario.style.transform = ""
            mario.style.left = rango * 5;

            if(suelo.getBoundingClientRect().top == mario.getBoundingClientRect().bottom){
                console.log("Mario arriba")
            }

            setTimeout(function(){
                mario.style.animationName = "marioDown"
            }, 300)
            break;
        }
        case "ArrowRight": {
            mario.style.backgroundImage = "url(mariomovimiento.gif)"
            mario.style.transform = "scaleX(1)"
            if(x >= (ancho - 60)){
                mario.style.left = "0px"
            }else{
                x = x + rango;
            }

            if(parseInt(mario.getBoundingClientRect().right) == 1800){
                xChangeScroll = xChangeScroll + 1700
                document.querySelector(".container").scroll(xChangeScroll, 0)
            }

            //console.log("Mario: ", mario.getBoundingClientRect().x, "Tortuga: ", tortuga.getBoundingClientRect().left)
            //console.log( tortuga.getBoundingClientRect().x == (Math.round(mario.getBoundingClientRect().x - tortuga.getBoundingClientRect().width)) )
            //console.log(mario.getBoundingClientRect().x);
            //console.log( Math.round(mario.getBoundingClientRect().x - tortuga.getBoundingClientRect().width) );

            break;
        }
        case "ArrowLeft": {
            mario.style.backgroundImage = "url(mariomovimiento.gif)"
            mario.style.transform = "scaleX(-1)"
            if(x <= 0){
                mario.style.left = "0px"
            }else{
                x = x - rango;
            }

            if(parseInt(mario.getBoundingClientRect().right) <= 170){
                xChangeScroll = xChangeScroll - 850
                document.querySelector(".container").scroll(xChangeScroll, 0)
            }
            break;
        }
    }

    //Aquí verifico cuando mario toca tortuga
    if(mario.getBoundingClientRect().right >= tortuga.getBoundingClientRect().left && mario.getBoundingClientRect().left <= tortuga.getBoundingClientRect().left){
        tortuga.classList.add("chaoTortuga")
    }

    mario.style.left = `${x}px`

    document.querySelector(".container").scroll(xChangeScroll, 0)
}


document.addEventListener("keydown", function(event){
    mueveAmario(event.key)
})

document.addEventListener("keyup", function(event){
    mario.style.backgroundImage = "url(mario.png)"
    mario.style.transform = "scaleX(1)"
})
