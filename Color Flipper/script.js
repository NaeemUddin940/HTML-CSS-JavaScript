const body = document.getElementsByTagName("body")[0]
const random = document.getElementById("ran")

function randomColor () {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    const color = `rgb(${r},${g},${b})`
    body.style.backgroundColor = color;
}
function setColor(color){
    body.style.backgroundColor = color;
}
setColor('color')

