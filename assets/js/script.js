// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordPrompt = confirm("Would you like to make a passowrd?");
  console.log(passwordPrompt);

  if (passwordPrompt === true) {

    var lowercaseQuestion = confirm("Would you like lower case characters?");
    var upperCaseQuestion = confirm("Would you like upper case characters?");
    var specialCharactersQuestion = confirm("Would you like special characters? ")
    var numbersQuestion = confirm("Would you like numbers?");

    console.log(lowercaseQuestion, upperCaseQuestion, specialCharactersQuestion, numbersQuestion);
  } 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//need an array of characters to pull from
//need prompts for:
  //uppercase characters
  //lowercase characters
  //special chracters
  //numbers
  //length (at least 8 max 128)
  
  
  //make variable with array of characters
  //window.prompt asking for parameters
    // if (lowerCase === true) {
    //  passWord += char.toLowerCase();
    //} if (upperCase === true {
    //     password += char.toLowerCase();
    // })


