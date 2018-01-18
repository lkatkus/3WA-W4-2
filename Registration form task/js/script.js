// VARIABLES
var input;

var inputUsername;
var inputPassword;
var inputName;
var inputZip;
var inputEmail;
var inputCountry;

// MAIN VALIDATION FUNCTION
function validate(){
    // CAPTURING INPUT VALUES
    inputUsername = document.getElementById("userUsername");
    inputPassword = document.getElementById("userPassword");
    inputName = document.getElementById("userName");
    inputZip = document.getElementById("userZip");
    inputEmail = document.getElementById("userEmail");
    inputCountry = document.getElementById("userCountry");

    console.log("============");

    // CALLING VALIDATION FUNCTION
    checkUsername(inputUsername);
    checkPassword(inputPassword);
    checkName(inputName);
    checkCountry(inputCountry);
    checkZip(inputZip);
    checkEmail(inputEmail);
    checkGender();
    checkLanguage();
}

// VALIDATION FUNCTION
function checkUsername(input){
    let checker = /^\w{5,12}$/.test(input.value); /*DOES NOT ACCEPT SYMBOLS*/
    if(!checker){
        inputUsername.classList.add("error");
        addErrorTag(input);
    }else{
        input.classList.remove("error");
        removeErrorTag(input);
    }
}

function checkPassword(input){
    let checker = /^\w{7,12}$/.test(input.value); /*DOES NOT ACCEPT SYMBOLS*/
    if(!checker){
        input.classList.add("error");
        addErrorTag(input);
    }else{
        input.classList.remove("error");
        removeErrorTag(input);
    }
}

function checkName(input){
    let checker = /^[a-z,A-Z]+$/.test(input.value);
    console.log(checker);
    if(!checker){
        input.classList.add("error");
        addErrorTag(input);
    }else{
        input.classList.remove("error");
        removeErrorTag(input);
    }
}

function checkCountry(input){
    if(input.value === ""){
        console.log("NONE")
        input.classList.add("error");
        addErrorTag(input);
    }else{
        console.log(input.value);
        input.classList.remove("error");
        removeErrorTag(input);
    }
}

function checkZip(input){
    let checker = /^\d+$/.test(input.value);
    console.log(checker);
    if(!checker){
        input.classList.add("error");
        addErrorTag(input);
    }else{
        input.classList.remove("error");
        removeErrorTag(input);
    }
}

function checkEmail(input){
    if(input.value){
        console.log("OK");
        input.classList.remove("error");
        removeErrorTag(input);
    }else{
        console.log("ERROR");
        input.classList.add("error");
        addErrorTag(input);
    }
}

function checkGender(){
    if(document.getElementById("genderMale").checked) {
        console.log("male");
        document.getElementById("genderDiv").classList.remove("error");
        removeErrorTag(document.getElementById("genderDiv"));
    }else if(document.getElementById("genderFemale").checked) {
        console.log("female");
        document.getElementById("genderDiv").classList.remove("error");
        removeErrorTag(document.getElementById("genderDiv"));
    }else{
        console.log("no gender selected");
        document.getElementById("genderDiv").classList.add("error");
        addErrorTag(document.getElementById("genderDiv"));
    }
}

function checkLanguage(){
    if(document.getElementById("langEng").checked) {
      console.log("English");
      document.getElementById("languageDiv").classList.remove("error");
      removeErrorTag(document.getElementById("languageDiv"));
    }else if(document.getElementById("langOther").checked) {
        console.log("Other");
        document.getElementById("languageDiv").classList.remove("error");
        removeErrorTag(document.getElementById("languageDiv"));
    }else{
        console.log("no language selected");
        document.getElementById("languageDiv").classList.add("error");
        addErrorTag(document.getElementById("languageDiv"));
    }

    // !!! ADDED CHECKER WHEN BOTH ARE SELECTED !!!
}

function addErrorTag(input){
    let tagGroup = document.createElement("div");
    let tagDiv = document.createElement("div");
    tagGroup.classList.add("errorTagGroup");
    tagDiv.classList.add("errorTag");
    tagDiv.textContent = "Required";
    tagGroup.appendChild(tagDiv)
    input.parentElement.appendChild(tagGroup);
}

function removeErrorTag(input){
    let tagGroup = input.parentElement.querySelector(".errorTagGroup");
    if(!tagGroup){
        console.log("NERA TAGO");
    }else{
        console.log(input);
        console.log(input.parentElement);
        console.log(tagGroup);
        input.parentElement.removeChild(tagGroup);
    }
    return; /* ERROR NOT WORKING PROPERLY */
}


// EMAIL SELECTOR
// \w*?[.-]?\w+@[\w,\[]+\:?\.?\w+?\-?\w+:*?\w+?\.?\]?(com|org|edu|solutions)?$

// prettyandsimple@example.com
// very.common@example.com
// very-common@example.com
// disposable.style.email.with+symbol@example.com
// other.email-with-dash@example.com
// fully-qualified-domain@example.com
// user.name+tag+sorting@example.com
// x@example.com
// "very.(),:;<>[]\".VERY.\"very@\\ \"very\".unusual"@strange.example.com
// example-indeed@strange-example.com
// admin@mailserver1 #!$%&'*+-/=?^_`{}|~@example.org
// "()<>[]:,;@\\\"!#$%&'-/=?^_`{}| ~.a"@example.org
// example@s.solutions
// user@localserver
// user@[2001:DB8::1]
