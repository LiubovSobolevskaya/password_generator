// Assignment Code
var generateBtn = document.querySelector("#generate");

function assert(condition, message) {
  if (!condition) {
      throw message || "Assertion failed";
  }
}

function randomGenerator(charactersToInclude, passwordLength){
  n_characterTypes = charactersToInclude.length;
  generatedPassword = "";
  var i = 0
  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChars = "!@#$%^&*()/+-'";
  while (i < passwordLength){
    selectedCharacterType = charactersToInclude[i%n_characterTypes];
    switch (selectedCharacterType){
      case "lowercase":
        generatedPassword += lowerCaseChars.charAt(Math.floor(Math.random() * lowerCaseChars.length));
        break;
      case "uppercase":
        generatedPassword += upperCaseChars.charAt(Math.floor(Math.random() * upperCaseChars.length));
        break;    
      case "numeric values":
        generatedPassword += Math.floor(Math.random() * 10);
        break;
      case "special characters":
        generatedPassword += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
        break;
    }
    i++;    
  }

  assert(generatedPassword.length === passwordLength);

  return generatedPassword;
}


function generatePassword()
{
    let passwordLength = parseInt(prompt("Please enter the length of the password", 16));
    if (passwordLength != null) {
      if (passwordLength < 8){
        alert("Password needs to be at least 8 symbols!");
      }
      else if (passwordLength > 128){
        alert("Password needs to be at most 128 symbols!");
      }
      else{
        var characterOptions = ["lowercase", "uppercase", "numeric values", "special characters"]
        var charactersToInclude = []
        for (var i in characterOptions){
          if (confirm(`Would you like you password to contain ${characterOptions[i]}?`)){
            charactersToInclude.push(characterOptions[i])
          }
        }
        if ( charactersToInclude.length === 0){
          alert("At least one character type should be selected!");
        }
        else{
          return randomGenerator(charactersToInclude, passwordLength);
        }
      }

    }
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(passwordText.value)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

