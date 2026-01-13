const convertToCelsius = function(fahrenheitTemp) {
  val = ((fahrenheitTemp-32)*5/9)
  if (Number.isInteger(val)){
    return val
  } else{
    return Number(val.toFixed(1))
  }
};

const convertToFahrenheit = function(celsiusTemp) {
  val = ((celsiusTemp*9/5)+32)
  if (Number.isInteger(val)){
    return val
  } else{
    return Number(val.toFixed(1))
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
