var generateBtn = document.querySelector("#generate");

function createRndNumber(length){
  return Math.floor(Math.random() * length)
}

function randomGenerator(charactersToInclude, passwordLength) {
  // Get the number of character types to include based on the length of charactersToInclude
  var n_characterTypes = charactersToInclude.length;

  // Initialize an empty string to store the generated password
  var generatedPassword = "";

  // Initialize a counter variable i to 0
  var i = 0;

  // Define strings containing characters of each type to include in the generated password
  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "~!?@ .|#;$%^&<>,[]=`_*():/+-'\"\\";

  // Loop until the password is the desired length
  while (i < passwordLength) {
    // Select a random character type from the list of character types to include
    var selectedIdx = createRndNumber(n_characterTypes);
    var selectedCharacterType = charactersToInclude[selectedIdx];

    // Generate a random character from the corresponding set of characters based on the selected character type
    if (selectedCharacterType === "lowercase") {
      generatedPassword += lowerCaseChars.charAt(createRndNumber(lowerCaseChars.length));
    } else if (selectedCharacterType === "uppercase") {
      generatedPassword += upperCaseChars.charAt(createRndNumber(upperCaseChars.length));
    } else if (selectedCharacterType === "numeric values") {
      generatedPassword += numericChars.charAt(createRndNumber(numericChars.length));
    } else if (selectedCharacterType === "special characters") {
      generatedPassword += specialChars.charAt(createRndNumber(specialChars.length));
    }

    // Increment the counter variable i
    i++;
  }

  //checks whether the length of the generated password matches the specified passwordLength parameter.
  console.assert(
    generatedPassword.length === passwordLength,
    "The password length is not as required"
  );
  // Return the generated password as a string
  return generatedPassword;
}

function generatePassword() {
  // Prompt the user to enter the desired length of the password
  var passwordLength = prompt("Please enter the length of the password");

  if (passwordLength != null) {
    // Check that the password length is within the acceptable range (between 8 and 128 characters)
    if (passwordLength < 8) {
      alert("Password needs to be at least 8 symbols!");
      return "";
    } else if (passwordLength > 128) {
      alert("Password needs to be at most 128 symbols!");
      return "";
    } else {
      // Define an array of the possible character options
      var characterOptions = [
        "lowercase",
        "uppercase",
        "numeric values",
        "special characters",
      ];

      // Initialize an empty array to store the selected character types
      var charactersToInclude = [];

      // Loop through each character option and prompt the user to confirm whether or not to include it in the password
      for (var i in characterOptions) {
        if (
          confirm(
            `Would you like you password to contain ${characterOptions[i]}?`
          )
        ) {
          charactersToInclude.push(characterOptions[i]);
        }
      }

      // If the user did not select any character types, alert them and return an empty string
      if (charactersToInclude.length === 0) {
        alert("At least one character type should be selected!");
        return "";
      } else {
        // Call the randomGenerator function with the selected character types and the specified password length, and return the result
        return randomGenerator(charactersToInclude, parseInt(passwordLength));
      }
    }
  } else {
    // If the user cancels the prompt or enters nothing, return an empty string
    return "";
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
