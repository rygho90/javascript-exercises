const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  return arr.reduce(
    (prev, curr) => prev + curr, 0)
};

const multiply = function(arr) {
  return arr.reduce(
    (prev, curr) => prev * curr, 1)
};

const power = function(num1, num2) {
	return Math.pow(num1, num2)
};

const factorial = function(num) {
	if (num > 0) {
    let fac = 1
    for (let i = 1; i <= num; i++) {
      fac *= i;
    }
    return fac;
  }
  return 1;
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
