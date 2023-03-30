var generateBtn = document.querySelector("#generate");

function createRndmNumber(length) {
  return Math.floor(Math.random() * length);
}

function generatePassword() {
  // Prompt the user to enter the desired length of the password
  passwordLength = parseInt(prompt("Please enter the length of the password"));

  if (isNaN(passwordLength)) {
    alert("Well, no password for you then!");
    return "";
  }
  // Check that the password length is within the acceptable range (between 8 and 128 characters)
  if (passwordLength < 8) {
    alert("Password needs to be at least 8 symbols!");
    return "";
  }
  if (passwordLength > 128) {
    alert("Password needs to be at most 128 symbols!");
    return "";
  }
  // Define a java cript option of the possible character options
  var characterOptions = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "0123456789",
    special: "~!?@ .|#;$%^&<>,[]=`_*():/+-'\"\\",
  };

  // Initialize an empty array to store the selected character types
  var charactersToInclude = [];
  // Loop through each character option and prompt the user to confirm whether or not to include it in the password
  for (var option of Object.keys(characterOptions)) {
    if (confirm(`Would you like you password to contain ${option}?`)) {
      charactersToInclude.push(option);
    }
  }

  // If the user did not select any character types, alert them and return an empty string
  if (charactersToInclude.length === 0) {
    alert("At least one character type should be selected!");
    return "";
  }
  // generates a password of specified length by randomly selecting characters from the available character types.
  var generatedPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var charType =
      charactersToInclude[createRndmNumber(charactersToInclude.length)];
    generatedPassword += characterOptions[charType].charAt(
      createRndmNumber(characterOptions[charType].length)
    );
  }

  return generatedPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
