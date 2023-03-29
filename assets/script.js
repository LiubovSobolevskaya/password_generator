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


function randomGenerator(charactersToInclude, passwordLength){
  
  var nCharacterTypes = charactersToInclude.length;

  var generatedPassword = "";

  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChars = "~!?@ .|#;$%^&<>,[]=`_*():/+-'\"\\";
  
  var i = 0

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

function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

