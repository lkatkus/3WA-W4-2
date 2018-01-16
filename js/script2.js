function start(){
    // FUNCTION BUTTONS
    var startBtn = document.getElementById("start");
    var stateBtn = document.getElementById("state");
    var resetBtn = document.getElementById("reset");
    var fasterBtn = document.getElementById("faster");
    var slowerBtn = document.getElementById("slower");
    var btns = document.querySelectorAll(".btn"); /* ALL FUNCTION BUTTONS */

    // TIMER DISPLAY
    var hPlaceholder = document.getElementById("hPlaceholder");
    var minPlaceholder = document.getElementById("minPlaceholder");
    var secPlaceholder = document.getElementById("secPlaceholder");

    var myTimer = null; /* TIMER ID PLACEHOLDER */ /*CAN BE USED TO CHECK IF TIMER HAS STARTED */
    var timerStarted = false;
    var timerH = 0;
    var timerMin = 0;
    var timerS = 0;
    var interval = 1000;

    startBtn.addEventListener("click", startTimer);

    function startTimer(){
        console.log(myTimer);
        console.log(timerStarted);
        startBtn.removeEventListener("click", startTimer);

        // FIRST START
        if(myTimer == null & !timerStarted){
            timerStarted = true;
            console.log("FIRST START");
            console.log(myTimer);
            console.log(timerStarted);
            myTimer = setInterval(addSec,interval);

            btns.forEach(function(button){
                button.classList.toggle("inactive");
            })

        }else{
            console.log("already started");
            console.log(myTimer);
            console.log(timerStarted);
            myTimer = setInterval(addSec,interval);
        }

        // EVENT HANDLERS FOR NEW ACTIVE BUTTONS
        stateBtn.addEventListener("click", stateTimer);
        resetBtn.addEventListener("click", resetTimer);
        fasterBtn.addEventListener("click", fasterTimer);
        slowerBtn.addEventListener("click", slowerTimer);
    }

    function stateTimer(){
        if(myTimer){
            clearInterval(myTimer);
            console.log("PAUSE");
            console.log(myTimer);
            console.log(timerStarted);
            myTimer = null; /* TIMER HAS STOPPED SO TIMER HAS NO ID */
            fasterBtn.classList.add("inactive");
            slowerBtn.classList.add("inactive");
            stateBtn.textContent = "CONTINUE";
        }else{
            // fasterBtn.addEventListener("click", fasterTimer);
            fasterBtn.classList.remove("inactive");
            console.log("CONTINUE");
            console.log(myTimer);
            console.log(timerStarted);
            // slowerBtn.addEventListener("click", slowerTimer);
            slowerBtn.classList.remove("inactive");
            stateBtn.textContent = "PAUSE";
            startTimer();
        }
    }

    function resetTimer(){
        clearInterval(myTimer);
        // RESETING VALUES
        timerH = 0;
        timerMin = 0;
        timerS = 0;
        interval = 1000;
        myTimer = null;
        timerStarted = false;
        stateBtn.textContent = "PAUSE";
        secPlaceholder.textContent = "00";
        minPlaceholder.textContent = "00";
        hPlaceholder.textContent = "00";

        /* EVENT HANDLERS */
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
        if(myTimer){
            console.log("faster");
            if(interval > 1){ /* to prevent from reaching 0 */
                interval = interval / 2;
            }else{
                interval = interval;
            }
            console.log(interval);
            clearInterval(myTimer);
            myTimer = setInterval(addSec,interval); /*RESTARTING TIMER WITH NEW SPEED */
        }else{
            console.log("faster btn - timer not running");
        }
    }

    function slowerTimer(){
        if(myTimer){
            console.log("slower");
            if(interval < 6000000){ /* to prevent from reaching 0 */
                interval = interval * 2;
            }else{
                interval = interval;
            }
            console.log(interval);
            clearInterval(myTimer);
            myTimer = setInterval(addSec,interval); /*RESTARTING TIMER WITH NEW SPEED */
        }else{
            console.log("slower btn - timer not running");
        }
    }

    function addSec(){
        if(timerS<=59){
            let str = "0" + timerS;
            str = str.substring((str.length-2),str.length);
            secPlaceholder.textContent = str;
        }else{
            timerS = 0;
            let str = "0" + timerS;
            str = str.substring((str.length-2),str.length);
            secPlaceholder.textContent = str;
            addMin();
        }
        timerS +=1;
    }

    function addMin(){
        timerMin +=1;
        if(timerMin<60){
            let str = "0" + timerMin;
            str = str.substring((str.length-2),str.length);
            minPlaceholder.textContent = str;
        }else{
            timerMin = 0;
            let str = "0" + timerMin;
            str = str.substring((str.length-2),str.length);
            minPlaceholder.textContent = str;
            addHour();
        }
    }

    function addHour(){
        timerH +=1;
        if(timerH<24){
            let str = "0" + timerH;
            str = str.substring((str.length-2),str.length);
            hPlaceholder.textContent = str;
        }else{
            timerH = 0;
            let str = "0" + timerH;
            str = str.substring((str.length-2),str.length);
            hPlaceholder.textContent = str;
        }
    }
}
