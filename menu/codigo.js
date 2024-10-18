function sumar(evento){
    evento.preventDefault();
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    let resultado = Number(num1) + Number(num2);

    document.getElementById("resultado-calculado").innerText = resultado;
}
function restar(evento){
    evento.preventDefault();
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    let resultado = num1 - num2;

    document.getElementById("resultado-calculado").innerText = resultado;
}
function multiplicar(evento){
    evento.preventDefault();
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    let resultado = num1 * num2;

    document.getElementById("resultado-calculado").innerText = resultado;
}
function dividir(evento){
    evento.preventDefault();
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    let resultado = num1 / num2;

    document.getElementById("resultado-calculado").innerText = resultado;
}


//EJERCICIO 2
function convertirCelsius(){
    let celsius = document.getElementById("grados").value;
    let fahrenheit = 9/5 * celsius + 32;

    document.getElementById("resultado-grados").innerText = fahrenheit;
}


//EJERCICIO 3
function calcularHipotenusa(){
    let cat1 = document.getElementById("cat1").value;
    let cat2 = document.getElementById("cat2").value;

    let cateto = Math.sqrt((cat1 * cat1) + (cat2 * cat2));

    document.getElementById("resultado-cateto").innerText = cateto.toFixed(2);
}

//EJERCICIO 4
function calcularCircunferencia(){
    let diametro = document.getElementById("diametro").value;

    let longitud = 2 * 3.1416 * diametro;

    document.getElementById("resultado-longitud").innerText = longitud.toFixed(2);
}

//EJERCICIO 5
function calcularAreaTrapecio() {
    let basemn = document.getElementById("basemn").value;
    let basemy = document.getElementById("basemy").value;
    let alturaTra = document.getElementById("alturaTra").value;
    console.log(basemn,
        basemy,
        alturaTra)
    let areaTrapecioResultado = ( ( Number(basemy) + Number(basemn) ) / 2 ) * Number(alturaTra);

    document.getElementById("resultado-trapecio").innerHTML = `${areaTrapecioResultado} cm<sup>2</sup>`;
}

// EJERCICIO 6
function calcularMediaAritmetica(){
    let menum1 = parseInt(document.getElementById("menum1").value);
    let menum2 = parseInt(document.getElementById("menum2").value);
    let menum3 = parseInt(document.getElementById("menum3").value);
    
    let resultadoMediaAritmetica = (menum1 + menum2 + menum3) / 3;
    
    document.getElementById("resultado-mediaAritmetica").innerText = resultadoMediaAritmetica.toFixed(3);
}

// EJERCICIO 7
function calcularTotalPorcentaje() {
    let totalCompra = parseInt(document.getElementById("totalCompra").value);

    let resultadoDescuento = totalCompra - (totalCompra * 0.15);

    document.getElementById("resultado-totalPorcentaje").innerText = resultadoDescuento;
}

// EJERCICIO 8
function calcularSalarioXHora() {
    let horasTrabajadas = parseInt(document.getElementById("horasTrabajadas").value);
    let valorXHora = parseInt(document.getElementById("valorXHora").value);
    
    let resultadoHorasTrabajadas = horasTrabajadas * valorXHora;
    
    document.getElementById("resultado-horasTrabajadas").innerText = resultadoHorasTrabajadas;
}

// EJERCICIO 9
function calcularSalarioDescuento() {
    let salarioAnterior = parseInt(document.getElementById("salarioAnterior").value);
    let salarioActual = parseInt(document.getElementById("salarioActual").value);
    
    let resultadoSalarioDescuento = (salarioAnterior * 0.25) + salarioActual;
    
    document.getElementById("resultado-salarioConDescuento").innerText = resultadoSalarioDescuento;
}

// EJERCICIO 10
function calcularCalificacionFinal() {
    let cal1 = parseFloat(document.getElementById("cal1").value);
    let cal2 = parseFloat(document.getElementById("cal2").value);
    let cal3 = parseFloat(document.getElementById("cal3").value);
    let calExamenFinal = parseFloat(document.getElementById("calExamenFinal").value);
    let calTrabajoFinal = parseFloat(document.getElementById("calTrabajoFinal").value);
    
    /*let calificacion1 = ((cal1 + cal2 + cal3) / 3) * 0.55;
    let calificacion2 = calExamenFinal * 0.30;
    let calificacion3 = calTrabajoFinal * 0.15;*/
    //let resultadoCalificacionTotal = calificacion1 + calificacion2 +calificacion3;
    
    let calificacion = ( ((cal1 + cal2 + cal3) / 3) * 0.55 ) + (calExamenFinal * 0.30) + (calTrabajoFinal * 0.15);
    

    document.getElementById("resultado-calificacionTotalFinal").innerText = calificacion;
}

// EJERCICIO 11
function calcularTotalSegundos() {
    let horasSegundos = parseInt(document.getElementById("horasSegundos").value);
    let minutosSegundos = parseInt(document.getElementById("minutosSegundos").value);
    let segundosSegundos = parseInt(document.getElementById("segundosSegundos").value);
    
    let resultadoSegundos = (horasSegundos * 3600) + (minutosSegundos * 60) + segundosSegundos;
    
    document.getElementById("resultado-totalDeSegundos").innerText = resultadoSegundos;
}

// EJERCICIO 12
function obtenerMediaGeometrica() {
    let geonum1 = parseFloat(document.getElementById("geonum1").value);
    let geonum2 = parseFloat(document.getElementById("geonum2").value);
    let geonum3 = parseFloat(document.getElementById("geonum3").value);
    
    let resultadoMediaGeometrica = Math.cbrt((geonum1 * geonum2 * geonum3));
    
    document.getElementById("resultado-mediaGoemetrica").innerText = resultadoMediaGeometrica; 
}

// EJERCICIO 13
function calcularPorcetajePersonas() {
    let numHom = parseFloat(document.getElementById("numHom").value);
    let numMuj = parseFloat(document.getElementById("numMuj").value);
    
    let resultadoPorcentajeHombres = ( numHom / (numHom + numMuj) ) * 100;
    let resultadoPorcentajeMujeres = ( numMuj / (numHom + numMuj) ) * 100;
    
    document.getElementById("resultado-porcentajePersonas").innerText = `Porcentaje de Hombres: ${Math.round(resultadoPorcentajeHombres)}%, Porcentaje de Mujeres: ${Math.round(resultadoPorcentajeMujeres)}%`;
}

// EJERCICIO 14
function calcularValoresCubo() {
    let aristaCubo = parseInt(document.getElementById("aristaCubo").value);

    let area = 6 * (aristaCubo * aristaCubo);
    let volumen = aristaCubo * aristaCubo * aristaCubo;

    document.getElementById("resultado-areaCubo").innerHTML = `El area del Cubo es: ${area} cm<sup>2</sup>. El volumen del cubo es: ${volumen} cm<sup>3</sup>`;
}

// EJERCICIO 15
function calcularPorcentajeInversion() {
    let valorPersona1 = parseFloat(document.getElementById("valorPersona1").value);
    let valorPersona2 = parseFloat(document.getElementById("valorPersona2").value);
    let valorPersona3 = parseFloat(document.getElementById("valorPersona3").value);
    
    let inversion1 = ( valorPersona1 / (valorPersona1 + valorPersona2 + valorPersona3) ) * 100;
    let inversion2 = ( valorPersona2 / (valorPersona1 + valorPersona2 + valorPersona3) ) * 100;
    let inversion3 = ( valorPersona3 / (valorPersona1 + valorPersona2 + valorPersona3) ) * 100;    
    
    document.getElementById("resultado-inversionTotal").innerHTML = `
    <b>Inversionista #1</b>, porcentaje: ${Math.round(inversion1)}<br>
    <b>Inversionista #2</b>, porcentaje: ${Math.round(inversion2)}<br>
    <b>Inversionista #3</b>, porcentaje: ${Math.round(inversion3)}
    `;
}

// EJERCICIO 16
function obtenerVolumenAreaEsfera() {
    let radioEsfera = parseFloat(document.getElementById("radioEsfera").value);
    
    let area = 4 * Math.PI * (radioEsfera * radioEsfera);
    let volumen = ( 4 * Math.PI * (radioEsfera * radioEsfera * radioEsfera) ) / 3;
    
    document.getElementById("resultado-volumenAreaEsfera").innerHTML = `${area}  ${volumen}`;
}

///////////////////////////////////////////////////////////////////////
/*
ESTOS EJERCICIOS SON DE EL APARTADO DE CONDICIONALES QUE SE ENCUENTRA EN EL PDF DE EJERCICIOS
*/
// EJERCICIO 1
function calcularNotaAlumno(){
    let calAlum1 = parseFloat(document.getElementById("calAlum1").value);
    let calAlum2 = parseFloat(document.getElementById("calAlum2").value);
    let calAlum3 = parseFloat(document.getElementById("calAlum3").value);

    let resultadoNota = (calAlum1 + calAlum2 + calAlum3) / 3;
    let respuestaNota;

    if(resultadoNota >= 10.5 && resultadoNota <= 20){
        respuestaNota = "El alumno Aprobó la Materia";
    }else if(resultadoNota < 10.5 && resultadoNota >= 0){
        respuestaNota = "El alumno Reprobó la Materia";
    }else{
        respuestaNota = "Revisa tus notas algo no nos cuadra!";
    }

    document.getElementById("resultado-calificacionAlumno").innerHTML = respuestaNota;
}

// EJERCICIO 2
function sumatoriaDeNumeros() {
    let reNum1 = parseInt(document.getElementById("reNum1").value);
    let reNum2 = parseInt(document.getElementById("reNum2").value);
    
    let sumatoria = reNum1 + reNum2;
    let resultadoFinalSumatoria;
    if(sumatoria > 10){
        resultadoFinalSumatoria = "El resultado de la sumatoria es: "+sumatoria;
    }else{
        resultadoFinalSumatoria = "El resultado es menor";
    }
    
    document.getElementById("resultado-sumatoriaDosNumeros").innerHTML = resultadoFinalSumatoria;
}

// EJERCICIO 3
function parImparCero() {
    let parImaparNum = parseInt(document.getElementById("parImaparNum").value);
    let resultadoParImpar;
    
    if(parImaparNum == 0){
        resultadoParImpar = `El número es CERO`;
    }else if(parImaparNum % 2 == 0){
        resultadoParImpar = `El número: ${parImaparNum} es PAR`;
    }else{
        resultadoParImpar = `El número: ${parImaparNum} es IMPAR`;
    }
    
    document.getElementById("resultado-parImparCero").innerHTML = resultadoParImpar;
}

// EJERCICIO 4
function verificarNumerosMayores() {
    let numMayor1 = parseInt(document.getElementById("numMayor1").value);
    let numMayor2 = parseInt(document.getElementById("numMayor2").value);
    let numMayor3 = parseInt(document.getElementById("numMayor3").value);
    let resultadoNumeroMayor;
    
    if(numMayor1 > numMayor2 && numMayor1 > numMayor3){
        resultadoNumeroMayor = `El número Primero (${numMayor1}) es el Mayor`;
    }else if(numMayor2 > numMayor1 && numMayor2 > numMayor3){
        resultadoNumeroMayor = `El número Segundo (${numMayor2}) es el Mayor`;
    }else if(numMayor1 == numMayor2 && numMayor1 == numMayor3){
        resultadoNumeroMayor = `No hay número Mayor los campos estan llenos con en el mismo número: ${numMayor1}`;
    }else{
        resultadoNumeroMayor = `El número Tercero (${numMayor3}) es el Mayor`;
    }
    
    document.getElementById("resultado-numeroMayor").innerHTML = resultadoNumeroMayor;
}

// EJERCICIO 5
function verificarNumerosPositivos(){
    let numPosivo1 = parseInt(document.getElementById("numPosivo1").value);
    let numPosivo2 = parseInt(document.getElementById("numPosivo2").value);
    let cero = 0;
    let resultadoCero;
    
    if(numPosivo1 > cero && numPosivo2 > cero){
        resultadoCero = `Los positivos son: ${numPosivo1} ${numPosivo2}`;
    }else{
        resultadoCero = "";
        if(numPosivo1 > cero){
            resultadoCero = `Los positivos son: ${numPosivo1}`;
        }
        if(numPosivo2 > cero){
            resultadoCero = `Los positivos son: ${numPosivo2}`;
        }
    }
    
    document.getElementById("resultado-numeroPositivo").innerHTML = resultadoCero;
}

// EJERCICIO 6
function calcularSalarioHorasTrabajadas(){
    let horasObrero = parseInt(document.getElementById("horasObrero").value);
    let salarioXHora = horasObrero * 16;
    let resultado;
    if(horasObrero <= 40){
        resultado = `Tu salario por ${horasObrero} hora(s) trabajadas es de: ${salarioXHora}`;
    }else{
        let horasExtras = horasObrero - 40;
        salarioXHora = (horasObrero - horasExtras) * 16;
        let salarioTotal = (horasExtras * 20) + salarioXHora;
        resultado = `Tu salario por ${horasObrero} hora(s) trabajadas es de: ${salarioXHora} \r las horas extras son: ${horasExtras} y tu salario total es de: ${salarioTotal}`;
    }
    //alert("Horas: " + horasObrero)
    document.getElementById("resultado-horasTrabajadasObrero").innerHTML = resultado;
}

// EJERCICIO 7
function imprimirSigno(){
    let nombreSigno = document.getElementById("nombreSigno").value;
    let signoSigno = document.getElementById("signoSigno").value;
    let resultado;

    if(signoSigno == "Aries" || signoSigno == "aries"){
        resultado = `Tu nombre es: ${nombreSigno}`;
    }else{
        resultado = "";
    }

    document.getElementById("resultado-signoPersona").innerHTML = resultado;
}

// EJERCICIO 8
function imprimirNombrePersona(){
    let nombrePersona = document.getElementById("nombrePersona").value;
    let edadPersona = document.getElementById("edadPersona").value;
    let sexoPersona = document.querySelector('input[name="sexoPersona"]:checked').value;
    let resultado = "";
    
    if(edadPersona >= 18 && sexoPersona === "Masculino"){
        resultado = `Tu nombre es: ${nombrePersona}`;
    }

    document.getElementById("resultado-sexoNombrePersona").innerHTML = resultado;
}

// EJERCICIO 9
function calcularTotalCamisas(){
    let resultado = "";
    let numCamisas = parseInt(document.getElementById("numCamisas").value);
    let valCamisa = parseFloat(document.getElementById("valCamisa").value);

    if(numCamisas >= 3){
        resultado = "El total a pagar con el 20% de descuento es de: " + ((valCamisa * numCamisas) - ((valCamisa * numCamisas) * 0.20));
    }else{
        resultado = "El total a pagar con el 10% de descuento es de: " + ((valCamisa * numCamisas) - ((valCamisa * numCamisas) * 0.10));
    }

    document.getElementById("resultado-compraCamisas").innerHTML = resultado;
}

// EJERCICIO 10
function calcularCompraDescuento() {
    let numeroAlAzarCliente = Math.floor(Math.random() * 100) + 1;
    let totalCompraSupermercado = parseInt(document.getElementById("totalCompraSupermercado").value);
    let resultado = "";

    alert("Numero al Azar " + numeroAlAzarCliente);

    if(numeroAlAzarCliente >= 74 && numeroAlAzarCliente <= 100){
        //20
        resultado = "El valor total a pagar con el 20% de descuento es de: " + (totalCompraSupermercado - (totalCompraSupermercado * 0.20));
    }else{
        //15
        resultado = "El valor total a pagar con el 15% de descuento es de: " + (totalCompraSupermercado - (totalCompraSupermercado * 0.15));
    }

    document.getElementById("resultado-descuentoTotalPrecio").innerHTML = resultado;
}

// EJERCICIO 11
function obtenerTotalLlantera(){
    let valLlantera = parseInt(document.getElementById("valLlantera").value);
    let resultado = "";

    if(valLlantera >= 5){
        //700
        resultado = `El total a pagar por la compra de ${valLlantera} número de Llantas es de: $` + (valLlantera * 700) + " el precio de la unidad es de: 700";
    }else{
        //800
        resultado = `El total a pagar por la compra de ${valLlantera} número de Llantas es de: $` + (valLlantera * 800) + " el precio de la unidad es de: 800";
    }

    document.getElementById("resultado-totalAPagarLlantera").innerHTML = resultado;
}

// EJERCICIO 12
function obtenerTotalDescuentoAPagar() {
    let totalAPagarAlmacen = parseInt(document.getElementById("totalAPagarAlmacen").value);
    let resultado = "";

    if(totalAPagarAlmacen > 1000){
        resultado = "El total a Pagar con el 20% de descuento es de: " + (totalAPagarAlmacen - (totalAPagarAlmacen * 0.20));
    }else{
        resultado = "El total a Pagar es de: " + totalAPagarAlmacen;
    }

    document.getElementById("resultado-compraAlmacen").innerHTML = resultado;
}

// EJERCICIO 13
function calcularEcuacionSegundoGrado() {
    let varA = parseInt(document.getElementById("varA").value);
    let varB = parseInt(document.getElementById("varB").value);
    let varC = parseInt(document.getElementById("varC").value);
    let primeraParte = 4 * (varA * varC)
    //let segundaParte = varB < 0 ? Math.pow(varB, 2) * -1 : Math.pow(varB, 2)
    let segundaParte = Math.pow(varB, 2)
    console.log(segundaParte);
    let resultadoPartes = segundaParte - primeraParte //-47
    let raizPartes = Math.sqrt(resultadoPartes)
    let x1 = -varB - raizPartes 
    let x2 = -varB + raizPartes 
    let divisionDeX1 = x1 / (2*varA);
    let divisionDeX2 = x2 / (2*varA);

    document.getElementById("resultado-ecuacionSegundoGrado").innerHTML = isNaN(divisionDeX1) ? "Ráices Imaginarias" : `
        Resultado X1: ${divisionDeX1} <br />
        Resultado X2: ${divisionDeX2}
    `;
}

// EJERCICIO 14
function numerosAscendientes() {
    let ascNum1 = parseInt( document.getElementById("ascNum1").value );
    let ascNum2 = parseInt( document.getElementById("ascNum2").value );
    let resultado = "";

    if(ascNum1 < ascNum2){
        resultado = ascNum1 + ", " + ascNum2;
    }else if(ascNum2 < ascNum1){
        resultado = ascNum2 + ", " + ascNum1;
    }

    document.getElementById("resultado-numerosAscendientes").innerHTML = resultado
}

// EJERCICIO 15
function ejecutarJuegoModena() {
    let azarMoneda = Math.floor( Math.random() * 2 ) + 1;
    let formMoneda = document.getElementById("formulario-lanzamientoMoneda");
    let resultado = "";
    if(document.getElementsByClassName('imagen-moneda').length > 0){
        document.getElementsByClassName('imagen-moneda')[0].remove()
    }
    formMoneda.insertAdjacentHTML('beforebegin', `<img src="moneda.gif" class="imagen-moneda" />`)

    if(azarMoneda == 1){
        resultado = "Sacaste Cara"
    }else{
        resultado = "Sacaste Sello"
    }

    document.getElementById("resultado-lanzamientoMoneda").innerHTML = resultado
}

// EJERCICIO 16
function calcularPrecioTotalMotos() {
    let marca1 = parseInt(document.getElementById("marca1").value);
    let marca2 = parseInt(document.getElementById("marca2").value);
    let marca3 = parseInt(document.getElementById("marca3").value);
    let marca4 = parseInt(document.getElementById("marca4").value);
    let resultado = "";
    let totalAPagar;
    if(!marca1){
        return false;
    }else{
        let valorMoto = marca1 * 1000;
        let descuentoTotal = valorMoto - (valorMoto * 0.05);
        totalAPagar = descuentoTotal
        resultado += `Las cantidad de Motos marca Honda que llevas es: ${marca1}, precio total es: ${valorMoto} con descuento es: <b>${descuentoTotal}</b> <br/>`;
    }

    if(!marca2){
        return false;
    }else{
        let valorMoto = marca2 * 1200;
        let descuentoTotal = valorMoto - (valorMoto * 0.08);
        totalAPagar = totalAPagar + descuentoTotal
        resultado += `Las cantidad de Motos marca Yamaha que llevas es: ${marca2}, precio total es: ${valorMoto} con descuento es: <b>${descuentoTotal}</b> <br/>`;
    }

    if(!marca3){
        return false;
    }else{
        let valorMoto = marca3 * 1400;
        let descuentoTotal = valorMoto - (valorMoto * 0.10);
        totalAPagar = totalAPagar + descuentoTotal
        resultado += `Las cantidad de Motos marca Suzuki que llevas es: ${marca3}, precio total es: ${valorMoto} con descuento es: <b>${descuentoTotal}</b> <br/>`;
    }

    if(!marca4){
        return false;
    }else{
        let valorMoto = marca4 * 800;
        let descuentoTotal = valorMoto - (valorMoto * 0.02);
        totalAPagar = totalAPagar + descuentoTotal
        resultado += `Las cantidad de Motos de otras marcas que llevas es: ${marca4}, precio total es: ${valorMoto} con descuento es: <b>${descuentoTotal}</b> <br/>`;
    }

    document.getElementById("resultado-motocicletas").innerHTML = resultado
    document.getElementById("resultado-motocicletas").innerHTML += `<mark>TOTAL A PAGAR ES DE: ${totalAPagar}</mark>`
}

// EJERCICIO 17
function juegoBolaParaPagar() {
    let azarBolita = Math.floor( Math.random() * 5 ) + 1;
    let totalValorAPagar = parseInt( document.getElementById("totalValorAPagar").value );
    let resultado = "";
/*
1 blanco: No paga
2 verde: 10%
3 amarilla: 25%
4 azul: 50%
5 roja: 100%
*/
    switch(azarBolita){
        case 1:
            resultado = "Sacaste color 'Blanco', No tienes descuento total a pagar: " + totalValorAPagar;
            console.log("blanco");
            break;
        case 2:
            resultado = "Sacaste color 'Verde', Tienes el descuento de 10%, total a pagar: " + (totalValorAPagar - (totalValorAPagar * 0.10));
            console.log("verde");
            break;
        case 3:
            resultado = "Sacaste color 'Amarilla', Tienes el descuento de 25%, total a pagar: " + (totalValorAPagar - (totalValorAPagar * 0.25));
            console.log("amarilla");
            break;
        case 4:
            resultado = "Sacaste color 'Azul', Tienes el descuento de 50%, total a pagar: " + (totalValorAPagar - (totalValorAPagar * 0.50));
            console.log("azul");
            break;
        case 5:
            resultado = "Sacaste color 'Roja', Tienes el descuento de 100%, total a pagar: " + (totalValorAPagar - (totalValorAPagar * 1));
            console.log("roja");
            break;
    }

    document.getElementById("resultado-bolitaJuego").innerHTML = resultado
}

// EJERCICIO 18
function verificarNumAscendientes() {
    let creNum1 = parseInt( document.getElementById("creNum1").value );
    let creNum2 = parseInt( document.getElementById("creNum2").value );
    let creNum3 = parseInt( document.getElementById("creNum3").value );
    let resultado = "";

    if(creNum1 < creNum2 && creNum1 < creNum3){
        //console.log("El num1 es menor")
        if(creNum2 > creNum1 && creNum2 < creNum3){
            //console.log("El num2 es mayor que el num1 y menor que el num3")
            if(creNum3 > creNum1 && creNum3 > creNum2){
                //console.log("El num3 es mayor")
                resultado = `Según los números dados hay una forma cresciente: ${creNum1}, ${creNum2}, ${creNum3}`
            }
        }
    }else{
        resultado = "No hay orden"
    }

    document.getElementById("resultado-tresNumerosCreciente").innerHTML = resultado
}

// EJERCICIO 19
function verificarSumaDTercerNumero() {
    let sumTNum1 = parseInt( document.getElementById("sumTNum1").value );
    let sumTNum2 = parseInt( document.getElementById("sumTNum2").value );
    let sumTNum3 = parseInt( document.getElementById("sumTNum3").value );
    let resultado = "";

    let sumaDosYUno = sumTNum1 + sumTNum2;
    if(sumaDosYUno == sumTNum3){
        resultado = `La suma de número 1 y número 2 es: ${sumaDosYUno} Y es IGUAL a el Número 3`;
    }else{
        resultado = "No es igual";
    }

    document.getElementById("resultado-sumaTresNumeros").innerHTML = resultado
}

// EJERCICIO 20
function verificarMultDTercerNumero() {
    let multTNum1 = parseInt( document.getElementById("multTNum1").value );
    let multTNum2 = parseInt( document.getElementById("multTNum2").value );
    let multTNum3 = parseInt( document.getElementById("multTNum3").value );
    let resultado = "";

    let multDosYUno = multTNum1 * multTNum2;
    if(multDosYUno == multTNum3){
        resultado = `La multiplicación de número 1 y número 2 es: ${multDosYUno} Y es IGUAL a el Número 3`;
    }else{
        resultado = "No es igual";
    }

    document.getElementById("resultado-multiTresNumeros").innerHTML = resultado
}

// EJERCICIO 21
function sumarHora(){
    let fecha = new Date();

    //Obteniendo hora por: hora, minuto,segundo
    let hora = fecha.getHours()
    let minuto = fecha.getMinutes()
    let segundo = fecha.getSeconds()
    
    let segundoMasUno = segundo + 1;
    let resultado = hora + ":" + minuto + ":" + segundoMasUno

    document.getElementById("resultado-horashms").innerHTML = `Serán las: ${resultado}`
}

// EJERCICIO 22
function verificarParOImpar(){
    let num1ParOImpar = parseInt( document.getElementById("num1ParOImpar").value );
    let num2ParOImpar = parseInt( document.getElementById("num2ParOImpar").value );
    let resultado1 = "", resultado2 = ""

    if(num1ParOImpar % 2 == 0){
        resultado1 = `El Resultado de el Número 1 (${num1ParOImpar}) es PAR`
    }else{
        resultado1 = `El Resultado de el Número 1 (${num1ParOImpar}) es IMPAR`
    }

    if(num2ParOImpar % 2 == 0){
        resultado2 = `El Resultado de el Número 2 (${num2ParOImpar}) es PAR`
    }else{
        resultado2 = `El Resultado de el Número 2 (${num2ParOImpar}) es IMPAR`
    }

    document.getElementById("resultado-dosNumerosImpares").innerHTML = `
        <p>${resultado1}</p>
        <p>${resultado2}</p>
    `
}

///////////////////////////////////////////////////////////////////////
/*
ESTOS EJERCICIOS SON DE EL APARTADO DE CICLOS QUE SE ENCUENTRA EN EL PDF DE EJERCICIOS
*/

// EJERCICIO 1
function sumarNNumeros() {
    let nPrimerosNumeros = parseInt(document.getElementById("nPrimerosNumeros").value)
    let resultado = 0;
    for(let i = 1; i <= nPrimerosNumeros; i++){
        resultado = i+resultado;
    }

    document.getElementById("resultado-primerosNumeros").innerHTML = `El resultado de la Suma es: ${resultado}`
}

// EJERCICIO 2
function sumMultASup() {
    let supADiezNum = parseInt(document.getElementById("supADiezNum").value)
    let resultado = 0, textRef = ""
    for(let i = 1; i <= supADiezNum; i++){
        if(supADiezNum > 10){
            textRef = "La multiplicación es: "
            resultado = i*(resultado == 0 ? 1:resultado)
        }else{
            textRef = "La suma es: "
            resultado = i+resultado
        }
    }

    document.getElementById("resultado-supDiezEjecute").innerHTML = `${textRef} ${resultado}`
}

// EJERCICIO 3
function multiplosDeTres() {
    let multiploTresNum = parseInt(document.getElementById("multiploTresNum").value)
    let resultado = ""
    for (let i = 1; i <= multiploTresNum; i++) {
        if(i % 3 === 0){
            resultado += `${i}, `
        }
    }
    console.log(resultado);
    document.getElementById("resultado-multiplosTres").innerHTML = "Los multiplos de 3 es: "+resultado.slice(0, -2)
}

//EJERCICIO 4
function multiplosDeCinco() {
    let multiploCincoNum = parseInt(document.getElementById("multiploCincoNum").value)
    let resultado = ""
    for (let i = 1; i <= multiploCincoNum; i++) {
        if(i % 5 === 0){
            resultado += `${i}, `
        }
    }
    console.log(resultado);
    document.getElementById("resultado-multiplosCinco").innerHTML = "Los multiplos de 5 es: "+resultado.slice(0, -2)
}

//EJERCICIO 5
function sumarRestarNNumeros(){
    // 1-2+3-4+5-6+7-8+9-10+11-12+13-14+15-16+17-18+19-20
    let sumTNumber = parseInt(document.getElementById("sumTNumber").value)
    let concat = ""
    let resultado = new Number();

    for(let i = 1; i <= sumTNumber; i++){
        //Los pares se restan y los impares se suman
        if(i % 2 == 1){ // IMPAR
            concat += i + "-"
            resultado = resultado - i
            //console.log(resultado)
        }else{ // PAR
            concat += i + "+"
            resultado = resultado + i
        }
    } 
    //alert( concat.slice(0, -1) )
    //alert( eval(concat.slice(0, -1)) )
    //console.log(resultado * -1)
    document.getElementById("resultado-sumarTodosNum").innerHTML = `La cadena de números es la siguiente: ${concat.slice(0, -1)} <br /> <b>y el resultado de la suma es: ${(Math.sign(resultado) == -1 ? resultado * -1: resultado)}</b> `
}

//EJERCICIO 6
function sumarPares(){
    let sumPares = parseInt(document.getElementById("sumPares").value)
    let resultado = 0;

    for(let i = 1; i <= sumPares; i++){
        if(i % 2 == 0){
            resultado = i + resultado
        }
    }

    document.getElementById("resultado-sumarPares").innerHTML = `La suma de los numeros pares es: <b>${resultado}</b>`
}

//EJERCICIO 7
function numeroPrimo(){
    let numPrimo = parseInt(document.getElementById("numPrimo").value)
    let count = 0
    let resultado

    if(numPrimo <= 1){
        resultado = "Tiene que ser mayor que 1"
    }else{
        for(let i = 1; i <= numPrimo; i++){
            if(numPrimo % i == 0){
                count = count + 1
            }
        }

        if(count == 2){
            resultado = `El número <b>${numPrimo}</b> SI es primo`
        }else{
            resultado = `El número <b>${numPrimo}</b> NO es primo`
        }
    }
    

    document.getElementById("resultado-numeroPrimo").innerHTML = resultado
}

//EJERCICIO 8
function factorialNumero(){
    let numFactorial = parseInt(document.getElementById("numFactorial").value) + 1
    let resultado = 1;
    let vect = []
    let resultadoTexto = ""

    for(let i = 1; numFactorial >= i; i++){
        let escala = numFactorial-i !== 0 ? numFactorial-i : 1 //Le agrego el "-i" es para poder ir mermando de el mayor valor al menor

        resultado = escala * resultado
        vect.push(resultado);
    }


    vect.slice(0, 4).forEach(num => {
        resultadoTexto += num + ", "
    })
    resultadoTexto = resultadoTexto.slice(0,-1)
    document.getElementById("resultado-factorialNumero").innerHTML = `El factorial de ${numFactorial-1}! es: <b>${resultadoTexto}</b>`
}

//EJERCICIO 9
function factorialNumeroSuma(){
    let numFactorialSuma = parseInt(document.getElementById("numFactorialSuma").value)+1
    let resultado = 0;

    for(let i = 1; numFactorialSuma >= i; i++){
        let escala = numFactorialSuma-i

        resultado = escala + resultado
    }

    document.getElementById("resultado-factorialNumeroSuma").innerHTML = `El factorial de ${numFactorialSuma-1}! es: <b>${resultado}</b>`
}

//EJERCICIO 10
/*function serieFibonacci(){
    let numSerieFib = parseInt(document.getElementById("numSerieFib").value)
    let tableFibonacci = document.getElementById("table-fibonacci")
    let a = 1
    let b = 1
    let temp
    for(let i = 1; i <= numSerieFib; i++){
        if(i == 1){
            tableFibonacci.querySelector("tbody").innerHTML += `<tr>
                <td>1</td>
            </tr><tr>
                <td>1</td>
                <td>1</td>
            </tr>`
        }else if(i == 2){
            tableFibonacci.querySelector("tbody").innerHTML += `<tr>
                <td>1</td>
                <td>${i}</td><td>1</td>
            </tr>`
        }else{
            if(i>3) temp = i-1
            tableFibonacci.querySelector("tbody").innerHTML += `<tr>
                <td>1</td>
                <td>${i}</td>
                ${(i > 3)? `<td>${temp + temp}</td>`:""}        
                <td>${i}</td>
                <td>1</td>
            </tr>`
        }

    }


}*/

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        var a = 0, b = 1, temp;
        for (var i = 2; i <= n; i++) {
            temp = a + b;
            a = b;
            b = temp;

            console.log(a)
        }
        return b;
    }
}   

function calcularFibonacci() {
    var numero = parseInt(document.getElementById("numSerieFib").value);
    var etiquetaResultado = document.getElementById("resultado-serieFibonacci");
    if (isNaN(numero) || numero < 0) {
        etiquetaResultado.textContent = "Ingrese un número positivo.";
    }
    else {
        var secuenciaFibonacci = [];
        for (var i = 0; i <= numero; i++) {
            secuenciaFibonacci.push(fibonacci(i));
        }
        etiquetaResultado.textContent = "Serie de Fibonacci: " + secuenciaFibonacci.join(", ");
    }
}

//EJERCICIO 11
function sumatoriaNumerosPares(){
    //let inputNumerosPares = parseInt(document.getElementById("inputNumerosPares").value);
    let count = 0;
    let resultadoSumaPares = 0;
    /*for(let i = 1; i <= inputNumerosPares; i++){
        if(i % 2 == 0){ //PAR
            count++;
            resultadoSumaPares = i + resultadoSumaPares
        }
    }*/

    /*let i = 1;
    while(i <= inputNumerosPares){
        if(i % 2 == 0){ //PAR
            count++;
            resultadoSumaPares = i + resultadoSumaPares
        }
        i++
    }*/

    let i = 1;
    do{
        if(i % 2 == 0){ //PAR
            count++;
            resultadoSumaPares = i + resultadoSumaPares
        }
        i++;
    }while(i <= inputNumerosPares)


    /*document.getElementById("resultado-sumatoriaPares").innerHTML = `
        <p>El resultado de la suma de pares es: <b>${resultadoSumaPares}</b></p>
        <p>La cantidad de pares es: <b>${count}</b></p>
    `*/
}

function pruebaXValor(valorN){
    //console.log("Llego ", valorN.value)
    let count = 0;
    let resultadoSumaPares = 0;
    let i = 1;
        do{
            if(i % 2 == 0){ //PAR
                count++;
                resultadoSumaPares = i + resultadoSumaPares
            }
            i++;
        }while(i <= valorN.value)

    return setReferencia(resultadoSumaPares, count)
}

function setReferencia(x, count){
    document.getElementById("resultado-sumatoriaPares").innerHTML = x
}

//EJERCICIO 12
function sumatoriaNumerosImpares(){
    let inputImparesN = parseInt(document.getElementById("inputImparesN").value);
    let inputImparesM = parseInt(document.getElementById("inputImparesM").value);
    let count = 0;
    let resultadoSumaImpares = 0;

    while(inputImparesN <= inputImparesM){
        if(inputImparesN % 2 == 1){
            count++
            resultadoSumaImpares = inputImparesN + resultadoSumaImpares
        }
        inputImparesN++;
    }

    document.getElementById("resultado-todosNumerosImpares").innerHTML = `
        <p>El resultado de la suma de impares es: <b>${resultadoSumaImpares}</b></p>
        <p>La cantidad de impares es: <b>${count}</b></p>
    `
}

//EJERCICIO 13
function primeroSegundoNumeros(){
    let primeroInput = parseInt(document.getElementById("primeroInput").value);
    let segundoInput = parseInt(document.getElementById("segundoInput").value);
    let resultadoTexto = ""
    let count = 0;

    if(primeroInput < segundoInput){
        while(primeroInput <= segundoInput){
            count++
            primeroInput++
            resultadoTexto = `Hay esta cantidad de numeros: ${count}`
        }
    }else{
        resultadoTexto = "Escribe valores apropiados"
    }

    document.getElementById("resultado-primeroSegundoNumeros").innerHTML = resultadoTexto
}

//EJERCICIO 14
function primeroSegundoNumerosSuma(){
    let primeroInputSuma = parseInt(document.getElementById("primeroInputSuma").value);
    let segundoInputSuma = parseInt(document.getElementById("segundoInputSuma").value);
    let cuenta = 0;
    let resultadoTexto = ""

    if(primeroInputSuma < segundoInputSuma){
        while(primeroInputSuma <= segundoInputSuma){
            cuenta = primeroInputSuma + cuenta
            resultadoTexto = `El resultado de la suma es: <b>${cuenta}</b>`
            primeroInputSuma++
        }
    }else{
        resultadoTexto = "Escribe valores apropiados"
    }
    document.getElementById("resultado-primeroSegundoNumerosSuma").innerHTML = resultadoTexto
}

//EJERCICIO 15
function menuSalir(){
    let mensaje = false

    while(mensaje == false){
        mensaje = confirm("Desea salir S/N");
    }

    console.log(mensaje)
}

//EJERCICIO 16
function sumaCuadrados(){
    let i = 1
    let resultado = 0
    while(i <= 100){
        resultado = (i*i) + resultado
        i++
    }

    document.getElementById("resultado-sumaCuadrados").innerHTML = `El resultado de la sumatoria de el cuadrado de los números es: ${resultado}`
}

//EJERCICIO 17
function mediaNumeros(){
    let random1 = Math.floor(Math.random() * 100);
    let random2 = Math.floor(Math.random() * 100);
    let random3 = Math.floor(Math.random() * 100);
    let random4 = Math.floor(Math.random() * 100);
    let random5 = Math.floor(Math.random() * 100);
    //console.log(random1, random2, random3, random4, random5)

    let resultado = (random1 + random2 + random3 + random4 + random5) / 5
    

    document.getElementById("resultado-mediaNumeros").innerHTML = `El resultado de la media de los números(${random1}, ${random2}, ${random3}, ${random4}, ${random5}) es: <b>${resultado}</b>`
}

//EJERCICIO 18
function mediaXNumeros(){
    let vect = [];
    let prt;
    let resultadoMedia = 0;

    while(parseInt(prt) !== 0){
        prt = prompt("Ingresa el números")

        if(parseInt(prt) !== 0){
            vect.push( parseInt(prt) )
        }
    }

    vect.forEach(num => {
        resultadoMedia = num + resultadoMedia
    })

    let resultado = resultadoMedia / vect.length

    document.getElementById("resultado-mediaXNumeros").innerHTML = `El resultado de la media de los numeros ingresados es: ${resultado}`

}
/***************************************************************************************
 * ESTOS EJERCICIOS SON DE EL APARTADO DE FUNCIONES QUE SE ENCUENTRA EN EL PDF DE EJERCICIOS
********************************************************************************/

//EJERCICIO 1
function fnCuboNumero(){
    const inputNumeroCubo = parseInt(document.getElementById("inputNumeroCubo").value)

    let resultado = Math.pow(inputNumeroCubo, 3)
    
    document.getElementById("resultado-fnCuboNumero").innerHTML = `El cubo del número(${inputNumeroCubo}) es: <b>${resultado}</b>`;
}

document.querySelector("#btn-fnCuboNumero").addEventListener("click", fnCuboNumero)


//EJERCICIO 2
function fnKilometrosMetros(){
    const inputKilometros = parseInt(document.getElementById("inputKilometros").value);

    let kilometrosToMetros = inputKilometros * 1000

    document.getElementById("resultado-fnKilometrosMetros").innerHTML = `Los kilometros ${inputKilometros}(km) expresados en metros es: <b>${kilometrosToMetros}(m)</b>`;
}

document.querySelector("#btn-fnKilometrosMetros").addEventListener("click", fnKilometrosMetros)


//EJERCICIO 3
function fnValidadorPositivoNegativo(x){
    let resultado
    if(x < 0){
        resultado = -1
    }else if(x === 0){
        resultado = 0
    }else{
        resultado = 1
    }

    return resultado
}

function insertarValueForNumber(){
    const inputValidarNum = parseInt(document.getElementById("inputValidarNum").value)
    document.getElementById("resultado-fnValidacionNumero").innerHTML = fnValidadorPositivoNegativo(inputValidarNum)
}

// EJERCICIO 4
function fnValidarNumeroMenor(){
    const inputNumUnoFn = parseInt(document.getElementById("inputNumUnoFn").value);
    const inputNumDosFn = parseInt(document.getElementById("inputNumDosFn").value);
    let resultado = ""

    if(inputNumUnoFn < inputNumDosFn){
        resultado = `El número <b>${inputNumUnoFn}</b> es el Menor y el Mayor es: <b>${inputNumDosFn}</b>`
    }else{
        resultado = `El número <b>${inputNumDosFn}</b> es el Menor y el Mayor es: <b>${inputNumUnoFn}</b>`
    }

    document.getElementById("resultado-fnNumMenor").innerHTML = resultado
}

document.querySelector("#btn-validarNum").addEventListener("click", fnValidarNumeroMenor)

//EJERCICIO 5
function fnCalculadora(){
    const inputCalcu1 = parseInt(document.getElementById("inputCalcu1").value);
    const inputCalcu2 = parseInt(document.getElementById("inputCalcu2").value);
    let resultado = `
        La suma es: <b>${inputCalcu1 + inputCalcu2}</b> <br />
        La resta es: <b>${inputCalcu1 - inputCalcu2}</b> <br />
        La multiplicación es: <b>${inputCalcu1 * inputCalcu2}</b> <br />
        La division es: <b>${inputCalcu1 / inputCalcu2}</b> <br />
        La division(módulo) es: <b>${inputCalcu1 % inputCalcu2}</b>
    `

    document.getElementById("resultado-fnCalculadora").innerHTML = resultado
}

document.querySelector("#btn-calculadora").addEventListener("click", fnCalculadora)

//EJERCICIO 6
function fnCalculadoraMed(){
    const inputCalcuMed1 = parseInt(document.getElementById("inputCalcuMed1").value);
    const inputCalcuMed2 = parseInt(document.getElementById("inputCalcuMed2").value);
    const inputCalcuMed3 = parseInt(document.getElementById("inputCalcuMed3").value);
    let resultado = `
        La suma es: <b>${inputCalcuMed1 + inputCalcuMed2 + inputCalcuMed3}</b> <br />
        La multiplicación es: <b>${inputCalcuMed1 * inputCalcuMed2 * inputCalcuMed3}</b>
    `

    document.getElementById("resultado-fnOperacionTresNum").innerHTML = resultado
}

document.querySelector("#btn-calculadoraMed").addEventListener("click", fnCalculadoraMed)

//EJERCICIO 7
function fnCalularAreaPerimetro(){
    const inputRect1 = parseInt(document.getElementById("inputRect1").value); //base
    const inputRect2 = parseInt(document.getElementById("inputRect2").value); //altura
    let resultado = `
        El area del rectangulo es: <b>${inputRect1 * inputRect2}cm<sup>2</sup></b> <br />
        El perimetro del rectangulo es: <b>${inputRect1 + inputRect2 + inputRect2 + inputRect1}</b>
    `

    document.getElementById("resultado-fnAreaPerimetroRect").innerHTML = resultado
}

document.querySelector("#btn-areaPerimetroRect").addEventListener("click", fnCalularAreaPerimetro)

//EJERCICIO 8
function fnCalcularAreaCuadrado(){
    const inputCua1 = parseInt(document.getElementById("inputCua1").value); //base
    const inputCua2 = parseInt(document.getElementById("inputCua2").value); //altura
    let resultado = `
        El area del cuadrado es: <b>${inputCua1 * inputCua2}cm<sup>2</sup></b>
    `

    document.getElementById("resultado-fnAreaCuadrado").innerHTML = resultado
}

document.querySelector("#btn-areaCuadrado").addEventListener("click", fnCalcularAreaCuadrado)

//EJERCICIO 9
function resultadoNumPrimo(x){
    let count = 0
    let resultado

    if(x <= 1){
        resultado = "Tiene que ser mayor que 1"
    }else{
        for(let i = 1; i <= x; i++){
            if(x % i == 0){
                count = count + 1
            }
        }

        if(count == 2){
            resultado = `El número <b>${x}</b> SI es primo`
        }else{
            resultado = `El número <b>${x}</b> NO es primo`
        }

    }
    return resultado

}
function fnNumPrimo(){
    const inputNumPrimo = parseInt(document.getElementById("inputNumPrimo").value)
    document.getElementById("resultado-fnNumPrimo").innerHTML = resultadoNumPrimo(inputNumPrimo)
}

//EJERCICIO 10
function fnCalcularPromedio(){
    const inputNota1 = parseInt(document.getElementById("inputNota1").value)
    const inputNota2 = parseInt(document.getElementById("inputNota2").value)
    const inputNota3 = parseInt(document.getElementById("inputNota3").value)

    let resultadoNota = (inputNota1 + inputNota2 + inputNota3) / 3;
    let respuestaNota;

    if(resultadoNota >= 10.5 && resultadoNota <= 20){
        respuestaNota = "Aprobó";
    }else if(resultadoNota < 10.5 && resultadoNota >= 0){
        respuestaNota = "Mejore la nota";
    }else{
        respuestaNota = "Revisa tus notas algo no nos cuadra!";
    }

    document.getElementById("resultado-fnNotaFinal").innerHTML = respuestaNota;
}
document.querySelector("#btn-notaFinalPromedio").addEventListener("click", fnCalcularPromedio)

//EJERCICIO 11
function fnCalcularTiempo() {
    // 60 segundos = 1 minuto | 1800 segundos = 30 minutos(media hora) | 3600 segundos = 1 hora
    const minuto = 60
    const hora = 3600 // en segundos una hora
    const inputSegundos = parseInt(document.getElementById("inputSegundos").value)
    
    document.getElementById("resultado-fnHMS").innerHTML = `
        <b>hora:</b> <u>${inputSegundos / hora}</u> <br />
        <b>minutos:</b> <u>${inputSegundos / minuto}</u> <br />
        <b>segundos:</b> <u>${inputSegundos % hora}</u> <br />
    `
}

document.querySelector("#btn-hms").addEventListener("click", fnCalcularTiempo)

//EJERCICIO 12
function resultadoParoImpar(x){
    let resultado = ""
    if(x % 2 == 0){
        resultado = `El número ${x} es PAR`
    }else{
        resultado = `El número ${x} es IMPAR`
    }

    return resultado
}
function fnParOImpar() {
    const inputSegundosFn = parseInt(document.getElementById("inputSegundosFn").value)
    let pOi = resultadoParoImpar(inputSegundosFn)

    document.getElementById("resultado-fnParOImpar").innerHTML = pOi
}

document.querySelector("#btn-parImparFn").addEventListener("click", fnParOImpar)

//EJERCICIO 13
function fnMinutesToHour(){
    const inputMinutes = parseInt(document.getElementById("inputMinutes").value)
    // 60 segundos = 1 minuto | 1800 segundos = 30 minutos(media hora) | 3600 segundos = 1 hora
    let segundos = 60
    let hora = 60 // en minutos una hora

    document.getElementById("resultado-fnMinutesHour").innerHTML = `
        <b>hora:</b> <u>${inputMinutes / hora}</u> <br />
        <b>minutos:</b> <u>${inputMinutes % hora}</u> <br />
        <b>segundos:</b> <u>${inputMinutes * segundos}</u> <br />
    `
}
document.querySelector("#btn-minutesFn").addEventListener("click", fnMinutesToHour)

//EJERCICIO 14
function fnValueAbsoluto(){
    const inputNumAbsoluto = parseInt(document.getElementById("inputNumAbsoluto").value)
    let resultado = ""

    if(inputNumAbsoluto == 0){
        resultado = "El valor absoluto de |0| es: <b>0</b>"
    }else if(inputNumAbsoluto < 0){
        resultado = `El valor absoluto de |${inputNumAbsoluto}| es: <b>${inputNumAbsoluto * -1}</b>`
    }else{
        resultado = `El valor absoluto de |${inputNumAbsoluto}| es: <b>${inputNumAbsoluto}</b>`
    }

    document.getElementById("resultado-fnValorAbsoluto").innerHTML = resultado
}

document.querySelector("#btn-absoluto").addEventListener("click", fnValueAbsoluto)

//EJERCICIO 15
function fnDivisibilidadAction(){
    const inputNumDivisible = parseInt(document.getElementById("inputNumDivisible").value)
    const inputDivisible = parseInt(document.getElementById("inputDivisible").value)
    let resultado = ""
    
    let division = inputDivisible / inputDivisible
    if( Number.isInteger(division) && inputNumDivisible % inputDivisible == 0 ){
        resultado = "Si es divisible"
    }else{
        resultado = "No es divisible"
    }

    document.getElementById("resultado-fnDivisible").innerHTML = resultado
}

document.querySelector("#btn-divisible").addEventListener("click", fnDivisibilidadAction)

// EJERCICIO 16
function fnNumeroMenor(){
    const inputNumUno = parseInt(document.getElementById("inputNumUno").value),
        inputNumDos = parseInt(document.getElementById("inputNumDos").value),
        inputNumTres = parseInt(document.getElementById("inputNumTres").value)
    let resultado = ""

    if(inputNumUno < inputNumDos && inputNumUno < inputNumTres){
        resultado = `El número <b>${inputNumUno}</b> es el menor`
    }

    if(inputNumDos < inputNumUno && inputNumDos < inputNumTres){
        resultado = `El número <b>${inputNumDos}</b> es el menor`
    }

    if(inputNumTres < inputNumUno && inputNumTres < inputNumDos){
        resultado = `El número <b>${inputNumTres}</b> es el menor`
    }

    document.getElementById("resultado-fnNumeroMenor").innerHTML = resultado
}

document.querySelector("#btn-numMenor").addEventListener("click", fnNumeroMenor)