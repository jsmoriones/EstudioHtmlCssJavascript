function changeAtachment(attachment){
    const container = document.getElementById("imageContainer")
    const titulo = document.getElementById("titulo")
    const message = document.getElementById("message")

    container.style.backgroundAttachment = attachment

    switch (attachment) {
        case "scroll":
            titulo.textContent = "Efecto scroll"
            message.textContent = "fondo con contenido"
            break;
        case "local":
            titulo.textContent = "Efecto local"
            message.textContent = "Fondo fijado a contenido"
            break;
        case "fixed":
            titulo.textContent = "Efecto fixed"
            message.textContent = "fondo con contenido"
            break;
        case "inherit":
            titulo.textContent = "Efecto inherit"
            message.textContent = "fondo con contenido"
            break;
        case "initial":
            titulo.textContent = "Efecto initial"
            message.textContent = "fondo con contenido"
            break;
        case "unset":
            titulo.textContent = "Efecto unset"
            message.textContent = "fondo con contenido"
            break;
    }
}


function changeSize(size){
    const container = document.getElementById("imageContainer")
    const titulo = document.getElementById("titulo")
    const message = document.getElementById("message")

    container.style.backgroundSize = size

    switch (attachment) {
        case "contain":
            titulo.textContent += ", background-size: contain;"
            message.textContent = "fondo con contenido"
            break;
        case "cover":
            titulo.textContent += ", background-size: cover;"
            message.textContent = "Fondo fijado a contenido"
            break;
    }
}