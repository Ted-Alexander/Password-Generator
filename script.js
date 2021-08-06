// Assignment Code
var generateBtn = document.querySelector("#generate");

lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] //26
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] //26
numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"] //10
symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"] //29

useLower = false;
useUpper = false;
useNumbers = false;
useSymbols = false;
lastUsed = "Z" // prevents repeats
generated = []; //password goes here


function generatePassword(){
    var howLong = prompt("How many characters would you like your password to contain?");
      while (howLong < 8 || howLong > 127){
        alert("Password length must be between 8-128 characters Try again");
        var howLong = prompt(
          "How many characters would you like your password to contain?"
        );
      }
     
      alert(`Your password will have ${howLong} characters`);
      
      useSymbols = confirm(
        "Click OK to confirm if you would like to include special characters"
      );
      useNumbers = confirm(
        "Click OK to confirm if you would like to include numeric characters"
      );
      useLower = confirm(
        "Click OK to confirm if you would like to include lowercase characters"
      );
      useUpper = confirm(
        "Click OK to confirm if you would like to include uppercase characters"
      );

      function pickCharacters() {
        if (useLower = true && generated.length < howLong && lastUsed != "L"){
          pickLower = Math.floor(Math.random() * lowerCase.length); //generate random number between 1-26
          generated.push(lowerCase[pickLower]) // to be in generated array
          lastUsed = "L" //prevent repeats
        }
        else if (useUpper = true && generated.length < howLong && lastUsed != "U"){
          pickUpper = Math.floor(Math.random() * upperCase.length);  //generate random number between 1-26
          generated.push(upperCase[pickUpper])// to be in generated array
          lastUsed = "U"
        }
        else if (useNumbers = true && generated.length < howLong && lastUsed != "N"){
          pickNumber = Math.floor(Math.random() * lowerCase.length);  //generate random number between 1-10
          generated.push(numbers[pickNumber]) // to be in generated array
          lastUsed = "N"
        }
        else if (useSymbols = true && generated.length < howLong && lastUsed != "S"){
          pickSymbol = Math.floor(Math.random() * lowerCase.length);   //generate random number between 1-29
          generated.push(symbols[pickSymbol]) // to be in generated array
          lastUsed = "S"
    
        }
        longEnough();
    }
        function longEnough(){
          if (generated.length < howLong) {
            pickCharacters();
        }else {writePassword();
}




// function longEnough(){
//   if (generated.length < howLong) {
//     pickCharacters();
// }else {writePassword();

};
}


// function pickCharacters() {
//     if (useLower = true && generated.length < howLong){
//       pickLower = Math.floor(Math.random() * lowerCase.length); //generate random number between 1-26
//       generated.push(lowerCase[pickLower]) // to be in generated array
//     }
//     if (useUpper = true && generated.length < howLong){
//       pickUpper = Math.floor(Math.random() * upperCase.length);  //generate random number between 1-26
//       generated.push(upperCase[pickUpper])// to be in generated array
//     }
//     if (useNumbers = true && generated.length < howLong){
//       pickNumber = Math.floor(Math.random() * lowerCase.length);  //generate random number between 1-10
//       generated.push(numbers[pickNumber]) // to be in generated array
//     }
//     if (useSymbols = true && generated.length < howLong){
//       pickSymbol = Math.floor(Math.random() * lowerCase.length);   //generate random number between 1-29
//       generated.push(symbols[pickSymbol]) // to be in generated array

//     }
//     longEnough();
// }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
