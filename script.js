// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");
console.log("click")
  //passwordText.value = password;

// ask user for password length between 8-128
 var length = Number(prompt("How long would you like your password to be?")); 
 while(isNaN(length)||length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
 
 
// ask user for uppercase
var uppercase = confirm ("Would you like to use uppercase letters?");
console.log (uppercase)

// ask user for lowercase
var lowercase = confirm ("Would you like to use lowercase letters?");

// ask user for number
var numbers = confirm ("Would you like to use numbers?");

// ask user for special character
var symbol = confirm ("Would you like to use special characters?");

while (!uppercase && !lowercase && !numbers && !symbol){
  alert ("fail");
  uppercase = confirm ("Would you like to use uppercase letters?");
  lowercase = confirm ("Would you like to use lowercase letters?");
  numbers = confirm ("Would you like to use numbers?");
  symbol = confirm ("Would you like to use special characters?");

}


//generate random password
window.addEventListener('load', function() {
  generateNewPassword();
});

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generateNewPassword(){ 
  var password = "";
  var generator = {}; 
  if (uppercase) password += rando(generator.uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM");
  if (lowercase) password += rando(generator.lowercase = "qwertyuiopasdfghjklzxcvbnm");
  if (numbers) password += rando(generator.numbers = "1234567890");
  if (symbols) password += rando(generator.symbols = "!@#$%^&*(){}[]=<>/,.");
  
  for (var i = password.length;i < length;i++) {
   password += rando(rando(generator));
   alert =  password += rando(rando(generator));
   
  }
 
  alert = (pass)
  document.getElementById("password").value= password;
  }