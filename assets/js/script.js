// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseLetters = "abcdefghijklmnopqrstuwxyz";
var numberCharacters = "12345678990";
var specialCharacters = "!@#$%^&*()-_{}|[]:;<>,.+=";

// Write password to the #password input
function writePassword() {

  var passwordLength = 0;
  var passwordArray = [];

  var passwordPrompt = confirm("Would you like to make a password?"); {
    console.log(passwordPrompt);

    var lengthNum = parseInt( window.prompt("How long would you like your password? Select a number from 8 to 128."));

    if (lengthNum < 8 || lengthNum > 128 || isNaN(lengthNum)) {
      alert("Password must be longer than 8 characters and be no longer than 128 characters.");
      return "Password must be longer than 8 characters and be no longer than 128 characters.";

    } else {

      passwordLength += lengthNum;
      console.log(passwordLength);

      var lowerCaseQuestion = confirm("Would you like lower case characters?");
      console.log(lowerCaseQuestion);

      var upperCaseQuestion = confirm("Would you like upper case characters?");
      console.log(upperCaseQuestion);

      var specialCharactersQuestion = confirm("Would you like special characters? ");
      console.log(specialCharactersQuestion);

      var numbersQuestion = confirm("Would you like numbers?");
      console.log(numbersQuestion);

      if (!lowerCaseQuestion && !upperCaseQuestion && !specialCharactersQuestion && !numbersQuestion) {

        alert("You must select at least 1 set of characters.");
        return "You must select at least 1 set of characters.";

      } else {
        
        var password = "";

        if (lowerCaseQuestion) {
          passwordArray += lowerCaseLetters;

        }
        if (upperCaseQuestion) {
          passwordArray += upperCaseLetters;

        }
        if (specialCharactersQuestion) {
          passwordArray += specialCharacters;

        }
        if (numbersQuestion) {
          passwordArray += numberCharacters;
          
        }
          console.log(passwordArray);

        for (var i = 0; i < passwordLength; i++) {
          var num = Math.floor(Math.random() * passwordArray.length);
          password += passwordArray[num];
        }
        return password;
      }  
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

function generatePassword() {

  var password = writePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

