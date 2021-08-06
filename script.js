// Assignment Code
var generateBtn = document.querySelector("#generate");

lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] //26
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] //26
numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"] //10
symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"] //29

useLower
useUpper
useNumbers
useSymbols
howLong
generated = [];

if (generated.length < howLong) {
    generatePassword();
}else {writePassword();

};

function generatePassword() {
    if (useLower = true && generated.length < howLong){
      //generate random number between 1-26
      //push lowerCase[random] to be in generated array
    }
    if (useUpper = true && generated.length < howLong){
      //generate random number between 1-26
      //push lowerCase[random] to be in generated array
    }
    if (useNumbers = true && generated.length < howLong){
      //generate random number between 1-10
      //push lowerCase[random] to be in generated array
    }
    if (useSymbols = true && generated.length < howLong){
      //generate random number between 1-29
      //push lowerCase[random] to be in generated array

    }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
