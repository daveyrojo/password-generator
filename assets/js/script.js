// Assignment Code
var generateBtn = document.querySelector("#generate");
//Declares Global Variables To Be Used
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseLetters = "abcdefghijklmnopqrstuwxyz";
var numberCharacters = "12345678990";
var specialCharacters = "!@#$%^&*()-_{}|[]:;<>,.+=";
var passwordLength = 0; //Empty password length to check vs 8/128/NaN
var passwordArray = []; //empty array to add character varaibles for loop

// Write password to the #password input
function writePassword() {

      //variable equals the data obtained by the confirm windo
  var passwordPrompt = confirm("Would you like to make a password?"); {
    console.log(passwordPrompt);
      //variable that equals the data inputed to number field
    var lengthNum = parseInt( window.prompt("How long would you like your password? Select a number from 8 to 128."));
      //if lengthNum variable contains numbers 1-7, numbers greater than 128 or a non integer the user will be alerted that they must satisfy given parameters
    if (lengthNum < 8 || lengthNum > 128 || isNaN(lengthNum)) {
        //window will appear if conditional is satisfied at any parameter
      alert("Password must be longer than 8 characters and be no longer than 128 characters.");
        //text boss will return same text as alert
      return "Password must be longer than 8 characters and be no longer than 128 characters.";
      
      //if conditional is not satisfied ie user answers correctly the else statement will run
    } else {
        //the empty passwordLength variable has the value of lengthNum variable added to it
      passwordLength += lengthNum;
      console.log(passwordLength);
        //variable equals data inputed to confirm window
      var lowerCaseQuestion = confirm("Would you like lower case characters?");
      console.log(lowerCaseQuestion); 
   
        //variable equals data inputed to confirm window
      var upperCaseQuestion = confirm("Would you like upper case characters?");
      console.log(upperCaseQuestion);
    
        //variable equals data inputed to confirm window
      var specialCharactersQuestion = confirm("Would you like special characters? ");
      console.log(specialCharactersQuestion);

        //variable equals data inputed to confirm window
      var numbersQuestion = confirm("Would you like numbers?");
      console.log(numbersQuestion);
   
        //if above varaibles are not true execute if statement
      if (!lowerCaseQuestion && !upperCaseQuestion && !specialCharactersQuestion && !numbersQuestion) {
          //window will appear if conditional is satisfied at any parameter
        alert("You must select at least 1 set of characters.");
          //window will appear if conditional is satisfied at any parameter
        return "You must select at least 1 set of characters.";

         //if conditional is not satisfied ie user answers correctly the else statement will run
      } else {
          //password variable is an empty string so we can add data to it
        var password = "";
          
          //if variable is true passwordArray(global) has characters from lowerCaseLetters added to it
        if (lowerCaseQuestion) {
          passwordArray += lowerCaseLetters;

          //if variable is true passwordArray(global) has characters from lupperCaseLetters added to it
        }
        if (upperCaseQuestion) {
          passwordArray += upperCaseLetters;

          //if variable is true passwordArray(global) has characters from specialCharacters added to it
        }
        if (specialCharactersQuestion) {
          passwordArray += specialCharacters;
      
          //if variable is true passwordArray(global) has characters from numberCharacters added to it
        }
        if (numbersQuestion) {
          passwordArray += numberCharacters;

        }
          //show what is in the passwordArray
        console.log(passwordArray);

          //runs a loop through password variable will be correct length
        for (var i = 0; i < passwordLength; i++) {

          //num equals random indices from passwordArray
          var num = Math.floor(Math.random() * passwordArray.length);
          password += passwordArray[num];
        }

        //ends function and sends password variable to other function
        return password;
      }  
    }
  }
}

// Add event listener to generate button

//on button click run generatePassword function
generateBtn.addEventListener("click", generatePassword);

function generatePassword() {

  //(local) password equals the data writePassword function generates
  var password = writePassword();

  //passwordText variable is used to select HTML element 
  var passwordText = document.querySelector("#password");

  //html element represented by passwordText shows user the data represented by password variable
  passwordText.value = password;
}

