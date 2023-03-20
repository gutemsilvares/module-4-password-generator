//Minimum characteres input
var charactLength = 8;

// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

// Function to prompt user for password options
function getPasswordOptions() {
  choices = [];
  charactLength = parseInt(prompt('How many carac of the password?'));

  if (isNaN(charactLength) || charactLength < 8 || charactLength > 128) {
    alert('Password must be 8-128 characteres');
    return false;
  }

  if (confirm('Do want password Lowercase?')) {
    choices = choices.concat(lowerCasedCharacters);
  }
  if (confirm('Do want password Uppercase?')) {
    choices = choices.concat(upperCasedCharacters);
  }
  if (confirm('Do want password Numeric?')) {
    choices = choices.concat(numericCharacters);
  }
  if (confirm('Do want password Special?')) {
    choices = choices.concat(specialCharacters);
  }
  return true;
}

// Function to generate password with user input
function generatePassword() {
  var password = '';

  for (var i = 0; i < charactLength; i++) {
    var randomIndex = Math.floor(Math.random() * choices.length);
    password += choices[randomIndex];
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var correctPass = getPasswordOptions();

  if (correctPass) {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
  } else {
    passwordText.value = '';
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
