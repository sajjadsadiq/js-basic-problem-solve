function findAddress(obj) {
  const { street, socity, houce } = obj;
  const streetPro = street || "__";
  const socityPro = socity || "__";
  const houcePro = houce || "__";
  const addressStr = streetPro + ", " + socityPro + ", " + houcePro;
  return addressStr;
}
const objInput = {
  street: "12",
};

const findAddressResult = findAddress(objInput);
console.log(findAddressResult);
