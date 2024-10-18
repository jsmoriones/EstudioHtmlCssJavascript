let a = new Date();
    document.body.innerHTML = "<h1> Mi primera hora: " +
        a.getHours() +
        ":" +
        a.getMinutes() +
        ":" +
        a.getSeconds() +
        "</h1>" +
        "<h1> Mi primera fecha: <br>" +
        "Dia:" +
        a.getDate() +
        "<br> Mes: 0" +
        (a.getMonth() + 1) +
        "<br> Año: " +
        a.getFullYear() +
    "</h1>";