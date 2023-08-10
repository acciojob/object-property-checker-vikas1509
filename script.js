const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  return key in sampleObject;
}

// Get user input
const userInput = prompt("Enter a key to check:");

// Check if the key exists in the sampleObject
const keyExists = hasKey(userInput);

// Display the result
if (keyExists) {
  console.log(`The key "${userInput}" exists in the sampleObject.`);
} else {
  console.log(`The key "${userInput}" does not exist in the sampleObject.`);
}