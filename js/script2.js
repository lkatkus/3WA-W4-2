function start(){
    var startBtn = document.getElementById("start");
    var stateBtn = document.getElementById("state");
    var resetBtn = document.getElementById("reset");
    var fasterBtn = document.getElementById("faster");
    var slowerBtn = document.getElementById("slower");

    var hPlaceholder = document.getElementById("hPlaceholder");
    var minPlaceholder = document.getElementById("minPlaceholder");
    var secPlaceholder = document.getElementById("secPlaceholder");

    var myTimer;
    var myTimerState;

    var timerH = 0;
    var timerMin = 0;
    var timerS = 0;
    var interval = 1000;

    startBtn.addEventListener("click", startTimer);

    function startTimer(){
        console.log("start");
        myTimerState = true;
        myTimer = setInterval(addSec,interval);

        stateBtn.addEventListener("click", stateTimer);
        resetBtn.addEventListener("click", resetTimer);
        fasterBtn.addEventListener("click", fasterTimer);
        slowerBtn.addEventListener("click", slowerTimer);
    }

    function stateTimer(){
        console.log("state");
        if(myTimerState === true){
            clearInterval(myTimer);
            myTimerState = false;
            stateBtn.textContent = "CONTINUE";
        }else{
            stateBtn.textContent = "PAUSE";
            myTimerState = true;
            startTimer();
        }
    }

    function resetTimer(){
        timerH = 0;
        timerMin = 0;
        timerS = 0;
        interval = 1000;
        clearInterval(myTimer);
        stateBtn.textContent = "PAUSE";
        secPlaceholder.textContent = timerS;
        minPlaceholder.textContent = timerMin;
        hPlaceholder.textContent = timerH;
    }

    function fasterTimer(){
        console.log("faster");
        if(interval > 1){
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
        interval = interval * 2;
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
