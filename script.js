var inputLength = prompt("How long would you like your password? (8-128 characters)");
var inputLowercase = confirm("Would you like lowercase letters in your password?");
var inputUppercase = confirm("Would you like uppercase letters in your password?");
var inputNumbers = confirm("Would you like numbers in your password?");
var inputSpecial = confirm("Would you like special characters in your password?");
var lowercaseCharset = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersCharset = "012345789";
var specialCharset = "!@#$%^&*_=+-/";

function generatePassword(event) {
    var length = inputLength;
}

document.getElementById("generate-password").addEventListener("click", generatePassword);