function sortMaker(arr) {
  // Check if the element invalid input
  const [a, b] = arr;
  if (a < 0 || b < 0) {
    return "Error: Invalid Input";
  }
  // Array Element Same Value
  else if (a === b) {
    return "equal";
  } 
//   Sorted Descending Order
  else {
    const sorted = arr.sort((a, b) => a - b).reverse();
    return sorted;
  }
}
// Example Usage:
const inputArr = [0, 1];
const sortResult = sortMaker(inputArr);
console.log(sortResult);
