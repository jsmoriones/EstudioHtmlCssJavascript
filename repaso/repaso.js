function inicioSesion(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    /*alert(`
    Usuario: ${username}
    Contraseña: ${password}
    `);*/
    //if(username=="juan"){
    if(username=="juan" && password == "juan123"){
        //alert(`Bienvenido!!! ${username}`);
        document.getElementById("lblResultado").innerHTML = `<b>¡Bienvenido!</b><br/>
        Tu nombre de usuario es: <u>${username}</u><br/>
        Tu contraseña de usuario es: <u>${password}</u>
        `;
    }else{
        //alert(`Usuario incorrecto, el usuario ${username} no esta registrado`);
        document.getElementById("lblResultado").innerHTML = "<h1>Los datos son incorrectos</h1>";
    }
}

function parOImpar(){
    let paroimpar = document.getElementById("paroimpar").value;
    let res = 5;
    if(paroimpar % 2 == 0){
        //alert("El número "+paroimpar+" es PAR");
        document.getElementById("lblResultado").innerHTML = "El número "+paroimpar+" es PAR";
        res += 10 + "";
        alert(res)
    }else{
        //alert("El número "+paroimpar+" es IMPAR");
        document.getElementById("lblResultado").innerHTML = "El número "+paroimpar+" es IMPAR";
    }
}

function numeros(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = document.getElementById("num3").value;
    let num4 = document.getElementById("num4").value;
    let mayor;
    let resultado;

    if(num1 > num2 && num1 > num3 && num1 > num4){
        mayor = num1;
    }else if(num2 > num1 && num2 > num3 && num2 > num4){
        mayor = num2;
    }else if(num3 > num1 && num3 > num2 && num3 > num4){
        mayor = num3;
    }else if(num4 > num1 && num4 > num2 && num4 > num3){
        mayor = num4;
    }
    
    
    if(mayor == num1){
        resultado = mayor;
        if(num2 > num3 && num2 > num4){
            resultado += " "+num2;
            if(num3 > num4){
                resultado += " "+num3+" "+num4;    
            }else{
                resultado += " "+num4+" "+num3;
            }
        }
        if(num3 > num2 && num3 > num4){
            resultado += " "+num3;
            if(num2 > num4){
                resultado += " "+num2+" "+num4;    
            }else{
                resultado += " "+num4+" "+num2;
            }
        }
        if(num4 > num2 && num4 > num3){
            resultado += " "+num4;
            if(num2 > num3){
                resultado += " "+num2+" "+num3;    
            }else{
                resultado += " "+num3+" "+num2;
            }
        }
        alert(resultado)
        //document.getElementById("lblResultado").innerHTML = resultado;
    }

    /*if(mayor == num2){
        resultado = mayor;
        if(num1 > num3){
            resultado += " "+num1+" "+num3;
        }else if(num3 > num1){
            resultado += " "+num3+" "+num1;
        }
        document.getElementById("lblResultado").innerHTML = resultado;
    }

    if(mayor == num3){
        resultado = mayor;
        if(num1 > num2){
            resultado += " "+num1+" "+num2;
        }else if(num2 > num1){
            resultado += " "+num2+" "+num1;
        }
        document.getElementById("lblResultado").innerHTML = resultado;
    }*/
}


function numerosRider(){
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let n3 = document.getElementById("num3").value;
    let n4 = document.getElementById("num4").value;
    let n5 = document.getElementById("num5").value;
    
    // Ordenar los números utilizando condicionales if anidados
    if (n1 > n2) {
        var temp = n1;
        n1 = n2;
        n2 = temp;
    }
    if (n1 > n3) {
        var temp = n1;
        n1 = n3;
        n3 = temp;
    }
    if (n1 > n4) {
        var temp = n1;
        n1 = n4;
        n4 = temp;
    }
    if (n1 > n5) {
        var temp = n1;
        n1 = n5;
        n5 = temp;
    }

    if (n2 > n3) {
        var temp = n2;
        n2 = n3;
        n3 = temp;
    }
    if (n2 > n4) {
        var temp = n2;
        n2 = n4;
        n4 = temp;
    }
    if (n2 > n5) {
        var temp = n2;
        n2 = n5;
        n5 = temp;
    }

    if (n3 > n4) {
        var temp = n3;
        n3 = n4;
        n4 = temp;
    }
    if (n3 > n5) {
        var temp = n3;
        n3 = n5;
        n5 = temp;
    }
    
    if (n4 > n5) {
        var temp = n4;
        n4 = n5;
        n5 = temp;
    }

    alert("Los números ordenados de menor a mayor son: " + n1 + ", " + n2 + ", " + n3 + ", " + n4 + ", " + n5)
}