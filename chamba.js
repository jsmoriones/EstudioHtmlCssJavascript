let a = new Date();
    document.body.innerHTML = "<table cellspacing='0' cellpadding='10px'><tr><th>Año</th><th>Mes</th><th>Día</th><th>Hora</th><th>Minutos</th><th>Segundos</th></tr><tr><td>"+a.getFullYear()+"</td><td>0"+(a.getMonth()+1)+"</td><td>"+a.getDate()+"</td><td>"+a.getHours()+"</td><td>"+a.getMinutes()+"</td><td>"+a.getSeconds()+"</td></tr></table>";