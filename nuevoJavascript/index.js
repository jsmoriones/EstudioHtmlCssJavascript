const boton = document.getElementById("boton"),
    botonAgregar = document.getElementById("botonAgregar"),
    botonEliminar = document.getElementById("botonEliminar"),
    texto = document.getElementById("texto"),
    resultadoBucles = document.getElementById("resultadoBucles"),
    botonForEach = document.getElementById("botonForEach"),
    botonForIn = document.getElementById("botonForIn"),
    botonForOf = document.getElementById("botonForOf");
let resultadoTotal;

const aprendiz = {
    nombre: "Pepito Perez",
    direccion: "Cll 28 # 56-12",
    telefono: 5612865,
    detalles: {
        ficha: 2821684,
        programa: "ADSO"
    }
};

const aprendicez = [
    {nombre: "Aprendiz 1", direccion: "Direccion 1", telefono: 5646, detalles: {ficha: 454, programa: "programa 1"} },
    {nombre: "Aprendiz 2", direccion: "Direccion 2", telefono: 5647, detalles: {ficha: 455, programa: "programa 2"} },
    {nombre: "Aprendiz 3", direccion: "Direccion 3", telefono: 5648, detalles: {ficha: 456, programa: "programa 3"} },
    {nombre: "Aprendiz 4", direccion: "Direccion 4", telefono: 5649, detalles: {ficha: 457, programa: "programa 4"} }
]

function mostrarDatos(){

    const { nombre, direccion, telefono, detalles: {ficha, programa} } = aprendiz;
    
    resultadoTotal = `El Nombre del Aprendiz es: ${nombre} <br> la Dirección del Aprendiz es: ${direccion} <br> El Número Telefónico del Aprendiz es: ${telefono} <br> la Ficha del Aprendiz es: ${ficha} <br> El Programa que el Aprendiz esta estudiando es: ${programa} <br>`;
    
    texto.innerHTML = resultadoTotal
}

function agregarDatos(){
    aprendiz.imagen = "aprendiz.jpg";
    resultadoTotal += `La Imagen es: <img src= "${aprendiz.imagen}">`;

    texto.innerHTML = resultadoTotal
}

function eliminarDatos(){
    //const { nombre, direccion, telefono, ficha, programa } = aprendiz;

    delete aprendiz.nombre;
    mostrarDatos()
}

function botonForEachFn(){
    resultadoBucles.innerHTML = "<h3>Ciclo forEach</h3>";
    aprendicez.forEach(aprendiz => {
        resultadoBucles.innerHTML += `
            Nombre: ${aprendiz.nombre} <br>
            Dirección: ${aprendiz.direccion} <br>
            telefono: ${aprendiz.telefono} <br>
            Detalles: <br>
            \&nbsp;\&nbsp;\&nbsp;\&nbsp; Ficha: ${aprendiz.detalles.ficha} <br>
            \&nbsp;\&nbsp;\&nbsp;\&nbsp; Programa: ${aprendiz.detalles.programa} <br><br><br>
        `;
    });
}

function botonForInFn(){
    resultadoBucles.innerHTML = "<h3>Ciclo forIn</h3>";
    for(let ap in aprendiz){
        resultadoBucles.innerHTML += `
            Valor del objeto: ${ap} <br>
        `;
    }
}

function botonForOfFn(){
    resultadoBucles.innerHTML = "<h3>Ciclo forOF</h3>";
    for(let aprendiz of aprendicez){
        resultadoBucles.innerHTML += `
            Nombre: ${aprendiz.nombre} <br>
            Dirección: ${aprendiz.direccion} <br>
            telefono: ${aprendiz.telefono} <br>
            Detalles: <br>
            \&nbsp;\&nbsp;\&nbsp;\&nbsp; Ficha: ${aprendiz.detalles.ficha} <br>
            \&nbsp;\&nbsp;\&nbsp;\&nbsp; Programa: ${aprendiz.detalles.programa} <br><br><br>
        `;
    }
}


boton.addEventListener("click", mostrarDatos );
botonAgregar.addEventListener("click", agregarDatos);
botonEliminar.addEventListener("click", eliminarDatos);
botonForEach.addEventListener("click", botonForEachFn);
botonForIn.addEventListener("click", botonForInFn);
botonForOf.addEventListener("click", botonForOfFn);