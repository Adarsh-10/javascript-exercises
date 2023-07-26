const convertToCelsius = function() {
  let tempFar = arguments[0];
  let tempCel = (tempFar - 32) * 5.0 / 9;
  return parseFloat(tempCel.toFixed(1));
};

const convertToFahrenheit = function() {
  let tempCel = arguments[0];
  let tempFar = 9.0/5 * tempCel + 32;
  return parseFloat(tempFar.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
