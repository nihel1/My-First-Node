const generatePassword = require('generate-password');

// Function to generate a random password
function generateRandomPassword() {
  const passwordOptions = {
    length: 15,          // Length of the password
    numbers: true,       // Include numbers
    symbols: true,       // Include special symbols
    uppercase: true,     // Include uppercase letters
    strict: true,        // Ensure at least one character from each set (numbers, symbols, uppercase)
  };


  // Generate a password using the specified passwordOptions
  const password = generatePassword.generate(passwordOptions);
  return password;
}

// Call the function to generate a random password and log it
const randomPassword = generateRandomPassword();
console.log('Generated Password:', randomPassword);
