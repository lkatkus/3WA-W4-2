var inputUsername;
var inputPassword;
var inputName;

function validate(){
    inputUsername = document.getElementById("userUsername");
    inputPassword = document.getElementById("userPassword");
    inputName = document.getElementById("userName");
    inputZip = document.getElementById("userZip");

    checkUsername(inputUsername);
    checkPassword(inputPassword);
    checkName(inputName);
    checkZip(inputZip);

}


function checkUsername(input){
    let checker = /^\w{5,12}$/.test(input.value);
    console.log(checker);
    if(!checker){
        inputUsername.classList.add("error");
    }else{
        input.classList.remove("error");
    }
}

function checkPassword(input){
    let checker = /^\w{7,12}$/.test(input.value);
    console.log(checker);
    if(!checker){
        input.classList.add("error");
    }else{
        input.classList.remove("error");
    }
}

function checkName(input){
    let checker = /^\w+$/.test(input.value);
    console.log(checker);
    if(!checker){
        input.classList.add("error");
    }else{
        input.classList.remove("error");
    }
}

function checkZip(input){
    let checker = /^\d+$/.test(input.value);
    console.log(checker);
    if(!checker){
        input.classList.add("error");
    }else{
        input.classList.remove("error");
    }
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
