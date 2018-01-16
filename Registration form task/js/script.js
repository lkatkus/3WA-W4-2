var inputUsername;
var inputPassword;
var inputName;

function validate(){
    inputUsername = document.getElementById("userUsername");
    inputPassword = document.getElementById("userPassword");
    inputName = document.getElementById("userName");

    console.log(inputUsername.value);
    console.log(inputPassword.value);
    console.log(inputName.value);

    let z = /^[a-zA-Z]{5,12}$/.test(inputUsername.value);
    console.log(z);
    if(!z){
        inputUsername.classList.toggle("error");
    }

    z = /^[a-zA-Z]{7,12}$/.test(inputPassword.value);
    console.log(z);

    z = /^[a-zA-Z]+$/.test(inputName.value);
    console.log(z);

}
