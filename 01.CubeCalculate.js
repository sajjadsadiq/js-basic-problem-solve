// Make Cube Of A Provided Number
function cubeFunction(number) {
  // Check if the number is Other Data Type
  if (typeof number !== "number") {
    return "Error: Please Provide A Number..?";
  }
  // Check if the number is not negative
  else if (number < 0) {
    return "Error: Please Provide A Positive Number..?";
  }
  // Number Convert To Cube
  const cube = number * number * number;
  // Return A Result
  return cube;
}
const inputNumber = 4;
const cubeOutput = cubeFunction(inputNumber);

// ---------------- Alternatively  ----------------

// Calculate the cube number using - Math.pow()
function cubeFunctionAlt(number) {
  const cube = Math.pow(number, 3);
  return cube;
}
// Example Usage With A Number
console.log(cubeFunctionAlt(4));
