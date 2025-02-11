const countElem = document.getElementById('counter');
const plsBtn = document.getElementById('plusbtn');
const minsBtn = document.getElementById('minusbtn');

let counter = 0;

const updCounter = (value) =>{
    counter += value;
    countElem.textContent = counter;
    if(counter >= 10){
        plsBtn.setAttribute("disabled", true)
    }else{
        plsBtn.removeAttribute("disabled", false)
    }

    if(counter <= 0){
        minsBtn.setAttribute("disabled", true)
    }else{
        minsBtn.removeAttribute("disabled", false)
    }
}
plsBtn.addEventListener('click', () => {
    updCounter(1);
});

minsBtn.addEventListener('click', () => {
    updCounter(-1);
});


