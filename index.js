const hoursEle=document.querySelector("#hours")
const minutesEle=document.querySelector("#minutes")
const secondsEle=document.querySelector("#seconds")

const startEle=document.querySelector("#start")
const stopEle=document.querySelector("#stop")
const resetEle=document.querySelector("#reset")

let timerId;
function handleStart(){
    timerId=setInterval(()=>{
        if(secondsEle.textContent==60){
            secondsEle.textContent='00'
            minutesEle.textContent=Number(minutesEle.textContent)+1
            if(minutesEle.textContent==60){
                minutesEle.textContent='00'
                hoursEle.textContent=Number(hoursEle.textContent)+1
            }
        }
        secondsEle.textContent=Number(secondsEle.textContent)+1
    },1000)
    startEle.disabled=true
}

function handleStop(){
    clearInterval(timerId)
    startEle.disabled=false
}
function handleReset(){
    clearInterval(timerId)
    hoursEle.textContent='00'
    minutesEle.textContent='00'
    secondsEle.textContent='00'
    startEle.disabled=false
}

startEle.addEventListener('click',handleStart)
stopEle.addEventListener('click',handleStop)
resetEle.addEventListener('click',handleReset)
