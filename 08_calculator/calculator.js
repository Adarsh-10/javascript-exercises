const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce (
    (acc, num) => acc + num,
    0,
  );
};

const multiply = function() {
  return Array.from(arguments).reduce (
    (acc, num) => acc * num,
    1,
  );
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(a) {
  if (a == 0) return 1;
  let res = a;
  for (let i = a - 1; i > 0; i--) {
    res = res * i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
