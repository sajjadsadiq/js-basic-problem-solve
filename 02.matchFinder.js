function matchFinder(string1, string2) {
  // Check if the string other data type
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Error: Please Provide A String?";
  }
  //   Check if the match string contains
  const isMatch = string1.includes(string2);
  //   return the result
  return isMatch;
}
const mainString = "Hello World!";
const subString = "llo";
const matchResult = matchFinder(mainString, subString);

// ---------------- Alternatively ----------------

function matchFinderAlt(string1, string2) {
  // Check if the match find data
  const isMatchAlt = string1.indexOf(string2) !== -1
  return isMatchAlt;
}
const mainStringAlt = "Hello World!";
const subStringAlt = "llo";
const matchResultAlt = matchFinderAlt(mainStringAlt, subStringAlt);
console.log(matchResultAlt);
