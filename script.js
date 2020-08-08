var generate = document.querySelector("#generate");
var textArea = document.querySelector("#textarea");

var lowercaseCharset = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersCharset = "012345789";
var specialCharset = "!@#$%^&*_=+-/";

var lowercaseCharset = "abcdefghijklmnopqrstuvwxyz"; 
var uppercaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersCharset = "012345789";
var specialCharset = "!@#$%^&*_=+-/";

var charset = "";
var inputLength = "";
var inputLowercase = false;
var inputUppercase = false;
var inputNumbers = false;
var inputSpecial = false;

/*if (inputLength < 0) {
    
} else {
    alert("Error: Refresh and input a character length-vaulue between 8 and 128");
}*/


generate.addEventListener("click", function() {
    inputLength = prompt("How long would you like your password? (8-128 characters)");
    inputLowercase = confirm("Would you like lowercase letters in your password?");
    inputUppercase = confirm("Would you like uppercase letters in your password?");
    inputNumbers = confirm("Would you like numbers in your password?");
    inputSpecial = confirm("Would you like special characters in your password?");

    console.log(inputLength);

    getPasswordCharset();
    console.log("Character set includes: " + charset);
    generatePassword();
});

function getPasswordCharset() {
    if (inputLowercase = true) {
        charset += lowercaseCharset;
    }
    if (inputUppercase = true) {
        charset += uppercaseCharset;
    }

    if (inputNumbers = true) {
        charset += numbersCharset;
    }

    if (inputSpecial = true) {
        charset += specialCharset;
    }
}


function generatePassword() {
    var length = inputLength;
    var passwordOutput = "";

    for (var i = 0; i < length; i++) {
        passwordOutput += charset.charAt(Math.floor(Math.random()*charset.length));
    }
    
    textArea.textContent = passwordOutput;
}


/*// Check to see if a characterset has been chosen
var charsetCheck = getPasswordCharset();
if (charsetCheck.length === 0) {
    alert("Error: Refresh and confirm use of at least one character set");
    return;
}*/

