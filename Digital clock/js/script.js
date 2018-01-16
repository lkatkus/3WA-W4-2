// ========= WITH EVENT LISTENERS ASSIGNED IN JS =========

function start(){

    // VARIABLES
    var btn = document.getElementById("btn");
    var content = document.getElementById("content");
    var myTimer; /* for capturing timer id, which is returned by setTimeout */

    // EVENT LISTENERS
    btn.addEventListener("mouseover", mouseIn); /* event listeners can be added in HTML */
    btn.addEventListener("mouseout", mouseOut);

    // FUNCTIONS
    function mouseIn(){
        content.textContent = "IN";
        myTimer = setTimeout(mouseHover, 1000);
    }

    function mouseOut(){
        timerOff();
        content.textContent = "OUT";
    }

    function mouseHover(){
        content.textContent = "HOVER";
    }

    function timerOff(){
        clearTimeout(myTimer);
    }
}


// // ========= WITH EVENT LISTENERS IN HTML =========
//
// var myTimer; /* for capturing timer id, which is returned by setTimeout */
//
// function mouseIn(){
//     content.textContent = "IN";
//     myTimer = setTimeout(mouseHover, 1000);
// }
//
// function mouseOut(){
//     timerOff();
//     content.textContent = "OUT";
// }
//
// function mouseHover(){
//     content.textContent = "HOVER";
// }
//
// function timerOff(){
//     clearTimeout(myTimer);
// }
