function changeImage(style){
    const container = document.getElementById("imageContainer")
    const titulo = document.getElementById("titulo")
    const img = container.querySelector("img")
    const message = document.getElementById("message")

    container.className = 'container' +style

    switch (style) {
        case "cover":
            titulo.textContent = "imagen con cover"
            message.textContent = "propiedad Object-fit: cover"
            img.style.objectFit = "cover"
            break;
        case "contain":
            titulo.textContent = "imagen con contain"
            message.textContent = "propiedad Object-fit: contain"
            img.style.objectFit = "contain"
            break;
        case "full-width":
            titulo.textContent = "imagen con full-width"
            message.textContent = "propiedad Object-fit: full-width"
            img.style.objectFit = "100%"
            img.style.width = "100%"
            img.style.height = "auto"
            break;
        case "fixed-size":
            titulo.textContent = "imagen con fixed-size"
            message.textContent = "ancho y alto de imagen 100px sin tener encuenta el tamaño del contenedor"
            img.style.width = "100%"
            img.style.height = "auto"
            break;
        case "auto":
            titulo.textContent = "imagen con auto"
            message.textContent = "ancho y alto de imagen 100px sin tener encuenta el tamaño del contenedor"
            img.style.objectFit = "auto"
            break;
    }
}