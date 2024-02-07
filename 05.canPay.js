function canPay(changeArr, totalDue) {
  if (Array.isArray(changeArr) !== "array") {
    return "Error: Please Provide An Array?";
  }
  let changeArrSum = 0;
  for (const change of changeArr) {
    changeArrSum += change;
  }
  if (changeArrSum >= totalDue) {
    return true;
  } else {
    return false;
  }
}
const changeArr = 3;
const totalDue = 10;
const canPayResult = canPay(changeArr, totalDue);
console.log(canPayResult);
