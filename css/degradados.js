const degradedRange = document.getElementById("degradedRange")
var color1 = "#F90"
var color2 = "#212121"

function rangeDegradado(){
    const degradeX = document.getElementById("degradeX").value
    const degradeY = document.getElementById("degradeY").value
    const degradeSizeX = document.getElementById("degradeSizeX").value || "30%"
    const degradeSizeY = document.getElementById("degradeSizeY").value || "30%"

    degradedRange.style.backgroundImage = `radial-gradient(${degradeSizeX}% ${degradeSizeY}% at ${degradeX}% ${degradeY}%, ${color1}, ${color2})`
}
function rangeSize(){
    const degradeX = document.getElementById("degradeX").value
    const degradeY = document.getElementById("degradeY").value
    const degradeSizeX = document.getElementById("degradeSizeX").value || "30%"
    const degradeSizeY = document.getElementById("degradeSizeY").value || "30%"
    /*radial-gradient(18% 100% at 50% 50%, #F90, #212121)*/

    degradedRange.style.backgroundImage = `radial-gradient(${degradeSizeX}% ${degradeSizeY}% at ${degradeX}% ${degradeY}%, ${color1}, ${color2})`
}
function changeColor(event){
    const degradeX = document.getElementById("degradeX").value
    const degradeY = document.getElementById("degradeY").value
    const degradeSizeX = document.getElementById("degradeSizeX").value || "30%"
    const degradeSizeY = document.getElementById("degradeSizeY").value || "30%"
    color1 = document.getElementById("color1").value
    color2 = document.getElementById("color2").value
    degradedRange.style.backgroundImage = `radial-gradient(${degradeSizeX}% ${degradeSizeY}% at ${degradeX}% ${degradeY}%, ${color1}, ${color2})`
}

function otherChangeColor(){
    const colorsContent = document.getElementById("colorsContent")
    console.log(colorsContent.childNodes)
}

function identNumColors(){
    const colorsContent = document.getElementById("colorsContent")
    colorsContent.innerHTML = ""
    const colorSelect = document.getElementById("colorSelect").value
    for(let i = 0; i < colorSelect; i++){
        const inputColor = document.createElement("INPUT")
        inputColor.type = "color"
        inputColor.id = `color${i+1}`
        inputColor.setAttribute("onchange", "otherChangeColor()")
        colorsContent.insertAdjacentElement('afterbegin', inputColor)
    }
}

function resetearDegradade(){
    const degradeX = document.getElementById("degradeX")
    const degradeY = document.getElementById("degradeY")
    document.getElementById("degradeSizeX").value = "30"
    document.getElementById("degradeSizeY").value = "30"
    document.getElementById("color1").value = "#F90"
    document.getElementById("color2").value = "#212121"
    color1="#F90"
    color2="#212121"
    degradeX.value = "0%"
    degradeY.value = "0%"
    degradedRange.style.backgroundImage = `radial-gradient(30% 30% at 50% 50%, #F90, #212121)`
}