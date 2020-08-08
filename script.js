
var lowercaseCharset = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersCharset = "012345789";
var specialCharset = "!@#$%^&*_=+-/";

var generate = document.querySelector("#generate");

// Check to see if a characterset has been chosen
var charsetCheck = getPasswordCharset();
if (charsetCheck.length === 0) {
    alert("Error: Refresh and confirm use of at least one character set");
    return;
}

function getPasswordCharset() {
    var charset = "";
    if (inputLowercase = true) {
        charset += inputLowercase;
        console.log("Character set includes: " + charset);
    }
    
}

/*if (inputLength < 0) {
    
} else {
    alert("Error: Refresh and input a character length-vaulue between 8 and 128");
}*/


generate.addEventListener("click", function() {
    var inputLength = prompt("How long would you like your password? (8-128 characters)");
    var inputLowercase = confirm("Would you like lowercase letters in your password?");
    var inputUppercase = confirm("Would you like uppercase letters in your password?");
    var inputNumbers = confirm("Would you like numbers in your password?");
    var inputSpecial = confirm("Would you like special characters in your password?");
    var length = inputLength;
    var passwordOutput = "";

    for (var i =0; i < length; i++) {
        passwordOutput += charset.charAt(Math.floor(Math.random()*charset.length));
    }

    return passwordOutput;

});

