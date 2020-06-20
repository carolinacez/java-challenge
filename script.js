// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var numberSymbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialSymbols = ['@', '%','+','\\','/',"'", '!', '#','$','^','?',':',',','(',')','{','}','[',']','~','-','_','.'];
var upperCasedLetters = [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCasedLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w', 'x','y','z'];
 
 
//this is going to generate a random character
function randomCharGenerator (allArrays) {
//allarrays.length is the length of the array chosen, then turned into a random integer   
  var randomIndex = Math.floor(Math.random() * allArrays.length);
//allarrays[randomIndex] specifies the random character chosen from the chosen array 
  var randomCharacter = allArrays[randomIndex];
// the user will see the chosen random character  
return randomCharacter;
}

//This will determine the length of the password 
function passwordStructure() {
//This will ask the user to chose a number between 8 and 128   
var passwordLength = window.prompt("Please enter desired length of password. Must be between 8 and 128 characters.");
// This turns the users pw length choise into a number  
var pwLength = parseInt(passwordLength);
// if the used chooses a # between 8 - 128 it will be true   
if (pwLength >= 8 && pwLength <= 128) {
    window.alert("Yay! You chose " + pwLength + ". ");
    return pwLength;
  }
  else {
    window.alert("Please choose a number betwee 8 and 128.");
    console.log(pwLength);
    return -1;
  }
}
//this funtion allows us to add different variables together to create the users temp password 
function lastStep(emptyPlaceholder, randomCharArray) {
    let tempPassword = emptyPlaceholder + randomCharArray;
    return tempPassword;
}
 
 
// This function uses "if" "else" statament to determine the temp password.
function generatePassword() {
  
 // Variables for password options 
  var upperCharChoice;
  var lowerCharChoice;
  var specialCharChoice;
  var numberCharChoice;

  // This variable stores the length from the passwordStructure (the length the user chose for pw).
  var chosenLength = passwordStructure();
  
  // Gives tou a boolean value to determine "true" or "false" to help w/ the "if" "else" statements below 
  upperCharChoice = window.confirm("Do you want to include uppercase characters?");
  lowerCharChoice = window.confirm("Do you want to include lowercase characters?");
  specialCharChoice = window.confirm("Do you want to include special characters?");
  numberCharChoice = window.confirm("Do you want to include numbers?");
 
  //The user chooses the elements for their pw. 
  //chosenLength must me greater than 0 and user must choose at least one of these elements 
  if (chosenLength > 0 && (upperCharChoice || lowerCharChoice || specialCharChoice || numberCharChoice)) {
    //we use this emptyarray to hold the arrays of users choices
    let emptyArray = []; 
    if (upperCharChoice) {
      //whatever was chosen by the user is placed inside the emptyarray   
      emptyArray = emptyArray.concat(upperCasedLetters);
      console.log(emptyArray);
    }
    if (lowerCharChoice) {
      emptyArray = emptyArray.concat(lowerCasedLetters);
      
    }
    if (specialCharChoice) {
      emptyArray = emptyArray.concat(specialSymbols);
      
    }
    if (numberCharChoice) {
      emptyArray = emptyArray.concat(numberSymbols);
      
    }
    //this is a empty pw placeholder, where the random characters are added 
    let pwPlaceholder = ""; 
    //this will loop as long as i is less than the choselength (what the user chose as their desired pw length)
    for (var i = 0; i < chosenLength; i++) {
    //randomCharGenerator(emptyarray) grabs the random integers and adds it to the pwPlaceholder to generate 
    // a new password for pwPlaceholder, which is the users temp password 
    pwPlaceholder = lastStep(pwPlaceholder, randomCharGenerator(emptyArray));
    }
    return pwPlaceholder;
  }
  else {
    return "";
  }
 
}

  
 

