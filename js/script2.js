function start(){
    var startBtn = document.getElementById("start");
    var stateBtn = document.getElementById("state");
    var resetBtn = document.getElementById("reset");
    var fasterBtn = document.getElementById("faster");
    var slowerBtn = document.getElementById("slower");

    var btns = document.querySelectorAll(".btn");

    var hPlaceholder = document.getElementById("hPlaceholder");
    var minPlaceholder = document.getElementById("minPlaceholder");
    var secPlaceholder = document.getElementById("secPlaceholder");

    var myTimer;
    var myTimerState;
    var timerStarted = false;

    var timerH = 0;
    var timerMin = 0;
    var timerS = 0;
    var interval = 1000;

    startBtn.addEventListener("click", startTimer);

    function startTimer(){
        console.log("start");
        myTimerState = true;
        myTimer = setInterval(addSec,interval);

        startBtn.removeEventListener("click", startTimer);
        stateBtn.addEventListener("click", stateTimer);
        resetBtn.addEventListener("click", resetTimer);
        fasterBtn.addEventListener("click", fasterTimer);
        slowerBtn.addEventListener("click", slowerTimer);

        if(!timerStarted){
            btns.forEach(function(button){
                button.classList.toggle("inactive");
                timerStarted = true;
            })
        }
    }

    function stateTimer(){
        console.log("state");
        if(myTimerState === true){
            clearInterval(myTimer);
            myTimerState = false;
            fasterBtn.removeEventListener("click", fasterTimer);
            fasterBtn.classList.add("inactive");
            slowerBtn.removeEventListener("click", slowerTimer);
            slowerBtn.classList.add("inactive");
            stateBtn.textContent = "CONTINUE";
        }else{
            myTimerState = true;
            fasterBtn.addEventListener("click", fasterTimer);
            fasterBtn.classList.remove("inactive");
            slowerBtn.addEventListener("click", slowerTimer);
            slowerBtn.classList.remove("inactive");
            stateBtn.textContent = "PAUSE";
            startTimer();
        }
    }

    function resetTimer(){
        timerH = 0;
        timerMin = 0;
        timerS = 0;
        interval = 1000;
        timerStarted = false;
        clearInterval(myTimer);
        stateBtn.textContent = "PAUSE";
        secPlaceholder.textContent = timerS;
        minPlaceholder.textContent = timerMin;
        hPlaceholder.textContent = timerH;

        startBtn.addEventListener("click", startTimer);
        stateBtn.removeEventListener("click", stateTimer);
        resetBtn.removeEventListener("click", resetTimer);
        fasterBtn.removeEventListener("click", fasterTimer);
        slowerBtn.removeEventListener("click", slowerTimer);

        /* COLORING BUTTONS */
        if(!timerStarted){
            btns.forEach(function(button){
                button.classList.add("inactive");
                timerStarted = false;
            })
            startBtn.classList.remove("inactive");
        }
    }

    function fasterTimer(){
        console.log("faster");
        if(interval > 1){ /* to prevent from reaching 0 */
            interval = interval / 2;
        }else{
            interval = interval;
        }
        console.log(interval);
        clearInterval(myTimer);
        myTimer = setInterval(addSec,interval);
    }

    function slowerTimer(){
        console.log("slower");
        if(interval < 600000){
            interval = interval * 2;
        }else{
            interval = interval;
            console.log("TIME HAS STOPPED!")
        }
        console.log(interval);
        clearInterval(myTimer);
        myTimer = setInterval(addSec,interval);
    }

    function addSec(){
        timerS +=1;
        if(timerS<59){
            secPlaceholder.textContent = timerS;
        }else{
            addMin();
            timerS = 0;
        }
    }

    function addMin(){
        timerMin +=1;
        if(timerMin<59){
            minPlaceholder.textContent = timerMin;
        }else{
            addHour();
            timerMin = 0;
        }
    }

    function addHour(){
        timerH +=1;
        if(timerH<24){
            hPlaceholder.textContent = timerH;
        }else{
            timerH = 0;
        }
    }
}
