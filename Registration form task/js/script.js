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
