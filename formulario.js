
function muestraDatos(){
    let usuario = document.getElementById("txtUsuario").value;
    let password = document.getElementById("txtContrasenia").value;
    let email = document.getElementById("txtEmail").value;
    
    alert(`Mi usuario: ${usuario}\nMi contraseña: ${password}\nMi email: ${email}`);
}