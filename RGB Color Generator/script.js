const colorBox = document.getElementById("colorBox")
const rgbValue = document.getElementById("rgbValue")
const generateButton = document.getElementById("generateButton")
const copyButton = document.getElementById("copyButton")

const getRandomColor1 = () =>{
    const r = Math.floor(Math.random() *255);
    const g = Math.floor(Math.random() *255);
    const b = Math.floor(Math.random() *255);
    return `rgb(${r},${g},${b})`
}

const getRandomColor = () => `rgb(${[0,0,0].map(() => Math.floor(Math.random() * 255)).join(", ")})`;

generateButton.addEventListener("click", ()=>{
    const newColor = getRandomColor();
    colorBox.style.backgroundColor = newColor;
    rgbValue.value = newColor
})

copyButton.addEventListener('click', async () =>{
    try {
        await navigator.clipboard.writeText(rgbValue.value)
            copiedMessage.style.display = 'block';
        setTimeout(() =>{
             copiedMessage.style.display = 'none'}, 2000)
    }catch{
        console.error("Failed to copy text!")
    }
})