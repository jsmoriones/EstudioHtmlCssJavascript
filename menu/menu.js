function cambiaNivel(){
	
	const select = document.getElementById('select-nivel');
	const contenidoNivel1 = document.getElementById("contenidoNivel1")
	const contenidoNivel2 = document.getElementById("contenidoNivel2")
	const contenidoNivel3 = document.getElementById("contenidoNivel3")
	const contenidoNivel4 = document.getElementById("contenidoNivel4")
	//const advinador = document.getElementById("adivinadorContenido")

	switch(select.value){
		case "nivel1":
			contenidoNivel1.classList.toggle("d-n")
			contenidoNivel2.classList.add("d-n")
			contenidoNivel3.classList.add("d-n")
			contenidoNivel4.classList.add("d-n")
			break;
		case "nivel2":
			contenidoNivel2.classList.toggle("d-n")
			contenidoNivel1.classList.add("d-n")
			contenidoNivel3.classList.add("d-n")
			contenidoNivel4.classList.add("d-n")
			break;
		case "nivel3":
			contenidoNivel3.classList.toggle("d-n")
			contenidoNivel1.classList.add("d-n")
			contenidoNivel2.classList.add("d-n")
			contenidoNivel4.classList.add("d-n")
			break;
		case "nivel4":
			contenidoNivel4.classList.toggle("d-n")
			contenidoNivel1.classList.add("d-n")
			contenidoNivel2.classList.add("d-n")
			contenidoNivel3.classList.add("d-n")
			break;
		case "adivinador":
			contenidoNivel4.classList.add("d-n")
			contenidoNivel1.classList.add("d-n")
			contenidoNivel2.classList.add("d-n")
			contenidoNivel3.classList.add("d-n")
			adivinador()
			break;
		default:
			alert("Selecciona una opcion nueva")
			break;
	}
}

function adivinador(){
	const contenido = document.getElementById('contenido');
	contenido.innerHTML = `
	<div class="container" id="adivinadorContenido">
		<h1>Intenta adivinar un número entre 1 y 100</h1>
		<div class="contenedor">
			<div class="contenedorFormulario">
				<input type="text" id="txtNumIngresarAdvinador" class="txtIngresarNumber" placeholder="Agregar un número válido">
				<button onclick="compruebaDatos()" id="btnNumIngresar" class="btnAdivinar">Adivinar</button>
			</div>
			<p id="message"></p>
			<p id="intentosRider" class="intentosRider">😊😊😊😊😊😊</p>
		</div>
		<ul id="listaDeIntentos" class="listaDeIntentos"></ul>
	</div>
	`


	const numeroSecreto = Math.floor(Math.random() * 100)+1;
	let intentos = 0;
	let adivinado = false;

	document.getElementById("txtNumIngresarAdvinador").addEventListener("keypress", function(event){
		if(event.key == "Enter"){
			compruebaDatos();
		}
	})

	function compruebaDatos(){
		let continuar = true;
		let numIngresado;
		let sePreguntoContinuar = false;

		do{
			numIngresado = parseInt( document.getElementById("txtNumIngresarAdvinador").value );
			if(isNaN(numIngresado) || numIngresado < 1 || numIngresado > 100){
				setMessage("¡Por Favor introduce un número válido, entre 0 y 100!", "😀");
				return;
			}
			intentos++;
			
			if(numIngresado === numeroSecreto){
				setMessage(`¡Felicidades! Has adivinado el número: ${numeroSecreto} en ${intentos}`, "😮");
				adivinado = true;
				document.getElementById("txtNumIngresarAdvinador").disabled = true;
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
						document.getElementById("txtNumIngresarAdvinador").disabled = true;
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
}

function cambiarSeccion() {
    const select = document.getElementById('contenidoNivel1');
    const contenido = document.getElementById('contenido');
    const seleccionada = select.value;
    switch (seleccionada) {
        case 'ejercicio1':
            contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejericicio 1</h3>
			<p>Pedir 2 números al usuario y sumarlos, restarlos, multiplicarlos y dividirlos</p>
			<form id="calculadora">
				<label for="num1">Número 1</label>
				<input type="number" placeholder="Escribe el número 1" id="num1">
				<label for="num2">Número 2</label>
				<input type="number" placeholder="Escribe el número 2" id="num2">
				<div class="content-btn">
					<button onclick="sumar(event)">Sumar</button>
					<button onclick="restar(event)">Restart</button>
					<button onclick="multiplicar(event)">Multiplicar</button>
					<button onclick="dividir(event)">Dividir</button>
				</div>
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-calculado">
			</div>
		</div>`;
            break;
        case 'ejercicio2':
            contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejericicio 2</h3>
			<p>Convertir Grados Celsius a Grados Fahrenheit (Propuesto)</p>
			<form id="convercion-fahrenheit">
				<label for="grados">Grados Celsius</label>
				<input type="number" placeholder="Escribe el grado celsius" id="grados">
				<input type="button" value="Enviar Grado" onclick="convertirCelsius()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-grados">
			</div>
		</div>`;
            break;
        case 'ejercicio3':
            contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejericicio 3</h3>
			<p>Sacar la hipotenusa de un triángulo rectángulo, pidiendo al usuario el valor de los 2 catetos</p>
			<form id="formulario-hipotenusa">
				<label for="cat1">Cateto del lado A</label>
				<input type="number" placeholder="Escribe el Cateto 1" id="cat1">
				<label for="cat2">Cateto del lado B</label>
				<input type="number" placeholder="Escribe el Cateto 2" id="cat2">
				<input type="button" value="Calcular hipotenusa" onclick="calcularHipotenusa()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-cateto">
			</div>
		</div>`;
            break;
        case 'ejercicio4':
            contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejericicio 4</h3>
			<p>Hacer un Programa que calcule longitudes de Circunferencia. (Propuesto)</p>
			<form id="formulario-longitudes">
				<label for="diametro">Diametro</label>
				<input type="number" placeholder="Escribe el diametro" id="diametro">
				<input type="button" value="Calcular Longitud" onclick="calcularCircunferencia()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-longitud">
			</div>
		</div>`;
            break;
        case 'ejercicio5':
            contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejericicio 5</h3>
			<p>Hacer un Programa que calcule áreas de trapecios</p>
			<form id="formulario-trapecio">
				<label for="basemn">Base Menor</label>
				<input type="number" placeholder="Escribe la base menor" id="basemn">
				<label for="basemy">Base Mayor</label>
				<input type="number" placeholder="Escribe la base mayor" id="basemy">
				<label for="alturaTra">Altura</label>
				<input type="number" placeholder="Escribe la Altura" id="alturaTra">
				<input type="button" value="Calcular Area" onclick="calcularAreaTrapecio()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-trapecio">
			</div>
		</div>`;
            break;
        case 'ejercicio6':
            contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejericicio 6</h3>
			<p>Calcule la media aritmética de 3 números cualesquiera (Propuesto)</p>
			<form id="formulario-mediaAritmetica">
				<label for="menum1">Número 1</label>
				<input type="number" placeholder="Escribe el número 1" id="menum1">
				<label for="menum2">Número 2</label>
				<input type="number" placeholder="Escribe el número 2" id="menum2">
				<label for="menum3">Número 3</label>
				<input type="number" placeholder="Escribe el número 3" id="menum3">
				<input type="button" value="Calcular media aritmética" onclick="calcularMediaAritmetica()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-mediaAritmetica">
			</div>
		</div>`;
            break;
        case 'ejercicio7':
            contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejericicio 7</h3>
			<p>Una tienda ofrece un descuento del 15% sobre el total de la compra y un cliente desea saber cuánto deberá pagar finalmente por su compra.</p>
			<form id="formulario-mediaAritmetica">
				<label for="totalCompra">Total de la compra</label>
				<input type="number" placeholder="Escribe total de tu compra" id="totalCompra">
				<input type="button" value="Calcular Total con porcentaje" onclick="calcularTotalPorcentaje()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-totalPorcentaje">
			</div>
		</div>`;
            break;
        case 'ejercicio8':
            contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejericicio 8</h3>
			<p>Dadas las horas trabajadas de una persona y el valor por hora. Calcular su salario e imprimirlo (Propuesto)</p>
			<form id="formulario-horasTrabajadas">
				<label for="horasTrabajadas">Horas trabajadas</label>
				<input type="number" placeholder="Escribe las horas trabajadas" id="horasTrabajadas">
				<label for="valorXHora">Valor por Hora</label>
				<input type="number" placeholder="Escribe el valor por hora" id="valorXHora">
				<input type="button" value="Calcular Salario x Hora" onclick="calcularSalarioXHora()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-horasTrabajadas">
			</div>
		</div>`;
            break;
        case 'ejercicio9':
            contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejericicio 9</h3>
			<p>Calcular el nuevo salario de un obrero si obtuvo un incremento del 25% sobre su salario anterior.</p>
			<form id="formulario-horasTrabajadas">
				<label for="salarioAnterior">Salario Anterior</label>
				<input type="number" placeholder="Escribe tu salario anterior" id="salarioAnterior">
				<label for="salarioActual">Salario Actual</label>
				<input type="number" placeholder="Escribe tu salario actual" id="salarioActual">
				<input type="button" value="Calcular Salario x Hora" onclick="calcularSalarioDescuento()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-salarioConDescuento">
			</div>
		</div>`;
            break;
        case 'ejercicio10':
            contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 10</h3>
			<p>Un alumno desea saber cuál será su calificación final en la materia de Algoritmos. Dicha calificación se compone de los siguientes porcentajes:</p>
			<ul>
				<li>55% del promedio de sus tres calificaciones parciales.</li>
				<li>30% de la calificación del examen final.</li>
				<li>15% de la calificación de un trabajo final. (Propuesto)</li>
			</ul>
			<form id="formulario-calificacionFinal">
				<fieldset>
					<legend>Calificaciones parciales (55%)</legend>
					<label for="cal1">Calificación 1</label>
					<input type="number" placeholder="Escribe tu calificación #1" id="cal1">
					<label for="cal2">Calificación 2</label>
					<input type="number" placeholder="Escribe tu calificación #2" id="cal2">
					<label for="cal3">Calificación 3</label>
					<input type="number" placeholder="Escribe tu calificación #3" id="cal3">
				</fieldset>
				<fieldset>
					<legend>Calificación examen final (30%)</legend>
					<label for="calExamenFinal">Calificación de examen final</label>
					<input type="number" placeholder="Escribe tu calificación del examen final" id="calExamenFinal">
				</fieldset>
				<fieldset>
					<legend>Calificación trabajo final (15%)</legend>
					<label for="calTrabajoFinal">Calificación de trabajo final</label>
					<input type="number" placeholder="Escribe tu calificación del trabajo final" id="calTrabajoFinal">
				</fieldset>

				<input type="button" value="Calcular calificación final total" onclick="calcularCalificacionFinal()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-calificacionTotalFinal">
			</div>
		</div>`;
            break;
        case 'ejercicio11':
            contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 11</h3>
			<p>Calcular la cantidad de segundos que están incluidos en el número de horas, minutos y segundos ingresados por el usuario.</p>
			<form id="formulario-segundosHoras">
				<label for="horasSegundos">Horas</label>
				<input type="number" placeholder="Escribe el # de horas" id="horasSegundos">
				<label for="minutosSegundos">Minutos</label>
				<input type="number" placeholder="Escribe el # de minutos" id="minutosSegundos">
				<label for="segundosSegundos">Segundos</label>
				<input type="number" placeholder="Escribe el # de segundos" id="segundosSegundos">

				<input type="button" value="Calcular el número de sgundos" onclick="calcularTotalSegundos()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-totalDeSegundos">
			</div>
		</div>`;
            break;
        case 'ejercicio12':
            contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 12</h3>
			<p>Hacer un Programa que obtenga la media geométrica de tres numeros. (Propuesto)</p>
			<form id="formulario-mediaGeometrica">
				<label for="geonum1">Número 1</label>
				<input type="number" placeholder="Escribe el número 1" id="geonum1">
				<label for="geonum2">Número 2</label>
				<input type="number" placeholder="Escribe el número 2" id="geonum2">
				<label for="geonum3">Número 3</label>
				<input type="number" placeholder="Escribe el número 3" id="geonum3">
				<input type="button" value="Obtener media geométrica" onclick="obtenerMediaGeometrica()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-mediaGoemetrica">
			</div>
		</div>`;
            break;
        case 'ejercicio13':
            contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 13</h3>
			<p>Un maestro desea saber que porcentaje de hombres y que porcentaje de mujeres hay en un grupo de estudiantes.</p>
			<form id="formulario-porcentajePersonas">
				<label for="numHom">Número de Hombres</label>
				<input type="number" placeholder="Escribe el número de hombres" id="numHom">
				<label for="numMuj">Número de Mujeres</label>
				<input type="number" placeholder="Escribe el número de mujeres" id="numMuj">
				<input type="button" value="Obtener media geométrica" onclick="calcularPorcetajePersonas()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-porcentajePersonas">
			</div>
		</div>`;
            break;
        case 'ejercicio14':
            contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 14</h3>
			<p>Volumen y Área de un Cubo (Propuesto)</p>
			<form id="formulario-areaCubo">
				<label for="aristaCubo">Valor de una arista del Cubo</label>
				<input type="number" placeholder="Escribe el valor de una arista del cubo" id="aristaCubo">
				<input type="button" value="Calcular valores del Cubo" onclick="calcularValoresCubo()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-areaCubo">
			</div>
		</div>`;
            break;
        case 'ejercicio15':
            contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 15</h3>
			<p>Tres personas deciden invertir su dinero para fundar un empresa. Cada una de ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte con respecto a la cantidad total invertida.</p>
			<form id="formulario-totalInversion">
				<label for="valorPersona1">Valor de persona #1</label>
				<input type="number" id="valorPersona1" placeholder="Escribe la inversion de la persona 1">
				<label for="valorPersona2">Valor de persona #2</label>
				<input type="number" id="valorPersona2" placeholder="Escribe la inversion de la persona 2">
				<label for="valorPersona3">Valor de persona #3</label>
				<input type="number" id="valorPersona3" placeholder="Escribe la inversion de la persona 3">
				<input type="button" value="Obtener porcentaje" onclick="calcularPorcentajeInversion()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-inversionTotal">
			</div>
		</div>`;
            break;
        case 'ejercicio16':
            contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 16</h3>
			<p>Volumen y Área de una Esfera. (Propuesto)</p>
			<form id="formulario-geoEsfera">
				<label for="radioEsfera">Radio de la esfera</label>
				<input type="number" id="radioEsfera" placeholder="Escribe el radio de la Esfera">
				<input type="button" value="Obtener Area y Volumen" onclick="obtenerVolumenAreaEsfera()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-volumenAreaEsfera">
			</div>
		</div>`;
            break;
        default:
            contenido.innerHTML = '<h1>Página no encontrada</h1>';
            break;
    }
}

function cambiarSeccion2(){
	const select = document.getElementById('contenidoNivel2');
    const contenido = document.getElementById('contenido');
    const seleccionada = select.value;

	switch(seleccionada){
		case "ejercicio1":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 1</h3>
			<p>Determinar si un alumno aprueba o reprueba un curso, sabiendo que aprobara si su promedio de tres calificaciones es mayor o igual a 10.5; reprueba en caso contrario.</p>
			<form id="formulario-calificacionAlumno">
				<label for="calAlum1">Primera nota</label>
				<input type="number" placeholder="Escribe el Primera nota" id="calAlum1" min="0" max="20">
				<label for="calAlum2">Segunda nota</label>
				<input type="number" placeholder="Escribe el Segunda nota" id="calAlum2" min="0" max="20">
				<label for="calAlum3">Tercera nota</label>
				<input type="number" placeholder="Escribe el Tercera nota" id="calAlum3" min="0" max="20">
				<input type="button" value="Promedia nota" onclick="calcularNotaAlumno()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-calificacionAlumno">
			</div>
		</div>`;
			break;
		case "ejercicio2":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 2</h3>
			<p>Mostrar el resultado de la suma de 2 números enteros, si esta supera a 10. (Propuesto)</p>
			<form id="formulario-sumatoriaDosNumeros">
				<label for="reNum1">Número 1</label>
				<input type="number" placeholder="Llena el campo con números" id="reNum1" min="0" max="100">
				<label for="reNum2">Número 2</label>
				<input type="number" placeholder="Llena el campo con números" id="reNum2" min="0" max="100">
				<input type="button" value="Sumar los números" onclick="sumatoriaDeNumeros()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-sumatoriaDosNumeros">
			</div>
		</div>`;
			break;
		case "ejercicio3":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 3</h3>
			<p>Determinar si un número es par, impar o cero</p>
			<form id="formulario-parImparCero">
				<label for="parImaparNum">Ingrese número</label>
				<input type="number" placeholder="Llena el campo con un número" id="parImaparNum">
				<input type="button" value="Verificar Par o Impar" onclick="parImparCero()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-parImparCero">
			</div>
		</div>`;
			break;
		case "ejercicio4":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 4</h3>
			<p>Dado 3 números Calcular el Mayor (Propuesto)</p>
			<form id="formulario-numeroMayor">
				<label for="numMayor1">Primer número</label>
				<input type="number" placeholder="Escribe el Primera número" id="numMayor1">
				<label for="numMayor2">Segundo número</label>
				<input type="number" placeholder="Escribe el Segunda número" id="numMayor2">
				<label for="numMayor3">Tercer número</label>
				<input type="number" placeholder="Escribe el Tercera número" id="numMayor3">
				<input type="button" value="Ver los números mayores" onclick="verificarNumerosMayores()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-numeroMayor">
			</div>
		</div>`;
			break;
		case "ejercicio5":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 5</h3>
			<p>Ingrese 2 números desde el teclado e imprima solo los positivos</p>
			<form id="formulario-numeroPositivo">
				<label for="numPosivo1">Primer número</label>
				<input type="number" placeholder="Escribe el Primer número" id="numPosivo1">
				<label for="numPosivo2">Segundo número</label>
				<input type="number" placeholder="Escribe el Segundo número" id="numPosivo2">
				<input type="button" value="Ver los números positivos" onclick="verificarNumerosPositivos()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-numeroPositivo">
			</div>
		</div>`;
			break;
		case "ejercicio6":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 6</h3>
			<p>Un obrero necesita calcular su salario semanal, el cual se obtiene de la siguiente manera:</p>
			<ul>
				<li>Si trabaja 40 horas o menos se le paga $16 por hora</li>
				<li>Si trabaja más de 40 horas se le paga $16 por cada una de las primeras 40 horas y $20 por cada hora extra. (Propuesto)</li>
			</ul>
			<form id="formulario-horasTrabajadasObrero">
				<label for="horasObrero">Horas Trabajadas</label>
				<input type="number" id="horasObrero" placeholder="Escribe el número de horas trabajadas">
				<input type="button" value="Enviar horas trabajadas" onclick="calcularSalarioHorasTrabajadas()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-horasTrabajadasObrero">
			</div>
		</div>`;
			break;
		case "ejercicio7":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 7</h3>
			<p>Ingresar por teclado el nombre y el signo de cualquier persona e imprima, el nombre solo si la persona es signo Aries</p>
			<form id="formulario-signoPersona">
				<label for="nombreSigno">Tu Nombre</label>
				<input type="text" id="nombreSigno" placeholder="Escribe tu nombre">
				<label for="signoSigno">Tu Signo</label>
				<input type="text" id="signoSigno" placeholder="Escribe tu signo">
				<input type="button" value="Enviar información" onclick="imprimirSigno()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-signoPersona">
			</div>
		</div>`;
			break;
		case "ejercicio8":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 8</h3>
			<p>Ingresar por teclado el nombre, la edad y el sexo de cualquier persona e imprima, solo si la persona es de sexo masculino y mayor de edad, el nombre de la persona (Propuesto)</p>
			<form id="formulario-sexoNombrePersona">
				<label for="nombrePersona">Tu Nombre</label>
				<input type="text" id="nombrePersona" placeholder="Escribe tu nombre">
				<label for="edadPersona">Tu Edad</label>
				<input type="number" id="edadPersona" placeholder="Escribe tu edad" max="100" min="3">
				<label>Tu Sexo</label>
				<div class="boxSex">
					<label for="sexoM">Masculino: </label>
					<input type="radio" id="sexoM" name="sexoPersona" value="Masculino">
					<label for="sexoF">Femenino: </label>
					<input type="radio" id="sexoF" name="sexoPersona" value="Femenino">
				</div>
				<input type="button" value="Enviar datos de información" onclick="imprimirNombrePersona()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-sexoNombrePersona">
			</div>
		</div>`;
			break;
		case "ejercicio9":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 9</h3>
			<p>Hacer un algoritmo que calcule el total a pagar por la compra de camisas. Si se compran tres camisas o más se aplica un descuento del 20% sobre el total de la compra y si son menos de tres camisas un descuento del 10%</p>
			<form id="formulario-compraCamisas">
				<label for="numCamisas">Camisas Compradas</label>
				<input type="number" id="numCamisas" placeholder="Escribe el número de camisas compradas">
				<label for="valCamisa">Precio de camisa x Unidad</label>
				<input type="number" id="valCamisa" placeholder="Escriba el precio de la camisa x Unidad">
				<input type="button" value="Enviar Compra" onclick="calcularTotalCamisas()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-compraCamisas">
			</div>
		</div>`;
			break;
		case "ejercicio10":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 10</h3>
			<p>En un supermercado se hace una promoción, mediante la cual el cliente obtiene un descuento dependiendo de un número que se escoge al azar. Si el numero escogido es menor que 74 el descuento es del 15% sobre el total de la compra, si es mayor o igual a 74 el descuento es del 20%. Obtener cuanto dinero se le descuenta. (Propuesto)</p>
			<form id="formulario-descuentoTotalPrecio">
				<label for="totalCompraSupermercado">Total a Pagar</label>
				<input type="number" id="totalCompraSupermercado" placeholder="Escribe el total de la compra">
				<input type="button" value="Enviar Total" onclick="calcularCompraDescuento()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-descuentoTotalPrecio">
			</div>
		</div>`;
			break;
		case "ejercicio11":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 11</h3>
			<p>Calcular el total que una persona debe pagar en una llantera, si el precio de cada llanta es de $800 si se compran menos de 5 llantas y de $700 si se compran 5 o más.</p>
			<form id="formulario-totalAPagarLlantera">
				<label for="valLlantera">Número de Llantas a Comprar</label>
				<input type="number" id="valLlantera" placeholder="Escribe el número de llantas a comprar" min="1" max="500">
				<input type="button" value="Obtener total a Pagar" onclick="obtenerTotalLlantera()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-totalAPagarLlantera">
			</div>
		</div>`;
			break;
		case "ejercicio12":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 12</h3>
			<p>En un almacén se hace un 20% de descuento a los clientes cuya compra supere los S/. 1000 ¿Cuál será la cantidad que pagara una persona por su compra? (Propuesto)</p>
			<form id="formulario-compraAlmacen">
				<label for="totalAPagarAlmacen">Valor total de compra</label>
				<input type="number" id="totalAPagarAlmacen" placeholder="Escribe el valor total de la compra" min="1">
				<input type="button" value="Obtener total con descuento" onclick="obtenerTotalDescuentoAPagar()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-compraAlmacen">
			</div>
		</div>``<div class="formulario-contenedor">
		<h3>Ejercicio 12</h3>
		<p>En un almacén se hace un 20% de descuento a los clientes cuya compra supere los S/. 1000 ¿Cuál será la cantidad que pagara una persona por su compra? (Propuesto)</p>
		<form id="formulario-compraAlmacen">
			<label for="totalAPagarAlmacen">Valor total de compra</label>
			<input type="number" id="totalAPagarAlmacen" placeholder="Escribe el valor total de la compra" min="1">
			<input type="button" value="Obtener total con descuento" onclick="obtenerTotalDescuentoAPagar()">
		</form>
		<h4 class="resultado-titulo">Resultado: </h4>
		<div id="resultado-compraAlmacen">
		</div>
	</div>`;
			break;
		case "ejercicio13":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 13</h3>
			<p>Ecuaciones de Segundo Grado: Ax^2 + Bx + C</p>
			<form id="formulario-ecuacionSegundoGrado">
				<label for="totalAPagarAlmacen">Escribe valores de variables A, B, C</label>
				<div class="describe-ecuacion">
					<input type="number" id="varA" placeholder="A">
					<label>X</label>
					<sup>2</sup>
					<label>&nbsp;+&nbsp;</label>
					<input type="number" id="varB" placeholder="B">
					<label>&nbsp;X&nbsp;</label>
					<label>&nbsp;+&nbsp;</label>
					<input type="number" id="varC" placeholder="C">
				</div>
				<input type="button" value="Resolver Ecuacion" onclick="calcularEcuacionSegundoGrado()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-ecuacionSegundoGrado">
			</div>
		</div>`;
			break;
		case "ejercicio14":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 14</h3>
			<p>Hacer un programa que lea 2 números, y los imprima en forma ascendente. (Propuesto)</p>
			<form id="formulario-numerosAscendientes">
				<label for="ascNum1">Número 1</label>
				<input type="number" id="ascNum1" placeholder="Ej: 10">
				<label for="ascNum2">Número 2</label>
				<input type="number" id="ascNum2" placeholder="Ej: 20">
				<input type="button" value="Ordernar" onclick="numerosAscendientes()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-numerosAscendientes">
			</div>
		</div>`;
			break;
		case "ejercicio15":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 15</h3>
			<p>Hacer un programa que simule el lanzamiento de una moneda.</p>
			<form id="formulario-lanzamientoMoneda">
				<input type="button" value="Lanzar Moneda" onclick="ejecutarJuegoModena()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-lanzamientoMoneda" class="resultado-moneda">
			</div>
		</div>`;
			break;
		case "ejercicio16":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 16</h3>
			<p>Una distribuidora de motocicletas tiene una promoción de fin de año que consiste en lo siguiente. Las motos marca Honda tienen un descuento del 5%, las marcas Yamaha del 8% y las Suzuki del 10%, las otras marcas 2%. (Propuesto)</p>
			<form id="formulario-motocicletas" class="formulario-motocicletas">
				<div class="sep1">
					<label for="marca1">Motos Marca Honda</label>
					<input type="number" id="marca1" placeholder="Dime cuantas motos compraste">
					<label for="marca2">Motos Marca Yamaha</label>
					<input type="number" id="marca2" placeholder="Dime cuantas motos compraste">
					<label for="marca3">Motos Marca Suzuki</label>
					<input type="number" id="marca3" placeholder="Dime cuantas motos compraste">
					<label for="marca4">Otras Marcas de Moto</label>
					<input type="number" id="marca4" placeholder="Dime cuantas motos compraste">
					<input type="button" value="Calcular Precio Total" onclick="calcularPrecioTotalMotos()">
				</div>
				<div class="sep2">
					<ul>
						<li>Valor de Honda: <b>1000</b></li>
						<li>Valor de Yamaha: <b>1200</b></li>
						<li>Valor de Suzuki: <b>1400</b></li>
						<li>Otros Valores: <b>800</b></li>
					</ul>
				</div>
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-motocicletas">
			</div>
		</div>`;
			break;
		case "ejercicio17":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 17</h3>
			<p>En una tienda de descuento se efectúa una promoción en la cual se hace un descuento sobre el valor de la compra total según el color de la bolita que el cliente saque al pagar en caja. Si la bolita es de color blanco no se le hará descuento alguno, si es verde se le hará un 10% de descuento, si es amarilla un 25%, si es azul un 50% y si es roja un 100%. Se sabe que solo hay bolitas de los colores mencionados.</p>
			<form id="formulario-bolitaJuego">
				<label for="totalValorAPagar">Escribe el Total a Pagar</label>
				<input type="number" id="totalValorAPagar" placeholder="Dame el total a Pagar">
				<input type="button" value="Sacar Bola" onclick="juegoBolaParaPagar()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-bolitaJuego">
			</div>
		</div>`;
			break;
		case "ejercicio18":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 18</h3>
			<p>Hacer un programa que pida tres números y detecte si se han introducido en orden creciente. (Propuesto).</p>
			<form id="formulario-tresNumerosCreciente">
				<label for="creNum1">Primer número</label>
				<input type="number" placeholder="Escribe el Primer número" id="creNum1">
				<label for="creNum2">Segundo número</label>
				<input type="number" placeholder="Escribe el Segundo número" id="creNum2">
				<label for="creNum3">Tercer número</label>
				<input type="number" placeholder="Escribe el Tercer número" id="creNum3">
				<input type="button" value="Verificar forma ascendiente" onclick="verificarNumAscendientes()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-tresNumerosCreciente">
			</div>
		</div>`;
			break;
		case "ejercicio19":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 19</h3>
			<p>Hacer un programa que pida tres números e indicar si el tercero es igual a la suma del primero y el segundo.</p>
			<form id="formulario-sumaTresNumeros">
				<label for="sumTNum1">Primer número</label>
				<input type="number" placeholder="Escribe el Primer número" id="sumTNum1">
				<label for="sumTNum2">Segundo número</label>
				<input type="number" placeholder="Escribe el Segundo número" id="sumTNum2">
				<label for="sumTNum3">Tercer número</label>
				<input type="number" placeholder="Escribe el Tercer número" id="sumTNum3">
				<input type="button" value="Verificar condicion de números" onclick="verificarSumaDTercerNumero()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-sumaTresNumeros">
			</div>
		</div>`;
			break;
		case "ejercicio20":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 20</h3>
			<p>Hacer un programa Que tome tres números y diga si la multiplicación de los dos primeros es igual al tercero.(Propuesto)</p>
			<form id="formulario-multiTresNumeros">
				<label for="multTNum1">Primer número</label>
				<input type="number" placeholder="Escribe el Primer número" id="multTNum1">
				<label for="multTNum2">Segundo número</label>
				<input type="number" placeholder="Escribe el Segundo número" id="multTNum2">
				<label for="multTNum3">Tercer número</label>
				<input type="number" placeholder="Escribe el Tercer número" id="multTNum3">
				<input type="button" value="Verificar condicion de números" onclick="verificarMultDTercerNumero()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-multiTresNumeros">
			</div>
		</div>`;
			break;
		case "ejercicio21":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 21</h3>
			<p>Que lea una hora en hora:minutos:segundos y diga la hora que es un segundo después.</p>
			<form id="formulario-horas">
				<input type="button" value="Dame Hora" onclick="sumarHora()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-horashms">
			</div>
		</div>`
		case "ejercicio21":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 22</h3>
			<p>Hacer un programa que tome dos números y diga si ambos son pares o impares. (Propuesto)</p>
			<form id="formulario-dosNumerosImpares">
				<label for="num1ParOImpar">Número 1</label>
				<input type="number" id="num1ParOImpar" placeholder="Escribe el número 1 para vérificar">
				<label for="num2ParOImpar">Número 2</label>
				<input type="number" id="num2ParOImpar" placeholder="Escribe el número 2 para vérificar">
				<input type="button" value="Vérificar Par O Impar" onclick="verificarParOImpar()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-dosNumerosImpares">
			</div>
		</div>`;
	}
}

function cambiarSeccion3(){
	const select = document.getElementById('contenidoNivel3');
    const contenido = document.getElementById('contenido');
    const seleccionada = select.value;

	switch(seleccionada){
		case "ejercicio1":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 1</h3>
			<p>Suma de los n primeros números</p>
			<form id="formulario-primerosNumeros">
				<label for="nPrimerosNumeros">Escribe los n Números</label>
				<input type="number" id="nPrimerosNumeros" placeholder="Digíta los n Primeros números">
				<input type="button" value="Sumar" onclick="sumarNNumeros()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-primerosNumeros"></div>
		</div>`
			break;
		case "ejercicio2":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 2</h3>
			<p>Digite un número, si el numero supera a 10, multiplique los 10 primeros números, sino, súmelos (Propuesto)</p>
			<form id="formulario-supDiezEjecute">
				<label for="supADiezNum">Escribe los n Números</label>
				<input type="number" id="supADiezNum" placeholder="Digite Número">
				<input type="button" value="Ejecutar" onclick="sumMultASup()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-supDiezEjecute"></div>
		</div>`
			break;
		case "ejercicio3":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 3</h3>
			<p>Múltiplos de 3 desde 1 hasta n</p>
			<form id="formulario-multiplosTres">
				<label for="multiploTresNum">Escribe los n Números</label>
				<input type="number" id="multiploTresNum" placeholder="Digite Número">
				<input type="button" value="Ejecutar" onclick="multiplosDeTres()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-multiplosTres"></div>
		</div>`
			break;
		case "ejercicio4":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 4</h3>
			<p>Múltiplos de 5 desde 1 hasta n (Propuesto)</p>
			<form id="formulario-multiplosCinco">
				<label for="multiploCincoNum">Escribe los n Números</label>
				<input type="number" id="multiploCincoNum" placeholder="Digite Número">
				<input type="button" value="Ejecutar" onclick="multiplosDeCinco()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-multiplosCinco"></div>
		</div>`
			break;
		case "ejercicio5":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 5</h3>
			<p>Sumar 1-2+3-4...</p>
			<form id="formulario-sumarTodosNum">
				<label for="sumTNumber">Escribe los n Números</label>
				<input type="number" id="sumTNumber" placeholder="Digite Número">
				<input type="button" value="Ejecutar" onclick="sumarRestarNNumeros()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-sumarTodosNum"></div>
		</div>`
			break;
		case "ejercicio6":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 6</h3>
			<p>Sumar pares desde n hasta m (Propuesto)</p>
			<form id="formulario-sumarPares">
				<label for="sumPares">Escribe un Número</label>
				<input type="number" id="sumPares" placeholder="Digite Número">
				<input type="button" value="Ejecutar" onclick="sumarPares()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-sumarPares"></div>
		</div>`
			break;
		case "ejercicio7":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 7</h3>
			<p>Numero Primo</p>
			<form id="formulario-numeroPrimo">
				<label for="numPrimo">Escribe un Número para verificar Número Primo</label>
				<input type="number" id="numPrimo" placeholder="Digite Número">
				<input type="button" value="Ejecutar" onclick="numeroPrimo()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-numeroPrimo"></div>
		</div>`
			break;
		case "ejercicio8":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 8</h3>
			<p>Factorial de un número</p>
			<form id="formulario-factorialNumero">
				<label for="numFactorial">Escribe un Número</label>
				<input type="number" id="numFactorial" placeholder="Digite Número">
				<input type="button" value="Ejecutar" onclick="factorialNumero()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-factorialNumero"></div>
		</div>`
			break;
		case "ejercicio9":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 9</h3>
			<p>Suma de Factoriales (Propuesto)</p>
			<form id="formulario-factorialNumeroSuma">
				<label for="numFactorialSuma">Escribe un Número</label>
				<input type="number" id="numFactorialSuma" placeholder="Digite Número">
				<input type="button" value="Ejecutar" onclick="factorialNumeroSuma()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-factorialNumeroSuma"></div>
		</div>`
			break;
		case "ejercicio10":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 10</h3>
			<p>Serie Fibonacci</p>
			<form id="formulario-serieFibonacci">
				<label for="numSerieFib">Escribe un Número</label>
				<input type="number" id="numSerieFib" placeholder="Digite Número">
				<input type="button" value="Ejecutar" onclick="calcularFibonacci()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-serieFibonacci">
			</div>
		</div>`
			break;
		case "ejercicio11":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 11</h3>
			<p>Hacer un programa que imprima la suma de todos los números pares que hay desde 1 hasta n, y diga cuantos números hay.</p>
			<form id="formulario-todosNumerosPares">
				<label for="inputNumerosPares">Escriba el número máximo</label>
				<input type="number" id="inputNumerosPares" placeholder="Escriba máximo de números">
				<input type="button" value="Prueba por valor" onclick="pruebaXValor(document.getElementById('inputNumerosPares'))">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-sumatoriaPares"></div>
		</div>`
			break;
		case "ejercicio12":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 12</h3>
			<p>Hacer un programa que imprima la suma de todos los números impares que hay desde n hasta m, y diga cuantos números hay (Propuesto).</p>
			<form id="formulario-todosNumerosImpares">
				<label for="inputImparesN">Escriba el número (N)</label>
				<input type="number" id="inputImparesN" placeholder="Escriba número">
				<label for="inputImparesM">Escriba el número (M)</label>
				<input type="number" id="inputImparesM" placeholder="Escriba número">
				<input type="button" value="Sumar" onclick="sumatoriaNumerosImpares()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-todosNumerosImpares"></div>
		</div>`
			break;
		case "ejercicio13":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 13</h3>
			<p>Hacer un programa que pida dos números y muestre todos los números que van desde el primero al segundo. Se debe controlar que los valores son correctos.</p>
			<form id="formulario-primeroSegundoNumeros">
				<label for="primeroInput">Escriba el primero</label>
				<input type="number" id="primeroInput" placeholder="Escriba primero">
				<label for="segundoInput">Escriba el segundo</label>
				<input type="number" id="segundoInput" placeholder="Escriba segundo">
				<input type="button" value="Sumar" onclick="primeroSegundoNumeros()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-primeroSegundoNumeros"></div>
		</div>`
			break;
		case "ejercicio14":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 14</h3>
			<p>Hacer un programa que pida dos números y sume todos los números que van desde el primero al segundo. Se debe controlar que los valores son correctos. (Propuesto).</p>
			<form id="formulario-primeroSegundoNumerosSuma">
				<label for="primeroInputSuma">Escriba el primero</label>
				<input type="number" id="primeroInputSuma" placeholder="Escriba primero">
				<label for="segundoInputSuma">Escriba el segundo</label>
				<input type="number" id="segundoInputSuma" placeholder="Escriba segundo">
				<input type="button" value="Sumar" onclick="primeroSegundoNumerosSuma()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-primeroSegundoNumerosSuma"></div>
		</div>`
			break;
		case "ejercicio15":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 15</h3>
			<p>Hacer un programa que haga un menú del tipo “desea salir (S/N)” y el programa no termine hasta que el usuario teclee “S”.</p>
			<button onclick="menuSalir()">Ejecutar menú</button>
		</div>`
			break;
		case "ejercicio16":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 16</h3>
			<p>Hacer un programa que calcule la suma de los cuadrados de los 100 primeros números. (Propuesta)</p>
			<button onclick="sumaCuadrados()">Ejecuar Suma de cuadrados</button>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-sumaCuadrados"></div>
		</div>`
			break;
		case "ejercicio17":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 17</h3>
			<p>Hacer un programa que calcule la media de números</p>
			<button onclick="mediaNumeros()">Ejecuar Suma de cuadrados</button>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-mediaNumeros"></div>
		</div>`
			break;
		case "ejercicio18":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 18</h3>
			<p>Hacer un programa que calcule la media de X números, se dejarán de solicitar números hasta que se introduzca el cero. (Propuesto)</p>
			<button onclick="mediaXNumeros()">Ejecutar peticion de números</button>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-mediaXNumeros"></div>
		</div>`
			break;
	}
}

function cambiarSeccion4(){
	const select = document.getElementById('contenidoNivel4');
    const contenido = document.getElementById('contenido');
    const seleccionada = select.value;

	switch(seleccionada){
		case "ejercicio1":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 1</h3>
			<p>Crear una función que permita calcular el cubo de un número</p>
			<form id="formulario-fnCuboNumero">
				<label for="inputNumeroCubo">Escribe el número</label>
				<input type="number" placeholder="Digita el número" id="inputNumeroCubo" min="0">
				<input type="button" value="Obtener cubo del numero" id="btn-fnCuboNumero">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-fnCuboNumero"></div>
		</div>`
			break;
		case "ejercicio2":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 2</h3>
			<p>Crear un programa que permita leer el valor correspondiente a una distancia en kilómetros y las visualice expresada en metros. (Propuesto)</p>
			<form id="formulario-fnKilometrosMetros">
				<label for="inputKilometros">Escribe los kilometros</label>
				<input type="number" placeholder="Digita los kilometros" id="inputKilometros" min="0">
				<input type="button" value="Obtener los metros" id="btn-fnKilometrosMetros">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-fnKilometrosMetros"></div>
		</div>`
			break;
		case "ejercicio3":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 3</h3>
			<p>Crear una función que reciba un número y devuelva un numero con el valor de: -1 si el número es negativo, 1 si el número es positivo o 0 si es cero.</p>
			<form id="formulario-fnValidacionNumero">
				<label for="inputValidarNum">Escribe el número</label>
				<input type="number" placeholder="Digita el número" id="inputValidarNum" min="0">
				<input type="button" value="Obtener los metros" onclick="insertarValueForNumber()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-fnValidacionNumero"></div>
		</div>`
			break;
		case "ejercicio4":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 4</h3>
			<p>Crear una función que calcule cual es el número menor de dos números enteros. (Propuesto)</p>
			<form id="formulario-fnNumMenor">
				<label for="inputNumUnoFn">Escribe el primer dígito</label>
				<input type="number" placeholder="Digita el número" id="inputNumUnoFn" min="0">
				<label for="inputNumDosFn">Escribe el segundo dígito</label>
				<input type="number" placeholder="Digita el número" id="inputNumDosFn" min="0">
				<input type="button" value="Calcular números" id="btn-validarNum">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-fnNumMenor"></div>
		</div>`
			break;
		case "ejercicio5":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 5</h3>
			<p>Facilite el ingreso de 2 números, muestre su suma, resta multiplicación, división y resto (modulo) de la división.</p>
			<form id="formulario-fnCalculadora">
				<label for="inputCalcu1">Escribe el primer dígito</label>
				<input type="number" placeholder="Digita el número para calcular(1)" id="inputCalcu1" min="0">
				<label for="inputCalcu2">Escribe el segundo dígito</label>
				<input type="number" placeholder="Digita el número para calcular(2)" id="inputCalcu2" min="0">
				<input type="button" value="Calcular números" id="btn-calculadora">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-fnCalculadora"></div>
		</div>`
			break;
		case "ejercicio6":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 6</h3>
			<p>Facilite el ingreso de tres números, muestre su respectiva suma y multiplicación. (Propuesto)</p>
			<form id="formulario-fnOperacionTresNum">
				<label for="inputCalcuMed1">Escribe el primer dígito</label>
				<input type="number" placeholder="Digita el número para calcular(1)" id="inputCalcuMed1" min="0">
				<label for="inputCalcuMed2">Escribe el segundo dígito</label>
				<input type="number" placeholder="Digita el número para calcular(2)" id="inputCalcuMed2" min="0">
				<label for="inputCalcuMed3">Escribe el tercer dígito</label>
				<input type="number" placeholder="Digita el número para calcular(3)" id="inputCalcuMed3" min="0">
				<input type="button" value="Calcular números" id="btn-calculadoraMed">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-fnOperacionTresNum"></div>
		</div>`
			break;
		case "ejercicio7":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 7</h3>
			<p>Calcular el área y el perímetro de un rectángulo dada la base y altura.</p>
			<form id="formulario-fnAreaPerimetroRect">
				<label for="inputRect1">Escribe la base del rectangulo</label>
				<input type="number" placeholder="Digita el valor(base)" id="inputRect1" min="0">
				<label for="inputRect2">Escribe la altura del rectangulo</label>
				<input type="number" placeholder="Digita el valor(altura)" id="inputRect2" min="0">
				<input type="button" value="Calcular números" id="btn-areaPerimetroRect">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-fnAreaPerimetroRect"></div>
		</div>`
			break;
		case "ejercicio8":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 8</h3>
			<p>Calcule el área de un cuadrado. (Propuesto)</p>
			<form id="formulario-fnAreaCuadrado">
				<label for="inputCua1">Escribe el lado 1</label>
				<input type="number" placeholder="Digita el lado #1" id="inputCua1" min="0">
				<label for="inputCua2">Escribe el lado 2</label>
				<input type="number" placeholder="Digita el lado #2" id="inputCua2" min="0">
				<input type="button" value="Calcular números" id="btn-areaCuadrado">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-fnAreaCuadrado"></div>
		</div>`
			break;
		case "ejercicio9":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 9</h3>
			<p>Desarrolle una Función que reciba un número y devuelva el valor 1 si es un número primo o 0 en caso contrario.</p>
			<form id="formulario-fnNumPrimo">
				<label for="inputNumPrimo">Escribe el lado 1</label>
				<input type="number" placeholder="Digita número" id="inputNumPrimo" min="0">
				<input type="button" value="Calcular números" onclick="fnNumPrimo()">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-fnNumPrimo"></div>
		</div>`
			break;
		case "ejercicio10":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 10</h3>
			<p>Desarrolle un programa que permita ingresar tres números, obtener su promedio y visualizar "Aprobado", si su promedio es mayor a 10.5, caso contrario visualizara "Mejore la nota".(Propuesto)</p>
			<form id="formulario-fnNotaFinal">
				<label for="inputNota1">Escribe la nota 1</label>
				<input type="number" placeholder="Digita nota" id="inputNota1" min="0" max="20">
				<label for="inputNota2">Escribe la nota 2</label>
				<input type="number" placeholder="Digita nota" id="inputNota2" min="0" max="20">
				<label for="inputNota3">Escribe la nota 3</label>
				<input type="number" placeholder="Digita nota" id="inputNota3" min="0" max="20">
				<input type="button" value="Calcular promedio" id="btn-notaFinalPromedio">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-fnNotaFinal"></div>
		</div>`
			break;
		case "ejercicio11":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 11</h3>
			<p>Que exprese en horas, minutos y segundos un tiempo expresado en segundos.</p>
			<form id="formulario-fnHMS">
				<label for="inputSegundos">Ingrese los segundos</label>
				<input type="number" id="inputSegundos" placeholder="Escribe los segundos">
				<input type="button" value="Expresar tiempo" id="btn-hms">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-fnHMS"></div>
		</div>`
			break;
		case "ejercicio12":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 12</h3>
			<p>Desarrolle un programa que permita ingresar un número y a través de una función diga si es par o impar. (Propuesto)</p>
			<form id="formulario-fnParOImpar">
				<label for="inputSegundosFn">Ingrese los segundos</label>
				<input type="number" id="inputSegundosFn" placeholder="Escribe los segundos">
				<input type="button" value="Calcular Par o Impar" id="btn-parImparFn">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-fnParOImpar"></div>
		</div>`
			break;
		case "ejercicio13":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 13</h3>
			<p>Desarrolle un programa del cual de un tiempo ingresado en minutos, visualizarlo por pantalla en horas, minutos y segundos.</p>
			<form id="formulario-fnMinutesHour">
				<label for="inputMinutes">Ingrese los minutos</label>
				<input type="number" id="inputMinutes" placeholder="Escribe los minutos">
				<input type="button" value="Expresar tiempo" id="btn-minutesFn">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-fnMinutesHour"></div>
		</div>`
			break;
		case "ejercicio14":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 14</h3>
			<p>Determinar e imprimir el valor absoluto de un número entero (Propuesto)</p>
			<form id="formulario-fnValorAbsoluto">
				<label for="inputNumAbsoluto">Ingrese el número</label>
				<input type="number" id="inputNumAbsoluto" placeholder="Escribe tu numero">
				<input type="button" value="Expresar valor absoluto" id="btn-absoluto">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-fnValorAbsoluto"></div>
		</div>`
			break;
		case "ejercicio15":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 15</h3>
			<p>Determinar si un número es divisible por otro e imprimir divisible, caso contrario visualizar no es divisible.</p>
			<form id="formulario-fnDivisible">
				<label for="inputNumDivisible">Ingrese el número</label>
				<input type="number" id="inputNumDivisible" placeholder="Escribe tu numero">
				<label for="inputDivisible">Divisible por</label>
				<input type="number" id="inputDivisible" placeholder="Escribe tu divisible">
				<input type="button" value="Calcular divisibilidad" id="btn-divisible">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-fnDivisible"></div>
		</div>`
			break;
		case "ejercicio16":
			contenido.innerHTML = `<div class="formulario-contenedor">
			<h3>Ejercicio 16</h3>
			<p>Desarrolle un programa que solicite tres números distintos e indique de manera visual en la pantalla cuál de ellos es el número menor ingresado. (Propuesto)</p>
			<form id="formulario-fnNumeroMenor">
				<label for="inputNumUno">Ingrese el número 1</label>
				<input type="number" id="inputNumUno" placeholder="Escribe tu numero">
				<label for="inputNumDos">Ingrese el número 2</label>
				<input type="number" id="inputNumDos" placeholder="Escribe tu numero">
				<label for="inputNumTres">Ingrese el número 3</label>
				<input type="number" id="inputNumTres" placeholder="Escribe tu numero">
				<input type="button" value="Calcular divisibilidad" id="btn-numMenor">
			</form>
			<h4 class="resultado-titulo">Resultado: </h4>
			<div id="resultado-fnNumeroMenor"></div>
		</div>`
			break;		
	}
}



