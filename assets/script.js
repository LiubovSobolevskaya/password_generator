var generateBtn = document.querySelector("#generate");

function assert(condition) {
  if (!condition) {
      throw "Assertion failed!";
  }
}

function createRndNmr(length){
  return Math.floor(Math.random() *length);
}

function randomGenerator(charactersToInclude, passwordLength){
  nCharacterTypes = charactersToInclude.length;
  var generatedPassword = "";
  var i = 0
  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChars = "~!?@ .|#;$%^&<>,[]=`_*():/+-'\"\\";

  while (i < passwordLength){
    var selectedIdx = createRndNmr(nCharacterTypes)
    var selectedCharacterType = charactersToInclude[selectedIdx];
    switch (selectedCharacterType){
      case "lowercase":
        generatedPassword += lowerCaseChars.charAt(createRndNmr(lowerCaseChars.length));
        break;
      case "uppercase":
        generatedPassword += upperCaseChars.charAt(createRndNmr(upperCaseChars.length));
        break;    
      case "numeric values":
        generatedPassword += createRndNmr(10);
        break;
      case "special characters":
        generatedPassword += specialChars.charAt(createRndNmr(specialChars.length));
        break;
    }
    i++;    
  }

   
  assert(generatedPassword.length == passwordLength);

  return generatedPassword;
}


function generatePassword()
{
    var passwordLength = prompt("Please enter the length of the password");
    if (passwordLength != null) {
      if (passwordLength < 8){
        alert("Password needs to be at least 8 symbols!");
        return "";
      }
      else if (passwordLength > 128){
        alert("Password needs to be at most 128 symbols!");
        return "";
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
          return "";
        }
        else{
          return randomGenerator(charactersToInclude, passwordLength);
        }
      }

    }
    else{
      return "";
    }
}

function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

