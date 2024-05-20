//euclids algo for GCD
const euclids = (num1, num2) => {
  let remainder, divisor, dividend;
  if (num1 > num2) {
    dividend = num1;
    divisor = num2;
  } else {
    dividend = num2;
    divisor = num1;
  }

  while (divisor != 0) {
    remainder = dividend % divisor;
    dividend = divisor;
    divisor = remainder;
  }

  return dividend;
};

console.log(euclids(1005, 105));
