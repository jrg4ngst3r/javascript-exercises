const add = function (val1, val2) {
  return val1 + val2;
};

const subtract = function (val1, val2) {
  return val1 - val2;
};

const sum = function (val) {
  let res = 0;
  if (Array.isArray(val)) {
    val.forEach((el) => {
      res += el;
    });
  }

  return res;
};

const multiply = function (val) {
  let res = 1;
  if (Array.isArray(val)) {
    val.forEach((el) => {
      res *= el;
    });
  }

  return res;
};

const power = function (val1, exp) {
  return Math.pow(val1, exp);
};

const factorial = function (val1) {
  return val1 === 0 ? 1 : val1 * factorial(val1 - 1);
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
