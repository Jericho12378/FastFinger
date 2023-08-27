let currentProgress = document.querySelector(".counter");
let count = 0;
let timer = document.querySelector(".timer");
let btn = document.querySelector(".btn")
let modal = document.querySelector(".modal")
let modalWrapper = document.querySelector(".modal__wrapper")
let overlay = document.querySelector(".overlay")
let score = document.querySelector(".score")
let newHighestScore = document.querySelector(".newHighScore")
let secCounter
let seconds
let intervalId
let checker = false
let timeCategory
let highest10s = localStorage.getItem('10s') 
let highest20s = localStorage.getItem('20s')
let highest30s = localStorage.getItem('30s')


function buttonCLicked(){
    count++
    currentProgress.innerHTML = count
    currentProgress.style.fontSize = count+24+"px"
    if(!checker){
        checker = true
        startTimer()
    }
}

function countdown(time){
    if ( !localStorage.getItem('10s')){
        localStorage.setItem('10s', '')
    }
    if ( !localStorage.getItem('20s')){
        localStorage.setItem('20s', '')
    }  
    if ( !localStorage.getItem('30s')){
        localStorage.setItem('30s', '')
    }  
    timeCategory = time
    btn.disabled = false
    btn.style.cursor = "pointer"
    seconds = time
    timer.innerHTML = "Timer: " + time +"s"
    secCounter = time + "00";
    console.log(secCounter);
}

function startTimer() {
    clearInterval(intervalId); // Clear any existing interval
    timeCountdown(); // Call once immediately
    intervalId = setInterval(timeCountdown, 1000); // Set interval to run every 1 second
}

function timeCountdown(){
       console.log(seconds)
        if (seconds >= 0){
            timer.innerHTML = "Timer: " + seconds +"s"
            seconds--
        }else{
            clearInterval(intervalId)
            btn.disabled = true;
            showModal();
        }
    }

function showModal(){
    modalWrapper.style.display = "block"
    overlay.style.display = "block"
    score.textContent =  count
    updateLocalStorage()
    
}
function refresh(){
    location.reload()
}

function updateLocalStorage(){
    if (timeCategory == 10){
        if (count >= highest10s){
            localStorage.setItem('10s', count)
            newHighestScore.style.display = 'block'
        }
    }
    if (timeCategory == 20){
        if (count >= highest20s){
            localStorage.setItem('20s', count)
            newHighestScore.style.display = 'block'
        }
    }
    if (timeCategory == 30){
        if (count >= highest30s){
            localStorage.setItem('30s', count)
            newHighestScore.style.display = 'block'
        }
    }
}