let contador = 0;
let numEstudiantes = prompt("¿Cuantos estudiantes serán evaluados?");

function calcular(){
    //Declarando variables para tener los datos del estudiante
    let nombres = document.getElementById("nombres").value;
    let apellidos = document.getElementById("apellidos").value;
    let curso = document.getElementById("curso").value;
    //Declarando variables para tener los valores de las notas
    let nota1 = document.getElementById("nota1").value;
    let nota2 = document.getElementById("nota2").value;
    let nota3 = document.getElementById("nota3").value;

    //alert(numEstudiantes);

    if(nota1.length < 1 || nota2.length < 1 || nota3.length < 1){
        alert("Debes ingresar un valor")
    }else if(nota1 <= 5 && nota2 <= 5 && nota3 <= 5 && nota1 >= 0 && nota2 >= 0 && nota3 >= 0){
        
        let notaFinal = ((nota1 * 0.30) + (nota2 * 0.30) + (nota3 * 0.40)).toFixed(1);
        let mensajeNota;

        if(notaFinal >= 3 && notaFinal <= 5){
            mensajeNota = "Aprobaste!";
        }else if(notaFinal <= 2.9 && notaFinal >= 0){
            mensajeNota = "No Aprobaste!";
        }
        
        contador++;
        document.getElementById("resultado").innerHTML += `
            <div class="resultadoNota">
                <p>
                    <b>Nombre(s): </b> <span class="resultado-nombres">${nombres}</span>
                </p>
                <p>
                    <b>Apellido(s): </b> <span class="resultado-apellidos">${apellidos}</span>
                </p>
                <p>
                    <b>Curso: </b> <span class="resultado-curso">${curso}</span>
                </p>
                <p>
                    <b>Resultado Nota: </b> <span class="resultado-nota">${notaFinal}</span>
                </p>
                <p style="color:red;">${mensajeNota}</p>
            </div>
        `;
        //alert("numEstudiantes: "+numEstudiantes + " Contador: "+contador);
        
        if(numEstudiantes == contador){
            document.getElementById("botonEnviar").style.display = "none";
        }else{
            document.getElementById("numEstudianteSpan").textContent = contador+1;
        
        }
    }else{
        alert("Debes ingresar un valor adecuado, los valores van de 0 - 5");
    }
}

















/*let notaFinal = ((nota1 * 0.30) + (nota2 * 0.30) + (nota3 * 0.40)).toFixed(1);
let mensajeNota;

if(notaFinal >= 3 && notaFinal <= 5){
    mensajeNota = "Aprobaste!";
}else if(notaFinal <= 2.9 && notaFinal >= 0){
    mensajeNota = "No Aprobaste!";
}

document.getElementById("resultado").innerHTML += `
    <div class="resultadoNota">
        <p>
            <b>Nombre(s): </b> <span class="resultado-nombres">${nombres}</span>
        </p>
        <p>
            <b>Apellido(s): </b> <span class="resultado-apellidos">${apellidos}</span>
        </p>
        <p>
            <b>Curso: </b> <span class="resultado-curso">${curso}</span>
        </p>
        <p>
            <b>Resultado Nota: </b> <span class="resultado-nota">${notaFinal}</span>
        </p>
        <p style="color:red;">${mensajeNota}</p>
    </div>
`;*/