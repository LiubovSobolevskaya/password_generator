# Password Generator
3rd hallenge of the UCB Bootcamp 

_______________________

If you need a new password that is secure, click a button to generate one. You will need to choose a length between 8 and 128 characters, and decide whether or not to include lowercase letters, uppercase letters, numbers, and/or special characters. At least one character type must be selected. Once you have answered all the prompts, the input will be validated. Finally, a password will be generated based on the selected criteria and either displayed on the page.

__________________________

## Disclaimer

For the list of special characters I refered to [Wikipedia]( https://en.wikipedia.org/wiki/List_of_special_characters_for_passwords). For this reason, space is included to the list of special charaters. 

```javascript
var specialChars = "~!?@ .|#;$%^&<>,[]=`_*():/+-'\"\\";
```
__________________________
## Code Example
```javascript
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
```
## Technology Used 

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      
* [Git](https://git-scm.com/)     
* [JavaScript](https://www.javascript.com/)

## Mock-Up

Here is the web application's appearance.:
![](./assets/03-javascript-challenge-demo.png)

## Author Info

### Liubov Sobolevkaya
* [LinkedIn](https://www.linkedin.com/in/liubov-sobolevskaya-45756a101/)
* [Github](https://github.com/LiubovSobolevskaya)
* [Kaggle](https://www.kaggle.com/lyubovsobolevskaya)
