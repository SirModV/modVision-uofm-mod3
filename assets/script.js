// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "1234567890";
var special =  "!@#()_+~;<,.?`|}{[]?$%^&*>:_= "; 



// Write password to the #password input 
// Function to genertate password
function generatePassword(){
  
  var passwordcriteria = ""
  var password = ""
// Validate the password lenth
  var pwlength = prompt("Enter the number of characters for the password (8-128)");
  while (pwlength < 8 || pwlength > 128){
    alert("Choose a nunber between 8 and 128");
    pwlength = prompt("Enter the number of characters for the password (8-128)");
  }

  var upperconfirm = confirm("Would you like uppercase");
  var lowerconfirm = confirm("Would you like lowercase");
  var numberconfirm = confirm("Add numbers?");
  var specialconfirm = confirm("Add special characters?");

  while (!upperconfirm && !lowerconfirm && !numberconfirm && !specialconfirm){
    alert("Please pick at least one of the options")

     upperconfirm = confirm("Would you like uppercase");
     lowerconfirm = confirm("Would you like lowercase");
     numberconfirm = confirm("Add numbers?");
     specialconfirm = confirm("Add special characters?");
  
  }

  if (upperconfirm) {
    passwordcriteria += uppercase
  }
  if (lowerconfirm) {
    passwordcriteria += lowercase
  }  
  if (numberconfirm) {
    passwordcriteria += number
  }  
  if (specialconfirm) {
    passwordcriteria += special
  }

  for (var i = 0; i < pwlength; i++){
    var randomIndex = Math.floor(Math.random() * passwordcriteria.length);
    var randomChar = passwordcriteria[randomIndex];
    password += randomChar;
    console.log (password)
  }
  return password



}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

