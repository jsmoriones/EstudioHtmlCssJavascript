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
    var numero = parseInt(document.getElementById("numeroInput").value);
    var etiquetaResultado = document.getElementById("etiquetaResultado");
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