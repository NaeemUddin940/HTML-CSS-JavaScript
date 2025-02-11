const startBtn = document.getElementById('start-Btn');
const stopBtn = document.getElementById("stop-Btn");
const timer = document.getElementById("timer");




function newTime(){
    setInterval(() =>{
        timer.innerHTML = newTime(minute);
    },1000);
    
}

startBtn.addEventListener("click", () =>{
    const timeleft = 90;
    newTime(timeleft);
})
stopBtn.addEventListener("click", () =>{
    newTime();
})